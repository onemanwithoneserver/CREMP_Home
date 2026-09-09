import { useState } from "react";
import StepHeader from "../components/StepHeader";
import RequirementFooter from "../../components/commonfiles/Footer/RequirementFooter";
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

      <main className="p-5 flex flex-col gap-8 bg-white pb-10">
        
        <div>
          <h3 className="text-[20px] font-bold mb-1">Why are you looking?</h3>
          <p className="text-[13px] text-gray-500 font-medium mb-4">Help us understand your purpose.</p>
          <div className="flex flex-col gap-3">
            {purposes.map((p) => {
              const isSelected = purpose === p;
              return (
                <button
                  key={p}
                  onClick={() => setPurpose(p)}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/30" 
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                  </div>
                  <span className={`text-[15px] font-semibold ${isSelected ? "text-[#0a1128]" : "text-gray-600"}`}>
                    {p}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-bold mb-1">What's your budget range?</h3>
          <p className="text-[13px] text-gray-500 font-medium mb-4">Select the total budget you have in mind.</p>
          <div className="grid grid-cols-2 gap-3">
            {budgetRanges.map((b) => {
              const isSelected = budget === b;
              return (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/30 text-[#0a1128]" 
                      : "border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  <span className="text-[13px] font-semibold">{b}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-bold mb-1">What size are you looking for?</h3>
          <p className="text-[13px] text-gray-500 font-medium mb-4">Select the approximate built-up area.</p>
          <div className="grid grid-cols-2 gap-3">
            {sizeRanges.map((s) => {
              const isSelected = size === s;
              return (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/30 text-[#0a1128]" 
                      : "border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  <span className="text-[13px] font-semibold">{s}</span>
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
