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
export default function Desktop() {
  const [isIncludedOpen, setIsIncludedOpen] = useState(true);
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
        <SectionHeader
          overline={fitOutData.subtitle}
          title={fitOutData.title}
          icon={Sofa}
        />
        <div className="px-6 py-6 flex flex-col gap-4 mx-0">
          <div className="border border-transparent rounded-[4px] overflow-hidden bg-white shadow-sm mt-1">
            <button
              onClick={() => setIsIncludedOpen(!isIncludedOpen)}
              className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-gray-50/50 text-[0.8rem] font-semibold text-[#17274c] transition-colors cursor-pointer select-none border border-gray-200/80 rounded-[4px]"
            >
              <span className="tracking-wide flex items-center gap-2 relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                Included Amenities ({fitOutData.included.length})
              </span>
              <ChevronDown
                size={16}
                className={`text-gray-500 transition-transform duration-300 ${
                  isIncludedOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isIncludedOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="flex flex-wrap gap-2 p-4 border-t border-gray-100/60"
                  >
                    {fitOutData.included.map((item, idx) => (
                      <motion.span
                        key={idx}
                        variants={itemReveal}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[0.75rem] font-semibold rounded-full bg-white text-[#0b1b42] border border-gray-200 shadow-sm cursor-default"
                      >
                        <CheckCircle2 size={14} className="text-emerald-500" />
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
            className="grid grid-cols-2 gap-4"
          >
            {fitOutData.items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemReveal}
                whileHover={{ scale: 1.01 }}
                className="flex items-center gap-3 p-3.5 rounded-[8px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-200 transition-all duration-300 group cursor-default"
              >
                <div
                  className={`w-8 h-8 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:animate-icon-shake origin-center transition-all duration-300 ${item.bgClass}`}
                >
                  <item.icon size={15} strokeWidth={2} />
                </div>
                <span className="text-[0.8rem] font-semibold tracking-wide text-gray-700 group-hover:text-[#17274c] transition-colors truncate">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
