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

export default function MobileYourInvestors() {
    return (
        <div className="relative w-full overflow-hidden rounded-[8px] bg-white py-4 shadow-xl transition-colors duration-700 dark:bg-[#0a1128] dark:shadow-none">
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="pointer-events-none absolute right-[-10%] top-0 h-[400px] w-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent dark:from-[#D4AF37]/10"
            />

            <Container className="relative z-10">
                <div className="mb-8 flex flex-col items-center gap-6 text-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex w-full flex-col items-center"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="mb-4 flex items-center justify-center gap-3"
                        >
                            <div className="flex h-8 items-center justify-center rounded-[4px] bg-[#D4AF37]/10 px-4 dark:bg-[#D4AF37]/10">
                                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
                                    {investorData.tag}
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeInUp}
                            className="mb-4 text-[2.5rem] font-black leading-[1.1] tracking-tight sm:text-[3rem]"
                        >
                            <span className="block text-gray-900 dark:text-white">
                                {investorData.titleBase}
                            </span>
                            <span className="block animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                                {investorData.titleHighlight}
                            </span>
                        </motion.h2>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col items-center gap-4 px-2"
                        >
                            <p className="text-[0.95rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                                {investorData.desc[0]}
                            </p>
                            <div className="mt-2 border-t-2 border-[#D4AF37] pt-4 dark:border-[#D4AF37]">
                                <p className="text-[0.95rem] font-bold leading-relaxed text-gray-900 dark:text-white">
                                    {investorData.desc[1]}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ type: "spring", stiffness: 250, damping: 25 }}
                        className="flex flex-col items-center rounded-[8px] border border-gray-200/50 bg-gray-50 p-6 text-center shadow-md dark:border-gray-800/50 dark:bg-[#121c33]"
                    >
                        <div className="mb-8 flex flex-col items-center gap-4">
                            <motion.div whileHover={{ rotate: 180, scale: 1.1 }} transition={{ duration: 0.5 }} className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-900 dark:ring-gray-800">
                                <Activity
                                    size={20}
                                    className="text-[#D4AF37] dark:text-[#D4AF37]"
                                />
                            </motion.div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-white">
                                {investorData.expectationsTitle}
                            </h3>
                        </div>

                        <div className="flex flex-col gap-6">
                            {investorData.expectations.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center gap-3 rounded-[4px] bg-white p-4 shadow-sm dark:bg-[#0a1128]/50 text-center border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
                                >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-sm font-black text-gray-900 ring-1 ring-gray-200 dark:bg-gray-900 dark:text-white dark:ring-gray-800">
                                        {idx + 1}
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="mb-2 flex items-center justify-center gap-2">
                                            <motion.div whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.3 }} className="cursor-pointer">
                                                <item.icon
                                                    size={16}
                                                    className="text-[#D4AF37] dark:text-[#D4AF37]"
                                                    strokeWidth={2.5}
                                                />
                                            </motion.div>
                                            <span className="text-[0.95rem] font-bold text-gray-900 dark:text-white">
                                                {item.title}
                                            </span>
                                        </div>
                                        <p className="text-[0.8rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 25,
                            delay: 0.2,
                        }}
                        className="relative flex flex-col items-center justify-center overflow-hidden rounded-[8px] bg-gradient-to-b from-[#0f172a] to-[#0a1128] p-8 text-center shadow-xl ring-1 ring-white/10 dark:from-[#121c33] dark:to-[#121c33]"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/30 via-transparent to-transparent opacity-60 dark:from-[#D4AF37]/30" />

                        <div className="relative z-10 mb-8 flex flex-col items-center">
                            <span className="mb-4 rounded-[4px] border border-[#D4AF37]/40 bg-[#D4AF37]/20 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-[#D4AF37] backdrop-blur-md">
                                {investorData.outcome.tag}
                            </span>
                            <h3 className="text-xl font-black leading-tight text-white">
                                {investorData.outcome.title}
                            </h3>
                        </div>

                        <div className="relative flex h-36 w-36 items-center justify-center">
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

                            <motion.div whileHover={{ scale: 1.1, rotate: 90 }} transition={{ type: "spring", stiffness: 300 }} className="relative z-20 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#b38728] shadow-[0_0_30px_rgba(178,127,28,0.6)] dark:from-[#D4AF37] dark:to-[#f9d08b]">
                                <Target
                                    size={24}
                                    className="text-white dark:text-gray-900"
                                    strokeWidth={2.5}
                                />
                            </motion.div>

                            <motion.div
                                animate={{ y: [-3, 3, -3], rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -right-1 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30"
                            >
                                <Star
                                    size={10}
                                    className="text-[#D4AF37]"
                                    fill="currentColor"
                                />
                            </motion.div>
                            <motion.div
                                animate={{ y: [3, -3, 3], scale: [1, 1.1, 1] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute bottom-2 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30"
                            >
                                <CheckCircle2 size={14} className="text-emerald-400" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
