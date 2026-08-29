import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import {
  Heart,
  MapPin,
  Search,
  ChevronRight,
  X,
  Store,
  Eye,
  ArrowLeft,
  TrendingUp,
  Clock,
  Building2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import clsx from "clsx";
import { franchises, getMeta, tagColors, type Franchise } from "./data";
import FranchiseHome from "../Franchise_Home";
import SearchImage from "./SearchResults.png";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
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

function MapPopup({
  franchise,
  onClose,
  onView,
}: {
  franchise: Franchise;
  onClose: () => void;
  onView: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, x: "-50%", scale: 0.88 }}
      animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
      exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.9 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      className="absolute bottom-[calc(100%+16px)] left-1/2 w-[300px] rounded shadow-2xl border border-[#0b1b42]/[0.08] p-4 z-50"
      style={{
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(28px) saturate(180%)",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #f3cd52, #d4af37, #b38728)", transformOrigin: "left" }}
      />
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded bg-[#0b1b42]/[0.04] hover:bg-[#0b1b42]/[0.08] text-[#0b1b42]/40 hover:text-[#0b1b42] transition-all hover:rotate-90 duration-300"
      >
        <X className="w-3.5 h-3.5" strokeWidth={2.5} />
      </button>
      <div className="flex items-center gap-2.5 mb-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-12 h-12 rounded overflow-hidden border border-[#0b1b42]/[0.08] flex-shrink-0 shadow-sm"
        >
          <img src={franchise.logo} alt={franchise.name} className="w-full h-full object-cover" />
        </motion.div>
        <div className="min-w-0 pr-6">
          <h4 className="font-bold text-[#0a1128] text-[15px] leading-tight truncate mb-1">{franchise.name}</h4>
          <p className="text-[12px] text-[#0b1b42]/50 flex items-center gap-1 font-medium">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#d4af37]" />
            <span className="truncate">{franchise.location}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {[
          { label: "Investment", value: franchise.investment, color: "text-[#d4af37]" },
          { label: "ROI", value: franchise.roi, color: "text-emerald-500" },
          { label: "Breakeven", value: franchise.breakeven, color: "text-blue-500" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.05 }}
            className="flex flex-col justify-center items-center p-2.5 rounded bg-[#0b1b42]/[0.02] border border-[#0b1b42]/[0.05] min-h-[56px]"
          >
            <span className="text-[9px] font-bold text-[#0b1b42]/35 uppercase tracking-wider mb-1">{item.label}</span>
            <span className={`text-[11px] font-extrabold ${item.color} text-center leading-[1.2]`}>{item.value}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
        <motion.button
          onClick={(e) => { e.stopPropagation(); onView(); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-8 h-8 flex items-center justify-center rounded border border-[#0b1b42]/[0.1] text-[#0b1b42]/60 hover:text-[#0b1b42] hover:bg-[#0b1b42]/[0.02] transition-all"
        >
          <Eye size={14} strokeWidth={2.5} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-1.5 text-[12px] font-bold text-white px-5 py-2 rounded transition-all group min-w-[100px] shadow-[0_4px_14px_rgba(212,175,55,0.3)] relative overflow-hidden"
          style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #b38728)" }}
        >
          <div className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative z-10 flex items-center gap-1">
            Enquire <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </motion.button>
      </div>
      <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-4 h-4 border-r border-b border-[#0b1b42]/[0.06] rotate-45 [clip-path:polygon(100%_0,100%_100%,0_100%)]" style={{ background: "rgba(255,255,255,0.98)" }} />
    </motion.div>
  );
}

function CardShimmer() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-[1]"
      initial={{ x: "-100%" }}
      animate={{ x: "200%" }}
      transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
      style={{
        background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.04), transparent)",
        width: "50%",
      }}
    />
  );
}

export default function FranchiseSearchResultsDesktop() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showFranchiseView, setShowFranchiseView] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = useCallback(() => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 5);
      setIsLoadingMore(false);
    }, 600);
  }, []);

  useEffect(() => {
    setVisibleCount(5);
  }, [searchQuery]);

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) newFavs.delete(id);
      else newFavs.add(id);
      return newFavs;
    });
  }, []);

  const handleMarkerClick = useCallback((id: number) => {
    setSelectedMarker((prev) => (prev === id ? null : id));
  }, []);

  
  const matchingFranchises = useMemo(() => {
    return franchises.filter(
      (f) => !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const displayFranchises = searchQuery ? matchingFranchises : matchingFranchises.slice(0, 4);

  
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

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  return (
    <div className="flex flex-row w-full h-[calc(100vh-72px)] min-h-[calc(100vh-72px)] bg-[#f8f9fc] overflow-hidden font-sans">

      
      <div className="w-[62%] h-full flex flex-col relative border-r border-[#e2e6ef] z-30 bg-[#f8f9fc]">

        
        <div
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          className="relative shrink-0"
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
                <pattern id="hero-grid-d" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid-d)" />
            </svg>
          </div>

          
          <FloatingParticle delay={0} x="8%" y="18%" size={6} />
          <FloatingParticle delay={1.2} x="78%" y="28%" size={4} />
          <FloatingParticle delay={0.6} x="48%" y="62%" size={5} />
          <FloatingParticle delay={2} x="22%" y="72%" size={3} />
          <FloatingParticle delay={1.5} x="68%" y="12%" size={5} />

          
          <div
            className="absolute inset-y-0 right-0 w-[42%] z-0 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 20%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%)",
            }}
          >
            <img src={SearchImage} alt="Search results hero" className="w-full h-full object-cover object-left" />
          </div>

          
          <div className="relative z-50 px-8 pt-6 pb-4 max-w-[62%]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#d4af37]/30 bg-[#d4af37]/10">
                <Sparkles size={13} className="text-[#d4af37]" strokeWidth={2.5} />
                <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-[0.12em]">Franchise Discovery</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white font-extrabold text-[46px] leading-[1.08] tracking-[-0.02em] mb-2"
            >
              Find your perfect<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)" }}
              >
                franchise
              </span>{" "}
              opportunity.
            </motion.h1>

            
            <motion.div
              ref={searchContainerRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative max-w-[480px] z-50"
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  placeholder="Search franchise name, industry, or location..."
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

              
              <AnimatePresence>
                {isSearchFocused && (searchQuery || displayFranchises.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute top-[calc(100%+8px)] left-0 right-0 rounded shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden z-[100]"
                    style={{
                      background: "rgba(255,255,255,0.99)",
                      backdropFilter: "blur(28px)",
                      border: "1px solid rgba(11,27,66,0.08)",
                    }}
                  >
                    <div className="px-3 pt-2.5 pb-1.5">
                      <span className="text-[10px] font-bold text-[#0b1b42]/30 uppercase tracking-[0.1em]">Suggestions</span>
                    </div>
                    <div className="overflow-y-auto px-1.5 pb-1.5 max-h-[260px] scrollbar-hide">
                      {displayFranchises.length > 0 ? (
                        displayFranchises.map((f, i) => {
                          const fMeta = getMeta(f.category);
                          const FIcon = fMeta.icon;
                          return (
                            <motion.div
                              key={f.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04 }}
                              onClick={() => setSearchQuery(f.name)}
                              className="px-3 py-3 hover:bg-[#0b1b42]/[0.03] cursor-pointer rounded flex items-center gap-3 transition-all duration-200 mx-0.5 my-0.5 group"
                            >
                              <div className="w-10 h-10 rounded overflow-hidden border border-[#0b1b42]/[0.06] shrink-0 shadow-sm">
                                <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex flex-col min-w-0 justify-center flex-1">
                                <span className="truncate font-semibold text-[13px] leading-tight tracking-tight text-[#0a1128]">{f.name}</span>
                                <span className="text-[10px] font-medium text-[#0b1b42]/40 flex items-center gap-1 mt-0.5">
                                  <MapPin size={9} strokeWidth={2} />
                                  <span className="truncate">{f.location}</span>
                                </span>
                              </div>
                              <div className={clsx("flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold", fMeta.bg, fMeta.text)}>
                                <FIcon size={11} strokeWidth={2.5} />
                              </div>
                            </motion.div>
                          );
                        })
                      ) : (
                        <div className="p-4 text-center text-xs text-[#0b1b42]/35">No franchises found</div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mt-3 text-[10px]"
            >
              <span className="text-white/50 font-medium">Popular:</span>
              <div className="flex items-center gap-2">
                {["Food & Beverages", "Retail", "Education", "Healthcare", "+ More"].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 rounded border border-white/15 text-white/70 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        
        <div className="flex-1 relative bg-gradient-to-br from-[#f0f3f8] via-[#eaeef5] to-[#e4e9f2]">
          
          <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo-d" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#0b1b42" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#0b1b42" strokeWidth="0.4" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#0b1b42" strokeWidth="0.3" />
                <circle cx="100" cy="100" r="20" fill="none" stroke="#0b1b42" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-d)" />
          </svg>
          <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
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
                transition={{ delay: 0.3 + i * 0.04, type: "spring" as const, stiffness: 280, damping: 18 }}
                className="absolute"
                style={{ top: `${f.lat}%`, left: `${f.lng}%`, transform: "translate(-50%, -50%)" }}
                onClick={() => handleMarkerClick(f.id)}
              >
                <motion.div
                  animate={isActive ? { scale: 1.35 } : { scale: 1 }}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 20 }}
                  className={clsx("relative flex flex-col items-center cursor-pointer", isActive ? "z-30" : "z-10")}
                >
                  {isActive && (
                    <>
                      <motion.div
                        className={clsx("absolute w-14 h-14 rounded border-2", `border-current ${meta.text} opacity-40`)}
                        animate={{ scale: [0.5, 1.4], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.div
                        className={clsx("absolute w-14 h-14 rounded border", `border-current ${meta.text} opacity-20`)}
                        animate={{ scale: [0.8, 1.8], opacity: [0.3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
                      />
                    </>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.15, y: -2 }}
                    className={clsx(
                      "w-10 h-10 rounded flex items-center justify-center transition-all duration-300",
                      isActive
                        ? `${meta.bg} ${meta.glow} shadow-lg`
                        : "bg-white border border-[#0b1b42]/[0.06] shadow-md hover:shadow-lg",
                    )}
                  >
                    <Icon size={18} strokeWidth={2.5} className={isActive ? meta.text : "text-[#0b1b42]/30"} />
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {selectedMarker === f.id && <MapPopup franchise={f} onClose={() => setSelectedMarker(null)} onView={() => setShowFranchiseView(true)} />}
                </AnimatePresence>
              </motion.div>
            );
          })}

          
          <div className="absolute bottom-4 right-4 flex flex-col gap-1.5 z-10">
            {["+", "−"].map((label) => (
              <motion.button
                key={label}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.08, y: -1 }}
                className="w-9 h-9 flex items-center justify-center rounded bg-white border border-[#0b1b42]/[0.06] text-[#0b1b42]/45 text-lg font-medium hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {label}
              </motion.button>
            ))}
          </div>

          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-2 rounded bg-white/90 backdrop-blur-md border border-[#0b1b42]/[0.06] shadow-lg"
          >
            <Building2 size={14} className="text-[#d4af37]" strokeWidth={2} />
            <span className="text-[11px] font-bold text-[#0b1b42]/60">{filtered.length} locations</span>
          </motion.div>
        </div>
      </div>

      
      <div className="w-[38%] h-full flex flex-col bg-white overflow-hidden z-20 shadow-[-8px_0_30px_rgba(0,0,0,0.04)]">
        <AnimatePresence mode="wait">
          {showFranchiseView ? (
            <motion.div
              key="franchise-view"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="h-full flex flex-col"
            >
              <div
                className="shrink-0 flex items-center gap-3 px-5 py-3.5 border-b border-[#0b1b42]/[0.06]"
                style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42, #132254)" }}
              >
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setShowFranchiseView(false)}
                  className="w-8 h-8 rounded flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <ArrowLeft size={16} strokeWidth={2.5} />
                </motion.button>
                <span className="text-[13px] font-bold text-white tracking-tight">Franchise Details</span>
                <div className="flex-1" />
                <motion.div
                  className="w-2 h-2 rounded bg-[#d4af37]"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide bg-white">
                <FranchiseHome isMobile={true} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col"
            >
              
              
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col py-2"
                >
                  {filtered.slice(0, visibleCount).map((f) => {
                    const isActive = hoveredCard === f.id || selectedMarker === f.id;
                    const meta = getMeta(f.category);
                    const FIcon = meta.icon;
                    return (
                      <motion.div
                        key={`card-${f.id}`}
                        variants={fadeUp}
                        onMouseEnter={() => setHoveredCard(f.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => handleMarkerClick(f.id)}
                        whileHover={{
                          y: -3,
                          transition: { type: "spring", stiffness: 400, damping: 25 },
                        }}
                        className={clsx(
                          "relative cursor-pointer transition-all duration-300 hover:z-10 rounded my-1 mx-3 border overflow-hidden group",
                          isActive
                            ? "bg-gradient-to-r from-[#faf8f0] to-white shadow-[0_8px_32px_rgba(212,175,55,0.1)] border-transparent"
                            : "bg-white border-transparent hover:shadow-[0_12px_40px_rgba(11,27,66,0.06)] hover:border-[#0b1b42]/[0.12]",
                        )}
                      >
                        <CardShimmer />

                        
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l"
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scaleY: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          style={{ background: "linear-gradient(to bottom, #d4af37, #b38728)" }}
                        />

                        <div className="p-3 relative z-[2]">
                          <div className="flex gap-2.5">
                            
                            <motion.div
                              animate={isActive ? { scale: 1.04 } : { scale: 1 }}
                              className="w-[80px] h-[80px] rounded overflow-hidden flex-shrink-0 border border-[#0b1b42]/[0.06] shadow-sm bg-[#f8f9fc]"
                            >
                              <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                            </motion.div>

                            
                            <div className="flex-1 min-w-0 flex flex-col">
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0">
                                  <h3 className={clsx(
                                    "font-bold text-[15px] leading-tight truncate transition-colors duration-300",
                                    isActive ? "text-[#0a1128]" : "text-[#0a1128]/85",
                                  )}>
                                    {f.name}
                                  </h3>
                                  <p className="text-[11px] text-[#0b1b42]/45 font-medium mt-0.5 truncate flex items-center gap-1">
                                    <FIcon size={11} strokeWidth={2} className="text-[#0b1b42]/30" />
                                    {f.category}
                                  </p>
                                </div>
                                <motion.button
                                  whileTap={{ scale: 1.4 }}
                                  whileHover={{ scale: 1.2 }}
                                  onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                                  className="p-1.5 flex-shrink-0 transition-colors rounded hover:bg-red-50"
                                >
                                  <Heart
                                    className={clsx(
                                      "w-4 h-4 transition-all duration-300",
                                      favorites.has(f.id)
                                        ? "fill-red-500 text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]"
                                        : "text-[#0b1b42]/15 hover:text-red-300",
                                    )}
                                  />
                                </motion.button>
                              </div>

                              
                              <div className="flex items-center gap-3 mt-2">
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0a1128]">
                                  <TrendingUp size={10} className="text-[#d4af37]" strokeWidth={2.5} />
                                  {f.investment}
                                </span>
                                <span className="text-[11px] font-semibold text-emerald-500">{f.roi}</span>
                                <span className="text-[10px] font-medium text-[#0b1b42]/40 flex items-center gap-0.5 ml-auto">
                                  <MapPin size={10} className="text-[#0b1b42]/30" />
                                  <span className="truncate max-w-[100px]">{f.location}</span>
                                </span>
                              </div>
                            </div>
                          </div>

                          
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#0b1b42]/[0.04] gap-2">
                            <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                              {f.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className={clsx("px-2.5 py-0.5 rounded text-[10px] font-semibold border", tagColors[tag] || "bg-indigo-50 text-indigo-600 border-indigo-200/30")}
                                >
                                  {tag}
                                </span>
                              ))}
                              {f.breakeven && (
                                <span className="text-[10px] font-medium text-[#0b1b42]/30 flex items-center gap-0.5 ml-1">
                                  <Clock size={9} strokeWidth={2} />
                                  {f.breakeven}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <motion.button
                                whileTap={{ scale: 0.93 }}
                                whileHover={{ scale: 1.04 }}
                                onClick={(e) => { e.stopPropagation(); setShowFranchiseView(true); }}
                                className="w-8 h-8 flex items-center justify-center rounded border border-[#0b1b42]/[0.1] text-[#0b1b42]/60 hover:text-[#0b1b42] hover:border-[#0b1b42]/20 hover:bg-[#0b1b42]/[0.02] transition-all"
                                title="View Details"
                              >
                                <Eye size={14} strokeWidth={2.5} />
                              </motion.button>
                              <motion.button
                                whileTap={{ scale: 0.93 }}
                                whileHover={{ scale: 1.04, boxShadow: "0 0 18px rgba(212,175,55,0.3)" }}
                                className="flex items-center gap-1 text-[11px] font-bold px-4 py-1.5 rounded text-white transition-all whitespace-nowrap relative overflow-hidden shadow-[0_2px_10px_rgba(212,175,55,0.2)]"
                                style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #b38728)" }}
                              >
                                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <span className="relative z-10">Enquire</span>
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
                      whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(10,17,40,0.18)" }}
                      className="flex items-center justify-center min-w-[160px] px-8 py-3 rounded text-[12px] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all uppercase tracking-[0.12em] disabled:opacity-80 relative overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42, #132254)" }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent)" }}
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
                      />
                      {isLoadingMore ? (
                        <div className="flex gap-1.5 items-center justify-center">
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

                
                {filtered.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-12 px-6"
                  >
                    <div className="w-16 h-16 rounded bg-[#0b1b42]/[0.04] flex items-center justify-center mb-2">
                      <Search size={24} className="text-[#0b1b42]/20" />
                    </div>
                    <p className="text-[14px] font-semibold text-[#0b1b42]/40 text-center">No franchises found</p>
                    <p className="text-[12px] text-[#0b1b42]/25 mt-1 text-center">Try adjusting your search or filters</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
