
import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 5,
  blurStrength = 10,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word inline-block" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller: scroller,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    });

    tl.fromTo(
      wordElements,
      {
        opacity: baseOpacity,
        rotation: baseRotation,
        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
      },
      {
        opacity: 1,
        rotation: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
  ]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <div className={`leading-relaxed ${textClassName}`}>
        {splitText}
      </div>
    </div>
  );
};

export default ScrollReveal;
