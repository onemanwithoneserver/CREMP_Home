import { motion } from "framer-motion";
import { idealPartnerData } from "./data";
import clsx from "clsx";

const getIntentStyles = (intent?: string) => {
  switch(intent) {
    case 'success': return { wrapper: 'border-success-light hover:border-success', icon: 'bg-success/10 text-success dark:bg-success/20', tag: 'bg-success/5 text-success dark:bg-success/10' };
    case 'info': return { wrapper: 'border-info-light hover:border-info', icon: 'bg-info/10 text-info dark:bg-info/20', tag: 'bg-info/5 text-info dark:bg-info/10' };
    case 'warning': return { wrapper: 'border-warning-light hover:border-warning', icon: 'bg-warning/10 text-warning dark:bg-warning/20', tag: 'bg-warning/5 text-warning dark:bg-warning/10' };
    case 'primary': return { wrapper: 'border-primary/20 hover:border-primary/40 dark:border-accent/30', icon: 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent', tag: 'bg-primary/5 text-primary dark:bg-accent/5 dark:text-accent' };
    default: return { wrapper: 'border-border hover:border-gray-300 dark:hover:border-gray-600', icon: 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400', tag: 'bg-gray-50 text-gray-500 dark:bg-gray-800/50 dark:text-gray-400' };
  }
};

export default function IdealPartnerMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <div className="bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded-lg p-6 mb-6 text-center shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary mb-2">
          {idealPartnerData.sectionLabel}
        </p>
        <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">{idealPartnerData.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-[13px] leading-relaxed">{idealPartnerData.subtitle}</p>
      </div>

      <div className="space-y-3 mb-4">
        {idealPartnerData.criteria.map((item) => {
          const Icon = item.icon;
          const styles = getIntentStyles(item.intent);
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={clsx("bg-white dark:bg-surface border rounded-lg p-5 shadow-sm hover-lift cursor-pointer", styles.wrapper)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center", styles.icon)}>
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <h4 className="text-gray-900 dark:text-white font-bold text-sm">{item.title}</h4>
              </div>
              <div className="space-y-1.5 mb-3">
                {item.items.map((subItem, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">{subItem.label}</span>
                    {subItem.value && (
                      <span className="text-gray-900 dark:text-white text-xs font-semibold">{subItem.value}</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-[11px] leading-snug">{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {idealPartnerData.additionalCriteria.map((item) => {
          const Icon = item.icon;
          const styles = getIntentStyles(item.intent);
          return (
            <div key={item.title} className={clsx("bg-gray-50 dark:bg-surface-alt border rounded-lg p-4 text-center shadow-sm flex flex-col items-center justify-between hover-lift", styles.wrapper)}>
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center mb-3", styles.icon)}>
                <Icon size={14} strokeWidth={1.5} />
              </div>
              <h4 className="text-gray-900 dark:text-white font-bold text-[10px] mb-2">{item.title}</h4>
              <div className="space-y-1 flex-1 flex flex-col justify-end w-full">
                {item.items.map((tag, idx) => (
                  <span key={idx} className={clsx("text-[9px] font-medium py-1 px-1.5 rounded w-full", styles.tag)}>{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
