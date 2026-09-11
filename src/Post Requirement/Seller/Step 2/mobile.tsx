import { useState } from "react";
import StepHeader from "../../components/StepHeader";
import RequirementFooter from "../../../components/commonfiles/Footer/RequirementFooter";
import { purposes, budgetRanges, sizeRanges } from "./data";

interface Step2MobileProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Mobile({ onNext, onBack }: Step2MobileProps) {
  const [purpose, setPurpose] = useState("");
  const [budget, setBudget] = useState("");
  const [size, setSize] = useState("");

  return (
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans pb-32">
      <StepHeader currentStep={2} totalSteps={5} onBack={onBack} />

      <main className="p-4 flex flex-col gap-6">

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">Why are you looking?</h3>
          <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Help us understand your purpose</p>
          <div className="flex flex-col gap-2.5">
            {purposes.map((p) => {
              const isSelected = purpose === p;
              return (
                <button
                  key={p}
                  onClick={() => setPurpose(p)}
                  className={`flex items-center gap-3 p-3.5 rounded-[4px] border transition-all duration-300 ${
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
                  <span className={`text-[14px] font-semibold ${isSelected ? "text-[#0a1128]" : "text-gray-600"}`}>
                    {p}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">What's your budget range?</h3>
          <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Select the total budget you have in mind</p>
          <div className="grid grid-cols-2 gap-2.5">
            {budgetRanges.map((b) => {
              const isSelected = budget === b;
              return (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`p-3.5 rounded-[4px] border text-center transition-all duration-300 ${
                    isSelected
                      ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm"
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-[12px] font-bold">{b}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">What size are you looking for?</h3>
          <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Select the approximate built-up area</p>
          <div className="grid grid-cols-2 gap-2.5">
            {sizeRanges.map((s) => {
              const isSelected = size === s;
              return (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`p-3.5 rounded-[4px] border text-center transition-all duration-300 ${
                    isSelected
                      ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm"
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-[12px] font-bold">{s}</span>
                </button>
              );
            })}
          </div>
        </div>

      </main>

      <RequirementFooter onContinue={onNext} />
    </div>
  );
}
