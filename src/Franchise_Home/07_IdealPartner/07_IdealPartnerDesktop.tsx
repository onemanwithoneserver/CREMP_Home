import { motion } from "framer-motion";
import { idealPartnerData } from "./data";
import clsx from "clsx";
import { getCardStyles, getIconContainerStyles, getBadgeStyles } from "../utils/theme";

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
          className="bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded-lg p-8 mb-10 text-center max-w-3xl mx-auto shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary mb-3">
            {idealPartnerData.sectionLabel}
          </p>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
            {idealPartnerData.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">{idealPartnerData.subtitle}</p>
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
                className={clsx("rounded-lg border p-6 shadow-sm hover-lift cursor-default transition-all duration-300 flex flex-col", getCardStyles(item.intent))}
              >
                <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-xs", getIconContainerStyles(item.intent))}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-gray-900 dark:text-white font-bold text-base mb-4">{item.title}</h4>
                <div className="space-y-2 mb-4 flex-1">
                  {item.items.map((subItem, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">{subItem.label}</span>
                      {subItem.value && (
                        <span className="text-gray-900 dark:text-white text-sm font-semibold">{subItem.value}</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-snug">{item.description}</p>
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
                className={clsx("bg-gray-50 dark:bg-surface-alt border p-6 rounded-lg shadow-sm hover-lift cursor-default transition-all duration-300 flex flex-col hover:border-gray-300 dark:hover:border-gray-600")}
              >
                <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-xs", getIconContainerStyles(item.intent))}>
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-3">{item.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4 flex-1">
                  {item.items.map((tag, idx) => (
                    <span key={idx} className={clsx("text-xs px-2.5 py-1 rounded-[2px] font-medium", getBadgeStyles(item.intent))}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-snug">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
