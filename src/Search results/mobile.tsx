import { useState, useMemo, useEffect } from "react";
import {
  Heart,
  MapPin,
  Search,
  TrendingUp,
  Calendar,
  Store,
  Map,
  Maximize,
  Minimize,
  X,
  ArrowRight,
  Eye,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { franchises, getMeta, tagColors } from "./data";
import FranchiseHome from "../Franchise_Home";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
};
const cardVariant = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 340, damping: 26 },
  },
};
const spring = { type: "spring" as const, stiffness: 400, damping: 28 };

export default function SearchResultsMobile() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showMap, setShowMap] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isListCollapsed, setIsListCollapsed] = useState(false);
  const [showFranchiseView, setShowFranchiseView] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((p) => p + 5);
      setIsLoadingMore(false);
    }, 600);
  };

  useEffect(() => {
    setVisibleCount(5);
  }, [searchQuery]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleCardTap = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
    setSelectedMarker(id);
  };

  const suggestions = useMemo(() => {
    const m = franchises.filter(
      (f) =>
        !searchQuery ||
        f.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    return searchQuery ? m : m.slice(0, 3);
  }, [searchQuery]);

  const filtered = useMemo(
    () =>
      franchises.filter((f) => {
        const q = searchQuery.toLowerCase();
        return (
          !searchQuery ||
          f.name.toLowerCase().includes(q) ||
          f.location.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q)
        );
      }),
    [searchQuery],
  );

  return (
    <div className="flex flex-col w-full h-full bg-white overflow-hidden font-sans transition-colors duration-300 relative">
      <AnimatePresence>
        {showFranchiseView && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[200] flex flex-col bg-white"
            style={{ top: "var(--top-bar-height, 0px)" }}
          >
            <div
              className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-[#0b1b42]/[0.06]"
              style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
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
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <FranchiseHome isMobile={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="relative shrink-0 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1128 0%, #0b1b42 50%, #122050 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid-m" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-m)" />
          </svg>
        </div>
        <div
          className="absolute top-[-30%] right-[-15%] w-[200px] h-[200px] rounded-full opacity-[0.1] blur-[60px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4af37, transparent)" }}
        />

        <div className="relative z-10 px-4 pt-4 pb-3">
          <h2 className="text-white font-extrabold text-[16px] leading-[1.2] tracking-tight mb-1">
            Find your franchise.
          </h2>
          <p className="text-white/40 text-[11px] font-medium mb-3">
            Search by name, industry, or location.
          </p>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="Search franchise, industry, or location..."
              className="w-full pl-4 pr-[76px] py-3.5 bg-white rounded text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition-all text-[#0a1128] placeholder-[#0b1b42]/40 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            />
            <div className="absolute inset-y-1.5 right-1.5 flex gap-1 items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowMap(!showMap)}
                className={clsx(
                  "w-8 h-full flex items-center justify-center rounded transition-all duration-200",
                  showMap
                    ? "text-white shadow-sm"
                    : "bg-[#0b1b42]/[0.05] text-[#0b1b42]/40",
                )}
                style={showMap ? { background: "linear-gradient(135deg, #bf953f, #d4af37)" } : undefined}
              >
                <Map className="h-4 w-4" />
              </motion.button>
              <div
                className="w-8 h-full flex items-center justify-center rounded text-white shadow-sm"
                style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
              >
                <Search className="h-4 w-4" />
              </div>
            </div>
            <AnimatePresence>
              {isSearchFocused && (searchQuery || suggestions.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={spring}
                  className="absolute top-full left-0 right-0 mt-2 rounded overflow-hidden z-50 shadow-xl"
                  style={{
                    background: "rgba(255,255,255,0.98)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(11,27,66,0.08)",
                  }}
                >
                  <div className="overflow-y-auto p-1.5 max-h-[260px] scrollbar-hide">
                    {suggestions.length > 0 ? (
                      suggestions.map((f) => (
                        <motion.div
                          key={f.id}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setSearchQuery(f.name)}
                          className="px-3 py-2.5 hover:bg-[#0b1b42]/[0.03] cursor-pointer rounded flex items-center gap-3 transition-all duration-200 mx-0.5 my-0.5 group"
                        >
                          <div className="w-9 h-9 rounded bg-[#0b1b42]/[0.04] group-hover:bg-[#0b1b42]/[0.08] flex items-center justify-center text-[#0b1b42]/30 shrink-0 border border-[#0b1b42]/[0.06] transition-all">
                            <Store size={14} strokeWidth={1.5} />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="truncate font-bold text-[13px] leading-tight text-[#0a1128]">
                              {f.name}
                            </span>
                            <span className="text-[10px] font-medium text-[#0b1b42]/40 flex items-center gap-1 mt-0.5">
                              <MapPin size={9} strokeWidth={2} />
                              <span className="truncate">{f.location}</span>
                            </span>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-[11px] text-[#0b1b42]/40 font-medium">
                        No franchises found
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isListCollapsed ? "100vh" : "36vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring" as const, stiffness: 280, damping: 28 }}
            className="w-full relative bg-gradient-to-br from-[#f4f6f9] via-[#eef1f6] to-[#e8ecf2] overflow-hidden flex-shrink-0 border-b border-[#0b1b42]/[0.06]"
          >
            <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="topo-m" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#0b1b42" strokeWidth="0.5" />
                  <circle cx="75" cy="75" r="40" fill="none" stroke="#0b1b42" strokeWidth="0.5" />
                  <circle cx="75" cy="75" r="20" fill="none" stroke="#0b1b42" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topo-m)" />
            </svg>
            <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,80 Q 100,120 200,60 T 400,130" fill="none" stroke="#0b1b42" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M 30,180 Q 150,150 250,200 T 400,170" fill="none" stroke="#0b1b42" strokeWidth="1.5" strokeDasharray="4 6" />
            </svg>
            <div className="absolute bottom-16 right-3 z-10">
              <motion.button
                whileTap={{ scale: 0.88 }}
                whileHover={{ scale: 1.08 }}
                onClick={() => setIsListCollapsed(!isListCollapsed)}
                className="w-9 h-9 flex items-center justify-center rounded bg-white text-[#0b1b42] shadow-md border border-[#0b1b42]/[0.08] transition-all relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {isListCollapsed ? (
                    <motion.div key="min" initial={{ scale: 0.5, rotate: 90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0.5, rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Minimize size={16} strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div key="max" initial={{ scale: 0.5, rotate: -90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0.5, rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Maximize size={16} strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
            {filtered.map((f, i) => {
              const isActive = activeCard === f.id || selectedMarker === f.id;
              const meta = getMeta(f.category);
              const Icon = isActive ? meta.icon : Store;
              return (
                <motion.div
                  key={`marker-${f.id}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.04, type: "spring" as const, stiffness: 300, damping: 20 }}
                  className="absolute"
                  style={{ top: `${f.lat}%`, left: `${f.lng}%`, transform: "translate(-50%, -50%)" }}
                  onClick={() => setSelectedMarker(selectedMarker === f.id ? null : f.id)}
                >
                  <motion.div
                    animate={isActive ? { scale: 1.4 } : { scale: 1 }}
                    transition={spring}
                    className={clsx("relative flex flex-col items-center cursor-pointer", isActive ? "z-30" : "z-10")}
                  >
                    {isActive && (
                      <>
                        <motion.div
                          className={clsx("absolute w-12 h-12 rounded-full border-2", `border-current ${meta.text} opacity-30`)}
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: [0.5, 1.4], opacity: [0.5, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.div
                          className={clsx("absolute w-12 h-12 rounded-full border", `border-current ${meta.text} opacity-15`)}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: [0.8, 1.6], opacity: [0.3, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                        />
                      </>
                    )}
                    <div
                      className={clsx(
                        "w-9 h-9 rounded flex items-center justify-center transition-all duration-200 shadow-md",
                        isActive ? `${meta.bg} ${meta.glow}` : "bg-white border border-[#0b1b42]/[0.08] shadow-sm",
                      )}
                    >
                      <Icon size={15} strokeWidth={2.5} className={isActive ? meta.text : "text-[#0b1b42]/40"} />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
            <AnimatePresence>
              {isListCollapsed && selectedMarker && (() => {
                const f = filtered.find((x) => x.id === selectedMarker);
                if (!f) return null;
                const meta = getMeta(f.category);
                return (
                  <motion.div
                    key={`popup-${f.id}`}
                    initial={{ opacity: 0, scale: 0.85, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 12 }}
                    transition={spring}
                    style={{
                      position: "absolute",
                      top: f.lat < 40 ? `calc(${f.lat}% + 28px)` : "auto",
                      bottom: f.lat >= 40 ? `calc(${100 - f.lat}% + 28px)` : "auto",
                      left: `max(12px, min(calc(${f.lng}% - 130px), calc(100% - 272px)))`,
                      width: "260px",
                      transformOrigin: f.lat < 40 ? "top center" : "bottom center",
                    }}
                    className="rounded shadow-xl z-40 pointer-events-auto overflow-hidden"
                    onClick={() => handleCardTap(f.id)}
                  >
                    <div className={clsx("h-[3px] w-full", meta.bg)} />
                    <div className="p-3 bg-white border border-[#0b1b42]/[0.06]">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex gap-2.5 items-center min-w-0">
                          <div className="w-[48px] h-[48px] rounded overflow-hidden shrink-0 border border-[#0b1b42]/[0.08] shadow-sm">
                            <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-extrabold text-[13px] leading-tight truncate text-[#0a1128]">{f.name}</h3>
                            <p className="text-[9px] text-[#0b1b42]/40 flex items-center gap-0.5 font-medium mt-0.5">
                              <MapPin className="w-2.5 h-2.5 shrink-0" />
                              <span className="truncate">{f.location}</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0 ml-1">
                          <motion.button whileTap={{ scale: 1.4 }} onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }} className="p-1 rounded-full hover:bg-[#0b1b42]/[0.04] transition-all">
                            <Heart className={clsx("w-3.5 h-3.5 transition-all duration-300", favorites.has(f.id) ? "fill-red-500 text-red-500" : "text-[#0b1b42]/20")} />
                          </motion.button>
                          <motion.button whileTap={{ scale: 0.85, rotate: 90 }} onClick={(e) => { e.stopPropagation(); setSelectedMarker(null); }} className="p-1 rounded-full hover:bg-[#0b1b42]/[0.04] text-[#0b1b42]/30 hover:text-[#0b1b42] transition-all">
                            <X className="w-3.5 h-3.5" />
                          </motion.button>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span className="text-[10px] font-extrabold text-[#0b1b42]">{f.investment}</span>
                        <span className="w-px h-2.5 bg-[#0b1b42]/[0.08]" />
                        <div className="flex items-center gap-0.5">
                          <TrendingUp size={9} className="text-emerald-500" />
                          <span className="text-[9px] font-bold text-emerald-600">{f.roi}</span>
                        </div>
                      </div>
                      <div className="flex justify-end mt-2">
                        <motion.button
                          whileTap={{ scale: 0.92 }}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-[9px] font-bold px-3 py-1.5 rounded text-white shadow-sm border border-[#f9df9f]/30 whitespace-nowrap relative overflow-hidden group"
                          style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #b38728)" }}
                        >
                          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                          <span className="relative z-10 flex items-center gap-1">
                            Enquire
                            <span className="relative flex items-center justify-center w-3 h-3 overflow-hidden">
                              <ArrowRight className="w-3 h-3 absolute -translate-x-[150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" strokeWidth={2.5} />
                              <ArrowRight className="w-3 h-3 absolute translate-x-0 opacity-100 group-hover:translate-x-[150%] group-hover:opacity-0 transition-all duration-300 ease-out" strokeWidth={2.5} />
                            </span>
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 overflow-y-auto scrollbar-hide relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="px-4 pt-3 pb-1.5 flex items-center gap-3"
        >
          <p className="text-[10px] font-bold text-[#0b1b42]/40 uppercase tracking-[0.15em] whitespace-nowrap">
            {filtered.length} Franchise{filtered.length !== 1 ? "s" : ""} found
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-[#0b1b42]/10 to-transparent" />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-1.5 px-2.5 pb-3"
        >
          {filtered.slice(0, visibleCount).map((f) => {
            const isActive = activeCard === f.id || selectedMarker === f.id;
            return (
              <motion.div
                key={`card-${f.id}`}
                variants={cardVariant}
                whileTap={{ scale: 0.975 }}
                onClick={() => handleCardTap(f.id)}
                layout
                className={clsx(
                  "relative cursor-pointer rounded transition-all duration-300 overflow-hidden border",
                  isActive
                    ? "bg-[#0b1b42]/[0.02] border-[#d4af37]/20 shadow-[0_8px_32px_rgba(11,27,66,0.06)]"
                    : "bg-white border-[#0b1b42]/[0.06] shadow-sm hover:shadow-md",
                )}
              >
                <motion.div
                  initial={false}
                  animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ type: "spring" as const, stiffness: 500, damping: 30 }}
                  className="absolute left-0 top-2.5 bottom-2.5 w-[3px] origin-top"
                  style={{ background: "linear-gradient(to bottom, #d4af37, #aa8922)" }}
                />
                <div className="p-3 pl-3.5">
                  <div className="flex gap-3">
                    <div
                      className={clsx(
                        "w-[56px] h-[56px] rounded overflow-hidden shrink-0 border-2 transition-all duration-300",
                        isActive
                          ? "border-[#d4af37]/50 shadow-[0_4px_16px_rgba(212,175,55,0.2)]"
                          : "border-[#0b1b42]/[0.08] shadow-sm",
                      )}
                    >
                      <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1.5">
                        <div className="min-w-0">
                          <h3
                            className={clsx(
                              "font-extrabold text-[13px] leading-tight truncate transition-colors duration-200",
                              "text-[#0a1128]",
                            )}
                          >
                            {f.name}
                          </h3>
                          <p className="text-[9px] text-[#0b1b42]/40 flex items-center gap-0.5 font-medium mt-0.5">
                            <MapPin className="w-2.5 h-2.5 shrink-0" />
                            <span className="truncate">{f.location}</span>
                          </p>
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.4 }}
                          onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                          className="p-1 shrink-0 -mt-0.5"
                        >
                          <Heart
                            className={clsx(
                              "w-4 h-4 transition-all duration-300",
                              favorites.has(f.id)
                                ? "fill-red-500 text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]"
                                : "text-[#0b1b42]/20",
                            )}
                          />
                        </motion.button>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className="text-[11px] font-extrabold text-[#0b1b42]">{f.investment}</span>
                        <span className="w-px h-3 bg-[#0b1b42]/[0.08]" />
                        <div className="flex items-center gap-0.5">
                          <TrendingUp size={10} className="text-emerald-500" />
                          <span className="text-[9px] font-bold text-emerald-600">{f.roi}</span>
                        </div>
                        <span className="w-px h-3 bg-[#0b1b42]/[0.08]" />
                        <div className="flex items-center gap-0.5">
                          <Calendar size={10} className="text-blue-500" />
                          <span className="text-[9px] font-bold text-blue-600">{f.breakeven}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pl-[68px]">
                    <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                      {f.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className={clsx(
                            "px-2 py-0.5 rounded text-[8px] font-bold border tracking-wide",
                            tagColors[tag] || "bg-[#0b1b42]/[0.03] text-[#0b1b42]/50 border-[#0b1b42]/[0.06]",
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        onClick={(e) => { e.stopPropagation(); setShowFranchiseView(true); }}
                        className="flex items-center gap-1 text-[9px] font-bold px-2 py-1.5 rounded border border-[#0b1b42]/[0.1] text-[#0b1b42]/70 hover:text-[#0b1b42] hover:border-[#0b1b42]/20 hover:bg-[#0b1b42]/[0.03] transition-all whitespace-nowrap"
                      >
                        <Eye size={11} strokeWidth={2.5} />
                        View
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="shrink-0 flex items-center gap-1 text-[9px] font-bold px-2.5 py-1.5 rounded text-white shadow-sm border border-[#f9df9f]/30 whitespace-nowrap relative overflow-hidden group"
                        style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #b38728)" }}
                      >
                        <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                        <span className="relative z-10 flex items-center gap-1">
                          Enquire
                          <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
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
          <div className="px-4 py-4 flex justify-center">
            <motion.button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center min-w-[140px] px-6 py-2.5 rounded text-[11px] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all uppercase tracking-widest disabled:opacity-80"
              style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
            >
              {isLoadingMore ? (
                <div className="flex gap-1.5 items-center">
                  {[0, 0.12, 0.24].map((delay, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 bg-white rounded-full"
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay }}
                    />
                  ))}
                </div>
              ) : (
                "Load More"
              )}
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
