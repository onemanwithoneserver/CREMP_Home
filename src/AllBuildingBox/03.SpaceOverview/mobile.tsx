import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { spaceOverviewData } from "./data";
import { fadeInUp, staggerContainer } from "../components/animations";

export default function Mobile() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainer}
      className="w-full relative z-10"
    >
      <motion.div
        variants={fadeInUp}
        className="w-full bg-white border-b border-gray-200/60 relative pb-4"
      >
        <SectionHeader
          overline={spaceOverviewData.overline}
          title={spaceOverviewData.title}
          icon={Building2}
        />

        <div className="px-3 mt-3">


          <div className="grid grid-cols-2 gap-2">
            {spaceOverviewData.specs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.015, y: -1 }}
                  className="flex items-center gap-3 p-3.5 rounded-[8px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-gray-200 transition-all duration-300 group cursor-default"
                >
                  <div
                    className={`w-7 h-7 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:animate-icon-shake origin-center transition-all duration-300 ${item.bgClass}`}
                  >
                    <Icon size={14} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[0.55rem] font-semibold uppercase tracking-wider text-gray-400 leading-tight">
                      {item.label}
                    </span>
                    <span className="text-[0.68rem] font-semibold text-[#17274c] mt-0.5 group-hover:text-[#0b1b42] transition-colors leading-tight">
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
