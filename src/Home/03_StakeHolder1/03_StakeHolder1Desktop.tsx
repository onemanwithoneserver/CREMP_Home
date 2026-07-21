import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { stakeholdersData } from "../03_StakeHolders/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function DesktopStakeHolder1() {
  // Updated gradients to use the distinct colors for different stakeholders
  const gradients = [
    "bg-gradient-to-br from-[#D4AF37]/90 to-[#8C6B1B]/90 dark:from-[#D4AF37]/90 dark:to-[#FFD17A]/90",
    "bg-gradient-to-tr from-rose-700/90 via-indigo-900/90 to-cyan-400/90",
    "bg-gradient-to-br from-emerald-500/90 to-teal-800/90",
    "bg-gradient-to-tr from-orange-500/90 to-red-700/90",
    "bg-gradient-to-bl from-blue-600/90 to-indigo-900/90",
  ];

  const renderHighlightedTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")}{" "}
        <span className="bg-gradient-to-r from-[#b38728] via-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:via-[#FBBF24] dark:to-[#D4AF37]">
          {lastWord}
        </span>
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden bg-[#FAFAFA] font-sans transition-colors duration-500 dark:bg-[#030811] py-12 xl:py-16"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-14 px-3 sm:px-5 lg:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="mb-4 inline-flex items-center justify-center gap-1.5 rounded-[8px] border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 to-[#FBBF24]/5 px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.15)] backdrop-blur-sm sm:text-xs">
              <Sparkles className="h-3 w-3 text-[#FBBF24]" />
              <span>CREMP PLATFORM</span>
              <Sparkles className="h-3 w-3 text-[#FBBF24]" />
            </div>
            <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Built for Every <br />
              <span className="bg-gradient-to-r from-[#b38728] via-[#D4AF37] to-[#FBBF24] bg-clip-text text-transparent">
                Commercial Stakeholder
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              Our marketplace adapts to your specific needs, providing tailored
              tools and connections to accelerate your commercial real estate
              journey.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-16 xl:gap-24">
          {stakeholdersData.map((stakeholder, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={stakeholder.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col items-center gap-8 lg:gap-12 xl:gap-16 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="relative flex w-full flex-col lg:w-5/12 max-w-sm lg:max-w-none mx-auto">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full overflow-hidden rounded-[8px] border border-[#D4AF37]/20 bg-gradient-to-br from-white to-[#FAFAFA] shadow-xl shadow-[#D4AF37]/5 dark:border-[#D4AF37]/10 dark:from-[#0a0f1d] dark:to-[#030811] dark:shadow-black/80"
                  >
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent dark:from-[#030811] dark:via-[#030811]/40" />
                    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[8px]">
                      <div
                        className={`absolute inset-0 h-full w-full ${
                          gradients[idx % gradients.length]
                        } mix-blend-multiply dark:mix-blend-overlay transition-transform duration-1000 group-hover:scale-105`}
                      />
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />
                      
                      <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-white/10 text-white backdrop-blur-md border border-white/30 shadow-md transition-transform duration-500 group-hover:rotate-6">
                          <stakeholder.icon
                            className="h-5 w-5"
                            strokeWidth={2.5}
                          />
                        </div>
                        <h4 className="text-xl font-bold text-white drop-shadow-md tracking-tight sm:text-2xl">
                          {stakeholder.label.replace("\n", " ")}
                        </h4>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
                  >
                    {stakeholder.stats?.slice(0, 4).map((stat, sIdx) => (
                      <motion.div
                        key={sIdx}
                        variants={fadeInUp}
                        className="group flex flex-col justify-center rounded-[4px] border border-[#D4AF37]/10 bg-gradient-to-br from-white via-[#FAFAFA] to-[#FFFDF5] p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-md hover:shadow-[#D4AF37]/10 dark:from-[#0a0f1d] dark:via-[#111624] dark:to-[#17150b]/80 dark:hover:border-[#FBBF24]/30"
                      >
                        <stat.icon
                          className="mb-2 h-4 w-4 text-[#F59E0B] transition-transform duration-300 group-hover:scale-110"
                          strokeWidth={2}
                        />
                        <span className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                          {stat.value}
                        </span>
                        <span className="mt-1 text-[9px] font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                          {stat.label}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div className="flex w-full flex-col justify-center lg:w-1/2 lg:py-4">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 15 : -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-4 w-fit rounded-[2px] border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-2.5 py-1 text-[10px] font-black tracking-widest text-[#b38728] dark:text-[#FBBF24]">
                      FOR {stakeholder.id.toUpperCase()}
                    </div>

                    <h3 className="mb-6 text-2xl font-extrabold leading-[1.2] tracking-tight text-gray-900 dark:text-white lg:text-3xl xl:text-4xl">
                      {renderHighlightedTitle(stakeholder.title)}
                    </h3>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
                  >
                    {stakeholder.features.map((feature, fIdx) => (
                      <motion.div
                        key={fIdx}
                        variants={fadeInUp}
                        className="group flex items-start gap-3 rounded-[4px] border border-transparent bg-gradient-to-tr from-white via-[#FAFAFA] to-white p-3 shadow-[0_1px_5px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#D4AF37]/20 hover:from-[#FAFAFA] hover:to-[#FFFDF5] hover:shadow-md dark:from-[#0a0f1d]/80 dark:via-[#0c1222]/80 dark:to-[#0a0f1d]/80 dark:hover:border-[#D4AF37]/30 dark:hover:from-[#0a0f1d] dark:hover:to-[#17150b]/40"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#FAFAFA] to-[#FFFDF5] text-[#F59E0B] shadow-sm transition-colors duration-300 group-hover:border-[#D4AF37]/40 dark:border-[#D4AF37]/20 dark:from-[#121826] dark:to-[#1a1c29] xl:h-9 xl:w-9">
                          <feature.icon
                            className="h-4 w-4 xl:h-4 xl:w-4"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="flex flex-col justify-center pt-0.5">
                          <span className="text-[12px] font-bold leading-snug text-gray-800 dark:text-gray-200 xl:text-[13px]">
                            {feature.title}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mt-auto"
                  >
                    <button className="group relative flex w-fit items-center gap-3 overflow-hidden rounded-[4px] bg-gradient-to-r from-gray-900 to-gray-800 px-2 py-1.5 pr-5 text-white shadow-lg shadow-[#b38728]/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#D4AF37]/20 active:translate-y-0 dark:from-[#FAFAFA] dark:to-gray-200 dark:text-[#030811] xl:px-2 xl:py-2 xl:pr-6">
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#b38728] via-[#D4AF37] to-[#FBBF24] transition-all duration-500 ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                      <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-[2px] bg-white/10 text-[#FEF08A] backdrop-blur-sm dark:bg-black/5 dark:text-[#F59E0B] group-hover:text-white dark:group-hover:text-[#030811] xl:h-8 xl:w-8">
                        <Sparkles className="h-3 w-3 transition-transform duration-300 group-hover:scale-110 xl:h-3.5 xl:w-3.5" />
                      </div>
                      <span className="relative z-10 text-xs font-bold tracking-wide transition-colors duration-300 group-hover:text-white dark:group-hover:text-[#030811] xl:text-sm">
                        {stakeholder.buttonText}
                      </span>
                      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white dark:group-hover:text-[#030811]" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}