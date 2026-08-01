import { useRef, useState } from "react";
import clsx from "clsx";
import { motion, useAnimationFrame } from "framer-motion";
import { fullCycleSupportData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FullCycleSupportMobile() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const x = useRef(0);
  useAnimationFrame((_, delta) => {
    if (paused || !marqueeRef.current) return;
    const speed = 45; 
    x.current -= (speed * delta) / 1000;
    const loopWidth = marqueeRef.current.scrollWidth / 2;
    if (-x.current >= loopWidth) {
      x.current = 0;
    }
    marqueeRef.current.style.transform = `translate3d(${x.current}px,0,0)`;
  });

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 bg-[length:200%_200%] animate-gradient-shift transition-colors duration-300 py-12 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[30%] left-[-10%] w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-[30%] right-[-10%] w-64 h-64 bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      </div>
      <div className="relative z-10 px-2 flex justify-center">
        <SectionHeader
          overline={fullCycleSupportData.sectionLabel}
          title={fullCycleSupportData.title}
          align="center"
        />
      </div>

      <div className="relative z-10 overflow-hidden py-2">
        <motion.div
          ref={marqueeRef}
          className="flex w-max"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onTouchCancel={() => setPaused(false)}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-4 pr-4 shrink-0">
              {fullCycleSupportData.supportItems.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`${copy}-${idx}`}
                    className="w-[160px] shrink-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 rounded-[4px] p-5 text-center flex flex-col items-center justify-center shadow-sm"
                  >
                    <div
                      className={clsx(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-sm",
                        item.colorClass
                      )}
                    >
                      <Icon size={20} strokeWidth={2.5} />
                    </div>

                    <h4 className="text-[#0a1128] dark:text-white font-semibold text-[14px] mb-1.5 whitespace-nowrap tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-gray-500 dark:text-gray-400 text-[12px] font-medium leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />
      </div>
    </section>
  );
}