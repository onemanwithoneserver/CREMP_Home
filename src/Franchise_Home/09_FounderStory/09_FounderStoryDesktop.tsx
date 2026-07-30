import clsx from "clsx";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { getTextStyles } from "../utils/theme";
import { founderStoryData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FounderStoryDesktop() {
    return (
        <section className="w-full bg-background px-6 py-12">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    overline={founderStoryData.sectionLabel}
                    align="center"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0a1128] border border-[#2a2d45] rounded-lg p-10 flex gap-10 shadow-elevation-3"
                >
                    <div className="flex-1">
                        <Quote size={40} strokeWidth={1.5} className="text-[#d4af37] mb-6" />
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                            "{founderStoryData.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                            <img
                                src={founderStoryData.founder.avatar}
                                alt={founderStoryData.founder.name}
                                className="w-14 h-14 rounded-full object-cover shadow-sm border border-border"
                            />
                            <div>
                                <p className="text-white font-bold text-base">
                                    {founderStoryData.founder.name}
                                </p>
                                <p className="text-gray-400 text-sm font-medium">
                                    {founderStoryData.founder.title}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[240px] grid grid-cols-1 gap-4">
                        {founderStoryData.stats.map((stat) => {
                            return (
                                <motion.div
                                    key={stat.label}
                                    className="bg-[#121c33] border border-white/10 rounded-lg p-4 text-center cursor-default transition-all duration-300 shadow-elevation-1 hover:-translate-y-1 hover:shadow-elevation-2 hover:border-[#d4af37]/30"
                                >
                                    <p className={clsx("text-3xl font-black mb-1", getTextStyles(stat.intent))}>
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

