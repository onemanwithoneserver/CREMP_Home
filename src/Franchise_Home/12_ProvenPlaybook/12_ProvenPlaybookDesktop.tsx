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
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full"
          >
            <div className="flex items-center gap-1.5">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
            </div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
              {provenPlaybookData.sectionLabel}
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            </div>
          </motion.div>

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



