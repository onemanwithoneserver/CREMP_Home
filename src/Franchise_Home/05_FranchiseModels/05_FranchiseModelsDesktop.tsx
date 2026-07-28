import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { franchiseModelsData } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

export default function FranchiseModelsDesktop() {
  const [activeModel, setActiveModel] = useState(
    franchiseModelsData.models.find((m) => m.isPopular)?.id || franchiseModelsData.models[0].id
  );

  const selected = franchiseModelsData.models.find((m) => m.id === activeModel)!;

  return (
    <section className="w-full bg-[#0a1128] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-6 text-center">
          {franchiseModelsData.sectionLabel}
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
          {franchiseModelsData.models.map((model) => {
            const Icon = model.icon;
            const isActive = model.id === activeModel;
            return (
              <motion.button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#D4AF37] text-[#0a1128] shadow-lg shadow-[#D4AF37]/30"
                    : "border border-gray-700 text-gray-400 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                }`}
              >
                <Icon size={14} />
                {model.name}
                {model.isPopular && (
                  <span className="absolute -top-2 -right-1 bg-green-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center">
                    {(() => { const Icon = selected.icon; return <Icon size={22} className="text-[#D4AF37]" />; })()}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{selected.name}</h3>
                    <p className="text-gray-400 text-xs">{selected.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-[#0a1128] rounded-lg p-3 border border-gray-800/50">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">Investment</p>
                    <p className="text-[#D4AF37] font-bold text-lg">{selected.investmentRange}</p>
                  </div>
                  <div className="bg-[#0a1128] rounded-lg p-3 border border-gray-800/50">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">Area Required</p>
                    <p className="text-white font-bold text-lg">{selected.area}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-6"
          >
            <h4 className="text-white font-bold text-sm mb-4">Cost Breakdown</h4>
            <div className="space-y-3">
              {franchiseModelsData.costBreakdown.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span className="text-gray-300 text-sm">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-white font-semibold text-sm">{item.amount}</span>
                    <div className="w-16 bg-gray-800 rounded-full h-1.5">
                      <div
                        className="bg-[#D4AF37] h-1.5 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
              <span className="text-gray-400 text-sm">{franchiseModelsData.totalLabel}</span>
              <span className="text-[#D4AF37] font-bold">{franchiseModelsData.totalInvestment}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
