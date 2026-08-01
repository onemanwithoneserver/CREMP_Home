import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { mediaGalleryData, type MediaItem } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { Play, FileText, Download, ImageIcon, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import clsx from "clsx";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24, staggerChildren: 0.1 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function MediaGalleryDesktop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredItems = mediaGalleryData.items.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const images = filteredItems.filter((item) => item.format === "image");
  const videos = filteredItems.filter((item) => item.format === "video");
  const shortVideos = filteredItems.filter((item) => item.format === "short_video");
  const documents = filteredItems.filter((item) => item.format === "document");

  return (
    <section className="w-full px-6 py-16 relative overflow-hidden bg-white dark:bg-gray-900 min-h-screen">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-[#d4af37]/5 dark:bg-[#d4af37]/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            overline={mediaGalleryData.sectionLabel}
            title="Experience the Brand"
            subtitle="Explore our gallery of outlets, products, and brand stories."
            align="left"
          />

          <div className="relative z-50 self-start md:self-auto" ref={filterRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="min-w-[240px] flex items-center justify-between px-5 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[4px] text-gray-900 dark:text-white font-semibold transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm"
            >
              <span>{activeCategory === "All" ? "Filter by Category" : activeCategory}</span>
              <ChevronDown size={20} className={clsx("transition-transform duration-300", isFilterOpen && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[4px] shadow-xl overflow-hidden z-50 max-h-[400px] overflow-y-auto scrollbar-hide"
                >
                  {mediaGalleryData.categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsFilterOpen(false);
                      }}
                      className={clsx(
                        "w-full text-left px-5 py-3 text-sm transition-colors",
                        activeCategory === cat
                          ? "bg-gray-100 dark:bg-gray-700 text-[#d4af37] font-bold"
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
        </div>

        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={sectionVariants}
              className="flex flex-col gap-4"
            >
              {filteredItems.length === 0 && (
                <div className="text-center py-32 text-gray-400 flex flex-col items-center">
                  <ImageIcon size={64} className="mb-4 opacity-20" />
                  <p className="text-lg">No media found for this category.</p>
                </div>
              )}

              {images.length > 0 && <CarouselSection items={images} cols={3} />}
              
              {videos.length > 0 && <CarouselSection items={videos} cols={3} />}
              
              {shortVideos.length > 0 && <CarouselSection items={shortVideos} cols={5} />}

              {documents.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
                  {documents.map((item) => (
                    <MediaCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CarouselSection({ items, cols }: { items: MediaItem[], cols: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [items]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const widthClass = cols === 5 ? "w-[calc((100%-80px)/5)]" : "w-[calc((100%-40px)/3)]";

  return (
    <div className="group/section relative w-full">
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-5 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
        {items.map((item) => (
          <MediaCard key={item.id} item={item} widthClass={widthClass} />
        ))}
      </div>

      <AnimatePresence>
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-[#d4af37] shadow-lg hover:scale-110 transition-all duration-300 opacity-0 group-hover/section:opacity-100"
          >
            <ChevronLeft size={24} />
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
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-[#d4af37] shadow-lg hover:scale-110 transition-all duration-300 opacity-0 group-hover/section:opacity-100"
          >
            <ChevronRight size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function MediaCard({ item, widthClass }: { item: MediaItem, widthClass?: string }) {
  if (item.format === "image" || item.format === "video" || item.format === "short_video") {
    const ratioClass = item.format === "short_video" ? "aspect-[9/16]" : "aspect-[4/3]";
    
    return (
      <motion.div
        variants={itemVariants}
        className={clsx(
          "relative group overflow-hidden rounded-[4px] shadow-md hover:shadow-2xl bg-gray-100 dark:bg-gray-800 shrink-0 snap-start cursor-pointer transition-all duration-500",
          widthClass,
          ratioClass
        )}
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/90 via-[#0a1128]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-2 drop-shadow-md">
            {item.category}
          </span>
          <h4 className="text-white font-bold text-xl drop-shadow-lg leading-tight">
            {item.title}
          </h4>
        </div>

        {(item.format === "video" || item.format === "short_video") && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#d4af37]/90 group-hover:border-[#d4af37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <Play size={28} className="ml-1" fill="currentColor" />
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-[4px] shadow-md hover:shadow-xl bg-white dark:bg-[#0a1128] border border-gray-200 dark:border-gray-700 p-5 flex items-center gap-5 cursor-pointer transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-[4px] bg-gray-50 dark:bg-gray-800/80 flex items-center justify-center shadow-inner shrink-0 group-hover:bg-[#d4af37]/10 border border-gray-100 dark:border-gray-700 transition-colors">
        <FileText size={24} className="text-[#d4af37]" />
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <h4 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-[#d4af37] transition-colors leading-tight">
          {item.title}
        </h4>
        <span className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-widest block mt-1 opacity-80">
          {item.category}
        </span>
      </div>

      <div className="w-10 h-10 rounded-[4px] bg-gray-50 dark:bg-gray-800 flex items-center justify-center shadow-sm border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 shrink-0 group-hover:text-[#d4af37] transition-colors">
        <Download size={18} />
      </div>
    </motion.div>
  );
}