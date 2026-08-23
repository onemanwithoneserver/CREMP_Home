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
    scale: [1, 1.15, 1],
    opacity: [0.15, 0.25, 0.15],
    rotate: [0, 90, 0],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
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
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  },
};
const masonryHeights = [
  "h-[150px]",
  "h-[200px]",
  "h-[170px]",
  "h-[220px]",
  "h-[140px]",
  "h-[190px]",
];
export default function MediaGalleryMobile() {
  const filteredItems = mediaGalleryData.items;
  const galleryItems = filteredItems.filter(
    (item) => item.format !== "document",
  );
  const documents = filteredItems.filter((item) => item.format === "document");
  const [isDocsExpanded, setIsDocsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, galleryItems.length));
      setIsLoadingMore(false);
    }, 800);
  };
  const visibleGalleryItems = galleryItems.slice(0, visibleCount);
  const hasMore = visibleCount < galleryItems.length;
  return (
    <section className="w-full px-3 py-6 relative overflow-hidden rounded-[4px] bg-gray-50/50 dark:bg-[#060d20]">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <motion.div
          variants={pulseGlow}
          animate="animate"
          className="absolute top-[-10%] left-[-20%] w-[350px] h-[350px] rounded-full bg-[#D4AF37]/15 blur-[100px]"
        />
        <motion.div
          variants={pulseGlow}
          animate="animate"
          className="absolute bottom-[5%] right-[-15%] w-[250px] h-[250px] rounded-full bg-blue-500/10 blur-[80px] dark:bg-[#D4AF37]/10"
        />
      </div>
      <div className="relative z-10 flex flex-col gap-4 max-w-md mx-auto">
        <SectionHeader
          overline={mediaGalleryData.sectionLabel}
          title="Experience the Brand"
          align="center"
        />
        <div className="flex flex-col gap-3">
          {galleryItems.length === 0 ? (
            <div className="text-center py-10 bg-white/60 dark:bg-[#0b1b42]/40 backdrop-blur-xl rounded-[4px] border border-dashed border-gray-200/60 dark:border-white/10 p-4 flex flex-col items-center shadow-sm">
              <ImageIcon size={28} className="text-gray-400 opacity-40 mb-2" />
              <p className="text-[12px] font-medium text-gray-600 dark:text-gray-400">
                No media found for this category.
              </p>
            </div>
          ) : (
            <>
              <motion.div
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className="columns-2 gap-2 space-y-2"
              >
                <AnimatePresence>
                  {visibleGalleryItems.map((item, idx) => {
                    const heightClass =
                      masonryHeights[idx % masonryHeights.length];
                    const isVideo =
                      item.format === "video" || item.format === "short_video";
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        variants={fadeScaleUp}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, scale: 0.9 }}
                        className={clsx(
                          "relative break-inside-avoid rounded-[4px] overflow-hidden group shadow-[0_4px_15px_rgb(0,0,0,0.05)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.2)] bg-gray-900 border border-black/5 dark:border-white/10 cursor-pointer transform-gpu transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5",
                          heightClass,
                        )}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                        <div className="absolute inset-0 p-2 flex flex-col justify-end pointer-events-none translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-[#d4af37] text-[8px] font-black uppercase tracking-widest mb-0.5 drop-shadow-md line-clamp-1">
                            {item.category}
                          </span>
                          <h4 className="text-white font-bold text-[11px] leading-tight line-clamp-2 drop-shadow-md">
                            {item.title}
                          </h4>
                        </div>
                        {isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-xl group-hover:bg-[#d4af37]/90 group-hover:border-[#d4af37] transition-all duration-300 group-hover:scale-110">
                              <Play
                                size={14}
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
                    className="flex justify-center mt-1"
                  >
                    <button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="relative flex items-center justify-center w-32 h-9 rounded-[2px] bg-[#0a1128] border border-white/10 shadow-md overflow-hidden group active:scale-[0.98] transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      {isLoadingMore ? (
                        <>
                          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#0a1128_0%,#d4af37_50%,#0a1128_100%)] animate-spin" />
                          <div className="absolute inset-[1.5px] rounded-[1px] bg-[#0a1128] z-0" />
                          <Loader2
                            size={14}
                            className="text-[#d4af37] animate-spin relative z-10"
                          />
                        </>
                      ) : (
                        <span className="text-[11px] font-bold text-white uppercase tracking-wider relative z-10 group-hover:text-[#d4af37] transition-colors">
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
            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={() => setIsDocsExpanded(!isDocsExpanded)}
                className="flex items-center justify-between w-full bg-white/70 dark:bg-[#0b1b42]/50 backdrop-blur-xl border border-gray-200/60 dark:border-white/10 rounded-[4px] p-3 shadow-sm active:scale-[0.99] transition-all duration-300 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-300">
                    <FileCheck2 size={14} strokeWidth={2.5} />
                  </div>
                  <span className="text-[13px] font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Investor Documents
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isDocsExpanded ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ChevronDown
                    size={16}
                    className="text-gray-500 dark:text-gray-400 group-hover:text-emerald-500 transition-colors"
                  />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isDocsExpanded && (
                  <motion.div
                    key="docs-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-2 pb-1 pt-1">
                      {documents.map((item) => (
                        <DocumentCard key={item.id} item={item} />
                      ))}
                    </div>
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
      initial="hidden"
      animate="show"
      className="relative overflow-hidden rounded-[4px] bg-white/60 dark:bg-[#0b1b42]/40 backdrop-blur-xl border border-gray-200/60 dark:border-white/5 p-2.5 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center border border-emerald-100 dark:border-emerald-500/20 shrink-0 relative z-10 group-hover:-rotate-12 transition-transform duration-300">
        <FileText
          size={15}
          className="text-emerald-600 dark:text-emerald-400"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center min-w-0 relative z-10">
        <h4 className="font-bold text-gray-900 dark:text-white text-[12px] leading-tight truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {item.title}
        </h4>
        <span className="text-gray-500 dark:text-gray-400 text-[9px] font-bold uppercase tracking-wider block mt-0.5 truncate">
          {item.category} • PDF
        </span>
      </div>
      <button
        aria-label="Download Document"
        className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shrink-0 relative z-10 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:scale-110 transition-all active:scale-95"
      >
        <Download size={13} strokeWidth={2.5} />
      </button>
    </motion.div>
  );
}
