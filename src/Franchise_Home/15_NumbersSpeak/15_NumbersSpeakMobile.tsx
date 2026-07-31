import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getBadgeStyles } from "../utils/theme";
import { numbersSpeakData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

function AnimatedCounter({ value, suffix }: { value: string; suffix: string; intent?: string }) {
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
        <div ref={ref} className="text-2xl tracking-tight font-black text-current">
            {count}
            <span className="opacity-80">{suffix}</span>
        </div>
    );
}

export default function NumbersSpeakMobile() {
    return (
        <section className="w-full bg-[#FAFAFA] px-4 py-8">
            <div className="flex flex-col mb-6">
                <SectionHeader 
                    overline={numbersSpeakData.sectionLabel}
                    title={numbersSpeakData.title}
                    subtitle={numbersSpeakData.subtitle}
                    align="left"
                />
                <span className="bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-transparent bg-clip-text text-sm font-bold cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1 mt-[-10px] pb-2">
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
                            className={clsx("rounded-[4px] border p-6 cursor-default transition-all duration-300", getBadgeStyles(stat.intent))}
                        >
                            <div className="flex items-start justify-between gap-2 mb-3">
                                <span
                                    className="text-[8px] font-bold uppercase tracking-wide px-2 py-1 rounded-[2px] leading-tight text-left bg-white/40 dark:bg-black/20 text-current shadow-sm"
                                >
                                    {stat.sublabel}
                                </span>
                                <Icon size={14} strokeWidth={1.5} className="shrink-0 mt-0.5 opacity-80" />
                            </div>
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} intent={stat.intent} />
                            <p className="text-sm font-bold mt-1 opacity-90">{stat.label}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
