import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Play, Video, Eye, Clock, Loader2, Filter } from "lucide-react";
import { sampleVideos, videoCategories } from "./data";
import { CustomSelect } from "../components/ui/CustomSelect";
import OpenVideo from "./Open video";
import clsx from "clsx";
import SearchImage from "./ExploreHero.jpg";

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
];
const ITEMS_PER_PAGE = 20;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

const getCategoryColor = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes("franchise")) return "bg-rose-600/90 border-rose-400/30 text-white";
  if (cat.includes("invest")) return "bg-emerald-600/90 border-emerald-400/30 text-white";
  if (cat.includes("fractional")) return "bg-purple-600/90 border-purple-400/30 text-white";
  if (cat.includes("pre-leased") || cat.includes("commercial")) return "bg-blue-600/90 border-blue-400/30 text-white";
  if (cat.includes("running")) return "bg-amber-600/90 border-amber-400/30 text-white";
  if (cat.includes("distribution")) return "bg-cyan-600/90 border-cyan-400/30 text-white";
  if (cat.includes("land") || cat.includes("plot")) return "bg-teal-600/90 border-teal-400/30 text-white";
  if (cat.includes("movable") || cat.includes("asset")) return "bg-orange-600/90 border-orange-400/30 text-white";
  return "bg-indigo-600/90 border-indigo-400/30 text-white";
};

