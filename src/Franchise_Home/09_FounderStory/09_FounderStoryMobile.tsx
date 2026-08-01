import clsx from "clsx";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { getTextStyles } from "../utils/theme";
import { founderStoryData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FounderStoryMobile() {
  return (
    <section className="w-full px-4 py-16 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute w-80 h-80 bg-[#d4af37]/5 dark:bg-[#d4af37]/10 rounded-full blur-[80px] animate-pulse-soft" />
        <div
          className="absolute w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="mb-8 w-full">
          <SectionHeader
            overline={founderStoryData.sectionLabel}
            title={founderStoryData.title}
            subtitle={founderStoryData.subtitle}
            align="center"
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="relative rounded-[8px] overflow-hidden group shadow-lg min-h-[460px] w-full"
          >
            <div className="absolute inset-0">
              <img
                src={founderStoryData.founder.avatar}
                alt={founderStoryData.founder.name}
                className="w-full h-full object-cover filter brightness-[0.8] grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/70 to-transparent opacity-95" />
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <Quote
                size={48}
                className="text-[#d4af37]/30 transform -translate-x-1 -translate-y-1"
              />

              <div>
                <p className="text-white text-[15px] leading-relaxed tracking-wide font-medium italic mb-6 text-shadow-md">
                  "{founderStoryData.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#d4af37] rounded-full" />
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-tight">
                      {founderStoryData.founder.name}
                    </h4>
                    <p className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {founderStoryData.founder.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-2 w-full">
            {founderStoryData.stats.map((stat, idx) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}
                  key={stat.label}
                  className="bg-[#0a1128] border border-white/10 rounded-[8px] p-3 flex flex-col justify-center items-center text-center shadow-md relative overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 w-12 h-12 bg-white/5 rounded-full blur-xl" />
                  
                  <p
                    className={clsx(
                      "text-xl sm:text-2xl tracking-tight font-bold mb-1",
                      getTextStyles(stat.intent),
                    )}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
