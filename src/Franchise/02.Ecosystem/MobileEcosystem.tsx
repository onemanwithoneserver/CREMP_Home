import { motion, type Variants } from "framer-motion";
import { Equal, Globe2, Plus, Target } from "lucide-react";
import { Container } from "../../components/layout";
import { ecosystemData } from "./data";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 30 },
    },
};

const drawLine: Variants = {
    hidden: { pathLength: 0, opacity: 0, strokeDashoffset: 0 },
    show: {
        pathLength: 1,
        opacity: 0.8,
        strokeDashoffset: -48,
        transition: {
            pathLength: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
            opacity: { duration: 0.5, delay: 0.2 },
            strokeDashoffset: {
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 1.7,
            },
        },
    },
};

const pulseGlow: Variants = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [0.3, 0.4, 0.3],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
};

const floatAnimation: Variants = {
    animate: {
        y: [-4, 4, -4],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
};

export default function MobileEcosystem() {
    return (
        <div className="relative w-full overflow-hidden rounded-xl bg-white/40 py-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl border border-white/40 transition-colors duration-700 dark:bg-[#0b1b42]/60 dark:border-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] ">
            <motion.div
                variants={pulseGlow}
                animate="animate"
                className="pointer-events-none absolute left-[-10%] top-[10%] h-[250px] w-[250px] rounded-full bg-[#D4AF37]/10 blur-[80px] dark:bg-[#D4AF37]/10"
            />
            <motion.div
                variants={pulseGlow}
                animate="animate"
                className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-[200px] w-[200px] rounded-full bg-[#D4AF37]/10 blur-[80px] dark:bg-[#D4AF37]/10"
            />

            <Container className="relative z-10 max-w-5xl px-4 mx-auto">
                <div className="mb-4 flex flex-col items-start gap-1 text-left px-2">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex w-full flex-col items-start"
                    >
                        <motion.div variants={fadeInUp} className="mb-3">
                            <span className="flex items-center justify-center gap-1 rounded-full border border-[#D4AF37]/30 bg-white/80 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#D4AF37] shadow-sm backdrop-blur-xl dark:border-[#D4AF37]/30 dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
                                {ecosystemData.tag}
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeInUp}
                            className="mb-4 text-[2.5rem] font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-[3rem]"
                        >
                            Why Expansion <br /> Needs More Than a <br />
                            <span className="bg-gradient-to-r from-[#D4AF37] via-[#e5b344] to-[#D4AF37] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent dark:from-[#D4AF37] dark:via-[#f9d08b] dark:to-[#D4AF37]">
                                {ecosystemData.titleHighlight}
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="mb-6 px-2 text-[0.95rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400"
                        >
                            {ecosystemData.subtitle}
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mb-8 flex w-full flex-col gap-2.5 px-2"
                        >
                            {ecosystemData.issues.map((issue, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <motion.div whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.3 }} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/50 text-[#D4AF37] shadow-[0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-md dark:border-white/10 dark:bg-black/40 dark:text-[#D4AF37] cursor-pointer">
                                        <issue.icon size={14} />
                                    </motion.div>
                                    <span className="text-[0.85rem] font-bold text-gray-800 dark:text-gray-300">
                                        {issue.text}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-[0.9rem] font-bold tracking-wide text-gray-900 dark:text-white"
                        >
                            CREMP brings{""}
                            <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent drop-shadow-sm dark:from-[#D4AF37] dark:to-[#f9d08b]">
                                {ecosystemData.conclusion}
                            </span>
                        </motion.p>
                    </motion.div>

                    <div className="relative mt-8 flex w-full max-w-[360px] flex-col items-center mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            className="relative flex w-full flex-col items-center"
                        >
                            <div className="relative z-10 grid w-full grid-cols-2 gap-3 px-2">
                                <div className="absolute inset-0 z-0 pointer-events-none">
                                    <svg
                                        className="h-full w-full drop-shadow-sm"
                                        viewBox="0 0 300 240"
                                        preserveAspectRatio="none"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="top-lines-grad"
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="100%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#D4AF37"
                                                    stopOpacity="0.6"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor="#b38728"
                                                    stopOpacity="0.8"
                                                />
                                            </linearGradient>
                                            <marker
                                                id="arrowhead-mob"
                                                markerWidth="5"
                                                markerHeight="5"
                                                refX="3"
                                                refY="2.5"
                                                orient="auto"
                                            >
                                                <polygon
                                                    points="0 0, 5 2.5, 0 5"
                                                    fill="url(#top-lines-grad)"
                                                />
                                            </marker>
                                        </defs>
                                        <motion.path
                                            variants={drawLine}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: false }}
                                            d="M 75,50 C 75,80 135,105 142,108"
                                            fill="none"
                                            stroke="url(#top-lines-grad)"
                                            strokeWidth="2"
                                            strokeDasharray="4 4"
                                            markerEnd="url(#arrowhead-mob)"
                                        />
                                        <motion.path
                                            variants={drawLine}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: false }}
                                            d="M 225,50 C 225,80 165,105 158,108"
                                            fill="none"
                                            stroke="url(#top-lines-grad)"
                                            strokeWidth="2"
                                            strokeDasharray="4 4"
                                            markerEnd="url(#arrowhead-mob)"
                                        />
                                    </svg>
                                </div>

                                {ecosystemData.flowItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="relative z-20 flex min-h-[90px] w-full flex-col items-center justify-center rounded-xl border border-white/40 bg-white/40 p-3 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-black/20"
                                    >
                                        <motion.div whileHover={{ scale: 1.25, rotate: [0, 180, 360] }} transition={{ duration: 0.5 }} className="mb-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/60 shadow-inner backdrop-blur-sm border border-white/50 dark:bg-black/50 dark:border-white/10 cursor-pointer pointer-events-auto">
                                            <item.icon
                                                size={16}
                                                className="text-[#D4AF37] dark:text-[#D4AF37]"
                                            />
                                        </motion.div>
                                        <span className="text-[0.7rem] font-bold leading-tight text-gray-800 sm:text-[0.75rem] dark:text-gray-200">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}

                                <motion.div whileHover={{ scale: 1.2, rotate: 90 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="absolute left-1/2 top-1/2 z-30 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b38728] text-white shadow-md ring-2 ring-gray-50 backdrop-blur-sm dark:from-[#D4AF37] dark:to-[#b38728] dark:ring-[#0a1128] cursor-pointer pointer-events-auto">
                                    <Plus size={14} strokeWidth={3} />
                                </motion.div>
                            </div>

                            <div className="relative z-0 -mt-[10px] h-[40px] w-full px-4">
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    viewBox="0 0 300 40"
                                    preserveAspectRatio="none"
                                >
                                    <defs>
                                        <linearGradient
                                            id="gold-line-grad-mob"
                                            x1="0%"
                                            y1="0%"
                                            x2="0%"
                                            y2="100%"
                                        >
                                            <stop offset="0%" stopColor="#b38728" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#D4AF37" stopOpacity="1" />
                                        </linearGradient>
                                    </defs>
                                    <motion.path
                                        variants={drawLine}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false }}
                                        d="M 75,0 C 75,20 150,25 150,40"
                                        fill="none"
                                        stroke="url(#gold-line-grad-mob)"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                    />
                                    <motion.path
                                        variants={drawLine}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false }}
                                        d="M 225,0 C 225,20 150,25 150,40"
                                        fill="none"
                                        stroke="url(#gold-line-grad-mob)"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                    />
                                </svg>
                            </div>

                            <div className="z-20 -mt-[12px] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b38728] text-white shadow-md ring-2 ring-gray-50 backdrop-blur-sm dark:from-[#D4AF37] dark:to-[#b38728] dark:ring-[#0a1128]">
                                <Equal size={16} strokeWidth={3} />
                            </div>

                            <motion.div
                                variants={floatAnimation}
                                animate="animate"
                                className="relative z-10 -mt-[12px] flex w-[90%] max-w-[280px] items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#020617] p-3 shadow-lg ring-1 ring-white/10 dark:from-[#121c33] dark:to-[#0a1128]"
                            >
                                <div className="absolute inset-0 flex justify-end rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-50 dark:from-[#D4AF37]/20" />

                                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 shadow-inner ring-1 ring-white/10">
                                    <Globe2
                                        size={20}
                                        className="text-[#D4AF37]"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div className="relative z-10 flex flex-col text-left">
                                    <span className="text-[0.75rem] font-bold text-gray-300 uppercase tracking-wider">
                                        One Connected
                                    </span>
                                    <span className="bg-gradient-to-r from-[#e5b344] to-[#f9d08b] bg-clip-text text-[0.95rem] font-black tracking-wide text-transparent">
                                        Expansion Ecosystem
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="relative mx-auto mt-10 flex w-full max-w-2xl flex-row items-center justify-start gap-4 overflow-hidden rounded-xl border border-white/40 bg-white/40 p-4 text-left shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl dark:border-white/10 dark:bg-black/20"
                >
                    <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#D4AF37] to-[#b38728] dark:from-[#D4AF37] dark:to-[#b38728]" />

                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/50 backdrop-blur-md shadow-sm dark:border-white/10 dark:bg-black/40 transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50">
                        <Target
                            size={18}
                            className="text-[#D4AF37] dark:text-[#D4AF37]"
                            strokeWidth={2}
                        />
                    </div>

                    <p className="relative z-10 text-[0.95rem] font-medium leading-relaxed text-gray-700 dark:text-gray-300 text-left">
                        Instead of switching between multiple platforms,{""}
                        <span className="font-bold text-gray-900 dark:text-white">
                            manage your expansion journey from{""}
                            <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                                {ecosystemData.bannerTextHighlight}
                            </span>
                        </span>
                    </p>
                </motion.div>
            </Container>
        </div>
    );
}
