import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sofa, CheckCircle2, ChevronDown } from "lucide-react";
import { fitOutData } from "./data";
import SectionHeader from "../components/SectionHeader";
import {
  fadeInUp,
  staggerContainer,
  itemReveal,
} from "../components/animations";

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIncludedOpen, setIsIncludedOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="w-full relative z-10"
    >
      <motion.div
        variants={fadeInUp}
        className="w-full bg-white border-b border-gray-100 relative pb-6"
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer w-full group block"
        >
          <SectionHeader
            overline={fitOutData.subtitle}
            title={fitOutData.title}
            icon={Sofa}
          />
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 py-5 flex flex-col gap-4 mx-0">
                <div className="border border-gray-100 rounded-[4px] overflow-hidden bg-white shadow-sm mt-1">
                  <button
                    onClick={() => setIsIncludedOpen(!isIncludedOpen)}
                    className="group w-full flex items-center justify-between p-3.5 bg-white border border-gray-100 rounded-[4px] hover:border-[#d4af37]/30 hover:shadow-sm text-[0.8rem] font-semibold text-[#0a1128] transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="tracking-wide flex items-center gap-2 relative z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      Included Amenities ({fitOutData.included.length})
                    </span>
                    <motion.div
                      animate={{ rotate: isIncludedOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-6 h-6 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:border-[#d4af37]/30 group-hover:bg-[#d4af37]/5 transition-colors relative z-10"
                    >
                      <ChevronDown size={14} className="text-[#0a1128] group-hover:text-[#d4af37] transition-colors" strokeWidth={2.5} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isIncludedOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          variants={staggerContainer}
                          initial="hidden"
                          animate="show"
                          className="flex flex-wrap gap-2 p-3 pt-2.5 border-t border-gray-100/60"
                        >
                          {fitOutData.included.map((item, idx) => (
                            <motion.span
                              key={idx}
                              variants={itemReveal}
                              className="flex items-center gap-1 px-2.5 py-1 text-[0.65rem] font-semibold rounded-full bg-white text-[#0b1b42] border border-gray-200 shadow-sm cursor-default"
                            >
                              <CheckCircle2
                                size={12}
                                className="text-emerald-500"
                              />
                              {item}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 gap-3"
                >
                  {fitOutData.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemReveal}
                      whileHover={{ scale: 1.01 }}
                      className="flex items-center gap-2.5 p-2.5 rounded-[4px] bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300 group cursor-default"
                    >
                      <div
                        className={`w-7 h-7 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:animate-icon-shake origin-center transition-all duration-300 ${item.bgClass}`}
                      >
                        <item.icon size={13} strokeWidth={2.2} />
                      </div>
                      <span className="text-[0.75rem] font-semibold tracking-wide text-gray-700 group-hover:text-[#0a1128] transition-colors truncate">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
