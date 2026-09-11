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
                  onClick={() => setLocation(opt.id)}
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
        </div>

        <div>
          <h3 className="text-[22px] font-bold mb-1 text-[#0a1128]">Timeframe to Purchase?</h3>
          <p className="text-[12px] text-gray-500 font-medium mb-6 uppercase tracking-wider">Select your expected timeframe</p>
          <div className="grid grid-cols-2 gap-4">
            {timeframeOptions.map((opt) => {
              const isSelected = timeframe === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setTimeframe(opt.id)}
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
