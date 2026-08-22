import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Play, Filter, Video } from "lucide-react";
import { sampleVideos, videoCategories } from "./data";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function VideoSearchDesktop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = sampleVideos.filter((v) => {
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || v.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white transition-colors duration-300 overflow-hidden relative font-sans">
      <div
        className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-[#d4af37]/5 dark:bg-[#d4af37]/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDuration: "12s" }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDuration: "18s", animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-10 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0a1128] dark:bg-[#121c33] rounded-lg shadow-lg border border-[#d4af37]/30 flex items-center justify-center shrink-0">
              <Video className="text-[#d4af37]" size={24} />
            </div>
            <div>
              <h1 className="text-4xl lg:text-[48px] tracking-tight font-bold uppercase leading-none text-[#0a1128] dark:text-white">
                Video Library
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <div className="h-px bg-gradient-to-r from-[#d4af37] to-transparent w-16" />
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Discover Franchise Opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 mt-4">
            <div className="relative w-full max-w-2xl group">
              <input
                type="text"
                placeholder="Search by brand, title, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-5 pr-14 py-4 bg-gray-50/80 dark:bg-[#121c33]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-[4px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all text-[#0a1128] dark:text-white placeholder-gray-400 shadow-sm"
              />
              <div className="absolute inset-y-2 right-2 w-12 flex items-center justify-center bg-[#0a1128] dark:bg-[#d4af37]/20 rounded-[4px] text-white dark:text-[#d4af37] shadow-sm pointer-events-none">
                <Search size={18} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 mr-2 text-gray-400">
              <Filter size={16} />
              <span className="text-xs uppercase tracking-widest font-bold">
                Filters:
              </span>
            </div>
            {videoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white border-transparent shadow-[0_4px_12px_rgba(212,175,55,0.3)]"
                    : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#d4af37]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={video.id}
                className="group relative flex flex-col aspect-[9/16] bg-black border border-gray-100 dark:border-white/10 rounded-[12px] overflow-hidden shadow-md hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 transition-opacity duration-500" />

                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded-[4px] text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {video.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#0b1b42]/80 backdrop-blur-md border border-[#d4af37]/50 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play
                      size={24}
                      className="text-[#d4af37] ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold text-[#f0d060] uppercase tracking-wider line-clamp-1 shadow-black drop-shadow-md">
                      {video.brand}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/50" />
                    <span className="text-[11px] text-white/80 font-medium whitespace-nowrap shadow-black drop-shadow-md">
                      {video.views} views
                    </span>
                  </div>

                  <h3 className="text-[15px] font-bold text-white leading-tight mb-2 line-clamp-2 shadow-black drop-shadow-md">
                    {video.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-[4px] text-white text-[10px] font-semibold tracking-wider">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredVideos.length === 0 && (
          <div className="w-full py-20 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
            <Video size={48} className="mb-4 opacity-50" />
            <p className="text-lg font-medium">
              No videos found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
