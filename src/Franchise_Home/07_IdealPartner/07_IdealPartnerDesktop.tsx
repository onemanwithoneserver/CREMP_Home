import clsx from "clsx";
import { motion } from "framer-motion";
import {
  getBadgeStyles,
  getCardStyles,
  getIconContainerStyles,
} from "../utils/theme";
import { idealPartnerData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { Check } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 350,
      damping: 25,
      mass: 0.8,
    },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function IdealPartnerDesktop() {
  return (
    <section className="w-full px-6 py-16 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[0%] w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div
          className="absolute bottom-[20%] right-[0%] w-96 h-96 bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>
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
          viewport={{ once: true, margin: "-50px" }}
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
                  "rounded-lg border border-gray-100 dark:border-white/5 p-5 transition-all duration-500 flex flex-col bg-white dark:bg-[#0b162c] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 group relative overflow-hidden",
                  getCardStyles(item.intent),
                )}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent dark:from-white/5 dark:to-transparent rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div
                    className={clsx(
                      "w-14 h-14 rounded-lg flex shrink-0 items-center justify-center shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                      getIconContainerStyles(item.intent),
                    )}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h4 className="text-[#0a1128] dark:text-white font-semibold text-xl tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>

                <div className="flex flex-col gap-3.5 flex-1 relative z-10">
                  {item.items.map((subItem, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-gray-50 dark:bg-white/5 group-hover/item:bg-primary/10 transition-colors duration-300">
                        <Check
                          size={12}
                          className={clsx(
                            "transition-colors duration-300",
                            getBadgeStyles(item.intent).split(" ")[0],
                            "group-hover/item:text-primary",
                          )}
                        />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 font-medium text-[16px] leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                        {subItem}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
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
                  "rounded-lg border border-gray-100 dark:border-white/5 px-5 py-4 transition-all duration-500 flex items-center gap-4 bg-white dark:bg-[#0b162c] shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 group",
                  getCardStyles(item.intent),
                )}
              >
                <div
                  className={clsx(
                    "w-12 h-12 rounded flex shrink-0 items-center justify-center shadow-sm transition-transform duration-500 group-hover:scale-110",
                    getIconContainerStyles(item.intent),
                  )}
                >
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-gray-400 dark:text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1 group-hover:text-primary/70 transition-colors duration-300">
                    {item.title}
                  </span>
                  <span className="text-[#0a1128] dark:text-white font-semibold text-[15px] tracking-tight">
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
          viewport={{ once: true }}
          variants={stagger}
          className="w-full flex justify-center"
        >
          <motion.div
            variants={fadeInUp}
            className="w-2/3 bg-[#0a1128] border-4 border-white dark:border-surface rounded-lg p-5 shadow-2xl flex items-center gap-6 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-inner relative z-10">
              <idealPartnerData.additionalExpectations.icon
                size={28}
                className="text-white"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col relative z-10">
              <h4 className="text-white font-semibold text-xl tracking-wide mb-2">
                {idealPartnerData.additionalExpectations.title}
              </h4>
              <p className="text-gray-300 font-medium text-[16px] leading-relaxed">
                {idealPartnerData.additionalExpectations.text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
