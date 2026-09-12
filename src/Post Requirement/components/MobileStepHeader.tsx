import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface MobileStepHeaderProps {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  title?: string;
}

export default function MobileStepHeader({ currentStep, totalSteps, onBack, title }: MobileStepHeaderProps) {
  return (
    <div className="w-full bg-[#0a1128] text-white shadow-[0_4px_16px_rgba(10,17,40,0.12)] relative overflow-hidden shrink-0 z-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col relative z-10 pt-safe">
        <div className="flex items-center px-4 relative h-14">
          {onBack && (
            <button
              onClick={onBack}
              className="w-9 h-9 flex items-center justify-center rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors absolute left-4"
            >
              <ArrowLeft size={16} className="text-white" />
            </button>
          )}
          <div className="flex flex-col items-center w-full">
            {title && <h2 className="text-[14px] font-bold text-center">{title}</h2>}
            <span className="text-[11px] font-medium text-white/50">Step {currentStep} of {totalSteps}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-5 pb-3 pt-1">
          {Array.from({ length: totalSteps }).map((_, i) => {
            const stepNum = i + 1;
            const isActive = stepNum === currentStep;
            const isCompleted = stepNum < currentStep;

            return (
              <div key={i} className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden relative">
                {(isCompleted || isActive) && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className={`absolute top-0 left-0 bottom-0 ${isCompleted ? 'bg-[#d4af37]' : 'bg-gradient-to-r from-[#d4af37] to-[#f3cd52]'}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
