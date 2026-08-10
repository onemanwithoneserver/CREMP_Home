import { motion, type Variants } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { spaceOverviewData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const tagStagger: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
};

const tagItem: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 8 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 500, damping: 30 } },
};

export default function SpaceOverview() {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="w-full relative z-10"
        >
            <motion.div
                variants={fadeInUp}
                className="w-full bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)] border border-gray-200/60 overflow-hidden"
            >
                {/* Section header */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-100/80">
                    <div className="w-9 h-9 rounded-xl bg-[#0284c7] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#0284c7]/20">
                        <LayoutGrid size={16} fill="currentColor" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-[1.05rem] font-bold text-[#0a1128] tracking-tight leading-tight">{spaceOverviewData.title}</h2>
                        <span className="text-[0.65rem] text-gray-400 font-medium">Specifications & Features</span>
                    </div>
                </div>

                <div className="p-4 flex flex-col gap-4">
                    {/* Tags */}
                    <motion.div
                        variants={tagStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                    >
                        {spaceOverviewData.tags.map((tag, idx) => (
                            <motion.span
                                key={idx}
                                variants={tagItem}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`px-3 py-1.5 text-[0.62rem] font-bold rounded-full border shadow-sm cursor-default tracking-wide uppercase transition-all duration-300 hover:shadow-md ${tag.color}`}
                            >
                                {tag.text}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Detail rows */}
                    <div className="flex flex-col gap-0 border-t border-gray-100/80 pt-1">
                        {spaceOverviewData.details.map((detail, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 3 }}
                                className="flex items-center justify-between py-3.5 border-b border-gray-50 last:border-0 px-1 rounded-lg cursor-default group transition-all duration-300 hover:bg-[#d4af37]/[0.03]"
                            >
                                <div className="flex items-center gap-3 text-gray-500">
                                    <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/20 transition-all duration-300">
                                        <detail.icon size={13} className="group-hover:text-[#d4af37] transition-colors duration-300" />
                                    </div>
                                    <span className="text-[0.82rem] font-medium">{detail.label}</span>
                                </div>
                                <span className="text-[0.82rem] font-semibold text-[#0a1128]">{detail.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
