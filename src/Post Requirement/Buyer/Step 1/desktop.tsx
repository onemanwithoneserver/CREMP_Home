import { useState } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { requirementTypes, propertyCategories, industries } from "./data";

import type { Step1Data } from "../index";

import { ArrowLeft } from "lucide-react";

interface Step1DesktopProps {
  onNext: () => void;
  onBack?: () => void;
  step1Data: Step1Data;
  setStep1Data: (data: Step1Data | ((prev: Step1Data) => Step1Data)) => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Step1Desktop({ onNext, onBack, step1Data, setStep1Data }: Step1DesktopProps) {
  const [error, setError] = useState<string | null>(null);
  const { reqType, reqName, propCategory, selectedIndustries } = step1Data;

  const handleNext = () => {
    if (!reqType) {
      setError("Please select what you are looking for.");
      return;
    }
    if (!reqName.trim()) {
      setError("Please enter a requirement name.");
      return;
    }
    if (reqType === "buy_property" || reqType === "lease_property") {
      if (!propCategory) {
        setError("Please select a property type.");
        return;
      }
    }
    if (reqType === "franchise_opportunity" || reqType === "buy_existing_business") {
      if (selectedIndustries.length === 0) {
        setError("Please select at least one industry.");
        return;
      }
    }
    setError(null);
    onNext();
  };

  const toggleIndustry = (id: string) => {
    setStep1Data((prev) => ({
      ...prev,
      selectedIndustries: prev.selectedIndustries.includes(id) 
        ? prev.selectedIndustries.filter((i) => i !== id) 
        : [...prev.selectedIndustries, id]
    }));
  };

  return (
    <div className="h-full min-h-full w-full bg-[#fafafb] dark:bg-[#060e24] text-[#0a1128] dark:text-white font-['Outfit',sans-serif] flex flex-col items-center overflow-y-auto scrollbar-hide">
      
      
      <div className="w-full relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#111d3a] to-[#0a1128]" />
        
        
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4af37]/[0.06] rounded-full blur-[100px] pointer-events-none" />

        
        {onBack && (
          <button 
            onClick={onBack}
            className="absolute top-6 left-8 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
              <ArrowLeft size={16} />
            </div>
            <span className="text-[13px] font-medium">Back</span>
          </button>
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-8 py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur-sm mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-[11px] font-semibold text-white/70 tracking-widest uppercase">Step 1 of 5</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[30px] font-extrabold text-white leading-tight mb-3 tracking-tight"
          >
            Post Your{" "}
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f3cd52] bg-clip-text text-transparent">
              Requirement
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] text-white/50 max-w-md mx-auto leading-relaxed"
          >
            Tell us what you're looking for and we'll connect you with the right opportunities across India's premium commercial real estate market.
          </motion.p>
        </div>
      </div>

      
      <main className="w-full max-w-3xl px-8 flex flex-col gap-6 -mt-4 mb-8 relative z-20">
        
        
        <motion.div 
          className="bg-white dark:bg-[#0b1b42] rounded border border-[#0a1128]/8 dark:border-white/10 shadow-[0_4px_24px_rgba(10,17,40,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] p-6 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >

          
          <motion.div {...fadeUp} transition={{ delay: 0.35 }}>
            <h3 className="text-[18px] font-bold mb-0.5 text-[#0a1128] dark:text-white">What are you looking for?</h3>
            <p className="text-[13px] text-gray-400 dark:text-white/40 mb-3 font-medium">Select the type of requirement you want to post.</p>
            <div className="grid grid-cols-2 gap-3">
              {requirementTypes.map((type, i) => {
                const isSelected = reqType === type.id;
                const Icon = type.icon;
                return (
                  <motion.button
                    key={type.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.05, type: "spring", stiffness: 400, damping: 25 }}
                    onClick={() => setStep1Data((prev) => ({ ...prev, reqType: type.id }))}
                    className={`flex items-center gap-4 p-5 rounded border-2 transition-all duration-300 text-left group ${
                      isSelected
                        ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08] shadow-[0_0_0_3px_rgba(212,175,55,0.12)]"
                        : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] hover:border-[#0a1128]/15 dark:hover:border-white/20 hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    <div className={`w-11 h-11 rounded flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "bg-gradient-to-br from-[#d4af37] to-[#b8903c] text-white shadow-[0_4px_12px_rgba(212,175,55,0.3)]"
                        : "bg-[#0a1128]/[0.04] dark:bg-white/[0.06] text-[#0a1128]/60 dark:text-white/50 group-hover:bg-[#0a1128]/[0.08]"
                    }`}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <span className={`text-[14px] font-bold leading-tight ${
                      isSelected ? "text-[#0a1128] dark:text-white" : "text-[#0a1128]/70 dark:text-white/60"
                    }`}>
                      {type.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          
          <motion.div {...fadeUp} transition={{ delay: 0.45 }}>
            <h3 className="text-[18px] font-bold mb-0.5 text-[#0a1128] dark:text-white">Requirement Name</h3>
            <p className="text-[13px] text-gray-400 dark:text-white/40 mb-3 font-medium">Give a name to easily identify this requirement later.</p>
            <input 
              type="text" 
              placeholder="e.g. 2000 sqft retail space in Banjara Hills"
              value={reqName}
              onChange={(e) => setStep1Data((prev) => ({ ...prev, reqName: e.target.value }))}
              className="w-full p-4 rounded border-2 border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 text-[14px] placeholder:text-gray-300 dark:placeholder:text-white/25 font-medium"
            />
          </motion.div>

          
          {(reqType === "buy_property" || reqType === "lease_property") && (
            <motion.div {...fadeUp} transition={{ delay: 0.5 }}>
              <h3 className="text-[18px] font-bold mb-0.5 text-[#0a1128] dark:text-white">What type of property?</h3>
              <p className="text-[13px] text-gray-400 dark:text-white/40 mb-3 font-medium">Select the property category.</p>
              <div className="grid grid-cols-3 gap-3">
                {propertyCategories.map((cat, i) => {
                  const isSelected = propCategory === cat.id;
                  const Icon = cat.icon;
                  return (
                    <motion.button
                      key={cat.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.55 + i * 0.04, type: "spring", stiffness: 400, damping: 25 }}
                      onClick={() => setStep1Data((prev) => ({ ...prev, propCategory: cat.id }))}
                      className={`flex flex-col items-center justify-center gap-3 p-5 rounded border-2 transition-all duration-300 group ${
                        isSelected
                          ? "border-[#d4af37] bg-[#d4af37]/[0.05] dark:bg-[#d4af37]/[0.08] shadow-[0_0_0_3px_rgba(212,175,55,0.12)]"
                          : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] hover:border-[#0a1128]/15 dark:hover:border-white/20 hover:shadow-md hover:-translate-y-0.5"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-br from-[#d4af37] to-[#b8903c] text-white shadow-[0_4px_12px_rgba(212,175,55,0.3)]"
                          : "bg-[#0a1128]/[0.04] dark:bg-white/[0.06] text-[#0a1128]/50 dark:text-white/40 group-hover:bg-[#0a1128]/[0.08]"
                      }`}>
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className={`text-[12px] font-bold text-center leading-tight ${
                        isSelected ? "text-[#0a1128] dark:text-white" : "text-[#0a1128]/60 dark:text-white/50"
                      }`}>
                        {cat.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          
          {(reqType === "franchise_opportunity" || reqType === "buy_existing_business") && (
            <motion.div {...fadeUp} transition={{ delay: 0.5 }}>
              <h3 className="text-[18px] font-bold mb-0.5 text-[#0a1128] dark:text-white">Select Industry</h3>
              <p className="text-[13px] text-gray-400 dark:text-white/40 mb-3 font-medium">Select the industries you are interested in</p>
              <div className="flex flex-wrap gap-2.5">
                {industries.map((ind, i) => {
                  const isSelected = selectedIndustries.includes(ind.id);
                  return (
                    <motion.button
                      key={ind.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.55 + i * 0.03 }}
                      onClick={() => toggleIndustry(ind.id)}
                      className={`px-4 py-2.5 rounded-full border-2 transition-all duration-300 text-[13px] font-semibold ${
                        isSelected
                          ? "border-[#d4af37] bg-[#d4af37]/10 dark:bg-[#d4af37]/15 text-[#d4af37] shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
                          : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128]/60 dark:text-white/50 hover:border-[#0a1128]/20 dark:hover:border-white/20"
                      }`}
                    >
                      {ind.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          
          <motion.div {...fadeUp} transition={{ delay: 0.6 }} className="pt-1 flex flex-col gap-3">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 px-4 py-3 rounded flex items-center gap-3"
                >
                  <AlertCircle size={18} className="shrink-0" />
                  <span className="text-[13px] font-semibold">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleNext}
              className="w-full py-4 rounded font-bold text-[15px] flex items-center justify-center gap-2 transition-all text-white shadow-[0_8px_24px_rgba(10,17,40,0.2)]"
              style={{ background: "linear-gradient(135deg, #0a1128 0%, #1a3463 100%)" }}
            >
              Continue
              <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                <ArrowRight size={14} className="text-[#d4af37]" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
