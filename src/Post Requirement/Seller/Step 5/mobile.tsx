import { useState } from "react";
import StepHeader from "../../components/StepHeader";
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

export default function Step5Mobile({ onSubmit, onBack }: Step5MobileProps) {
  const [advancedOpen, setAdvancedOpen] = useState(false);

  return (
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans pb-8">
      <StepHeader currentStep={5} totalSteps={5} onBack={onBack} />

      <main className="p-4 flex flex-col gap-6">
        
        <div>
          <h3 className="text-[18px] font-bold mb-1 text-[#0a1128]">Review your requirement</h3>
          <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">Please review the details before submitting</p>
        </div>

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
          {reviewData.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div 
                key={item.id} 
                className={`flex items-center justify-between p-4 ${idx !== reviewData.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-[#d4af37]">
                    {Icon && <Icon size={18} />}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#0a1128]">{item.label}</div>
                    <div className="text-[12px] text-gray-500 mt-0.5">{item.value}</div>
                  </div>
                </div>
                {item.isEdit ? (
                  <button className="text-[12px] font-bold text-[#d4af37]">Edit</button>
                ) : (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
              </div>
            );
          })}

          <div className="border-t border-gray-100 p-4 bg-gray-50/50">
            <button 
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-4">
                <div className="text-gray-500">
                  <List size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[13px] font-bold text-[#0a1128]">Advanced Preferences (Optional)</div>
                  <div className="text-[12px] text-gray-500 mt-0.5">Property Status, Funding, Notes etc.</div>
                </div>
              </div>
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${advancedOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {advancedOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 pb-2 text-[12px] text-gray-600 flex flex-col gap-1.5 pl-[34px]">
                    <p><strong className="text-gray-800">Project Status:</strong> Ready to Move</p>
                    <p><strong className="text-gray-800">Funding:</strong> Self funding only</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4">
          <SubmitButton onSubmit={onSubmit} />
        </div>

        <div className="flex items-start gap-3 px-2 justify-center mt-2">
          <Lock size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
          <p className="text-[10px] text-gray-500 leading-relaxed font-medium text-center uppercase tracking-wider">
            Your details are secure and will only be shared with relevant stakeholders.
          </p>
        </div>

      </main>
    </div>
  );
}
