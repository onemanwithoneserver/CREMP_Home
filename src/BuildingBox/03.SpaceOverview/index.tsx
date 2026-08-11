import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
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

export default function SpaceOverview() {
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

        <div className="px-4 py-4 flex flex-col gap-4">
          <motion.div
            variants={tagStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {spaceOverviewData.tags.map((tag, idx) => (
              <motion.span
                key={idx}
                variants={tagItem}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 text-[0.62rem] font-semibold rounded-full cursor-default tracking-wide uppercase transition-all duration-300 bg-white border border-gray-200 text-[#0b1b42] shadow-sm hover:shadow-md hover:border-[#d4af37]/40"
              >
                {tag.text}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex flex-col gap-2.5 mt-1 border-t border-gray-100 pt-4">
            {spaceOverviewData.details.map((detail, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.015, y: -1 }}
                className="flex items-center justify-between p-3.5 rounded-[8px] border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3.5 text-gray-600">
                  <div className={`w-8 h-8 rounded-[6px] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3 ${"bgClass" in detail ? detail.bgClass : "bg-gradient-to-br from-gray-700 to-gray-900"}`}>
                    <detail.icon size={15} strokeWidth={2.2} />
                  </div>
                  <span className="text-[0.78rem] font-semibold tracking-wide text-gray-700 group-hover:text-[#0a1128] transition-colors">
                    {detail.label}
                  </span>
                </div>
                <span className="text-[0.82rem] font-bold tracking-tight text-[#0a1128]">
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