function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: "radial-gradient(circle, rgba(212,175,55,0.35), transparent)",
      }}
      animate={{
        y: [0, -12, 0],
        opacity: [0.15, 0.5, 0.15],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 4.5 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

interface VideoSearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  activeCategory: string;
  setActiveCategory: (val: string) => void;
  setVisibleCount: (val: number | ((prev: number) => number)) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  isSearchFocused: boolean;
  setIsSearchFocused: (val: boolean) => void;
}

const VideoSearchHeader = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  setVisibleCount,
  sortBy,
  setSortBy,
  isSearchFocused,
  setIsSearchFocused
}: VideoSearchHeaderProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.boundingClientRect.top <= 56);
      },
      { threshold: [1], rootMargin: "-57px 0px 0px 0px" }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="w-full h-[1px] -mt-[1px]" />

      <div
        className={clsx(
          "sticky top-[56px] z-30 w-full flex flex-col transition-colors duration-300",
          isSticky ? "bg-[#0a1128]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)]" : "bg-transparent"
        )}
      >
        <div
          className={clsx(
            "w-full px-4 flex justify-center transition-all duration-300",
            isSticky ? "pt-2 pb-2 sm:py-2.5" : "pt-1 pb-1.5 sm:py-2"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative w-full max-w-[340px] z-50"
          >
            <div
              className={clsx(
                "absolute -inset-[1.5px] rounded transition-opacity duration-500",
                isSearchFocused ? "opacity-100" : "opacity-0",
              )}
              style={{ background: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)" }}
            />
            <div className="relative w-full bg-white rounded flex items-center p-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(ITEMS_PER_PAGE);
                }}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search videos..."
                className="flex-1 bg-transparent border-none outline-none text-[11.5px] sm:text-[12.5px] font-medium text-[#0a1128] placeholder-[#0b1b42]/35 py-1.5 sm:py-1.5 pl-2.5"
              />
              <div
                className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded text-white"
                style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
              >
                <Search className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
            </div>
          </motion.div>
        </div>

      <div className="w-full overflow-x-auto scrollbar-hide px-3 py-2 sm:py-2.5 flex items-center gap-2 border-b border-[#0b1b42]/[0.06] bg-white/95 backdrop-blur-md">
        <div className="flex items-center gap-1.5 mr-1 text-[#0b1b42]/40 shrink-0">
          <Filter size={12} />
          <span className="text-[8px] uppercase tracking-widest font-bold">
            Filter:
          </span>
        </div>

        {videoCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              className={`shrink-0 relative px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-[4px] text-[10px] sm:text-[11px] font-semibold tracking-normal transition-all border flex flex-col items-center justify-center ${
                isActive
                  ? "bg-white dark:bg-[#0b1b42] text-[#b38728] dark:text-[#d4af37] border-[#d4af37] shadow-[0_2px_8px_rgba(212,175,55,0.2)]"
                  : "bg-white dark:bg-[#0b1b42] text-[#0b1b42]/70 dark:text-gray-300 border-gray-200 dark:border-white/10"
              }`}
            >
              <span>{cat}</span>
              {isActive && (
                <span className="absolute bottom-0.5 inset-x-0 mx-auto w-4 h-[2px] rounded-full bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] shadow-[0_0_4px_rgba(212,175,55,0.6)]" />
              )}
            </button>
          );
        })}

        <div className="w-px h-4 bg-[#0b1b42]/10 mx-0.5 shrink-0" />

        <div className="shrink-0">
          <CustomSelect
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
            label="Sort:"
            className="min-w-[100px] sm:min-w-[120px]"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default function ExploreMobile() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [sortBy, setSortBy] = useState("latest");
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredVideos = sampleVideos.filter((v) => {
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || v.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  const sortedVideos = [...filteredVideos].sort((a, b) => {

    if (sortBy === "oldest") {
      return a.id.localeCompare(b.id);
    }
    return b.id.localeCompare(a.id);
  });
  const displayedItems = useMemo(() => {
    if (sortedVideos.length === 0) return [];
    const items = [];
    let videoIndex = 0;

    for (let i = 0; i < visibleCount; i++) {
      if (i > 0 && i % 10 === 0) {
        items.push({
          isAd: true,
          uniqueId: `ad-${i}`,
        });
      } else {
        const vid = sortedVideos[videoIndex % sortedVideos.length];
        items.push({ ...vid, uniqueId: `vid-${vid.id}-${i}`, isAd: false });
        videoIndex++;
      }
    }
    return items;
  }, [sortedVideos, visibleCount]);

  const hasMore = sortedVideos.length > 0;

  const handleLoadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
      setIsLoadingMore(false);
    }, 600);
  }, [isLoadingMore, hasMore]);

  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          handleLoadMore();
        }
      },
      { threshold: 0.1, rootMargin: "400px" }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, handleLoadMore, isLoadingMore]);

  useEffect(() => {
      const handleScroll = () => {
        const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 500;
      if (isAtBottom && !isLoadingMore && hasMore) {
        handleLoadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, handleLoadMore, isLoadingMore]);

  return (
    <div
      className="w-full min-h-screen text-[#0a1128] bg-[#f8f9fc] font-sans flex flex-col relative"
    >
      <div
        className="absolute top-0 left-0 w-full h-[500px] overflow-hidden pointer-events-none z-0"
        style={{ background: "linear-gradient(135deg, #0a1128 0%, #0b1b42 35%, #132254 65%, #0d1a3a 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="video-hero-grid-m" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#video-hero-grid-m)" />
          </svg>
        </div>

        <div
          className="absolute inset-0 w-full h-[70%] z-0"
          style={{
            maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
          }}
        >
          <img src={SearchImage} alt="Explore hero" className="w-full h-full object-cover object-center opacity-40" />
        </div>

        <FloatingParticle delay={0} x="8%" y="25%" size={4} />
        <FloatingParticle delay={1} x="80%" y="35%" size={3} />
        <FloatingParticle delay={0.5} x="45%" y="70%" size={4} />
      </div>

      <div className="relative z-10 px-4 pt-6 pb-2 sm:pt-7 sm:pb-4 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white font-extrabold text-[19px] sm:text-[22px] leading-[1.12] tracking-[-0.02em] mb-1.5 sm:mb-2"
        >
          India's 1st Integrated Commercial Real Estate Marketplace
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[#d4af37] text-[9px] sm:text-[10px] font-bold mb-1 tracking-widest"
        >
          EXPLORE. DISCOVER. CONNECT.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/60 text-[11px] sm:text-[12px] font-medium"
        >
          Commercial Properties · Business Opportunities · Expert Brokers
        </motion.p>
      </div>

      <VideoSearchHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setVisibleCount={setVisibleCount}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isSearchFocused={isSearchFocused}
        setIsSearchFocused={setIsSearchFocused}
      />

      <div className="relative z-20 w-full flex-1 bg-[#f8f9fc] pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory + searchQuery}
          className="grid grid-cols-2 gap-2"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => {
              if (item.isAd) {
                const spanClass = "col-span-2 min-h-[180px]";
                return (
                  <motion.div
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    key={item.uniqueId}
                    className={`relative flex flex-col items-center justify-center h-full bg-gradient-to-br from-white to-[#fdfbf6] border border-gray-200/80 rounded-[6px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.06)] active:scale-[0.98] transition-all duration-300 ${spanClass}`}
                  >
                    <div className="absolute top-2 left-2 bg-[#f3cd52]/20 border border-[#d4af37]/40 text-[#b38728] text-[7px] font-extrabold uppercase tracking-widest px-1.5 py-[2px] rounded-[2px] shadow-sm z-10">
                      Ad
                    </div>
                    <div className="relative z-10 flex flex-col items-center p-3 text-center w-full mt-1">
                      <h3 className="text-sm font-extrabold text-[#0a1128]/50 tracking-tight">
                        Advertisement Text
                      </h3>
                    </div>
                  </motion.div>
                );
              }
              const video = item as any;
              return (
                <motion.div
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                key={video.uniqueId}
                onClick={() => setSelectedVideoId(video.id)}
                className="group relative flex flex-col aspect-[9/16] bg-[#0a1128] border border-gray-200/80 dark:border-white/10 rounded-[6px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.4)] active:scale-[0.98] active:border-white/60 transition-all duration-300"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-active:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/75 via-45% to-transparent opacity-90 transition-opacity duration-500 pointer-events-none" />

                {activeCategory === "All" && (
                  <div className="absolute top-2 left-2 z-20">
                    <span className={clsx(
                      "flex items-center gap-0.5 rounded-[2px] border px-1.5 py-[2px] text-[7px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md",
                      getCategoryColor(video.category)
                    )}>
                      {video.category}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/50 group-active:bg-white group-active:text-[#0a1128] group-active:border-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.4)] text-white group-active:scale-90 transition-all duration-300">
                    <Play
                      size={14}
                      className="ml-0.5"
                      fill="currentColor"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-2.5 flex flex-col justify-end z-20">

                  <h3 className="text-[11.5px] font-bold text-white leading-tight mb-2 line-clamp-2 drop-shadow-lg">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between gap-1">
                  </div>
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div ref={observerTarget} className="flex justify-center pt-6 pb-4 w-full">
            {isLoadingMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2.5 px-5 py-2 bg-[#0b1b42]/80 backdrop-blur-md rounded-full border border-[#d4af37]/30 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              >
                <Loader2 size={16} className="animate-spin text-[#d4af37]" />
                <span className="text-[#d4af37] text-xs font-bold tracking-wide">Loading...</span>
              </motion.div>
            )}
          </div>
        )}

        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl border border-dashed border-gray-200/80 dark:border-[#d4af37]/20 rounded-[6px] mt-4 px-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#0b1b42]/10 dark:bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-3 border border-[#d4af37]/20">
              <Video size={24} className="text-[#0b1b42] dark:text-[#d4af37]" />
            </div>
            <h3 className="text-sm font-bold text-gray-800 dark:text-white">
              No videos found
            </h3>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
              Try adjusting your search or category filters.
            </p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-4 py-1.5 rounded-[4px] bg-[#0b1b42] text-white text-[11px] font-bold border border-[#d4af37]/30"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>

      {selectedVideoId && (
        <OpenVideo
          initialVideoId={selectedVideoId}
          onClose={() => setSelectedVideoId(null)}
          isMobile={true}
        />
      )}
    </div>
  );
}
