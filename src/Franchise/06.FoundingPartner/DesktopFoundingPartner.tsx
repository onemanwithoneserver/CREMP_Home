import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Check, Gem, ShieldCheck, Star } from "lucide-react";
import { Container } from "../../components/layout";
import { foundingData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 25 },
    },
};

const rocketFloat: Variants = {
    animate: {
        y: [-6, 6, -6],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
};

const flameFlicker: Variants = {
    animate: {
        scaleY: [1, 1.25, 0.9, 1.15, 1],
        opacity: [0.7, 1, 0.6, 1, 0.7],
        transition: { duration: 0.4, repeat: Infinity, ease: "linear" },
    },
};

const pulseGlow: Variants = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [0.4, 0.7, 0.4],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
};

export default function DesktopFoundingPartner() {
    const Btn1Icon = foundingData.buttons[0].icon;

    return (
        <div className="relative w-full overflow-hidden bg-gray-50 py-12 transition-colors duration-700 dark:bg-[#0a1128]">
            <motion.div
                variants={pulseGlow}
                animate="animate"
                className="pointer-events-none absolute right-1/4 top-0 h-[600px] w-[600px] -translate-y-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent opacity-60 blur-3xl dark:from-[#D4AF37]/15"
            />
            <motion.div
                variants={pulseGlow}
                animate="animate"
                className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 blur-3xl"
            />

            <Container className="relative z-10 mx-auto max-w-7xl px-4 xl:px-0">
                <div className="relative flex w-full flex-col overflow-hidden rounded-[8px] border border-gray-200/80 bg-white shadow-2xl dark:border-gray-800/80 dark:bg-[#121c33] lg:flex-row lg:items-stretch lg:p-4">
                    <div className="relative flex w-full flex-col p-8 pt-10 lg:w-[48%] lg:px-10 lg:py-12">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}
                            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="mb-6 flex w-fit items-center gap-2 rounded-[2px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-1.5 backdrop-blur-md dark:border-[#D4AF37]/30 dark:bg-[#D4AF37]/10"
                            >
                                <Star
                                    size={14}
                                    className="text-[#D4AF37] dark:text-[#D4AF37]"
                                    fill="currentColor"
                                />
                                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
                                    {foundingData.tag}
                                </span>
                            </motion.div>

                            <motion.h2
                                variants={fadeInUp}
                                className="mb-6 whitespace-pre-line text-[2.8rem] font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white xl:text-[3.2rem]"
                            >
                                {foundingData.title}
                            </motion.h2>

                            <motion.p
                                variants={fadeInUp}
                                className="max-w-md text-[1.05rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400"
                            >
                                {foundingData.desc}
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                type: "spring",
                                bounce: 0.4,
                            }}
                            className="relative mt-20 flex h-[360px] w-full items-center justify-center lg:mt-auto"
                        >
                            <div className="absolute bottom-0 left-1/2 w-[340px] -translate-x-1/2">
                                <div className="absolute -bottom-8 left-1/2 h-10 w-[300px] -translate-x-1/2 rounded-[100%] bg-[#D4AF37]/20 blur-xl dark:bg-[#D4AF37]/15" />

                                <div className="absolute bottom-0 left-1/2 z-30 flex h-14 w-full -translate-x-1/2 items-end justify-center rounded-[100%] border border-[#D4AF37]/30 bg-white pb-2 shadow-[0_15px_30px_rgba(178,127,28,0.15)] dark:border-[#D4AF37]/30 dark:bg-[#121c33] dark:shadow-[0_15px_30px_rgba(246,178,59,0.15)]">
                                    <span className="-translate-x-[0.5em] pl-[0.3em] text-[0.7rem] font-black tracking-[0.3em] text-[#D4AF37] dark:text-[#D4AF37]">
                                        FOUNDING PARTNER
                                    </span>
                                </div>

                                <div className="absolute bottom-4 left-1/2 z-20 h-12 w-[290px] -translate-x-1/2 rounded-[100%] border-t border-[#D4AF37]/40 bg-gray-50 dark:border-[#D4AF37]/40 dark:bg-[#111827]" />

                                <div className="absolute bottom-8 left-1/2 z-10 flex h-10 w-[240px] -translate-x-1/2 items-center justify-center rounded-[100%] border border-gray-200 bg-gradient-to-b from-white to-gray-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] dark:border-gray-700/80 dark:from-[#121c33] dark:to-[#121c33]">
                                    <div className="h-[60%] w-[60%] rounded-[100%] border border-gray-300/50 dark:border-gray-600/30" />
                                </div>
                            </div>

                            <motion.div
                                variants={rocketFloat}
                                initial="animate"
                                className="absolute bottom-[80px] left-[45%] z-40 flex -translate-x-1/2 flex-col items-center"
                            >
                                <div className="relative h-44 w-16 overflow-hidden rounded-b-[4px] rounded-t-[100%] bg-gradient-to-tr from-[#b45309] via-[#f59e0b] to-[#fde68a] shadow-[0_20px_40px_rgba(178,127,28,0.4)] dark:shadow-[0_20px_40px_rgba(246,178,59,0.2)]">
                                    <div className="absolute right-0 top-0 h-full w-1/2 bg-white/25" />

                                    <div className="absolute left-1/2 top-12 h-8 w-8 -translate-x-1/2 rounded-full border-[3px] border-yellow-100 bg-sky-100 shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] dark:border-yellow-400 dark:bg-[#121c33]">
                                        <div className="absolute right-1 top-1 h-2 w-3 -rotate-45 rounded-full bg-white/60" />
                                    </div>
                                </div>

                                <div className="absolute -left-7 bottom-2 h-16 w-8 -skew-y-12 rounded-br-[4px] rounded-tl-[100%] bg-gradient-to-tr from-[#92400e] to-[#d97706] shadow-lg" />
                                <div className="absolute -right-7 bottom-2 h-16 w-8 skew-y-12 rounded-bl-[4px] rounded-tr-[100%] bg-gradient-to-tl from-[#92400e] to-[#d97706] shadow-lg" />
                                <div className="absolute bottom-0 z-50 h-12 w-4 rounded-t-full bg-gradient-to-t from-[#78350f] to-[#b45309]" />

                                <motion.div
                                    variants={flameFlicker}
                                    initial="animate"
                                    className="absolute -bottom-6 z-30 h-14 w-6 origin-top rounded-full bg-gradient-to-t from-transparent via-[#f59e0b] to-white opacity-90 blur-[2px]"
                                />
                                <motion.div
                                    variants={flameFlicker}
                                    initial="animate"
                                    transition={{ delay: 0.1 }}
                                    className="absolute -bottom-8 z-20 h-16 w-10 origin-top rounded-full bg-gradient-to-t from-transparent via-red-500 to-yellow-300 opacity-60 blur-[4px]"
                                />
                            </motion.div>

                            {foundingData.rocketNodes.map((node, idx) => {
                                const isLeft = node.pos.includes("left");
                                const isTop = node.pos.includes("top");

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6 + idx * 0.1,
                                            type: "spring",
                                        }}
                                        className={`absolute z-50 flex flex-col items-center gap-2 left-[45%] -translate-x-1/2 ${isLeft ? "-ml-[170px]" : "ml-[170px]"
                                            } ${isTop ? "top-[120px]" : "top-[216px]"}`}
                                    >
                                        <div className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#D4AF37]/30 bg-white/90 text-[#D4AF37] shadow-[0_10px_20px_rgba(178,127,28,0.15)] backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:shadow-[0_10px_25px_rgba(178,127,28,0.25)] dark:border-[#D4AF37]/30 dark:bg-[#111827]/90 dark:text-[#D4AF37] dark:hover:bg-[#121c33] dark:hover:shadow-[0_10px_25px_rgba(246,178,59,0.25)]">
                                            <node.icon
                                                size={18}
                                                strokeWidth={2}
                                                className="transition-transform group-hover:scale-110"
                                            />

                                            <svg
                                                className={`pointer-events-none absolute ${isLeft ? "left-full" : "right-full"} ${isTop ? "top-1/2" : "bottom-1/2"}`}
                                                style={{ width: "113px", height: "48px" }}
                                                viewBox="0 0 113 48"
                                                preserveAspectRatio="none"
                                            >
                                                {(() => {
                                                    const iconX = isLeft ? 0 : 113;
                                                    const iconY = isTop ? 0 : 48;
                                                    const rocketX = isLeft ? 113 : 0;
                                                    const rocketY = isTop ? 48 : 0;

                                                    const getPoint = (t: number) => ({
                                                        cx: iconX + (rocketX - iconX) * t,
                                                        cy: iconY + (rocketY - iconY) * t,
                                                    });

                                                    const dots = [0.15, 0.5, 1.0].map(getPoint);

                                                    return (
                                                        <>
                                                            <line
                                                                x1={iconX}
                                                                y1={iconY}
                                                                x2={rocketX}
                                                                y2={rocketY}
                                                                stroke="currentColor"
                                                                className="text-[#D4AF37]/40 dark:text-[#D4AF37]/40"
                                                                strokeWidth="1.5"
                                                                strokeDasharray="3 4"
                                                            />
                                                            {dots.map((pt, i) => (
                                                                <circle
                                                                    key={i}
                                                                    cx={pt.cx}
                                                                    cy={pt.cy}
                                                                    r={i === 2 ? "2.5" : "1.5"}
                                                                    className="fill-[#D4AF37] dark:fill-[#D4AF37]"
                                                                    style={{
                                                                        filter: `drop-shadow(0px 0px ${i === 2 ? 4 : 2}px rgba(246,178,59,0.8))`,
                                                                    }}
                                                                />
                                                            ))}
                                                        </>
                                                    );
                                                })()}
                                            </svg>
                                        </div>
                                        <span className="text-center text-[0.65rem] font-bold leading-tight text-gray-500 dark:text-gray-400">
                                            {node.label}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    <div className="relative z-10 flex w-full flex-col rounded-[8px] bg-gray-50/50 p-8 shadow-[inset_1px_0_0_rgba(0,0,0,0.05)] dark:bg-[#0a1128]/50 dark:shadow-[inset_1px_0_0_rgba(255,255,255,0.05)] lg:w-[52%] lg:p-12">
                        <div className="mb-8 flex items-center gap-4 border-b border-gray-200/60 pb-6 dark:border-gray-800/60">
                            <motion.div
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.5 }}
                                className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 to-transparent shadow-sm dark:border-[#D4AF37]/20 dark:from-[#D4AF37]/10"
                            >
                                <Gem
                                    size={20}
                                    className="text-[#D4AF37] dark:text-[#D4AF37]"
                                    strokeWidth={2}
                                />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {foundingData.benefitsTitle}
                            </h3>
                        </div>

                        <div className="relative mb-10 flex flex-1 flex-col gap-3">
                            <div className="pointer-events-none absolute left-[26px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-[#D4AF37]/20" />

                            {foundingData.benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + idx * 0.1,
                                        type: "spring",
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    className="group relative flex w-full cursor-pointer items-center gap-4 rounded-[4px] p-3 px-4 transition-all hover:border-[#D4AF37]/30 hover:bg-white hover:shadow-md dark:border-gray-800/50 dark:hover:bg-[#121c33]/90"
                                >
                                    <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-white text-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-white dark:bg-[#0a1128] dark:group-hover:text-[#0a1128]">
                                        <Check size={12} strokeWidth={3} />
                                    </div>

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-400 transition-all duration-300 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] group-hover:shadow-lg dark:border-gray-800 dark:bg-[#111827] dark:group-hover:border-[#D4AF37]/50 dark:group-hover:bg-[#D4AF37]/10 dark:group-hover:text-[#D4AF37]">
                                        <benefit.icon size={18} strokeWidth={1.5} />
                                    </div>

                                    <span className="text-[1.05rem] font-bold text-gray-900 transition-colors group-hover:text-[#D4AF37] dark:text-white dark:group-hover:text-[#D4AF37]">
                                        {benefit.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-stretch">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative flex flex-1 items-center justify-between overflow-hidden rounded-[4px] bg-gradient-to-r from-[#D4AF37] to-[#b38728] p-4 text-left shadow-xl transition-all hover:shadow-[0_15px_30px_rgba(178,127,28,0.3)] dark:from-[#D4AF37] dark:to-[#f9d08b] dark:hover:shadow-[0_15px_30px_rgba(246,178,59,0.3)]"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:-200%_0,0_0] hover:duration-[1500ms]" />
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:rotate-12">
                                        <Btn1Icon
                                            size={24}
                                            className="text-white dark:text-gray-900"
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-black text-white dark:text-gray-900">
                                            {foundingData.buttons[0].title}
                                        </span>
                                        <span className="text-[0.7rem] font-bold text-white/90 dark:text-gray-900/80">
                                            {foundingData.buttons[0].subtitle}
                                        </span>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    size={20}
                                    className="relative z-10 text-white opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 dark:text-gray-900"
                                />
                            </motion.button>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <ShieldCheck
                                size={14}
                                className="text-[#D4AF37] dark:text-[#D4AF37]"
                            />
                            <span className="text-[0.7rem] font-medium text-gray-500 dark:text-gray-400">
                                {foundingData.bottomDisclaimer}
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
