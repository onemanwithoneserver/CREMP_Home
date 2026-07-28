import { motion } from "framer-motion";
import { fullCycleSupportData } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export default function FullCycleSupportDesktop() {
  return (
    <section className="w-full bg-[#0a1128] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-2">
            {fullCycleSupportData.sectionLabel}
          </p>
          <h2 className="text-xl font-bold text-white mb-2">
            {fullCycleSupportData.title}
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            {fullCycleSupportData.subtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold rounded-full hover:bg-[#D4AF37]/20 transition-all"
          >
            {fullCycleSupportData.ctaLabel}
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-5 gap-4"
        >
          {fullCycleSupportData.supportItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.3)" }}
                className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-4 text-center hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Icon size={18} className="text-[#D4AF37]" />
                </div>
                <h4 className="text-white font-semibold text-xs mb-1">{item.title}</h4>
                <p className="text-gray-500 text-[10px]">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
