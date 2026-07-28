import { useState } from "react";
import { motion } from "framer-motion";
import { mediaGalleryData } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function MediaGalleryDesktop() {
  const [activeTab, setActiveTab] = useState(
    mediaGalleryData.tabs.find((t) => t.isDefault)?.id || mediaGalleryData.tabs[0].id
  );

  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-bold uppercase tracking-[3px] text-gray-500">
            {mediaGalleryData.sectionLabel}
          </p>
          <span className="text-accent text-xs font-semibold cursor-pointer hover:underline">
            {mediaGalleryData.allMediaLabel}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-6 overflow-x-auto">
          {mediaGalleryData.tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#D4AF37] text-[#0a1128]"
                    : "border border-gray-700 text-gray-400 hover:border-[#D4AF37]/50 hover:text-accent"
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </motion.button>
            );
          })}
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-5 gap-3"
        >
          {mediaGalleryData.items.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="relative group overflow-hidden rounded aspect-[4/3] cursor-pointer border border-gray-800 hover:border-[#D4AF37]/30 transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-xs font-semibold">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-gray-600 text-sm mt-3">{mediaGalleryData.sourceLabel}</p>
      </div>
    </section>
  );
}
