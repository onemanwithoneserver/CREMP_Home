import { motion } from "framer-motion";
import { idealPartnerData } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function IdealPartnerDesktop() {
  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-6 mb-8"
        >
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-2">
            {idealPartnerData.sectionLabel}
          </p>
          <h2 className="text-xl font-bold text-white mb-2">
            {idealPartnerData.title}
          </h2>
          <p className="text-gray-400 text-sm">{idealPartnerData.subtitle}</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          {idealPartnerData.criteria.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-5 hover:border-[#D4AF37]/30 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-accent" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                <div className="space-y-1 mb-3">
                  {item.items.map((subItem, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-gray-300 text-xs">{subItem.label}</span>
                      {subItem.value && (
                        <>
                          <span className="text-gray-600">·</span>
                          <span className="text-accent text-xs font-semibold">{subItem.value}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-3 gap-4"
        >
          {idealPartnerData.additionalCriteria.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center mb-3">
                  <Icon size={14} className="text-gray-400" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {item.items.map((tag, idx) => (
                    <span key={idx} className="text-xs text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-xs">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
