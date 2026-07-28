import { motion } from "framer-motion";
import { founderStoryData } from "./data";
import { Quote } from "lucide-react";
import clsx from "clsx";
import { getTextStyles } from "../utils/theme";

export default function FounderStoryMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-6 text-center">
        {founderStoryData.sectionLabel}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0a1128] border border-[#2a2d45] rounded-lg p-6 shadow-xl"
      >
        <Quote size={28} strokeWidth={1.5} className="text-[#d4af37] mb-4" />
        <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
          "{founderStoryData.quote}"
        </p>
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#2a2d45]">
          <img
            src={founderStoryData.founder.avatar}
            alt={founderStoryData.founder.name}
            className="w-12 h-12 rounded-full object-cover shadow-sm border border-border"
          />
          <div>
            <p className="text-white font-bold text-sm">{founderStoryData.founder.name}</p>
            <p className="text-gray-400 text-xs font-medium">{founderStoryData.founder.title}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {founderStoryData.stats.map((stat) => {
            return (
              <div key={stat.label} className="bg-[#121c33] border border-white/10 rounded-[4px] p-3 text-center shadow-md hover-lift cursor-default transition-all duration-300">
                <p className={clsx("text-xl font-black mb-1", getTextStyles(stat.intent))}>{stat.value}</p>
                <p className="text-gray-400 text-[9px] font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
