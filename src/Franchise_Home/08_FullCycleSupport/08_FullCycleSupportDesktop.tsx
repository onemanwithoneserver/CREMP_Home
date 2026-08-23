import { useRef, useState } from "react";
import clsx from "clsx";
import { motion, useAnimationFrame, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fullCycleSupportData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
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
  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 264;
    const totalWidth = containerRef.current.scrollWidth / 2;
    if (direction === "left") {
      x.current += scrollAmount;
      if (x.current > 0) {
        x.current -= totalWidth;
      }
    } else {
      x.current -= scrollAmount;
      if (Math.abs(x.current) >= totalWidth) {
        x.current += totalWidth;
      }
    }
    containerRef.current.style.transform = `translate3d(${x.current}px,0,0)`;
  };
  return (
    <section className="relative w-full rounded-[8px] bg-white/40 px-6 py-16">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute left-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/10"
      />
      <div className="relative z-10 mx-auto mb-8 flex max-w-7xl justify-center">
        <SectionHeader
          overline={fullCycleSupportData.sectionLabel}
          title={fullCycleSupportData.title}
          align="center"
        />
      </div>
      <div className="group relative">
        <div className="relative overflow-x-hidden pt-4">
          <motion.div
            ref={containerRef}
            className="flex w-max"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {[...Array(2)].map((_, keyPrefix) => (
              <div key={keyPrefix} className="flex shrink-0 gap-6 pr-6">
                {fullCycleSupportData.supportItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={`${keyPrefix}-${idx}`}
                      whileHover={{
                        y: -6,
                        scale: 1.03,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        },
                      }}
                      className="group/card relative w-[240px] shrink-0 rounded-[4px] border border-gray-200/60 bg-white/70 p-6 text-center shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-gray-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-[#d4af37]/20 dark:bg-[#0b1b42]/70 dark:hover:border-[#d4af37]/40 dark:hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)]"
                    >
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={clsx(
                          "relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[4px] shadow-sm",
                          item.colorClass,
                        )}
                      >
                        <Icon
                          size={24}
                          strokeWidth={2}
                          className="text-white"
                        />
                      </motion.div>
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
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f9fafb]/80 to-transparent dark:from-[#050b14]/80" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#f9fafb]/80 to-transparent dark:from-[#050b14]/80" />
        </div>
        <button
          onClick={() => handleScroll("left")}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-md backdrop-blur-md transition-all hover:scale-110 active:scale-95 dark:border-white/10 dark:bg-[#121c33]/90 dark:text-[#d4af37]"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => handleScroll("right")}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-md backdrop-blur-md transition-all hover:scale-110 active:scale-95 dark:border-white/10 dark:bg-[#121c33]/90 dark:text-[#d4af37]"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
