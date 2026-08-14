import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../components/animations";
import SectionHeader from "../components/SectionHeader";
import { opportunitiesData } from "./data";

export default function AvailableOpportunities() {
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
        className="w-full bg-slate-50 border-b border-gray-200/60 relative pb-6"
      >
        <SectionHeader
          overline="Opportunities"
          title={opportunitiesData.title}
          icon={opportunitiesData.headerIcon}
        />

        <div className="px-4 mt-5">
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
            {opportunitiesData.metrics.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col p-4 rounded-[8px] bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
              >
                <span className="text-[0.6rem] font-semibold text-gray-500 tracking-wider mb-1">
                  {item.label}
                </span>
                <span className="text-[1.8rem] font-semibold text-[#0a1128] leading-none mb-1">
                  {item.value}
                </span>
                <span className="text-[0.65rem] text-gray-500">
                  {item.sub}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
