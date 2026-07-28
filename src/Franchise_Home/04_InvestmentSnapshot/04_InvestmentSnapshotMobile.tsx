import { motion } from "framer-motion";
import { investmentSnapshotData } from "./data";
import clsx from "clsx";

const getIntentStyles = (intent?: string) => {
  switch(intent) {
    case 'success': return { wrapper: 'border-success-light bg-success-surface dark:border-success/20 dark:bg-success/5', icon: 'text-success bg-success/10 dark:bg-success/20' };
    case 'info': return { wrapper: 'border-info-light bg-info-surface dark:border-info/20 dark:bg-info/5', icon: 'text-info bg-info/10 dark:bg-info/20' };
    case 'warning': return { wrapper: 'border-warning-light bg-warning-surface dark:border-warning/20 dark:bg-warning/5', icon: 'text-warning bg-warning/10 dark:bg-warning/20' };
    case 'primary': return { wrapper: 'border-primary/20 bg-primary/5 dark:border-accent/20 dark:bg-accent/5', icon: 'text-primary dark:text-accent bg-primary/10 dark:bg-accent/10' };
    default: return { wrapper: 'border-gray-200 bg-white dark:border-border dark:bg-surface', icon: 'text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-surface-alt' };
  }
};

export default function InvestmentSnapshotMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-6 text-center">
        {investmentSnapshotData.sectionLabel}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {investmentSnapshotData.stats.map((stat, idx) => {
          const Icon = stat.icon;
          const styles = getIntentStyles(stat.intent);
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={clsx("rounded-lg border p-4 shadow-sm hover-lift flex flex-col", styles.wrapper)}
            >
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center shrink-0 mb-3", styles.icon)}>
                <Icon size={14} strokeWidth={1.5} />
              </div>
              <p className="text-[9px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 mb-0.5">
                {stat.label}
              </p>
              <p className="text-[16px] font-bold text-gray-900 dark:text-white leading-tight">
                {stat.value}
              </p>
              <p className="text-[10px] font-medium text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                {stat.sublabel}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
