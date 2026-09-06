import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Search, Play, Filter, Video, Loader2, ChevronRight, X } from "lucide-react";
import { sampleVideos, videoCategories } from "./data";
import { CustomSelect } from "../components/ui/CustomSelect";
import OpenVideo from "./Open video";
import clsx from "clsx";
import SearchImage from "./ExploreHero.jpg";

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
];
const ITEMS_PER_PAGE = 50;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
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
        y: [0, -18, 0],
        opacity: [0.15, 0.5, 0.15],
        scale: [1, 1.4, 1],
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

interface ExploreSearchBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  isSearchFocused: boolean;
  setIsSearchFocused: (val: boolean) => void;
  setVisibleCount: (val: number | ((prev: number) => number)) => void;
  className?: string;
}

const ExploreSearchBar = ({
  searchQuery,
  setSearchQuery,
  isSearchFocused,
  setIsSearchFocused,
  setVisibleCount,
  className = "",
}: ExploreSearchBarProps) => {
  return (
    <div className={clsx("relative w-full z-50", className)}>
      <div
        className={clsx(
          "absolute -inset-[1.5px] rounded transition-opacity duration-500",
          isSearchFocused ? "opacity-100" : "opacity-0",
        )}
        style={{ background: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)" }}
      />
      <div className="relative w-full bg-white rounded flex items-center p-1 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
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
          className="flex-1 bg-transparent border-none outline-none text-[13px] lg:text-[14px] font-medium text-[#0a1128] placeholder-[#0b1b42]/40 py-2 px-3.5"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            onMouseDown={(e) => e.preventDefault()}
            className="shrink-0 p-1 mr-1 text-[#0b1b42]/40 hover:text-[#0b1b42] active:scale-95 transition-all rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
        <div
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded text-white shadow-sm"
          style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
        >
          <Search className="h-3.5 w-3.5" />
        </div>
      </div>

      <AnimatePresence>
        {isSearchFocused && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-b-xl shadow-[0_16px_36px_-5px_rgba(11,27,66,0.2)] overflow-hidden z-[100] border border-gray-100"
          >
            <div className="flex flex-col bg-white py-1.5">
              {(() => {
                const allowedTopics = ["Commercial Properties", "Hire a Broker", "Business Opportunities"];
                const relatedVideos = sampleVideos.filter((v) =>
                  allowedTopics.some((topic) => v.title.toLowerCase().includes(topic.toLowerCase()))
                );
                const filtered = relatedVideos.filter((v) =>
                  v.title.toLowerCase().includes(searchQuery.toLowerCase())
                ).slice(0, 6);

                if (filtered.length === 0) {
                  return (
                    <div className="px-4 py-3 text-[12.5px] font-medium text-[#0b1b42]/40 text-center">
                      No matching videos
                    </div>
                  );
                }

                return filtered.map((video) => (
                  <button
                    key={video.id}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#f8f9fa] active:bg-[#f1f5f9] transition-colors cursor-pointer"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setSearchQuery(video.title);
                      setIsSearchFocused(false);
                      setVisibleCount(ITEMS_PER_PAGE);
                    }}
                  >
                    <span className="text-[13px] font-semibold text-[#0a1128]/90 truncate block">
                      {video.title}
                    </span>
                  </button>
                ));
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface CategoryFilterBarProps {
  activeCategory: string;
  setActiveCategory: (val: string) => void;
  setVisibleCount: (val: number | ((prev: number) => number)) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const CategoryFilterBar = ({
  activeCategory,
  setActiveCategory,
  setVisibleCount,
  sortBy,
  setSortBy,
  searchQuery,
  setSearchQuery,
}: CategoryFilterBarProps) => {
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
          "sticky top-[56px] w-full flex items-center transition-all duration-300 ",
          isSticky
            ? "z-30 bg-white/95 backdrop-blur-md shadow-md py-2 px-4 lg:px-8"
            : "z-10 bg-white py-2.5 px-4 lg:px-8"
        )}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
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
                  className={`shrink-0 relative px-3.5 py-1.5 rounded-[4px] text-[11px] font-semibold tracking-normal transition-all border flex flex-col items-center justify-center cursor-pointer ${
                    isActive
                      ? "bg-white text-[#b38728] border-[#d4af37] shadow-[0_2px_8px_rgba(212,175,55,0.2)]"
                      : "bg-white text-[#0b1b42]/70 border-gray-200 hover:border-[#d4af37]/50 hover:text-[#0b1b42]"
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <span className="absolute bottom-0.5 inset-x-0 mx-auto w-4 h-[2px] rounded-full bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] shadow-[0_0_4px_rgba(212,175,55,0.6)]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {isSticky && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "240px" }}
                exit={{ opacity: 0, width: 0 }}
                className="hidden lg:block relative"
              >
                <div className="relative w-full bg-gray-50 border border-gray-200 rounded flex items-center px-2.5 py-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(ITEMS_PER_PAGE);
                    }}
                    placeholder="Search videos..."
                    className="flex-1 bg-transparent border-none outline-none text-[12px] font-medium text-[#0a1128] placeholder-[#0b1b42]/40"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="text-gray-400 hover:text-gray-600 mr-1.5 cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  )}
                  <Search size={12} className="text-gray-400" />
                </div>
              </motion.div>
            )}

            <div className="w-px h-4 bg-[#0b1b42]/10" />

            <CustomSelect
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              label="Sort:"
              className="min-w-[110px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default function ExploreDesktop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [sortBy, setSortBy] = useState("latest");
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const filteredVideos = sampleVideos.filter((v) => {
    const matchesSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase());
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
      if (i === 5 || (i > 5 && (i - 5) % 15 === 0)) {
        let adType = "normal";
        if (i === 5 || (i - 5) % 45 === 0) adType = "long-strip";
        else if ((i - 5) % 30 === 0) adType = "tall";

        items.push({
          isAd: true,
          adType,
          uniqueId: `ad-${i}`,
          span: (i % 3) + 2,
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

  return (
    <section className="w-full min-h-screen font-sans bg-[#f8f9fc]">
      <div
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative w-full z-40"
        style={{ background: "linear-gradient(135deg, #0a1128 0%, #0b1b42 35%, #132254 65%, #0d1a3a 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              background: useTransform(
                [spotlightX, spotlightY],
                ([x, y]) => `radial-gradient(450px circle at ${x}px ${y}px, rgba(212,175,55,0.18), transparent 60%)`
              ),
            }}
          />

          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="video-hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#video-hero-grid)" />
            </svg>
          </div>

          <div
            className="absolute inset-y-0 right-0 w-[42%] z-0 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 20%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%)",
            }}
          >
            <img src={SearchImage} alt="Explore hero" className="w-full h-full object-cover object-left opacity-90" />
          </div>

          <FloatingParticle delay={0} x="10%" y="20%" size={6} />
          <FloatingParticle delay={1.2} x="75%" y="30%" size={4} />
          <FloatingParticle delay={0.6} x="50%" y="65%" size={5} />
          <FloatingParticle delay={2} x="25%" y="75%" size={3} />
          <FloatingParticle delay={1.5} x="65%" y="15%" size={5} />
        </div>

        <div className="relative z-30 w-full max-w-7xl mx-auto px-8 pt-10 pb-10 flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-extrabold text-[42px] leading-[1.08] tracking-[-0.02em] mb-3 max-w-[800px]"
          >
            India's 1st Integrated Commercial Real Estate Marketplace
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#d4af37] text-[16px] font-bold mb-1 tracking-widest"
          >
            EXPLORE. DISCOVER. CONNECT.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-[15px] font-medium max-w-lg"
          >
            Commercial Properties · Business Opportunities · Expert Brokers
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-full max-w-[540px] mt-6 relative z-50"
          >
            <ExploreSearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              isSearchFocused={isSearchFocused}
              setIsSearchFocused={setIsSearchFocused}
              setVisibleCount={setVisibleCount}
            />
          </motion.div>
        </div>
      </div>

      <CategoryFilterBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setVisibleCount={setVisibleCount}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-4 pt-2 pb-16 flex flex-col gap-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory + searchQuery}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => {
              if (item.isAd) {
                if (item.adType === "long-strip") {
                  return (
                    <motion.div
                      layout
                      variants={cardVariants}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      key={item.uniqueId}
                      className="group relative flex flex-col md:flex-row col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,17,40,0.25)]"
                      style={{ background: "linear-gradient(135deg, #0a1128 0%, #0b1b42 50%, #132254 100%)" }}
                    >
                      {/* Left: Video Thumbnail */}
                      <div className="relative w-full md:w-[52%] aspect-video shrink-0 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                          alt="Sponsored Content"
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        {/* Cinematic gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a1128]/90 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/60 via-transparent to-transparent pointer-events-none" />

                        {/* Sponsored badge on video */}
                        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-[#d4af37] text-[#0a1128] text-[9px] font-extrabold uppercase tracking-[0.12em] px-2.5 py-1 rounded-[4px] shadow-[0_2px_12px_rgba(212,175,55,0.5)]">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                          Sponsored
                        </div>

                        {/* Centered play button */}
                        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="w-16 h-16 rounded-full flex items-center justify-center pointer-events-auto transition-all duration-500 opacity-80 group-hover:opacity-100"
                            style={{
                              background: "radial-gradient(circle, rgba(212,175,55,0.95) 0%, rgba(179,135,40,0.9) 100%)",
                              boxShadow: "0 0 0 4px rgba(212,175,55,0.25), 0 8px 32px rgba(0,0,0,0.5)",
                            }}
                          >
                            <Play size={24} className="ml-1 text-[#0a1128]" fill="currentColor" />
                          </motion.div>
                        </div>

                        {/* Duration badge */}
                        <div className="absolute bottom-3 right-3 z-20 bg-black/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded-[4px] tracking-wide">
                          32:45
                        </div>

                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-20">
                          <div className="h-full w-[35%] rounded-r-full" style={{ background: "linear-gradient(90deg, #d4af37, #f3cd52)" }} />
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="w-full md:w-[48%] p-6 lg:p-8 flex flex-col justify-center relative">
                        {/* Subtle decorative glow */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-[0.07] pointer-events-none" style={{ background: "radial-gradient(circle, #d4af37, transparent 70%)" }} />



                        {/* Title */}
                        <h2 className="text-[20px] lg:text-[24px] font-bold text-white leading-[1.25] group-hover:text-[#d4af37] transition-colors duration-300 line-clamp-3">
                          How to Build a Personal Brand That Attracts Clients
                        </h2>


                      </div>
                    </motion.div>
                  );
                }

                let spanClass = "";
                if (item.adType === "tall") {
                  spanClass = "col-span-2 md:col-span-3";
                } else {
                  spanClass = "col-span-2";
                }

                return (
                  <motion.div
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    key={item.uniqueId}
                    className={`group relative flex flex-col items-center justify-center bg-[#0a1128] border border-gray-200/80 rounded-[8px] overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-white/60 transition-all duration-500 cursor-pointer ${spanClass} h-full w-full min-h-[350px]`}
                  >
                    <div className="absolute top-3 left-3 bg-black/80 border border-white/20 text-white text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-[3px] shadow-sm z-20 backdrop-blur-md">
                      Sponsored
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                      alt="Sponsored Video"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none" />
                    
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center justify-center w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/50 group-hover:bg-white group-hover:border-white group-hover:text-[#0a1128] shadow-[0_8px_30px_rgba(0,0,0,0.5)] text-white transition-all duration-300 pointer-events-auto"
                      >
                        <Play size={22} className="ml-1" fill="currentColor" />
                      </motion.div>
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
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                key={video.uniqueId}
                onClick={() => setSelectedVideoId(video.id)}
                className="group relative flex flex-col aspect-[9/16] bg-[#0a1128] border border-gray-200/80 dark:border-white/10 rounded-[8px] overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 hover:border-white/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] cursor-pointer transition-all duration-500"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/75 via-45% to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none" />

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-20" />

                {activeCategory === "All" && (
                  <div className="absolute top-2.5 left-2.5 z-20">
                    <span className={clsx(
                      "flex items-center gap-1 px-2 py-0.5 rounded-[3px] backdrop-blur-md border text-white text-[8.5px] font-bold uppercase tracking-wider shadow-sm",
                      getCategoryColor(video.category)
                    )}>
                      {video.category}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/50 group-hover:bg-white group-hover:border-white group-hover:text-[#0a1128] shadow-[0_8px_30px_rgba(0,0,0,0.5)] text-white transition-all duration-300 pointer-events-auto opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100"
                  >
                    <Play size={18} className="ml-0.5" fill="currentColor" />
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end z-20 transform translate-y-[34px] group-hover:translate-y-0 transition-all duration-500 ease-out">

                  <h3 className="text-[14.5px] font-bold text-white leading-snug mb-3 line-clamp-2 drop-shadow-lg">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-200 font-semibold bg-white/10 px-2 py-0.5 rounded-[3px] backdrop-blur-sm border border-white/20">
                        {video.category}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-[3px] bg-white text-[#0a1128] text-[10px] font-bold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
                      Watch <ChevronRight size={11} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div ref={observerTarget} className="flex justify-center pt-8 pb-4 w-full">
            {isLoadingMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 px-6 py-2.5 bg-[#0b1b42]/80 backdrop-blur-md rounded-full border border-[#d4af37]/30 shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
              >
                <Loader2 size={18} className="animate-spin text-[#d4af37]" />
                <span className="text-[#d4af37] text-sm font-bold tracking-wide">Loading More...</span>
              </motion.div>
            )}
          </div>
        )}

        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl border border-dashed border-gray-200/80 dark:border-[#d4af37]/20 rounded-[8px] shadow-sm max-w-2xl mx-auto w-full my-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#0b1b42]/10 dark:bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4 border border-[#d4af37]/20">
              <Video size={32} className="text-[#0b1b42] dark:text-[#d4af37]" />
            </div>
            <h3 className="text-base font-bold text-gray-800 dark:text-white">
              No videos found matching your criteria
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-sm mx-auto">
              Try searching with different keywords or switch categories to explore more commercial opportunities.
            </p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-5 px-5 py-2 rounded-[4px] bg-[#0b1b42] text-white text-xs font-bold hover:bg-[#0a1128] border border-[#d4af37]/30 transition-all"
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
          isMobile={false}
        />
      )}
    </section>
  );
}
