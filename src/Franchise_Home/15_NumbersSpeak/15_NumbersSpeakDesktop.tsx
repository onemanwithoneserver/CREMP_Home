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
    <div ref={ref} className="text-4xl font-black text-gray-900 dark:text-white">
      {count}
      <span className="text-primary dark:text-accent">{suffix}</span>
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function NumbersSpeakDesktop() {
  return (
    <section className="w-full bg-background px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded-lg p-8 mb-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between"
        >
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
              {numbersSpeakData.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              {numbersSpeakData.subtitle}
            </p>
          </div>
          <span className="text-primary dark:text-accent text-sm font-bold cursor-pointer hover:underline flex items-center gap-1 mt-4 md:mt-0">
            ↗ {numbersSpeakData.verifiedLabel}
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-3 gap-4"
        >
          {numbersSpeakData.stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className={clsx("rounded-lg border p-6 shadow-sm hover-lift cursor-default transition-all duration-300 flex flex-col", getCardStyles(stat.intent))}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={clsx("text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-[2px]", getBadgeStyles(stat.intent))}
                  >
                    {stat.sublabel}
                  </span>
                  <Icon size={18} strokeWidth={1.5} className={getTextStyles(stat.intent)} />
                </div>
                <div className="mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-bold">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
