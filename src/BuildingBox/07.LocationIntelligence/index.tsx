import { motion, type Variants } from "framer-motion";
import { Cpu, Lock, MapPin, Sparkles, Clock, ExternalLink } from "lucide-react";
import { locationIntelligenceData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const gridItem: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

export default function LocationIntelligence() {
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
                className="w-full bg-white overflow-hidden border-b border-gray-200/60 pb-6 relative"
            >
                {/* Header Section */}
                <div className="flex items-center justify-between p-4 pt-5 pb-4">
                    <div className="flex items-center gap-3">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="w-12 h-12 rounded-2xl bg-[#7c3aed] flex items-center justify-center text-white shrink-0 shadow-[0_8px_20px_rgba(124,58,237,0.25)]"
                        >
                            <Cpu size={24} strokeWidth={2.2} />
                        </motion.div>
                        <div className="flex flex-col gap-0.5">
                            <h2 className="text-[1.25rem] font-extrabold text-[#0a1128] tracking-tight leading-none">{locationIntelligenceData.title}</h2>
                            <span className="text-[0.75rem] text-[#7c3aed] font-bold tracking-wide mt-1">{locationIntelligenceData.subtitle}</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#7c3aed]/5 border border-[#7c3aed]/10 text-[#7c3aed] shadow-sm">
                        <Clock size={12} strokeWidth={2.5} />
                        <span className="text-[0.55rem] font-bold tracking-[0.1em] uppercase mt-[1px]">COMING SOON</span>
                    </div>
                </div>

                <div className="px-4 flex flex-col gap-4">
                    {/* Description Banner */}
                    <motion.div 
                        variants={fadeInUp}
                        className="w-full bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-4 flex items-center gap-4 relative overflow-hidden"
                    >
                        {/* Purple Left Border */}
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#7c3aed]" />
                        
                        <div className="w-10 h-10 rounded-full bg-[#7c3aed] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#7c3aed]/30 ml-0.5">
                            <Sparkles size={18} strokeWidth={2.5} />
                        </div>
                        <p className="text-[0.72rem] text-gray-700 font-medium leading-relaxed pr-2">
                            {locationIntelligenceData.description}
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-3"
                    >
                        {locationIntelligenceData.items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={gridItem}
                                whileHover={{ y: -2, scale: 1.02 }}
                                className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-[14px] p-2.5 flex flex-col gap-3 relative hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group cursor-default"
                            >
                                <div className="flex justify-between items-start">
                                    <div 
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        <item.icon size={20} strokeWidth={2.2} />
                                    </div>
                                    <Lock size={13} className="text-gray-300 group-hover:text-gray-400 transition-colors mt-0.5 mr-0.5" />
                                </div>
                                <div className="flex flex-col gap-1.5 mt-0.5">
                                    <span className="text-[0.62rem] font-extrabold text-gray-900 leading-[1.2] pr-1 tracking-tight">{item.label}</span>
                                    <div className="flex items-center gap-1.5">
                                        <motion.span
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                                            className="w-1.5 h-1.5 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <span className="text-[0.52rem] text-gray-500 font-bold uppercase tracking-wider">{item.status}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Footer Banner */}
                    <motion.div 
                        variants={fadeInUp}
                        className="w-full bg-[#faf5ff]/40 border border-[#7c3aed]/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-xl p-3 flex items-center justify-between relative overflow-hidden mt-2"
                    >
                        {/* Purple Left Border */}
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#7c3aed]" />
                        
                        <div className="flex items-center gap-3 ml-1.5">
                            <div className="w-9 h-9 rounded-[10px] bg-[#7c3aed] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#7c3aed]/20">
                                <MapPin size={16} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[0.75rem] font-bold text-gray-900 leading-none">{locationIntelligenceData.footer.title}</span>
                                <span className="text-[0.55rem] font-medium text-gray-500 leading-none mt-1 tracking-wide">{locationIntelligenceData.footer.subtitle}</span>
                            </div>
                        </div>

                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#7c3aed]/10 text-[#7c3aed] hover:bg-[#7c3aed]/20 transition-colors shadow-sm">
                            <span className="text-[0.55rem] font-bold tracking-wide">View on Map</span>
                            <ExternalLink size={11} strokeWidth={2.5} />
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
