import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";
import { missionVisionData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function MissionVisionMobile() {
    return (
        <section className="w-full bg-[#FAFAFA] px-4 py-8">
            <SectionHeader 
                overline={missionVisionData.sectionLabel}
                align="center"
            />

            <div className="space-y-3">
                {missionVisionData.cards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={clsx("rounded-[4px] border p-6 cursor-default transition-all duration-300", getCardStyles())}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center shadow-xs", getIconContainerStyles('primary'))}>
                                    <Icon size={16} strokeWidth={1.5} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#0a1128] dark:text-accent">
                                    {card.label}
                                </span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-[13px] leading-relaxed">{card.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

