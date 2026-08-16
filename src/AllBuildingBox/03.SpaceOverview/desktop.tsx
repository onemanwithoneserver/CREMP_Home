import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { spaceOverviewData } from "./data";
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
        className="w-full bg-white border-b border-gray-200/60 relative pb-6"
      >
        <SectionHeader
          overline={spaceOverviewData.overline}
          title={spaceOverviewData.title}
          icon={Building2}
        />

        <div className="px-[var(--panel-px,1rem)] mt-4">


          <div className="grid grid-cols-2 gap-2.5">
            {spaceOverviewData.specs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.015, y: -1 }}
                  className="flex items-center gap-3 p-3.5 rounded-[8px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-200 transition-all duration-300 group cursor-default"
                >
                  <div
                    className={`w-8 h-8 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:animate-icon-shake origin-center transition-all duration-300 ${item.bgClass}`}
                  >
                    <Icon size={15} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-400 truncate">
                      {item.label}
                    </span>
                    <span className="text-[0.74rem] font-bold text-[#17274c] truncate mt-0.5 group-hover:text-[#0b1b42] transition-colors">
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
