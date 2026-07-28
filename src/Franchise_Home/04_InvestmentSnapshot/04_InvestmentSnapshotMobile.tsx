import { motion } from "framer-motion";
import { investmentSnapshotData } from "./data";
import clsx from "clsx";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";

export default function InvestmentSnapshotMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-6 text-center">
        {investmentSnapshotData.sectionLabel}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {investmentSnapshotData.stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={clsx("rounded-[4px] border p-4 shadow-sm hover-lift flex flex-col transition-colors duration-300", getCardStyles(stat.intent))}
            >
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center shrink-0 mb-3", getIconContainerStyles(stat.intent))}>
                <Icon size={14} strokeWidth={1.5} />
              </div>
              <p className="text-xs uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 mb-0.5">
                {stat.label}
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                {stat.sublabel}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
