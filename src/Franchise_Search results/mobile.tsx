import { useState, useMemo, useEffect, useRef } from "react";
import {
  Heart,
  MapPin,
  Search,
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
import SearchImage from "./SearchResults.png";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
};
const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 320, damping: 24 },
  },
};
const spring = { type: "spring" as const, stiffness: 400, damping: 28 };

function FloatingDot({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded pointer-events-none"
      style={{
        left: x, top: y, width: size, height: size,
        background: "radial-gradient(circle, rgba(212,175,55,0.35), transparent)",
      }}
      animate={{ y: [0, -10, 0], opacity: [0.15, 0.5, 0.15], scale: [1, 1.3, 1] }}
      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function FranchiseSearchResultsMobile() {
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

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((p) => p + 5);
      setIsLoadingMore(false);
    }, 600);
  };

  useEffect(() => { setVisibleCount(5); }, [searchQuery]);

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
      (f) => !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    return searchQuery ? m : m.slice(0, 3);
  }, [searchQuery]);

  const filtered = useMemo(
    () => franchises.filter((f) => {
      const q = searchQuery.toLowerCase();
      return !searchQuery || f.name.toLowerCase().includes(q) || f.location.toLowerCase().includes(q) || f.category.toLowerCase().includes(q);
    }),
    [searchQuery],
  );

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-56px)] bg-[#fafbfd] font-sans transition-colors duration-300 relative">
      <AnimatePresence>
        {showFranchiseView && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-[200] flex flex-col bg-white"
            style={{ top: "var(--top-bar-height, 0px)" }}
          >
            <div className="flex-1 overflow-y-auto scrollbar-hide bg-white relative z-0">
              <FranchiseHome isMobile={true} />
            </div>
            <div
              className="absolute top-0 left-0 right-0 z-[9999] flex items-center px-4 py-3 pointer-events-none bg-gradient-to-b from-black/60 via-black/30 to-transparent"
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowFranchiseView(false)}
                className="w-8 h-8 rounded flex items-center justify-center bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-all pointer-events-auto shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              >
                <ArrowLeft size={16} strokeWidth={2.5} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Header on Scroll */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[56px] left-0 right-0 z-50 bg-[#0a1128]/95 backdrop-blur-md shadow-md py-2 px-4"
          >
            <div className="relative w-full bg-white rounded-[4px] flex items-center p-1 shadow-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search franchise, industry, or location..."
                className="flex-1 bg-transparent border-none outline-none font-medium text-[#0a1128] text-[12px] py-1 pl-3 placeholder-[#0b1b42]/40"
              />
              <div className="flex gap-1 shrink-0 ml-1">
                <button
                  onClick={() => setShowMap(!showMap)}
                  className="w-8 h-8 flex items-center justify-center rounded-[4px] text-white transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, rgb(191, 149, 63), rgb(212, 175, 55))" }}
                >
                  <Map className="h-[14px] w-[14px]" />
                </button>
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-[4px] text-white relative overflow-hidden shrink-0"
                  style={{ background: "rgb(11, 27, 66)" }}
                >
                  <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)", transform: "translateX(200%)" }} />
                  <Search className="h-[14px] w-[14px] relative z-10" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative shrink-0 w-full z-40 bg-[#0a1128] overflow-hidden">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a1128 0%, #0b1b42 40%, #132254 70%, #0d1a3a 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid-m2" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid-m2)" />
            </svg>
          </div>

          <FloatingDot delay={0} x="8%" y="25%" size={5} />
          <FloatingDot delay={1} x="75%" y="15%" size={4} />
          <FloatingDot delay={0.5} x="55%" y="65%" size={3} />

          <div className="absolute inset-y-0 right-0 w-[50%] z-0 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 25%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)" }}>
            <img src={SearchImage} alt="Search results hero" className="w-full h-full object-cover object-left" />
          </div>
        </div>

        <div className="relative z-20 px-4 pt-4 pb-3.5 w-full flex flex-col gap-3">
          <div className="max-w-[62%]">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 mb-2 pb-1 border-b border-[#d4af37]/40"
            >
              <Store size={12} className="text-[#d4af37]" strokeWidth={2} />
              <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-[0.1em]">Franchise Discovery</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-white font-extrabold text-[24px] leading-[1.1] tracking-tight"
            >
              Find your perfect<br />
              <span className="text-[#d4af37]">franchise</span> opportunity.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative w-full z-30"
          >
            <div className={clsx(
              "absolute -inset-[1px] rounded-[4px] transition-opacity duration-500",
              isSearchFocused ? "opacity-100" : "opacity-0",
            )} style={{ background: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)" }} />

            <div className="relative w-full bg-white rounded-[4px] flex items-center p-1 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search franchise, industry, or location..."
                className="flex-1 bg-transparent border-none outline-none font-medium text-[#0a1128] text-[12px] py-1 pl-3 placeholder-[#0b1b42]/40"
              />
              <div className="flex gap-1 shrink-0 ml-1">
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setShowMap(!showMap)}
                  className="w-8 h-8 flex items-center justify-center rounded-[4px] text-white transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, rgb(191, 149, 63), rgb(212, 175, 55))" }}
                >
                  <Map className="h-[14px] w-[14px]" />
                </motion.button>
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-[4px] text-white relative overflow-hidden shrink-0"
                  style={{ background: "rgb(11, 27, 66)" }}
                >
                  <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)", transform: "translateX(200%)" }} />
                  <Search className="h-[14px] w-[14px] relative z-10" />
                </div>
              </div>
            </div>

            <AnimatePresence>
              {isSearchFocused && (searchQuery || suggestions.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={spring}
                  className="absolute top-full left-0 right-0 mt-2 rounded-[4px] overflow-hidden z-50 shadow-2xl"
                  style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", border: "1px solid rgba(11,27,66,0.06)" }}
                >
                  <div className="overflow-y-auto p-1 max-h-[240px] scrollbar-hide">
                    {suggestions.length > 0 ? (
                      suggestions.map((f, i) => (
                        <motion.div
                          key={f.id}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setSearchQuery(f.name)}
                          className="px-3 py-2 hover:bg-[#0b1b42]/[0.03] cursor-pointer rounded flex items-center gap-2.5 transition-all duration-200 mx-0.5 my-0.5 group"
                        >
                          <div className="w-8 h-8 rounded bg-[#0b1b42]/[0.03] group-hover:bg-[#d4af37]/10 flex items-center justify-center text-[#0b1b42]/25 group-hover:text-[#d4af37] shrink-0 border border-[#0b1b42]/[0.04] transition-all duration-300">
                            <Store size={13} strokeWidth={1.5} />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="truncate font-bold text-[12px] leading-tight text-[#0a1128]">{f.name}</span>
                            <span className="text-[9px] font-medium text-[#0b1b42]/35 flex items-center gap-0.5 mt-0.5">
                              <MapPin size={8} strokeWidth={2} />
                              <span className="truncate">{f.location}</span>
                            </span>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="p-3 text-center text-[10px] text-[#0b1b42]/35 font-medium">No franchises found</div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div ref={sentinelRef} className="w-full h-[1px]" />

      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isListCollapsed ? "100vh" : "34vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring" as const, stiffness: 280, damping: 28 }}
            className="w-full relative bg-gradient-to-br from-[#f4f6f9] via-[#eef1f6] to-[#e8ecf2] overflow-hidden flex-shrink-0 border-b border-[#0b1b42]/[0.05]"
          >
            <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="topo-m2" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#0b1b42" strokeWidth="0.5" />
                  <circle cx="75" cy="75" r="40" fill="none" stroke="#0b1b42" strokeWidth="0.4" />
                  <circle cx="75" cy="75" r="20" fill="none" stroke="#0b1b42" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topo-m2)" />
            </svg>
            <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,80 Q 100,120 200,60 T 400,130" fill="none" stroke="#0b1b42" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M 30,180 Q 150,150 250,200 T 400,170" fill="none" stroke="#0b1b42" strokeWidth="1.5" strokeDasharray="4 6" />
            </svg>
            <div className="absolute bottom-14 right-3 z-10">
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsListCollapsed(!isListCollapsed)}
                className="w-9 h-9 flex items-center justify-center rounded bg-white text-[#0b1b42] shadow-lg border border-[#0b1b42]/[0.06] transition-all relative overflow-hidden"
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
                  transition={{ delay: 0.2 + i * 0.04, type: "spring" as const, stiffness: 300, damping: 18 }}
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
                          className={clsx("absolute w-12 h-12 rounded border-2", `border-current ${meta.text} opacity-30`)}
                          animate={{ scale: [0.5, 1.4], opacity: [0.5, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.div
                          className={clsx("absolute w-12 h-12 rounded border", `border-current ${meta.text} opacity-15`)}
                          animate={{ scale: [0.8, 1.8], opacity: [0.3, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                        />
                      </>
                    )}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={clsx(
                        "w-9 h-9 rounded flex items-center justify-center transition-all duration-200",
                        isActive ? `${meta.bg} ${meta.glow} shadow-lg` : "bg-white border border-[#0b1b42]/[0.06] shadow-md",
                      )}
                    >
                      <Icon size={15} strokeWidth={2.5} className={isActive ? meta.text : "text-[#0b1b42]/35"} />
                    </motion.div>
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
                    className="rounded shadow-2xl z-40 pointer-events-auto overflow-hidden"
                    onClick={() => handleCardTap(f.id)}
                  >
                    <motion.div
                      className={clsx("h-[3px] w-full", meta.bg)}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                    <div className="p-3 bg-white border border-[#0b1b42]/[0.05]">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex gap-2.5 items-center min-w-0">
                          <div className="w-[48px] h-[48px] rounded overflow-hidden shrink-0 border border-[#0b1b42]/[0.06] shadow-sm">
                            <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-extrabold text-[13px] leading-tight truncate text-[#0a1128]">{f.name}</h3>
                            <p className="text-[9px] text-[#0b1b42]/35 flex items-center gap-0.5 font-medium mt-0.5">
                              <MapPin className="w-2.5 h-2.5 shrink-0 text-[#d4af37]/60" />
                              <span className="truncate">{f.location}</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0 ml-1">
                          <motion.button whileTap={{ scale: 1.4 }} onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }} className="p-1 rounded hover:bg-rose-50 transition-all">
                            <Heart className={clsx("w-3.5 h-3.5 transition-all duration-300", favorites.has(f.id) ? "fill-red-500 text-red-500" : "text-[#0b1b42]/15")} />
                          </motion.button>
                          <motion.button whileTap={{ scale: 0.85, rotate: 90 }} onClick={(e) => { e.stopPropagation(); setSelectedMarker(null); }} className="p-1 rounded hover:bg-[#0b1b42]/[0.04] text-[#0b1b42]/25 hover:text-[#0b1b42] transition-all">
                            <X className="w-3.5 h-3.5" />
                          </motion.button>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span className="text-[10px] font-bold text-[#0b1b42]">INV. {f.investment}</span>
                        <span className="text-[10px] font-semibold text-emerald-500">{f.roi}</span>
                        <span className="text-[10px] font-medium text-blue-600 flex items-center gap-0.5">
                          <MapPin size={9} className="text-blue-500" />
                          {f.location}
                        </span>
                      </div>
                      <div className="flex justify-end gap-2 mt-2">
                        <motion.button
                          whileTap={{ scale: 0.92 }}
                          onClick={(e) => { e.stopPropagation(); setShowFranchiseView(true); }}
                          className="w-7 h-7 flex items-center justify-center rounded bg-[#0b1b42]/[0.04] border border-[#0b1b42]/[0.06] text-[#0b1b42]/70 hover:bg-[#0b1b42] hover:text-white transition-all shadow-sm"
                          title="View Details"
                        >
                          <Eye size={14} strokeWidth={2.5} />
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.92 }}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-[9px] font-bold px-3 py-1.5 rounded text-white shadow-sm border border-[#f9df9f]/30 whitespace-nowrap relative overflow-hidden group"
                          style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #b38728)" }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
                          />
                          <span className="relative z-10 flex items-center gap-1">
                            Enquire <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
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

      <div className="flex-1 relative z-10 pb-16 pt-3">

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-1 px-2 pb-2"
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
                    ? "bg-gradient-to-r from-[#0b1b42]/[0.02] to-white border-[#d4af37]/25 shadow-[0_8px_28px_rgba(11,27,66,0.07)]"
                    : "bg-white border-[#0b1b42]/[0.05] shadow-sm hover:shadow-md",
                )}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none z-[1]"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
                  style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.03), transparent)", width: "50%" }}
                />
                <motion.div
                  initial={false}
                  animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ type: "spring" as const, stiffness: 500, damping: 28 }}
                  className="absolute left-0 top-2.5 bottom-2.5 w-[3px] origin-top z-[3]"
                  style={{ background: "linear-gradient(to bottom, #d4af37, #f3cd52, #aa8922)" }}
                />
                <div className="p-3 relative z-[2]">
                  <div className="flex gap-2">
                    <motion.div
                      animate={isActive ? { scale: 1.03 } : { scale: 1 }}
                      className="w-[64px] h-[64px] rounded overflow-hidden flex-shrink-0 border border-[#0b1b42]/[0.06] shadow-sm bg-white"
                    >
                      <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                    </motion.div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className={clsx(
                            "font-bold text-[13px] leading-tight truncate transition-colors duration-300",
                            isActive ? "text-[#0a1128]" : "text-[#0a1128]/90",
                          )}>
                            {f.name}
                          </h3>
                          <p className="text-[10px] text-[#0b1b42]/50 font-medium mt-0.5 truncate">
                            {f.category}
                          </p>
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.4 }}
                          onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                          className="p-1 shrink-0 -mt-0.5"
                        >
                          <Heart
                            className={clsx(
                              "w-3.5 h-3.5 transition-all duration-300",
                              favorites.has(f.id)
                                ? "fill-red-500 text-red-500 drop-shadow-[0_0_4px_rgba(239,68,68,0.4)]"
                                : "text-[#0b1b42]/20",
                            )}
                          />
                        </motion.button>
                      </div>
                      <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                        <span className="text-[10px] font-bold text-[#0b1b42]">INV. {f.investment}</span>
                        <span className="text-[10px] font-semibold text-emerald-500">{f.roi}</span>
                        <span className="text-[10px] font-medium text-blue-600 flex items-center gap-0.5">
                          <MapPin size={9} className="text-blue-500" />
                          {f.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pl-[76px]">
                    <div className="flex items-center gap-1 flex-wrap min-w-0">
                      {f.tags.slice(0, 1).map((tag) => (
                        <span key={tag} className={clsx("px-1.5 py-0.5 rounded text-[9px] font-bold border tracking-wide", tagColors[tag] || "bg-indigo-50 text-indigo-600 border-indigo-100")}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        onClick={(e) => { e.stopPropagation(); setShowFranchiseView(true); }}
                        className="w-7 h-7 flex items-center justify-center rounded bg-[#0b1b42]/[0.04] border border-[#0b1b42]/[0.06] text-[#0b1b42]/70 hover:bg-[#0b1b42] hover:text-white transition-all shadow-sm"
                        title="View Details"
                      >
                        <Eye size={14} strokeWidth={2.5} />
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="shrink-0 flex items-center gap-0.5 text-[10px] font-semibold px-3 py-1.5 rounded text-white border border-[#f9df9f]/40 whitespace-nowrap"
                        style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #b38728)" }}
                      >
                        Enquire
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
              whileHover={{ y: -2 }}
              className="flex items-center justify-center min-w-[130px] px-6 py-2.5 rounded text-[10px] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all uppercase tracking-[0.15em] disabled:opacity-80 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42, #132254)" }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)" }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
              />
              {isLoadingMore ? (
                <div className="flex gap-1.5 items-center">
                  {[0, 0.12, 0.24].map((delay, i) => (
                    <motion.div key={i} className="w-1.5 h-1.5 bg-[#d4af37] rounded" animate={{ y: [-3, 3, -3], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", delay }} />
                  ))}
                </div>
              ) : (
                <span className="relative z-10">Load More</span>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
