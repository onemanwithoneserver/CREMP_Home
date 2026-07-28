import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { numbersSpeakData } from "./data";
import clsx from "clsx";

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

const getIntentStyles = (intent?: string) => {
  switch(intent) {
    case 'success': return { wrapper: 'border-success-light hover:border-success', badge: 'bg-success/10 text-success', icon: 'text-success' };
    case 'info': return { wrapper: 'border-info-light hover:border-info', badge: 'bg-info/10 text-info', icon: 'text-info' };
    case 'warning': return { wrapper: 'border-warning-light hover:border-warning', badge: 'bg-warning/10 text-warning', icon: 'text-warning' };
    case 'danger': return { wrapper: 'border-danger-light hover:border-danger', badge: 'bg-danger/10 text-danger', icon: 'text-danger' };
    case 'primary': return { wrapper: 'border-primary/20 hover:border-primary/40', badge: 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent', icon: 'text-primary dark:text-accent' };
    default: return { wrapper: 'border-border hover:border-gray-300 dark:hover:border-gray-600', badge: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400', icon: 'text-gray-500' };
  }
};

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
            const styles = getIntentStyles(stat.intent);
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className={clsx("bg-white dark:bg-surface border rounded-lg p-6 shadow-sm hover-lift cursor-default transition-colors flex flex-col", styles.wrapper)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={clsx("text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full", styles.badge)}
                  >
                    {stat.sublabel}
                  </span>
                  <Icon size={18} strokeWidth={1.5} className={styles.icon} />
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
