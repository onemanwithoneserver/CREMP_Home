import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { stakeholdersData } from "../03_StakeHolders/data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const iconColors = [
  "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
  "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
  "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
  "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
];

const renderHighlightedTitle = (title: string) => {
  if (!title) return null;
  const words = title.trim().split(" ");
  if (words.length <= 1) return title;
  
  const lastWord = words.pop();
  
  return (
    <>
      {words.join(" ")}{" "}
      <span className="bg-gradient-to-r from-[#d97b29] to-[#D4AF37] bg-clip-text text-transparent">
        {lastWord}
      </span>
    </>
  );
};

export default function MobileStakeHolder1() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden bg-gray-50 py-16 transition-colors duration-700 dark:bg-[#030712]"
    >
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[80px] dark:bg-[#D4AF37]/15" 
      />

      <div className="relative z-10 mx-auto w-full px-5 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-4 flex items-center justify-center gap-2">
              <div className="flex w-fit items-center gap-2 rounded-sm border border-[#D4AF37]/20 bg-white/60 px-4 py-1.5 shadow-sm backdrop-blur-md dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/5">
                <Sparkles size={14} className="text-[#D4AF37]" aria-hidden="true" />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37]">
                  CREMP PLATFORM
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white"
            >
              Built for Every <br />
              <span className="animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                Commercial Stakeholder
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400"
            >
              Tailored tools and connections that accelerate your commercial real estate journey.
            </motion.p>
          </motion.div>
        </div>

        <div className="flex w-full flex-col gap-8">
          {stakeholdersData.map((stakeholder, idx) => {
            const themeColor = iconColors[idx % iconColors.length];

            return (
              <motion.div
                key={stakeholder.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="relative w-full rounded-xl border border-gray-200/50 bg-white shadow-xl dark:border-gray-800/50 dark:bg-[#0a101d] overflow-hidden"
              >
                <div className="flex flex-col">
                  
                  <div className="flex flex-col p-6 pb-8">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow-sm ${themeColor}`}>
                      <stakeholder.icon size={24} strokeWidth={2.5} aria-hidden="true" />
                    </div>

                    <div className="mb-3 w-fit rounded-sm border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-[#b38728] dark:text-[#FBBF24]">
                      FOR {stakeholder.id}
                    </div>

                    <h3 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                      {renderHighlightedTitle(stakeholder.title)}
                    </h3>

                    <button className="group relative mt-4 flex w-full items-center justify-center gap-3 overflow-hidden rounded bg-[#0a1128] px-4 py-3.5 text-white shadow-lg active:scale-[0.98] dark:bg-white dark:text-[#0a1128]">
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#b38728] via-[#D4AF37] to-[#FBBF24] opacity-0 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100" />
                      <span className="relative z-10 text-sm font-bold tracking-wide transition-colors duration-300 group-hover:text-white dark:group-hover:text-[#030811]">
                        {stakeholder.buttonText}
                      </span>
                      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white dark:group-hover:text-[#030811]" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="flex flex-col gap-6 border-t border-gray-100 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-black/20">
                    <div className="grid grid-cols-2 gap-3">
                      {stakeholder.stats?.slice(0, 4).map((stat, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex flex-col justify-center rounded-md border border-gray-200/80 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-[#121c33]"
                        >
                          <stat.icon className="mb-2 h-4 w-4 text-[#F59E0B]" strokeWidth={2} aria-hidden="true" />
                          <span className="text-xl font-black text-[#0a1128] dark:text-white">
                            {stat.value}
                          </span>
                          <span className="mt-0.5 text-[9px] font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {stakeholder.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-3 rounded border border-gray-100 bg-white p-2.5 shadow-sm dark:border-gray-800 dark:bg-[#121c33]"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] text-[#F59E0B] dark:bg-[#0a1128]">
                            <feature.icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                          </div>
                          <span className="text-[13px] font-bold text-[#0a1128] dark:text-gray-100">
                            {feature.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}