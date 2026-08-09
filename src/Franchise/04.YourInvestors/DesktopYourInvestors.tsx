import { motion, type Variants } from "framer-motion";
import { Activity, CheckCircle2, Star, Target } from "lucide-react";
import { Container } from "../../components/layout";
import { investorData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 25 },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const pulseRing: Variants = {
    animate: {
        scale: [1, 1.15, 1],
        opacity: [0.4, 0.1, 0.4],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
};

export default function DesktopYourInvestors() {
    return (
        <div className="relative w-full overflow-hidden rounded-[8px] bg-white/40 py-12 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl border border-white/40 transition-colors duration-700 dark:bg-[#0b1b42]/60 dark:border-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <motion.div
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/4 translate-x-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent dark:from-[#D4AF37]/15"
            />
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
                className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent dark:from-[#D4AF37]/10"
            />

            <Container className="relative z-10 mx-auto max-w-7xl px-4 xl:px-0">
                <div className="mb-24 flex flex-col items-center justify-center text-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex w-full max-w-4xl flex-col items-center justify-center"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="mb-6 flex items-center justify-center gap-3"
                        >
                            <div className="flex h-8 items-center justify-center rounded-[4px] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 backdrop-blur-md transition-colors hover:bg-[#D4AF37]/20 dark:bg-[#D4AF37]/10 dark:hover:bg-[#D4AF37]/20">
                                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
                                    {investorData.tag}
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeInUp}
                            className="mb-8 flex items-center justify-center gap-3 whitespace-nowrap text-[3.5rem] font-black leading-[1.05] tracking-tight xl:text-[4.5rem]"
                        >
                            <span className="text-gray-900 transition-transform hover:scale-105 dark:text-white">
                                {investorData.titleBase}
                            </span>
                            <span className="animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                                {investorData.titleHighlight}
                            </span>
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="flex max-w-2xl flex-col items-center gap-6">
                            <p className="text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                                {investorData.desc[0]}
                            </p>
                            <div className="border-t border-[#D4AF37]/50 pt-6">
                                <p className="text-xl font-bold leading-relaxed text-gray-900 dark:text-white">
                                    {investorData.desc[1]}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 250, damping: 25 }}
                        className="col-span-1 flex flex-col overflow-hidden   p-10  backdrop-blur-xl transition-all  lg:col-span-2"
                    >
                        <div className="mb-10 flex items-center gap-4">
                            <motion.div
                                whileHover={{ rotate: 180, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-md dark:border-white/10 dark:bg-black/40"
                            >
                                <Activity
                                    size={20}
                                    className="text-[#D4AF37] dark:text-[#D4AF37]"
                                />
                            </motion.div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                                {investorData.expectationsTitle}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
                            {investorData.expectations.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 5 }}
                                    className="group flex cursor-pointer gap-5"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-gray-900 shadow-sm ring-1 ring-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] group-hover:text-white group-hover:ring-[#D4AF37] dark:bg-gray-900 dark:text-white dark:ring-gray-800 dark:group-hover:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:group-hover:text-gray-900 dark:group-hover:ring-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95">
                                            {idx + 1}
                                        </div>
                                        {idx < investorData.expectations.length - 2 && (
                                            <div className="mt-2 h-full w-[2px] bg-gray-200 transition-colors group-hover:bg-[#D4AF37]/30 dark:bg-gray-800 dark:group-hover:bg-[#D4AF37]/30 sm:hidden" />
                                        )}
                                    </div>
                                    <div className="flex flex-col pt-1">
                                        <div className="mb-2 flex items-center gap-2">
                                            <motion.div whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.3 }} className="flex items-center justify-center rounded-full bg-[#D4AF37]/10 p-1.5 transition-colors group-hover:bg-[#D4AF37]/20 dark:bg-[#D4AF37]/10 dark:group-hover:bg-[#D4AF37]/20">
                                                <item.icon
                                                    size={18}
                                                    className="text-[#D4AF37] dark:text-[#D4AF37]"
                                                    strokeWidth={2.5}
                                                />
                                            </motion.div>
                                            <span className="text-lg font-bold text-gray-900 transition-colors group-hover:text-[#D4AF37] dark:text-white dark:group-hover:text-[#D4AF37]">
                                                {item.title}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        whileHover={{ y: -5 }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 25,
                            delay: 0.2,
                        }}
                        className="relative col-span-1 flex flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#17274C] p-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all hover:shadow-[0_20px_50px_rgba(178,127,28,0.2)] dark:bg-[#17274C] dark:hover:shadow-[0_20px_50px_rgba(246,178,59,0.15)]"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/30 via-transparent to-transparent opacity-60 dark:from-[#D4AF37]/30" />

                        <div className="relative z-10 mb-12 flex flex-col items-center">
                            <span className="mb-4 rounded-[4px] border border-[#D4AF37]/40 bg-[#D4AF37]/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] backdrop-blur-md">
                                {investorData.outcome.tag}
                            </span>
                            <h3 className="text-2xl font-black leading-tight text-white">
                                {investorData.outcome.title}
                            </h3>
                        </div>

                        <div className="relative flex h-48 w-48 items-center justify-center">
                            <motion.div
                                variants={pulseRing}
                                initial="animate"
                                className="absolute h-full w-full rounded-full border-2 border-[#D4AF37]/50 dark:border-[#D4AF37]/50"
                            />
                            <motion.div
                                variants={pulseRing}
                                initial="animate"
                                transition={{ delay: 1 }}
                                className="absolute h-[75%] w-[75%] rounded-full border border-[#D4AF37]/70 dark:border-[#D4AF37]/70"
                            />
                            <motion.div
                                variants={pulseRing}
                                initial="animate"
                                transition={{ delay: 2 }}
                                className="absolute h-[50%] w-[50%] rounded-full border border-[#D4AF37]/90 dark:border-[#D4AF37]/90"
                            />

                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#b38728] shadow-[0_0_40px_rgba(178,127,28,0.6)] dark:from-[#D4AF37] dark:to-[#f9d08b] dark:shadow-[0_0_40px_rgba(246,178,59,0.6)]"
                            >
                                <Target
                                    size={28}
                                    className="text-white dark:text-gray-900"
                                    strokeWidth={2.5}
                                />
                            </motion.div>

                            <motion.div
                                animate={{ y: [-4, 4, -4], rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -right-2 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30"
                            >
                                <Star
                                    size={12}
                                    className="text-[#D4AF37]"
                                    fill="currentColor"
                                />
                            </motion.div>
                            <motion.div
                                animate={{ y: [4, -4, 4], scale: [1, 1.1, 1] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute bottom-4 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30"
                            >
                                <CheckCircle2 size={16} className="text-emerald-400" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
