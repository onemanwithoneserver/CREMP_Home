import { motion } from "framer-motion";
import { investmentSnapshotData } from "./data";

export default function InvestmentSnapshotMobile() {
  return (
    <section className="w-full bg-[#0a1128] px-4 py-6">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-4 text-center">
        {investmentSnapshotData.sectionLabel}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {investmentSnapshotData.stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-xl border p-4 ${
                stat.highlight
                  ? "border-[#D4AF37]/30 bg-[#D4AF37]/5"
                  : "border-gray-800 bg-[#0d1a3a]"
              }`}
            >
              <Icon
                size={14}
                className={stat.highlight ? "text-[#D4AF37] mb-2" : "text-gray-500 mb-2"}
              />
              <p className="text-[8px] uppercase tracking-wider text-gray-500 mb-0.5">
                {stat.label}
              </p>
              <p className={`text-base font-bold ${stat.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                {stat.value}
              </p>
              <p className="text-[9px] text-gray-500 mt-0.5">{stat.sublabel}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
