import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sofa, ChevronDown, CheckCircle2 } from "lucide-react";
import { fitOutData } from "./data";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer, itemReveal } from "../components/animations";

export default function FitOut() {
  const [isOpen, setIsOpen] = useState(true);

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
              <div className="px-4 pb-4 flex flex-col gap-4 mx-0">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {fitOutData.included.map((item, idx) => (
                    <motion.span
                      key={idx}
                      variants={itemReveal}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[0.65rem] font-semibold rounded-full bg-white text-[#0b1b42] border border-gray-200 shadow-sm hover:shadow-md hover:border-[#d4af37]/40 transition-all duration-300"
                    >
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      {item}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 gap-2 pb-2 mt-2 pt-2 border-t border-gray-100"
                >
                  {fitOutData.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemReveal}
                      whileHover={{ scale: 1.02, y: -1 }}
                      className="flex items-center gap-2.5 p-2.5 rounded-[8px] border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group cursor-default"
                    >
                      <div className={`w-7 h-7 rounded-[6px] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3 ${item.bgClass}`}>
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
