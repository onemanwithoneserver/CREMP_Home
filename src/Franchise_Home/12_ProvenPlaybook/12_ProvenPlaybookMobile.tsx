import { motion } from "framer-motion";
import { provenPlaybookData } from "./data";
import clsx from "clsx";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";

export default function ProvenPlaybookMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-6 text-center">
        {provenPlaybookData.sectionLabel}
      </p>

      <div className="space-y-3">
        {provenPlaybookData.cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={clsx("rounded-[4px] border p-5 flex items-start gap-4 shadow-sm hover-lift cursor-default transition-all duration-300", getCardStyles(card.intent))}
            >
              <div
                className={clsx("w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-xs", getIconContainerStyles(card.intent))}
              >
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1.5">{card.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
