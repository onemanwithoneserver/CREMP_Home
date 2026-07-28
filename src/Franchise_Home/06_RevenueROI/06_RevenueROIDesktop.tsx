import { motion } from "framer-motion";
import { revenueROIData } from "./data";
import clsx from "clsx";
import { getCardStyles, getBadgeStyles, getIconContainerStyles } from "../utils/theme";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function RevenueROIDesktop() {
  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-8 text-center"
        >
          {revenueROIData.sectionLabel}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {revenueROIData.revenueCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.year}
                variants={fadeInUp}
                className={clsx("rounded-lg border p-6 shadow-sm hover-lift cursor-default transition-all duration-300", getCardStyles(card.intent))}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{card.year}</span>
                  <span
                    className={clsx("text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm", getBadgeStyles(card.intent))}
                  >
                    {card.label}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={clsx("w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-xs", getIconContainerStyles(card.intent))}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">{card.range}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-snug">{card.description}</p>
                <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">{card.sublabel}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-surface border border-border rounded-lg p-6 shadow-sm hover-lift"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
            {revenueROIData.paybackPeriod.sectionLabel}
          </p>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">
            {revenueROIData.paybackPeriod.title}
          </h3>

          <div className="flex items-center gap-4">
            {revenueROIData.paybackPeriod.milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <div key={idx} className="flex items-center gap-3 flex-1">
                  <div
                    className={clsx(
                      "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border",
                      milestone.status === "complete"
                        ? "bg-success-surface border-success-light text-success dark:bg-success/10 dark:border-success/20"
                        : milestone.status === "active"
                        ? "bg-primary/5 border-primary/20 text-primary dark:bg-accent/10 dark:border-accent/20 dark:text-accent ring-2 ring-primary/20 dark:ring-accent/30"
                        : "bg-gray-50 border-gray-200 text-gray-400 dark:bg-surface-alt dark:border-border dark:text-gray-500"
                    )}
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{milestone.label}</span>
                  {idx < revenueROIData.paybackPeriod.milestones.length - 1 && (
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
