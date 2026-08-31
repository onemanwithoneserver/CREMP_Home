import { useState, useMemo, useEffect, useRef } from "react";
import {
  Heart,
  MapPin,
  Search,
  Store,
  Map,
  Eye,
  ArrowLeft,
  Maximize,
  Minimize,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { franchises, getMeta } from "./data";
import FranchiseHome from "../Franchise_Home";
import SearchImage from "./SearchResults.png";

const MAP_THEMES = {
  blue: {
    id: "blue",
    name: "Classic Blue",
    dot: "#0b1b42",
    bgGradient: "linear-gradient(135deg, #f0f3f8 0%, #eaeef5 50%, #e4e9f2 100%)",
    stroke: "#0b1b42",
  },
  gold: {
    id: "gold",
    name: "Royal Gold",
    dot: "#d4af37",
    bgGradient: "linear-gradient(135deg, #fcf9f2 0%, #f7f0e1 50%, #ede0c4 100%)",
    stroke: "#b38728",
  },
  dark: {
    id: "dark",
    name: "Midnight",
    dot: "#0a1128",
    bgGradient: "linear-gradient(135deg, #0a1128 0%, #0e1b3d 50%, #142758 100%)",
    stroke: "#ffffff",
  },
  emerald: {
    id: "emerald",
    name: "Emerald Green",
    dot: "#059669",
    bgGradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)",
    stroke: "#059669",
  },
  slate: {
    id: "slate",
    name: "Slate Modern",
    dot: "#475569",
    bgGradient: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
    stroke: "#475569",
  },
} as const;

type MapThemeKey = keyof typeof MAP_THEMES;

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

interface SearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  isSearchFocused: boolean;
  setIsSearchFocused: (val: boolean) => void;
  showMap: boolean;
  setShowMap: (val: boolean | ((prev: boolean) => boolean)) => void;
  suggestions: typeof franchises;
}

