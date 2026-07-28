import { motion } from "framer-motion";
import { idealPartnerData } from "./data";
import clsx from "clsx";
import { getCardStyles, getIconContainerStyles, getBadgeStyles } from "../utils/theme";

export default function IdealPartnerMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <div className="bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded p-6 mb-6 text-center shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary mb-2">
          {idealPartnerData.sectionLabel}
        </p>
        <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">{idealPartnerData.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{idealPartnerData.subtitle}</p>
      </div>

      <div className="space-y-3 mb-4">
        {idealPartnerData.criteria.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={clsx("rounded-[4px] border p-5 shadow-sm hover-lift cursor-default transition-all duration-300", getCardStyles(item.intent))}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center shadow-xs", getIconContainerStyles(item.intent))}>
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <h4 className="text-gray-900 dark:text-white font-bold text-sm">{item.title}</h4>
              </div>
              <div className="space-y-1.5 mb-3">
                {item.items.map((subItem, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">{subItem.label}</span>
                    {subItem.value && (
                      <span className="text-gray-900 dark:text-white text-xs font-semibold">{subItem.value}</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-snug">{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {idealPartnerData.additionalCriteria.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className={clsx("bg-gray-50 dark:bg-surface-alt border rounded-[4px] p-4 text-center shadow-sm flex flex-col items-center justify-between hover-lift transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600")}>
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center mb-3 shadow-xs", getIconContainerStyles(item.intent))}>
                <Icon size={14} strokeWidth={1.5} />
              </div>
              <h4 className="text-gray-900 dark:text-white font-bold text-xs mb-2">{item.title}</h4>
              <div className="space-y-1 flex-1 flex flex-col justify-end w-full">
                {item.items.map((tag, idx) => (
                  <span key={idx} className={clsx("text-xs font-medium py-1 px-1.5 rounded-[2px] w-full", getBadgeStyles(item.intent))}>{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
