
import StepHeader from "../../components/StepHeader";
import { purposes, budgetRanges, sizeRanges, sizeRangesYards, months, dailyOperations } from "./data";
import { requirementTypes, propertyCategories, industries } from "../Step 1/data";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Building } from "lucide-react";
import type { Step1Data, Step2Data } from "../index";

interface Step2DesktopProps {
  onNext: () => void;
  onBack: () => void;
  step1Data: Step1Data;
  step2Data: Step2Data;
  setStep2Data: React.Dispatch<React.SetStateAction<Step2Data>>;
}

export default function Step2Desktop({ onNext, onBack, step1Data, step2Data, setStep2Data }: Step2DesktopProps) {
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

  return (
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans flex flex-col items-center">
      <div className="w-full">
        <StepHeader currentStep={2} totalSteps={5} onBack={onBack} />
      </div>

      <main className="w-full max-w-4xl p-8 flex flex-col gap-8 bg-white rounded-[4px] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] mt-8 mb-10 relative">
        <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

        {isLease && (
          <div>
            <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">Tentative Lease Month</h3>
            <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">Select the tentative month you wish to lease from</p>
            <select
              value={leaseMonth}
              onChange={(e) => updateStep2Data("leaseMonth", e.target.value)}
              className="w-full p-4 rounded-[8px] border-2 border-gray-100 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[15px] font-medium"
            >
              <option value="" disabled>Select Month</option>
              {months.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
        )}

        {(isBuyOrSellProp || isLease) && (
          <div>
            <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">Why are you looking?</h3>
            <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">Help us understand your purpose</p>
            <div className="flex gap-4">
              {purposes.map((p) => {
                const isSelected = purpose === p;
                return (
                  <button
                    key={p}
                    onClick={() => updateStep2Data("purpose", p)}
                    className={`flex-1 flex items-center gap-4 p-5 rounded-[4px] border transition-all duration-300 ${
                      isSelected
                        ? "border-[#d4af37] bg-orange-50/50 shadow-sm"
                        : "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected ? "border-[#d4af37]" : "border-gray-300"
                    }`}>
                      {isSelected && <div className="w-3 h-3 rounded-full bg-[#d4af37]" />}
                    </div>
                    <span className={`text-[15px] font-semibold ${isSelected ? "text-[#0a1128]" : "text-gray-600"}`}>
                      {p}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">What's your budget range?</h3>
          <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">Select the total budget you have in mind</p>
          <div className="grid grid-cols-3 gap-3">
            {budgetRanges.map((b) => {
              const isSelected = budget === b;
              return (
                <button
                  key={b}
                  onClick={() => updateStep2Data("budget", b)}
                  className={`p-5 rounded-[4px] border text-center transition-all duration-300 ${
                    isSelected
                      ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm"
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-[14px] font-bold">{b}</span>
                </button>
              );
            })}
          </div>
        </div>

        {(isBuyOrSellProp || isLease) && !isCommercialPlot && (
          <div>
            <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">What size are you looking for?</h3>
            <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">Select the approximate built-up area</p>
            <div className="grid grid-cols-3 gap-3">
              {(isLease ? sizeRangesYards : sizeRanges).map((s) => {
                const isSelected = size === s;
                return (
                  <button
                    key={s}
                    onClick={() => updateStep2Data("size", s)}
                    className={`p-5 rounded-[4px] border text-center transition-all duration-300 ${
                      isSelected
                        ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm"
                        : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-[14px] font-bold">{s}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {isFranchise && (
          <div>
            <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">Daily Operations</h3>
            <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">How active will you be in daily operations?</p>
            <div className="flex flex-col gap-3">
              {dailyOperations.map((op) => {
                const isSelected = dailyOp === op;
                return (
                  <button
                    key={op}
                    onClick={() => updateStep2Data("dailyOp", op)}
                    className={`flex items-center gap-4 p-5 rounded-[4px] border transition-all duration-300 ${
                      isSelected
                        ? "border-[#d4af37] bg-orange-50/50 shadow-sm"
                        : "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected ? "border-[#d4af37]" : "border-gray-300"
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                    </div>
                    <span className={`text-[15px] font-semibold ${isSelected ? "text-[#0a1128]" : "text-gray-600"}`}>
                      {op}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="bg-indigo-50/50 rounded-[12px] border border-indigo-100 p-5 flex flex-col gap-3 mt-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center flex-wrap">
              <div className="flex gap-2 items-center text-indigo-900">
                <Icon1 size={18} /> 
                <span className="text-[15px] font-semibold">{label1}</span>
              </div>
              <div className="w-[1px] h-5 bg-indigo-200 hidden sm:block"></div>
              <div className="flex gap-2 items-center text-indigo-900">
                <Icon2 size={18} />
                <span className="text-[15px] font-semibold">{label2}</span>
              </div>
            </div>
            <button onClick={onBack} className="text-indigo-600 font-bold text-[14px] hover:underline">Edit</button>
          </div>
          <div className="text-[14px] text-indigo-900/70 font-medium mt-1">Locations: <span className="font-bold text-indigo-900">Anywhere in Hyderabad</span></div>
        </div>

        <div className="pt-4 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            className="px-8 py-4 rounded-[4px] font-bold text-[15px] flex items-center gap-2 transition-all border border-[#d4af37]"
            style={{ background: "linear-gradient(135deg, #d4af37 0%, #aa8922 100%)", color: "#ffffff" }}
          >
            Continue <ArrowRight size={18} />
          </motion.button>
        </div>
      </main>
    </div>
  );
}
