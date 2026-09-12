import StepHeader from "../../components/StepHeader";
import { locationOptions, timeframeOptions } from "./data";
import { requirementTypes, propertyCategories, industries } from "../Step 1/data";
import { Map, MapPin, Clock, Calendar, ArrowRight, Building, Layers } from "lucide-react";
import { motion } from "framer-motion";
import type { Step1Data, Step2Data, Step3Data } from "../index";

interface Step3DesktopProps {
  onNext: () => void;
  onBack: () => void;
  step1Data: Step1Data;
  step2Data: Step2Data;
  step3Data: Step3Data;
  setStep3Data: React.Dispatch<React.SetStateAction<Step3Data>>;
}

export default function Step3Desktop({ onNext, onBack, step1Data, step2Data, step3Data, setStep3Data }: Step3DesktopProps) {
  const { location, selectedZone, selectedCircle, timeframe, selectedDate } = step3Data;
  const updateStep3Data = (field: keyof Step3Data, value: string) => {
    setStep3Data(prev => ({ ...prev, [field]: value }));
  };

  const getIcon = (id: string, isSelected: boolean) => {
    const iconClass = isSelected ? "text-[#d4af37]" : "text-gray-400";
    switch (id) {
      case "anywhere": return <Map className={iconClass} size={32} />;
      case "zone": return <MapPin className={iconClass} size={32} />;
      case "open": return <Clock className={iconClass} size={32} />;
      case "date": return <Calendar className={iconClass} size={32} />;
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

  return (
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans flex flex-col items-center">
      <div className="w-full">
        <StepHeader currentStep={3} totalSteps={5} onBack={onBack} />
      </div>

      <main className="w-full max-w-4xl p-8 flex flex-col gap-8 bg-white rounded-[4px] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] mt-8 mb-10 relative">
        <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

        <div>
          <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">Where are you looking?</h3>
          <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">Choose how you want to select the location</p>
          <div className="grid grid-cols-2 gap-4">
            {locationOptions.map((opt) => {
              const isSelected = location === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => updateStep3Data("location", opt.id)}
                  className={`flex items-center gap-5 p-5 rounded-[4px] border transition-all duration-300 text-left ${
                    isSelected
                      ? "border-[#d4af37] bg-orange-50/50 shadow-sm"
                      : "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <div className="shrink-0 w-12 h-12 flex justify-center items-center rounded-[4px] bg-gray-50 border border-gray-100">
                    {getIcon(opt.id, isSelected)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[15px] font-bold mb-1 ${isSelected ? "text-[#0a1128]" : "text-gray-600"}`}>
                      {opt.title}
                    </div>
                    <div className="text-[12px] text-gray-500">{opt.subtitle}</div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {location === "zone" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex gap-4 mt-6"
            >
              <div className="flex-1">
                <label className="text-[13px] font-bold text-[#0a1128] mb-2 block">Select Zone</label>
                <select 
                  value={selectedZone}
                  onChange={(e) => {
                    updateStep3Data("selectedZone", e.target.value);
                    updateStep3Data("selectedCircle", "");
                  }}
                  className="w-full p-4 rounded-[8px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[14px]"
                >
                  <option value="" disabled>Select Zone</option>
                  <option value="West Zone">West Zone</option>
                  <option value="East Zone">East Zone</option>
                  <option value="South Zone">South Zone</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="text-[13px] font-bold text-[#0a1128] mb-2 block">Select Circle</label>
                <select 
                  value={selectedCircle}
                  onChange={(e) => updateStep3Data("selectedCircle", e.target.value)}
                  disabled={!selectedZone}
                  className="w-full p-4 rounded-[8px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[14px] disabled:bg-gray-50 disabled:text-gray-400"
                >
                  <option value="" disabled>{selectedZone ? "Select Circle" : "Select Zone first"}</option>
                  <option value="Jubilee Hills">Jubilee Hills</option>
                  <option value="Banjara Hills">Banjara Hills</option>
                  <option value="Madhapur">Madhapur</option>
                </select>
              </div>
            </motion.div>
          )}
        </div>

        <div>
          <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">{timeframeLabel}</h3>
          <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">Select your expected timeframe</p>
          <div className="grid grid-cols-2 gap-4">
            {timeframeOptions.map((opt) => {
              const isSelected = timeframe === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => updateStep3Data("timeframe", opt.id)}
                  className={`flex items-center gap-5 p-5 rounded-[4px] border transition-all duration-300 text-left ${
                    isSelected
                      ? "border-[#d4af37] bg-orange-50/50 shadow-sm"
                      : "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <div className="shrink-0 w-12 h-12 flex justify-center items-center rounded-[4px] bg-gray-50 border border-gray-100">
                    {getIcon(opt.id, isSelected)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[15px] font-bold mb-1 ${isSelected ? "text-[#0a1128]" : "text-gray-600"}`}>
                      {opt.title}
                    </div>
                    <div className="text-[12px] text-gray-500">{opt.subtitle}</div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {timeframe === "date" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 w-1/2 pr-2"
            >
              <label className="text-[13px] font-bold text-[#0a1128] mb-2 block">Date</label>
              <div className="relative">
                <input 
                  type="date"
                  value={selectedDate}
                  onChange={(e) => updateStep3Data("selectedDate", e.target.value)}
                  className="w-full p-4 rounded-[8px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[14px]"
                />
              </div>
            </motion.div>
          )}
        </div>

        <div className="bg-indigo-50/50 rounded-[12px] border border-indigo-100 p-5 flex flex-col gap-3 mt-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center flex-wrap">
              <div className="flex gap-2 items-center text-indigo-900">
                <Icon1 size={18} /> 
                <span className="text-[15px] font-semibold">{label1}</span>
              </div>
              <div className="w-[1px] h-5 bg-indigo-200 hidden sm:block"></div>
              <div className="flex gap-2 items-center text-indigo-900">
                <Icon2 size={18} />
                <span className="text-[15px] font-semibold">{label2}</span>
              </div>
            </div>
            <button onClick={onBack} className="text-indigo-600 font-bold text-[14px] hover:underline">Edit</button>
          </div>
          <div className="text-[14px] text-indigo-900/70 font-medium mt-1">
            Budget: <span className="font-bold text-indigo-900">{step2Data.budget || "-"}</span>
          </div>
          <div className="text-[14px] text-indigo-900/70 font-medium">
            Locations: <span className="font-bold text-indigo-900">{locationsText}</span>
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
