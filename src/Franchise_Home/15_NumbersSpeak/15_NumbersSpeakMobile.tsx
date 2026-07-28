import { motion } from "framer-motion";
import { numbersSpeakData } from "./data";
import clsx from "clsx";
import { getCardStyles, getBadgeStyles, getTextStyles } from "../utils/theme";

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
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={clsx("rounded-[4px] border p-4 shadow-sm hover-lift cursor-default transition-all duration-300", getCardStyles(stat.intent))}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={clsx("text-[8px] font-bold uppercase px-2 py-1 rounded-[2px]", getBadgeStyles(stat.intent))}
                >
                  {stat.sublabel}
                </span>
                <Icon size={14} strokeWidth={1.5} className={getTextStyles(stat.intent)} />
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
