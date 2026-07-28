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
    <section className="w-full bg-background px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary">
            {mediaGalleryData.sectionLabel}
          </p>
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
                className={`flex items-center gap-2 px-4 py-2 rounded-[4px] text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-surface border border-border text-gray-600 dark:text-gray-400 hover:border-primary/50 hover:text-primary dark:hover:text-accent hover:shadow"
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
              className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer shadow-sm hover-lift border border-transparent"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-sm font-bold">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-gray-600 text-sm mt-3">{mediaGalleryData.sourceLabel}</p>
      </div>
    </section>
  );
}
