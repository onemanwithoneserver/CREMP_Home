import { useState } from "react";
import { motion } from "framer-motion";
import { mediaGalleryData } from "./data";

export default function MediaGalleryMobile() {
  const [activeTab, setActiveTab] = useState(
    mediaGalleryData.tabs.find((t) => t.isDefault)?.id || mediaGalleryData.tabs[0].id
  );

  return (
    <section className="w-full bg-background px-4 py-8">
      <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
        <div className="flex items-center gap-1.5">
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
        </div>
        <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
          {mediaGalleryData.sectionLabel}
        </p>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
        </div>
      </div>
      <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-hide mb-3">
        {mediaGalleryData.tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-[4px] text-[10px] font-bold whitespace-nowrap shrink-0 transition-all shadow-sm ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-surface border border-border text-gray-600 dark:text-gray-400 hover:border-primary/50"
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
            className="shrink-0 w-[160px] aspect-[4/3] rounded-[4px] overflow-hidden border border-transparent shadow-sm relative hover-lift"
          >
            <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute bottom-2 left-3 text-white text-[10px] font-bold">{item.title}</span>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-600 text-[8px] mt-2">{mediaGalleryData.sourceLabel}</p>
    </section>
  );
}


