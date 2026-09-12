import { useState } from "react";
import ModernSelect from "../../components/ModernSelect";

import StepHeader from "../../components/StepHeader";
import { projectStatuses, unitConditions, industryTypes, fundingSources, profileOptions } from "./data";
import { requirementTypes, propertyCategories, industries } from "../Step 1/data";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building, Layers, Clock, MapPin, AlertCircle } from "lucide-react";
import type { Step1Data, Step2Data, Step3Data } from "../index";

interface Step4DesktopProps {
  onNext: () => void;
  onBack: () => void;
  step1Data: Step1Data;
  step2Data: Step2Data;
  step3Data: Step3Data;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Step4Desktop({ onNext, onBack, step1Data, step2Data, step3Data }: Step4DesktopProps) {
  const [error, setError] = useState<string | null>(null);
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

  const handleNext = () => {
    if (isFranchise && !profile) {
      setError("Please select a profile that describes you.");
      return;
    }
    if ((isBuyOrSellProp || isLease) && (!projectStatus || !unitCondition)) {
      setError("Please select project status and unit condition.");
      return;
    }
    if (isLease && selectedIndustries.length === 0) {
      setError("Please select at least one industry type.");
      return;
    }
    if (isBuyOrSellProp && !funding) {
      setError("Please select a source of funding.");
      return;
    }
    setError(null);
    onNext();
  };

  return (
    <div className="h-full min-h-full w-full bg-[#fafafb] dark:bg-[#060e24] text-[#0a1128] dark:text-white font-['Outfit',sans-serif] flex flex-col items-center overflow-y-auto scrollbar-hide">
      <div className="w-full">
        <StepHeader currentStep={4} totalSteps={5} onBack={onBack} />
      </div>

      <main className="w-full max-w-3xl px-8 mt-4 mb-0 flex flex-col flex-1">
        <motion.div 
          className="bg-white dark:bg-[#0b1b42] rounded border border-[#0a1128]/8 dark:border-white/10 shadow-[0_4px_24px_rgba(10,17,40,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] p-6 flex flex-col gap-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute top-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

          
          {isFranchise && (
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Which profile best describes you?</h3>
              <p className="text-[12px] text-gray-400 dark:text-white/40 font-semibold mb-4 uppercase tracking-wider">Select the profile that fits your background</p>
              <ModernSelect value={profile} onChange={(val: string) => setProfile(val)} options={[{ value: "", label: "Select Profile" }, ...profileOptions.map(p => ({ value: p, label: p }))]} />
            </motion.div>
          )}

          
          {(isBuyOrSellProp || isLease) && (
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Preferred project status?</h3>
                <div className="flex flex-col gap-2.5 mt-4">
                  <div className="flex gap-3">
                    {projectStatuses.map((s) => (
                      <button
                        key={s}
                        onClick={() => setProjectStatus(s)}
                        className={`flex-1 flex items-center justify-between p-4 rounded border-2 transition-all duration-300 ${
                          projectStatus === s 
                            ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08] text-[#0a1128] dark:text-white shadow-[0_0_0_3px_rgba(212,175,55,0.12)]" 
                            : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-gray-500 dark:text-white/50 hover:border-[#0a1128]/15 dark:hover:border-white/20"
                        }`}
                      >
                        <span className="text-[13px] font-bold">{s}</span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                          projectStatus === s ? "border-[#d4af37]" : "border-gray-300 dark:border-white/20"
                        }`}>
                          {projectStatus === s && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Preferred unit condition?</h3>
                <div className="grid grid-cols-2 gap-2.5 mt-4">
                  {unitConditions.map((c) => (
                    <button
                      key={c}
                      onClick={() => setUnitCondition(c)}
                      className={`flex items-center justify-between p-4 rounded border-2 transition-all duration-300 ${
                        unitCondition === c 
                          ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08] text-[#0a1128] dark:text-white shadow-[0_0_0_3px_rgba(212,175,55,0.12)]" 
                          : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-gray-500 dark:text-white/50 hover:border-[#0a1128]/15 dark:hover:border-white/20"
                      }`}
                    >
                      <span className="text-[13px] font-bold">{c}</span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        unitCondition === c ? "border-[#d4af37]" : "border-gray-300 dark:border-white/20"
                      }`}>
                        {unitCondition === c && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          
          {isLease && (
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Which floor do you prefer?</h3>
              <input 
                type="text" 
                placeholder="e.g. 1st Floor, Ground Floor, etc."
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                className="w-full mt-3 p-4 rounded border-2 border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white text-[14px] outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 placeholder:text-gray-300 dark:placeholder:text-white/25 font-medium"
              />
            </motion.div>
          )}

          
          {isLease && (
            <motion.div {...fadeUp} transition={{ delay: 0.25 }}>
              <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Which industry type(s) apply?</h3>
              <p className="text-[12px] text-gray-400 dark:text-white/40 font-bold mb-4 uppercase tracking-wider">(Select Multiple)</p>
              <div className="flex flex-wrap gap-2.5">
                {industryTypes.map((ind) => {
                  const isSelected = selectedIndustries.includes(ind);
                  return (
                    <button
                      key={ind}
                      onClick={() => toggleIndustry(ind)}
                      className={`px-4 py-2.5 rounded-full border-2 text-[12px] font-bold transition-all duration-300 ${
                        isSelected 
                          ? "border-[#d4af37] bg-[#d4af37]/10 dark:bg-[#d4af37]/15 text-[#d4af37] shadow-[0_0_0_3px_rgba(212,175,55,0.1)]" 
                          : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-gray-500 dark:text-white/50 hover:border-[#0a1128]/15 dark:hover:border-white/20"
                      }`}
                    >
                      {ind}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          
          {isBuyOrSellProp && (
            <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
              <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">What is your source of funding?</h3>
              <div className="flex gap-3 mt-4 w-1/2">
                {fundingSources.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFunding(f)}
                    className={`flex-1 flex items-center justify-between p-4 rounded border-2 transition-all duration-300 ${
                      funding === f 
                        ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08] text-[#0a1128] dark:text-white shadow-[0_0_0_3px_rgba(212,175,55,0.12)]" 
                        : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-gray-500 dark:text-white/50 hover:border-[#0a1128]/15 dark:hover:border-white/20"
                    }`}
                  >
                    <span className="text-[13px] font-bold">{f}</span>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      funding === f ? "border-[#d4af37]" : "border-gray-300 dark:border-white/20"
                    }`}>
                      {funding === f && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          
          <motion.div {...fadeUp} transition={{ delay: 0.35 }}>
            <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Any additional requirement notes?</h3>
            <textarea 
              placeholder="Mention additional details here so that your requirement will be matched accurately"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full mt-3 p-4 rounded border-2 border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white text-[14px] outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 min-h-[140px] resize-y placeholder:text-gray-300 dark:placeholder:text-white/25 font-medium"
            />
          </motion.div>

          
          <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="bg-[#0a1128]/[0.03] dark:bg-white/[0.04] rounded border border-[#0a1128]/6 dark:border-white/8 p-5 flex flex-col gap-2.5">
            {(isFranchise || isBusiness) ? (
              <>
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-4 items-center flex-wrap">
                    <div className="flex gap-2 items-center text-[#0a1128] dark:text-white">
                      <div className="w-7 h-7 rounded-sm bg-[#d4af37]/10 flex items-center justify-center"><Icon1 size={14} className="text-[#d4af37]" /></div>
                      <span className="text-[13px] font-semibold">{label1}</span>
                    </div>
                    <div className="w-[1px] h-4 bg-[#0a1128]/10 dark:bg-white/10 hidden sm:block" />
                    <div className="flex gap-2 items-center text-[#0a1128] dark:text-white">
                      <div className="w-7 h-7 rounded-sm bg-[#d4af37]/10 flex items-center justify-center"><Layers size={14} className="text-[#d4af37]" /></div>
                      <span className="text-[13px] font-semibold">{indObj?.label || "Industry"}</span>
                    </div>
                  </div>
                  <button onClick={onBack} className="text-[#d4af37] font-bold text-[12px] hover:underline">Edit</button>
                </div>
                <div className="text-[13px] text-[#0a1128]/60 dark:text-white/50 font-medium">Budget: <span className="font-bold text-[#0a1128] dark:text-white">{step2Data.budget || "-"}</span></div>
                <div className="text-[13px] text-[#0a1128]/60 dark:text-white/50 font-medium">Locations: <span className="font-bold text-[#0a1128] dark:text-white">{locationsText}</span></div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-start w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex gap-3 items-center flex-wrap">
                      <div className="flex gap-2 items-center text-[#0a1128] dark:text-white">
                        <div className="w-7 h-7 rounded-sm bg-[#d4af37]/10 flex items-center justify-center"><Icon1 size={14} className="text-[#d4af37]" /></div>
                        <span className="text-[13px] font-semibold">{label1}</span>
                      </div>
                      <div className="w-[1px] h-4 bg-[#0a1128]/10 dark:bg-white/10" />
                      <div className="flex gap-2 items-center text-[#0a1128] dark:text-white">
                        <div className="w-7 h-7 rounded-sm bg-[#d4af37]/10 flex items-center justify-center"><Clock size={14} className="text-[#d4af37]" /></div>
                        <span className="text-[13px] font-semibold">{isLease ? (step2Data.leaseMonth || "No Month") : (step2Data.purpose || "No Purpose")}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center text-[#0a1128] dark:text-white">
                      <div className="w-7 h-7 rounded-sm bg-[#d4af37]/10 flex items-center justify-center"><MapPin size={14} className="text-[#d4af37]" /></div>
                      <span className="text-[13px] font-semibold">{catObj?.label || "Category"}</span>
                    </div>
                  </div>
                  <button onClick={onBack} className="text-[#d4af37] font-bold text-[12px] hover:underline shrink-0">Edit</button>
                </div>
                <div className="text-[13px] text-[#0a1128]/60 dark:text-white/50 font-medium mt-1">
                  Budget: <span className="font-bold text-[#0a1128] dark:text-white">{step2Data.budget || "-"}</span>
                  {step2Data.size && <span className="mx-2">•</span>}
                  {step2Data.size && <span>Size: <span className="font-bold text-[#0a1128] dark:text-white">{step2Data.size}</span></span>}
                </div>
                <div className="text-[13px] text-[#0a1128]/60 dark:text-white/50 font-medium">Locations: <span className="font-bold text-[#0a1128] dark:text-white">{locationsText}</span></div>
              </>
            )}
          </motion.div>

          
          </motion.div>
        <div className="sticky bottom-0 mt-auto pt-4 pb-8 w-full bg-[#fafafb] dark:bg-[#060e24] z-50 flex flex-col gap-3">
          <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 px-4 py-3 rounded flex items-center gap-3"
                >
                  <AlertCircle size={18} className="shrink-0" />
                  <span className="text-[13px] font-semibold">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>
          <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className="w-full py-4 rounded font-bold text-[15px] flex items-center justify-center gap-2 transition-all text-white shadow-[0_8px_24px_rgba(10,17,40,0.2)]"
                style={{ background: "linear-gradient(135deg, #0a1128 0%, #1a3463 100%)" }}
              >
                Continue
                <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                  <ArrowRight size={14} className="text-[#d4af37]" />
                </div>
              </motion.button>
        </div>
      </main>
    </div>
  );
}
