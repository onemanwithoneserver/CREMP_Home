import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { requirementTypes, propertyCategories, industries } from "./data";

interface Step1DesktopProps {
  onNext: () => void;
}

export default function Step1Desktop({ onNext }: Step1DesktopProps) {
  const [reqType, setReqType] = useState<string>("sell_property");
  const [reqName, setReqName] = useState("");
  const [propCategory, setPropCategory] = useState<string>("retail_space");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  const toggleIndustry = (id: string) => {
    setSelectedIndustries((prev) => 
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="h-full min-h-full w-full bg-white text-[#0a1128] font-sans flex flex-col items-center">
      
      <div className="w-full bg-[#1b253b] text-white">
        <div className="flex flex-col">
          <div className="flex items-center p-4 relative">
            <button className="w-10 h-10 flex items-center justify-center rounded-[8px] bg-white/10 hover:bg-white/20 transition-colors absolute left-4">
              <ArrowLeft size={20} className="text-white" />
            </button>
            <h2 className="text-[18px] font-bold text-center w-full">
              Seller Step 1 of 5
            </h2>
          </div>
          
          <div className="flex items-center gap-2 px-8 pb-4 pt-2">
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

      <main className="w-full max-w-2xl p-8 flex flex-col gap-8 mt-4 mb-10">
        
        <div>
          <h3 className="text-[24px] font-bold mb-1 text-[#0a1128]">What are you selling?</h3>
          <p className="text-[14px] text-gray-400 mb-6">Select the type of requirement you want to list.</p>
          <div className="grid grid-cols-2 gap-4">
            {requirementTypes.map((type) => {
              const isSelected = reqType === type.id;
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setReqType(type.id)}
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[12px] border-2 transition-all duration-300 ${
                    isSelected
                      ? "border-[#d4af37] bg-orange-50/20 shadow-sm"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <Icon size={32} className={isSelected ? "text-[#d4af37]" : "text-[#1b253b]"} strokeWidth={1.5} />
                  <span className="text-[15px] font-bold text-[#1b253b] text-center leading-tight">
                    {type.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[24px] font-bold mb-1 text-[#0a1128]">Requirement Name</h3>
          <input 
            type="text" 
            placeholder="Enter a name for this requirement"
            value={reqName}
            onChange={(e) => setReqName(e.target.value)}
            className="w-full p-4 rounded-[8px] border-2 border-gray-100 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[15px] placeholder:text-gray-400 mt-2 font-medium"
          />
        </div>

        {(reqType === "sell_property" || reqType === "lease_property") && (
          <div>
            <h3 className="text-[24px] font-bold mb-1 text-[#0a1128]">What type of property?</h3>
            <p className="text-[14px] text-gray-400 mb-6">Select the property category.</p>
            <div className="grid grid-cols-3 gap-4">
              {propertyCategories.map((cat) => {
                const isSelected = propCategory === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setPropCategory(cat.id)}
                    className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[12px] border-2 transition-all duration-300 ${
                      isSelected
                        ? "border-[#d4af37] bg-orange-50/20 shadow-sm"
                        : "border-gray-100 bg-white hover:border-gray-200"
                    }`}
                  >
                    <Icon size={28} className={isSelected ? "text-red-500" : "text-[#1b253b]"} strokeWidth={1.5} />
                    <span className="text-[13px] font-bold text-[#1b253b] text-center leading-tight mt-1">
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {(reqType === "franchise_opportunity" || reqType === "sell_existing_business") && (
          <div>
            <h3 className="text-[24px] font-bold mb-1 text-[#0a1128]">Select Industry</h3>
            <p className="text-[14px] text-gray-400 mb-6">Select the industries you are interested in</p>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => {
                const isSelected = selectedIndustries.includes(ind.id);
                return (
                  <button
                    key={ind.id}
                    onClick={() => toggleIndustry(ind.id)}
                    className={`px-4 py-2 rounded-[8px] border-2 transition-all duration-300 text-[14px] font-medium ${
                      isSelected
                        ? "border-[#d4af37] bg-orange-50/20 text-[#d4af37] shadow-sm"
                        : "border-gray-100 bg-white text-[#1b253b] hover:border-gray-200"
                    }`}
                  >
                    {ind.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            className="w-full py-4 rounded-[8px] font-bold text-[16px] flex items-center justify-center gap-2 transition-all"
            style={{ background: "linear-gradient(135deg, #c5a034 0%, #dcae3a 100%)", color: "#ffffff" }}
          >
            Continue <ArrowRight size={18} />
          </motion.button>
        </div>

      </main>
    </div>
  );
}
