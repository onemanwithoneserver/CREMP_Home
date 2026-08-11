import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";
import { stakeholdersData } from "./data";
import stakeholderGraphic from "./stakeholder_graphic.png";

export default function Mobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStakeholder = stakeholdersData[activeIndex];
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNext = () => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % stakeholdersData.length;
      scrollToAccordion(next);
      return next;
    });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const next =
        (prev - 1 + stakeholdersData.length) % stakeholdersData.length;
      scrollToAccordion(next);
      return next;
    });
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
    scrollToAccordion(index);
  };

  const scrollToAccordion = (index: number) => {
    setTimeout(() => {
      if (accordionRefs.current[index]) {
        accordionRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  const renderHighlightedTitle = (title: string) => {
    const words = title.split("");
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join("")}
        {""}
        <span className="text-[#D4AF37] dark:text-[#D4AF37]">{lastWord}</span>
      </>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-50 text-gray-900 transition-colors duration-500 selection:bg-[#D4AF37]/30 dark:bg-[#0b1b42] dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(246,178,59,0.15),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(246,178,59,0.1),transparent_70%)]" />
      <div className="pointer-events-none absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-3xl dark:bg-[#D4AF37]/5" />
      <div className="pointer-events-none absolute top-3/4 -right-20 h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-3xl dark:bg-[#D4AF37]/5" />

      <div className="relative z-20 mx-auto flex w-full max-w-md flex-col px-4 pb-16 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex w-fit items-center justify-center gap-2 self-center rounded-full border border-[#D4AF37]/30 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] shadow-sm backdrop-blur-md dark:border-[#D4AF37]/30 dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] dark:shadow-[0_0_15px_rgba(246,178,59,0.15)]"
        >
          <span>For Every Stakeholder</span>
        </motion.div>

        <div className="relative mb-8 flex w-full flex-col items-center pt-2">
          <div className="relative flex h-[120px] w-full max-w-[340px] flex-col items-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 340 120"
              className="pointer-events-none absolute left-0 top-0 overflow-visible"
            >
              <path
                d="M 10,20 A 160,160 0 0,0 330,20"
                fill="none"
                className="stroke-[#D4AF37]/20 dark:stroke-[#D4AF37]/20"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ filter: "blur(4px)" }}
              />
              <path
                d="M 10,20 A 160,160 0 0,0 330,20"
                fill="none"
                className="stroke-gray-300 dark:stroke-gray-700/60"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
            </svg>

            <button
              onClick={handlePrev}
              className="absolute left-0 top-[50px] z-30 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-500 shadow-lg backdrop-blur-md transition-all hover:text-[#D4AF37] active:scale-95 dark:border-gray-800 dark:bg-[#0a0f25]/90 dark:text-gray-400 dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:text-[#D4AF37]"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
            </button>

            <div className="absolute left-1/2 top-[40px] z-20 -translate-x-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStakeholder.id}
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
                  className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/40 dark:border-[#D4AF37]/40"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/20 dark:border-[#D4AF37]/20"
                  />

                  <div className="relative flex h-full w-full items-center justify-center rounded-full border-4 border-gray-50 bg-white shadow-[0_10px_40px_rgba(178,127,28,0.3)] dark:border-[#0a1128] dark:bg-[#121c33] dark:shadow-[0_10px_40px_rgba(246,178,59,0.4)]">
                    <motion.div
                      initial={{ scale: 1, rotate: 0 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                      className="flex h-full w-full items-center justify-center rounded-full border border-gray-100 dark:border-gray-800"
                    >
                      <activeStakeholder.icon
                        className="h-7 w-7 text-[#D4AF37] dark:text-[#D4AF37]"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 top-[50px] z-30 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-500 shadow-lg backdrop-blur-md transition-all hover:text-[#D4AF37] active:scale-95 dark:border-gray-800 dark:bg-[#0a0f25]/90 dark:text-gray-400 dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:text-[#D4AF37]"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          {stakeholdersData.map((stakeholder, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <motion.div
                key={stakeholder.id}
                ref={(el) => {
                  accordionRefs.current[idx] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#D4AF37]/40 bg-white/90 shadow-[0_15px_40px_rgba(178,127,28,0.1)] backdrop-blur-xl dark:border-[#D4AF37]/40 dark:bg-[#0a0f25]/90 dark:shadow-[0_15px_40px_rgba(246,178,59,0.15)]"
                    : "border-gray-200 bg-white/60 shadow-sm hover:border-[#D4AF37]/20 dark:border-gray-800/60 dark:bg-[#0a0f25]/40 dark:hover:border-[#D4AF37]/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 1, rotate: 0 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-[4px] transition-colors duration-300 ${
                        isOpen
                          ? "bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] text-white shadow-lg dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:text-[#0a1128]"
                          : "bg-gray-100 text-[#D4AF37] dark:bg-gray-800/80 dark:text-[#D4AF37]"
                      }`}
                    >
                      <stakeholder.icon className="h-6 w-6" strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
                        {stakeholder.id}
                      </div>
                      <h4
                        className={`text-lg font-bold transition-colors duration-300 ${
                          isOpen
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {stakeholder.label.replace("\n", "")}
                      </h4>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-[#D4AF37]/30 text-[#D4AF37] dark:border-[#D4AF37]/30 dark:text-[#D4AF37]"
                        : "border-gray-200 text-gray-400 dark:border-gray-700 dark:text-gray-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div className="px-5 pb-6 pt-2">
                        <h3 className="mb-6 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                          {renderHighlightedTitle(stakeholder.title)}
                        </h3>

                        <div className="mb-6 grid grid-cols-2 gap-3">
                          {stakeholder.features.map((feature, fIdx) => (
                            <div
                              key={fIdx}
                              className="group flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-gray-50/80 p-4 text-center shadow-sm transition-colors hover:border-[#D4AF37]/20 dark:border-gray-800/60 dark:bg-[#0b1b42]/60 dark:hover:border-[#D4AF37]/20 transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
                            >
                              <motion.div
                                initial={{ scale: 1, rotate: 0 }}
                                animate={{ scale: 1, rotate: 0 }}
                                whileHover={{
                                  scale: 1.15,
                                  rotate: [0, -10, 10, 0],
                                }}
                                transition={{ duration: 0.3 }}
                                className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-white transition-colors group-hover:bg-[#D4AF37]/10 dark:bg-gray-800/80 dark:group-hover:bg-[#D4AF37]/10"
                              >
                                <feature.icon
                                  className="h-5 w-5 text-[#D4AF37] dark:text-[#D4AF37]"
                                  strokeWidth={1.5}
                                />
                              </motion.div>
                              <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300">
                                {feature.title}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mb-6 flex w-full justify-center">
                          <motion.div
                            animate={{ y: [-4, 4, -4] }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#D4AF37]/5 to-transparent dark:from-[#D4AF37]/5"
                          >
                            <img
                              src={stakeholderGraphic}
                              alt="Stakeholder Illustration"
                              className="h-full object-contain opacity-80 mix-blend-multiply drop-shadow-[0_10px_20px_rgba(246,178,59,0.2)] dark:opacity-90 dark:mix-blend-screen"
                            />
                          </motion.div>
                        </div>

                        <div className="mb-6 flex w-full gap-3">
                          {stakeholder.stats?.map((stat, sIdx) => (
                            <div
                              key={sIdx}
                              className="flex flex-1 flex-col items-center justify-center rounded-xl border border-gray-100 bg-white py-3 shadow-sm dark:border-gray-800 dark:bg-[#121c33] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
                            >
                              <stat.icon
                                className="mb-1 h-4 w-4 text-[#D4AF37] dark:text-[#D4AF37]"
                                strokeWidth={1.5}
                              />
                              <span className="text-base font-bold leading-none text-gray-900 dark:text-white">
                                {stat.value}
                              </span>
                              <span className="mt-1 text-[9px] font-medium text-gray-500 uppercase tracking-wider">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#b38728] p-3 text-[#0a1128] shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                            <Sparkles className="h-5 w-5" />
                          </div>
                          <span className="text-[15px] font-bold">
                            {stakeholder.buttonText}
                          </span>
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:translate-x-1">
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
