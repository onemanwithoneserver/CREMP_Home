import { useState } from "react";
import StepHeader from "../../components/StepHeader";
import RequirementFooter from "../../../components/commonfiles/Footer/RequirementFooter";
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

      <main className="p-4 flex flex-col gap-6">
        
        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">What is your preferred project status?</h3>
          <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Select the project stage</p>
          <div className="flex flex-col gap-2.5">
            {projectStatuses.map((s) => (
              <button
                key={s}
                onClick={() => setProjectStatus(s)}
                className={`flex items-center justify-between p-3.5 rounded-[4px] border transition-all duration-300 ${
                  projectStatus === s 
                    ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm" 
                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                <span className="text-[13px] font-bold">{s}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  projectStatus === s ? "border-[#d4af37]" : "border-gray-300"
                }`}>
                  {projectStatus === s && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">What is your preferred unit condition?</h3>
          <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Select condition level</p>
          <div className="grid grid-cols-2 gap-2.5">
            {unitConditions.map((c) => (
              <button
                key={c}
                onClick={() => setUnitCondition(c)}
                className={`flex items-center justify-between p-3.5 rounded-[4px] border transition-all duration-300 ${
                  unitCondition === c 
                    ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm" 
                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="text-[12px] font-bold">{c}</span>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  unitCondition === c ? "border-[#d4af37]" : "border-gray-300"
                }`}>
                  {unitCondition === c && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">Which floor do you prefer?</h3>
          <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Specify preferred level</p>
          <input 
            type="text" 
            placeholder="e.g. 1st Floor, Ground Floor, etc."
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            className="w-full p-3.5 rounded-[4px] border border-gray-200 bg-gray-50 text-[#0a1128] text-[14px] outline-none focus:border-[#d4af37] focus:bg-white transition-colors placeholder:text-gray-400"
          />
        </div>

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">Which industry type(s) apply?</h3>
          <p className="text-[11px] text-[#d4af37] font-medium mb-4 uppercase tracking-wider">Select Multiple</p>
          <div className="flex flex-wrap gap-2">
            {industryTypes.map((ind) => {
              const isSelected = selectedIndustries.includes(ind);
              return (
                <button
                  key={ind}
                  onClick={() => toggleIndustry(ind)}
                  className={`px-3.5 py-2 rounded-[4px] border text-[12px] font-bold transition-all duration-300 ${
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

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">What is your source of funding?</h3>
          <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Select funding method</p>
          <div className="flex flex-col gap-2.5">
            {fundingSources.map((f) => (
              <button
                key={f}
                onClick={() => setFunding(f)}
                className={`flex items-center justify-between p-3.5 rounded-[4px] border transition-all duration-300 ${
                  funding === f 
                    ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm" 
                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="text-[13px] font-bold">{f}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  funding === f ? "border-[#d4af37]" : "border-gray-300"
                }`}>
                  {funding === f && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">Additional notes?</h3>
          <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Mention details for better match</p>
          <textarea 
            placeholder="Type your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-3.5 rounded-[4px] border border-gray-200 bg-gray-50 text-[#0a1128] text-[14px] outline-none focus:border-[#d4af37] focus:bg-white transition-colors min-h-[120px] resize-y placeholder:text-gray-400"
          />
        </div>

      </main>

      <RequirementFooter onContinue={onNext} />
    </div>
  );
}
