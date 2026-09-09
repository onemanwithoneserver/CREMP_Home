import { useState } from "react";
import StepHeader from "../components/StepHeader";
import RequirementFooter from "../../components/commonfiles/Footer/RequirementFooter";
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

      <main className="p-5 flex flex-col gap-8 bg-white pb-10">
        
        <div>
          <h3 className="text-[20px] font-bold mb-1">Where are you looking?</h3>
          <p className="text-[13px] text-gray-500 font-medium mb-4">Choose how you want to select the location</p>
          <div className="flex flex-col gap-3">
            {locationOptions.map((opt) => {
              const isSelected = location === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setLocation(opt.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/30" 
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="shrink-0 w-8 flex justify-center">
                    {getIcon(opt.id, isSelected)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[15px] font-semibold mb-0.5 ${isSelected ? "text-[#0a1128]" : "text-gray-800"}`}>
                      {opt.title}
                    </div>
                    <div className="text-[12px] text-gray-400">{opt.subtitle}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-bold mb-1">Timeframe to Purchase?</h3>
          <p className="text-[13px] text-gray-500 font-medium mb-4">Select your expected timeframe</p>
          <div className="flex flex-col gap-3">
            {timeframeOptions.map((opt) => {
              const isSelected = timeframe === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setTimeframe(opt.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/30" 
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="shrink-0 w-8 flex justify-center">
                    {getIcon(opt.id, isSelected)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[15px] font-semibold mb-0.5 ${isSelected ? "text-[#0a1128]" : "text-gray-800"}`}>
                      {opt.title}
                    </div>
                    <div className="text-[12px] text-gray-400">{opt.subtitle}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
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
