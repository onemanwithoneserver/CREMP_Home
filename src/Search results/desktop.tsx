import { useState, useMemo, useEffect } from "react";
import {
  Heart,
  MapPin,
  Search,
  ChevronRight,
  X,
  TrendingUp,
  Calendar,
  Store,
  Eye,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { franchises, getMeta, tagColors, type Franchise } from "./data";
import FranchiseHome from "../Franchise_Home";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 350, damping: 28 },
  },
};

function MapPopup({
  franchise,
  onClose,
}: {
  franchise: Franchise;
  onClose: () => void;
}) {
  const meta = getMeta(franchise.category);
  const Icon = meta.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
      animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
      exit={{ opacity: 0, x: "-50%", scale: 0.95 }}
      className="absolute bottom-[calc(100%+12px)] left-1/2 w-[300px] rounded shadow-xl border border-[#0b1b42]/[0.08] p-4 z-50"
      style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t"
        style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #b38728)" }}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded bg-[#0b1b42]/[0.04] hover:bg-[#0b1b42]/[0.08] text-[#0b1b42]/50 hover:text-[#0b1b42] transition-all"
      >
        <X className="w-4 h-4" strokeWidth={2.5} />
      </button>
      <div className="flex items-center gap-3.5 mb-4">
        <div className="w-12 h-12 rounded overflow-hidden border border-[#0b1b42]/[0.08] flex-shrink-0 shadow-sm">
          <img
            src={franchise.logo}
            alt={franchise.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 pr-6">
          <h4 className="font-bold text-[#0a1128] text-[15px] leading-tight truncate mb-1">
            {franchise.name}
          </h4>
          <p className="text-[12px] text-[#0b1b42]/50 flex items-center gap-1 font-medium">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{franchise.location}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="flex flex-col justify-center items-center p-2 rounded bg-[#0b1b42]/[0.03] border border-[#0b1b42]/[0.06] min-h-[56px]">
          <span className="text-[9px] font-bold text-[#0b1b42]/40 uppercase tracking-wider mb-1">
            Investment
          </span>
          <span className="text-[11px] font-extrabold text-[#d4af37] text-center leading-[1.2]">
            {franchise.investment}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center p-2 rounded bg-[#0b1b42]/[0.03] border border-[#0b1b42]/[0.06] min-h-[56px]">
          <span className="text-[9px] font-bold text-[#0b1b42]/40 uppercase tracking-wider mb-1">
            ROI
          </span>
          <span className="text-[12px] font-extrabold text-emerald-500 text-center">
            {franchise.roi}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center p-2 rounded bg-[#0b1b42]/[0.03] border border-[#0b1b42]/[0.06] min-h-[56px]">
          <span className="text-[9px] font-bold text-[#0b1b42]/40 uppercase tracking-wider mb-1">
            Breakeven
          </span>
          <span className="text-[12px] font-extrabold text-blue-500 text-center leading-[1.2]">
            {franchise.breakeven}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div
          className={clsx(
            "flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold shadow-sm",
            meta.bg,
            meta.text,
          )}
        >
          <Icon size={14} strokeWidth={2.5} />
          {franchise.category}
        </div>
        <button className="flex items-center justify-center gap-1.5 text-[12px] font-bold text-white px-5 py-2 rounded transition-all group min-w-[100px] shadow-[0_4px_12px_rgba(212,175,55,0.3)]"
          style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #b38728)" }}
        >
          Enquire{" "}
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
      <div
        className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-4 h-4 border-r border-b border-[#0b1b42]/[0.08] rotate-45 [clip-path:polygon(100%_0,100%_100%,0_100%)]"
        style={{ background: "rgba(255,255,255,0.97)" }}
      />
    </motion.div>
  );
}

export default function SearchResultsDesktop() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showFranchiseView, setShowFranchiseView] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 5);
      setIsLoadingMore(false);
    }, 600);
  };

  useEffect(() => {
    setVisibleCount(5);
  }, [searchQuery]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) newFavs.delete(id);
      else newFavs.add(id);
      return newFavs;
    });
  };

  const handleMarkerClick = (id: number) => {
    setSelectedMarker(selectedMarker === id ? null : id);
  };

  const matchingFranchises = useMemo(() => {
    return franchises.filter(
      (f) =>
        !searchQuery ||
        f.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const displayFranchises = searchQuery
    ? matchingFranchises
    : matchingFranchises.slice(0, 3);

  const filtered = useMemo(() => {
    return franchises.filter((f) => {
      const matchesSearch =
        !searchQuery ||
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="flex flex-row w-full h-[calc(100vh-72px)] min-h-[calc(100vh-72px)] bg-white overflow-hidden font-sans transition-colors duration-300">
      <div className="w-[65%] h-full flex flex-col relative border-r border-[#0b1b42]/[0.06] z-10 bg-white">
        <div
          className="relative overflow-hidden shrink-0"
          style={{
            background: "linear-gradient(135deg, #0a1128 0%, #0b1b42 50%, #122050 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>
          <div
            className="absolute top-[-30%] right-[-10%] w-[300px] h-[300px] rounded-full opacity-[0.08] blur-[80px] pointer-events-none"
            style={{ background: "radial-gradient(circle, #d4af37, transparent)" }}
          />
          <div
            className="absolute bottom-[-20%] left-[-5%] w-[250px] h-[250px] rounded-full opacity-[0.06] blur-[60px] pointer-events-none"
            style={{ background: "radial-gradient(circle, #f3cd52, transparent)" }}
          />

          <div className="relative z-10 px-6 pt-5 pb-4">
            <h1 className="text-white font-extrabold text-[22px] leading-[1.2] tracking-tight mb-1">
              Find your perfect franchise opportunity.
            </h1>
            <p className="text-white/50 text-[12px] font-medium mb-3">
              Search franchises near you by name, industry, or location.
            </p>
            <div className="relative group max-w-[520px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search franchise name, industry, or location..."
                className="w-full pl-5 pr-[110px] py-3 bg-white rounded text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 transition-all text-[#0a1128] placeholder-[#0b1b42]/40 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              />
              <button
                className="absolute inset-y-1.5 right-1.5 px-4 flex items-center justify-center gap-2 rounded text-white text-[12px] font-bold transition-all hover:shadow-[0_4px_16px_rgba(212,175,55,0.4)]"
                style={{ background: "linear-gradient(90deg, #0b1b42, #1a2d5e)" }}
              >
                <Search className="h-3.5 w-3.5" />
                Search
              </button>
              <AnimatePresence>
                {isSearchFocused &&
                  (searchQuery || displayFranchises.length > 0) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 rounded shadow-xl overflow-hidden z-50"
                      style={{
                        background: "rgba(255,255,255,0.98)",
                        backdropFilter: "blur(24px)",
                        border: "1px solid rgba(11,27,66,0.08)",
                      }}
                    >
                      <div className="w-full flex flex-col">
                        <div className="overflow-y-auto flex-1 p-1.5 max-h-[260px] scrollbar-hide">
                          {displayFranchises.length > 0 ? (
                            displayFranchises.map((f) => (
                              <div
                                key={f.id}
                                onClick={() => setSearchQuery(f.name)}
                                className="px-3 py-2.5 hover:bg-[#0b1b42]/[0.03] cursor-pointer rounded text-[#0b1b42] flex items-center gap-3 transition-all duration-200 mx-0.5 my-0.5 group"
                              >
                                <div className="w-9 h-9 rounded bg-[#0b1b42]/[0.05] group-hover:bg-[#0b1b42]/[0.08] flex items-center justify-center text-[#0b1b42]/40 shrink-0 border border-[#0b1b42]/[0.06] transition-colors">
                                  <Store size={16} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col min-w-0 justify-center">
                                  <span className="truncate font-semibold text-[13px] leading-tight tracking-tight text-[#0a1128]">
                                    {f.name}
                                  </span>
                                  <span className="text-[10px] font-medium text-[#0b1b42]/40 flex items-center gap-1 mt-0.5">
                                    <MapPin size={10} strokeWidth={2} />
                                    <span className="truncate">{f.location}</span>
                                  </span>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="p-3 text-center text-xs text-[#0b1b42]/40">
                              No franchises found
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="flex-1 relative bg-gradient-to-br from-[#f4f6f9] via-[#eef1f6] to-[#e8ecf2] overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#0b1b42" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#0b1b42" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#0b1b42" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="20" fill="none" stroke="#0b1b42" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)" />
          </svg>
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 0,120 Q 200,180 400,100 T 800,200" fill="none" stroke="#0b1b42" strokeWidth="2" strokeDasharray="8 6" />
            <path d="M 50,300 Q 250,250 450,350 T 800,280" fill="none" stroke="#0b1b42" strokeWidth="1.5" strokeDasharray="5 7" />
          </svg>
          {filtered.map((f, i) => {
            const isActive = hoveredCard === f.id || selectedMarker === f.id;
            const meta = getMeta(f.category);
            const Icon = isActive ? meta.icon : Store;
            return (
              <motion.div
                key={`marker-${f.id}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: i * 0.04,
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 20,
                }}
                className="absolute"
                style={{
                  top: `${f.lat}%`,
                  left: `${f.lng}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => handleMarkerClick(f.id)}
              >
                <motion.div
                  animate={isActive ? { scale: 1.35 } : { scale: 1 }}
                  transition={{
                    type: "spring" as const,
                    stiffness: 400,
                    damping: 25,
                  }}
                  className={clsx(
                    "relative flex flex-col items-center cursor-pointer",
                    isActive ? "z-30" : "z-10",
                  )}
                >
                  {isActive && (
                    <motion.div
                      className={clsx(
                        "absolute w-14 h-14 rounded-full border-2",
                        `border-current ${meta.text} opacity-40`,
                      )}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: [0.5, 1.2], opacity: [0.6, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  )}
                  <div
                    className={clsx(
                      "w-10 h-10 rounded flex items-center justify-center transition-all duration-300 shadow-md",
                      isActive
                        ? `${meta.bg} ${meta.glow}`
                        : "bg-white/80 border border-[#0b1b42]/[0.08]",
                    )}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2.5}
                      className={
                        isActive
                          ? meta.text
                          : "text-[#0b1b42]/40"
                      }
                    />
                  </div>
                </motion.div>
                <AnimatePresence>
                  {selectedMarker === f.id && (
                    <MapPopup
                      franchise={f}
                      onClose={() => setSelectedMarker(null)}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div className="absolute bottom-5 right-5 flex flex-col gap-1.5 z-10">
            {["+", "−"].map((label) => (
              <motion.button
                key={label}
                whileTap={{ scale: 0.88 }}
                whileHover={{ scale: 1.05 }}
                className="w-9 h-9 flex items-center justify-center rounded bg-white border border-[#0b1b42]/[0.08] text-[#0b1b42]/60 text-lg font-medium hover:text-[#d4af37] transition-colors shadow-sm"
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[35%] h-full flex flex-col bg-white overflow-hidden z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.03)]">
        <AnimatePresence mode="wait">
          {showFranchiseView ? (
            <motion.div
              key="franchise-view"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full flex flex-col"
            >
              <div
                className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-[#0b1b42]/[0.06]"
                style={{
                  background: "linear-gradient(135deg, #0a1128, #0b1b42)",
                }}
              >
                <button
                  onClick={() => setShowFranchiseView(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <ArrowLeft size={16} strokeWidth={2.5} />
                </button>
                <span className="text-[13px] font-bold text-white tracking-tight">Franchise Home</span>
                <div className="flex-1" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide bg-white">
                <FranchiseHome isMobile={true} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list-view"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full flex flex-col"
            >
              <div className="shrink-0 flex items-center px-4 py-2.5 border-b border-[#0b1b42]/[0.06]">
                <p className="text-[11px] font-bold text-[#0b1b42]/40 uppercase tracking-[0.15em]">
                  {filtered.length} Result{filtered.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col"
                >
                  {filtered.slice(0, visibleCount).map((f) => {
                    const isActive = hoveredCard === f.id || selectedMarker === f.id;
                    return (
                      <motion.div
                        key={`card-${f.id}`}
                        variants={fadeUp}
                        onMouseEnter={() => setHoveredCard(f.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => handleMarkerClick(f.id)}
                        whileHover={{
                          scale: 1.01,
                          x: 4,
                          transition: { type: "spring", stiffness: 400, damping: 25 },
                        }}
                        className={clsx(
                          "relative cursor-pointer transition-all duration-300 hover:z-10 rounded my-1.5 mx-2.5 border",
                          isActive
                            ? "bg-[#0b1b42]/[0.02] shadow-[0_8px_30px_rgba(11,27,66,0.06)] border-[#d4af37]/40"
                            : "bg-white border-[#0b1b42]/[0.06] hover:shadow-[0_12px_40px_rgba(11,27,66,0.08)]",
                        )}
                      >
                        <motion.div
                          initial={false}
                          animate={{
                            scaleY: isActive ? 1 : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{
                            type: "spring" as const,
                            stiffness: 500,
                            damping: 30,
                          }}
                          className="absolute left-0 top-0 w-[3px] h-full origin-top rounded-r-full"
                          style={{ background: "linear-gradient(to bottom, #d4af37, #aa8922)" }}
                        />
                        <div className="p-3 pl-3.5">
                          <div className="flex gap-3.5">
                            <div
                              className={clsx(
                                "w-[72px] h-[56px] rounded overflow-hidden flex-shrink-0 border transition-all duration-300",
                                isActive
                                  ? "border-[#d4af37]/40 shadow-[0_4px_16px_rgba(212,175,55,0.15)]"
                                  : "border-[#0b1b42]/[0.08] shadow-sm",
                              )}
                            >
                              <img
                                src={f.logo}
                                alt={f.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <h3
                                      className={clsx(
                                        "font-semibold text-[13px] leading-tight truncate transition-colors",
                                        isActive
                                          ? "text-[#0a1128]"
                                          : "text-[#0a1128]",
                                      )}
                                    >
                                      {f.name}
                                    </h3>
                                  </div>
                                  <p className="text-[10px] text-[#0b1b42]/40 flex items-center gap-1 font-medium">
                                    <MapPin className="w-3 h-3 flex-shrink-0" />
                                    <span className="truncate">{f.location}</span>
                                  </p>
                                </div>
                                <motion.button
                                  whileTap={{ scale: 1.3 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(f.id);
                                  }}
                                  className="p-1 flex-shrink-0 rounded hover:bg-rose-500/10 transition-colors"
                                >
                                  <Heart
                                    className={clsx(
                                      "w-4 h-4 transition-all duration-300",
                                      favorites.has(f.id)
                                        ? "fill-red-500 text-red-500"
                                        : "text-[#0b1b42]/20 hover:text-red-400",
                                    )}
                                  />
                                </motion.button>
                              </div>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-[12px] font-extrabold text-[#0b1b42]">
                                  {f.investment}
                                </span>
                                <span className="w-px h-3 bg-[#0b1b42]/[0.08]" />
                                <div className="flex items-center gap-0.5">
                                  <TrendingUp size={10} className="text-emerald-500" />
                                  <span className="text-[10px] font-semibold text-emerald-600">
                                    {f.roi}
                                  </span>
                                </div>
                                <span className="w-px h-3 bg-[#0b1b42]/[0.08]" />
                                <div className="flex items-center gap-0.5">
                                  <Calendar size={10} className="text-blue-500" />
                                  <span className="text-[10px] font-semibold text-blue-600">
                                    {f.breakeven}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-2 gap-2 pl-[84px]">
                            <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                              {f.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className={clsx(
                                    "px-2 py-0.5 rounded text-[9px] font-semibold border",
                                    tagColors[tag] ||
                                      "bg-[#0b1b42]/[0.03] text-[#0b1b42]/50 border-[#0b1b42]/[0.06]",
                                  )}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowFranchiseView(true);
                                }}
                                className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded border border-[#0b1b42]/[0.1] text-[#0b1b42]/70 hover:text-[#0b1b42] hover:border-[#0b1b42]/20 hover:bg-[#0b1b42]/[0.03] transition-all whitespace-nowrap"
                              >
                                <Eye size={12} strokeWidth={2.5} />
                                View
                              </motion.button>
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1 text-[10px] font-semibold px-3 py-1.5 rounded text-white shadow-[0_0_12px_rgba(212,175,55,0.25)] border border-[#f9df9f]/50 transition-all group whitespace-nowrap relative overflow-hidden"
                                style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #b38728)" }}
                              >
                                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                                <span className="relative z-10 flex items-center gap-1">
                                  Enquire
                                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                </span>
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
                {visibleCount < filtered.length && (
                  <div className="px-4 py-5 flex justify-center">
                    <motion.button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ y: -1 }}
                      className="flex items-center justify-center min-w-[140px] px-8 py-3 rounded text-xs font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all uppercase tracking-widest disabled:opacity-80"
                      style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
                    >
                      {isLoadingMore ? (
                        <div className="flex gap-1.5 items-center justify-center">
                          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [-2, 2, -2] }} transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }} />
                          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [-2, 2, -2] }} transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} />
                          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [-2, 2, -2] }} transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
                        </div>
                      ) : (
                        "Load More"
                      )}
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
