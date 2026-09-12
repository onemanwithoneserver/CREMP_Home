import { useState } from "react";
import StepHeader from "../../components/StepHeader";
import RequirementFooter from "../../../components/commonfiles/Footer/RequirementFooter";
import { locationOptions, timeframeOptions } from "./data";
import { requirementTypes, propertyCategories, industries } from "../Step 1/data";
import { Map, MapPin, Clock, Calendar, Building, Layers } from "lucide-react";
import { motion } from "framer-motion";
import type { Step1Data, Step2Data } from "../index";

interface Step3MobileProps {
  onNext: () => void;
  onBack: () => void;
  step1Data: Step1Data;
  step2Data: Step2Data;
}

export default function Step3Mobile({ onNext, onBack, step1Data, step2Data }: Step3MobileProps) {
  const [location, setLocation] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedCircle, setSelectedCircle] = useState("");

  const [timeframe, setTimeframe] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const getIcon = (id: string, isSelected: boolean) => {
    const iconClass = isSelected ? "text-[#d4af37]" : "text-gray-400";
    switch (id) {
      case "anywhere": return <Map className={iconClass} size={24} />;
      case "zone": return <MapPin className={iconClass} size={24} />;
      case "open": return <Clock className={iconClass} size={24} />;
      case "date": return <Calendar className={iconClass} size={24} />;
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
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans pb-32">
      <StepHeader currentStep={3} totalSteps={5} onBack={onBack} />

      <main className="p-4 flex flex-col gap-6">

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">Where are you looking?</h3>
          <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Choose how you want to select the location</p>
          <div className="flex flex-col gap-2.5">
            {locationOptions.map((opt) => {
              const isSelected = location === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setLocation(opt.id)}
                  className={`flex items-center gap-4 p-3.5 rounded-[4px] border transition-all duration-300 text-left ${
                    isSelected
                      ? "border-[#d4af37] bg-orange-50/50 shadow-sm"
                      : "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <div className="shrink-0 w-8 flex justify-center">
                    {getIcon(opt.id, isSelected)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[14px] font-bold mb-0.5 ${isSelected ? "text-[#0a1128]" : "text-gray-600"}`}>
                      {opt.title}
                    </div>
                    <div className="text-[11px] text-gray-500">{opt.subtitle}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300"
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
              className="flex flex-col gap-4 mt-4"
            >
              <div className="flex-1">
                <label className="text-[13px] font-bold text-[#0a1128] mb-1.5 block">Select Zone</label>
                <select 
                  value={selectedZone}
                  onChange={(e) => {
                    setSelectedZone(e.target.value);
                    setSelectedCircle("");
                  }}
                  className="w-full p-3.5 rounded-[8px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[13px]"
                >
                  <option value="" disabled>Select Zone</option>
                  <option value="West Zone">West Zone</option>
                  <option value="East Zone">East Zone</option>
                  <option value="South Zone">South Zone</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="text-[13px] font-bold text-[#0a1128] mb-1.5 block">Select Circle</label>
                <select 
                  value={selectedCircle}
                  onChange={(e) => setSelectedCircle(e.target.value)}
                  disabled={!selectedZone}
                  className="w-full p-3.5 rounded-[8px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[13px] disabled:bg-gray-50 disabled:text-gray-400"
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

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">{timeframeLabel}</h3>
          <p className="text-[11px] text-gray-500 font-medium mb-4 uppercase tracking-wider">Select your expected timeframe</p>
          <div className="flex flex-col gap-2.5">
            {timeframeOptions.map((opt) => {
              const isSelected = timeframe === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setTimeframe(opt.id)}
                  className={`flex items-center gap-4 p-3.5 rounded-[4px] border transition-all duration-300 text-left ${
                    isSelected
                      ? "border-[#d4af37] bg-orange-50/50 shadow-sm"
                      : "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <div className="shrink-0 w-8 flex justify-center">
                    {getIcon(opt.id, isSelected)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[14px] font-bold mb-0.5 ${isSelected ? "text-[#0a1128]" : "text-gray-600"}`}>
                      {opt.title}
                    </div>
                    <div className="text-[11px] text-gray-500">{opt.subtitle}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300"
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
              <label className="text-[13px] font-bold text-[#0a1128] mb-1.5 block">Date</label>
              <div className="relative">
                <input 
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3.5 rounded-[8px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[13px]"
                />
              </div>
            </motion.div>
          )}
        </div>

        <div className="bg-indigo-50/50 rounded-[12px] border border-indigo-100 p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-3 items-center flex-wrap">
              <div className="flex gap-2 items-center text-indigo-900">
                <Icon1 size={16} /> 
                <span className="text-[13px] font-semibold">{label1}</span>
              </div>
              <div className="w-[1px] h-4 bg-indigo-200"></div>
              <div className="flex gap-2 items-center text-indigo-900">
                <Icon2 size={16} />
                <span className="text-[13px] font-semibold">{label2}</span>
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
        </div>

      </main>

      <RequirementFooter onContinue={onNext} />
    </div>
  );
}
