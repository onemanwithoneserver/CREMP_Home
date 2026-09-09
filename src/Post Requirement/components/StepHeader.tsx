import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface StepHeaderProps {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
}

export default function StepHeader({ currentStep, totalSteps, onBack }: StepHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between p-4 bg-white shadow-sm border-b border-gray-100">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-[16px] font-bold text-[#0a1128]">
          Step {currentStep} of {totalSteps}
        </h2>
        <div className="w-10" />
      </div>

      <div className="flex items-center gap-2 px-6">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: i < currentStep ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
              className={`absolute top-0 left-0 bottom-0 ${i < currentStep ? "bg-[#d4af37]" : "bg-transparent"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
