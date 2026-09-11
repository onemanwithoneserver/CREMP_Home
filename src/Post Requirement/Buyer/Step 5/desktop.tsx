import { useState } from "react";
import StepHeader from "../../components/StepHeader";
import SubmitButton from "../../components/SubmitButton";
import { reviewData } from "./data";
import { 
  Home, FileText, Target, Grid, Wallet, Layout, 
  MapPin, ChevronRight, ChevronDown, List, Lock 
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
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans flex flex-col items-center pb-10">
      <div className="w-full">
        <StepHeader currentStep={5} totalSteps={5} onBack={onBack} />
      </div>

      <main className="w-full max-w-3xl flex flex-col gap-8 mt-12">
        
        <div className="text-center">
          <h3 className="text-[24px] font-bold mb-2 text-[#0a1128]">Review your requirement</h3>
          <p className="text-[13px] text-gray-500 font-medium uppercase tracking-wider">Please review the details before submitting</p>
        </div>

        <div className="bg-white rounded-[4px] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden relative">
          <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

          {reviewData.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div 
                key={item.id} 
                className={`flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${idx !== reviewData.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex items-center gap-6">
                  <div className="text-[#d4af37] w-12 h-12 rounded-[4px] bg-orange-50/50 flex items-center justify-center border border-[#d4af37]/10 shadow-sm">
                    {Icon && <Icon size={22} />}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#0a1128]">{item.label}</div>
                    <div className="text-[13px] text-gray-500 mt-1">{item.value}</div>
                  </div>
                </div>
                {item.isEdit ? (
                  <button className="text-[13px] font-bold text-white bg-[#d4af37] px-4 py-2 rounded-[4px] hover:bg-[#aa8922] transition-colors shadow-sm">Edit</button>
                ) : (
                  <ChevronRight size={18} className="text-gray-400" />
                )}
              </div>
            );
          })}

          <div className="border-t border-gray-100 p-6 bg-gray-50/50">
            <button 
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="flex items-center justify-between w-full hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-6">
                <div className="text-gray-500 w-12 h-12 rounded-[4px] bg-white flex items-center justify-center border border-gray-200 shadow-sm">
                  <List size={22} />
                </div>
                <div className="text-left">
                  <div className="text-[15px] font-bold text-[#0a1128]">Advanced Preferences (Optional)</div>
                  <div className="text-[13px] text-gray-500 mt-1">Property Status, Funding, Notes etc.</div>
                </div>
              </div>
              <ChevronDown size={20} className={`text-gray-400 transition-transform ${advancedOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {advancedOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 pl-[88px] text-[14px] text-gray-600 flex flex-col gap-2">
                    <p><strong className="text-gray-800">Project Status:</strong> Ready to Move</p>
                    <p><strong className="text-gray-800">Funding:</strong> Self funding only</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <SubmitButton onSubmit={onSubmit} />

        <div className="flex items-center gap-3 justify-center">
          <Lock size={14} className="text-[#d4af37]" />
          <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">
            Your details are secure and will only be shared with relevant stakeholders.
          </p>
        </div>

      </main>
    </div>
  );
}
