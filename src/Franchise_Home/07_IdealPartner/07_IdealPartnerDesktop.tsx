import clsx from "clsx";
import { motion } from "framer-motion";
import {
  getCardStyles,
  getIconContainerStyles,
  getCheckBadgeStyles,
} from "../utils/theme";
import { idealPartnerData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { BadgeCheck } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 30,
      mass: 0.8,
    },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export default function IdealPartnerDesktop() {
  return (
    <section className="w-full px-6 py-12 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          overline={idealPartnerData.sectionLabel}
          title={idealPartnerData.title}
          subtitle={idealPartnerData.subtitle}
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-3 gap-4 mt-6 mb-4"
        >
          {idealPartnerData.multiSelects.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={clsx(
                  "rounded-2xl border border-gray-200 dark:border-gray-700 p-5 flex flex-col bg-white dark:bg-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group",
                  getCardStyles(item.intent),
                )}
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={clsx(
                      "w-11 h-11 rounded-xl flex shrink-0 items-center justify-center shadow-sm",
                      getIconContainerStyles(item.intent),
                    )}
                  >
                    <Icon size={20} strokeWidth={2} className="text-white" />
                  </motion.div>
                  <h4 className="text-[#0b1b42] dark:text-white font-bold text-lg tracking-tight leading-tight group-hover:text-[#d4af37] transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  {item.items.map((subItem, idx) => {
                    const badgeStyles = getCheckBadgeStyles(item.intent);
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 group/item cursor-default"
                      >
                        <div
                          className={clsx(
                            "mt-[2px] shrink-0 transition-transform duration-300 group-hover/item:scale-110 rounded-full p-0.5",
                            badgeStyles.wrapper,
                          )}
                        >
                          <BadgeCheck
                            size={16}
                            className={clsx(
                              "text-gray-300 dark:text-gray-600 transition-all duration-300 group-hover/item:drop-shadow-md",
                              badgeStyles.icon,
                            )}
                            strokeWidth={2}
                          />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 font-medium text-[13.5px] leading-snug group-hover/item:text-[#0b1b42] dark:group-hover/item:text-white transition-colors duration-300">
                          {subItem}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-3 gap-4 mb-4"
        >
          {idealPartnerData.singleSelects.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={clsx(
                  "rounded-2xl border border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-3.5 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group",
                  getCardStyles(item.intent),
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={clsx(
                    "w-10 h-10 rounded-xl flex shrink-0 items-center justify-center shadow-sm",
                    getIconContainerStyles(item.intent),
                  )}
                >
                  <Icon size={18} strokeWidth={2} className="text-white" />
                </motion.div>
                <div className="flex flex-col justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-0.5 group-hover:text-[#d4af37] transition-colors duration-300">
                    {item.title}
                  </span>
                  <span className="text-[#0b1b42] dark:text-white font-bold text-sm tracking-tight">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={stagger}
          className="w-full"
        >
          <motion.div
            variants={fadeInUp}
            className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm flex items-center gap-5 group"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-12 h-12 rounded-xl bg-[#0a1128] dark:bg-gray-700 text-white flex items-center justify-center shrink-0 shadow-sm"
            >
              <idealPartnerData.additionalExpectations.icon
                size={22}
                className="text-white"
                strokeWidth={2}
              />
            </motion.div>
            <div className="flex flex-col">
              <h4 className="text-[#0b1b42] dark:text-white font-bold text-base tracking-tight mb-0.5">
                {idealPartnerData.additionalExpectations.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 font-medium text-[13.5px] leading-relaxed">
                {idealPartnerData.additionalExpectations.text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}