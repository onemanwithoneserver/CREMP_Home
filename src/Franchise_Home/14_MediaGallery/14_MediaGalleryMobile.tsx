import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { mediaGalleryData, type MediaItem } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { Play, FileText, Download, ChevronDown, Plus } from "lucide-react";
import clsx from "clsx";

const sectionVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24, staggerChildren: 0.05 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function MediaGalleryMobile() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const filteredItems = mediaGalleryData.items.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const visualMedia = filteredItems.filter((item) => item.format !== "document");
  const documents = filteredItems.filter((item) => item.format === "document");
  const visibleVisualMedia = visualMedia.slice(0, visibleCount);
  const hasMoreVisuals = visualMedia.length > visibleCount;

  return (
    <section className="w-full px-4 py-8 relative overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-[-20%] w-[300px] h-[300px] bg-[#d4af37]/5 dark:bg-[#d4af37]/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-5">
        <SectionHeader
          overline={mediaGalleryData.sectionLabel}
          title="Experience the Brand"
          subtitle="Explore our gallery of outlets, products, and brand stories."
          align="left"
        />

        <div className="relative z-50">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[4px] text-gray-900 dark:text-white font-semibold text-sm shadow-sm active:scale-[0.99] transition-transform"
          >
            <span>{activeCategory === "All" ? "Filter by Category" : activeCategory}</span>
            <ChevronDown size={18} className={clsx("transition-transform duration-300", isFilterOpen && "rotate-180")} />
          </button>
          
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[4px] shadow-xl overflow-hidden z-50 max-h-[300px] overflow-y-auto scrollbar-hide"
              >
                {mediaGalleryData.categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsFilterOpen(false);
                    }}
                    className={clsx(
                      "w-full text-left px-4 py-3 text-sm transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0",
                      activeCategory === cat
                        ? "bg-gray-50 dark:bg-gray-750 text-[#d4af37] font-bold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={sectionVariants}
            className="flex flex-col gap-6"
          >
            {filteredItems.length === 0 && (
              <div className="text-center py-16 text-gray-400 text-sm">No media found.</div>
            )}

            {visibleVisualMedia.length > 0 && (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  {visibleVisualMedia.map((item, index) => {
                    const isFullWidth = index % 3 === 0;
                    return (
                      <div key={item.id} className={isFullWidth ? "col-span-2" : "col-span-1"}>
                        <MediaCard item={item} isFullWidth={isFullWidth} />
                      </div>
                    );
                  })}
                </div>
                
                {hasMoreVisuals && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="w-1/2 flex items-center justify-center gap-2 py-3 mt-2 bg-gradient-to-r from-[#d4af37]/10 to-transparent dark:from-[#d4af37]/20 border border-[#d4af37]/30 text-[#d4af37] rounded-[4px] font-bold text-sm shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300"
                  >
                    <Plus size={16} className="text-[#d4af37] animate-pulse" />
                    <span>Load More</span>
                  </motion.button>
                )}
              </div>
            )}

            {documents.length > 0 && (
              <div className="flex flex-col gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white px-1">
                  Documents
                </h3>
                {documents.map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function MediaCard({ item, isFullWidth }: { item: MediaItem; isFullWidth?: boolean }) {
  if (item.format === "image" || item.format === "video" || item.format === "short_video") {
    return (
      <motion.div
        variants={itemVariants}
        className={clsx(
          "relative group overflow-hidden rounded-[4px] shadow-sm bg-gray-900 w-full block",
          isFullWidth ? "aspect-[16/9]" : "aspect-[4/5]"
        )}
      >
        <img
          src={item.src}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
        
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mb-1 drop-shadow-md line-clamp-1">
            {item.category}
          </span>
          <h4 className="text-white font-semibold text-sm leading-snug drop-shadow-lg line-clamp-2">
            {item.title}
          </h4>
        </div>

        {(item.format === "video" || item.format === "short_video") && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-lg">
              <Play size={20} className="ml-1" fill="currentColor" />
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-[4px] shadow-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 flex items-center gap-3 active:scale-[0.98] transition-transform"
    >
      <div className="w-10 h-10 rounded-[4px] bg-gray-50 dark:bg-gray-900 flex items-center justify-center border border-gray-100 dark:border-gray-700 shrink-0">
        <FileText size={18} className="text-[#d4af37]" />
      </div>
      
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <h4 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight truncate">
          {item.title}
        </h4>
        <span className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-widest block mt-0.5 truncate">
          {item.category}
        </span>
      </div>

      <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 shrink-0">
        <Download size={14} />
      </div>
    </motion.div>
  );
}