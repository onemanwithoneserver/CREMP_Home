import { useState } from "react";
import StepHeader from "../../components/StepHeader";
import RequirementFooter from "../../../components/commonfiles/Footer/RequirementFooter";
import { locationOptions, timeframeOptions } from "./data";
import { Map, MapPin, Clock, Calendar } from "lucide-react";

interface Step3MobileProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Mobile({ onNext, onBack }: Step3MobileProps) {
  const [location, setLocation] = useState("");
  const [timeframe, setTimeframe] = useState("");

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
        </div>

        <div className="bg-white rounded-[4px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5">
          <h3 className="text-[17px] font-bold mb-1 text-[#0a1128]">Timeframe to Purchase?</h3>
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
        </div>

      </main>

      <RequirementFooter onContinue={onNext} />
    </div>
  );
}
