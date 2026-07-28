import { motion } from "framer-motion";
import { fullCycleSupportData } from "./data";

export default function FullCycleSupportMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <div className="bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded-lg p-6 mb-6 text-center shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary mb-2">
          {fullCycleSupportData.sectionLabel}
        </p>
        <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">{fullCycleSupportData.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-[13px] leading-relaxed mb-4">{fullCycleSupportData.subtitle}</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2 bg-primary text-white text-xs font-bold rounded hover-lift transition-all inline-block"
        >
          {fullCycleSupportData.ctaLabel}
        </motion.button>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {fullCycleSupportData.supportItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className="bg-white dark:bg-surface border border-border rounded-lg p-4 text-center hover-lift shadow-sm flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Icon size={16} strokeWidth={1.5} className="text-primary dark:text-accent" />
              </div>
              <h4 className="text-gray-900 dark:text-white font-bold text-[11px] mb-1.5">{item.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-[9px] leading-snug">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
