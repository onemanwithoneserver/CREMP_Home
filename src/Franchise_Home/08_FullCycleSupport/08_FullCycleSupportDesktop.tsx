import { useRef, useState } from "react";
import clsx from "clsx";
import { motion, useAnimationFrame } from "framer-motion";
import { fullCycleSupportData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

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
    <section className="w-full px-6 py-16 overflow-hidden relative bg-white dark:bg-[#0a1128] transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[30%] left-[-5%] w-72 h-72 bg-[#d4af37]/5 dark:bg-[#d4af37]/10 rounded-full blur-2xl animate-float" />
        <div
          className="absolute bottom-[30%] right-[-5%] w-72 h-72 bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>
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
                  <div
                    key={`${keyPrefix}-${idx}`}
                    className="w-[240px] shrink-0 rounded-[4px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121c33] p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700"
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
                  </div>
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
