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
    <section className="w-full py-12 overflow-hidden relative rounded-[8px] bg-white/40 ">
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
                  <motion.div
                    key={`${copy}-${idx}`}
                    whileHover={{ scale: 1.02 }}
                    className="group relative hover:z-10 w-[160px] shrink-0 bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl border border-gray-200/60 dark:border-[#d4af37]/20 rounded-[4px] p-5 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className={clsx(
                        "w-12 h-12 rounded-[4px] flex items-center justify-center mb-3 shadow-sm relative z-10",
                        item.colorClass,
                      )}
                    >
                      <Icon size={20} strokeWidth={2} className="text-white" />
                    </motion.div>

                    <h4 className="text-[#0a1128] dark:text-white font-bold text-[14px] mb-1.5 whitespace-nowrap tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 text-[12px] font-medium leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f9fafb]/80 dark:from-[#050b14]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f9fafb]/80 dark:from-[#050b14]/80 to-transparent z-10" />
      </div>
    </section>
  );
}
