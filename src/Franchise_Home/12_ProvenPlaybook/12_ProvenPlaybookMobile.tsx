import { motion } from "framer-motion";
import { provenPlaybookData } from "./data";
import clsx from "clsx";

const getIntentStyles = (intent?: string) => {
  switch(intent) {
    case 'success': return { wrapper: 'border-success-light hover:border-success', icon: 'bg-success/10 text-success' };
    case 'info': return { wrapper: 'border-info-light hover:border-info', icon: 'bg-info/10 text-info' };
    case 'warning': return { wrapper: 'border-warning-light hover:border-warning', icon: 'bg-warning/10 text-warning' };
    case 'danger': return { wrapper: 'border-danger-light hover:border-danger', icon: 'bg-danger/10 text-danger' };
    case 'primary': return { wrapper: 'border-primary/20 hover:border-primary/40', icon: 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent' };
    default: return { wrapper: 'border-border hover:border-gray-300 dark:hover:border-gray-600', icon: 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400' };
  }
};

export default function ProvenPlaybookMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-6 text-center">
        {provenPlaybookData.sectionLabel}
      </p>

      <div className="space-y-3">
        {provenPlaybookData.cards.map((card) => {
          const Icon = card.icon;
          const styles = getIntentStyles(card.intent);
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={clsx("bg-white dark:bg-surface border rounded-lg p-5 flex items-start gap-4 shadow-sm hover-lift", styles.wrapper)}
            >
              <div
                className={clsx("w-12 h-12 rounded-full flex items-center justify-center shrink-0", styles.icon)}
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
