import { motion } from "framer-motion";
import { revenueROIData } from "./data";
import clsx from "clsx";
import { getCardStyles, getBadgeStyles, getIconContainerStyles } from "../utils/theme";

export default function RevenueROIMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-6 text-center">
        {revenueROIData.sectionLabel}
      </p>
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide mb-6">
        {revenueROIData.revenueCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.year}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={clsx("shrink-0 w-[220px] rounded-[4px] border p-5 shadow-sm hover-lift cursor-default transition-all duration-300", getCardStyles(card.intent))}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{card.year}</span>
                <span
                  className={clsx("text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-[2px]", getBadgeStyles(card.intent))}
                >
                  {card.label}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={clsx("w-8 h-8 rounded-full flex items-center justify-center shadow-xs", getIconContainerStyles(card.intent))}
                >
                  <Icon size={14} strokeWidth={1.5} />
                </div>
                <p className="text-2xl font-black text-gray-900 dark:text-white">{card.range}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-snug">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="bg-white dark:bg-surface border border-border rounded p-5 shadow-sm hover-lift">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
          {revenueROIData.paybackPeriod.sectionLabel}
        </p>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-5">
          {revenueROIData.paybackPeriod.title}
        </h3>
        <div className="space-y-4">
          {revenueROIData.paybackPeriod.milestones.map((milestone, idx) => {
            const Icon = milestone.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className={clsx(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                    milestone.status === "complete"
                      ? "bg-success-surface border-success-light text-success dark:bg-success/10 dark:border-success/20"
                      : milestone.status === "active"
                      ? "bg-primary/5 border-primary/20 text-primary dark:bg-accent/10 dark:border-accent/20 dark:text-accent ring-2 ring-primary/20 dark:ring-accent/30"
                      : "bg-gray-50 border-gray-200 text-gray-400 dark:bg-surface-alt dark:border-border dark:text-gray-500"
                  )}
                >
                  <Icon size={14} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{milestone.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
