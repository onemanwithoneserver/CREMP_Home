import { motion } from "framer-motion";
import { missionVisionData } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function MissionVisionDesktop() {
  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-6 text-center"
        >
          {missionVisionData.sectionLabel}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 gap-6"
        >
          {missionVisionData.cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-[#0d1a3a] border border-gray-800 rounded p-6 hover:border-[#D4AF37]/30 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center group-hover:bg-[#D4AF37]/25 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[3px] text-accent">
                    {card.label}
                  </span>
                </div>
                <p className="text-gray-300 text-[15px] leading-relaxed">
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
