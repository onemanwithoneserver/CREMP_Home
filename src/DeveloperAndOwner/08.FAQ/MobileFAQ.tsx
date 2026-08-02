import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqData } from "./data";

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

export default function MobileFAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const Btn1Icon = faqData.banner.btn1.icon;
    const Btn2Icon = faqData.banner.btn2.icon;

    return (
        <div className="relative w-full overflow-hidden bg-gray-50 px-4 py-16 transition-colors duration-700 dark:bg-[#0b1b42]">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="relative z-10 flex flex-col"
            >
                <div className="mb-10 text-center">
                    <motion.div variants={fadeInUp} className="mb-4">
                        <span className="inline-flex rounded-[8px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
                            {faqData.tag}
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={fadeInUp}
                        className="mb-4 text-[2.2rem] font-black leading-[1.1] text-gray-900 dark:text-white"
                    >
                        <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                            {faqData.title}
                        </span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400"
                    >
                        {faqData.desc}
                    </motion.p>
                </div>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col border-t border-gray-200 dark:border-gray-800 mb-12"
                >
                    {faqData.faqs.map((faq, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                            <div
                                key={idx}
                                className="border-b border-gray-200 dark:border-gray-800"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                                    className="group flex w-full items-center justify-between py-5 text-left"
                                >
                                    <h4
                                        className={`text-[0.95rem] font-bold pr-4 transition-colors ${isOpen ? "text-[#D4AF37] dark:text-[#D4AF37]" : "text-gray-900 dark:text-gray-300"}`}
                                    >
                                        {faq.q}
                                    </h4>
                                    <div
                                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all ${isOpen ? "bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] text-white dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:text-gray-900" : "bg-gray-100 text-gray-400 dark:bg-gray-800"}`}
                                    >
                                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-5 pr-8 text-[0.85rem] leading-relaxed text-gray-600 dark:text-gray-400">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col items-center justify-center gap-6 rounded-[8px] bg-[#0b1b42] p-8 text-center shadow-xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                    <div className="absolute -top-[20%] -left-[20%] h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] blur-[80px] pointer-events-none opacity-40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"></div>

                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
                        <faqData.banner.icon size={26} className="text-[#D4AF37]" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="whitespace-pre-line text-[1.5rem] font-black leading-tight text-white mb-3">
                            {faqData.banner.title}
                        </h3>
                        <p className="text-[0.85rem] text-gray-400 leading-relaxed">
                            {faqData.banner.desc}
                        </p>
                    </div>

                    <div className="relative z-10 flex w-full flex-col gap-3">
                        <button className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#D4AF37] to-[#b38728] py-3.5 text-[0.9rem] font-bold text-white shadow-lg dark:from-[#D4AF37] dark:to-[#b38728] dark:text-[#0a1128]">
                            <Btn1Icon size={16} />
                            {faqData.banner.btn1.text}
                        </button>
                        <button className="flex w-full items-center justify-center gap-2 rounded-[8px] border border-white/20 bg-white/5 py-3.5 text-[0.9rem] font-bold text-white backdrop-blur-md">
                            <Btn2Icon size={16} />
                            {faqData.banner.btn2.text}
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
