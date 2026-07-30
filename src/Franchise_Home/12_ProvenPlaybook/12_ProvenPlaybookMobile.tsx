import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";
import { provenPlaybookData } from "./data";

export default function ProvenPlaybookMobile() {
    return (
        <section className="w-full bg-background px-4 py-8">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
                <div className="flex items-center gap-1.5">
                    <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                </div>
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
                    {provenPlaybookData.sectionLabel}
                </p>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                    <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                </div>
            </div>

            <div className="space-y-3">
                {provenPlaybookData.cards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={clsx("rounded-lg border p-5 cursor-default transition-all duration-300 flex flex-col", getCardStyles(card.intent))}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div
                                    className={clsx("w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-xs", getIconContainerStyles(card.intent))}
                                >
                                    <Icon size={18} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-gray-900 dark:text-white font-bold text-sm">{card.title}</h4>
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
