import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import {
  Bookmark,
  MapPin,
  Search,
  X,
  Store,
  Eye,
  ArrowLeft,
  Building2,
  Sparkles,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import clsx from "clsx";
import { franchises, getMeta, type Franchise } from "./data";
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
        className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded bg-red-50/60 hover:bg-red-100/80 text-red-500 hover:text-red-600 transition-all hover:rotate-90 duration-300"
      >
        <X className="w-3.5 h-3.5 text-red-500" strokeWidth={2.5} />
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
          <h4 className="font-semibold text-[#0a1128] text-[15px] leading-tight truncate mb-1">{franchise.name}</h4>
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
            <span className="text-[9px] font-semibold text-[#0b1b42]/35 uppercase tracking-wider mb-1">{item.label}</span>
            <span className={`text-[11px] font-semibold ${item.color} text-center leading-[1.2]`}>{item.value}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
          <motion.button
            onClick={(e) => { e.stopPropagation(); onView(); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 flex items-center justify-center rounded bg-[#0b1b42]/[0.04] border border-[#0b1b42]/[0.06] text-[#0b1b42]/70 hover:bg-[#0b1b42] hover:text-white transition-all shadow-sm"
            title="View Details"
          >
            <Eye size={16} strokeWidth={2.5} />
          </motion.button>

      </div>
      <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-4 h-4 border-r border-b border-[#0b1b42]/[0.06] rotate-45 [clip-path:polygon(100%_0,100%_100%,0_100%)]" style={{ background: "rgba(255,255,255,0.98)" }} />
    </motion.div>
  );
}

export default function FranchiseSearchResultsDesktop() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [dismissed, setDismissed] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(15);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showFranchiseView, setShowFranchiseView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!searchContainerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {

        setIsScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-53px 0px 0px 0px",
      }
    );

    observer.observe(searchContainerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLoadMore = useCallback(() => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 10);
      setIsLoadingMore(false);
    }, 600);
  }, []);

  useEffect(() => {
    setVisibleCount(15);
  }, [searchQuery]);

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) newFavs.delete(id);
      else newFavs.add(id);
      return newFavs;
    });
  }, []);

  const toggleDismiss = useCallback((id: number) => {
    setDismissed((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const handleMarkerClick = useCallback((id: number) => {
    setSelectedMarker((prev) => (prev === id ? null : id));
  }, []);

  const matchingFranchises = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return franchises.filter(
      (f) => {
        if (dismissed.has(f.id)) return false;
        if (!q) return true;
        return (
          f.name.toLowerCase().includes(q) ||
          f.location.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q)
        );
      }
    );
  }, [searchQuery, dismissed]);

  const displayFranchises = searchQuery.trim() ? matchingFranchises : matchingFranchises.slice(0, 4);

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(franchises.map((f) => f.category)))];
  }, []);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return franchises.filter(
      (f) => {
        if (dismissed.has(f.id)) return false;
        if (activeCategory !== "All" && f.category !== activeCategory) return false;
        if (!q) return true;
        return (
          f.name.toLowerCase().includes(q) ||
          f.location.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q)
        );
      }
    );
  }, [searchQuery, dismissed, activeCategory]);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isLoadingMore) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && visibleCount < filtered.length) {
        handleLoadMore();
      }
    });

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [handleLoadMore, isLoadingMore, visibleCount, filtered.length]);

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const getHeroImageStyles = () => {
    if (showFranchiseView) {
      return {
        wrapperClass: "absolute inset-y-0 right-0 w-[45%] z-0 overflow-hidden transition-all duration-500",
        maskStyle: {
          maskImage: "linear-gradient(to right, transparent 0%, black 25%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)",
        },
        imageClass: "w-full h-full object-cover object-center transition-all duration-500"
      };
    } else {
      return {
        wrapperClass: "absolute inset-y-0 right-0 w-fit z-0 overflow-hidden transition-all duration-500",
        maskStyle: {
          maskImage: "linear-gradient(to right, transparent 0%, black 15%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%)",
        },
        imageClass: "w-full h-full object-cover object-right transition-all duration-500"
      };
    }
  };

  const heroImg = getHeroImageStyles();

  return (
    <div
      className="w-full min-h-[calc(100vh-53px)] bg-[#f8f9fc] font-sans grid"
      style={{ gridTemplateColumns: '65% 35%', gridTemplateRows: 'auto 1fr' }}
    >

      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[53px] left-0 right-0 z-[999] flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          >
            <div className="bg-[#0a1128]/95 backdrop-blur-md py-1.5 px-6 flex items-center justify-center border-b border-[#0b1b42]/40">
              <div className="w-full max-w-[640px] relative">
                <div className="relative w-full bg-white rounded flex items-center p-1 shadow-md">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    placeholder="Search franchise, industry, or location..."
                    className="flex-1 bg-transparent border-none outline-none text-[13.5px] font-medium text-[#0a1128] placeholder-[#0b1b42]/35 py-1 pl-3"
                  />
                  <button
                    className="shrink-0 w-8 h-8 flex items-center justify-center rounded text-white transition-all relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
                  >
                    <Search className="h-3.5 w-3.5 relative z-10" />
                  </button>
                </div>

                <AnimatePresence>
                  {isSearchFocused && (searchQuery || displayFranchises.length > 0) && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="absolute top-[calc(100%+8px)] left-0 w-full rounded shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden z-[1000]"
                      style={{
                        background: "rgba(255,255,255,0.99)",
                        backdropFilter: "blur(28px)",
                        border: "1px solid rgba(11,27,66,0.08)",
                      }}
                    >
                      <div className="px-3 pt-2.5 pb-1.5 border-b border-[#0b1b42]/[0.04]">
                        <span className="text-[10px] font-semibold text-[#0b1b42]/30 uppercase tracking-[0.1em]">Suggestions</span>
                      </div>
                      <div className="overflow-y-auto p-1.5 max-h-[260px] scrollbar-hide flex flex-col gap-1">
                        {displayFranchises.length > 0 ? (
                          displayFranchises.map((f, i) => {
                            const fMeta = getMeta(f.category);
                            const FIcon = fMeta.icon;
                            return (
                              <motion.div
                                key={f.id}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                onClick={() => setSearchQuery(f.name)}
                                className="px-3 py-2.5 hover:bg-[#0b1b42]/[0.03] cursor-pointer rounded flex items-center gap-3 transition-all duration-200 group border border-transparent hover:border-[#0b1b42]/[0.05]"
                              >
                                <div className="w-9 h-9 rounded overflow-hidden border border-[#0b1b42]/[0.06] shrink-0 shadow-sm bg-white">
                                  <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col min-w-0 justify-center flex-1">
                                  <span className="truncate font-semibold text-[13px] leading-tight tracking-tight text-[#0a1128]">{f.name}</span>
                                  <span className="text-[10px] font-medium text-[#0b1b42]/40 flex items-center gap-1 mt-0.5">
                                    <MapPin size={9} strokeWidth={2} />
                                    <span className="truncate">{f.location}</span>
                                  </span>
                                </div>
                                <div className={clsx("flex items-center gap-1 px-2 py-1 rounded text-[10px] font-semibold shrink-0", fMeta.bg, fMeta.text)}>
                                  <FIcon size={11} strokeWidth={2.5} />
                                </div>
                              </motion.div>
                            );
                          })
                        ) : (
                          <div className="p-4 col-span-full text-center text-xs text-[#0b1b42]/35">No franchises found</div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sticky Category Filter */}
            <div className="bg-white/95 backdrop-blur-md border-b border-[#0b1b42]/[0.06] flex items-center px-6 py-2 shadow-sm">
              <div className="flex items-center gap-1.5 mr-2 text-[#0b1b42]/40 shrink-0">
                <Filter size={14} />
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  Filter:
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide ml-2">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`shrink-0 relative px-4 py-1.5 rounded-[4px] text-[11px] font-semibold tracking-normal transition-all border flex flex-col items-center justify-center cursor-pointer ${
                        isActive
                          ? "bg-[#0b1b42] text-[#d4af37] border-[#d4af37]/40 shadow-[0_2px_8px_rgba(212,175,55,0.15)]"
                          : "bg-white text-[#0b1b42]/70 border-[#0b1b42]/10 hover:bg-[#0b1b42]/[0.02]"
                      }`}
                    >
                      <span>{cat}</span>
                      {isActive && (
                        <span className="absolute bottom-0.5 inset-x-0 mx-auto w-5 h-[2px] rounded-full bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] shadow-[0_0_4px_rgba(212,175,55,0.6)]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className={clsx(
          "relative shrink-0 w-full z-30 border-b border-[#e2e6ef] transition-all duration-500",
          showFranchiseView ? "col-start-1 col-end-2 row-start-1 border-r" : "col-span-2 row-start-1"
        )}
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
          className={heroImg.wrapperClass}
          style={heroImg.maskStyle}
        >
          <img src={SearchImage} alt="Search results hero" className={heroImg.imageClass} />
        </div>

        <div className="relative z-50 px-8 pt-12 pb-10 max-w-[75%]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-1.5"
            >
              <div className="flex items-center gap-2 px-2.5 py-1 rounded border border-[#d4af37]/30 bg-[#d4af37]/10">
                <Sparkles size={12} className="text-[#d4af37]" strokeWidth={2.5} />
                <span className="text-[10px] font-semibold text-[#d4af37] uppercase tracking-[0.12em]">Franchise Discovery</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white font-semibold text-[28px] leading-tight tracking-[-0.02em] mb-1.5"
            >
              Find your perfect <br />
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
              className="relative w-full max-w-[680px] z-50"
            >

              <div
                className={clsx(
                  "absolute -inset-[1.5px] rounded transition-opacity duration-500",
                  isSearchFocused ? "opacity-100" : "opacity-0",
                )}
                style={{ background: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)" }}
              />
              <div className="relative w-full bg-white rounded flex items-center p-1 shadow-[0_6px_30px_rgba(0,0,0,0.25)]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  placeholder="Search franchise, industry, or location..."
                  className="flex-1 bg-transparent border-none outline-none text-[14px] font-medium text-[#0a1128] placeholder-[#0b1b42]/35 py-1.5 pl-3.5"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="shrink-0 w-9 h-9 flex items-center justify-center rounded text-white transition-all relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #0a1128, #0b1b42)" }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent)" }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                  />
                  <Search className="h-3.5 w-3.5 relative z-10" />
                </motion.button>
              </div>

              <AnimatePresence>
                {isSearchFocused && (searchQuery || displayFranchises.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute top-[calc(100%+8px)] left-0 w-[80%] max-w-[480px] rounded shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden z-[100]"
                    style={{
                      background: "rgba(255,255,255,0.99)",
                      backdropFilter: "blur(28px)",
                      border: "1px solid rgba(11,27,66,0.08)",
                    }}
                  >
                    <div className="px-3 pt-2.5 pb-1.5 border-b border-[#0b1b42]/[0.04]">
                      <span className="text-[10px] font-semibold text-[#0b1b42]/30 uppercase tracking-[0.1em]">Suggestions</span>
                    </div>
                    <div className="overflow-y-auto p-1.5 max-h-[260px] scrollbar-hide flex flex-col gap-1">
                      {displayFranchises.length > 0 ? (
                        displayFranchises.map((f, i) => {
                          const fMeta = getMeta(f.category);
                          const FIcon = fMeta.icon;
                          return (
                            <motion.div
                              key={f.id}
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.03 }}
                              onClick={() => setSearchQuery(f.name)}
                              className="px-3 py-2 hover:bg-[#0b1b42]/[0.03] cursor-pointer rounded flex items-center gap-3 transition-all duration-200 group border border-transparent hover:border-[#0b1b42]/[0.05]"
                            >
                              <div className="w-8 h-8 rounded overflow-hidden border border-[#0b1b42]/[0.06] shrink-0 shadow-sm bg-white">
                                <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex flex-col min-w-0 justify-center flex-1">
                                <span className="truncate font-semibold text-[12.5px] leading-tight tracking-tight text-[#0a1128]">{f.name}</span>
                                <span className="text-[9.5px] font-medium text-[#0b1b42]/40 flex items-center gap-1 mt-0.5">
                                  <MapPin size={8.5} strokeWidth={2} />
                                  <span className="truncate">{f.location}</span>
                                </span>
                              </div>
                              <div className={clsx("flex items-center gap-1 px-2 py-0.5 rounded text-[9.5px] font-semibold shrink-0", fMeta.bg, fMeta.text)}>
                                <FIcon size={10} strokeWidth={2.5} />
                              </div>
                            </motion.div>
                          );
                        })
                      ) : (
                        <div className="p-4 col-span-full text-center text-xs text-[#0b1b42]/35">No franchises found</div>
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
              className="flex items-center gap-2.5 mt-2.5 text-[9.5px]"
            >
              <span className="text-white/50 font-medium">Popular:</span>
              <div className="flex items-center gap-1.5">
                {["Food & Beverages", "Retail", "Education", "Healthcare", "+ More"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag === "+ More" ? "" : tag)}
                    className="px-2.5 py-1 rounded border border-white/15 text-white/70 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="col-span-2 row-start-2 z-30 bg-white/95 backdrop-blur-md border-b border-[#0b1b42]/[0.06] flex items-center px-6 py-2.5 shadow-sm">
          <div className="flex items-center gap-1.5 mr-2 text-[#0b1b42]/40 shrink-0">
            <Filter size={14} />
            <span className="text-[10px] uppercase tracking-widest font-bold">
              Filter:
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide ml-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 relative px-4 py-1.5 rounded-[4px] text-[11px] font-semibold tracking-normal transition-all border flex flex-col items-center justify-center cursor-pointer ${
                    isActive
                      ? "bg-[#0b1b42] text-[#d4af37] border-[#d4af37]/40 shadow-[0_2px_8px_rgba(212,175,55,0.15)]"
                      : "bg-white text-[#0b1b42]/70 border-[#0b1b42]/10 hover:bg-[#0b1b42]/[0.02]"
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <span className="absolute bottom-0.5 inset-x-0 mx-auto w-5 h-[2px] rounded-full bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] shadow-[0_0_4px_rgba(212,175,55,0.6)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative border-r border-[#e2e6ef] bg-gradient-to-br from-[#f0f3f8] via-[#eaeef5] to-[#e4e9f2] col-start-1 col-end-2 row-start-3 min-h-[950px] h-[950px]">

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
            <span className="text-[11px] font-semibold text-[#0b1b42]/60">{filtered.length} locations</span>
          </motion.div>
        </div>

        <div
          className={clsx(
          "flex flex-col bg-white z-20 shadow-[-8px_0_30px_rgba(0,0,0,0.04)] overflow-y-auto relative scrollbar-hide min-h-[950px] h-[950px]",
          showFranchiseView ? "col-start-2 col-end-3 row-start-1 row-span-3 min-h-[1100px] h-full" : "col-start-2 col-end-3 row-start-3 row-span-1"
        )}>
          <AnimatePresence mode="wait">
          {showFranchiseView ? (
            <motion.div
              key="franchise-view"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="h-full flex flex-col relative"
            >
              <div className="flex-1 bg-white relative z-0">
                <FranchiseHome isMobile={true} />
              </div>
              <div
                className="absolute top-0 left-0 right-0 z-[9999] flex items-center px-5 py-3.5 pointer-events-none bg-gradient-to-b from-black/60 via-black/30 to-transparent"
              >
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setShowFranchiseView(false)}
                  className="w-8 h-8 rounded flex items-center justify-center bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-all pointer-events-auto shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                >
                  <ArrowLeft size={16} strokeWidth={2.5} />
                </motion.button>
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

              <div className="flex-1">
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-6 gap-3 px-3 py-2"
                >
                  {(() => {
                    const renderItems: React.ReactNode[] = [];
                    const grouped = new Map<string, any[]>();
                    filtered.slice(0, visibleCount).forEach((f) => {
                      if (!grouped.has(f.category)) grouped.set(f.category, []);
                      grouped.get(f.category)!.push(f);
                    });

                    grouped.forEach((items, category) => {
                      // Category heading
                      renderItems.push(
                        <div key={`heading-${category}`} className="col-span-6 mt-7 mb-3 px-1">
                          <h2 className="text-[19px] font-semibold text-[#0a1128] tracking-tight">{category}</h2>
                        </div>
                      );

                      items.forEach((f, index) => {
                        const isActive = hoveredCard === f.id || selectedMarker === f.id;
                        const isFullRow = index === 0;
                        const isHalfRow = index === 1 || index === 2;
                        const isThirdRow = index >= 3;

                        renderItems.push(
                          <motion.div
                            key={`card-${f.id}`}
                            variants={fadeUp}
                            onMouseEnter={() => setHoveredCard(f.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => handleMarkerClick(f.id)}
                            whileHover={{
                              y: -4,
                              transition: { type: "spring", stiffness: 400, damping: 25 },
                            }}
                            className={clsx(
                              "relative cursor-pointer transition-all duration-300 rounded overflow-hidden flex flex-col group select-none",
                              isActive
                                ? "shadow-[0_8px_32px_rgba(10,17,40,0.15)] ring-1 ring-[#d4af37]/40 z-10"
                                : "shadow-[0_4px_16px_rgba(10,17,40,0.08)] hover:shadow-[0_6px_24px_rgba(10,17,40,0.12)] z-0",
                              isFullRow ? "col-span-6" : isHalfRow ? "col-span-3" : "col-span-2"
                            )}
                            style={{ background: "white" }}
                          >
                            {isFullRow && (
                              <div className="relative z-[2] flex-1 flex flex-col bg-white">
                                {/* Full-width hero image */}
                                <div className="relative w-full h-[220px] overflow-hidden bg-[#f5f5f5]">
                                  <img src={f.logo} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                  <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                  
                                  {/* Transparent icons - top right */}
                                  <div className="absolute top-4 right-4 flex items-center gap-4">
                                    <motion.button
                                      whileTap={{ scale: 1.3 }}
                                      onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                                      className="p-0 transition-transform hover:scale-110"
                                      title="Save"
                                    >
                                      <Bookmark
                                        className={clsx(
                                          "w-6 h-6 transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]",
                                          favorites.has(f.id)
                                            ? "fill-red-500 text-red-500"
                                            : "text-white",
                                        )}
                                      />
                                    </motion.button>
                                    <motion.button
                                      title="Not Interested"
                                      whileTap={{ scale: 1.3 }}
                                      onClick={(e) => { e.stopPropagation(); toggleDismiss(f.id); }}
                                      className="p-0 transition-transform hover:scale-110"
                                    >
                                      <X className="w-6 h-6 text-red-500 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] transition-colors" />
                                    </motion.button>
                                  </div>
                                  
                                  {/* Overlay content */}
                                  <div className="absolute bottom-4 left-5">
                                    <span className="text-[18px] font-semibold text-emerald-400 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">{f.roi}</span>
                                  </div>
                                  <div className="absolute bottom-4 right-5">
                                    <span className="text-[14px] font-semibold text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">INV. {f.investment}</span>
                                  </div>
                                </div>
                                
                                {/* Content below image */}
                                <div className="px-5 pt-4 pb-5 flex items-center justify-between gap-4">
                                  <div className="min-w-0 flex-1">
                                    <h3 className={clsx(
                                      "font-semibold text-[22px] leading-snug truncate transition-colors duration-300",
                                      isActive ? "text-[#1a1a2e]" : "text-[#1a1a2e]/90",
                                    )}>
                                      {f.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1.5">
                                      <MapPin size={14} className="text-[#c69a54]" />
                                      <span className="text-[14px] font-medium text-[#686868] truncate">{f.location}</span>
                                    </div>
                                  </div>
                                  <motion.button
                                    whileTap={{ scale: 0.92 }}
                                    onClick={(e) => { e.stopPropagation(); setShowFranchiseView(true); }}
                                    className="w-11 h-11 rounded-full bg-[#0b1b42] flex items-center justify-center shrink-0 shadow-md hover:bg-[#1a2b5e] transition-colors"
                                    title="View Details"
                                  >
                                    <Eye size={18} strokeWidth={2} className="text-white" />
                                  </motion.button>
                                </div>
                              </div>
                            )}

                            {isHalfRow && (
                              <div className="relative z-[2] flex-1 flex flex-col bg-white h-full">
                                {/* Cover image */}
                                <div className="relative w-full h-[160px] overflow-hidden bg-[#f5f5f5]">
                                  <img src={f.logo} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                  <div className="absolute inset-x-0 bottom-0 h-[70px] bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                                  
                                  <div className="absolute top-3 right-3 flex items-center gap-3">
                                    <motion.button
                                      whileTap={{ scale: 1.3 }}
                                      onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                                      className="p-0 hover:scale-110 transition-transform"
                                      title="Save"
                                    >
                                      <Bookmark
                                        className={clsx(
                                          "w-5 h-5 transition-all duration-300 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]",
                                          favorites.has(f.id)
                                            ? "fill-red-500 text-red-500"
                                            : "text-white",
                                        )}
                                      />
                                    </motion.button>
                                    <motion.button
                                      title="Not Interested"
                                      whileTap={{ scale: 1.3 }}
                                      onClick={(e) => { e.stopPropagation(); toggleDismiss(f.id); }}
                                      className="p-0 hover:scale-110 transition-transform"
                                    >
                                      <X className="w-5 h-5 text-red-500 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)] transition-colors" />
                                    </motion.button>
                                  </div>
                                  
                                  <div className="absolute bottom-3 left-4">
                                    <span className="text-[15px] font-semibold text-emerald-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">{f.roi}</span>
                                  </div>
                                </div>
                                
                                <div className="px-4 py-4 flex-1 flex flex-col justify-between gap-3">
                                  <div>
                                    <h3 className={clsx(
                                      "font-semibold text-[18px] leading-snug truncate transition-colors duration-300",
                                      isActive ? "text-[#1a1a2e]" : "text-[#1a1a2e]/90",
                                    )}>
                                      {f.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="text-[13px] font-semibold text-[#3d3d3d]">INV. {f.investment}</span>
                                      <span className="text-[10px] text-[#b0b0b0]">•</span>
                                      <span className="text-[12px] font-medium text-[#686868] truncate flex items-center gap-1">
                                        <MapPin size={12} className="text-[#c69a54]" />
                                        {f.location}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  <div className="flex justify-end">
                                    <motion.button
                                      whileTap={{ scale: 0.92 }}
                                      onClick={(e) => { e.stopPropagation(); setShowFranchiseView(true); }}
                                      className="p-0"
                                      title="View Details"
                                    >
                                      <Eye size={20} strokeWidth={2} className="text-[#3d3d3d]/50 hover:text-[#1a1a2e] transition-colors" />
                                    </motion.button>
                                  </div>
                                </div>
                              </div>
                            )}

                            {isThirdRow && (
                              <div className="relative z-[2] flex-1 flex flex-col bg-white h-full">
                                {/* Cover image */}
                                <div className="relative w-full h-[120px] overflow-hidden bg-[#f5f5f5]">
                                  <img src={f.logo} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                  <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                  
                                  <div className="absolute top-2.5 right-2.5 flex items-center gap-2.5">
                                    <motion.button
                                      whileTap={{ scale: 1.3 }}
                                      onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                                      className="p-0 hover:scale-110 transition-transform"
                                      title="Save"
                                    >
                                      <Bookmark
                                        className={clsx(
                                          "w-4 h-4 transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]",
                                          favorites.has(f.id)
                                            ? "fill-red-500 text-red-500"
                                            : "text-white",
                                        )}
                                      />
                                    </motion.button>
                                    <motion.button
                                      title="Not Interested"
                                      whileTap={{ scale: 1.3 }}
                                      onClick={(e) => { e.stopPropagation(); toggleDismiss(f.id); }}
                                      className="p-0 hover:scale-110 transition-transform"
                                    >
                                      <X className="w-4 h-4 text-red-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] transition-colors" />
                                    </motion.button>
                                  </div>
                                </div>
                                
                                <div className="px-3 pt-2.5 pb-3 flex-1 flex flex-col items-center text-center">
                                  <h3 className={clsx(
                                    "font-semibold text-[14px] leading-tight truncate w-full transition-colors duration-300",
                                    isActive ? "text-[#1a1a2e]" : "text-[#1a1a2e]/90",
                                  )}>
                                    {f.name}
                                  </h3>
                                  <span className="text-[11px] font-medium text-[#686868] mt-1 truncate w-full">INV. {f.investment}</span>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        );
                      });
                    });
                    return renderItems;
                  })()}
                </motion.div>

                {visibleCount < filtered.length && (
                  <div ref={loadMoreRef} className="px-4 py-8 flex justify-center w-full">
                    <div className="flex gap-1.5 items-center justify-center">
                      {[0, 0.12, 0.24].map((delay, i) => (
                        <motion.div key={i} className="w-1.5 h-1.5 bg-[#d4af37] rounded" animate={{ y: [-3, 3, -3], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", delay }} />
                      ))}
                    </div>
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
