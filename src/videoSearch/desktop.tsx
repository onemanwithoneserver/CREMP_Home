import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Search, Play, Filter, Video, Eye, Clock, Loader2, RefreshCw } from "lucide-react";
import { sampleVideos, videoCategories } from "./data";
import { CustomSelect } from "../components/ui/CustomSelect";
import OpenVideo from "./Open video";

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

const ITEMS_PER_PAGE = 10;

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
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export default function VideoSearchDesktop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [sortBy, setSortBy] = useState("latest");
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

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
    <section className="w-full px-6 pt-32 pb-16 relative overflow-hidden rounded-[8px] backdrop-blur-sm transition-colors duration-700 dark:bg-[#0b1b42] min-h-screen font-sans">
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

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-5"
        >
          <div className="relative w-full max-w-2xl mx-auto group">
            <input
              type="text"
              placeholder="Search by brand, title, or keyword..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              className="w-full pl-5 pr-14 py-3.5 bg-white/40 dark:bg-[#0b1b42]/30 backdrop-blur-xl border border-gray-200/60 dark:border-white/5 rounded-[4px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all text-[#0a1128] dark:text-white placeholder-gray-400 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            />
            <div className="absolute inset-y-2 right-2 w-11 flex items-center justify-center bg-[#0a1128] dark:bg-[#d4af37]/20 rounded-[4px] text-white dark:text-[#d4af37] shadow-sm pointer-events-none">
              <Search size={17} />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-2 mr-3 text-gray-400">
              <Filter size={14} />
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Filters:
              </span>
            </div>
            {videoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-1.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white border-transparent shadow-[0_4px_12px_rgba(212,175,55,0.3)]"
                    : "bg-white dark:bg-[#121c33] text-gray-600 dark:text-gray-300 border-gray-100 dark:border-gray-800 hover:border-[#d4af37]/50 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}

            <div className="ml-auto flex items-center z-20">
              <CustomSelect
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
                label="Sort by:"
                className="min-w-[140px]"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500">
            Showing <span className="text-[#0a1128] dark:text-white font-semibold">{displayedVideos.length}</span> of{" "}
            <span className="text-[#0a1128] dark:text-white font-semibold">{filteredVideos.length}</span> videos
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory + searchQuery}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {displayedVideos.map((video) => (
              <motion.div
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                key={video.id}
                onClick={() => setSelectedVideoId(video.id)}
                className="group relative flex flex-col aspect-[9/16] bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-white/5 rounded-[4px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-500"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b42]/90 via-[#0b1b42]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute top-3 right-3">
                  <span className="flex w-fit items-center gap-2 rounded-[2px] border border-white/20 bg-black/50 backdrop-blur-md px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white shadow-sm">
                    {video.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0b1b42] border border-white/10 text-white shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition-all duration-500 pointer-events-auto opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                  >
                    <Play size={16} className="ml-0.5" fill="currentColor" />
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mb-1.5 drop-shadow-md">
                    {video.brand}
                  </span>
                  <h3 className="text-[14px] font-semibold text-white leading-tight mb-2.5 line-clamp-2 drop-shadow-lg">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-[2px] text-white text-[9px] font-semibold tracking-wider">
                      <Clock size={10} />
                      {video.duration}
                    </span>
                    <span className="flex items-center gap-1 text-white/70 text-[9px] font-medium">
                      <Eye size={10} />
                      {video.views} views
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
            className="flex justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="group flex items-center justify-center gap-2.5 px-8 py-3 bg-[#0b1b42] rounded-[4px] text-sm font-semibold text-white hover:bg-[#0a1128] hover:shadow-[0_12px_30px_rgba(11,27,66,0.25)] transition-all duration-300 shadow-md disabled:opacity-60 border-none"
            >
              {isLoadingMore ? (
                <Loader2 size={16} className="animate-spin text-white" />
              ) : (
                <RefreshCw size={16} className="text-white/80 group-hover:rotate-180 transition-transform duration-500" />
              )}
              <span>{isLoadingMore ? "Loading..." : "Load More Videos"}</span>
            </motion.button>
          </motion.div>
        )}

        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl border border-dashed border-gray-200/60 dark:border-[#d4af37]/20 rounded-[4px]"
          >
            <Video size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4 opacity-50" />
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              No videos found matching your criteria.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Try adjusting your search or filter settings.
            </p>
          </motion.div>
        )}
      </div>

      {selectedVideoId && (
        <OpenVideo 
          initialVideoId={selectedVideoId} 
          onClose={() => setSelectedVideoId(null)} 
        />
      )}
    </section>
  );
}
