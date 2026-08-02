import clsx from "clsx";
import { motion, type Variants } from "framer-motion";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};
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

export default function IdealPartnerMobile() {
  return (
    <section className="w-full px-4 py-10 relative overflow-hidden rounded-[8px] ">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -left-[10%] top-[-10%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute right-[-5%] bottom-[-10%] h-[250px] w-[250px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/10"
      />
      <div className="relative z-10 w-full">
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
          className="flex flex-col gap-3 mt-6 mb-3"
        >
          {idealPartnerData.multiSelects.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className={clsx(
                  "rounded-[4px] border border-gray-200/60 dark:border-[#d4af37]/20 p-4 flex flex-col bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] transition-all duration-300 group",
                  getCardStyles(item.intent),
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={clsx(
                      "w-9 h-9 rounded-[4px] flex shrink-0 items-center justify-center shadow-sm",
                      getIconContainerStyles(item.intent),
                    )}
                  >
                    <Icon size={18} strokeWidth={2} className="text-white" />
                  </motion.div>
                  <h4 className="text-[#0a1128] dark:text-white font-bold text-base tracking-tight leading-tight group-hover:text-[#d4af37] transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>

                <div className="flex flex-col gap-3">
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
                        <span className="text-gray-600 dark:text-gray-300 font-medium text-[13.5px] leading-snug group-hover/item:text-[#0a1128] dark:group-hover/item:text-white transition-colors duration-300">
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
          className="flex flex-col gap-3 mb-3"
        >
          {idealPartnerData.singleSelects.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className={clsx(
                  "rounded-[4px] border border-gray-200/60 dark:border-[#d4af37]/20 px-4 py-3 flex items-center gap-3.5 bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] transition-all duration-300 group relative overflow-hidden",
                  getCardStyles(item.intent),
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/5 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={clsx(
                    "w-9 h-9 rounded-[4px] flex shrink-0 items-center justify-center shadow-sm",
                    getIconContainerStyles(item.intent),
                  )}
                >
                  <Icon size={18} strokeWidth={2} className="text-white" />
                </motion.div>
                <div className="flex flex-col justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-0.5 group-hover:text-[#d4af37] transition-colors duration-300">
                    {item.title}
                  </span>
                  <span className="text-[#0a1128] dark:text-white font-bold text-sm tracking-tight">
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
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            className="w-full bg-[#0b1b42] border border-[#d4af37]/40 rounded-[4px] p-5 shadow-[0_8px_30px_rgba(10,17,40,0.3)] dark:shadow-[0_8px_30px_rgba(212,175,55,0.1)] flex flex-col gap-3 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#d4af37]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10 rounded-[4px] bg-[#0b1b42] border border-[#d4af37]/50 text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)] relative z-10"
              >
                <idealPartnerData.additionalExpectations.icon
                  size={18}
                  className="text-white"
                  strokeWidth={2}
                />
              </motion.div>
              <h4 className="text-white font-bold text-base tracking-tight relative z-10 group-hover:text-[#d4af37] transition-colors duration-300">
                {idealPartnerData.additionalExpectations.title}
              </h4>
            </div>
            <p className="text-gray-300 font-medium text-[13.5px] leading-relaxed relative z-10">
              {idealPartnerData.additionalExpectations.text}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
