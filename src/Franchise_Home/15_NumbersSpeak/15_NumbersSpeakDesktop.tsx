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
        <div ref={ref} className="text-4xl font-black text-current">
            {count}
            <span className="opacity-80">{suffix}</span>
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
                <div className="flex flex-col md:flex-row items-start justify-between mb-2">
                    <SectionHeader 
                        overline={numbersSpeakData.sectionLabel}
                        title={numbersSpeakData.title}
                        subtitle={numbersSpeakData.subtitle}
                        align="left"
                    />
                    <span className="bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-transparent bg-clip-text text-base font-bold cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1 mt-4 md:mt-0 pt-2">
                        ↗ {numbersSpeakData.verifiedLabel}
                    </span>
                </div>

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
                                className={clsx("rounded-lg border p-6 cursor-default transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-lg", getBadgeStyles(stat.intent))}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span
                                        className="text-sm font-bold uppercase tracking-widest px-2.5 py-1 rounded-[2px] bg-white/40 dark:bg-black/20 text-current shadow-sm"
                                    >
                                        {stat.sublabel}
                                    </span>
                                    <Icon size={18} strokeWidth={1.5} className="opacity-80" />
                                </div>
                                <div className="mb-2">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} intent={stat.intent} />
                                </div>
                                <p className="text-sm font-bold opacity-90">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
