import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { mediaGalleryData, type MediaItem } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import {
  Play,
  FileText,
  Download,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
  Film,
  Smartphone,
  FileCheck2,
  ChevronDown,
} from "lucide-react";
import clsx from "clsx";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const docsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

export default function MediaGalleryDesktop() {
  const filteredItems = mediaGalleryData.items;
  const [isDocsExpanded, setIsDocsExpanded] = useState(false);

  const images = filteredItems.filter((item) => item.format === "image");
  const videos = filteredItems.filter((item) => item.format === "video");
  const shortVideos = filteredItems.filter(
    (item) => item.format === "short_video",
  );
  const documents = filteredItems.filter((item) => item.format === "document");

  return (
    <section className="w-full px-6 py-16 relative overflow-hidden rounded-[8px] backdrop-blur-sm transition-colors duration-700 dark:bg-[#050b14]/40 dark:shadow-none min-h-screen ">
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex justify-center w-full">
          <SectionHeader
            overline={mediaGalleryData.sectionLabel}
            title="Experience the Brand"
            subtitle="Explore our gallery of outlets, products, and brand stories."
            align="center"
          />
        </div>

        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key="media-gallery-section"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={sectionVariants}
              className="flex flex-col gap-8"
            >
              {filteredItems.length === 0 && (
                <div className="text-center py-32 text-gray-400 flex flex-col items-center">
                  <ImageIcon size={64} className="mb-4 opacity-20" />
                  <p className="text-lg">No media found for this category.</p>
                </div>
              )}

              {images.length > 0 && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white">
                    <div className="w-5 h-5 rounded-[2px] bg-amber-500 flex items-center justify-center text-white shrink-0 shadow-xs">
                      <ImageIcon size={13} />
                    </div>
                    <span>Photos & Outlets</span>
                  </div>
                  <CarouselSection
                    items={images}
                    cols={4}
                    ratio="aspect-[4/5]"
                  />
                </div>
              )}

              {videos.length > 0 && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white">
                    <div className="w-5 h-5 rounded-[2px] bg-rose-500 flex items-center justify-center text-white shrink-0 shadow-xs">
                      <Film size={13} />
                    </div>
                    <span>Videos & Tours</span>
                  </div>
                  <CarouselSection
                    items={videos}
                    cols={3}
                    ratio="aspect-[16/10]"
                  />
                </div>
              )}

              {shortVideos.length > 0 && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white">
                    <div className="w-5 h-5 rounded-[2px] bg-violet-500 flex items-center justify-center text-white shrink-0 shadow-xs">
                      <Smartphone size={13} />
                    </div>
                    <span>Shorts & Reels</span>
                  </div>
                  <CarouselSection
                    items={shortVideos}
                    cols={5}
                    ratio="aspect-[9/16]"
                  />
                </div>
              )}

              {documents.length > 0 && (
                <div className="flex flex-col gap-4 pt-6 border-t border-gray-200/50 dark:border-white/5">
                  <motion.button 
                    onClick={() => setIsDocsExpanded(!isDocsExpanded)}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.995 }}
                    className="flex items-center justify-between w-full p-4 md:p-5 rounded-2xl bg-white/40 dark:bg-[#0b1b42]/30 backdrop-blur-xl border border-gray-200/60 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 group shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-lg overflow-hidden relative"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-center gap-4 text-base font-bold text-gray-900 dark:text-white relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 group-hover:scale-110 group-hover:-rotate-[10deg] transition-transform duration-500 shadow-sm">
                        <FileCheck2 size={22} strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">Investor & Operation Documents</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Download key materials and PDF resources</span>
                      </div>
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800/80 flex items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/5 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300 shadow-sm relative z-10">
                      <motion.div animate={{ rotate: isDocsExpanded ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
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
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <motion.div 
                          variants={docsContainerVariants}
                          initial="hidden"
                          animate="show"
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 pb-2"
                        >
                          {documents.map((item) => (
                            <MediaCard key={item.id} item={item} />
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CarouselSection({
  items,
  cols,
  ratio,
}: {
  items: MediaItem[];
  cols: number;
  ratio: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 6);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 6);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [items]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth * 0.75,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth * 0.75,
        behavior: "smooth",
      });
    }
  };

  const widthClass =
    cols === 5
      ? "w-[calc((100%-64px)/5)] min-w-[200px]"
      : cols === 4
        ? "w-[calc((100%-48px)/4)] min-w-[240px]"
        : "w-[calc((100%-32px)/3)] min-w-[320px]";

  return (
    <div className="group/section relative w-full">
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
        {items.map((item) => (
          <MediaCard
            key={item.id}
            item={item}
            widthClass={widthClass}
            ratioClass={ratio}
          />
        ))}
      </div>

      <AnimatePresence>
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            onClick={scrollLeft}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:text-[#d4af37] shadow-lg hover:scale-110 transition-all duration-300 opacity-0 group-hover/section:opacity-100"
          >
            <ChevronLeft size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {canScrollRight && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            onClick={scrollRight}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:text-[#d4af37] shadow-lg hover:scale-110 transition-all duration-300 opacity-0 group-hover/section:opacity-100"
          >
            <ChevronRight size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function MediaCard({
  item,
  widthClass,
  ratioClass,
}: {
  item: MediaItem;
  widthClass?: string;
  ratioClass?: string;
}) {
  if (
    item.format === "image" ||
    item.format === "video" ||
    item.format === "short_video"
  ) {
    const finalRatio =
      ratioClass ||
      (item.format === "short_video"
        ? "aspect-[9/16]"
        : item.format === "video"
          ? "aspect-[16/10]"
          : "aspect-[4/5]");

    return (
      <motion.div
        variants={itemVariants}
        className={clsx(
          "relative group overflow-hidden rounded-[4px] shadow-md hover:shadow-2xl bg-gray-100 dark:bg-gray-800 shrink-0 snap-start cursor-pointer transition-all duration-500",
          widthClass,
          finalRatio,
        )}
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/90 via-[#0a1128]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        <div className="absolute inset-0 p-5 flex flex-col justify-end transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mb-1.5 drop-shadow-md">
            {item.category}
          </span>
          <h4 className="text-white font-bold text-base drop-shadow-lg leading-snug">
            {item.title}
          </h4>
        </div>

        {(item.format === "video" || item.format === "short_video") && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg transition-all duration-500 group-hover:bg-[#d4af37]/90 group-hover:border-[#d4af37] pointer-events-auto">
              <Play size={20} className="ml-0.5" fill="currentColor" />
            </motion.div>
          </div>
        )}
      </motion.div>
    );
  }

  // Document Card Fallback (Redesigned)
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative overflow-hidden rounded-xl bg-white/50 dark:bg-[#0b1b42]/40 backdrop-blur-xl border border-gray-200/80 dark:border-white/5 p-4 flex items-center gap-4 shadow-[0_4px_15px_rgb(0,0,0,0.02)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] transition-all duration-300 group cursor-pointer"
    >
      {/* Subtle hover gradient sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="w-12 h-12 rounded-[10px] bg-white dark:bg-gray-800/80 flex items-center justify-center shadow-sm shrink-0 group-hover:bg-emerald-500/10 border border-gray-100 dark:border-gray-700/50 group-hover:border-emerald-500/30 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 relative z-10">
        <FileText size={24} className="text-gray-400 dark:text-gray-500 group-hover:text-emerald-500 transition-colors duration-300" />
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