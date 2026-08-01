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

export default function FullCycleSupportDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    if (paused || !containerRef.current) return;
    const speed = 60;
    x.current -= (speed * delta) / 1000;
    const totalWidth = containerRef.current.scrollWidth / 2;
    if (Math.abs(x.current) >= totalWidth) {
      x.current = 0;
    }
    containerRef.current.style.transform = `translate3d(${x.current}px,0,0)`;
  });

  return (
    <section className="w-full px-6 py-16 overflow-hidden relative rounded-[8px] bg-gray-50 shadow-xl transition-colors duration-700 dark:bg-[#0a1128] dark:shadow-none">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/10"
      />
      <div className="relative z-10 max-w-7xl mx-auto mb-8 flex justify-center">
        <SectionHeader
          overline={fullCycleSupportData.sectionLabel}
          title={fullCycleSupportData.title}
          align="center"
        />
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex w-max"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...Array(2)].map((_, keyPrefix) => (
            <div key={keyPrefix} className="flex gap-6 pr-6 shrink-0">
              {fullCycleSupportData.supportItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={`${keyPrefix}-${idx}`}
                    whileHover={{ y: -6, scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                    className="w-[240px] shrink-0 rounded-[4px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121c33] p-6 text-center shadow-sm hover:shadow-xl hover:border-[#d4af37]/40 dark:hover:border-[#d4af37]/40 transition-all duration-300"
                  >
                    <div
                      className={clsx(
                        "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[4px] shadow-sm",
                        item.colorClass,
                      )}
                    >
                      <Icon size={24} strokeWidth={2} className="text-white" />
                    </div>
                    <h4 className="mb-2 text-[15px] font-bold text-[#0a1128] dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-snug text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#0a1128] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#0a1128] to-transparent z-10" />
      </div>
    </section>
  );
}
