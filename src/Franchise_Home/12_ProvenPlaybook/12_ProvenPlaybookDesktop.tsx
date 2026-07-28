import { motion } from "framer-motion";
import { provenPlaybookData } from "./data";
import clsx from "clsx";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";

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
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-10 text-center"
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
                className={clsx("rounded-lg border p-8 shadow-sm hover-lift cursor-default transition-all duration-300 flex flex-col", getCardStyles(card.intent))}
              >
                <div
                  className={clsx("w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-xs", getIconContainerStyles(card.intent))}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-3">{card.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-1">
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
