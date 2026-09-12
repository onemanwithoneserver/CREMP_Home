import { useState } from "react";
import StepHeader from "../../components/StepHeader";
import RequirementFooter from "../../../components/commonfiles/Footer/RequirementFooter";
import { projectStatuses, unitConditions, industryTypes, fundingSources, profileOptions } from "./data";
import { requirementTypes, propertyCategories, industries } from "../Step 1/data";

import { Building, Layers, Clock, MapPin } from "lucide-react";
import type { Step1Data, Step2Data, Step3Data } from "../index";

interface Step4MobileProps {
  onNext: () => void;
  onBack: () => void;
  step1Data: Step1Data;
  step2Data: Step2Data;
  step3Data: Step3Data;
}

export default function Step4Mobile({ onNext, onBack, step1Data, step2Data, step3Data }: Step4MobileProps) {
  const [projectStatus, setProjectStatus] = useState("");
  const [unitCondition, setUnitCondition] = useState("");
  const [floor, setFloor] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [funding, setFunding] = useState("");
  const [profile, setProfile] = useState("");
  const [notes, setNotes] = useState("");

  const toggleIndustry = (ind: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(ind) ? prev.filter((i) => i !== ind) : [...prev, ind]
    );
  };

  const { reqType, propCategory, selectedIndustries: step1Inds } = step1Data;
  const isFranchise = reqType === "franchise_opportunity";
  const isBusiness = reqType === "buy_existing_business" || reqType === "sell_existing_business";
  const isLease = reqType === "lease_property";
  const isBuyOrSellProp = reqType === "buy_property" || reqType === "sell_property";

  const reqTypeObj = requirementTypes.find((r) => r.id === reqType);
  const catObj = propertyCategories.find((c) => c.id === propCategory);
  const indObj = step1Inds.length > 0 ? industries.find(i => i.id === step1Inds[0]) : null;

  const Icon1 = reqTypeObj?.icon || Building;
  const label1 = reqTypeObj?.label || "Property";

  let locationsText = "Anywhere in Hyderabad";
  if (step3Data.location === "zone") {
    if (step3Data.selectedZone && step3Data.selectedCircle) locationsText = `${step3Data.selectedCircle}, ${step3Data.selectedZone}`;
    else if (step3Data.selectedZone) locationsText = step3Data.selectedZone;
  } else if (!step3Data.location) {
     locationsText = "-";
  }

  return (
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans pb-32">
      <StepHeader currentStep={4} totalSteps={5} onBack={onBack} />

      <main className="p-4 flex flex-col gap-6">

        {isFranchise && (
          <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
            <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">Which profile best describes you?</h3>
            <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Select the profile that fits your background</p>
            <select
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              className="w-full p-3.5 rounded-[4px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[14px] font-medium"
            >
              <option value="" disabled>Select Profile</option>
              {profileOptions.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        )}

        {(isBuyOrSellProp || isLease) && (
          <>
            <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
              <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">What is your preferred project status?</h3>
              <div className="flex gap-2.5 mt-4">
                {projectStatuses.map((s) => (
                  <button
                    key={s}
                    onClick={() => setProjectStatus(s)}
                    className={`flex-1 flex items-center justify-between p-3 rounded-[4px] border transition-all duration-300 ${
                      projectStatus === s 
                        ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm" 
                        : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-[12px] font-bold">{s}</span>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      projectStatus === s ? "border-[#d4af37]" : "border-gray-300"
                    }`}>
                      {projectStatus === s && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
              <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">What is your preferred unit condition?</h3>
              <div className="grid grid-cols-2 gap-2.5 mt-4">
                {unitConditions.map((c) => (
                  <button
                    key={c}
                    onClick={() => setUnitCondition(c)}
                    className={`flex items-center justify-between p-3 rounded-[4px] border transition-all duration-300 ${
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
          </>
        )}

        {isLease && (
          <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
            <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">Which floor do you prefer?</h3>
            <input 
              type="text" 
              placeholder="e.g. 1st Floor, Ground Floor, etc."
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              className="w-full mt-2 p-3.5 rounded-[4px] border border-gray-200 bg-white text-[#0a1128] text-[14px] outline-none focus:border-[#d4af37] transition-colors placeholder:text-gray-400"
            />
          </div>
        )}

        {isLease && (
          <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
            <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">Which industry type(s) apply to your business?</h3>
            <p className="text-[11px] text-gray-500 font-bold mb-4 uppercase tracking-wider">(Select Multiple)</p>
            <div className="flex flex-wrap gap-2">
              {industryTypes.map((ind) => {
                const isSelected = selectedIndustries.includes(ind);
                return (
                  <button
                    key={ind}
                    onClick={() => toggleIndustry(ind)}
                    className={`px-3 py-2 rounded-[4px] border text-[12px] font-bold transition-all duration-300 ${
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
        )}

        {isBuyOrSellProp && (
          <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
            <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">What is your source of funding?</h3>
            <div className="flex gap-2.5 mt-4">
              {fundingSources.map((f) => (
                <button
                  key={f}
                  onClick={() => setFunding(f)}
                  className={`flex-1 flex items-center justify-between p-3 rounded-[4px] border transition-all duration-300 ${
                    funding === f 
                      ? "border-[#d4af37] bg-orange-50/50 text-[#0a1128] shadow-sm" 
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-[12px] font-bold">{f}</span>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    funding === f ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {funding === f && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">Do you have any additional requirement notes?</h3>
          <textarea 
            placeholder="Mention additional details here so that your requirement will be matched accurately"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full mt-2 p-3.5 rounded-[4px] border border-gray-200 bg-white text-[#0a1128] text-[14px] outline-none focus:border-[#d4af37] transition-colors min-h-[100px] resize-y placeholder:text-gray-400"
          />
        </div>

        <div className="bg-indigo-50/50 rounded-[12px] border border-indigo-100 p-4 flex flex-col gap-3">
          {(isFranchise || isBusiness) ? (
            <>
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center flex-wrap">
                  <div className="flex gap-2 items-center text-indigo-900">
                    <Icon1 size={16} /> 
                    <span className="text-[13px] font-semibold">{label1}</span>
                  </div>
                  <div className="w-[1px] h-4 bg-indigo-200"></div>
                  <div className="flex gap-2 items-center text-indigo-900">
                    <Layers size={16} />
                    <span className="text-[13px] font-semibold">{indObj?.label || "Industry"}</span>
                  </div>
                </div>
                <button onClick={onBack} className="text-indigo-600 font-bold text-[13px] hover:underline">Edit</button>
              </div>
              <div className="text-[13px] text-indigo-900/70 font-medium">
                Budget: <span className="font-bold text-indigo-900">{step2Data.budget || "-"}</span>
              </div>
              <div className="text-[13px] text-indigo-900/70 font-medium">
                Locations: <span className="font-bold text-indigo-900">{locationsText}</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="flex gap-2 items-center flex-wrap">
                    <div className="flex gap-1.5 items-center text-indigo-900">
                      <Icon1 size={14} /> 
                      <span className="text-[13px] font-semibold">{label1}</span>
                    </div>
                    <div className="w-[1px] h-3.5 bg-indigo-200"></div>
                    <div className="flex gap-1.5 items-center text-indigo-900">
                      <Clock size={14} />
                      <span className="text-[13px] font-semibold">{isLease ? (step2Data.leaseMonth || "No Month") : (step2Data.purpose || "No Purpose")}</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center text-indigo-900">
                    <MapPin size={14} />
                    <span className="text-[13px] font-semibold">{catObj?.label || "Category"}</span>
                  </div>
                </div>
                <button onClick={onBack} className="text-indigo-600 font-bold text-[13px] hover:underline shrink-0">Edit</button>
              </div>
              <div className="text-[13px] text-indigo-900/70 font-medium mt-1">
                Budget: <span className="font-bold text-indigo-900">{step2Data.budget || "-"}</span>
                {step2Data.size && <span className="mx-1.5">•</span>}
                {step2Data.size && <span>Size: <span className="font-bold text-indigo-900">{step2Data.size}</span></span>}
              </div>
              <div className="text-[13px] text-indigo-900/70 font-medium">
                Locations: <span className="font-bold text-indigo-900">{locationsText}</span>
              </div>
            </>
          )}
        </div>

      </main>

      <RequirementFooter onContinue={onNext} />
    </div>
  );
}
