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
          className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary mb-8 text-center"
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
                className="bg-white dark:bg-surface border border-border rounded-lg p-8 hover-lift cursor-pointer shadow-sm transition-colors flex flex-col"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.5} className="text-primary dark:text-accent" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary dark:text-accent">
                    {card.label}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
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
