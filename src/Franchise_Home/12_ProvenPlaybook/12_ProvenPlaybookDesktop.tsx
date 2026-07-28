import { motion } from "framer-motion";
import { provenPlaybookData } from "./data";
import clsx from "clsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

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

export default function ProvenPlaybookDesktop() {
  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-10 text-center"
        >
          {provenPlaybookData.sectionLabel}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-3 gap-4"
        >
          {provenPlaybookData.cards.map((card) => {
            const Icon = card.icon;
            const styles = getIntentStyles(card.intent);
            return (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className={clsx("bg-white dark:bg-surface border rounded-lg p-8 shadow-sm hover-lift cursor-default transition-colors flex flex-col", styles.wrapper)}
              >
                <div
                  className={clsx("w-14 h-14 rounded-full flex items-center justify-center mb-5", styles.icon)}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-3">{card.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-1">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
