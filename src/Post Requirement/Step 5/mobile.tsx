import { useState } from "react";
import StepHeader from "../components/StepHeader";
import SubmitButton from "../components/SubmitButton";
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

      <main className="p-5 flex flex-col gap-6 bg-white pb-6">
        
        <div>
          <h3 className="text-[20px] font-bold mb-1">Review your requirement</h3>
          <p className="text-[13px] text-gray-500 font-medium">Please review the details before submitting.</p>
        </div>

        <div className="border border-gray-100 rounded-3xl shadow-sm overflow-hidden bg-white">
          {reviewData.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div 
                key={item.id} 
                className={`flex items-center justify-between p-4 ${idx !== reviewData.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-gray-600">
                    {Icon && <Icon size={20} />}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#0a1128]">{item.label}</div>
                    <div className="text-[13px] text-gray-400 mt-0.5">{item.value}</div>
                  </div>
                </div>
                {item.isEdit ? (
                  <button className="text-[13px] font-bold text-[#d4af37]">Edit</button>
                ) : (
                  <ChevronRight size={18} className="text-gray-300" />
                )}
              </div>
            );
          })}

          <div className="border-t border-gray-100 p-4 bg-white rounded-b-3xl">
            <button 
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-4">
                <div className="text-gray-600">
                  <List size={20} />
                </div>
                <div className="text-left">
                  <div className="text-[14px] font-bold text-[#0a1128]">Advanced Preferences (Optional)</div>
                  <div className="text-[13px] text-gray-400 mt-0.5">Property Status, Funding, Notes etc.</div>
                </div>
              </div>
              <ChevronDown size={18} className={`text-gray-400 transition-transform ${advancedOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {advancedOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 text-[13px] text-gray-500">
                    <p><strong>Project Status:</strong> Ready to Move</p>
                    <p><strong>Funding:</strong> Self funding only</p>
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
          <Lock size={14} className="text-gray-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-400 leading-relaxed font-medium text-center">
            Your details are secure and will only be shared with relevant stakeholders.
          </p>
        </div>

      </main>
    </div>
  );
}
