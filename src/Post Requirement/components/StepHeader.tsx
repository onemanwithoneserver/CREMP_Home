import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";

interface StepHeaderProps {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
}

const STEP_LABELS = ["Basics", "Details", "Location", "Preferences", "Review"];

export default function StepHeader({ currentStep, totalSteps, onBack }: StepHeaderProps) {
  return (
    <div className="w-full">
      {/* Navy gradient header */}
      <div className="bg-gradient-to-r from-[#0a1128] via-[#111d3a] to-[#0a1128] px-6 py-4">
        <div className="max-w-4xl mx-auto">
          {/* Top row: back + title */}
          <div className="flex items-center gap-4 mb-5">
            {onBack && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="w-9 h-9 flex items-center justify-center rounded bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-white/15 hover:text-white transition-all duration-200"
              >
                <ArrowLeft size={18} />
              </motion.button>
            )}
            <h2 className="text-[15px] font-bold text-white/90 tracking-wide font-['Outfit',sans-serif]">
              Step {currentStep} of {totalSteps}
            </h2>
          </div>

          {/* Step indicator circles with connecting lines */}
          <div className="flex items-center justify-between relative">
            {/* Background connecting line */}
            <div className="absolute top-4 left-4 right-4 h-[2px] bg-white/10" />
            {/* Animated progress line */}
            <motion.div
              className="absolute top-4 left-4 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f3cd52]"
              initial={{ width: 0 }}
              animate={{
                width: `calc(${((currentStep - 1) / (totalSteps - 1)) * 100}% - ${currentStep === totalSteps ? 0 : 0}px)`,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ maxWidth: "calc(100% - 32px)" }}
            />

            {Array.from({ length: totalSteps }).map((_, i) => {
              const stepNum = i + 1;
              const isCompleted = stepNum < currentStep;
              const isActive = stepNum === currentStep;

              return (
                <div key={i} className="flex flex-col items-center z-10 relative">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.06, type: "spring", stiffness: 400, damping: 25 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold font-['Outfit',sans-serif] transition-all duration-300 ${
                      isCompleted
                        ? "bg-[#d4af37] text-[#0a1128] shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                        : isActive
                        ? "bg-white text-[#0a1128] shadow-[0_0_16px_rgba(255,255,255,0.25)]"
                        : "bg-white/10 text-white/40 border border-white/10"
                    }`}
                  >
                    {isCompleted ? <Check size={14} strokeWidth={3} /> : stepNum}
                  </motion.div>
                  <span
                    className={`mt-2 text-[10px] font-semibold tracking-wider uppercase font-['Outfit',sans-serif] transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : isCompleted
                        ? "text-[#d4af37]/80"
                        : "text-white/30"
                    }`}
                  >
                    {STEP_LABELS[i] || `Step ${stepNum}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
