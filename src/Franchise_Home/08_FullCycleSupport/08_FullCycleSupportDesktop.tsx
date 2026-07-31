import clsx from "clsx";
import { motion } from "framer-motion";
import { fullCycleSupportData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export default function FullCycleSupportDesktop() {
    return (
        <section className="w-full bg-[#FAFAFA] px-6 py-12">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    overline={fullCycleSupportData.sectionLabel}
                    title={fullCycleSupportData.title}
                    align="center"
                />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-5 gap-6"
                >
                    {fullCycleSupportData.supportItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className="bg-white dark:bg-white border border-gray-100 rounded-2xl p-5 text-center cursor-pointer group transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:border-gray-300 dark:hover:border-gray-600"
                            >
                                <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors", item.colorClass)}>
                                    <Icon size={20} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-[#0a1128] dark:text-white font-bold text-sm mb-2">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-xs leading-snug">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

