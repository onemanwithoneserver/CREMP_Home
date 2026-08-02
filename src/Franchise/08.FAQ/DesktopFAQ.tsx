import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Minus, Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import { Container } from "../../components/layout";
import { faqData } from "./data";

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

const pulseGlow: Variants = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [0.3, 0.6, 0.3],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
};

export default function DesktopFAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const midPoint = Math.ceil(faqData.faqs.length / 2);
    const leftColFaQS = faqData.faqs
        .slice(0, midPoint)
        .map((faq, i) => ({ ...faq, originalIdx: i }));
    const rightColFaQS = faqData.faqs
        .slice(midPoint)
        .map((faq, i) => ({ ...faq, originalIdx: i + midPoint }));

    const renderFaqCard = (faq: any) => {
        const isOpen = openIdx === faq.originalIdx;

        return (
            <motion.div
                key={faq.originalIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                whileHover={{ y: -2 }}
                className={`group relative overflow-hidden rounded-[4px] border bg-white/60 px-5 py-4 shadow-sm backdrop-blur-md transition-all hover:shadow-lg dark:bg-gray-900/40 ${isOpen
                        ? "border-[#D4AF37]/40 bg-white dark:border-[#D4AF37]/40 dark:bg-gray-800/80"
                        : "border-gray-200/60 dark:border-gray-800/60 hover:border-[#D4AF37]/30 dark:hover:border-[#D4AF37]/30"
                    }`}
            >
                <div
                    className="flex cursor-pointer items-start gap-4"
                    onClick={() => setOpenIdx(isOpen ? null : faq.originalIdx)}
                >
                    <div
                        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${isOpen
                                ? "border-transparent bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] text-white shadow-md dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:text-gray-900"
                                : "border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/5 dark:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 dark:group-hover:bg-[#D4AF37]/10"
                            }`}
                    >
                        <motion.div whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.3 }} className="cursor-pointer">
                            <faq.icon
                                size={18}
                                strokeWidth={isOpen ? 2.5 : 1.5}
                                className="transition-all duration-200"
                            />
                        </motion.div>
                    </div>

                    <div className="flex flex-1 flex-col pt-1">
                        <div className="flex items-center justify-between gap-4">
                            <h4
                                className={`text-[1.05rem] font-bold leading-tight transition-colors duration-300 ${isOpen
                                        ? "text-[#D4AF37] dark:text-[#D4AF37]"
                                        : "text-gray-900 dark:text-white"
                                    }`}
                            >
                                {faq.q}
                            </h4>
                            <div
                                className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${isOpen ? "bg-[#D4AF37]/10 dark:bg-[#D4AF37]/10 text-[#D4AF37] dark:text-[#D4AF37] shadow-inner" : "bg-gray-50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-500 group-hover:bg-gray-100 dark:group-hover:bg-gray-800"}`}
                            >
                                <Plus
                                    size={16}
                                    strokeWidth={2.5}
                                    className={`absolute transition-all duration-200 ${isOpen ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                                />
                                <Minus
                                    size={16}
                                    strokeWidth={2.5}
                                    className={`absolute transition-all duration-200 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}
                                />
                            </div>
                        </div>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <p className="mt-4 text-[0.95rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="relative w-full overflow-hidden rounded-[8px] bg-gray-50 pt-4 py-4 transition-colors duration-700 dark:bg-[#0a1128] dark:shadow-none">
            <motion.div
                variants={pulseGlow}
                animate="animate"
                className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent dark:from-[#D4AF37]/10"
            />
            <motion.div
                variants={pulseGlow}
                animate="animate"
                className="pointer-events-none absolute bottom-0 right-0 h-[800px] w-[800px] translate-x-1/3 translate-y-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10"
            />

            <Container className="relative z-10 flex flex-col items-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="mb-12 flex max-w-3xl flex-col items-center text-center"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="mb-6 flex items-center gap-2 rounded-[2px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-1.5 backdrop-blur-md dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/10"
                    >
                        <motion.div whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.3 }} className="cursor-pointer">
                            <Sparkles
                                size={14}
                                className="text-[#D4AF37] dark:text-[#D4AF37]"
                                fill="currentColor"
                            />
                        </motion.div>
                        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
                            {faqData.tag}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeInUp}
                        className="mb-6 text-[3rem] font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white sm:text-[3.5rem] lg:text-[4rem]"
                    >
                        {faqData.title}
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400"
                    >
                        {faqData.desc}
                    </motion.p>
                </motion.div>

                <div className="mb-16 grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8 xl:px-8">
                    <div className="flex w-full flex-col gap-6">
                        {leftColFaQS.map(renderFaqCard)}
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        {rightColFaQS.map(renderFaqCard)}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    whileHover={{ y: -4, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    className="relative flex w-full flex-col items-center justify-between overflow-hidden rounded-[8px] bg-gradient-to-br from-[#121c33] to-[#0a1128] p-8 shadow-2xl ring-1 ring-white/10 transition-shadow lg:flex-row lg:px-12 lg:py-10"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/20 blur-[100px] dark:bg-[#D4AF37]/20"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]"
                    />

                    <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.03]">
                        <svg
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-full w-full"
                        >
                            <circle cx="100" cy="100" r="100" fill="url(#banner-grad)" />
                            <defs>
                                <linearGradient
                                    id="banner-grad"
                                    x1="0"
                                    y1="0"
                                    x2="200"
                                    y2="200"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="relative z-10 mb-8 flex items-center gap-8 lg:mb-0">
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative flex h-20 w-20 shrink-0 cursor-pointer flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl lg:h-24 lg:w-24"
                        >
                            <div className="absolute -top-3 right-2 h-4 w-4 rotate-45 rounded-[2px] bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_15px_rgba(178,127,28,0.6)] dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:shadow-[0_0_15px_rgba(246,178,59,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95" />
                            <faqData.banner.icon
                                size={36}
                                strokeWidth={1.5}
                                className="text-[#D4AF37] dark:text-[#D4AF37] lg:h-[40px] lg:w-[40px]"
                            />
                        </motion.div>
                        <div className="flex flex-col">
                            <h3 className="mb-2 whitespace-pre-line text-2xl font-black leading-tight text-white lg:mb-3 lg:text-3xl">
                                {faqData.banner.title}
                            </h3>
                            <p className="text-[1rem] font-medium text-gray-400 lg:text-[1.05rem]">
                                {faqData.banner.desc}
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 flex w-full flex-col sm:w-auto sm:flex-row sm:items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center justify-center gap-3 whitespace-nowrap overflow-hidden rounded-[4px] bg-gradient-to-r from-[#D4AF37] to-[#b38728] px-8 py-4 text-[1.05rem] font-bold text-gray-900 shadow-xl transition-all hover:shadow-[0_0_30px_rgba(178,127,28,0.4)] dark:from-[#D4AF37] dark:to-[#f9d08b] dark:hover:shadow-[0_0_30px_rgba(246,178,59,0.4)]"
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:-200%_0,0_0] hover:duration-[1500ms]" />
                            <faqData.banner.btn1.icon
                                size={20}
                                strokeWidth={2}
                                className="relative z-10 transition-transform group-hover:rotate-12 group-hover:scale-110"
                            />
                            <span className="relative z-10">{faqData.banner.btn1.text}</span>
                        </motion.button>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
