import { motion } from "framer-motion";
import { investmentSnapshotData } from "./data";
import clsx from "clsx";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";

export default function InvestmentSnapshotMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
            <div className="flex items-center gap-1.5">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
            </div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
              {investmentSnapshotData.sectionLabel}
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            </div>
          </div>

      <div className="grid grid-cols-2 gap-3">
        {investmentSnapshotData.stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={clsx("rounded-[4px] border p-4 shadow-sm hover-lift flex flex-col transition-colors duration-300", getCardStyles(stat.intent))}
            >
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center shrink-0 mb-3", getIconContainerStyles(stat.intent))}>
                <Icon size={14} strokeWidth={1.5} />
              </div>
              <p className="text-[10px] uppercase font-bold tracking-wide text-gray-500 dark:text-gray-400 mb-0.5 line-clamp-2">
                {stat.label}
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                {stat.value}
              </p>
              <p className="text-[10px] font-medium text-gray-600 dark:text-gray-400 mt-1 leading-snug line-clamp-2">
                {stat.sublabel}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
