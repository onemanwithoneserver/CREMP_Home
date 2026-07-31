import clsx from "clsx";
import { motion } from "framer-motion";
import { fullCycleSupportData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FullCycleSupportMobile() {
    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-8 overflow-hidden">
            <div className="px-2 flex items-center justify-center">
                <SectionHeader 
                    overline={fullCycleSupportData.sectionLabel}
                    title={fullCycleSupportData.title}
                    align="center"
                />
            </div>

            <div className="relative w-full py-2">
                <motion.div 
                    className="flex w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                    {[0, 1].map((keyPrefix) => (
                        <div key={keyPrefix} className="flex gap-4 pr-4">
                            {fullCycleSupportData.supportItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={`${keyPrefix}-${item.title}-${idx}`}
                                        className="w-[160px] shrink-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 rounded-[4px] p-5 text-center flex flex-col items-center justify-center transition-transform shadow-sm"
                                    >
                                        <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm", item.colorClass)}>
                                            <Icon size={20} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="text-[#0a1128] dark:text-white font-semibold text-[14px] mb-1.5 whitespace-nowrap tracking-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-[12px] font-medium leading-snug line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </motion.div>
                
                <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
