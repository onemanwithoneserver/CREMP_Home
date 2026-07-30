import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";
import { provenPlaybookData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ProvenPlaybookDesktop() {
    return (
        <section className="w-full bg-background px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    overline={provenPlaybookData.sectionLabel}
                    align="center"
                />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-4"
                >
                    {provenPlaybookData.cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                variants={fadeInUp}
                                className={clsx("rounded-lg border p-6 cursor-default transition-all duration-300 flex flex-col", getCardStyles(card.intent))}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div
                                        className={clsx("w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-xs", getIconContainerStyles(card.intent))}
                                    >
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-gray-900 dark:text-white font-bold text-lg">{card.title}</h4>
                                </div>
                                {card.description && (
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{card.description}</p>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

