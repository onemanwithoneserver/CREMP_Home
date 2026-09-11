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

      <main className="w-full max-w-4xl p-8 flex flex-col gap-8 bg-white rounded-[4px] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] mt-8 mb-10 relative">
        <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-[18px] font-bold mb-1 text-[#0a1128]">Project status?</h3>
            <p className="text-[12px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Select the project stage</p>
            <div className="flex flex-col gap-3">
              {projectStatuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setProjectStatus(s)}
                  className={`flex items-center justify-between p-4 rounded-[4px] border transition-all duration-300 ${
                    projectStatus === s 
                      ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm" 
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-[14px] font-bold">{s}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    projectStatus === s ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {projectStatus === s && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-bold mb-1 text-[#0a1128]">Unit condition?</h3>
            <p className="text-[12px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Select condition level</p>
            <div className="grid grid-cols-2 gap-3">
              {unitConditions.map((c) => (
                <button
                  key={c}
                  onClick={() => setUnitCondition(c)}
                  className={`flex items-center justify-between p-4 rounded-[4px] border transition-all duration-300 ${
                    unitCondition === c 
                      ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm" 
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-[13px] font-bold">{c}</span>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    unitCondition === c ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {unitCondition === c && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-[18px] font-bold mb-1 text-[#0a1128]">Which floor do you prefer?</h3>
            <p className="text-[12px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Specify preferred level</p>
            <input 
              type="text" 
              placeholder="e.g. 1st Floor, Ground Floor, etc."
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              className="w-full p-4 rounded-[4px] border border-gray-200 bg-gray-50 text-[#0a1128] text-[15px] outline-none focus:border-[#d4af37] focus:bg-white transition-colors placeholder:text-gray-400"
            />
          </div>

          <div>
            <h3 className="text-[18px] font-bold mb-1 text-[#0a1128]">Source of funding?</h3>
            <p className="text-[12px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Select funding method</p>
            <div className="flex gap-3">
              {fundingSources.map((f) => (
                <button
                  key={f}
                  onClick={() => setFunding(f)}
                  className={`flex-1 flex items-center justify-between p-4 rounded-[4px] border transition-all duration-300 ${
                    funding === f 
                      ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm" 
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-[14px] font-bold">{f}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    funding === f ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {funding === f && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[18px] font-bold mb-1 text-[#0a1128]">Which industry type(s) apply to your business?</h3>
          <p className="text-[12px] text-[#d4af37] font-medium mb-4 uppercase tracking-wider">Select Multiple</p>
          <div className="flex flex-wrap gap-2.5">
            {industryTypes.map((ind) => {
              const isSelected = selectedIndustries.includes(ind);
              return (
                <button
                  key={ind}
                  onClick={() => toggleIndustry(ind)}
                  className={`px-4 py-2.5 rounded-[4px] border text-[13px] font-bold transition-all duration-300 ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm" 
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  {ind}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[18px] font-bold mb-1 text-[#0a1128]">Do you have any additional requirement notes?</h3>
          <p className="text-[12px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Mention additional details here</p>
          <textarea 
            placeholder="Mention additional details here so that your requirement will be matched accurately"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-4 rounded-[4px] border border-gray-200 bg-gray-50 text-[#0a1128] text-[15px] outline-none focus:border-[#d4af37] focus:bg-white transition-colors min-h-[120px] resize-y placeholder:text-gray-400"
          />
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
