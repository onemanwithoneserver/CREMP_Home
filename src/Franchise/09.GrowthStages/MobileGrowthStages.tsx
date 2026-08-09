import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "../../components/layout";
import { growthStagesData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 200, damping: 20 },
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
        opacity: [0.4, 0.7, 0.4],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
};

export default function MobileGrowthStages() {
    return (
        <section className="relative w-full overflow-hidden rounded-xl bg-white/40 py-12 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl border border-white/40 transition-colors duration-700 dark:bg-[#0b1b42]/60 dark:border-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <motion.div
                variants={pulseGlow}
                animate="animate"
                className="pointer-events-none absolute left-[-10%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[80px] dark:bg-[#D4AF37]/15"
            />

            <Container className="relative z-10">
                <div className="flex flex-col items-center gap-8 text-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex w-full flex-col items-center"
                    >
                        <motion.div variants={fadeInUp}>
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="mb-4 flex w-fit cursor-pointer items-center gap-2 rounded-[2px] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 shadow-sm backdrop-blur-xl dark:border-[#D4AF37]/30 dark:bg-[#D4AF37]/10">
                                <Sparkles size={14} className="text-[#D4AF37]" />
                                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37]">
                                    {growthStagesData.tag}
                                </span>
                            </motion.div>
                        </motion.div>

                        <motion.h2
                            variants={fadeInUp}
                            className="mb-4 text-[2.5rem] font-black leading-[1.1] tracking-tight sm:text-[3rem]"
                        >
                            <span className="block text-gray-900 dark:text-white">
                                {growthStagesData.titleBase}
                            </span>
                            <span className="block animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                                {growthStagesData.titleHighlight}
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="mb-8 px-2 text-[0.95rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400"
                        >
                            {growthStagesData.subtitle}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="grid w-full grid-cols-1 gap-6"
                    >
                        {growthStagesData.stages.map((stage) => {
                            const isGold = stage.color === "gold";
                            const isBlue = stage.color === "blue";

                            return (
                                <motion.div
                                    key={stage.id}
                                    variants={fadeInUp}
                                    className="flex flex-col items-start overflow-hidden rounded-xl border border-white/40 bg-white/30 p-6 shadow-[0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-md text-left dark:border-white/10 dark:bg-black/20"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.3 }}
                                        className={`mb-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-sm ${isGold
                                                ? "bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10"
                                                : isBlue
                                                    ? "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20"
                                                    : "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20"
                                            }`}
                                    >
                                        <stage.icon size={20} strokeWidth={2.5} />
                                    </motion.div>

                                    <h3 className="mb-2 text-xl font-black tracking-tight text-gray-900 dark:text-white">
                                        {stage.title}
                                    </h3>

                                    <h4 className="mb-4 text-[0.7rem] font-bold uppercase tracking-wider text-[#D4AF37]">
                                        {stage.subtitle}
                                    </h4>

                                    <p className="text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                                        {stage.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
