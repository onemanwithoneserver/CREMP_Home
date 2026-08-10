import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Image as ImageIcon, Download, Play, Eye, Maximize } from "lucide-react";
import { mediaData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const gridItem: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

export default function Media() {
    const [activeTab, setActiveTab] = useState(mediaData.tabs[0].label);

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
                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-[4px] bg-[#d97706] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#d97706]/25">
                            <ImageIcon size={15} />
                        </div>
                        <h2 className="text-[1rem] font-semibold text-[#0a1128] dark:text-white tracking-tight">{mediaData.title}</h2>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1.5 text-gray-500 hover:text-[#d4af37] dark:text-gray-400 dark:hover:text-[#d4af37] transition-colors text-[0.75rem] font-semibold px-2.5 py-1.5 rounded-[2px] border border-gray-200 dark:border-white/10 hover:border-[#d4af37]/30 bg-gray-50/50 dark:bg-white/5"
                    >
                        <Download size={13} /> Brochure
                    </motion.button>
                </div>

                <div className="flex w-full border-b border-gray-100 dark:border-white/5 bg-gray-50/80 dark:bg-[#0e172f]/60 backdrop-blur-sm p-1.5 gap-1">
                    {mediaData.tabs.map((tab) => (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={`relative flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 transition-all duration-300 rounded-[2px] z-10 ${
                                activeTab === tab.label
                                    ? "text-white"
                                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5"
                            }`}
                        >
                            {activeTab === tab.label && (
                                <motion.div
                                    layoutId="mediaTabActive"
                                    className="absolute inset-0 bg-gradient-to-r from-[#16254c] to-[#0a1128] dark:from-[#d4af37] dark:to-[#aa8922] rounded-[2px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                                    transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.8 }}
                                >
                                    <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />
                                </motion.div>
                            )}
                            <tab.icon size={14} className="relative z-10" />
                            <span className="text-[0.62rem] font-bold whitespace-nowrap relative z-10 tracking-wide">{tab.label}</span>
                            <span className={`text-[0.55rem] font-semibold relative z-10 ${activeTab === tab.label ? 'opacity-70' : 'text-gray-300 dark:text-gray-600'}`}>{tab.count}</span>
                        </button>
                    ))}
                </div>

                <div className="p-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full"
                        >
                            {activeTab === "Video" && (
                                <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-wrap gap-2.5">
                                    {mediaData.videos.map((video, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={gridItem}
                                            whileHover={{ scale: 1.02 }}
                                            className={`relative rounded-[4px] overflow-hidden group cursor-pointer ${video.fullWidth ? 'w-full h-44' : 'w-[calc(50%-0.3125rem)] h-28'}`}
                                        >
                                            <img src={video.image} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div
                                                    whileHover={{ scale: 1.15 }}
                                                    className="w-10 h-10 rounded-full border border-white/30 bg-white/15 backdrop-blur-xl flex items-center justify-center text-white group-hover:bg-[#d4af37]/25 group-hover:border-[#d4af37]/50 transition-all duration-500 shadow-lg"
                                                >
                                                    <Play size={15} fill="currentColor" className="ml-0.5" />
                                                </motion.div>
                                            </div>
                                            <div className="absolute bottom-2 left-2 right-2">
                                                <span className="bg-[#0a1128]/80 backdrop-blur-xl text-white text-[0.6rem] font-semibold px-2.5 py-1 rounded-[2px] truncate block w-fit max-w-full border border-white/10">
                                                    {video.title} · {video.duration}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === "Floor Plan" && (
                                <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col gap-2.5">
                                    {mediaData.floorPlans.map((plan, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={gridItem}
                                            whileHover={{ x: 2 }}
                                            className="flex items-center justify-between p-3.5 rounded-[4px] border border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-black/10 backdrop-blur-sm group cursor-default hover:border-[#d4af37]/20 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-[4px] bg-[#7c3aed]/10 dark:bg-[#7c3aed]/20 text-[#7c3aed] flex items-center justify-center shrink-0 border border-[#7c3aed]/20 group-hover:bg-[#7c3aed]/20 transition-colors">
                                                    <plan.icon size={17} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[0.85rem] font-semibold text-[#0a1128] dark:text-gray-200">{plan.title}</span>
                                                    <span className="text-[0.68rem] text-gray-400 font-medium">{plan.desc}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-8 h-8 rounded-[4px] bg-gray-100 hover:bg-[#d4af37]/10 dark:bg-white/5 dark:hover:bg-[#d4af37]/10 text-gray-500 hover:text-[#d4af37] flex items-center justify-center transition-all border border-transparent hover:border-[#d4af37]/20">
                                                    <Eye size={15} />
                                                </motion.button>
                                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-8 h-8 rounded-[4px] bg-gray-100 hover:bg-[#d4af37]/10 dark:bg-white/5 dark:hover:bg-[#d4af37]/10 text-gray-500 hover:text-[#d4af37] flex items-center justify-center transition-all border border-transparent hover:border-[#d4af37]/20">
                                                    <Download size={15} />
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === "Virtual Tour" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative rounded-[4px] overflow-hidden w-full h-56 group"
                                >
                                    <img src={mediaData.virtualTour.image} alt="Virtual Tour" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-[#0a1128]/65 backdrop-blur-[2px]" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                                        <motion.div
                                            animate={{ scale: [1, 1.08, 1] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-14 h-14 rounded-full border-2 border-[#d4af37]/40 flex items-center justify-center text-white bg-[#d4af37]/10 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                                        >
                                            <Maximize size={22} />
                                        </motion.div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-white text-lg font-semibold tracking-tight">{mediaData.virtualTour.title}</h3>
                                            <p className="text-gray-300 text-xs font-medium">{mediaData.virtualTour.desc}</p>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="mt-2 px-5 py-2.5 rounded-[4px] bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] hover:from-[#d4af37] hover:via-[#bf953f] hover:to-[#a67c00] text-white font-bold text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#f9df9f]/50"
                                        >
                                            <mediaData.virtualTour.btnIcon size={15} className="-rotate-45" />
                                            {mediaData.virtualTour.btnText}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "Photos" && (
                                <motion.div variants={staggerContainer} initial="hidden" animate="show" className="grid grid-cols-3 gap-2">
                                    {mediaData.photos.map((photo, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={gridItem}
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            className="relative rounded-[4px] overflow-hidden aspect-square group cursor-pointer"
                                        >
                                            <img src={photo.image} alt={photo.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                                            <div className="absolute bottom-1.5 left-1.5">
                                                <span className="bg-[#0a1128]/80 backdrop-blur-xl text-white text-[0.55rem] font-semibold px-2 py-0.5 rounded-[2px] border border-white/10">
                                                    {photo.label}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        variants={gridItem}
                                        whileHover={{ scale: 1.03 }}
                                        className="relative rounded-[4px] overflow-hidden aspect-square bg-[#0a1128] border border-[#d4af37]/20 flex flex-col items-center justify-center cursor-pointer hover:bg-[#0b1b42] transition-all group"
                                    >
                                        <motion.span
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="text-[#d4af37] text-xl font-bold"
                                        >+9</motion.span>
                                        <span className="text-gray-400 text-[0.65rem] font-medium">more</span>
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
}
