import { useState } from "react";
import StepHeader from "../../components/StepHeader";
import SubmitButton from "../../components/SubmitButton";
import { reviewData } from "./data";
import { 
  Home, FileText, Target, Grid, Wallet, Layout, 
  MapPin, ChevronDown, List, Shield 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Step5DesktopProps {
  onSubmit: () => void;
  onBack: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Home, FileText, Target, Grid, Wallet, Layout, MapPin
};

export default function Step5Desktop({ onSubmit, onBack }: Step5DesktopProps) {
  const [advancedOpen, setAdvancedOpen] = useState(false);

  return (
    <div className="h-full min-h-full w-full bg-[#fafafb] dark:bg-[#060e24] text-[#0a1128] dark:text-white font-['Outfit',sans-serif] flex flex-col items-center overflow-y-auto scrollbar-hide pb-16">
      <div className="w-full">
        <StepHeader currentStep={5} totalSteps={5} onBack={onBack} />
      </div>

      <main className="w-full max-w-3xl px-8 flex flex-col gap-8 mt-10">
        
        {/* Heading */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-[26px] font-extrabold mb-2 text-[#0a1128] dark:text-white tracking-tight">
            Review your{" "}
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f3cd52] bg-clip-text text-transparent">requirement</span>
          </h3>
          <p className="text-[13px] text-gray-400 dark:text-white/40 font-semibold uppercase tracking-wider">Please review the details before submitting</p>
        </motion.div>

        {/* Review card */}
        <motion.div 
          className="bg-white dark:bg-[#0b1b42] rounded border border-[#0a1128]/8 dark:border-white/10 shadow-[0_4px_24px_rgba(10,17,40,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="absolute top-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

          {reviewData.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + idx * 0.05 }}
                className={`flex items-center justify-between px-7 py-5 hover:bg-[#0a1128]/[0.02] dark:hover:bg-white/[0.02] transition-colors ${idx !== reviewData.length - 1 ? "border-b border-[#0a1128]/5 dark:border-white/5" : ""}`}
              >
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 rounded bg-[#d4af37]/8 dark:bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/10">
                    {Icon && <Icon size={18} className="text-[#d4af37]" />}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#0a1128] dark:text-white">{item.label}</div>
                    <div className="text-[12px] text-gray-400 dark:text-white/40 mt-0.5 font-medium">{item.value}</div>
                  </div>
                </div>
                {item.isEdit ? (
                  <button className="text-[12px] font-bold text-[#d4af37] px-4 py-2 rounded-sm border border-[#d4af37]/30 hover:bg-[#d4af37]/5 transition-colors">
                    Edit
                  </button>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-[#0a1128]/[0.04] dark:bg-white/[0.06] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M3 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gray-300 dark:text-white/20" /></svg>
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Advanced Preferences */}
          <div className="border-t border-[#0a1128]/5 dark:border-white/5 px-7 py-5 bg-[#0a1128]/[0.015] dark:bg-white/[0.02]">
            <button 
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="flex items-center justify-between w-full hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded bg-[#0a1128]/[0.04] dark:bg-white/[0.06] flex items-center justify-center border border-[#0a1128]/5 dark:border-white/8">
                  <List size={18} className="text-[#0a1128]/50 dark:text-white/40" />
                </div>
                <div className="text-left">
                  <div className="text-[14px] font-bold text-[#0a1128] dark:text-white">Advanced Preferences (Optional)</div>
                  <div className="text-[12px] text-gray-400 dark:text-white/40 mt-0.5 font-medium">Property Status, Funding, Notes etc.</div>
                </div>
              </div>
              <ChevronDown size={18} className={`text-gray-400 dark:text-white/30 transition-transform duration-300 ${advancedOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {advancedOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-5 pl-16 text-[13px] text-[#0a1128]/60 dark:text-white/50 flex flex-col gap-2 font-medium">
                    <p><strong className="text-[#0a1128] dark:text-white">Project Status:</strong> Ready to Move</p>
                    <p><strong className="text-[#0a1128] dark:text-white">Funding:</strong> Self funding only</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SubmitButton onSubmit={onSubmit} />
        </motion.div>

        {/* Security footer */}
        <motion.div 
          className="flex items-center gap-3 justify-center pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-6 h-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
            <Shield size={12} className="text-[#d4af37]" />
          </div>
          <p className="text-[11px] text-gray-400 dark:text-white/30 font-medium">
            Your details are secure and will only be shared with relevant stakeholders.
          </p>
        </motion.div>

      </main>
    </div>
  );
}
