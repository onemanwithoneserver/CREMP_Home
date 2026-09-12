import { useState } from "react";
import ModernSelect from "../../components/ModernSelect";

import MobileStepHeader from "../../components/MobileStepHeader";
import { projectStatuses, unitConditions, industryTypes, fundingSources, profileOptions } from "./data";
import { requirementTypes, propertyCategories, industries } from "../Step 1/data";
import { Building, Layers, Clock, MapPin, ArrowRight, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Step1Data, Step2Data, Step3Data } from "../index";

interface Step4MobileProps {
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

export default function Step4Mobile({ onNext, onBack, step1Data, step2Data, step3Data }: Step4MobileProps) {
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
    <div className="h-full min-h-full w-full bg-[#fafafb] dark:bg-[#060e24] text-[#0a1128] dark:text-white font-['Outfit',sans-serif] flex flex-col relative overflow-hidden">
      
      {/* ── Fixed Mobile Header ── */}
      <MobileStepHeader currentStep={4} totalSteps={5} onBack={onBack} title="Additional Details" />

      {/* ── Scrollable Content ── */}
      <main className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-8 p-5 pb-32">

        {isFranchise && (
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Which profile best describes you?</h3>
            <p className="text-[12px] text-gray-400 dark:text-white/40 mb-3 font-medium">Select the profile that fits your background</p>
            <ModernSelect value={profile} onChange={(val: string) => setProfile(val)} options={[{ value: "", label: "Select Profile" }, ...profileOptions.map(p => ({ value: p, label: p }))]} />
          </motion.div>
        )}

        {(isBuyOrSellProp || isLease) && (
          <>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">What is your preferred project status?</h3>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {projectStatuses.map((s, i) => {
                  const isSelected = projectStatus === s;
                  return (
                    <motion.button
                      key={s}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.02 }}
                      onClick={() => setProjectStatus(s)}
                      className={`p-3.5 rounded border-2 text-center transition-all duration-300 flex items-center justify-between ${
                        isSelected
                          ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08]"
                          : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42]"
                      }`}
                    >
                      <span className={`text-[12px] font-bold ${isSelected ? "text-[#0a1128] dark:text-white" : "text-gray-500 dark:text-white/50"}`}>{s}</span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        isSelected ? "border-[#d4af37]" : "border-gray-300 dark:border-white/20"
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">What is your preferred unit condition?</h3>
              <div className="grid grid-cols-1 gap-3 mt-4">
                {unitConditions.map((c, i) => {
                  const isSelected = unitCondition === c;
                  return (
                    <motion.button
                      key={c}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + i * 0.02 }}
                      onClick={() => setUnitCondition(c)}
                      className={`p-4 rounded border-2 text-left transition-all duration-300 flex items-center justify-between ${
                        isSelected
                          ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08]"
                          : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42]"
                      }`}
                    >
                      <span className={`text-[13px] font-bold ${isSelected ? "text-[#0a1128] dark:text-white" : "text-gray-500 dark:text-white/50"}`}>{c}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        isSelected ? "border-[#d4af37]" : "border-gray-300 dark:border-white/20"
                      }`}>
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}

        {isLease && (
          <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
            <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Which floor do you prefer?</h3>
            <input 
              type="text" 
              placeholder="e.g. 1st Floor, Ground Floor, etc."
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              className="w-full mt-2 p-4 rounded border-2 border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 text-[14px] placeholder:text-gray-400 dark:placeholder:text-white/25 font-medium"
            />
          </motion.div>
        )}

        {isLease && (
          <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
            <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Which industry type(s) apply to your business?</h3>
            <p className="text-[12px] text-gray-400 dark:text-white/40 mb-4 font-medium">Select multiple if applicable</p>
            <div className="flex flex-wrap gap-2">
              {industryTypes.map((ind) => {
                const isSelected = selectedIndustries.includes(ind);
                return (
                  <button
                    key={ind}
                    onClick={() => toggleIndustry(ind)}
                    className={`px-4 py-2 rounded-full border-2 transition-all duration-300 text-[12px] font-semibold ${
                      isSelected
                        ? "border-[#d4af37] bg-[#d4af37]/10 dark:bg-[#d4af37]/15 text-[#d4af37]"
                        : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128]/60 dark:text-white/50"
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
            <div className="grid grid-cols-2 gap-3 mt-4">
              {fundingSources.map((f, i) => {
                const isSelected = funding === f;
                return (
                  <motion.button
                    key={f}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.02 }}
                    onClick={() => setFunding(f)}
                    className={`p-3.5 rounded border-2 text-center transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08]"
                        : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42]"
                    }`}
                  >
                    <span className={`text-[12px] font-bold ${isSelected ? "text-[#0a1128] dark:text-white" : "text-gray-500 dark:text-white/50"}`}>{f}</span>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      isSelected ? "border-[#d4af37]" : "border-gray-300 dark:border-white/20"
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        <motion.div {...fadeUp} transition={{ delay: 0.5 }}>
          <h3 className="text-[18px] font-bold mb-1 text-[#0a1128] dark:text-white">Do you have any additional requirement notes?</h3>
          <textarea 
            placeholder="Mention additional details here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full mt-2 p-4 rounded border-2 border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 text-[14px] min-h-[100px] resize-y placeholder:text-gray-400 dark:placeholder:text-white/25 font-medium"
          />
        </motion.div>

        {/* Summary bar */}
        <motion.div {...fadeUp} transition={{ delay: 0.6 }} className="bg-[#0a1128]/[0.03] dark:bg-white/[0.04] rounded border border-[#0a1128]/6 dark:border-white/8 p-4 flex flex-col gap-3">
          {(isFranchise || isBusiness) ? (
            <>
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center flex-wrap">
                  <div className="flex gap-1.5 items-center text-[#0a1128] dark:text-white">
                    <Icon1 size={14} className="text-[#d4af37]" /> 
                    <span className="text-[12px] font-bold">{label1}</span>
                  </div>
                  <div className="w-[1px] h-3 bg-[#0a1128]/10 dark:bg-white/10"></div>
                  <div className="flex gap-1.5 items-center text-[#0a1128] dark:text-white">
                    <Layers size={14} className="text-[#d4af37]" />
                    <span className="text-[12px] font-bold">{indObj?.label || "Industry"}</span>
                  </div>
                </div>
                <button onClick={onBack} className="text-[#d4af37] font-bold text-[12px] hover:underline">Edit</button>
              </div>
              <div className="text-[12px] text-[#0a1128]/60 dark:text-white/50 font-medium">
                Budget: <span className="font-bold text-[#0a1128] dark:text-white">{step2Data.budget || "-"}</span>
              </div>
              <div className="text-[12px] text-[#0a1128]/60 dark:text-white/50 font-medium">
                Locations: <span className="font-bold text-[#0a1128] dark:text-white">{locationsText}</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="flex gap-2 items-center flex-wrap">
                    <div className="flex gap-1.5 items-center text-[#0a1128] dark:text-white">
                      <Icon1 size={14} className="text-[#d4af37]" /> 
                      <span className="text-[12px] font-bold">{label1}</span>
                    </div>
                    <div className="w-[1px] h-3.5 bg-[#0a1128]/10 dark:bg-white/10"></div>
                    <div className="flex gap-1.5 items-center text-[#0a1128] dark:text-white">
                      <Clock size={14} className="text-[#d4af37]" />
                      <span className="text-[12px] font-bold">{isLease ? (step2Data.leaseMonth || "No Month") : (step2Data.purpose || "No Purpose")}</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center text-[#0a1128] dark:text-white mt-1">
                    <MapPin size={14} className="text-[#d4af37]" />
                    <span className="text-[12px] font-bold">{catObj?.label || "Category"}</span>
                  </div>
                </div>
                <button onClick={onBack} className="text-[#d4af37] font-bold text-[12px] hover:underline shrink-0">Edit</button>
              </div>
              <div className="text-[12px] text-[#0a1128]/60 dark:text-white/50 font-medium mt-1">
                Budget: <span className="font-bold text-[#0a1128] dark:text-white">{step2Data.budget || "-"}</span>
                {step2Data.size && <span className="mx-1.5">•</span>}
                {step2Data.size && <span>Size: <span className="font-bold text-[#0a1128] dark:text-white">{step2Data.size}</span></span>}
              </div>
              <div className="text-[12px] text-[#0a1128]/60 dark:text-white/50 font-medium">
                Locations: <span className="font-bold text-[#0a1128] dark:text-white">{locationsText}</span>
              </div>
            </>
          )}
        </motion.div>

      </main>

      {/* ── Fixed Footer & Error ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="bg-gradient-to-t from-[#fafafb] dark:from-[#060e24] via-[#fafafb]/90 dark:via-[#060e24]/90 to-transparent pt-6 pb-5 px-5">
          <div className="flex flex-col gap-3">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 10, height: 0 }}
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 px-4 py-3 rounded flex items-center gap-3 shadow-lg"
                >
                  <AlertCircle size={16} className="shrink-0" />
                  <span className="text-[12px] font-semibold">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="w-full py-4 rounded font-bold text-[15px] flex items-center justify-center gap-2 text-white shadow-[0_8px_24px_rgba(10,17,40,0.2)]"
              style={{ background: "linear-gradient(135deg, #0a1128 0%, #1a3463 100%)" }}
            >
              Continue
              <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                <ArrowRight size={14} className="text-[#d4af37]" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

    </div>
  );
}
