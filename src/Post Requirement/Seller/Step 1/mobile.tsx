import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { propertyTypes } from "./data";

interface Step1MobileProps {
  onNext: () => void;
}

export default function Step1Mobile({ onNext }: Step1MobileProps) {
  const [propType, setPropType] = useState<string>("commercial");

  return (
    <div className="h-full min-h-screen w-full bg-white text-[#0a1128] font-sans flex flex-col">
      
      {/* Header */}
      <div className="w-full bg-[#1b253b] text-white">
        <div className="flex flex-col">
          <div className="flex items-center p-4 relative">
            <button className="w-10 h-10 flex items-center justify-center rounded-[8px] bg-white/10 hover:bg-white/20 transition-colors absolute left-4">
              <ArrowLeft size={20} className="text-white" />
            </button>
            <h2 className="text-[16px] font-bold text-center w-full">
              Seller Step 1 of 5
            </h2>
          </div>
          
          <div className="flex items-center gap-2 px-6 pb-4 pt-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: step === 1 ? "100%" : "0%" }}
                  className="absolute top-0 left-0 bottom-0 bg-[#d4af37]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1 p-6 flex flex-col gap-8 pb-24">
        
        <div>
          <h3 className="text-[20px] font-bold mb-1 text-[#0a1128]">What are you selling?</h3>
          <p className="text-[13px] text-gray-400 mb-5">Select the type of property you want to list.</p>
          <div className="grid grid-cols-2 gap-3">
            {propertyTypes.map((type) => {
              const isSelected = propType === type.id;
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setPropType(type.id)}
                  className={`flex flex-col items-center justify-center gap-3 p-4 rounded-[10px] border-2 transition-all duration-300 ${
                    isSelected
                      ? "border-[#d4af37] bg-orange-50/20 shadow-sm"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  <Icon size={28} className={isSelected ? "text-[#d4af37]" : "text-[#1b253b]"} strokeWidth={1.5} />
                  <span className="text-[13px] font-bold text-[#1b253b] text-center leading-tight">
                    {type.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-10">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="w-full py-4 rounded-[8px] font-bold text-[16px] flex items-center justify-center gap-2 transition-all shadow-lg"
          style={{ background: "linear-gradient(135deg, #c5a034 0%, #dcae3a 100%)", color: "#ffffff" }}
        >
          Continue <ArrowRight size={18} />
        </motion.button>
      </div>

    </div>
  );
}
