import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import { stakeholdersData } from "./data";

const getTheme = (id: string) => {
  switch (id) {
    case "developers":
      return {
        activeLine: "to-blue-500 dark:to-blue-500",
        activeGlow:
          "shadow-[0_0_20px_rgba(59,130,246,0.2)] dark:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
        activeBorder: "border-blue-500 dark:border-blue-500",
        activeText: "text-blue-500 dark:text-blue-500",
        bgGlowClass: "to-blue-500/15 dark:to-blue-500/10",
      };
    case "franchisors":
      return {
        activeLine: "to-violet-500 dark:to-violet-500",
        activeGlow:
          "shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
        activeBorder: "border-violet-500 dark:border-violet-500",
        activeText: "text-violet-500 dark:text-violet-500",
        bgGlowClass: "to-violet-500/15 dark:to-violet-500/10",
      };
    case "buyers":
      return {
        activeLine: "to-cyan-500 dark:to-cyan-500",
        activeGlow:
          "shadow-[0_0_20px_rgba(6,182,212,0.2)] dark:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
        activeBorder: "border-cyan-500 dark:border-cyan-500",
        activeText: "text-cyan-500 dark:text-cyan-500",
        bgGlowClass: "to-cyan-500/15 dark:to-cyan-500/10",
      };
    case "consultants":
      return {
        activeLine: "to-orange-500 dark:to-orange-500",
        activeGlow:
          "shadow-[0_0_20px_rgba(249,115,22,0.2)] dark:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
        activeBorder: "border-orange-500 dark:border-orange-500",
        activeText: "text-orange-500 dark:text-orange-500",
        bgGlowClass: "to-orange-500/15 dark:to-orange-500/10",
      };
    case "investors":
      return {
        activeLine: "to-emerald-500 dark:to-emerald-500",
        activeGlow:
          "shadow-[0_0_20px_rgba(16,185,129,0.2)] dark:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
        activeBorder: "border-emerald-500 dark:border-emerald-500",
        activeText: "text-emerald-500 dark:text-emerald-500",
        bgGlowClass: "to-emerald-500/15 dark:to-emerald-500/10",
      };
    default:
      return {
        activeLine: "to-[#D4AF37] dark:to-[#D4AF37]",
        activeGlow:
          "shadow-[0_0_20px_rgba(178,127,28,0.2)] dark:shadow-[0_0_20px_rgba(246,178,59,0.15)]",
        activeBorder: "border-[#D4AF37] dark:border-[#D4AF37]",
        activeText: "text-[#D4AF37] dark:text-[#D4AF37]",
        bgGlowClass: "to-[#D4AF37]/15 dark:to-[#D4AF37]/10",
      };
  }
};

