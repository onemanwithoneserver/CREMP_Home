import { useState } from "react";
import StepHeader from "../components/StepHeader";
import { projectStatuses, unitConditions, industryTypes, fundingSources } from "./data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Step4DesktopProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step4Desktop({ onNext, onBack }: Step4DesktopProps) {
  const [projectStatus, setProjectStatus] = useState("");
  const [unitCondition, setUnitCondition] = useState("");
  const [floor, setFloor] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [funding, setFunding] = useState("");
  const [notes, setNotes] = useState("");

  const toggleIndustry = (ind: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(ind) ? prev.filter((i) => i !== ind) : [...prev, ind]
    );
  };

  return (
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans flex flex-col items-center">
      <div className="w-full">
        <StepHeader currentStep={4} totalSteps={5} onBack={onBack} />
      </div>

      <main className="w-full max-w-4xl p-10 flex flex-col gap-10 bg-white rounded-3xl shadow-sm mt-8 mb-10">
        
        <div>
          <h3 className="text-[20px] font-bold mb-4">What is your preferred project status?</h3>
          <div className="flex gap-4">
            {projectStatuses.map((s) => (
              <button
                key={s}
                onClick={() => setProjectStatus(s)}
                className={`flex-1 flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  projectStatus === s ? "border-[#d4af37] bg-orange-50/30 text-[#0a1128] shadow-sm" : "border-gray-200 hover:border-gray-300 text-gray-600 bg-white"
                }`}
              >
                <span className="text-[15px] font-semibold">{s}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  projectStatus === s ? "border-[#d4af37]" : "border-gray-300"
                }`}>
                  {projectStatus === s && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-bold mb-4">What is your preferred unit condition?</h3>
          <div className="grid grid-cols-4 gap-4">
            {unitConditions.map((c) => (
              <button
                key={c}
                onClick={() => setUnitCondition(c)}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  unitCondition === c ? "border-[#d4af37] bg-orange-50/30 text-[#0a1128] shadow-sm" : "border-gray-200 hover:border-gray-300 text-gray-600 bg-white"
                }`}
              >
                <span className="text-[14px] font-semibold">{c}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  unitCondition === c ? "border-[#d4af37]" : "border-gray-300"
                }`}>
                  {unitCondition === c && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-bold mb-4">Which floor do you prefer?</h3>
          <input 
            type="text" 
            placeholder="e.g. 1st Floor, Ground Floor, etc."
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            className="w-full p-4 rounded-2xl border border-gray-200 text-[15px] outline-none focus:border-[#d4af37] transition-colors placeholder:text-gray-400 bg-gray-50/50"
          />
        </div>

        <div>
          <div className="flex items-end gap-2 mb-4">
             <h3 className="text-[20px] font-bold">Which industry type(s) apply to your business?</h3>
             <span className="text-[14px] text-gray-500 mb-0.5">(Select Multiple)</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {industryTypes.map((ind) => {
              const isSelected = selectedIndustries.includes(ind);
              return (
                <button
                  key={ind}
                  onClick={() => toggleIndustry(ind)}
                  className={`px-4 py-2.5 rounded-xl border text-[14px] font-medium transition-all ${
                    isSelected ? "border-[#d4af37] bg-orange-50 text-[#0a1128] shadow-sm" : "border-gray-200 hover:border-gray-300 text-gray-600 bg-white"
                  }`}
                >
                  {ind}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-bold mb-4">What is your source of funding?</h3>
          <div className="flex gap-4">
            {fundingSources.map((f) => (
              <button
                key={f}
                onClick={() => setFunding(f)}
                className={`flex-1 flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  funding === f ? "border-[#d4af37] bg-orange-50/30 text-[#0a1128] shadow-sm" : "border-gray-200 hover:border-gray-300 text-gray-600 bg-white"
                }`}
              >
                <span className="text-[15px] font-semibold">{f}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  funding === f ? "border-[#d4af37]" : "border-gray-300"
                }`}>
                  {funding === f && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-bold mb-4">Do you have any additional requirement notes?</h3>
          <textarea 
            placeholder="Mention additional details here so that your requirement will be matched accurately"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-4 rounded-2xl border border-gray-200 text-[15px] outline-none focus:border-[#d4af37] transition-colors min-h-[150px] resize-y placeholder:text-gray-400 bg-gray-50/50"
          />
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
