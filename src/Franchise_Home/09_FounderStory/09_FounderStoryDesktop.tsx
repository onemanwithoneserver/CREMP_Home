import { motion } from "framer-motion";
import { founderStoryData } from "./data";
import { Quote } from "lucide-react";
import clsx from "clsx";

const getIntentStyles = (intent?: string) => {
  switch(intent) {
    case 'success': return { text: 'text-success' };
    case 'info': return { text: 'text-info' };
    case 'warning': return { text: 'text-warning' };
    case 'danger': return { text: 'text-danger' };
    case 'primary': return { text: 'text-primary dark:text-accent' };
    default: return { text: 'text-gray-900 dark:text-white' };
  }
};

export default function FounderStoryDesktop() {
  return (
    <section className="w-full bg-background px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary mb-8 text-center"
        >
          {founderStoryData.sectionLabel}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-surface border border-border rounded-lg p-10 flex gap-10 shadow-sm"
        >
          <div className="flex-1">
            <Quote size={40} strokeWidth={1.5} className="text-primary/20 dark:text-accent/30 mb-6" />
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 italic">
              "{founderStoryData.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={founderStoryData.founder.avatar}
                alt={founderStoryData.founder.name}
                className="w-14 h-14 rounded-full object-cover shadow-sm border border-border"
              />
              <div>
                <p className="text-gray-900 dark:text-white font-bold text-base">
                  {founderStoryData.founder.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {founderStoryData.founder.title}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[240px] grid grid-cols-1 gap-4">
            {founderStoryData.stats.map((stat) => {
              const styles = getIntentStyles(stat.intent);
              return (
                <motion.div
                  key={stat.label}
                  className="bg-gray-50 dark:bg-surface-alt border border-border rounded-lg p-4 text-center hover-lift cursor-default transition-colors shadow-sm"
                >
                  <p className={clsx("text-3xl font-black mb-1", styles.text)}>
                    {stat.value}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
