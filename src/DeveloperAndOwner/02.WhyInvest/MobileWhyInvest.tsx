import { motion, type Variants } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { whyInvestData } from "./data";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 30 },
    },
};

export default function MobileWhyInvest() {
    return (
        <div className="relative w-full overflow-hidden bg-gray-50 px-4 py-16 transition-colors duration-700 dark:bg-[#0b1b42]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-50px" }}
                className="relative z-10 flex flex-col gap-4"
            >
                <div className="mb-4 flex flex-col items-center text-center">
                    <motion.div variants={fadeInUp} className="mb-4">
                        <span className="inline-flex items-center gap-2 rounded-[8px] bg-[#D4AF37]/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
                            {whyInvestData.tag}
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-[2.2rem] font-black leading-[1.1] text-gray-900 dark:text-white"
                    >
                        Why Investing Needs More Than a <br />
                        <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                            {whyInvestData.titleHighlight}
                        </span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={fadeInUp}
                    className="rounded-[8px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#121c33]"
                >
                    <h3 className="mb-6 text-xl font-black text-gray-900 dark:text-white">
                        {whyInvestData.subtitle}
                    </h3>
                    <div className="flex flex-col gap-3">
                        {whyInvestData.issues.map((issue, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 rounded-[8px] border border-gray-100 bg-gray-50/50 p-3 dark:border-gray-800/50 dark:bg-gray-800/20 transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-white border border-gray-100 text-[#D4AF37] shadow-sm dark:bg-[#0b1b42] dark:border-gray-700 dark:text-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50">
                                    <issue.icon size={18} />
                                </div>
                                <span className="text-[0.8rem] font-medium leading-tight text-gray-600 dark:text-gray-400">
                                    {issue.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-[0.95rem] font-bold text-gray-900 dark:text-white text-center">
                            CREMP brings{" "}
                            <span className="text-[#D4AF37] dark:text-[#D4AF37]">
                                {whyInvestData.conclusion}
                            </span>
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="rounded-[8px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#121c33]"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] text-white shadow-lg shadow-[#D4AF37]/30 dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:text-[#0a1128] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95">
                            <Globe size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-black text-gray-900 dark:text-white leading-tight">
                                Connected Ecosystem
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {whyInvestData.flowItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center gap-2 rounded-[8px] border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-[#0b1b42] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
                            >
                                <item.icon
                                    size={20}
                                    className="text-[#D4AF37] dark:text-[#D4AF37]"
                                />
                                <span className="text-center text-[0.65rem] font-bold text-gray-700 dark:text-gray-300">
                                    {item.text.replace("\n", " ")}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="rounded-[8px] bg-gradient-to-br from-[#D4AF37] to-[#b38728] p-8 shadow-xl dark:from-[#121c33] dark:to-[#0a1128] dark:border dark:border-gray-800 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                            <div className="text-2xl font-black text-white">100+</div>
                        </div>
                        <h3 className="text-lg font-black text-white">
                            Discover verified franchise and retail opportunities instantly.
                        </h3>
                        <button className="flex items-center justify-center gap-2 w-full rounded-[8px] bg-white py-3.5 text-[0.85rem] font-bold text-[#D4AF37] dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:text-[#0a1128] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95">
                            Explore Now <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
