import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";
import { provenPlaybookData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function ProvenPlaybookMobile() {
    return (
        <section className="w-full bg-[#FAFAFA] px-4 py-8">
            <SectionHeader 
                overline={provenPlaybookData.sectionLabel}
                align="center"
            />

            <div className="space-y-3">
                {provenPlaybookData.cards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={clsx("rounded-2xl border p-5 cursor-default transition-all duration-300 flex flex-col", getCardStyles(card.intent))}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div
                                    className={clsx("w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-xs", getIconContainerStyles(card.intent))}
                                >
                                    <Icon size={18} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-[#0a1128] dark:text-white font-bold text-sm">{card.title}</h4>
                            </div>
                            {card.description && (
                                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{card.description}</p>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
