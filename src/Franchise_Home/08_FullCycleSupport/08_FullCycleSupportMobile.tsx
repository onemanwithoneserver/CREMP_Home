import clsx from "clsx";
import { motion } from "framer-motion";
import { fullCycleSupportData } from "./data";

export default function FullCycleSupportMobile() {
    return (
        <section className="w-full bg-background px-4 py-8">
            <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
                    <div className="flex items-center gap-1.5">
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                    </div>
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
                        {fullCycleSupportData.sectionLabel}
                    </p>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                    </div>
                </div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">{fullCycleSupportData.title}</h2>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
                {fullCycleSupportData.supportItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.04 }}
                            className="bg-white dark:bg-surface border border-border rounded-lg p-4 text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-300 shadow-elevation-1 hover:-translate-y-1 hover:shadow-elevation-2 hover:border-gray-300 dark:hover:border-gray-600"
                        >
                            <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3", item.colorClass)}>
                                <Icon size={16} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-gray-900 dark:text-white font-bold text-[11px] mb-1.5">{item.title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-[9px] leading-snug">{item.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

