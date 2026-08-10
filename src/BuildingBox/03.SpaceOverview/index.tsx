import { motion, type Variants } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { spaceOverviewData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 500, damping: 30 } },
};

export default function SpaceOverview() {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="w-full relative z-10"
        >
            <motion.div
                variants={fadeInUp}
                className="w-full bg-white/90 dark:bg-[#0b1b42]/90 backdrop-blur-xl rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-gray-200/80 dark:border-white/10 overflow-hidden"
            >
                <div className="flex items-center gap-2.5 p-4 border-b border-gray-100 dark:border-white/5">
                    <div className="w-8 h-8 rounded-[4px] bg-[#0284c7] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#0284c7]/25">
                        <LayoutGrid size={15} fill="currentColor" />
                    </div>
                    <h2 className="text-[1rem] font-semibold text-[#0a1128] dark:text-white tracking-tight">{spaceOverviewData.title}</h2>
                </div>

                <div className="p-4 flex flex-col gap-5">
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
                                whileHover={{ scale: 1.05, y: -1 }}
                                className={`px-3 py-1.5 text-[0.65rem] font-bold rounded-[2px] border shadow-sm cursor-default tracking-wide uppercase transition-shadow hover:shadow-md ${tag.color}`}
                            >
                                {tag.text}
                            </motion.span>
                        ))}
                    </motion.div>

                    <div className="flex flex-col gap-0 border-t border-gray-100 dark:border-white/5 pt-1">
                        {spaceOverviewData.details.map((detail, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 2, backgroundColor: "rgba(212,175,55,0.03)" }}
                                className="flex items-center justify-between py-3.5 border-b border-gray-50 dark:border-white/[0.03] last:border-0 px-1 rounded-[2px] cursor-default group transition-colors"
                            >
                                <div className="flex items-center gap-2.5 text-gray-500 dark:text-gray-400">
                                    <detail.icon size={14} className="group-hover:text-[#d4af37] transition-colors duration-300" />
                                    <span className="text-[0.82rem] font-medium">{detail.label}</span>
                                </div>
                                <span className="text-[0.82rem] font-semibold text-[#0a1128] dark:text-gray-200">{detail.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
