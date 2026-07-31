import { motion } from "framer-motion";
import { useState } from "react";
import { mediaGalleryData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { Play } from "lucide-react";

export default function MediaGalleryMobile() {
    const [activeTab, setActiveTab] = useState(
        mediaGalleryData.tabs.find((t) => t.isDefault)?.id || mediaGalleryData.tabs[0].id
    );

    const isVideoTab = activeTab.includes("video");

    return (
        <section className="w-full bg-[#FAFAFA] px-4 py-8">
            <SectionHeader 
                overline={mediaGalleryData.sectionLabel}
                align="center"
            />
            <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-hide mb-3">
                {mediaGalleryData.tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = tab.id === activeTab;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-[4px] text-xs font-semibold whitespace-nowrap shrink-0 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${isActive
                                    ? "bg-primary text-white"
                                    : "bg-white dark:bg-white border border-gray-100 text-gray-600 dark:text-gray-400 hover:border-primary/50"
                                }`}
                        >
                            <Icon size={10} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {mediaGalleryData.items.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className={`shrink-0 w-[140px] aspect-[9/16] rounded-[4px] overflow-hidden border border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]`}
                    >
                        <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70" />
                        
                        {isVideoTab && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                    <Play className="text-white ml-1 w-5 h-5" fill="currentColor" />
                                </div>
                            </div>
                        )}
                        <span className="absolute bottom-2 left-3 text-white text-xs font-semibold z-10">{item.title}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

