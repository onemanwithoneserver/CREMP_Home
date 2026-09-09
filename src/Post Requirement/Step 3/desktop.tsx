import { useState } from "react";
import StepHeader from "../components/StepHeader";
import { locationOptions, timeframeOptions } from "./data";
import { Map, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Step3DesktopProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Desktop({ onNext, onBack }: Step3DesktopProps) {
  const [location, setLocation] = useState("");
  const [timeframe, setTimeframe] = useState("");

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

  return (
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] font-sans flex flex-col items-center">
      <div className="w-full">
        <StepHeader currentStep={3} totalSteps={5} onBack={onBack} />
      </div>

      <main className="w-full max-w-4xl p-10 flex flex-col gap-12 bg-white rounded-3xl shadow-sm mt-8 mb-10">
        
        <div>
          <h3 className="text-[24px] font-bold mb-2">Where are you looking?</h3>
          <p className="text-[15px] text-gray-500 font-medium mb-6">Choose how you want to select the location</p>
          <div className="grid grid-cols-2 gap-6">
            {locationOptions.map((opt) => {
              const isSelected = location === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setLocation(opt.id)}
                  className={`flex items-center gap-5 p-6 rounded-2xl border transition-all text-left ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/30 shadow-md shadow-[#d4af37]/10" 
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="shrink-0 w-12 h-12 flex justify-center items-center rounded-xl bg-gray-50 border border-gray-100">
                    {getIcon(opt.id, isSelected)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[17px] font-bold mb-1 ${isSelected ? "text-[#0a1128]" : "text-gray-800"}`}>
                      {opt.title}
                    </div>
                    <div className="text-[14px] text-gray-500">{opt.subtitle}</div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[24px] font-bold mb-2">Timeframe to Purchase?</h3>
          <p className="text-[15px] text-gray-500 font-medium mb-6">Select your expected timeframe</p>
          <div className="grid grid-cols-2 gap-6">
            {timeframeOptions.map((opt) => {
              const isSelected = timeframe === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setTimeframe(opt.id)}
                  className={`flex items-center gap-5 p-6 rounded-2xl border transition-all text-left ${
                    isSelected 
                      ? "border-[#d4af37] bg-orange-50/30 shadow-md shadow-[#d4af37]/10" 
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="shrink-0 w-12 h-12 flex justify-center items-center rounded-xl bg-gray-50 border border-gray-100">
                    {getIcon(opt.id, isSelected)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[17px] font-bold mb-1 ${isSelected ? "text-[#0a1128]" : "text-gray-800"}`}>
                      {opt.title}
                    </div>
                    <div className="text-[14px] text-gray-500">{opt.subtitle}</div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? "border-[#d4af37]" : "border-gray-300"
                  }`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-[#d4af37]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            className="px-8 py-4 rounded-xl text-white font-bold text-[16px] flex items-center gap-2 transition-all"
            style={{ background: "linear-gradient(135deg, #d4af37 0%, #f3cd52 100%)", color: "#0a1128" }}
          >
            Continue <ArrowRight size={18} />
          </motion.button>
        </div>
      </main>
    </div>
  );
}
