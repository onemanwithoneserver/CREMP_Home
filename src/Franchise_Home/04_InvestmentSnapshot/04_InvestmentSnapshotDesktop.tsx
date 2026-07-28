import { motion } from "framer-motion";
import { investmentSnapshotData } from "./data";
import clsx from "clsx";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function InvestmentSnapshotDesktop() {
  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-8 text-center"
        >
          {investmentSnapshotData.sectionLabel}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-3 gap-4"
        >
          {investmentSnapshotData.stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className={clsx("relative overflow-hidden rounded-lg border p-6 shadow-sm hover-lift cursor-default transition-all duration-300", getCardStyles(stat.intent))}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={clsx("w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-xs", getIconContainerStyles(stat.intent))}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
