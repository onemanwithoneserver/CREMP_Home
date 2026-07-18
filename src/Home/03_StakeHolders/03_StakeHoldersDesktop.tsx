import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { stakeholdersData } from './data';

export default function Desktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const iconColorMap: Record<string, string> = {
    emerald: 'text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border-emerald-300 dark:border-emerald-500/20 shadow-[0_4px_10px_rgba(16,185,129,0.2)] dark:shadow-none',
    blue: 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10 border-blue-300 dark:border-blue-500/20 shadow-[0_4px_10px_rgba(59,130,246,0.2)] dark:shadow-none',
    purple: 'text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 border-purple-300 dark:border-purple-500/20 shadow-[0_4px_10px_rgba(168,85,247,0.2)] dark:shadow-none',
    rose: 'text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-500/10 border-rose-300 dark:border-rose-500/20 shadow-[0_4px_10px_rgba(225,29,72,0.2)] dark:shadow-none',
    amber: 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/20 shadow-[0_4px_10px_rgba(217,119,6,0.2)] dark:shadow-none',
    cyan: 'text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 border-cyan-300 dark:border-cyan-500/20 shadow-[0_4px_10px_rgba(8,145,178,0.2)] dark:shadow-none'
  };

  const activeStakeholder = stakeholdersData[activeIndex];

  const handleTabClick = (idx: number) => {
    if (containerRef.current) {
      // Find the scroll position corresponding to this tab's trigger div
      const targetY = containerRef.current.offsetTop + (idx * window.innerHeight);
      // Try to scroll the window. If the app uses a custom scroll container, 
      // this smooth scroll might fall back, but the active state will still update.
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
    setActiveIndex(idx);
  };

  return (
    <div ref={containerRef} className="relative w-full bg-gray-50 dark:bg-[#050C17]">
      
      {/* Sticky Visuals */}
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        
        <motion.div 
          animate={{ 
            y: ["-10%", "10%", "-10%"],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#B27F1C]/5 blur-[120px] dark:bg-[#F6B23B]/10" 
        />

        <div className="relative h-full w-[25%] flex-shrink-0 lg:w-[30%]">
          <div className="absolute -left-[45vh] top-1/2 h-[90vh] w-[90vh] -translate-y-1/2 rounded-full border border-gray-200/50 bg-white/40 shadow-[10px_0_40px_rgba(0,0,0,0.02)] backdrop-blur-2xl dark:border-gray-800/50 dark:bg-[#0C1525]/40 dark:shadow-[10px_0_50px_rgba(0,0,0,0.5)]">
            
            {stakeholdersData.map((stakeholder, idx) => {
              const angle = -45 + (idx * 30);
              const isActive = activeIndex === idx;

              return (
                <div 
                  key={stakeholder.id}
                  onClick={() => handleTabClick(idx)}
                  className="absolute left-1/2 top-1/2 flex cursor-pointer items-center justify-center transition-all duration-700 ease-out"
                  style={{ 
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(45vh)` 
                  }}
                >
                  <motion.div 
                    animate={{ rotate: -angle }}
                    className="relative flex items-center group"
                  >
                    <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border shadow-sm transition-all duration-500 xl:h-16 xl:w-16 ${
                      isActive 
                        ? 'scale-125 border-[#B27F1C] bg-gradient-to-br from-[#B27F1C]/20 to-transparent text-[#B27F1C] shadow-[0_0_30px_rgba(178,127,28,0.4)] backdrop-blur-md dark:border-[#F6B23B] dark:from-[#F6B23B]/20 dark:text-[#F6B23B] dark:shadow-[0_0_30px_rgba(246,178,59,0.4)]' 
                        : 'scale-90 border-gray-200/50 bg-white/50 text-gray-400 opacity-50 backdrop-blur-sm transition-transform group-hover:scale-100 group-hover:opacity-80 dark:border-gray-700/50 dark:bg-[#0C1525]/50'
                    }`}>
                      <stakeholder.icon className="h-6 w-6 xl:h-7 xl:w-7" strokeWidth={1.8} />
                    </div>

                    <div className={`absolute left-[calc(100%+24px)] w-48 text-left text-sm font-bold tracking-wide transition-all duration-500 xl:text-base ${
                      isActive 
                        ? 'translate-x-0 text-[#050C17] opacity-100 drop-shadow-md dark:text-white' 
                        : '-translate-x-4 text-gray-500 opacity-0 group-hover:-translate-x-2 group-hover:opacity-40'
                    }`}>
                      {stakeholder.label.replace('\n', ' ')}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex h-full w-[75%] flex-1 items-center justify-center px-12 lg:w-[70%] lg:px-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStakeholder.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex w-full max-w-4xl flex-col rounded-2xl border border-gray-200 bg-white/80 p-10 shadow-2xl backdrop-blur-xl dark:border-gray-800 dark:bg-[#0C1525]/80 xl:p-14"
            >
              <h3 className="mb-5 text-4xl font-extrabold tracking-tight text-[#050C17] dark:text-white xl:text-5xl">
                {activeStakeholder.title}
              </h3>
              
              <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#B27F1C] to-[#d49924] dark:from-[#F6B23B] dark:to-[#ffc15e]" />

              <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300 xl:text-lg">
                {activeStakeholder.description}
              </p>

              <div className="mb-10 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 xl:gap-x-12 xl:gap-y-10">
                {activeStakeholder.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-5">
                    <div className="flex-shrink-0">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-[8px] border xl:h-14 xl:w-14 ${
                        feature.colorFamily 
                          ? iconColorMap[feature.colorFamily] 
                          : 'border-gray-200 bg-gray-50 text-[#B27F1C] dark:border-gray-700 dark:bg-[#111A2C] dark:text-[#F6B23B]'
                      }`}>
                        <feature.icon className="h-6 w-6 xl:h-7 xl:w-7" strokeWidth={1.8} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-lg font-semibold leading-tight text-[#050C17] dark:text-white xl:text-xl">
                        {feature.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto border-t border-gray-200 pt-8 dark:border-gray-800/50">
                <button className="group flex w-fit items-center gap-3 rounded-lg border border-[#B27F1C]/50 bg-transparent px-8 py-3 text-base font-bold text-[#B27F1C] transition-all hover:bg-[#B27F1C]/10 active:scale-95 dark:border-[#F6B23B]/50 dark:text-[#F6B23B] dark:hover:bg-[#F6B23B]/10">
                  {activeStakeholder.buttonText}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Invisible Scroll Triggers Overlay */}
      <div className="relative -mt-[100vh]">
        {stakeholdersData.map((stakeholder, idx) => (
          <motion.div
            key={`trigger-${stakeholder.id}`}
            className="h-[100vh] w-full pointer-events-none"
            onViewportEnter={() => setActiveIndex(idx)}
            viewport={{ amount: 0.5, margin: "0px" }}
          />
        ))}
      </div>

    </div>
  );
}