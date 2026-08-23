import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Search, Play, Video, Eye, Clock, Loader2, Filter, RefreshCw, ChevronDown } from "lucide-react";
import { sampleVideos, videoCategories } from "./data";
import { CustomSelect } from "../components/ui/CustomSelect";

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

const ITEMS_PER_PAGE = 8;

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

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

export default function VideoSearchMobile() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [sortBy, setSortBy] = useState("latest");

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
    <div className="w-full min-h-screen bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white overflow-x-hidden font-sans pb-20 relative">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute top-[10%] left-[-15%] w-[300px] h-[300px] rounded-full bg-[#D4AF37]/8 blur-[80px] dark:bg-[#D4AF37]/12"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[20%] right-[-10%] w-[250px] h-[250px] rounded-full bg-[#D4AF37]/8 blur-[80px] dark:bg-[#D4AF37]/8"
      />

      <div className="sticky top-0 z-40 bg-white dark:bg-[#0b1b42] p-3 sm:p-4 flex flex-col shrink-0 relative overflow-hidden rounded-b-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0a1128] dark:bg-[#121c33] hover:bg-[#0b1b42] dark:hover:bg-[#0b1b42] transition-colors duration-300 cursor-pointer rounded-[2px] border border-[#d4af37]/30 flex items-center justify-center shadow-sm">
              <Video className="text-[#d4af37]" size={15} />
            </div>
            <div>
              <h1 className="text-lg font-semibold uppercase tracking-tight text-[#0a1128] dark:text-white leading-none">
                Video Library
              </h1>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#d4af37] mt-0.5">
                Discover Opportunities
              </p>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">
            {filteredVideos.length} videos
          </span>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#121c33] border border-gray-200 dark:border-gray-800 rounded-[4px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 text-[#0a1128] dark:text-white placeholder-gray-400 shadow-sm transition-all"
          />
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide px-3 py-2.5 flex items-center gap-2 border-b border-gray-100 dark:border-white/5 bg-white/80 dark:bg-transparent">
        <div className="flex items-center gap-1.5 mr-1 text-gray-400 shrink-0">
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
                : "bg-white dark:bg-[#121c33] text-gray-600 dark:text-gray-300 border-gray-100 dark:border-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}

        <div className="ml-auto flex items-center pl-3 border-l border-gray-200 dark:border-gray-700 shrink-0 z-20">
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
    </div>
  );
}