export default function Desktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStakeholder = stakeholdersData[activeIndex];

  const handleTabClick = (idx: number) => {
    if (containerRef.current) {
      const targetY = containerRef.current.offsetTop + idx * window.innerHeight;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
    setActiveIndex(idx);
  };

  const renderHighlightedTitle = (title: string) => {
    const words = title.split("");
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join("")}
        {""}
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#FFD17A]">
          {lastWord}
        </span>
      </>
    );
  };

  const bentoContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const bentoItemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.98, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const illustrationUrl =
    "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80";

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#FAFAFA] transition-colors duration-500 selection:bg-[#D4AF37]/30 dark:bg-[#0b1b42]"
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(178,127,28,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(246,178,59,0.05),transparent_40%)]"
        />

        <div className="relative h-full w-[25%] flex-shrink-0 lg:w-[30%]">
          <div className="absolute -left-[45vh] top-1/2 h-[90vh] w-[90vh] -translate-y-1/2 rounded-full border border-dashed border-gray-300 shadow-[0_0_60px_rgba(178,127,28,0.05)] dark:border-gray-800/60 dark:shadow-[0_0_60px_rgba(246,178,59,0.02)]">
            <motion.div
              animate={{ rotate: activeIndex * 30 - 60 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="absolute left-1/2 top-1/2 h-[100vh] w-[100vh] origin-center -translate-x-1/2 -translate-y-1/2"
            >
              <div
                className={`absolute left-1/2 top-1/2 h-full w-[50%] origin-left -translate-y-1/2 bg-gradient-to-r from-transparent blur-lg transition-colors duration-700 ${getTheme(activeStakeholder.id).bgGlowClass}`}
                style={{
                  clipPath: "polygon(0 45%, 100% 40%, 100% 60%, 0 55%)",
                }}
              />
            </motion.div>

            <div className="pointer-events-none absolute left-[52vh] top-1/2 w-[35vh] -translate-y-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStakeholder.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="text-[1.75rem] font-black leading-[1.1] text-[#111827] dark:text-white/80 xl:text-[2rem]"
                >
                  {activeStakeholder.label.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {stakeholdersData.map((stakeholder, idx) => {
              const angle = -60 + idx * 30;
              const isActive = activeIndex === idx;
              const theme = getTheme(stakeholder.id);

              return (
                <div
                  key={stakeholder.id}
                  onClick={() => handleTabClick(idx)}
                  className="absolute left-1/2 top-1/2 flex cursor-pointer items-center justify-center transition-all duration-700 ease-out"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(45vh)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -angle }}
                    className="group relative flex items-center"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-line"
                        className={`absolute right-[calc(100%+6px)] h-[1px] w-6 bg-gradient-to-r from-transparent opacity-60 ${theme.activeLine}`}
                      />
                    )}

                    <motion.div
                      initial={{ scale: 1, rotate: 0 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-400 xl:h-12 xl:w-12 ${
                        isActive
                          ? `scale-105 bg-white dark:bg-[#0a0f25] ${theme.activeBorder} ${theme.activeText} ${theme.activeGlow}`
                          : "scale-95 border-gray-300 bg-gray-50 text-gray-500 opacity-80 transition-transform hover:scale-100 hover:border-gray-400 hover:text-gray-800 hover:opacity-100 dark:border-gray-800 dark:bg-[#0b1b42] dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200"
                      }`}
                    >
                      <stakeholder.icon
                        className="h-4 w-4 xl:h-5 xl:w-5"
                        strokeWidth={isActive ? 2 : 1.5}
                      />
                    </motion.div>

                    <div
                      className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-32 text-center text-xs tracking-wide transition-colors duration-400 xl:w-40 xl:text-sm ${
                        isActive
                          ? "font-extrabold text-slate-900 dark:text-white"
                          : "font-bold text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {stakeholder.label.replace("\n", "")}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex h-full w-[75%] flex-1 items-center justify-center px-6 lg:w-[70%] lg:px-10 xl:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStakeholder.id}
              variants={bentoContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid w-full max-w-[1000px] grid-cols-1 gap-4 md:grid-cols-12 xl:gap-5"
            >
              <motion.div
                variants={bentoItemVariants}
                className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-[8px] border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50 dark:border-gray-800/80 dark:bg-[#121c33] dark:shadow-2xl dark:shadow-black/60 md:col-span-7 xl:p-8"
              >
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#D4AF37]/15 to-transparent blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50 dark:from-[#D4AF37]/10" />

                <div className="relative z-10 flex flex-col">
                  <div className="mb-5 w-fit rounded-[2px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-2.5 py-1 text-[10px] font-black tracking-widest text-[#D4AF37] dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] xl:text-[11px]">
                    FOR {activeStakeholder.id.toUpperCase()}
                  </div>

                  <h3 className="mb-8 text-3xl font-extrabold leading-[1.2] tracking-tight text-gray-900 dark:text-white xl:text-4xl">
                    {renderHighlightedTitle(activeStakeholder.title)}
                  </h3>

                  <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-6">
                    {activeStakeholder.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <motion.div
                          initial={{ scale: 1, rotate: 0 }}
                          animate={{ scale: 1, rotate: 0 }}
                          whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.3 }}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] border border-gray-200 bg-gray-50 text-[#D4AF37] dark:border-gray-800 dark:bg-[#121c33] dark:text-[#D4AF37] xl:h-10 xl:w-10"
                        >
                          <feature.icon
                            className="h-4 w-4 xl:h-5 xl:w-5"
                            strokeWidth={1.5}
                          />
                        </motion.div>
                        <span className="mt-1 text-xs font-bold leading-relaxed text-gray-700 dark:text-gray-300 xl:text-sm">
                          {feature.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <button className="group relative flex w-fit items-center gap-4 overflow-hidden rounded-[4px] bg-gray-900 px-2 py-1.5 pr-5 text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-gray-900/20 active:scale-[0.98] dark:bg-white dark:text-[#0a1128] dark:hover:bg-gray-100 dark:hover:shadow-white/10 xl:px-2.5 xl:py-2 xl:pr-6">
                    <div className="flex h-7 w-7 items-center justify-center rounded-[2px] bg-transparent text-[#FFD17A] dark:text-[#D4AF37] xl:h-8 xl:w-8">
                      <Sparkles className="h-3 w-3 xl:h-4 xl:w-4" />
                    </div>
                    <span className="text-xs font-bold tracking-wide xl:text-sm">
                      {activeStakeholder.buttonText}
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                variants={bentoItemVariants}
                className="group relative col-span-1 hidden overflow-hidden rounded-[8px] border border-gray-200 bg-gray-100 dark:border-gray-800/80 dark:bg-[#121c33] md:col-span-5 md:block"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-[#0a1128]/80" />
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={`${illustrationUrl}&seed=${activeStakeholder.id}`}
                  alt="Stakeholder Visual"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {activeStakeholder.stats?.map((stat, sIdx) => (
                <motion.div
                  key={sIdx}
                  variants={bentoItemVariants}
                  className="group col-span-1 flex items-center justify-between rounded-[8px] border border-gray-200 bg-white px-5 py-4 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800/80 dark:bg-[#121c33] dark:hover:border-gray-700 dark:hover:bg-[#121c33] md:col-span-3 xl:px-6 xl:py-5"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-black text-gray-900 dark:text-white xl:text-2xl">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400 xl:text-[11px]">
                      {stat.label}
                    </span>
                  </div>
                  <motion.div
                    initial={{ scale: 1, rotate: 0 }}
                    animate={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] xl:h-10 xl:w-10"
                  >
                    <stat.icon
                      className="h-4 w-4 xl:h-5 xl:w-5"
                      strokeWidth={2}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative -mt-[100vh]">
        {stakeholdersData.map((stakeholder, idx) => (
          <motion.div
            key={`trigger-${stakeholder.id}`}
            className="pointer-events-none h-[100vh] w-full"
            onViewportEnter={() => setActiveIndex(idx)}
            viewport={{ amount: 0.5, margin: "0px" }}
          />
        ))}
      </div>
    </div>
  );
}
