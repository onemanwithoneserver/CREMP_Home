import { useState } from "react";
import { motion } from "framer-motion";
import { mediaGalleryData } from "./data";

export default function MediaGalleryMobile() {
  const [activeTab, setActiveTab] = useState(
    mediaGalleryData.tabs.find((t) => t.isDefault)?.id || mediaGalleryData.tabs[0].id
  );

  return (
    <section className="w-full bg-[#0a1128] px-4 py-6">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500">
          {mediaGalleryData.sectionLabel}
        </p>
        <span className="text-[#D4AF37] text-[10px] font-semibold">{mediaGalleryData.allMediaLabel}</span>
      </div>
      <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-hide mb-3">
        {mediaGalleryData.tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[9px] font-semibold whitespace-nowrap shrink-0 ${
                isActive
                  ? "bg-[#D4AF37] text-[#0a1128]"
                  : "border border-gray-700 text-gray-400"
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
            className="shrink-0 w-[140px] aspect-[4/3] rounded-lg overflow-hidden border border-gray-800 relative"
          >
            <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-1.5 left-2 text-white text-[8px] font-semibold">{item.title}</span>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-600 text-[8px] mt-2">{mediaGalleryData.sourceLabel}</p>
    </section>
  );
}
