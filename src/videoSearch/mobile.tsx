import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Play, Video } from "lucide-react";
import { sampleVideos, videoCategories } from "./data";

export default function VideoSearchMobile() {
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
    <div className="w-full min-h-screen bg-gray-50 dark:bg-[#0a1128] text-[#0a1128] dark:text-white overflow-x-hidden font-sans pb-20">
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-[#0b1b42]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 pt-4 pb-3 px-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0a1128] dark:bg-[#121c33] rounded-[4px] border border-[#d4af37]/30 flex items-center justify-center shadow-sm">
              <Video className="text-[#d4af37]" size={16} />
            </div>
            <h1 className="text-xl font-bold uppercase tracking-tight text-[#0a1128] dark:text-white">
              Videos
            </h1>
          </div>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-[#121c33] border-none rounded-[4px] text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37]/50 text-[#0a1128] dark:text-white placeholder-gray-500 shadow-inner"
          />
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide px-4 py-4 flex items-center gap-2 border-b border-gray-200 dark:border-white/5 bg-white dark:bg-transparent">
        {videoCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 px-3 py-1.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider transition-all border ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white border-transparent shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
                : "bg-white dark:bg-[#121c33] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        <AnimatePresence mode="popLayout">
          {filteredVideos.map((video) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={video.id}
              className="group relative flex flex-col aspect-[9/16] bg-black border border-gray-100 dark:border-white/5 rounded-[12px] overflow-hidden shadow-sm"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-80 group-active:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 transition-opacity duration-500" />

              <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/60 backdrop-blur-md rounded-[4px] text-white text-[8px] font-bold uppercase tracking-widest border border-white/10">
                {video.category}
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
                  <Play
                    size={16}
                    className="text-white ml-0.5"
                    fill="currentColor"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col justify-end z-10">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[9px] font-bold text-[#f0d060] uppercase tracking-wider line-clamp-1 shadow-black drop-shadow-md">
                    {video.brand}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/50" />
                  <span className="text-[9px] text-white/80 font-medium whitespace-nowrap shadow-black drop-shadow-md">
                    {video.views} views
                  </span>
                </div>

                <h3 className="text-[12px] font-bold text-white leading-tight mb-2 line-clamp-2 shadow-black drop-shadow-md">
                  {video.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="px-1.5 py-0.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-[4px] text-white text-[9px] font-semibold tracking-wider">
                    {video.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredVideos.length === 0 && (
          <div className="w-full py-12 flex flex-col items-center text-gray-400">
            <p className="text-sm">No videos found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
