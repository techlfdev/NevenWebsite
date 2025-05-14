
import React, {
  useState,
  Children,
  useRef,
  useLayoutEffect,
  HTMLAttributes,
  ReactNode,
} from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  className?: string;
}

export function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  className,
  ...rest
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const [direction, setDirection] = useState<number>(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div className={cn("w-full", className)} {...rest}>
      <div className="mb-8 flex w-full items-center justify-between">
        {stepsArray.map((_, index) => {
          const stepNumber = index + 1;
          const isNotLastStep = index < totalSteps - 1;
          return (
            <React.Fragment key={stepNumber}>
              <StepIndicator
                step={stepNumber}
                currentStep={currentStep}
                onClickStep={(clicked) => {
                  setDirection(clicked > currentStep ? 1 : -1);
                  updateStep(clicked);
                }}
              />
              {isNotLastStep && (
                <StepConnector isComplete={currentStep > stepNumber} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <StepContentWrapper
        isCompleted={isCompleted}
        currentStep={currentStep}
        direction={direction}
        className="min-h-[300px] py-8"
      >
        {stepsArray[currentStep - 1]}
      </StepContentWrapper>

      {!isCompleted && (
        <div className="mt-8 flex justify-between">
          {currentStep !== 1 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBack}
              className="rounded-xl bg-gray-100 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-200"
            >
              Voltar
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={isLastStep ? handleComplete : handleNext}
            className="ml-auto rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            {isLastStep ? "Finalizar" : "Próximo"}
          </motion.button>
        </div>
      )}
    </div>
  );
}

function StepContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className,
}: {
  isCompleted: boolean;
  currentStep: number;
  direction: number;
  children: ReactNode;
  className?: string;
}) {
  const [parentHeight, setParentHeight] = useState<number>(0);

  return (
    <motion.div
      style={{ position: "relative", overflow: "hidden" }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: "spring", duration: 0.4 }}
      className={className}
    >
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        {!isCompleted && (
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            onLayoutMeasure={(height) => setParentHeight(height)}
            className="absolute left-0 right-0 top-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const stepVariants: Variants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

function StepIndicator({
  step,
  currentStep,
  onClickStep,
}: {
  step: number;
  currentStep: number;
  onClickStep: (clicked: number) => void;
}) {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <motion.div
      onClick={() => step !== currentStep && onClickStep(step)}
      className="relative cursor-pointer"
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: {
            scale: 1,
            backgroundColor: "#f3f4f6",
            borderColor: "#d1d5db",
          },
          active: {
            scale: 1.1,
            backgroundColor: "#2563eb",
            borderColor: "#2563eb",
          },
          complete: {
            scale: 1,
            backgroundColor: "#34d399",
            borderColor: "#34d399",
          },
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border-2",
          status === "active" && "text-white",
          status === "complete" && "text-white",
          status === "inactive" && "text-gray-400"
        )}
      >
        {status === "complete" ? (
          <CheckIcon className="h-6 w-6" />
        ) : (
          <span className="text-lg font-medium">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }: { isComplete: boolean }) {
  return (
    <div className="relative h-0.5 flex-1 overflow-hidden rounded bg-gray-200">
      <motion.div
        className="absolute left-0 top-0 h-full bg-blue-600"
        initial={{ width: 0 }}
        animate={{ width: isComplete ? "100%" : 0 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

export interface StepProps {
  children: ReactNode;
}

export function Step({ children }: StepProps) {
  return <div className="h-full">{children}</div>;
}
