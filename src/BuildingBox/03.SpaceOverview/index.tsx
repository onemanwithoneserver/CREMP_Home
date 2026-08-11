import { motion, type Variants } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { spaceOverviewData } from "./data";
import SectionHeader from "../components/SectionHeader";
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const tagStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.15 },
  },
};

const tagItem: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 500, damping: 30 },
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
        className="w-full"
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
                className={`px-3 py-1.5 text-[0.62rem] font-bold rounded-full cursor-default tracking-wide uppercase transition-all duration-300 ${tag.color}`}
              >
                {tag.text}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex flex-col gap-0 border-t border-gray-100 pt-2">
            {spaceOverviewData.details.map((detail, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 3 }}
                className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 transition-all duration-300 cursor-default group"
              >
                <div className="flex items-center gap-2.5 text-gray-500">
                  <detail.icon size={15} className="text-gray-400 group-hover:text-[#d4af37] transition-colors duration-300" />
                  <span className="text-[0.82rem] font-medium">
                    {detail.label}
                  </span>
                </div>
                <span className="text-[0.82rem] font-semibold text-[#0a1128]">
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
