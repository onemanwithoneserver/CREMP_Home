import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Play, Video, Eye, Clock, Loader2, Filter, RefreshCw, Sparkles } from "lucide-react";
import { sampleVideos, videoCategories } from "./data";
import { CustomSelect } from "../components/ui/CustomSelect";
import OpenVideo from "./Open video";
import clsx from "clsx";
import SearchImage from "./VideoSearchHero.jpg";

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];
const ITEMS_PER_PAGE = 8;

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

export default function VideoSearchMobile() {
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
    if (sortBy === "popular") {
      const parseViews = (views: string) => {
        const val = parseFloat(views);
        if (views.toLowerCase().endsWith('k')) return val * 1000;
        if (views.toLowerCase().endsWith('m')) return val * 1000000;
        return val;
      };
      return parseViews(b.views) - parseViews(a.views);
    }
    if (sortBy === "oldest") {
      return a.id.localeCompare(b.id);
    }
    return b.id.localeCompare(a.id);
  });
  const displayedVideos = sortedVideos.slice(0, visibleCount);
  const hasMore = visibleCount < sortedVideos.length;
  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
      setIsLoadingMore(false);
    }, 600);
  };
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };
  return (
    <div className="w-full min-h-screen bg-[#f8f9fc] text-[#0a1128] overflow-x-hidden font-sans pb-20 relative">

      {/* Hero Section */}
      <div
        className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1128 0%, #0b1b42 35%, #132254 65%, #0d1a3a 100%)" }}
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="video-hero-grid-m" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#video-hero-grid-m)" />
          </svg>
        </div>

        {/* Hero Image */}
        <div 
          className="absolute inset-0 w-full h-[60%] z-0"
          style={{
            maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
          }}
        >
          <img src={SearchImage} alt="Video Search hero" className="w-full h-full object-cover object-center opacity-40" />
        </div>

        {/* Floating Particles */}
        <FloatingParticle delay={0} x="8%" y="25%" size={4} />
        <FloatingParticle delay={1} x="80%" y="35%" size={3} />
        <FloatingParticle delay={0.5} x="45%" y="70%" size={4} />

        {/* Hero Content */}
        <div className="relative z-10 px-5 pt-7 pb-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 mb-3"
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#d4af37]/30 bg-[#d4af37]/10">
              <Sparkles size={11} className="text-[#d4af37]" strokeWidth={2.5} />
              <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-[0.12em]">Video Library</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-extrabold text-[22px] leading-[1.12] tracking-[-0.02em] mb-2"
          >
            Explore our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)" }}
            >
              video
            </span>{" "}
            collection.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-white/40 text-[11px] font-medium mb-4"
          >
            Properties · Opportunities · Brokers
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative w-full max-w-[360px] z-50"
          >
            <div
              className={clsx(
                "absolute -inset-[1.5px] rounded transition-opacity duration-500",
                isSearchFocused ? "opacity-100" : "opacity-0",
              )}
              style={{ background: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)" }}
            />
            <div className="relative w-full bg-white rounded flex items-center p-1 shadow-[0_6px_30px_rgba(0,0,0,0.3)]">
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
                className="flex-1 bg-transparent border-none outline-none text-[13px] font-medium text-[#0a1128] placeholder-[#0b1b42]/35 py-2 pl-3"
              />
              <div
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded text-white"
                style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
              >
                <Search className="h-3.5 w-3.5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="w-full overflow-x-auto scrollbar-hide px-3 py-2.5 flex items-center gap-2 border-b border-[#0b1b42]/[0.06] bg-white/80">
        <div className="flex items-center gap-1.5 mr-1 text-[#0b1b42]/40 shrink-0">
          <Filter size={12} />
          <span className="text-[8px] uppercase tracking-widest font-bold">
            Filter:
          </span>
        </div>
        {videoCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`shrink-0 px-3 py-1.5 rounded-[4px] text-[9px] font-bold uppercase tracking-widest transition-all border ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white border-transparent shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
                : "bg-white text-[#0b1b42]/50 border-[#0b1b42]/[0.08]"
            }`}
          >
            {cat}
          </button>
        ))}
        <div className="ml-auto flex items-center pl-3 border-l border-[#0b1b42]/[0.08] shrink-0 z-20">
          <CustomSelect
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
            label="Sort:"
            className="min-w-[120px]"
          />
        </div>
      </div>
      <div className="px-3 py-3 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory + searchQuery}
          className="grid grid-cols-2 gap-2.5"
        >
          <AnimatePresence mode="popLayout">
            {displayedVideos.map((video) => (
              <motion.div
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                key={video.id}
                onClick={() => setSelectedVideoId(video.id)}
                className="group relative flex flex-col aspect-[9/16] bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-white/5 rounded-[4px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)] active:shadow-md transition-all duration-300"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-active:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b42]/90 via-[#0b1b42]/20 to-transparent opacity-70 transition-opacity duration-500" />
                <div className="absolute top-2 right-2">
                  <span className="flex w-fit items-center rounded-[2px] border border-white/20 bg-black/50 backdrop-blur-md px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-widest text-white">
                    {video.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-9 h-9 rounded-full bg-[#0b1b42] border border-white/10 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.4)] group-active:scale-90 transition-transform duration-300">
                    <Play
                      size={12}
                      className="text-white ml-0.5"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col justify-end z-10">
                  <span className="text-[#d4af37] text-[8px] font-bold uppercase tracking-widest mb-1 drop-shadow-md">
                    {video.brand}
                  </span>
                  <h3 className="text-[11px] font-semibold text-white leading-tight mb-2 line-clamp-2 drop-shadow-lg">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 px-1.5 py-0.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-[2px] text-white text-[8px] font-semibold tracking-wider">
                      <Clock size={8} />
                      {video.duration}
                    </span>
                    <span className="flex items-center gap-1 text-white/70 text-[8px] font-medium">
                      <Eye size={8} />
                      {video.views}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center pt-5"
          >
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="group flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0b1b42] rounded-[4px] text-xs font-semibold text-white hover:bg-[#0a1128] transition-all duration-300 shadow-md disabled:opacity-60 border-none"
            >
              {isLoadingMore ? (
                <Loader2 size={14} className="animate-spin text-white" />
              ) : (
                <RefreshCw size={14} className="text-white/80 group-hover:rotate-180 transition-transform duration-500" />
              )}
              <span>{isLoadingMore ? "Loading..." : "Load More"}</span>
            </button>
          </motion.div>
        )}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl border border-dashed border-gray-200/60 dark:border-[#d4af37]/20 rounded-[4px] mt-4"
          >
            <Video size={36} className="mx-auto text-gray-300 dark:text-gray-600 mb-3 opacity-50" />
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              No videos found.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Try adjusting your search.
            </p>
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
