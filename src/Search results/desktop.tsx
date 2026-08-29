import { useState, useMemo, useEffect, useRef } from "react";
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
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import clsx from "clsx";
import { franchises, getMeta, tagColors, type Franchise } from "./data";
import FranchiseHome from "../Franchise_Home";
import SearchImage from "./SearchResults.png";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: "radial-gradient(circle, rgba(212,175,55,0.3), transparent)",
      }}
      animate={{
        y: [0, -15, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
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
}: {
  franchise: Franchise;
  onClose: () => void;
}) {
  const meta = getMeta(franchise.category);
  const Icon = meta.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, x: "-50%", scale: 0.9 }}
      animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
      exit={{ opacity: 0, y: 8, x: "-50%", scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="absolute bottom-[calc(100%+14px)] left-1/2 w-[300px] rounded-lg shadow-2xl border border-[#0b1b42]/[0.06] p-4 z-50"
      style={{
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(24px) saturate(180%)",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-lg overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #f3cd52, #d4af37, #b38728)", transformOrigin: "left" }}
      />
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-md bg-[#0b1b42]/[0.04] hover:bg-[#0b1b42]/[0.08] text-[#0b1b42]/40 hover:text-[#0b1b42] transition-all hover:rotate-90 duration-300"
      >
        <X className="w-4 h-4" strokeWidth={2.5} />
      </button>
      <div className="flex items-center gap-3.5 mb-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-12 h-12 rounded-lg overflow-hidden border border-[#0b1b42]/[0.08] flex-shrink-0 shadow-sm"
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
      <div className="grid grid-cols-3 gap-2 mb-4">
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
            className="flex flex-col justify-center items-center p-2 rounded-md bg-[#0b1b42]/[0.02] border border-[#0b1b42]/[0.05] min-h-[56px]"
          >
            <span className="text-[9px] font-bold text-[#0b1b42]/35 uppercase tracking-wider mb-1">{item.label}</span>
            <span className={`text-[11px] font-extrabold ${item.color} text-center leading-[1.2]`}>{item.value}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className={clsx("flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-bold shadow-sm", meta.bg, meta.text)}>
          <Icon size={14} strokeWidth={2.5} />
          {franchise.category}
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-1.5 text-[12px] font-bold text-white px-5 py-2 rounded-md transition-all group min-w-[100px] shadow-[0_4px_14px_rgba(212,175,55,0.3)] relative overflow-hidden"
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
      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
      style={{
        background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.04), transparent)",
        width: "50%",
      }}
    />
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);

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
      (f) => !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const displayFranchises = searchQuery ? matchingFranchises : matchingFranchises.slice(0, 3);

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
    <div className="flex flex-row w-full h-[calc(100vh-72px)] min-h-[calc(100vh-72px)] bg-[#fafbfd] overflow-hidden font-sans transition-colors duration-300">
      <div className="w-[65%] h-full flex flex-col relative border-r border-[#0b1b42]/[0.05] z-10 bg-[#fafbfd]">
        <div
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          className="relative overflow-hidden shrink-0 mx-4 mt-4 mb-2 rounded-[4px] shadow-sm"
          style={{ background: "linear-gradient(135deg, #0a1128 0%, #0b1b42 40%, #132254 70%, #0d1a3a 100%)" }}
        >
          <motion.div
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              background: useTransform(
                [spotlightX, spotlightY],
                ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(212,175,55,0.15), transparent 60%)`
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

          <FloatingParticle delay={0} x="10%" y="20%" size={6} />
          <FloatingParticle delay={1.2} x="80%" y="30%" size={4} />
          <FloatingParticle delay={0.6} x="50%" y="60%" size={5} />
          <FloatingParticle delay={2} x="25%" y="70%" size={3} />
          <FloatingParticle delay={1.5} x="70%" y="15%" size={5} />

          <div className="absolute inset-y-0 right-0 w-[45%] z-0 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 15%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%)" }}>
            <img src={SearchImage} alt="Search results hero" className="w-full h-full object-cover object-left" />
          </div>

          <div className="relative z-10 px-8 pt-8 pb-6 max-w-[65%]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded border border-[#d4af37]/30 bg-[#0a1128]/40"
            >
              <Store size={14} className="text-[#d4af37]" strokeWidth={2} />
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-[0.1em]">Franchise Discovery</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white font-extrabold text-[44px] leading-[1.1] tracking-tight mb-3"
            >
              Find your perfect<br />
              <span className="text-[#d4af37]">franchise</span> opportunity.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 text-[16px] font-medium mb-6"
            >
              Search franchises near you by name, industry, or location.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative max-w-[640px]"
            >
              <div className={clsx(
                "absolute -inset-[1px] rounded-full transition-opacity duration-500",
                isSearchFocused ? "opacity-100" : "opacity-0",
              )} style={{ background: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)" }} />
              <div className="relative w-full bg-white rounded-full flex items-center p-2 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                <div className="pl-4 pr-3 text-[#0b1b42]/40">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  placeholder="Search franchise name, industry, or location..."
                  className="flex-1 bg-transparent border-none outline-none text-[15px] font-medium text-[#0a1128] placeholder-[#0b1b42]/40"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="shrink-0 px-6 py-3 ml-2 flex items-center justify-center gap-2 rounded-full text-white text-[14px] font-bold transition-all relative overflow-hidden"
                  style={{ background: "#0b1b42" }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                  />
                  <Search className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Search</span>
                </motion.button>
              </div>

              <div className="flex items-center gap-3 mt-4 text-[12px]">
                <span className="text-white/60 font-medium">Popular searches:</span>
                <div className="flex items-center gap-2">
                  {["Food & Beverages", "Retail", "Education", "Healthcare", "+ More"].map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all font-medium"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              <AnimatePresence>
                {isSearchFocused && (searchQuery || displayFranchises.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute top-full left-0 right-0 mt-2 rounded-lg shadow-2xl overflow-hidden z-50"
                    style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(24px)", border: "1px solid rgba(11,27,66,0.06)" }}
                  >
                    <div className="overflow-y-auto p-1.5 max-h-[260px] scrollbar-hide">
                      {displayFranchises.length > 0 ? (
                        displayFranchises.map((f, i) => (
                          <motion.div
                            key={f.id}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                            onClick={() => setSearchQuery(f.name)}
                            className="px-3 py-2.5 hover:bg-[#0b1b42]/[0.03] cursor-pointer rounded-md flex items-center gap-3 transition-all duration-200 mx-0.5 my-0.5 group"
                          >
                            <div className="w-9 h-9 rounded-md bg-[#0b1b42]/[0.04] group-hover:bg-[#d4af37]/10 flex items-center justify-center text-[#0b1b42]/30 group-hover:text-[#d4af37] shrink-0 border border-[#0b1b42]/[0.05] transition-all duration-300">
                              <Store size={15} strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col min-w-0 justify-center">
                              <span className="truncate font-semibold text-[13px] leading-tight tracking-tight text-[#0a1128]">{f.name}</span>
                              <span className="text-[10px] font-medium text-[#0b1b42]/35 flex items-center gap-1 mt-0.5">
                                <MapPin size={9} strokeWidth={2} />
                                <span className="truncate">{f.location}</span>
                              </span>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="p-3 text-center text-xs text-[#0b1b42]/35">No franchises found</div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <div className="flex-1 relative bg-gradient-to-br from-[#f4f6f9] via-[#eef1f6] to-[#e8ecf2] overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
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
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
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
                transition={{ delay: 0.3 + i * 0.05, type: "spring" as const, stiffness: 300, damping: 18 }}
                className="absolute"
                style={{ top: `${f.lat}%`, left: `${f.lng}%`, transform: "translate(-50%, -50%)" }}
                onClick={() => handleMarkerClick(f.id)}
              >
                <motion.div
                  animate={isActive ? { scale: 1.4 } : { scale: 1 }}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 20 }}
                  className={clsx("relative flex flex-col items-center cursor-pointer", isActive ? "z-30" : "z-10")}
                >
                  {isActive && (
                    <>
                      <motion.div
                        className={clsx("absolute w-14 h-14 rounded-full border-2", `border-current ${meta.text} opacity-40`)}
                        animate={{ scale: [0.5, 1.4], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.div
                        className={clsx("absolute w-14 h-14 rounded-full border", `border-current ${meta.text} opacity-20`)}
                        animate={{ scale: [0.8, 1.8], opacity: [0.3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
                      />
                    </>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.15, y: -2 }}
                    className={clsx(
                      "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                      isActive ? `${meta.bg} ${meta.glow} shadow-lg` : "bg-white border border-[#0b1b42]/[0.06] shadow-md hover:shadow-lg",
                    )}
                  >
                    <Icon size={18} strokeWidth={2.5} className={isActive ? meta.text : "text-[#0b1b42]/35"} />
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {selectedMarker === f.id && <MapPopup franchise={f} onClose={() => setSelectedMarker(null)} />}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div className="absolute bottom-5 right-5 flex flex-col gap-1.5 z-10">
            {["+", "−"].map((label) => (
              <motion.button
                key={label}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.08, y: -1 }}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-[#0b1b42]/[0.06] text-[#0b1b42]/50 text-lg font-medium hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[35%] h-full flex flex-col bg-white overflow-hidden z-20 shadow-[-12px_0_40px_rgba(0,0,0,0.04)]">
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
                className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-[#0b1b42]/[0.06]"
                style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42, #132254)" }}
              >
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setShowFranchiseView(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <ArrowLeft size={16} strokeWidth={2.5} />
                </motion.button>
                <span className="text-[13px] font-bold text-white tracking-tight">Franchise Home</span>
                <div className="flex-1" />
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#d4af37]"
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
              <div className="shrink-0 flex items-center justify-between px-4 py-2.5 border-b border-[#0b1b42]/[0.05]">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-1 h-4 rounded-full"
                    style={{ background: "linear-gradient(to bottom, #d4af37, #b38728)" }}
                    animate={{ scaleY: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <p className="text-[11px] font-bold text-[#0b1b42]/40 uppercase tracking-[0.15em]">
                    {filtered.length} Result{filtered.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col py-1"
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
                          y: -2,
                          transition: { type: "spring", stiffness: 400, damping: 25 },
                        }}
                        className={clsx(
                          "relative cursor-pointer transition-all duration-300 hover:z-10 rounded-lg my-1.5 mx-2.5 border overflow-hidden",
                          isActive
                            ? "bg-gradient-to-r from-[#0b1b42]/[0.02] to-white shadow-[0_8px_30px_rgba(11,27,66,0.08)] border-[#d4af37]/30"
                            : "bg-white border-[#0b1b42]/[0.05] hover:shadow-[0_12px_40px_rgba(11,27,66,0.07)] hover:border-[#0b1b42]/[0.1]",
                        )}
                      >
                        <CardShimmer />
                        <motion.div
                          initial={false}
                          animate={{
                            scaleY: isActive ? 1 : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ type: "spring" as const, stiffness: 500, damping: 28 }}
                          className="absolute left-0 top-0 w-[3px] h-full origin-top rounded-r-full"
                          style={{ background: "linear-gradient(to bottom, #d4af37, #f3cd52, #aa8922)" }}
                        />
                        <div className="p-3 pl-3.5 relative z-[2]">
                          <div className="flex gap-3">
                            <motion.div
                              animate={isActive ? { scale: 1.03 } : { scale: 1 }}
                              className={clsx(
                                "w-[68px] h-[52px] rounded-md overflow-hidden flex-shrink-0 border transition-all duration-300",
                                isActive
                                  ? "border-[#d4af37]/40 shadow-[0_4px_16px_rgba(212,175,55,0.15)]"
                                  : "border-[#0b1b42]/[0.06] shadow-sm",
                              )}
                            >
                              <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0">
                                  <h3 className={clsx(
                                    "font-bold text-[13px] leading-tight truncate transition-colors duration-300",
                                    isActive ? "text-[#0a1128]" : "text-[#0a1128]/90",
                                  )}>
                                    {f.name}
                                  </h3>
                                  <p className="text-[10px] text-[#0b1b42]/35 flex items-center gap-1 font-medium mt-0.5">
                                    <MapPin className="w-3 h-3 flex-shrink-0 text-[#d4af37]/60" />
                                    <span className="truncate">{f.location}</span>
                                  </p>
                                </div>
                                <motion.button
                                  whileTap={{ scale: 1.4 }}
                                  whileHover={{ scale: 1.15 }}
                                  onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                                  className="p-1 flex-shrink-0 rounded-md hover:bg-rose-50 transition-colors"
                                >
                                  <Heart
                                    className={clsx(
                                      "w-4 h-4 transition-all duration-300",
                                      favorites.has(f.id)
                                        ? "fill-red-500 text-red-500 drop-shadow-[0_0_4px_rgba(239,68,68,0.4)]"
                                        : "text-[#0b1b42]/15 hover:text-red-300",
                                    )}
                                  />
                                </motion.button>
                              </div>
                              <div className="flex items-center gap-2 mt-1.5">
                                <span className="text-[11px] font-extrabold text-[#0b1b42]">{f.investment}</span>
                                <span className="w-px h-3 bg-[#0b1b42]/[0.06]" />
                                <div className="flex items-center gap-0.5">
                                  <TrendingUp size={10} className="text-emerald-500" />
                                  <span className="text-[10px] font-semibold text-emerald-600">{f.roi}</span>
                                </div>
                                <span className="w-px h-3 bg-[#0b1b42]/[0.06]" />
                                <div className="flex items-center gap-0.5">
                                  <Calendar size={10} className="text-blue-500" />
                                  <span className="text-[10px] font-semibold text-blue-600">{f.breakeven}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-2 gap-2 pl-[80px]">
                            <div className="flex items-center gap-1 flex-wrap min-w-0">
                              {f.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className={clsx("px-2 py-0.5 rounded text-[9px] font-semibold border", tagColors[tag] || "bg-[#0b1b42]/[0.03] text-[#0b1b42]/50 border-[#0b1b42]/[0.05]")}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <motion.button
                                whileTap={{ scale: 0.93 }}
                                whileHover={{ scale: 1.04, backgroundColor: "rgba(11,27,66,0.04)" }}
                                onClick={(e) => { e.stopPropagation(); setShowFranchiseView(true); }}
                                className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded-md border border-[#0b1b42]/[0.08] text-[#0b1b42]/60 hover:text-[#0b1b42] hover:border-[#0b1b42]/15 transition-all whitespace-nowrap"
                              >
                                <Eye size={12} strokeWidth={2.5} />
                                View
                              </motion.button>
                              <motion.button
                                whileTap={{ scale: 0.93 }}
                                whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(212,175,55,0.35)" }}
                                className="flex items-center gap-1 text-[10px] font-bold px-3 py-1.5 rounded-md text-white border border-[#f9df9f]/40 transition-all group whitespace-nowrap relative overflow-hidden"
                                style={{ background: "linear-gradient(90deg, #bf953f, #d4af37, #b38728)" }}
                              >
                                <motion.div
                                  className="absolute inset-0"
                                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
                                  animate={{ x: ["-100%", "200%"] }}
                                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
                                />
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
                      whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(10,17,40,0.2)" }}
                      className="flex items-center justify-center min-w-[140px] px-8 py-2.5 rounded-lg text-[11px] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all uppercase tracking-[0.15em] disabled:opacity-80 relative overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42, #132254)" }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)" }}
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
                      />
                      {isLoadingMore ? (
                        <div className="flex gap-1.5 items-center justify-center">
                          {[0, 0.12, 0.24].map((delay, i) => (
                            <motion.div key={i} className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" animate={{ y: [-3, 3, -3], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", delay }} />
                          ))}
                        </div>
                      ) : (
                        <span className="relative z-10">Load More</span>
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
