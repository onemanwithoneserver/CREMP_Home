import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown, Info } from "lucide-react";
import { termsData } from "./data";
import SectionHeader from "../components/SectionHeader";
import {
  fadeInUp,
  staggerContainer,
  rowReveal as listItemReveal,
  lineReveal,
} from "../components/animations";

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="w-full relative z-10 flex flex-col h-full rounded-[4px]"
    >
      <motion.div
        variants={fadeInUp}
        className="w-full bg-white border-b border-gray-100 relative pb-6"
      >
        <SectionHeader
          overline={termsData.overline}
          title={termsData.title}
          icon={FileText}
          rightElement={
            <span className="px-2 py-1 text-[10px] font-semibold rounded-[2px] border border-[#d4af37]/30 text-[#d4af37] tracking-wider bg-[#d4af37]/[0.08]">
              {termsData.count}
            </span>
          }
        />

        <div className="px-5 py-4 flex flex-col relative w-full">
          <div className="relative flex flex-col w-full z-10">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="absolute left-[39px] top-[24px] bottom-[24px] w-[2px] z-0 rounded-full bg-gradient-to-b from-[#f3f4f6] via-[#d4af37] to-[#f3f4f6]"
            />

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-2.5 relative z-10 w-full"
            >
              {termsData.visibleItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={listItemReveal}
                  className="relative w-full group flex items-center min-h-[60px]"
                >
                  <div className="w-[76px] flex items-center relative shrink-0 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      className={`w-10 h-10 rounded-[4px] flex items-center justify-center relative z-20 text-white shadow-sm transition-shadow duration-300 group-hover:shadow-md ${item.color}`}
                    >
                      <item.icon size={18} strokeWidth={2} />
                    </motion.div>

                    <motion.div
                      variants={lineReveal}
                      style={{ originX: 0 }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-[18px] h-[2px] bg-gray-100 z-10 transition-colors duration-300 group-hover:bg-[#d4af37]"
                    />
                  </div>

                  <motion.div
                    whileHover={{ y: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex-1 p-3.5 rounded-[4px] bg-white border border-gray-100 shadow-sm flex flex-col justify-center relative z-10 min-h-[60px] cursor-default transition-all duration-300 group-hover:border-[#d4af37] group-hover:ring-1 group-hover:ring-[#d4af37] group-hover:shadow-md"
                  >
                    <span className="text-[0.65rem] font-semibold text-gray-500 tracking-widest mb-0.5 transition-colors duration-300 group-hover:text-[#d4af37]">
                      {item.label}
                    </span>
                    <span className="text-[0.85rem] pt-[1px] font-semibold text-[#0a1128] leading-tight">
                      {item.value}
                    </span>
                  </motion.div>
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
                    className="flex flex-col gap-2.5 pt-2.5 w-full"
                  >
                    {termsData.hiddenItems.map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={listItemReveal}
                        className="relative w-full group flex items-center min-h-[60px]"
                      >
                        <div className="w-[76px] flex items-center relative shrink-0 justify-center">
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 3 }}
                            className={`w-10 h-10 rounded-[4px] flex items-center justify-center relative z-20 text-white shadow-sm transition-shadow duration-300 group-hover:shadow-md ${item.color}`}
                          >
                            <item.icon size={18} strokeWidth={2} />
                          </motion.div>

                          <motion.div
                            variants={lineReveal}
                            style={{ originX: 0 }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-[18px] h-[2px] bg-gray-100 z-10 transition-colors duration-300 group-hover:bg-[#d4af37]"
                          />
                        </div>

                        <motion.div
                          whileHover={{ y: -1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                          className="flex-1 p-3.5 rounded-[4px] bg-white border border-gray-100 shadow-sm flex flex-col justify-center relative z-10 min-h-[60px] cursor-default transition-all duration-300 group-hover:border-[#d4af37] group-hover:ring-1 group-hover:ring-[#d4af37] group-hover:shadow-md"
                        >
                          <span className="text-[0.65rem] font-semibold text-gray-500 tracking-widest mb-0.5 transition-colors duration-300 group-hover:text-[#d4af37]">
                            {item.label}
                          </span>
                          <span className="text-[0.85rem] pt-[1px] font-semibold text-[#0a1128] leading-tight">
                            {item.value}
                          </span>
                        </motion.div>
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
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center justify-center gap-2 font-semibold text-[0.7rem] px-4 py-2.5 rounded-[4px] text-gray-600 hover:text-[#d4af37] border border-gray-200 hover:border-[#d4af37]/30 shadow-sm hover:shadow tracking-widest transition-all bg-gray-50 hover:bg-white w-full"
              >
                {isOpen ? "Hide Specs" : "View All Specs"}
              </motion.button>
            </div>
          </div>

          {termsData.warning && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full mt-5 flex items-center gap-3 bg-[#0b1b42] rounded-[6px] p-3 relative z-10 shadow-[0_8px_20px_rgba(11,27,66,0.15)] border border-[#0b1b42]/10"
            >
              <div className="w-9 h-9 rounded-[4px] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.15)] bg-white/5 backdrop-blur-sm">
                <Info size={18} strokeWidth={2} />
              </div>
              <p className="text-[0.8rem] text-white/95 font-medium leading-relaxed tracking-wide">
                {termsData.warning}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
