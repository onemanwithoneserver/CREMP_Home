import { useState } from "react";
import MobileStepHeader from "../../components/MobileStepHeader";
import SubmitButton from "../../components/SubmitButton";
import { reviewData } from "./data";
import { 
  Home, FileText, Target, Grid, Wallet, Layout, 
  MapPin, ChevronRight, ChevronDown, List, Lock 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Step5MobileProps {
  onSubmit: () => void;
  onBack: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Home, FileText, Target, Grid, Wallet, Layout, MapPin
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Step5Mobile({ onSubmit, onBack }: Step5MobileProps) {
  const [advancedOpen, setAdvancedOpen] = useState(false);

  return (
    <div className="h-full min-h-full w-full bg-[#fafafb] dark:bg-[#060e24] text-[#0a1128] dark:text-white font-['Outfit',sans-serif] flex flex-col relative overflow-hidden">
      
      {/* ── Fixed Mobile Header ── */}
      <MobileStepHeader currentStep={5} totalSteps={5} onBack={onBack} title="Review & Submit" />

      {/* ── Scrollable Content ── */}
      <main className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-6 p-5 pb-32">
        
        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Review your requirement</h3>
          <p className="text-[12px] text-gray-400 dark:text-white/40 font-medium">Please review the details before submitting</p>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="bg-white dark:bg-[#0b1b42] rounded border border-[#0a1128]/8 dark:border-white/10 shadow-[0_4px_24px_rgba(10,17,40,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] overflow-hidden">
          {reviewData.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div 
                key={item.id} 
                className={`flex items-center justify-between p-4 ${idx !== reviewData.length - 1 ? "border-b border-[#0a1128]/5 dark:border-white/5" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-[#d4af37] w-8 h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0">
                    {Icon && <Icon size={16} />}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#0a1128] dark:text-white">{item.label}</div>
                    <div className="text-[12px] text-gray-500 dark:text-white/50 mt-0.5">{item.value}</div>
                  </div>
                </div>
                {item.isEdit ? (
                  <button className="text-[12px] font-bold text-[#d4af37] hover:underline">Edit</button>
                ) : (
                  <ChevronRight size={16} className="text-gray-400 dark:text-white/40" />
                )}
              </div>
            );
          })}

          <div className="border-t border-[#0a1128]/5 dark:border-white/5 p-4 bg-[#0a1128]/[0.02] dark:bg-white/[0.02]">
            <button 
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-4">
                <div className="text-gray-500 dark:text-white/50 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <List size={16} />
                </div>
                <div className="text-left">
                  <div className="text-[13px] font-bold text-[#0a1128] dark:text-white">Advanced Preferences <span className="font-normal text-gray-400 dark:text-white/40">(Optional)</span></div>
                  <div className="text-[12px] text-gray-500 dark:text-white/50 mt-0.5">Project Status, Funding, Notes etc.</div>
                </div>
              </div>
              <ChevronDown size={16} className={`text-gray-400 dark:text-white/40 transition-transform ${advancedOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {advancedOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 pb-2 text-[12px] text-[#0a1128]/70 dark:text-white/70 flex flex-col gap-2 pl-[48px]">
                    <p><strong className="text-[#0a1128] dark:text-white">Project Status:</strong> Ready to Move</p>
                    <p><strong className="text-[#0a1128] dark:text-white">Funding:</strong> Self funding only</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="mt-4">
          <SubmitButton onSubmit={onSubmit} />
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.25 }} className="flex items-start gap-3 px-2 justify-center mt-2">
          <Lock size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-500 dark:text-white/50 leading-relaxed font-medium text-center">
            Your details are secure and will only be shared with relevant stakeholders.
          </p>
        </motion.div>

      </main>
    </div>
  );
}
