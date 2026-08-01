import { useRef, useState } from "react";
import clsx from "clsx";
import { motion, useAnimationFrame, type Variants } from "framer-motion";
import { fullCycleSupportData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

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
    <section className="w-full py-12 overflow-hidden relative rounded-[8px] bg-gray-50 shadow-xl transition-colors duration-700 dark:bg-[#0a1128] dark:shadow-none">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/10"
      />
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
                    className="w-[160px] shrink-0 bg-white/95 dark:bg-[#121c33] backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-[4px] p-5 text-center flex flex-col items-center justify-center shadow-sm"
                  >
                    <div
                      className={clsx(
                        "w-12 h-12 rounded-[4px] flex items-center justify-center mb-3 shadow-sm",
                        item.colorClass,
                      )}
                    >
                      <Icon size={20} strokeWidth={2} className="text-white" />
                    </div>

                    <h4 className="text-[#0a1128] dark:text-white font-bold text-[14px] mb-1.5 whitespace-nowrap tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 text-[12px] font-medium leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-[#0a1128] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-[#0a1128] to-transparent z-10" />
      </div>
    </section>
  );
}
