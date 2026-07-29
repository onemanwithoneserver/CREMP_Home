import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { numbersSpeakData } from "./data";
import clsx from "clsx";
import { getCardStyles, getBadgeStyles, getTextStyles } from "../utils/theme";

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div ref={ref} className="text-2xl font-black text-gray-900 dark:text-white">
      {count}
      <span className="text-primary dark:text-accent">{suffix}</span>
    </div>
  );
}

export default function NumbersSpeakMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <div className="bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded-lg p-5 mb-6 flex flex-col items-start shadow-sm">
        <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">{numbersSpeakData.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-[13px] mb-3">{numbersSpeakData.subtitle}</p>
        <span className="text-primary dark:text-accent text-xs font-bold cursor-pointer hover:underline flex items-center gap-1 mt-auto">
          ↗ {numbersSpeakData.verifiedLabel}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {numbersSpeakData.stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={clsx("rounded-[4px] border p-4 shadow-sm hover-lift cursor-default transition-all duration-300", getCardStyles(stat.intent))}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span
                  className={clsx("text-[8px] font-bold uppercase tracking-wide px-2 py-1 rounded-[2px] leading-tight text-left", getBadgeStyles(stat.intent))}
                >
                  {stat.sublabel}
                </span>
                <Icon size={14} strokeWidth={1.5} className={clsx("shrink-0 mt-0.5", getTextStyles(stat.intent))} />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-600 dark:text-gray-400 text-[11px] font-bold mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
