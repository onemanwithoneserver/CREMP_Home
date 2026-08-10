import { motion, type Variants } from "framer-motion";
import { Activity } from "lucide-react";
import { infrastructureData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const rowReveal: Variants = {
    hidden: { opacity: 0, x: -15 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const getStatusStyle = (status: string) => {
    const s = status.toUpperCase();
    if (["INSTALLED", "CONNECTED", "COMPLIANT", "WIRED", "WITHIN UNIT", "YES"].includes(s))
        return "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/60";
    if (["PROVISION"].includes(s))
        return "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800/60";
    return "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-800/60";
};

export default function Infrastructure() {
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
                    <div className="w-8 h-8 rounded-[4px] bg-[#ea580c] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#ea580c]/25">
                        <Activity size={15} />
                    </div>
                    <h2 className="text-[1rem] font-semibold text-[#0a1128] dark:text-white tracking-tight">{infrastructureData.title}</h2>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col gap-0 px-4"
                >
                    {infrastructureData.items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={rowReveal}
                            whileHover={{ x: 3 }}
                            className="flex items-center justify-between py-3.5 border-b border-gray-50 dark:border-white/[0.03] last:border-0 group cursor-default rounded-[2px] px-1 hover:bg-[#d4af37]/[0.02] transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-[4px] ${item.iconBg} flex items-center justify-center text-white shrink-0 shadow-md`}>
                                    <item.icon size={14} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[0.82rem] font-semibold text-[#0a1128] dark:text-gray-200">{item.label}</span>
                                    <span className="text-[0.68rem] text-gray-400 font-medium">{item.sub}</span>
                                </div>
                            </div>
                            <span className={`text-[0.6rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-[2px] border shadow-sm ${getStatusStyle(item.status)}`}>
                                {item.status}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
