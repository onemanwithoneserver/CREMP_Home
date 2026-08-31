import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Search, Play, Filter, Video, Eye, Clock, Loader2, RefreshCw, ChevronRight } from "lucide-react";
import { sampleVideos, videoCategories } from "./data";
import { CustomSelect } from "../components/ui/CustomSelect";
import OpenVideo from "./Open video";
import clsx from "clsx";
import SearchImage from "./ExploreHero.jpg";

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
          <img src={SearchImage} alt="Explore hero" className="w-full h-full object-cover object-left opacity-90" />
        </div>

        <FloatingParticle delay={0} x="10%" y="20%" size={6} />
        <FloatingParticle delay={1.2} x="75%" y="30%" size={4} />
        <FloatingParticle delay={0.6} x="50%" y="65%" size={5} />
        <FloatingParticle delay={2} x="25%" y="75%" size={3} />
        <FloatingParticle delay={1.5} x="65%" y="15%" size={5} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-10 pb-8 flex flex-col items-start text-left">

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
            className="text-white/60 text-[15px] font-medium mb-6 max-w-lg"
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
          {videoCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`relative px-4 py-2 rounded-[6px] text-xs font-semibold tracking-normal transition-all duration-300 border flex flex-col items-center justify-center ${
                  isActive
                    ? "bg-white dark:bg-[#0b1b42] text-[#b38728] dark:text-[#d4af37] border-[#d4af37] shadow-[0_2px_10px_rgba(212,175,55,0.2)]"
                    : "bg-white dark:bg-[#0b1b42] text-[#0b1b42]/70 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#d4af37]/50 hover:text-[#0b1b42] dark:hover:text-white shadow-sm"
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-1 inset-x-0 mx-auto w-5 h-[2.5px] rounded-full bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] shadow-[0_0_6px_rgba(212,175,55,0.6)]"
                  />
                )}
              </button>
            );
          })}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-4 pb-16 flex flex-col gap-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory + searchQuery}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-6"
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

                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                    <span className="text-white/85 text-[11px] font-bold uppercase tracking-wider drop-shadow-md truncate">
                      {video.brand}
                    </span>
                  </div>
                  <h3 className="text-[14.5px] font-bold text-white leading-snug mb-3 line-clamp-2 drop-shadow-lg">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-black/40 backdrop-blur-md border border-white/20 rounded-[3px] text-white text-[9.5px] font-semibold tracking-wider shadow-sm">
                        <Clock size={10} className="text-white/80" />
                        {video.duration}
                      </span>
                      <span className="flex items-center gap-1 text-white/80 text-[10px] font-medium">
                        <Eye size={10} className="text-white/70" />
                        {video.views}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-[3px] bg-white text-[#0a1128] text-[10px] font-bold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
                      Watch <ChevronRight size={11} />
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
            className="flex justify-center pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="group relative flex items-center justify-center gap-3 px-9 py-3.5 bg-[#0b1b42] hover:bg-[#0a1128] border border-[#d4af37]/40 hover:border-[#d4af37] rounded-[6px] text-sm font-bold text-white shadow-[0_8px_25px_rgba(11,27,66,0.2)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.25)] transition-all duration-300 disabled:opacity-60 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              {isLoadingMore ? (
                <Loader2 size={16} className="animate-spin text-[#d4af37]" />
              ) : (
                <RefreshCw size={16} className="text-[#d4af37] group-hover:rotate-180 transition-transform duration-500" />
              )}
              <span className="tracking-wide">{isLoadingMore ? "Loading More Videos..." : "Load More Videos"}</span>
            </motion.button>
          </motion.div>
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
