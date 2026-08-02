import clsx from "clsx";
import { motion, type Variants } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";
import {
  getCardStyles,
  getIconContainerStyles,
  getCheckBadgeStyles,
} from "../utils/theme";
import { idealPartnerData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const ambientGlow: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.15, 0.3, 0.15],
    rotate: [0, 45, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
      mass: 0.8,
    },
  },
};

export default function IdealPartnerMobile() {
  return (
    <section className="w-full px-2 py-12 relative overflow-hidden bg-gray-50/50 dark:bg-[#060d20] rounded-[4px]">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <motion.div
          variants={ambientGlow}
          animate="animate"
          className="absolute -left-[20%] top-[-5%] h-[350px] w-[350px] rounded-full bg-[#D4AF37]/15 blur-[120px]"
        />
        <motion.div
          variants={ambientGlow}
          animate="animate"
          className="absolute right-[-20%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-[#D4AF37]/10"
        />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        <SectionHeader
          overline={idealPartnerData.sectionLabel}
          title={idealPartnerData.title}
          subtitle={idealPartnerData.subtitle}
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-5 mt-8 mb-6"
        >
          {idealPartnerData.multiSelects.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeSlideUp}
                className={clsx(
                  "relative rounded-[4px] border border-white/60 dark:border-white/5 p-5 bg-white/60 dark:bg-[#0b1b42]/40 backdrop-blur-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-[#d4af37]/30 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] transition-all duration-500 group overflow-hidden",
                  getCardStyles(item.intent)
                )}
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 dark:via-[#d4af37]/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-gray-200/50 dark:border-white/10">
                  <div
                    className={clsx(
                      "w-10 h-10 rounded-[4px] flex shrink-0 items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500",
                      getIconContainerStyles(item.intent)
                    )}
                  >
                    <Icon size={20} strokeWidth={2.2} className="text-white drop-shadow-md" />
                  </div>
                  <h4 className="text-[#0a1128] dark:text-white font-extrabold text-[17px] tracking-tight leading-tight group-hover:text-[#d4af37] transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>

                <div className="flex flex-col gap-0 relative">
                  <div className="absolute left-[11px] top-2 bottom-4 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent dark:from-gray-700 dark:via-gray-800 pointer-events-none" />

                  {item.items.map((subItem, idx) => {
                    const badgeStyles = getCheckBadgeStyles(item.intent);
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-4 py-2.5 group/item cursor-default relative z-10"
                      >
                        <div
                          className={clsx(
                            "mt-[3px] shrink-0 rounded-full p-0.5 bg-white dark:bg-[#0b1b42]",
                            badgeStyles.wrapper
                          )}
                        >
                          <BadgeCheck
                            size={18}
                            className={clsx(
                              "text-gray-300 dark:text-gray-600 transition-colors duration-300 group-hover/item:text-[#d4af37]",
                              badgeStyles.icon
                            )}
                            strokeWidth={2.5}
                          />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 font-medium text-[14px] leading-snug group-hover/item:text-[#0a1128] dark:group-hover/item:text-white transition-colors duration-300">
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

        {/* 3 Div Row - Spans full width smoothly and polished */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="w-full mb-6"
        >
          <motion.div
            variants={fadeSlideUp}
            className="flex items-stretch justify-between w-full bg-white/70 dark:bg-[#0b1b42]/40 backdrop-blur-2xl border border-gray-200/60 dark:border-white/5 rounded-[4px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.1)] relative p-1.5 gap-1"
          >
            {idealPartnerData.singleSelects.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileTap={{ scale: 0.96 }}
                  className="flex-1 flex flex-col items-center justify-center text-center px-1 py-4 rounded-[4px] group transition-all duration-300 hover:bg-gray-100/60 dark:hover:bg-white/5 cursor-default"
                >
                  <div
                    className={clsx(
                      "w-10 h-10 rounded-[12px] flex shrink-0 items-center justify-center shadow-sm mb-3 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-md",
                      getIconContainerStyles(item.intent)
                    )}
                  >
                    <Icon size={18} strokeWidth={2.2} className="text-white" />
                  </div>
                  
                  <span className="text-[#0a1128] dark:text-white font-black text-[13px] leading-tight mb-1 group-hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap">
                    {item.value}
                  </span>
                  
                  <span className="text-gray-500 dark:text-gray-400 text-[9px] font-bold uppercase tracking-widest leading-tight">
                    {item.title}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeSlideUp}
            className="w-full bg-gradient-to-br from-[#0b1b42] to-[#060d20] border border-[#d4af37]/40 rounded-[4px] p-6 shadow-[0_12px_40px_rgba(10,17,40,0.4)] dark:shadow-[0_12px_40px_rgba(212,175,55,0.15)] flex flex-col gap-4 group relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(212,175,55,0.25)] hover:border-[#d4af37]/60"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-4 right-4 text-[#d4af37]/40 group-hover:text-[#d4af37] group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <Sparkles size={32} strokeWidth={1.5} />
            </div>

            <div className="flex items-center gap-3.5 relative z-10">
              <div
                className="w-12 h-12 rounded-[4px] bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/50 text-[#d4af37] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.2)] backdrop-blur-md group-hover:scale-105 transition-transform duration-500"
              >
                <idealPartnerData.additionalExpectations.icon
                  size={22}
                  strokeWidth={2.2}
                />
              </div>
              <h4 className="text-white font-extrabold text-lg tracking-tight group-hover:text-[#d4af37] transition-colors duration-300">
                {idealPartnerData.additionalExpectations.title}
              </h4>
            </div>
            
            <p className="text-gray-300 font-medium text-[14px] leading-relaxed relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              {idealPartnerData.additionalExpectations.text}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}