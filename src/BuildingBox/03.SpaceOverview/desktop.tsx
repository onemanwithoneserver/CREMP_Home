import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, BadgeCheck, ChevronDown } from "lucide-react";
import { spaceOverviewData } from "./data";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer, itemReveal as tagItem } from "../components/animations";

const tagStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.15 },
  },
};

export default function Desktop() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

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
        <SectionHeader
          overline="Specifications & Features"
          title={spaceOverviewData.title}
          icon={LayoutGrid}
        />

        <div className="px-3 py-3 flex flex-col gap-3 mx-0">
          <div className="border border-gray-100 rounded-[6px] overflow-hidden bg-white shadow-sm mt-1">
            <button
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              className="w-full flex items-center justify-between p-2.5 bg-gray-50/50 hover:bg-gray-50 text-[0.68rem] font-semibold text-[#0a1128] transition-colors"
            >
              <span className="tracking-wide flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                Key Specifications ({spaceOverviewData.tags.length})
              </span>
              <ChevronDown
                size={14}
                className={`text-gray-500 transition-transform duration-300 ${isFeaturesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {isFeaturesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <motion.div
                    variants={tagStagger}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 gap-y-3.5 gap-x-2 p-3 pt-3 border-t border-gray-100/60"
                  >
                    {spaceOverviewData.tags.map((tag, idx) => (
                      <motion.div
                        key={idx}
                        variants={tagItem}
                        whileHover={{ scale: 1.02, x: 2 }}
                        className="flex items-center gap-2 cursor-default group"
                      >
                        <BadgeCheck size={15} strokeWidth={2.5} className="text-[#d4af37] shrink-0 shadow-sm rounded-full bg-amber-50/50" />
                        <span className="text-[0.62rem] font-semibold tracking-wide text-[#0b1b42] transition-colors group-hover:text-[#d4af37]">
                          {tag.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-2.5 mt-1 pt-2">
            {spaceOverviewData.details.map((detail, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.015, y: -1 }}
                className="flex items-center justify-between p-3.5 rounded-[8px] border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3.5 text-gray-600">
                  <div className="relative w-8 h-8 rounded-[6px] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <div
                      className={`absolute inset-0 rounded-[6px] group-hover:animate-icon-shake origin-center transition-all duration-300 ${"bgClass" in detail ? detail.bgClass : "bg-gradient-to-br from-gray-700 to-gray-900"}`}
                    />
                    <detail.icon size={15} strokeWidth={2.2} className="relative z-10 pointer-events-none" />
                  </div>
                  <span className="text-[0.78rem] font-semibold tracking-wide text-gray-700 group-hover:text-[#0a1128] transition-colors">
                    {detail.label}
                  </span>
                </div>
                <span className="text-[0.82rem] font-semibold tracking-tight text-[#0a1128]">
                  {detail.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
