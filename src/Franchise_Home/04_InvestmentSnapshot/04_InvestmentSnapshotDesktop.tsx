import { motion } from "framer-motion";
import { investmentSnapshotData } from "./data";
import clsx from "clsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const getIntentStyles = (intent?: string) => {
  switch(intent) {
    case 'success': return { wrapper: 'border-success-light bg-success-surface dark:border-success/20 dark:bg-success/5', icon: 'text-success bg-success/10 dark:bg-success/20' };
    case 'info': return { wrapper: 'border-info-light bg-info-surface dark:border-info/20 dark:bg-info/5', icon: 'text-info bg-info/10 dark:bg-info/20' };
    case 'warning': return { wrapper: 'border-warning-light bg-warning-surface dark:border-warning/20 dark:bg-warning/5', icon: 'text-warning bg-warning/10 dark:bg-warning/20' };
    case 'primary': return { wrapper: 'border-primary/20 bg-primary/5 dark:border-accent/20 dark:bg-accent/5', icon: 'text-primary dark:text-accent bg-primary/10 dark:bg-accent/10' };
    default: return { wrapper: 'border-gray-200 bg-white dark:border-border dark:bg-surface', icon: 'text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-surface-alt' };
  }
};

export default function InvestmentSnapshotDesktop() {
  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-8 text-center"
        >
          {investmentSnapshotData.sectionLabel}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-3 gap-4"
        >
          {investmentSnapshotData.stats.map((stat) => {
            const Icon = stat.icon;
            const styles = getIntentStyles(stat.intent);
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className={clsx("relative overflow-hidden rounded-lg border p-6 shadow-sm hover-lift cursor-pointer", styles.wrapper)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={clsx("w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-xs", styles.icon)}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-[22px] font-bold text-gray-900 dark:text-white leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-[13px] font-medium text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