const FranchiseSearchHeader = ({
  searchQuery,
  setSearchQuery,
  isSearchFocused,
  setIsSearchFocused,
  showMap,
  setShowMap,
  suggestions,
}: SearchHeaderProps) => {
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

  return (
    <>
      <div ref={sentinelRef} className="w-full h-[1px] -mt-[1px]" />

      <div
        className={clsx(
          "sticky top-[56px] z-30 w-full flex flex-col transition-colors duration-300",
          isSticky ? "bg-[#0a1128]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)]" : "bg-transparent"
        )}
      >
        <div
          className={clsx(
            "w-full px-4 flex justify-center transition-all duration-300",
            isSticky ? "pt-2 pb-2 sm:py-2.5" : "pt-1 pb-1.5 sm:py-2"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative w-full max-w-[340px] z-50"
          >
            <div
              className={clsx(
                "absolute -inset-[1.5px] rounded transition-opacity duration-500",
                isSearchFocused ? "opacity-100" : "opacity-0",
              )}
              style={{ background: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)" }}
            />

            <div className="relative w-full bg-white rounded flex items-center p-0.5 sm:p-1 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search franchise, industry, or location..."
                className="flex-1 bg-transparent border-none outline-none text-[11.5px] sm:text-[12.5px] font-medium text-[#0a1128] placeholder-[#0b1b42]/35 pl-2.5 py-1.5"
              />
              <div className="flex gap-1 shrink-0 ml-1">
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setShowMap(!showMap)}
                  className={clsx(
                    "w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded transition-all duration-200",
                    showMap ? "text-white" : "bg-[#0b1b42]/[0.05] text-[#0b1b42]/40",
                  )}
                  style={showMap ? { background: "linear-gradient(135deg, #bf953f, #d4af37)" } : undefined}
                >
                  <Map className="h-3.5 w-3.5" />
                </motion.button>
                <div
                  className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded text-white"
                  style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
                >
                  <Search className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
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
                  className="absolute top-full left-0 right-0 mt-2 rounded overflow-hidden z-50 shadow-2xl"
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
    </>
  );
};

export default function FranchiseSearchResultsMobile() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showMap, setShowMap] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showFranchiseView, setShowFranchiseView] = useState(false);
  const [mapTheme, setMapTheme] = useState<MapThemeKey>("blue");
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);

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
    <div className="w-full min-h-screen text-[#0a1128] bg-[#fafbfd] font-sans flex flex-col relative">
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

      <div
        className="absolute top-0 left-0 w-full h-[320px] overflow-hidden pointer-events-none z-0"
        style={{ background: "linear-gradient(135deg, #0a1128 0%, #0b1b42 40%, #132254 70%, #0d1a3a 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]">
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

        <div
          className="absolute inset-y-0 right-0 w-[40%] sm:w-[45%] z-0 overflow-hidden opacity-80"
          style={{ maskImage: "linear-gradient(to right, transparent, black 30%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 30%)" }}
        >
          <img src={SearchImage} alt="Search results hero" className="w-full h-full object-cover object-left" />
        </div>
      </div>

      <div className="relative z-10 px-4 pt-5 pb-2 w-full sm:w-[90%] flex flex-col items-start text-left">
        <div className="max-w-[65%]">
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
            className="text-white font-extrabold text-[24px] leading-[1.1] tracking-tight mb-2"
          >
            Find your perfect<br />
            <span className="text-[#d4af37]">franchise</span> opportunity.
          </motion.h2>
        </div>
      </div>

      <FranchiseSearchHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearchFocused={isSearchFocused}
        setIsSearchFocused={setIsSearchFocused}
        showMap={showMap}
        setShowMap={setShowMap}
        suggestions={suggestions}
      />

      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMapFullscreen ? "100dvh" : "34vh",
              opacity: 1
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring" as const, stiffness: 280, damping: 28 }}
            className={clsx(
              "w-full overflow-hidden flex-shrink-0 border-b border-[#0b1b42]/[0.05] transition-colors duration-500",
              isMapFullscreen ? "fixed inset-0 z-[150]" : "relative"
            )}
            style={{ background: MAP_THEMES[mapTheme].bgGradient }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="topo-m2" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <circle cx="75" cy="75" r="60" fill="none" stroke={MAP_THEMES[mapTheme].stroke} strokeWidth="0.5" strokeOpacity="0.07" />
                  <circle cx="75" cy="75" r="40" fill="none" stroke={MAP_THEMES[mapTheme].stroke} strokeWidth="0.4" strokeOpacity="0.06" />
                  <circle cx="75" cy="75" r="20" fill="none" stroke={MAP_THEMES[mapTheme].stroke} strokeWidth="0.3" strokeOpacity="0.05" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topo-m2)" />
            </svg>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M -50,60 Q 100,90 200,50 T 400,100" fill="none" stroke={MAP_THEMES[mapTheme].stroke} strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.06" />
              <path d="M 25,150 Q 125,125 225,175 T 400,140" fill="none" stroke={MAP_THEMES[mapTheme].stroke} strokeWidth="1.5" strokeDasharray="4 5" strokeOpacity="0.05" />
            </svg>
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
                          className={clsx("absolute w-12 h-12 rounded border-2", `border-current ${meta.text} opacity-40`)}
                          animate={{ scale: [0.5, 1.4], opacity: [0.6, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.div
                          className={clsx("absolute w-12 h-12 rounded border", `border-current ${meta.text} opacity-20`)}
                          animate={{ scale: [0.8, 1.8], opacity: [0.3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
                        />
                      </>
                    )}
                    <motion.div
                      whileHover={{ scale: 1.15, y: -2 }}
                      className={clsx(
                        "w-8 h-8 rounded flex items-center justify-center transition-all duration-300 relative",
                        isActive
                          ? `${meta.bg} ${meta.glow} shadow-lg scale-110 z-10`
                          : "bg-white border border-[#0b1b42]/[0.06] shadow-md hover:shadow-lg",
                      )}
                    >
                      <Icon size={14} strokeWidth={2.5} className={isActive ? meta.text : "text-[#0b1b42]/30"} />
                    </motion.div>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="mt-2.5 px-2.5 py-1 rounded bg-[#0b1b42] text-white text-[10px] font-bold shadow-xl whitespace-nowrap flex items-center gap-1 z-40 border border-white/10"
                      >
                        <span>{f.name}</span>
                        <span className="text-[#d4af37] font-extrabold">{f.investment}</span>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
            <AnimatePresence>
              {selectedMarker && (() => {
                const f = filtered.find((item) => item.id === selectedMarker);
                if (!f) return null;
                const meta = getMeta(f.category);
                return (
                  <motion.div
                    key={`popup-${f.id}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={spring}
                    className="absolute bottom-2 left-2 right-14 z-20 bg-white/95 backdrop-blur-md rounded p-2.5 shadow-[0_8px_30px_rgba(11,27,66,0.12)] border border-[#0b1b42]/[0.08]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded overflow-hidden border border-[#0b1b42]/[0.08] shrink-0 bg-slate-50">
                        <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-[12px] text-[#0a1128] truncate">{f.name}</span>
                          <span className={clsx("px-1.5 py-0.2 rounded text-[8px] font-bold", meta.bg, meta.text)}>
                            {f.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5 text-[10px]">
                          <span className="font-bold text-[#0b1b42]">{f.investment}</span>
                          <span className="text-emerald-500 font-semibold">{f.roi}</span>
                          <span className="text-[#0b1b42]/40 truncate">{f.location}</span>
                        </div>
                      </div>
                      <div className="flex gap-1 shrink-0">
                        <motion.button
                          whileTap={{ scale: 0.92 }}
                          onClick={(e) => { e.stopPropagation(); setShowFranchiseView(true); }}
                          className="w-7 h-7 flex items-center justify-center rounded bg-[#0b1b42]/[0.04] border border-[#0b1b42]/[0.06] text-[#0b1b42]/70 hover:bg-[#0b1b42] hover:text-white transition-all shadow-sm"
                          title="View Details"
                        >
                          <Eye size={14} strokeWidth={2.5} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 p-1.5 bg-white/90 backdrop-blur-md rounded shadow-md border border-[#0b1b42]/[0.06]">
                {(Object.keys(MAP_THEMES) as MapThemeKey[]).map((key) => {
                  const theme = MAP_THEMES[key];
                  return (
                    <motion.button
                      key={theme.id}
                      whileTap={{ scale: 0.85 }}
                      onClick={(e) => { e.stopPropagation(); setMapTheme(key); }}
                      className={clsx(
                        "w-4 h-4 rounded-full transition-all flex items-center justify-center",
                        mapTheme === key ? "ring-2 ring-[#0b1b42] scale-110 shadow-sm" : "opacity-60"
                      )}
                      style={{ background: theme.dot }}
                    />
                  );
                })}
              </div>
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => setIsMapFullscreen((prev) => !prev)}
                className="w-8 h-8 ml-auto flex items-center justify-center rounded bg-white border border-[#0b1b42]/[0.06] text-[#0b1b42]/45 text-lg shadow-md"
              >
                {isMapFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full flex-1 px-2 pt-2 pb-6 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-1"
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
                  initial={false}
                  animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ type: "spring" as const, stiffness: 500, damping: 28 }}
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4af37] via-[#f3cd52] to-[#d4af37] rounded-l origin-top"
                />
                <div className="p-3">
                  <div className="flex gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 rounded overflow-hidden border border-[#0b1b42]/[0.06] shrink-0 bg-slate-50 relative group"
                    >
                      <img src={f.logo} alt={f.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
              className="flex items-center justify-center min-w-[130px] px-6 py-2.5 rounded text-[10px] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all uppercase tracking-[0.15em] relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42, #132254)" }}
            >
              <span className="relative z-10">{isLoadingMore ? "Loading..." : "Load More"}</span>
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
