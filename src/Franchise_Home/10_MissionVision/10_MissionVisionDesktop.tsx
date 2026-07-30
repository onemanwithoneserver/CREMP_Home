import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";
import { missionVisionData } from "./data";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function MissionVisionDesktop() {
    return (
        <section className="w-full bg-background px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full"
                >
                    <div className="flex items-center gap-1.5">
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                    </div>
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
                        {missionVisionData.sectionLabel}
                    </p>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-2 gap-6"
                >
                    {missionVisionData.cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.label}
                                variants={fadeInUp}
                                className={clsx("rounded-lg border p-8 cursor-default transition-all duration-300 flex flex-col", getCardStyles())}
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center shadow-xs", getIconContainerStyles('primary'))}>
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary dark:text-accent">
                                        {card.label}
                                    </span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

