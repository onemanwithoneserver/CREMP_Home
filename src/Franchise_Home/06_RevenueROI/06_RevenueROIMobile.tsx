import { motion } from "framer-motion";
import { revenueROIData } from "./data";
import clsx from "clsx";
import { getCardStyles, getBadgeStyles, getIconContainerStyles } from "../utils/theme";

export default function RevenueROIMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
            <div className="flex items-center gap-1.5">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
            </div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
              {revenueROIData.sectionLabel}
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            </div>
          </div>
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide mb-6">
        {revenueROIData.revenueCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.year}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={clsx("shrink-0 w-[240px] rounded-[4px] border p-5 shadow-sm hover-lift cursor-default transition-all duration-300", getCardStyles(card.intent))}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{card.year}</span>
                <span
                  className={clsx("text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-[2px] leading-tight text-right", getBadgeStyles(card.intent))}
                >
                  {card.label}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={clsx("w-8 h-8 rounded-full flex items-center justify-center shadow-xs", getIconContainerStyles(card.intent))}
                >
                  <Icon size={14} strokeWidth={1.5} />
                </div>
                <p className="text-2xl font-black text-gray-900 dark:text-white">{card.range}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-snug">{card.description}</p>
              <p className="text-gray-400 dark:text-gray-500 text-[10px] mt-1 font-medium">{card.sublabel}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="bg-white dark:bg-surface border border-border rounded p-5 shadow-sm hover-lift">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
          {revenueROIData.paybackPeriod.sectionLabel}
        </p>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-5">
          {revenueROIData.paybackPeriod.title}
        </h3>
        <div className="space-y-4">
          {revenueROIData.paybackPeriod.milestones.map((milestone, idx) => {
            const Icon = milestone.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className={clsx(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                      milestone.status === "complete"
                        ? "bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400"
                        : milestone.status === "active"
                        ? "bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37] ring-4 ring-[#d4af37]/10 dark:ring-[#d4af37]/20"
                        : "bg-slate-50 border-slate-200 text-slate-400 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-500"
                  )}
                >
                  <Icon size={14} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{milestone.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
