import { useState } from "react";
import ModernSelect from "../../components/ModernSelect";

import MobileStepHeader from "../../components/MobileStepHeader";
import { purposes, budgetRanges, sizeRanges, sizeRangesYards, dailyOperations } from "./data";
import { requirementTypes, propertyCategories, industries } from "../Step 1/data";
import { Layers, Building, ArrowRight, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Step1Data, Step2Data } from "../index";

interface Step2MobileProps {
  onNext: () => void;
  onBack: () => void;
  step1Data: Step1Data;
  step2Data: Step2Data;
  setStep2Data: React.Dispatch<React.SetStateAction<Step2Data>>;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Step2Mobile({ onNext, onBack, step1Data, step2Data, setStep2Data }: Step2MobileProps) {
  const [error, setError] = useState<string | null>(null);
  const { purpose, budget, size, leaseMonth, dailyOp } = step2Data;
  const updateStep2Data = (field: keyof Step2Data, value: string) => {
    setStep2Data(prev => ({ ...prev, [field]: value }));
  };
  
  const { reqType, propCategory, selectedIndustries } = step1Data;

  const isBuyOrSellProp = reqType === "buy_property" || reqType === "sell_property";
  const isLease = reqType === "lease_property";
  const isFranchise = reqType === "franchise_opportunity";
  const isBusiness = reqType === "buy_existing_business" || reqType === "sell_existing_business";
  const isCommercialPlot = propCategory === "commercial_plot";

  const reqTypeObj = requirementTypes.find((r) => r.id === reqType);
  const catObj = propertyCategories.find((c) => c.id === propCategory);
  const indObj = selectedIndustries.length > 0 ? industries.find(i => i.id === selectedIndustries[0]) : null;

  const Icon1 = reqTypeObj?.icon || Building;
  const Icon2 = (isFranchise || isBusiness) ? Layers : (catObj?.icon || Building);
  const label1 = reqTypeObj?.label || "Property";
  const label2 = (isFranchise || isBusiness) ? (indObj?.label || "Industry") : (catObj?.label || "Category");

  const handleNext = () => {
    if (isLease && !leaseMonth) {
      setError("Please select a tentative lease month.");
      return;
    }
    if ((isBuyOrSellProp || isLease) && !purpose) {
      setError("Please select your purpose.");
      return;
    }
    if (!budget) {
      setError("Please select a budget range.");
      return;
    }
    if ((isBuyOrSellProp || isLease) && !isCommercialPlot && !size) {
      setError("Please select a size range.");
      return;
    }
    if (isFranchise && !dailyOp) {
      setError("Please select your daily operations preference.");
      return;
    }
    setError(null);
    onNext();
  };

  return (
    <div className="h-full min-h-full w-full bg-[#fafafb] dark:bg-[#060e24] text-[#0a1128] dark:text-white font-['Outfit',sans-serif] flex flex-col relative overflow-hidden">
      
      
      <MobileStepHeader currentStep={2} totalSteps={5} onBack={onBack} title="Requirement Details" />

      
      <main className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-5 p-4 pb-28">

        {isLease && (
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">Tentative Lease Month</h3>
            <p className="text-[12px] text-gray-400 dark:text-white/40 mb-2 font-medium">Select the tentative month</p>
            <ModernSelect value={leaseMonth} onChange={(val: string) => updateStep2Data("leaseMonth", val)} options={[{ value: "", label: "Select Month" }]}  />
          </motion.div>
        )}

        {(isBuyOrSellProp || isLease) && (
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">Why are you looking?</h3>
            <p className="text-[12px] text-gray-400 dark:text-white/40 mb-2 font-medium">Help us understand your purpose</p>
            <div className="flex flex-col gap-2.5">
              {purposes.map((p) => {
                const isSelected = purpose === p;
                return (
                  <button
                    key={p}
                    onClick={() => updateStep2Data("purpose", p)}
                    className={`flex items-center gap-4 p-4 rounded border-2 transition-all duration-300 ${
                      isSelected
                        ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08]"
                        : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42]"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected ? "border-[#d4af37]" : "border-gray-300 dark:border-white/20"
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                    </div>
                    <span className={`text-[14px] font-semibold ${isSelected ? "text-[#0a1128] dark:text-white" : "text-gray-500 dark:text-white/50"}`}>
                      {p}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
          <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">What's your budget range?</h3>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {budgetRanges.map((b, i) => {
              const isSelected = budget === b;
              return (
                <motion.button
                  key={b}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + i * 0.02 }}
                  onClick={() => updateStep2Data("budget", b)}
                  className={`p-3.5 rounded border-2 text-center transition-all duration-300 ${
                    isSelected
                      ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08] text-[#0a1128] dark:text-white shadow-sm"
                      : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-gray-500 dark:text-white/50"
                  }`}
                >
                  <span className="text-[13px] font-bold">{b}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {(isBuyOrSellProp || isLease) && !isCommercialPlot && (
          <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
            <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">What size are you looking for?</h3>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {(isLease ? sizeRangesYards : sizeRanges).map((s, i) => {
                const isSelected = size === s;
                return (
                  <motion.button
                    key={s}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.02 }}
                    onClick={() => updateStep2Data("size", s)}
                    className={`p-3.5 rounded border-2 text-center transition-all duration-300 ${
                      isSelected
                        ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08] text-[#0a1128] dark:text-white shadow-sm"
                        : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-gray-500 dark:text-white/50"
                    }`}
                  >
                    <span className="text-[13px] font-bold">{s}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {isFranchise && (
          <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
            <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">Daily Operations</h3>
            <p className="text-[12px] text-gray-400 dark:text-white/40 mb-2 font-medium">How active will you be in daily operations?</p>
            <div className="flex flex-col gap-2.5">
              {dailyOperations.map((op) => {
                const isSelected = dailyOp === op;
                return (
                  <button
                    key={op}
                    onClick={() => updateStep2Data("dailyOp", op)}
                    className={`flex items-center gap-4 p-4 rounded border-2 transition-all duration-300 ${
                      isSelected
                        ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08]"
                        : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42]"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected ? "border-[#d4af37]" : "border-gray-300 dark:border-white/20"
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                    </div>
                    <span className={`text-[14px] font-semibold ${isSelected ? "text-[#0a1128] dark:text-white" : "text-gray-500 dark:text-white/50"}`}>
                      {op}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="bg-[#0a1128]/[0.03] dark:bg-white/[0.04] rounded border border-[#0a1128]/6 dark:border-white/8 p-4 flex flex-col gap-2.5">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-3 items-center flex-wrap">
              <div className="flex gap-1.5 items-center text-[#0a1128] dark:text-white">
                <Icon1 size={14} className="text-[#d4af37]" /> 
                <span className="text-[12px] font-bold">{label1}</span>
              </div>
              <div className="w-[1px] h-3 bg-[#0a1128]/10 dark:bg-white/10"></div>
              <div className="flex gap-1.5 items-center text-[#0a1128] dark:text-white">
                <Icon2 size={14} className="text-[#d4af37]" />
                <span className="text-[12px] font-bold">{label2}</span>
              </div>
            </div>
            <button onClick={onBack} className="text-[#d4af37] font-bold text-[12px] hover:underline">Edit</button>
          </div>
          <div className="text-[12px] text-[#0a1128]/60 dark:text-white/50 font-medium">Locations: <span className="font-bold text-[#0a1128] dark:text-white">Anywhere in Hyderabad</span></div>
        </motion.div>

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
