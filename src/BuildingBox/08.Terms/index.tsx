import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FileText, ChevronDown, Info } from "lucide-react";
import { termsData } from "./data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const listItemReveal: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 25 },
  },
};

export default function Terms() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="w-full relative z-10 flex flex-col h-full rounded-[4px] overflow-visible"
    >
      <motion.div
        variants={fadeInUp}
        className="w-full bg-[#f8f9fa] overflow-visible rounded-[4px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-200/50 flex flex-col relative"
      >
        <div className="bg-[#0b1b42] p-4 sm:p-5 flex items-center justify-between shrink-0 relative overflow-hidden rounded-t-[4px] border-b border-[#d4af37]/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] min-h-[82px]">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

          <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-3 relative z-10">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-10 h-10 rounded-[4px] bg-white/5 border border-[#d4af37]/60 shadow-[0_0_15px_rgba(212,175,55,0.35)] backdrop-blur-md flex items-center justify-center text-[#d4af37] shrink-0"
            >
              <FileText size={20} strokeWidth={2} />
            </motion.div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-[10px] font-semibold text-[#d4af37] uppercase tracking-widest block leading-none mb-1">
                {termsData.overline}
              </span>
              <h3 className="text-lg font-semibold text-white leading-tight truncate">
                {termsData.title}
              </h3>
            </div>
          </div>

          <span className="px-3 py-1.5 text-[10px] font-semibold rounded-[2px] border border-[#d4af37]/40 text-[#d4af37] tracking-wider uppercase bg-white/5 backdrop-blur-md relative z-10 shadow-[0_0_10px_rgba(212,175,55,0.1)] shrink-0">
            {termsData.count}
          </span>
        </div>

        <div className="p-4 sm:p-5 flex-1 relative flex flex-col bg-gradient-to-b from-gray-50/50 to-white/50">
          <div className="relative flex flex-col w-full z-10">
            <div className="absolute left-[31px] top-[32px] bottom-[32px] w-[2px] z-0 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37]/50 to-[#d4af37]/20" />
              <motion.div
                className="absolute -left-[1px] w-[4px] h-20 bg-gradient-to-b from-transparent via-[#ffd700] to-transparent blur-[1px]"
                animate={{ top: ["-20%", "120%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-4 relative z-10 w-full"
            >
              {termsData.visibleItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={listItemReveal}
                  className="relative w-full group h-[64px] flex items-center"
                >
                  <div className="w-[76px] h-full flex items-center relative shrink-0">
                    <div
                      className={`w-10 h-10 ml-[12px] rounded-[4px] flex items-center justify-center relative z-20 shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-white group-hover:scale-110 group-hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all duration-300 ${item.color}`}
                    >
                      <item.icon size={18} strokeWidth={2.2} />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[24px] h-[2px] z-10 overflow-hidden">
                      <div className="absolute inset-0 bg-gray-200/60 group-hover:bg-[#d4af37]/30 transition-colors duration-300" />
                      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37] -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-out shadow-[0_0_8px_#d4af37]" />
                    </div>
                  </div>

                  <div className="flex-1 h-full px-4 rounded-[4px] bg-gradient-to-br from-white/95 to-white/70 backdrop-blur-xl border border-gray-200/80 hover:border-[#d4af37]/50 transition-all duration-300 flex items-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.15)] cursor-default overflow-hidden relative">
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />

                    <div className="flex flex-col min-w-0 z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-0.5 group-hover:text-[#d4af37] transition-colors duration-300">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-[#0a1128] leading-tight line-clamp-99">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden w-full relative z-10"
                >
                  <motion.ul
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col gap-4 pt-4 w-full"
                  >
                    {termsData.hiddenItems.map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={listItemReveal}
                        className="relative w-full group h-[64px] flex items-center"
                      >
                        <div className="w-[76px] h-full flex items-center relative shrink-0">
                          <div
                            className={`w-10 h-10 ml-[12px] rounded-[4px] flex items-center justify-center relative z-20 shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-white group-hover:scale-110 group-hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all duration-300 ${item.color}`}
                          >
                            <item.icon size={18} strokeWidth={2.2} />
                          </div>

                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[24px] h-[2px] z-10 overflow-hidden">
                            <div className="absolute inset-0 bg-gray-200/60 group-hover:bg-[#d4af37]/30 transition-colors duration-300" />
                            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37] -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-out shadow-[0_0_8px_#d4af37]" />
                          </div>
                        </div>

                        <div className="flex-1 h-full px-4 rounded-[4px] bg-gradient-to-br from-white/95 to-white/70 backdrop-blur-xl border border-gray-200/80 hover:border-[#d4af37]/50 transition-all duration-300 flex items-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.15)] cursor-default overflow-hidden relative">
                          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />

                          <div className="flex flex-col min-w-0 z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-0.5 group-hover:text-[#d4af37] transition-colors duration-300">
                              {item.label}
                            </span>
                            <span className="text-sm font-semibold text-[#0a1128] leading-tight truncate">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex w-full mt-5 relative z-10">
            <div className="w-[76px] shrink-0" />
            <div className="flex-1">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 font-semibold text-[10px] px-5 py-2.5 rounded-[4px] border border-[#d4af37]/40 text-[#d4af37] tracking-wider uppercase transition-all bg-white/80 backdrop-blur-md hover:bg-[#d4af37]/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(212,175,55,0.2)] w-max"
              >
                {isOpen ? "Hide Specs" : "View All Specs"}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <ChevronDown size={14} strokeWidth={2.5} />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {termsData.warning && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full mt-5 flex items-center gap-3.5 bg-gradient-to-r from-[#0b1b42] to-[#0a152e] border border-[#d4af37]/30 rounded-[4px] p-4 relative z-10 shadow-[0_8px_25px_rgba(0,0,0,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#d4af37]/10 to-transparent opacity-60" />
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-8 h-8 rounded-[4px] bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.15)] relative z-10"
              >
                <Info size={16} strokeWidth={2.5} />
              </motion.div>
              <p className="text-[11px] text-white/90 font-medium leading-relaxed relative z-10">
                {termsData.warning}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
                @keyframes shimmer {
                    0% { transform: translateX(-150%); }
                    100% { transform: translateX(150%); }
                }
            `,
        }}
      />
    </motion.div>
  );
}
