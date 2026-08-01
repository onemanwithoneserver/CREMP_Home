import clsx from "clsx";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { getTextStyles } from "../utils/theme";
import { founderStoryData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FounderStoryDesktop() {
  return (
    <section className="w-full px-6 py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute w-[50rem] h-[50rem] bg-[#d4af37]/5 dark:bg-[#d4af37]/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div
          className="absolute w-[40rem] h-[40rem] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-12">
          <SectionHeader
            overline={founderStoryData.sectionLabel}
            title={founderStoryData.title}
            subtitle={founderStoryData.subtitle}
            align="center"
          />
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="lg:col-span-3 relative rounded-[8px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.15)] min-h-[500px]"
          >
            <div className="absolute inset-0">
              <img
                src={founderStoryData.founder.avatar}
                alt={founderStoryData.founder.name}
                className="w-full h-full object-cover filter brightness-[0.85] grayscale-[10%] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/60 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
              <Quote
                size={64}
                className="text-[#d4af37]/20 transform -translate-x-2 -translate-y-2 group-hover:text-[#d4af37]/40 transition-colors duration-500"
              />

              <div>
                <p className="text-white text-xl md:text-2xl leading-relaxed tracking-wide font-medium italic mb-8 max-w-2xl text-shadow-lg">
                  "{founderStoryData.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-[#d4af37] rounded-full" />
                  <div>
                    <h4 className="text-white font-bold text-2xl tracking-tight">
                      {founderStoryData.founder.name}
                    </h4>
                    <p className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mt-1">
                      {founderStoryData.founder.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            {founderStoryData.stats.map((stat, idx) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 120,
                  }}
                  key={stat.label}
                  className="flex-1 bg-[#0a1128] border border-white/10 rounded-[8px] p-8 flex flex-col justify-center items-start shadow-[0_8px_30px_rgb(0,0,0,0.08)] group hover:-translate-y-1 hover:border-[#d4af37]/40 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-[#d4af37]/10 transition-colors duration-500" />
                  
                  <p
                    className={clsx(
                      "text-4xl lg:text-5xl tracking-tight font-bold mb-2",
                      getTextStyles(stat.intent),
                    )}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest group-hover:text-gray-200 transition-colors duration-300">
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