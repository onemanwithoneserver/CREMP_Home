import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Download, Play, Eye, Maximize } from "lucide-react";
import { mediaData } from "./data";
import { Container } from "../../components/layout";

export default function Media() {
    const [activeTab, setActiveTab] = useState(mediaData.tabs[0].label);

    return (
        <div className="w-full py-2 bg-transparent relative z-10">
            <Container>
                <div className="w-full bg-white dark:bg-[#11224d] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/10 overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white shrink-0">
                                <ImageIcon size={16} />
                            </div>
                            <h2 className="text-[1.05rem] font-medium text-gray-800 dark:text-gray-100">{mediaData.title}</h2>
                        </div>
                        <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors text-[0.8rem] font-medium">
                            <Download size={14} /> Brochure
                        </button>
                    </div>

                    <div className="flex w-full border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/20">
                        {mediaData.tabs.map((tab) => (
                            <button
                                key={tab.label}
                                onClick={() => setActiveTab(tab.label)}
                                className={`relative flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-colors ${
                                    activeTab === tab.label 
                                        ? "text-amber-600 dark:text-amber-500 bg-amber-50/50 dark:bg-amber-900/10" 
                                        : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                }`}
                            >
                                <tab.icon size={16} />
                                <span className="text-[0.7rem] font-medium whitespace-nowrap">{tab.label}</span>
                                <span className={`text-[0.65rem] ${activeTab === tab.label ? 'text-amber-500/70' : 'text-gray-300 dark:text-gray-600'}`}>{tab.count}</span>
                                {activeTab === tab.label && (
                                    <motion.div
                                        layoutId="mediaTabIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-4 flex flex-col">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="w-full"
                            >
                                {activeTab === "Video" && (
                                    <div className="flex flex-wrap gap-3">
                                        {mediaData.videos.map((video, idx) => (
                                            <div 
                                                key={idx} 
                                                className={`relative rounded-xl overflow-hidden group cursor-pointer ${video.fullWidth ? 'w-full h-44' : 'w-[calc(50%-0.375rem)] h-28'}`}
                                            >
                                                <img src={video.image} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                                
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-10 h-10 rounded-full border border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white/30 transition-all">
                                                        <Play size={16} fill="currentColor" className="ml-0.5" />
                                                    </div>
                                                </div>

                                                <div className="absolute bottom-2 left-2 right-2">
                                                    <span className="bg-black/60 backdrop-blur-md text-white text-[0.65rem] font-medium px-2 py-1 rounded truncate block w-fit max-w-full">
                                                        {video.title} · {video.duration}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "Floor Plan" && (
                                    <div className="flex flex-col gap-3">
                                        {mediaData.floorPlans.map((plan, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-black/10">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-500 flex items-center justify-center shrink-0">
                                                        <plan.icon size={18} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[0.9rem] font-medium text-gray-800 dark:text-gray-200">{plan.title}</span>
                                                        <span className="text-[0.7rem] text-gray-400">{plan.desc}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <button className="w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 flex items-center justify-center transition-colors">
                                                        <Eye size={16} />
                                                    </button>
                                                    <button className="w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 flex items-center justify-center transition-colors">
                                                        <Download size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "Virtual Tour" && (
                                    <div className="relative rounded-xl overflow-hidden w-full h-56 group">
                                        <img src={mediaData.virtualTour.image} alt="Virtual Tour" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-[#0a1128]/60 backdrop-blur-[2px]" />
                                        
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                                            <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white bg-white/5 backdrop-blur-md">
                                                <Maximize size={24} />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h3 className="text-white text-lg font-semibold">{mediaData.virtualTour.title}</h3>
                                                <p className="text-gray-300 text-xs">{mediaData.virtualTour.desc}</p>
                                            </div>
                                            <button className="mt-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-[#0a1128] font-semibold text-sm flex items-center gap-2 transition-colors">
                                                <mediaData.virtualTour.btnIcon size={16} className="-rotate-45" />
                                                {mediaData.virtualTour.btnText}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "Photos" && (
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {mediaData.photos.map((photo, idx) => (
                                            <div key={idx} className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer">
                                                <img src={photo.image} alt={photo.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                                                <div className="absolute bottom-2 left-2">
                                                    <span className="bg-black/40 backdrop-blur-md text-white text-[0.65rem] font-medium px-2 py-1 rounded">
                                                        {photo.label}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="relative rounded-xl overflow-hidden aspect-square bg-[#0a1128] border border-white/5 flex flex-col items-center justify-center cursor-pointer hover:bg-[#11224d] transition-colors">
                                            <span className="text-white text-xl font-light">+9</span>
                                            <span className="text-gray-400 text-[0.7rem]">more</span>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </div>
    );
}
