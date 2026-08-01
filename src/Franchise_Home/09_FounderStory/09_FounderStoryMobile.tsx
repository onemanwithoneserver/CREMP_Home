import clsx from "clsx";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { getTextStyles } from "../utils/theme";
import { founderStoryData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FounderStoryMobile() {
  return (
    <section className="w-full px-4 py-12 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-2xl animate-pulse-soft" />
        <div
          className="absolute w-64 h-64 bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-full blur-2xl animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="relative z-10 w-full">
        <SectionHeader
          overline={founderStoryData.sectionLabel}
          title={founderStoryData.title}
          subtitle={founderStoryData.subtitle}
          align="center"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a1128] border border-[#2a2d45] rounded-2xl p-4 shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
        >
          <Quote size={28} strokeWidth={1.5} className="text-[#d4af37] mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
            "{founderStoryData.quote}"
          </p>
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#2a2d45]">
            <img
              src={founderStoryData.founder.avatar}
              alt={founderStoryData.founder.name}
              className="w-12 h-12 rounded-full object-cover shadow-sm border border-gray-100"
            />
            <div>
              <p className="text-white font-semibold text-sm">
                {founderStoryData.founder.name}
              </p>
              <p className="text-gray-400 text-xs font-medium">
                {founderStoryData.founder.title}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {founderStoryData.stats.map((stat) => {
              return (
                <div
                  key={stat.label}
                  className="bg-[#121c33] border border-white/10 rounded-[4px] p-3 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:border-[#d4af37]/30"
                >
                  <p
                    className={clsx(
                      "text-xl font-semibold mb-1",
                      getTextStyles(stat.intent),
                    )}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
