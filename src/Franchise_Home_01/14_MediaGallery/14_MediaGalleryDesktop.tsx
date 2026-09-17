import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";
import { mediaGalleryData, type MediaItem } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import {
  Play,
  FileText,
  Download,
  ImageIcon,
  FileCheck2,
  ChevronDown,
  Loader2,
} from "lucide-react";
import clsx from "clsx";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const fadeScaleUp = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  },
};

const docsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const masonryHeights = [
  "h-[200px]",
  "h-[300px]",
  "h-[250px]",
  "h-[350px]",
  "h-[220px]",
  "h-[280px]",
];

export default function MediaGalleryDesktop() {
  const filteredItems = mediaGalleryData.items;
  const galleryItems = filteredItems.filter((item) => item.format !== "document");
  const documents = filteredItems.filter((item) => item.format === "document");
  
  const [isDocsExpanded, setIsDocsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 8, galleryItems.length));
      setIsLoadingMore(false);
    }, 800);
  };

  const visibleGalleryItems = galleryItems.slice(0, visibleCount);
  const hasMore = visibleCount < galleryItems.length;

  return (
    <section className="w-full px-6 py-16 relative overflow-hidden rounded-[8px] backdrop-blur-sm transition-colors duration-700 dark:bg-[#050b14]/40 dark:shadow-none min-h-screen">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/10"
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex justify-center w-full">
          <SectionHeader
            overline={mediaGalleryData.sectionLabel}
            title="Experience the Brand"
            subtitle="Explore our gallery of outlets, products, and brand stories."
            align="center"
          />
        </div>
        
        <div className="flex flex-col gap-8">
          {galleryItems.length === 0 ? (
            <div className="text-center py-32 bg-white/60 dark:bg-[#0b1b42]/40 backdrop-blur-xl rounded-[4px] border border-dashed border-gray-200/60 dark:border-white/10 p-8 flex flex-col items-center shadow-sm">
              <ImageIcon size={48} className="text-gray-400 opacity-40 mb-4" />
              <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                No media found for this category.
              </p>
            </div>
          ) : (
            <>
              <motion.div
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className="columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-2 space-y-2"
              >
                <AnimatePresence>
                  {visibleGalleryItems.map((item, idx) => {
                    const heightClass = masonryHeights[idx % masonryHeights.length];
                    const isVideo = item.format === "video" || item.format === "short_video";
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        variants={fadeScaleUp}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, scale: 0.9 }}
                        className={clsx(
                          "relative break-inside-avoid rounded-[4px] overflow-hidden group shadow-md hover:shadow-2xl bg-gray-900 border border-black/5 dark:border-white/10 cursor-pointer transform-gpu transition-all duration-500",
                          heightClass
                        )}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className="absolute inset-0 p-5 flex flex-col justify-end pointer-events-none transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-widest mb-1 drop-shadow-md">
                            {item.category}
                          </span>
                          <h4 className="text-white font-bold text-base leading-snug drop-shadow-lg">
                            {item.title}
                          </h4>
                        </div>
                        {isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-xl group-hover:bg-[#d4af37]/90 group-hover:border-[#d4af37] transition-all duration-500 group-hover:scale-110">
                              <Play
                                size={20}
                                className="ml-0.5 text-white"
                                fill="currentColor"
                              />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
              
              <AnimatePresence>
                {hasMore && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex justify-center mt-6"
                  >
                    <button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="relative flex items-center justify-center w-40 h-12 rounded-[4px] bg-[#0a1128] border border-white/10 shadow-md overflow-hidden group active:scale-[0.98] transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      {isLoadingMore ? (
                        <>
                          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#0a1128_0%,#d4af37_50%,#0a1128_100%)] animate-spin" />
                          <div className="absolute inset-[2px] rounded-[2px] bg-[#0a1128] z-0" />
                          <Loader2
                            size={18}
                            className="text-[#d4af37] animate-spin relative z-10"
                          />
                        </>
                      ) : (
                        <span className="text-sm font-bold text-white uppercase tracking-wider relative z-10 group-hover:text-[#d4af37] transition-colors">
                          Load More
                        </span>
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

          {documents.length > 0 && (
            <div className="flex flex-col gap-4 pt-8 border-t border-gray-200/50 dark:border-white/5 mt-4">
              <motion.button
                onClick={() => setIsDocsExpanded(!isDocsExpanded)}
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
                className="flex items-center justify-between w-full p-4 md:p-5 rounded-2xl bg-white/40 dark:bg-[#0b1b42]/30 backdrop-blur-xl border border-gray-200/60 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 group shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-lg overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-4 text-base font-bold text-gray-900 dark:text-white relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 group-hover:scale-110 group-hover:-rotate-[10deg] transition-transform duration-500 shadow-sm">
                    <FileCheck2 size={22} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      Investor & Operation Documents
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Download key materials and PDF resources
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800/80 flex items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/5 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300 shadow-sm relative z-10">
                  <motion.div
                    animate={{ rotate: isDocsExpanded ? 180 : 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </motion.div>
                </div>
              </motion.button>
              <AnimatePresence initial={false}>
                {isDocsExpanded && (
                  <motion.div
                    key="docs-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      variants={docsContainerVariants}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 pb-2"
                    >
                      {documents.map((item) => (
                        <DocumentCard key={item.id} item={item} />
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function DocumentCard({ item }: { item: MediaItem }) {
  return (
    <motion.div
      variants={fadeScaleUp}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative overflow-hidden rounded-xl bg-white/50 dark:bg-[#0b1b42]/40 backdrop-blur-xl border border-gray-200/80 dark:border-white/5 p-4 flex items-center gap-4 shadow-[0_4px_15px_rgb(0,0,0,0.02)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] transition-all duration-300 group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-12 h-12 rounded-[10px] bg-white dark:bg-gray-800/80 flex items-center justify-center shadow-sm shrink-0 group-hover:bg-emerald-500/10 border border-gray-100 dark:border-gray-700/50 group-hover:border-emerald-500/30 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 relative z-10">
        <FileText
          size={24}
          className="text-gray-400 dark:text-gray-500 group-hover:text-emerald-500 transition-colors duration-300"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center min-w-0 relative z-10">
        <h4 className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 leading-tight truncate">
          {item.title}
        </h4>
        <span className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-widest block mt-1 opacity-80 truncate">
          {item.category} • PDF
        </span>
      </div>
      <button className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300 relative z-10 active:scale-95 hover:shadow-lg">
        <Download size={18} strokeWidth={2.5} />
      </button>
    </motion.div>
  );
}
