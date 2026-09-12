import { useState } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { requirementTypes, propertyCategories, industries } from "./data";
import MobileStepHeader from "../../components/MobileStepHeader";
import type { Step1Data } from "../index";

interface Step1MobileProps {
  onNext: () => void;
  onBack?: () => void;
  step1Data: Step1Data;
  setStep1Data: (data: Step1Data | ((prev: Step1Data) => Step1Data)) => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Step1Mobile({ onNext, onBack, step1Data, setStep1Data }: Step1MobileProps) {
  const [error, setError] = useState<string | null>(null);
  const { reqType, reqName, propCategory, selectedIndustries } = step1Data;

  const handleNext = () => {
    if (!reqType) {
      setError("Please select what you are selling.");
      return;
    }
    if (!reqName.trim()) {
      setError("Please enter a requirement name.");
      return;
    }
    if (reqType === "sell_property" || reqType === "lease_property") {
      if (!propCategory) {
        setError("Please select a property type.");
        return;
      }
    }
    if (reqType === "franchise_opportunity" || reqType === "sell_existing_business") {
      if (selectedIndustries.length === 0) {
        setError("Please select at least one industry.");
        return;
      }
    }
    setError(null);
    onNext();
  };

  const toggleIndustry = (id: string) => {
    setStep1Data((prev) => ({
      ...prev,
      selectedIndustries: prev.selectedIndustries.includes(id) 
        ? prev.selectedIndustries.filter((i) => i !== id) 
        : [...prev.selectedIndustries, id]
    }));
  };

  return (
    <div className="h-full min-h-full w-full bg-[#fafafb] dark:bg-[#060e24] text-[#0a1128] dark:text-white font-['Outfit',sans-serif] flex flex-col relative overflow-hidden">
      
      
      <MobileStepHeader currentStep={1} totalSteps={5} onBack={onBack} title="List Your Property" />

      
      <main className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-5 p-4 pb-28">
        
        
        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">What are you selling?</h3>
          <p className="text-[12px] text-gray-400 dark:text-white/40 mb-2 font-medium">Select the type of requirement you want to list.</p>
          <div className="grid grid-cols-2 gap-3">
            {requirementTypes.map((type, i) => {
              const isSelected = reqType === type.id;
              const Icon = type.icon;
              return (
                <motion.button
                  key={type.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  onClick={() => setStep1Data((prev) => ({ ...prev, reqType: type.id }))}
                  className={`flex flex-col items-center justify-center gap-3 p-4 rounded border-2 transition-all duration-300 text-center ${
                    isSelected
                      ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08] shadow-[0_4px_16px_rgba(212,175,55,0.15)]"
                      : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42]"
                  }`}
                >
                  <div className={`w-10 h-10 rounded flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-br from-[#d4af37] to-[#b8903c] text-white shadow-[0_4px_12px_rgba(212,175,55,0.3)]"
                      : "bg-[#0a1128]/[0.04] dark:bg-white/[0.06] text-[#0a1128]/60 dark:text-white/50"
                  }`}>
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <span className={`text-[12px] font-bold leading-tight ${
                    isSelected ? "text-[#0a1128] dark:text-white" : "text-[#0a1128]/70 dark:text-white/60"
                  }`}>
                    {type.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        
        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
          <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">Requirement Name</h3>
          <p className="text-[12px] text-gray-400 dark:text-white/40 mb-2 font-medium">Give a name to easily identify this.</p>
          <input 
            type="text" 
            placeholder="e.g. 2000 sqft retail space"
            value={reqName}
            onChange={(e) => setStep1Data((prev) => ({ ...prev, reqName: e.target.value }))}
            className="w-full p-4 rounded border-2 border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 text-[14px] placeholder:text-gray-300 dark:placeholder:text-white/25 font-medium"
          />
        </motion.div>

        
        {(reqType === "sell_property" || reqType === "lease_property") && (
          <motion.div {...fadeUp} transition={{ delay: 0.25 }}>
            <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">What type of property?</h3>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {propertyCategories.map((cat, i) => {
                const isSelected = propCategory === cat.id;
                const Icon = cat.icon;
                return (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.04 }}
                    onClick={() => setStep1Data((prev) => ({ ...prev, propCategory: cat.id }))}
                    className={`flex items-center gap-3 p-3.5 rounded border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08]"
                        : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42]"
                    }`}
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "bg-gradient-to-br from-[#d4af37] to-[#b8903c] text-white shadow-sm"
                        : "bg-[#0a1128]/[0.04] dark:bg-white/[0.06] text-[#0a1128]/50 dark:text-white/40"
                    }`}>
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <span className={`text-[12px] font-bold leading-tight ${
                      isSelected ? "text-[#0a1128] dark:text-white" : "text-[#0a1128]/60 dark:text-white/50"
                    }`}>
                      {cat.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        
        {(reqType === "franchise_opportunity" || reqType === "sell_existing_business") && (
          <motion.div {...fadeUp} transition={{ delay: 0.25 }}>
            <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">Select Industry</h3>
            <p className="text-[12px] text-gray-400 dark:text-white/40 mb-2 font-medium">Select industries of interest</p>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind, i) => {
                const isSelected = selectedIndustries.includes(ind.id);
                return (
                  <motion.button
                    key={ind.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.03 }}
                    onClick={() => toggleIndustry(ind.id)}
                    className={`px-4 py-2 rounded-full border-2 transition-all duration-300 text-[12px] font-semibold ${
                      isSelected
                        ? "border-[#d4af37] bg-[#d4af37]/10 dark:bg-[#d4af37]/15 text-[#d4af37]"
                        : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128]/60 dark:text-white/50"
                    }`}
                  >
                    {ind.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

      </main>

      
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="bg-gradient-to-t from-[#fafafb] dark:from-[#060e24] via-[#fafafb]/90 dark:via-[#060e24]/90 to-transparent pt-4 pb-4 px-4">
          <div className="flex flex-col gap-3">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 10, height: 0 }}
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 px-4 py-3 rounded flex items-center gap-3 shadow-lg"
                >
                  <AlertCircle size={16} className="shrink-0" />
                  <span className="text-[12px] font-semibold">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="w-full py-4 rounded font-bold text-[15px] flex items-center justify-center gap-2 text-white shadow-[0_8px_24px_rgba(10,17,40,0.2)]"
              style={{ background: "linear-gradient(135deg, #0a1128 0%, #1a3463 100%)" }}
            >
              Continue
              <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                <ArrowRight size={14} className="text-[#d4af37]" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

    </div>
  );
}
