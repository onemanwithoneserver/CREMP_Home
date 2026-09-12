import { useState } from "react";
import ModernDatePicker from "../../components/ModernDatePicker";

import ModernSelect from "../../components/ModernSelect";

import MobileStepHeader from "../../components/MobileStepHeader";
import { locationOptions, timeframeOptions } from "./data";
import { requirementTypes, propertyCategories, industries } from "../Step 1/data";
import { Map, MapPin, Clock, Calendar, Building, Layers, ArrowRight, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Step1Data, Step2Data, Step3Data } from "../index";

interface Step3MobileProps {
  onNext: () => void;
  onBack: () => void;
  step1Data: Step1Data;
  step2Data: Step2Data;
  step3Data: Step3Data;
  setStep3Data: React.Dispatch<React.SetStateAction<Step3Data>>;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Step3Mobile({ onNext, onBack, step1Data, step2Data, step3Data, setStep3Data }: Step3MobileProps) {
  const [error, setError] = useState<string | null>(null);
  const { location, selectedZone, selectedCircle, timeframe, selectedDate } = step3Data;
  const updateStep3Data = (field: keyof Step3Data, value: string) => {
    setStep3Data(prev => ({ ...prev, [field]: value }));
  };

  const getIcon = (id: string, isSelected: boolean) => {
    const iconClass = isSelected ? "text-white" : "text-[#0a1128]/40 dark:text-white/40";
    switch (id) {
      case "anywhere": return <Map className={iconClass} size={20} />;
      case "zone": return <MapPin className={iconClass} size={20} />;
      case "open": return <Clock className={iconClass} size={20} />;
      case "date": return <Calendar className={iconClass} size={20} />;
      default: return null;
    }
  };

  const { reqType, propCategory, selectedIndustries } = step1Data;

  const isFranchise = reqType === "franchise_opportunity";
  const isBusiness = reqType === "buy_existing_business" || reqType === "sell_existing_business";

  const reqTypeObj = requirementTypes.find((r) => r.id === reqType);
  const catObj = propertyCategories.find((c) => c.id === propCategory);
  const indObj = selectedIndustries.length > 0 ? industries.find(i => i.id === selectedIndustries[0]) : null;

  const Icon1 = reqTypeObj?.icon || Building;
  const Icon2 = (isFranchise || isBusiness) ? Layers : (catObj?.icon || Building);
  const label1 = reqTypeObj?.label || "Property";
  const label2 = (isFranchise || isBusiness) ? (indObj?.label || "Industry") : (catObj?.label || "Category");

  let timeframeLabel = "Timeframe to Purchase?";
  if (reqType === "lease_property") timeframeLabel = "Timeframe to Lease?";
  if (reqType === "sell_property") timeframeLabel = "Timeframe to Sell?";
  if (isFranchise || isBusiness) timeframeLabel = "Expected Timeline?";

  let locationsText = "-";
  if (location === "anywhere") {
    locationsText = "Anywhere in Hyderabad";
  } else if (location === "zone") {
    if (selectedZone && selectedCircle) locationsText = `${selectedCircle}, ${selectedZone}`;
    else if (selectedZone) locationsText = selectedZone;
  }

  const handleNext = () => {
    if (!location) {
      setError("Please select where you are looking.");
      return;
    }
    if (location === "zone" && (!selectedZone || !selectedCircle)) {
      setError("Please select both a zone and a circle.");
      return;
    }
    if (!timeframe) {
      setError("Please select an expected timeframe.");
      return;
    }
    if (timeframe === "date" && !selectedDate) {
      setError("Please select a date.");
      return;
    }
    setError(null);
    onNext();
  };

  return (
    <div className="h-full min-h-full w-full bg-[#fafafb] dark:bg-[#060e24] text-[#0a1128] dark:text-white font-['Outfit',sans-serif] flex flex-col relative overflow-hidden">
      
      
      <MobileStepHeader currentStep={3} totalSteps={5} onBack={onBack} title="Location & Timeline" />

      
      <main className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-5 p-4 pb-28">

        
        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">Where are you looking?</h3>
          <p className="text-[12px] text-gray-400 dark:text-white/40 mb-2 font-medium">Choose how you want to select the location</p>
          <div className="flex flex-col gap-3">
            {locationOptions.map((opt) => {
              const isSelected = location === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => updateStep3Data("location", opt.id)}
                  className={`flex items-center gap-4 p-4 rounded border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08]"
                      : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42]"
                  }`}
                >
                  <div className={`shrink-0 w-10 h-10 flex justify-center items-center rounded-sm transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-br from-[#d4af37] to-[#b8903c] text-white shadow-sm"
                      : "bg-[#0a1128]/[0.04] dark:bg-white/[0.06]"
                  }`}>
                    {getIcon(opt.id, isSelected)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[13px] font-bold mb-0.5 ${isSelected ? "text-[#0a1128] dark:text-white" : "text-[#0a1128]/70 dark:text-white/60"}`}>
                      {opt.title}
                    </div>
                    <div className="text-[11px] text-gray-400 dark:text-white/40">{opt.subtitle}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300 dark:border-white/20"
                  }`}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {location === "zone" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex gap-3 mt-4"
            >
              <div className="flex-1">
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white/80 mb-2 block uppercase tracking-wider">Select Zone</label>
                <ModernSelect value={selectedZone} onChange={(val: string) => { updateStep3Data("selectedZone", val);
                    updateStep3Data("selectedCircle", ""); }} options={[{ value: "", label: "Select Zone" }, { value: "West Zone", label: "West Zone" }, { value: "East Zone", label: "East Zone" }, { value: "South Zone", label: "South Zone" }]}  />
              </div>
              <div className="flex-1">
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white/80 mb-2 block uppercase tracking-wider">Select Circle</label>
                <ModernSelect value={selectedCircle} onChange={(val: string) => updateStep3Data("selectedCircle", val)} options={[{ value: "", label: selectedZone ? "Select Circle" : "Select Zone first" }, { value: "Jubilee Hills", label: "Jubilee Hills" }, { value: "Banjara Hills", label: "Banjara Hills" }, { value: "Madhapur", label: "Madhapur" }]} disabled={!selectedZone} />
              </div>
            </motion.div>
          )}
        </motion.div>

        
        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
          <h3 className="text-[16px] font-bold mb-0.5 text-[#0a1128] dark:text-white">{timeframeLabel}</h3>
          <p className="text-[12px] text-gray-400 dark:text-white/40 mb-2 font-medium">Select your expected timeframe</p>
          <div className="flex flex-col gap-3">
            {timeframeOptions.map((opt) => {
              const isSelected = timeframe === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => updateStep3Data("timeframe", opt.id)}
                  className={`flex items-center gap-4 p-4 rounded border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08]"
                      : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42]"
                  }`}
                >
                  <div className={`shrink-0 w-10 h-10 flex justify-center items-center rounded-sm transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-br from-[#d4af37] to-[#b8903c] text-white shadow-sm"
                      : "bg-[#0a1128]/[0.04] dark:bg-white/[0.06]"
                  }`}>
                    {getIcon(opt.id, isSelected)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[13px] font-bold mb-0.5 ${isSelected ? "text-[#0a1128] dark:text-white" : "text-[#0a1128]/70 dark:text-white/60"}`}>
                      {opt.title}
                    </div>
                    <div className="text-[11px] text-gray-400 dark:text-white/40">{opt.subtitle}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300 dark:border-white/20"
                  }`}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {timeframe === "date" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4"
            >
              <label className="text-[12px] font-bold text-[#0a1128] dark:text-white/80 mb-2 block uppercase tracking-wider">Date</label>
              <ModernDatePicker value={selectedDate} onChange={(val: string) => updateStep3Data("selectedDate", val)} />
            </motion.div>
          )}
        </motion.div>

        
        <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="bg-[#0a1128]/[0.03] dark:bg-white/[0.04] rounded border border-[#0a1128]/6 dark:border-white/8 p-4 flex flex-col gap-2.5">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-3 items-center flex-wrap">
              <div className="flex gap-1.5 items-center text-[#0a1128] dark:text-white">
                <Icon1 size={14} className="text-[#d4af37]" /> 
                <span className="text-[12px] font-bold">{label1}</span>
              </div>
              <div className="w-[1px] h-3 bg-[#0a1128]/10 dark:bg-white/10"></div>
              <div className="flex gap-1.5 items-center text-[#0a1128] dark:text-white">
                <Icon2 size={14} className="text-[#d4af37]" />
                <span className="text-[12px] font-bold">{label2}</span>
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
        </motion.div>

      </main>

      
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="bg-gradient-to-t from-[#fafafb] dark:from-[#060e24] via-[#fafafb]/90 dark:via-[#060e24]/90 to-transparent pt-4 pb-4 px-4">
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
