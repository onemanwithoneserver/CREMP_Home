import { motion } from "framer-motion";
import { useState } from "react";
import { mediaGalleryData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { Play } from "lucide-react";

import cafeInterior from "../../assets/cafe_interior.png";
import topDownCups from "../../assets/top_down_cups.png";
import coffeeBeans from "../../assets/coffee_beans.png";
import coffeeEquipment from "../../assets/coffee_equipment.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function MediaGalleryDesktop() {
  const [activeTab, setActiveTab] = useState(
    mediaGalleryData.tabs.find((t) => t.isDefault)?.id ||
      mediaGalleryData.tabs[0].id,
  );

  const isVideoTab = activeTab.includes("video");

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          overline={mediaGalleryData.sectionLabel}
          align="center"
        />
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
                className={`flex items-center gap-2 px-4 py-2 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-all shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-white border border-gray-100 text-gray-600 dark:text-gray-400 hover:border-primary/50 hover:text-[#0a1128] dark:hover:text-accent hover:shadow"
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
          {mediaGalleryData.items.slice(0, 4).map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className={`relative group overflow-hidden rounded-2xl aspect-[9/16] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:border-[#d4af37]/50 border border-transparent`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              {isVideoTab && (
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Play
                      className="text-white ml-1 w-6 h-6"
                      fill="currentColor"
                    />
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                <span className="text-white text-sm font-semibold">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 grid-rows-2 gap-3 aspect-[9/16]"
          >
            {[cafeInterior, topDownCups, coffeeBeans, coffeeEquipment].map(
              (src, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-lg transition-all"
                >
                  <img
                    src={src}
                    alt={`Uploaded Asset ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
