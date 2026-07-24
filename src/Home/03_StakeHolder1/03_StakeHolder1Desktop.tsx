import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { stakeholdersData } from "../03_StakeHolders/data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

export default function DesktopStakeHolder1() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden bg-white py-24 transition-colors duration-700 dark:bg-[#030811]"
    >
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-full max-w-4xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent opacity-70 blur-[80px] dark:from-[#D4AF37]/5" 
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center justify-center gap-2">
              <div className="flex w-fit items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-white/60 px-5 py-2 shadow-sm backdrop-blur-md dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/5">
                <Sparkles size={16} className="text-[#D4AF37]" aria-hidden="true" />
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#D4AF37]">
                  CREMP PLATFORM
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-4xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Built for Every <br />
              <span className="animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                Commercial Stakeholder
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400"
            >
              Tailored tools and connections that accelerate your commercial real estate journey.
            </motion.p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          {stakeholdersData.map((stakeholder, idx) => {
            const isEven = idx % 2 === 0;
            const themeColor = iconColors[idx % iconColors.length];

            return (
              <motion.div
                key={stakeholder.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative min-h-[450px] w-full overflow-hidden rounded-xl border border-gray-200/50 bg-gray-50/50 shadow-xl dark:border-gray-800/50 dark:bg-gray-900/30"
              >
                <div className={`flex h-full flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  
                  <div className="flex w-full flex-col justify-center p-10 lg:w-1/2 lg:p-14">
                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-sm ${themeColor}`}>
                      <stakeholder.icon size={32} strokeWidth={2} aria-hidden="true" />
                    </div>

                    <div className="mb-4 w-fit rounded-sm border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#b38728] dark:text-[#FBBF24]">
                      FOR {stakeholder.id}
                    </div>

                    <h3 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-[#0a1128] dark:text-white">
                      {renderHighlightedTitle(stakeholder.title)}
                    </h3>

                    <button className="group relative mt-auto flex w-fit items-center gap-4 overflow-hidden rounded bg-[#0a1128] px-4 py-3 pr-8 text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-gray-900/20 active:scale-[0.98] dark:bg-white dark:text-[#0a1128] dark:hover:bg-gray-100 dark:hover:shadow-white/10">
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#b38728] via-[#D4AF37] to-[#FBBF24] opacity-0 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100" />
                      
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#FEF08A] backdrop-blur-sm group-hover:text-white dark:bg-black/5 dark:text-[#F59E0B] dark:group-hover:text-[#030811]">
                        <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                      </div>
                      
                      <span className="relative z-10 text-sm font-bold tracking-wide transition-colors duration-300 group-hover:text-white dark:group-hover:text-[#030811]">
                        {stakeholder.buttonText}
                      </span>
                      
                      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white dark:group-hover:text-[#030811]" aria-hidden="true" />
                    </button>
                  </div>

                  <div className={`flex w-full flex-col justify-center border-t border-gray-200/50 bg-white/50 p-10 dark:border-gray-800/50 dark:bg-black/20 lg:w-1/2 lg:border-t-0 lg:p-14 ${isEven ? "lg:border-l" : "lg:border-r"}`}>
                    <div className="mb-10 grid grid-cols-2 gap-4">
                      {stakeholder.stats?.slice(0, 4).map((stat, sIdx) => (
                        <div
                          key={sIdx}
                          className="group flex flex-col justify-center rounded-md border border-[#D4AF37]/10 bg-gradient-to-br from-white via-[#FAFAFA] to-[#FFFDF5] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-md dark:from-[#1a2642] dark:via-[#1e2a4a] dark:to-[#1a2642]/80 dark:hover:border-[#FBBF24]/30"
                        >
                          <stat.icon
                            className="mb-3 h-5 w-5 text-[#F59E0B] transition-transform duration-300 group-hover:scale-110"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                          <span className="text-2xl font-black text-[#0a1128] dark:text-white">
                            {stat.value}
                          </span>
                          <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {stakeholder.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-3 rounded border border-transparent bg-gradient-to-tr from-white to-[#FAFAFA] p-3 shadow-sm dark:from-[#1a2642]/50 dark:to-[#1e2a4a]/50"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#FAFAFA] text-[#F59E0B] dark:border-[#D4AF37]/20 dark:bg-[#121826]">
                            <feature.icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                          </div>
                          <span className="text-sm font-bold text-[#0a1128] dark:text-gray-100">
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