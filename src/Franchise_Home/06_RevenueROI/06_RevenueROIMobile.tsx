import { motion } from "framer-motion";
import { revenueROIData } from "./data";
import clsx from "clsx";

const getIntentStyles = (intent?: string) => {
  switch(intent) {
    case 'success': return { wrapper: 'border-success-light hover:border-success', badge: 'bg-success/10 text-success', icon: 'bg-success/10 text-success' };
    case 'info': return { wrapper: 'border-info-light hover:border-info', badge: 'bg-info/10 text-info', icon: 'bg-info/10 text-info' };
    case 'warning': return { wrapper: 'border-warning-light hover:border-warning', badge: 'bg-warning/10 text-warning', icon: 'bg-warning/10 text-warning' };
    case 'primary': return { wrapper: 'border-primary/20 hover:border-primary/40', badge: 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent', icon: 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent' };
    default: return { wrapper: 'border-border hover:border-gray-300 dark:hover:border-gray-600', badge: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400', icon: 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400' };
  }
};

export default function RevenueROIMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-6 text-center">
        {revenueROIData.sectionLabel}
      </p>
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide mb-6">
        {revenueROIData.revenueCards.map((card, idx) => {
          const Icon = card.icon;
          const styles = getIntentStyles(card.intent);
          return (
            <motion.div
              key={card.year}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={clsx("shrink-0 w-[220px] bg-white dark:bg-surface border rounded-lg p-5 shadow-sm hover-lift cursor-pointer", styles.wrapper)}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-gray-500 uppercase">{card.year}</span>
                <span
                  className={clsx("text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full", styles.badge)}
                >
                  {card.label}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={clsx("w-8 h-8 rounded-full flex items-center justify-center", styles.icon)}
                >
                  <Icon size={14} strokeWidth={1.5} />
                </div>
                <p className="text-2xl font-black text-gray-900 dark:text-white">{card.range}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-[13px] font-medium leading-snug">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="bg-white dark:bg-surface border border-border rounded-lg p-5 shadow-sm hover-lift">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
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
