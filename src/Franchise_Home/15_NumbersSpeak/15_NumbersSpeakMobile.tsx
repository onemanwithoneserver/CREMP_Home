import { motion } from "framer-motion";
import { numbersSpeakData } from "./data";
import clsx from "clsx";

const getIntentStyles = (intent?: string) => {
  switch(intent) {
    case 'success': return { wrapper: 'border-success-light hover:border-success', badge: 'bg-success/10 text-success', icon: 'text-success' };
    case 'info': return { wrapper: 'border-info-light hover:border-info', badge: 'bg-info/10 text-info', icon: 'text-info' };
    case 'warning': return { wrapper: 'border-warning-light hover:border-warning', badge: 'bg-warning/10 text-warning', icon: 'text-warning' };
    case 'danger': return { wrapper: 'border-danger-light hover:border-danger', badge: 'bg-danger/10 text-danger', icon: 'text-danger' };
    case 'primary': return { wrapper: 'border-primary/20 hover:border-primary/40', badge: 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent', icon: 'text-primary dark:text-accent' };
    default: return { wrapper: 'border-border hover:border-gray-300 dark:hover:border-gray-600', badge: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400', icon: 'text-gray-500' };
  }
};

export default function NumbersSpeakMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <div className="bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded-lg p-5 mb-6 flex flex-col items-start shadow-sm">
        <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">{numbersSpeakData.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-[13px]">{numbersSpeakData.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {numbersSpeakData.stats.map((stat, idx) => {
          const Icon = stat.icon;
          const styles = getIntentStyles(stat.intent);
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={clsx("bg-white dark:bg-surface border rounded-lg p-4 shadow-sm hover-lift", styles.wrapper)}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={clsx("text-[8px] font-bold uppercase px-2 py-1 rounded-full", styles.badge)}
                >
                  {stat.sublabel}
                </span>
                <Icon size={14} strokeWidth={1.5} className={styles.icon} />
              </div>
              <p className="text-2xl font-black text-gray-900 dark:text-white">
                {stat.value}
                <span className="text-primary dark:text-accent">{stat.suffix}</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-[11px] font-bold mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
