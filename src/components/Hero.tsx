import React, { useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import PlatformDemo from "./hero/PlatformDemo";
import StatsSection from "./hero/StatsSection";
import StarBorder from "./StarBorder";

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen pt-20 pb-32 overflow-hidden bg-[#F9F6F3]">
      <AnimatedBackground />

      <div className="container-section relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="mb-6">
            <StarBorder
              as="div"
              className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white"
              color="#1a365d"
              speed="5s"
            >
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, y: -50, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.2, 1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <Zap className="w-4 h-4 mr-2" />
                </motion.div>
                <span className="text-sm font-medium font-inter tracking-wide">
                  Automatize Seus Processos
                </span>
              </motion.div>
            </StarBorder>
          </div>

          <motion.h1
            variants={itemVariants}
            className="font-coolvetica font-bold text-5xl md:text-5xl lg:text-7xl tracking-tight max-w-4xl mx-auto mb-6 text-convrt-dark-blue leading-[0.85] md:leading-[0.95] flex flex-wrap items-center justify-center gap-2"
          >
            Do <span className="text-[#EA384C] font-extrabold">Manual</span> ao{" "}
            <span className="relative bg-gradient-to-r from-[#1a365d] to-[#0047AB] bg-clip-text text-transparent font-extrabold">
              Inteligente.
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-inter text-xl text-convrt-dark-blue/80 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Transformamos sua Empresa com Automação Inteligente, Sistemas
            Personalizados e Websites de Alto Impacto.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
          >
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="button-primary flex items-center group font-inter font-medium"
            >
              Fale Conosco
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="button-outline font-inter"
            >
              Ver Mais
            </a>
          </motion.div>

          <motion.div ref={demoRef} variants={itemVariants}>
            <PlatformDemo />
          </motion.div>
        </motion.div>
      </div>

      <div className="container-section relative z-10 mt-32">
        <StatsSection statsRef={statsRef} />
      </div>
    </section>
  );
};

export default Hero;
