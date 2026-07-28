import { motion } from "framer-motion";
import { revenueROIData } from "./data";

export default function RevenueROIMobile() {
  return (
    <section className="w-full bg-[#0a1128] px-4 py-6">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-4 text-center">
        {revenueROIData.sectionLabel}
      </p>
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide mb-6">
        {revenueROIData.revenueCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.year}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="shrink-0 w-[200px] bg-[#0d1a3a] border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-gray-500 uppercase">{card.year}</span>
                <span
                  className="text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: `${card.color}15`, color: card.color }}
                >
                  {card.label}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${card.color}15` }}
                >
                  <Icon size={14} style={{ color: card.color }} />
                </div>
                <p className="text-2xl font-black text-white">{card.range}</p>
              </div>
              <p className="text-gray-400 text-[10px]">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-4">
        <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-1">
          {revenueROIData.paybackPeriod.sectionLabel}
        </p>
        <h3 className="text-xl font-black text-white mb-4">
          {revenueROIData.paybackPeriod.title}
        </h3>
        <div className="space-y-3">
          {revenueROIData.paybackPeriod.milestones.map((milestone, idx) => {
            const Icon = milestone.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    milestone.status === "complete"
                      ? "bg-green-500/15 text-green-400"
                      : milestone.status === "active"
                      ? "bg-[#D4AF37]/15 text-[#D4AF37] ring-2 ring-[#D4AF37]/30"
                      : "bg-gray-800 text-gray-500"
                  }`}
                >
                  <Icon size={14} />
                </div>
                <span className="text-xs text-gray-400">{milestone.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
