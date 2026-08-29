import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Search, Play, Filter, Video, Eye, Clock, Loader2, RefreshCw, Sparkles } from "lucide-react";
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
const ITEMS_PER_PAGE = 10;

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

export default function VideoSearchDesktop() {
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
    <section className="w-full min-h-screen font-sans bg-[#f8f9fc]">

      <div
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1128 0%, #0b1b42 35%, #132254 65%, #0d1a3a 100%)" }}
      >

        <motion.div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([x, y]) => `radial-gradient(450px circle at ${x}px ${y}px, rgba(212,175,55,0.18), transparent 60%)`
            ),
          }}
        />

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
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
          <img src={SearchImage} alt="Video Search hero" className="w-full h-full object-cover object-left opacity-90" />
        </div>

        <FloatingParticle delay={0} x="10%" y="20%" size={6} />
        <FloatingParticle delay={1.2} x="75%" y="30%" size={4} />
        <FloatingParticle delay={0.6} x="50%" y="65%" size={5} />
        <FloatingParticle delay={2} x="25%" y="75%" size={3} />
        <FloatingParticle delay={1.5} x="65%" y="15%" size={5} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-10 pb-8 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#d4af37]/30 bg-[#d4af37]/10">
              <Sparkles size={13} className="text-[#d4af37]" strokeWidth={2.5} />
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-[0.12em]">Video Library</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-extrabold text-[42px] leading-[1.08] tracking-[-0.02em] mb-3"
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-white/50 text-[15px] font-medium mb-6 max-w-lg"
          >
            Commercial Properties · Business Opportunities · Expert Brokers
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full max-w-[520px] z-50"
          >
            <div
              className={clsx(
                "absolute -inset-[1.5px] rounded transition-opacity duration-500",
                isSearchFocused ? "opacity-100" : "opacity-0",
              )}
              style={{ background: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)" }}
            />
            <div className="relative w-full bg-white rounded flex items-center p-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(ITEMS_PER_PAGE);
                }}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search by brand, title, or keyword..."
                className="flex-1 bg-transparent border-none outline-none text-[15px] font-medium text-[#0a1128] placeholder-[#0b1b42]/35 py-2 pl-4"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="shrink-0 w-11 h-11 flex items-center justify-center rounded text-white transition-all relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent)" }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                />
                <Search className="h-4 w-4 relative z-10" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-2">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-2 mr-3 text-[#0b1b42]/40">
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
                  : "bg-white text-[#0b1b42]/60 border-[#0b1b42]/[0.08] hover:border-[#d4af37]/50 shadow-sm"
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-4 pb-16 flex flex-col gap-8">

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
          isMobile={false}
        />
      )}
    </section>
  );
}
