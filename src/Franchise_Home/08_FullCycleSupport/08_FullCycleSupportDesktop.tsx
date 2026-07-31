import clsx from "clsx";
import { motion } from "framer-motion";
import { fullCycleSupportData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FullCycleSupportDesktop() {
    return (
        <section className="w-full bg-[#FAFAFA] px-6 py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-8 flex items-center justify-center">
                <SectionHeader 
                    overline={fullCycleSupportData.sectionLabel}
                    title={fullCycleSupportData.title}
                    align="center"
                />
            </div>

            <div className="relative w-full">
                <motion.div 
                    className="flex w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                >
                    {[0, 1].map((keyPrefix) => (
                        <div key={keyPrefix} className="flex gap-6 pr-6">
                            {fullCycleSupportData.supportItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={`${keyPrefix}-${item.title}-${idx}`}
                                        className="w-[240px] shrink-0 bg-white dark:bg-white border border-gray-100 rounded-2xl p-6 text-center cursor-default group transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:border-gray-300 dark:hover:border-gray-600"
                                    >
                                        <div className={clsx("w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 transition-colors", item.colorClass)}>
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <h4 className="text-[#0a1128] dark:text-white font-extrabold text-[15px] mb-2">{item.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-snug">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </motion.div>
                
                {/* Gradient Fades for Smooth edges */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
