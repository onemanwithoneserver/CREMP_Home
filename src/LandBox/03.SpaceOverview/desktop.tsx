import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { spaceOverviewData } from "./data";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer } from "../components/animations";
export default function Desktop() {
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
          overline="Specifications & Features"
          title={spaceOverviewData.title}
          icon={LayoutGrid}
        />
        <div className="px-6 py-6 flex flex-col mx-0">
          <div className="flex flex-col gap-4">
            {spaceOverviewData.details.map((detail, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.01, x: 2 }}
                className="flex items-center justify-between p-4 rounded-[4px] bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="relative w-9 h-9 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm overflow-hidden">
                    <div
                      className={`absolute inset-0 group-hover:animate-icon-shake origin-center transition-all duration-300 ${"bgClass" in detail ? detail.bgClass : "bg-[#17274c]"}`}
                    />
                    <detail.icon
                      size={16}
                      strokeWidth={2}
                      className="relative z-10 pointer-events-none"
                    />
                  </div>
                  <span className="text-[0.85rem] font-semibold text-gray-600 group-hover:text-[#17274c] transition-colors">
                    {detail.label}
                  </span>
                </div>
                <span className="text-[0.9rem] font-semibold tracking-tight text-[#17274c]">
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
