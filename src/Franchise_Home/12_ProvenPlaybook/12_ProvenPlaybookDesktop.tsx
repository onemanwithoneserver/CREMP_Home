import { motion } from "framer-motion";
import { provenPlaybookData } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ProvenPlaybookDesktop() {
  return (
    <section className="w-full bg-[#0a1128] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-6 text-center"
        >
          {provenPlaybookData.sectionLabel}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-3 gap-4"
        >
          {provenPlaybookData.cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-all cursor-pointer group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${card.color}15` }}
                >
                  <Icon size={22} style={{ color: card.color }} />
                </div>
                <h4 className="text-white font-bold text-base mb-2">{card.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
