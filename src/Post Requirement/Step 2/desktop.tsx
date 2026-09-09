import { useState } from "react";
import StepHeader from "../components/StepHeader";
import { purposes, budgetRanges, sizeRanges } from "./data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Step2DesktopProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Desktop({ onNext, onBack }: Step2DesktopProps) {
  const [purpose, setPurpose] = useState("");
  const [budget, setBudget] = useState("");
  const [size, setSize] = useState("");

  return (
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans flex flex-col items-center">
      <div className="w-full">
        <StepHeader currentStep={2} totalSteps={5} onBack={onBack} />
      </div>

      <main className="w-full max-w-4xl p-10 flex flex-col gap-12 bg-white rounded-3xl shadow-sm mt-8 mb-10">
        
        <div>
          <h3 className="text-[24px] font-bold mb-2">Why are you looking?</h3>
          <p className="text-[15px] text-gray-500 font-medium mb-6">Help us understand your purpose.</p>
          <div className="flex gap-6">
            {purposes.map((p) => {
              const isSelected = purpose === p;
              return (
                <button
                  key={p}
                  onClick={() => setPurpose(p)}
                  className={`flex-1 flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/30" 
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-[#d4af37]" />}
                  </div>
                  <span className={`text-[16px] font-semibold ${isSelected ? "text-[#0a1128]" : "text-gray-600"}`}>
                    {p}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[24px] font-bold mb-2">What's your budget range?</h3>
          <p className="text-[15px] text-gray-500 font-medium mb-6">Select the total budget you have in mind.</p>
          <div className="grid grid-cols-3 gap-4">
            {budgetRanges.map((b) => {
              const isSelected = budget === b;
              return (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`p-5 rounded-2xl border text-center transition-all ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/30 text-[#0a1128] shadow-md shadow-[#d4af37]/10" 
                      : "border-gray-200 hover:border-gray-300 bg-white text-gray-600"
                  }`}
                >
                  <span className="text-[15px] font-semibold">{b}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[24px] font-bold mb-2">What size are you looking for?</h3>
          <p className="text-[15px] text-gray-500 font-medium mb-6">Select the approximate built-up area.</p>
          <div className="grid grid-cols-3 gap-4">
            {sizeRanges.map((s) => {
              const isSelected = size === s;
              return (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`p-5 rounded-2xl border text-center transition-all ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/30 text-[#0a1128] shadow-md shadow-[#d4af37]/10" 
                      : "border-gray-200 hover:border-gray-300 bg-white text-gray-600"
                  }`}
                >
                  <span className="text-[15px] font-semibold">{s}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            className="px-8 py-4 rounded-xl text-white font-bold text-[16px] flex items-center gap-2 transition-all"
            style={{ background: "linear-gradient(135deg, #d4af37 0%, #f3cd52 100%)", color: "#0a1128" }}
          >
            Continue <ArrowRight size={18} />
          </motion.button>
        </div>
      </main>
    </div>
  );
}
