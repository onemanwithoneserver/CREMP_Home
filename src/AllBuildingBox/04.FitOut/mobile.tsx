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

        <div className="px-5 py-5 flex flex-col gap-4 mx-0">
          <div className="border border-gray-200/80 rounded-[4px] overflow-hidden bg-white shadow-sm mt-1">
            <button
              onClick={() => setIsIncludedOpen(!isIncludedOpen)}
              className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-gray-50/50 text-[0.8rem] font-semibold text-[#0a1128] transition-colors cursor-pointer select-none"
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
                    className="flex flex-wrap gap-2 p-3 border-t border-gray-100/60"
                  >
                    {fitOutData.included.map((item, idx) => (
                      <motion.span
                        key={idx}
                        variants={itemReveal}
                        className="flex items-center gap-1 px-2.5 py-1 text-[0.65rem] font-semibold rounded-full bg-white text-[#0b1b42] shadow-sm cursor-default"
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
    </motion.div>
  );
}
