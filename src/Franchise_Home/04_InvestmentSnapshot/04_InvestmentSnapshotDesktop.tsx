import { motion } from "framer-motion";
import { investmentSnapshotData } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function InvestmentSnapshotDesktop() {
  return (
    <section className="w-full bg-[#0a1128] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-6 text-center"
        >
          {investmentSnapshotData.sectionLabel}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-3 gap-4"
        >
          {investmentSnapshotData.stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`relative overflow-hidden rounded-xl border p-5 transition-all cursor-pointer ${
                  stat.highlight
                    ? "border-[#D4AF37]/30 bg-[#D4AF37]/5"
                    : "border-gray-800 bg-[#0d1a3a]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      stat.highlight
                        ? "bg-[#D4AF37]/15 text-[#D4AF37]"
                        : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                      {stat.label}
                    </p>
                    <p
                      className={`text-xl font-bold ${
                        stat.highlight ? "text-[#D4AF37]" : "text-white"
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
