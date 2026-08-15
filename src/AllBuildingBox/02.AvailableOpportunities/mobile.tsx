import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer, itemReveal } from "../components/animations";
import SectionHeader from "../components/SectionHeader";
import { opportunitiesData } from "./data";

export default function Mobile() {
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
          overline={opportunitiesData.subtitle}
          title={opportunitiesData.title}
          icon={opportunitiesData.headerIcon}
        />

        <div className="px-4 mt-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-3"
          >
            {opportunitiesData.metrics.map((item) => {
              const Icon = item.icon;
              const { iconBg, cardHoverBg, badge, accentText, topBorder } = item.colorTheme;
              return (
                <motion.div
                  key={item.id}
                  variants={itemReveal}
                  whileHover={{ y: -3 }}
                  className={`flex flex-col justify-between p-3.5 rounded-[4px] bg-white border border-gray-200/80 shadow-sm ${cardHoverBg} transition-all duration-300 relative overflow-hidden group cursor-default`}
                >
                  <div className={`absolute top-0 inset-x-0 h-[3px] ${topBorder} opacity-80`} />

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-[4px] border ${iconBg} group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0`}>
                        <Icon size={15} strokeWidth={2.2} className="text-white" />
                      </div>
                      <span className={`px-1.5 py-0.5 text-[0.55rem] font-semibold uppercase tracking-wider rounded-[2px] border ${badge} truncate`}>
                        {item.badge}
                      </span>
                    </div>

                    <span className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-widest block mb-0.5">
                      {item.label}
                    </span>

                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-2xl font-semibold text-[#0a1128] tracking-tight">
                        {item.value}
                      </span>
                      <span className="text-[0.65rem] font-medium text-gray-500 truncate">
                        {item.sub}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 mt-2 border-t border-gray-100/80 flex items-center justify-between text-[0.65rem] font-medium text-gray-500">
                    <span className={`truncate font-semibold transition-colors ${accentText}`}>
                      {item.trend}
                    </span>
                    <ArrowUpRight
                      size={12}
                      className={`text-gray-400 ${accentText} shrink-0`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
