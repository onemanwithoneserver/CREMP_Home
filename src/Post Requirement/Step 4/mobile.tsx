import { useState } from "react";
import StepHeader from "../components/StepHeader";
import RequirementFooter from "../../components/commonfiles/Footer/RequirementFooter";
import { projectStatuses, unitConditions, industryTypes, fundingSources } from "./data";

interface Step4MobileProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step4Mobile({ onNext, onBack }: Step4MobileProps) {
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
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans pb-32">
      <StepHeader currentStep={4} totalSteps={5} onBack={onBack} />

      <main className="p-5 flex flex-col gap-8 bg-white pb-10">
        
        <div>
          <h3 className="text-[16px] font-bold mb-3">What is your preferred project status?</h3>
          <div className="flex gap-3">
            {projectStatuses.map((s) => (
              <button
                key={s}
                onClick={() => setProjectStatus(s)}
                className={`flex-1 flex items-center justify-between p-3 rounded-xl border transition-all ${
                  projectStatus === s ? "border-[#d4af37] bg-orange-50/30 text-[#0a1128]" : "border-gray-200 text-gray-600"
                }`}
              >
                <span className="text-[13px] font-semibold">{s}</span>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  projectStatus === s ? "border-[#d4af37]" : "border-gray-300"
                }`}>
                  {projectStatus === s && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[16px] font-bold mb-3">What is your preferred unit condition?</h3>
          <div className="grid grid-cols-2 gap-3">
            {unitConditions.map((c) => (
              <button
                key={c}
                onClick={() => setUnitCondition(c)}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  unitCondition === c ? "border-[#d4af37] bg-orange-50/30 text-[#0a1128]" : "border-gray-200 text-gray-600"
                }`}
              >
                <span className="text-[13px] font-semibold">{c}</span>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  unitCondition === c ? "border-[#d4af37]" : "border-gray-300"
                }`}>
                  {unitCondition === c && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[16px] font-bold mb-3">Which floor do you prefer?</h3>
          <input 
            type="text" 
            placeholder="e.g. 1st Floor, Ground Floor, etc."
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#d4af37] transition-colors placeholder:text-gray-400"
          />
        </div>

        <div>
          <h3 className="text-[16px] font-bold mb-1">Which industry type(s) apply to your business?</h3>
          <p className="text-[12px] text-gray-500 mb-3">(Select Multiple)</p>
          <div className="flex flex-wrap gap-2">
            {industryTypes.map((ind) => {
              const isSelected = selectedIndustries.includes(ind);
              return (
                <button
                  key={ind}
                  onClick={() => toggleIndustry(ind)}
                  className={`px-3 py-2 rounded-lg border text-[12px] font-medium transition-all ${
                    isSelected ? "border-[#d4af37] bg-orange-50 text-[#0a1128]" : "border-gray-200 text-gray-600 bg-white"
                  }`}
                >
                  {ind}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[16px] font-bold mb-3">What is your source of funding?</h3>
          <div className="flex gap-3">
            {fundingSources.map((f) => (
              <button
                key={f}
                onClick={() => setFunding(f)}
                className={`flex-1 flex items-center justify-between p-3 rounded-xl border transition-all ${
                  funding === f ? "border-[#d4af37] bg-orange-50/30 text-[#0a1128]" : "border-gray-200 text-gray-600"
                }`}
              >
                <span className="text-[13px] font-semibold">{f}</span>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  funding === f ? "border-[#d4af37]" : "border-gray-300"
                }`}>
                  {funding === f && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[16px] font-bold mb-3">Do you have any additional requirement notes?</h3>
          <textarea 
            placeholder="Mention additional details here so that your requirement will be matched accurately"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#d4af37] transition-colors min-h-[120px] resize-y placeholder:text-gray-400"
          />
        </div>

      </main>

      <RequirementFooter onContinue={onNext} />
    </div>
  );
}
