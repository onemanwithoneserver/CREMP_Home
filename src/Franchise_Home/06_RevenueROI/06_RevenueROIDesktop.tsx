import { motion } from "framer-motion";
import { revenueROIData } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function RevenueROIDesktop() {
  return (
    <section className="w-full bg-[#0a1128] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-6 text-center"
        >
          {revenueROIData.sectionLabel}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {revenueROIData.revenueCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.year}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase">{card.year}</span>
                  <span
                    className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${card.color}15`, color: card.color }}
                  >
                    {card.label}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${card.color}15` }}
                  >
                    <Icon size={18} style={{ color: card.color }} />
                  </div>
                  <p className="text-3xl font-black text-white">{card.range}</p>
                </div>
                <p className="text-gray-400 text-sm">{card.description}</p>
                <p className="text-gray-600 text-xs mt-1">{card.sublabel}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-6"
        >
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-2">
            {revenueROIData.paybackPeriod.sectionLabel}
          </p>
          <h3 className="text-2xl font-black text-white mb-6">
            {revenueROIData.paybackPeriod.title}
          </h3>

          <div className="flex items-center gap-4">
            {revenueROIData.paybackPeriod.milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <div key={idx} className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      milestone.status === "complete"
                        ? "bg-green-500/15 text-green-400"
                        : milestone.status === "active"
                        ? "bg-[#D4AF37]/15 text-[#D4AF37] ring-2 ring-[#D4AF37]/30"
                        : "bg-gray-800 text-gray-500"
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="text-xs text-gray-400">{milestone.label}</span>
                  {idx < revenueROIData.paybackPeriod.milestones.length - 1 && (
                    <div className="flex-1 h-px bg-gray-800" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
