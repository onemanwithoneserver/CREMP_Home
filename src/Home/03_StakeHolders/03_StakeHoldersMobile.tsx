import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { stakeholdersData } from './data';
import stakeholderGraphic from './stakeholder_graphic.png';

export default function Mobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStakeholder = stakeholdersData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % stakeholdersData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + stakeholdersData.length) % stakeholdersData.length);
  };

  const renderHighlightedTitle = (title: string) => {
    const words = title.split(' ');
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join(' ')}{' '}
        <span className="text-[#B27F1C] dark:text-[#F6B23B]">{lastWord}</span>
      </>
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-50 font-sans text-gray-900 transition-colors duration-500 selection:bg-[#F6B23B]/30 dark:bg-[#050C17] dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(246,178,59,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(246,178,59,0.05),transparent_70%)]" />

      <div className="relative z-20 mx-auto flex w-full max-w-md flex-col px-4 pb-12 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex w-fit items-center justify-center gap-2 self-center rounded-full border border-[#B27F1C]/30 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#B27F1C] shadow-sm backdrop-blur-md dark:border-[#F6B23B]/30 dark:bg-[#F6B23B]/10 dark:text-[#F6B23B] dark:shadow-[0_0_15px_rgba(246,178,59,0.15)]"
        >
          <span>For Every Stakeholder</span>
        </motion.div>

        <div className="relative mb-8 flex w-full flex-col items-center">
          <div className="relative flex h-[100px] w-full max-w-[320px] flex-col items-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 320 120"
              className="pointer-events-none absolute left-0 top-0 overflow-visible"
            >
              <path
                d="M -20,0 A 180,180 0 0,0 340,0"
                fill="none"
                className="stroke-gray-300 dark:stroke-gray-800/80"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            </svg>

            <button
              onClick={handlePrev}
              className="absolute left-0 top-[50px] z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#B27F1C] shadow-md transition-transform active:scale-95 dark:bg-[#0C1525] dark:text-[#F6B23B]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="absolute left-1/2 top-[45px] -translate-x-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStakeholder.id}
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                  transition={{ duration: 0.4, type: 'spring', bounce: 0.4 }}
                  className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-gray-50 bg-white shadow-[0_8px_30px_rgba(178,127,28,0.2)] dark:border-[#050C17] dark:bg-[#0C1525] dark:shadow-[0_8px_30px_rgba(246,178,59,0.3)]"
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-gray-100 dark:border-gray-800">
                    <activeStakeholder.icon
                      className="h-6 w-6 text-[#B27F1C] dark:text-[#F6B23B]"
                      strokeWidth={1.5}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 top-[50px] z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#B27F1C] shadow-md transition-transform active:scale-95 dark:bg-[#0C1525] dark:text-[#F6B23B]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="relative mt-8 flex h-10 w-full items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStakeholder.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute text-center"
              >
                <h3 className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
                  {activeStakeholder.label.replace('\n', ' ')}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStakeholder.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex w-full flex-col rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-xl backdrop-blur-xl dark:border-gray-800/80 dark:bg-[#0A101A]/80 dark:shadow-2xl sm:p-8"
          >
            <div className="mb-4 w-fit rounded-full border border-[#B27F1C]/30 px-3 py-1.5 text-[10px] font-bold tracking-widest text-[#B27F1C] dark:border-[#F6B23B]/30 dark:text-[#F6B23B]">
              FOR {activeStakeholder.id.toUpperCase()}
            </div>

            <h3 className="mb-8 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
              {renderHighlightedTitle(activeStakeholder.title)}
            </h3>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {activeStakeholder.features.map((feature, fIdx) => (
                <motion.div
                  key={fIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: fIdx * 0.05 }}
                  className="flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-center shadow-sm transition-all active:border-[#B27F1C]/30 dark:border-gray-800 dark:bg-[#050C17]/50 dark:shadow-[inset_0_0_15px_rgba(255,255,255,0.01)] dark:active:border-[#F6B23B]/30"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-[1rem] border border-gray-200 bg-white text-[#B27F1C] shadow-sm dark:border-gray-800 dark:bg-[#050C17] dark:text-[#F6B23B] dark:shadow-[inset_0_0_20px_rgba(246,178,59,0.05)]">
                    <feature.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mb-8 flex w-full justify-center">
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[#F6B23B]/5 shadow-[0_0_40px_rgba(246,178,59,0.1)]">
                <motion.img
                  src={stakeholderGraphic}
                  alt="Stakeholder Illustration"
                  className="h-full w-full object-contain opacity-80 mix-blend-multiply drop-shadow-[0_0_20px_rgba(246,178,59,0.3)] dark:opacity-90 dark:mix-blend-screen"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <button className="group relative mb-8 flex w-full items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-[#F6B23B] to-[#d49924] p-3 text-[#050C17] shadow-[0_0_30px_rgba(246,178,59,0.15)] active:scale-[0.98]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-[#050C17]">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-base font-bold sm:text-lg">
                {activeStakeholder.buttonText}
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-[#050C17]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>

            <div className="grid w-full grid-cols-2 gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-[#050C17]/60">
              {activeStakeholder.stats?.map((stat, sIdx) => (
                <motion.div
                  key={sIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: sIdx * 0.06 }}
                  className="flex flex-col items-center gap-1.5 rounded-xl bg-white py-3 text-center shadow-sm dark:bg-gray-800/30 dark:shadow-none"
                >
                  <stat.icon
                    className="h-5 w-5 text-[#B27F1C] dark:text-[#F6B23B]"
                    strokeWidth={1.5}
                  />
                  <span className="mt-1 text-lg font-bold leading-none text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-gray-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}