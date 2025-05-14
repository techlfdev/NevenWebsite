
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface StepperProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

const Stepper = ({ steps, currentStep, className }: StepperProps) => {
  return (
    <div className={cn("flex justify-between w-full max-w-3xl mx-auto", className)}>
      {steps.map((step, index) => {
        const isCompleted = currentStep > index;
        const isCurrent = currentStep === index;

        return (
          <div key={step} className="flex items-center">
            <motion.div className="flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center font-medium transition-colors",
                  isCompleted ? "bg-emerald-500 text-white" : isCurrent ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                )}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">{step}</span>
            </motion.div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-[2px] w-24 mx-4",
                  isCompleted ? "bg-emerald-500" : "bg-gray-200"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export { Stepper };
