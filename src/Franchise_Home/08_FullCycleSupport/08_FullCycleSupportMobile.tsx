import { motion } from "framer-motion";
import { fullCycleSupportData } from "./data";
import clsx from "clsx";

export default function FullCycleSupportMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <div className="bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded-lg p-6 mb-6 text-center shadow-sm">
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
            <div className="flex items-center gap-1.5">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
            </div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
              {fullCycleSupportData.sectionLabel}
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            </div>
          </div>
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
              <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3", item.colorClass)}>
                <Icon size={16} strokeWidth={1.5} />
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


