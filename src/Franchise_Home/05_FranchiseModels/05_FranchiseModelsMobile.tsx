import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { franchiseModelsData } from "./data";

export default function FranchiseModelsMobile() {
  const [activeModel, setActiveModel] = useState(
    franchiseModelsData.models.find((m) => m.isPopular)?.id || franchiseModelsData.models[0].id
  );

  const selected = franchiseModelsData.models.find((m) => m.id === activeModel)!;

  return (
    <section className="w-full bg-[#0a1128] px-4 py-6">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-4 text-center">
        {franchiseModelsData.sectionLabel}
      </p>
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-4">
        {franchiseModelsData.models.map((model) => {
          const Icon = model.icon;
          const isActive = model.id === activeModel;
          return (
            <button
              key={model.id}
              onClick={() => setActiveModel(model.id)}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold whitespace-nowrap shrink-0 ${
                isActive
                  ? "bg-[#D4AF37] text-[#0a1128]"
                  : "border border-gray-700 text-gray-400"
              }`}
            >
              <Icon size={12} />
              {model.name}
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-4 mb-4"
        >
          <div className="flex items-center gap-2 mb-3">
            {(() => { const Icon = selected.icon; return <Icon size={16} className="text-[#D4AF37]" />; })()}
            <h4 className="text-white font-bold text-sm">{selected.name}</h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#0a1128] rounded-lg p-2.5 border border-gray-800/50">
              <p className="text-[8px] uppercase tracking-wider text-gray-500">Investment</p>
              <p className="text-[#D4AF37] font-bold text-sm">{selected.investmentRange}</p>
            </div>
            <div className="bg-[#0a1128] rounded-lg p-2.5 border border-gray-800/50">
              <p className="text-[8px] uppercase tracking-wider text-gray-500">Area</p>
              <p className="text-white font-bold text-sm">{selected.area}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-4">
        <h4 className="text-white font-bold text-xs mb-3">Cost Breakdown</h4>
        <div className="space-y-2.5">
          {franchiseModelsData.costBreakdown.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-gray-300 text-[10px]">{item.label}</span>
              </div>
              <span className="text-white font-semibold text-[10px]">{item.amount}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-800 flex items-center justify-between">
          <span className="text-gray-400 text-[10px]">{franchiseModelsData.totalLabel}</span>
          <span className="text-[#D4AF37] font-bold text-xs">{franchiseModelsData.totalInvestment}</span>
        </div>
      </div>
    </section>
  );
}
