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
                  className="flex items-center gap-2 p-2.5 rounded-[4px] bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  <div
                    className={`w-7 h-7 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm ${item.bgClass}`}
                  >
                    <Icon size={14} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[0.55rem] font-bold uppercase tracking-wider text-gray-400 truncate">
                      {item.label}
                    </span>
                    <span className="text-[0.68rem] font-bold text-[#0a1128] truncate mt-0.5">
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
