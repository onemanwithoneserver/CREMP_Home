import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";
import { missionVisionData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

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
        <section className="w-full bg-[#FAFAFA] px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    overline={missionVisionData.sectionLabel}
                    align="center"
                />

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
                                className={clsx("rounded-2xl border p-8 cursor-default transition-all duration-300 flex flex-col", getCardStyles())}
                            >
                                <div className="flex items-center gap-6 mb-5">
                                    <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center shadow-xs", getIconContainerStyles('primary'))}>
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-sm font-semibold uppercase tracking-widest text-[#0a1128] dark:text-accent">
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

