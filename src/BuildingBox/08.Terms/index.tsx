import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FileText, ChevronDown, Info } from "lucide-react";
import { termsData } from "./data";
import SectionHeader from "../components/SectionHeader";

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
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const listItemReveal: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
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
      className="w-full relative z-10 flex flex-col h-full rounded-[4px]"
    >
      <motion.div variants={fadeInUp} className="w-full">
        <SectionHeader
          overline={termsData.overline}
          title={termsData.title}
          icon={FileText}
          rightElement={
            <span className="px-2.5 py-1 text-[10px] font-bold rounded-[2px] border border-[#d4af37]/30 text-[#d4af37] tracking-wider uppercase bg-[#d4af37]/[0.08]">
              {termsData.count}
            </span>
          }
        />

        <div className="px-4 py-4 flex flex-col relative w-full">
          <div className="relative flex flex-col w-full z-10">
            {/* Vertical timeline line */}
            <div className="absolute left-[35px] top-[24px] bottom-[24px] w-[2px] z-0 rounded-full bg-gradient-to-b from-[#e5e7eb] via-[#d4af37] to-[#e5e7eb]" />

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-5 relative z-10 w-full"
            >
              {termsData.visibleItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={listItemReveal}
                  className="relative w-full group flex items-center min-h-[72px]"
                >
                  {/* Left Column: Icon */}
                  <div className="w-[76px] flex items-center relative shrink-0 justify-center">
                    <div
                      className={`w-11 h-11 rounded-[4px] flex items-center justify-center relative z-20 text-white shadow-md ${item.color}`}
                    >
                      <item.icon size={20} strokeWidth={2.2} />
                    </div>

                    {/* Horizontal connector line */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[18px] h-[1px] bg-gray-200 z-10" />
                  </div>

                  {/* Right Column: Content Card */}
                  <div className="flex-1 p-3.5 sm:p-4 rounded-[4px] bg-white border border-gray-200 shadow-sm flex flex-col justify-center relative z-10 min-h-[72px]">
                    <span className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest mb-1">
                      {item.label}
                    </span>
                    <span className="text-[1.05rem] font-bold text-[#0a1128] leading-tight">
                      {item.value}
                    </span>
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
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden w-full relative z-10"
                >
                  <motion.ul
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col gap-5 pt-5 w-full"
                  >
                    {termsData.hiddenItems.map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={listItemReveal}
                        className="relative w-full group flex items-center min-h-[72px]"
                      >
                        {/* Left Column: Icon */}
                        <div className="w-[76px] flex items-center relative shrink-0 justify-center">
                          <div
                            className={`w-11 h-11 rounded-[4px] flex items-center justify-center relative z-20 text-white shadow-md ${item.color}`}
                          >
                            <item.icon size={20} strokeWidth={2.2} />
                          </div>

                          {/* Horizontal connector line */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[18px] h-[1px] bg-gray-200 z-10" />
                        </div>

                        {/* Right Column: Content Card */}
                        <div className="flex-1 p-3.5 sm:p-4 rounded-[4px] bg-white border border-gray-200 shadow-sm flex flex-col justify-center relative z-10 min-h-[72px]">
                          <span className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest mb-1">
                            {item.label}
                          </span>
                          <span className="text-[1.05rem] font-bold text-[#0a1128] leading-tight">
                            {item.value}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex w-full mt-6 relative z-10">
            <div className="w-[76px] shrink-0" />
            <div className="flex-1">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 font-bold text-[0.7rem] px-5 py-3 rounded-[4px] text-[#d4af37] border border-[#d4af37]/40 shadow-sm tracking-widest uppercase transition-all bg-white"
              >
                {isOpen ? "Hide Specs" : "View All Specs"}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <ChevronDown size={15} strokeWidth={2.5} />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {termsData.warning && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full mt-8 flex items-center gap-4 bg-[#12192b] rounded-[6px] p-4 relative z-10 shadow-lg"
            >
              <div className="w-10 h-10 rounded-[4px] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 shadow-sm bg-[#1a233a]">
                <Info size={20} strokeWidth={2} />
              </div>
              <p className="text-[0.8rem] text-white/90 font-medium leading-relaxed tracking-wide">
                {termsData.warning}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
