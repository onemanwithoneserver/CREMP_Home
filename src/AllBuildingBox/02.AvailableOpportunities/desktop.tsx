import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer, itemReveal } from "../components/animations";
import SectionHeader from "../components/SectionHeader";
import { opportunitiesData } from "./data";

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
        className="w-full bg-white border-b border-gray-100 relative pb-8"
      >
        <SectionHeader
          overline={opportunitiesData.subtitle}
          title={opportunitiesData.title}
          icon={opportunitiesData.headerIcon}
        />

        <div className="px-6 mt-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-4"
          >
            {opportunitiesData.metrics.map((item) => {
              const Icon = item.icon;
              const { iconBg, cardHoverBg, badge, accentText, topBorder } = item.colorTheme;
              return (
                <motion.div
                  key={item.id}
                  variants={itemReveal}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`flex flex-col justify-between p-5 rounded-[4px] bg-white border border-gray-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] ${cardHoverBg} transition-all duration-300 relative overflow-hidden group cursor-default`}
                >
                  <div className={`absolute top-0 inset-x-0 h-[3px] ${topBorder} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-[4px] border ${iconBg} group-hover:scale-110 group-hover:rotate-[6deg] transition-all duration-300 flex items-center justify-center shrink-0`}>
                        <Icon size={17} strokeWidth={2.2} className="text-white" />
                      </div>
                      <span className={`px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider rounded-[2px] border ${badge}`}>
                        {item.badge}
                      </span>
                    </div>

                    <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      {item.label}
                    </span>

                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-semibold text-[#0a1128] tracking-tight group-hover:scale-105 origin-left transition-transform duration-300">
                        {item.value}
                      </span>
                      <span className="text-[0.75rem] font-medium text-gray-500">
                        {item.sub}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-gray-100/80 flex items-center justify-between text-[0.7rem] font-medium text-gray-500">
                    <span className={`transition-colors font-semibold ${accentText}`}>
                      {item.trend}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className={`text-gray-400 ${accentText} group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`}
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
