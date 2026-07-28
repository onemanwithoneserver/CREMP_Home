import { useState } from "react";
import { motion } from "framer-motion";
import { mediaGalleryData } from "./data";

export default function MediaGalleryMobile() {
  const [activeTab, setActiveTab] = useState(
    mediaGalleryData.tabs.find((t) => t.isDefault)?.id || mediaGalleryData.tabs[0].id
  );

  return (
    <section className="w-full bg-background px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary">
          {mediaGalleryData.sectionLabel}
        </p>
        <span className="text-primary dark:text-accent text-[10px] font-semibold cursor-pointer hover:underline">{mediaGalleryData.allMediaLabel}</span>
      </div>
      <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-hide mb-3">
        {mediaGalleryData.tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap shrink-0 transition-all shadow-sm ${
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
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="shrink-0 w-[160px] aspect-[4/3] rounded-lg overflow-hidden border border-transparent shadow-sm relative hover-lift"
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
