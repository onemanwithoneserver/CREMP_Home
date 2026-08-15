import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sofa, ChevronDown, CheckCircle2 } from "lucide-react";
import { fitOutData } from "./data";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer, itemReveal } from "../components/animations";

export default function Desktop() {
  const [isOpen, setIsOpen] = useState(true);
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
        className="w-full bg-white border-b border-gray-200/60 relative"
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer w-full group block"
        >
          <SectionHeader
            overline={fitOutData.subtitle}
            title={fitOutData.title}
            icon={Sofa}
            rightElement={
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-8 h-8 rounded-[4px] bg-[#0b1b42]/5 border border-[#0b1b42]/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#0b1b42]/10"
              >
                <ChevronDown size={16} className="text-[#0b1b42]" />
              </motion.div>
            }
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
              <div className="px-3 pb-3 flex flex-col gap-3 mx-0">
                <div className="border border-gray-100 rounded-[6px] overflow-hidden bg-white shadow-sm mt-1">
                  <button
                    onClick={() => setIsIncludedOpen(!isIncludedOpen)}
                    className="w-full flex items-center justify-between p-2.5 bg-gray-50/50 hover:bg-gray-50 text-[0.68rem] font-semibold text-[#0a1128] transition-colors"
                  >
                    <span className="tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Included Amenities ({fitOutData.included.length})
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-gray-500 transition-transform duration-300 ${isIncludedOpen ? "rotate-180" : ""}`}
                    />
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
                          className="flex flex-wrap gap-1.5 p-2.5 pt-2 border-t border-gray-100/60"
                        >
                          {fitOutData.included.map((item, idx) => (
                            <motion.span
                              key={idx}
                              variants={itemReveal}
                              className="flex items-center gap-1 px-2.5 py-1 text-[0.62rem] font-semibold rounded-full bg-white text-[#0b1b42] border border-gray-200 shadow-sm cursor-default"
                            >
                              <CheckCircle2 size={12} className="text-emerald-500" />
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
                  className="grid grid-cols-2 gap-2 pb-2 mt-2 pt-2 "
                >
                  {fitOutData.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemReveal}
                      whileHover={{ scale: 1.02, y: -1 }}
                      className="flex items-center gap-2.5 p-2.5 rounded-[8px] border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group cursor-default"
                    >
                      <div className={`w-7 h-7 rounded-[6px] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:animate-icon-shake origin-center transition-all duration-300 ${item.bgClass}`}>
                        <item.icon size={14} strokeWidth={2.2} />
                      </div>
                      <span className="text-[0.72rem] font-semibold tracking-wide text-gray-700 group-hover:text-[#0a1128] transition-colors truncate">
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
