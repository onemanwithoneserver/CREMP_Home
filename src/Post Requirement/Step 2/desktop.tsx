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

      <main className="w-full max-w-4xl p-8 flex flex-col gap-8 bg-white rounded-[4px] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] mt-8 mb-10 relative">
        <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

        <div>
          <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">Why are you looking?</h3>
          <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">Help us understand your purpose</p>
          <div className="flex gap-4">
            {purposes.map((p) => {
              const isSelected = purpose === p;
              return (
                <button
                  key={p}
                  onClick={() => setPurpose(p)}
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

        <div>
          <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">What's your budget range?</h3>
          <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">Select the total budget you have in mind</p>
          <div className="grid grid-cols-3 gap-3">
            {budgetRanges.map((b) => {
              const isSelected = budget === b;
              return (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
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

        <div>
          <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">What size are you looking for?</h3>
          <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">Select the approximate built-up area</p>
          <div className="grid grid-cols-3 gap-3">
            {sizeRanges.map((s) => {
              const isSelected = size === s;
              return (
                <button
                  key={s}
                  onClick={() => setSize(s)}
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
