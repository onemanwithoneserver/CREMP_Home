import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { mediaGalleryData, type MediaItem } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import {
  Play,
  FileText,
  Download,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Film,
  Smartphone,
  FileCheck2,
} from "lucide-react";
import clsx from "clsx";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function MediaGalleryMobile() {
  const filteredItems = mediaGalleryData.items;

  const images = filteredItems.filter((item) => item.format === "image");
  const videos = filteredItems.filter((item) => item.format === "video");
  const shortVideos = filteredItems.filter(
    (item) => item.format === "short_video",
  );
  const documents = filteredItems.filter((item) => item.format === "document");

  return (
    <section className="w-full px-4 py-8 relative overflow-hidden rounded-[8px] bg-gray-50 shadow-xl transition-colors duration-700 dark:bg-[#0a1128] dark:shadow-none">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute top-[5%] left-[-15%] w-[280px] h-[280px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[10%] right-[-15%] w-[300px] h-[300px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/10"
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5 items-center text-center">
          <SectionHeader
            overline={mediaGalleryData.sectionLabel}
            title="Experience the Brand"
            align="center"
          />
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
            Explore our curated gallery of outlets, signature products, videos,
            and reels.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {filteredItems.length === 0 && (
            <div className="text-center py-14 bg-gray-50 dark:bg-gray-800/40 rounded-[4px] border border-dashed border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center">
              <ImageIcon size={32} className="text-gray-400 opacity-40 mb-2" />
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                No media found for this category.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-3 px-3 py-1.5 bg-[#0a1128] dark:bg-[#d4af37] text-white dark:text-gray-950 text-xs font-bold rounded-[2px]"
              >
                View All Media
              </button>
            </div>
          )}

          {images.length > 0 && (
            <MobileMediaSwipeSection
              title="Photos & Outlets"
              icon={ImageIcon}
              iconBg="bg-amber-500"
              items={images}
              aspectRatio="aspect-[4/5]"
              cardWidth="w-[44vw] sm:w-[180px]"
            />
          )}

          {videos.length > 0 && (
            <MobileMediaSwipeSection
              title="Videos & Tours"
              icon={Film}
              iconBg="bg-rose-500"
              items={videos}
              aspectRatio="aspect-[16/10]"
              cardWidth="w-[54vw] sm:w-[220px]"
            />
          )}

          {shortVideos.length > 0 && (
            <MobileMediaSwipeSection
              title="Shorts & Reels"
              icon={Smartphone}
              iconBg="bg-violet-500"
              items={shortVideos}
              aspectRatio="aspect-[9/16]"
              cardWidth="w-[32vw] sm:w-[130px]"
            />
          )}

          {documents.length > 0 && (
            <div className="flex flex-col gap-2.5 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900 dark:text-white px-0.5">
                <div className="w-5 h-5 rounded-[2px] bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <FileCheck2 size={12} />
                </div>
                <span>Investor & Operation Documents</span>
              </div>
              <div className="flex flex-col gap-2">
                {documents.map((item) => (
                  <DocumentCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface MobileSwipeProps {
  title: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  iconBg: string;
  items: MediaItem[];
  aspectRatio: string;
  cardWidth: string;
}

function MobileMediaSwipeSection({
  title,
  icon: Icon,
  iconBg,
  items,
  aspectRatio,
  cardWidth,
}: MobileSwipeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(items.length > 1);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 6);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 6);
    }
  };

  useEffect(() => {
    checkScroll();
  }, [items]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.7;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <div className="flex items-center gap-2 text-xs font-bold text-gray-900 dark:text-white px-0.5">
        <div
          className={clsx(
            "w-5 h-5 rounded-[2px] flex items-center justify-center text-white shrink-0 shadow-xs",
            iconBg,
          )}
        >
          <Icon size={12} />
        </div>
        <span>{title}</span>
      </div>

      <div className="relative group">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-2.5 overflow-x-auto pb-1.5 pt-0.5 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={clsx(
                "relative shrink-0 snap-start overflow-hidden rounded-[4px] shadow-sm bg-gray-900 border border-gray-800/40 select-none",
                cardWidth,
                aspectRatio,
              )}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute inset-0 p-2.5 flex flex-col justify-end pointer-events-none">
                <span className="text-[#d4af37] text-[8px] font-bold uppercase tracking-wider mb-0.5 line-clamp-1 drop-shadow">
                  {item.category}
                </span>
                <h4 className="text-white font-semibold text-[11px] leading-tight line-clamp-2 drop-shadow-md">
                  {item.title}
                </h4>
              </div>

              {(item.format === "video" || item.format === "short_video") && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg">
                    <Play
                      size={13}
                      className="ml-0.5 text-[#d4af37]"
                      fill="currentColor"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            aria-label="Swipe Left"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-md active:scale-95"
          >
            <ChevronLeft size={15} />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            aria-label="Swipe Right"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-md active:scale-95"
          >
            <ChevronRight size={15} />
          </button>
        )}
      </div>
    </div>
  );
}

function DocumentCard({ item }: { item: MediaItem }) {
  return (
    <div className="relative overflow-hidden rounded-[4px] bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/80 p-2.5 flex items-center gap-2.5 shadow-sm active:scale-[0.99] transition-transform">
      <div className="w-8 h-8 rounded-[4px] bg-[#d4af37]/10 dark:bg-[#d4af37]/20 flex items-center justify-center border border-[#d4af37]/30 shrink-0">
        <FileText size={15} className="text-[#d4af37]" />
      </div>

      <div className="flex-1 flex flex-col justify-center min-w-0">
        <h4 className="font-semibold text-gray-900 dark:text-white text-xs leading-tight truncate">
          {item.title}
        </h4>
        <span className="text-gray-500 dark:text-gray-400 text-[9px] font-bold uppercase tracking-wider block mt-0.5 truncate">
          {item.category} • PDF
        </span>
      </div>

      <button
        aria-label="Download Document"
        className="w-7 h-7 rounded-[2px] bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shrink-0"
      >
        <Download size={13} />
      </button>
    </div>
  );
}
