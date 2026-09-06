import { useState, useMemo, useEffect, useRef, useCallback } from "react";

import BuildingBox from "../BuildingBox";
import LandBox from "../LandBox";
import AllBuildingBox from "../AllBuildingBox";
import MobileStickyFooter from "../components/commonfiles/Footer/MobileStickyFooter";
import ExploreHeaderTabs from "../components/commonfiles/Header/ExploreHeaderTabs";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  MapPin,
  Search,
  Building2,
  Map,
  ArrowLeft,
  Filter,
  ChevronLeft,
  ChevronRight,
  Layers,
  Bookmark,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { properties, getMeta, type Property } from "./data";
import SearchImage from "./BuySearchResults.png";


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

export default function BuySearchResultsMobile() {
  const [exploreTab, setExploreTab] = useState<"explore" | "commercial" | "business">("commercial");
  const navigate = useNavigate();

  const handleTabChange = (tab: string) => {
    setExploreTab(tab as "explore" | "commercial" | "business");
    if (tab === "franchise") navigate("/franchise-search");
    if (tab === "commercial") navigate("/buy-search");
    if (tab === "broker") navigate("/expert-brokers");
  };

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showMap, setShowMap] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(true);

  const [selectedPropertyForView, setSelectedPropertyForView] = useState<Property | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const stickyScrollRef = useRef<HTMLDivElement | null>(null);
  const mainScrollRef = useRef<HTMLDivElement | null>(null);

  const [showStickyLeft, setShowStickyLeft] = useState(false);
  const [showStickyRight, setShowStickyRight] = useState(true);
  const [showMainLeft, setShowMainLeft] = useState(false);
  const [showMainRight, setShowMainRight] = useState(true);

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(properties.map((p) => p.category)))];
  }, []);

  const checkScroll = (ref: React.RefObject<HTMLDivElement | null>, setLeft: (val: boolean) => void, setRight: (val: boolean) => void) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      setLeft(scrollLeft > 2);
      setRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 2);
    }
  };

  const centerCategoryTab = (
    ref: React.RefObject<HTMLDivElement | null>,
    cat: string,
    setLeft: (val: boolean) => void,
    setRight: (val: boolean) => void
  ) => {
    const container = ref.current;
    if (!container) return;
    const targetBtn = container.querySelector<HTMLButtonElement>(`[data-category="${CSS.escape(cat)}"]`);
    if (targetBtn) {
      const containerWidth = container.clientWidth;
      const btnLeft = targetBtn.offsetLeft;
      const btnWidth = targetBtn.clientWidth;
      const scrollTarget = btnLeft - (containerWidth / 2) + (btnWidth / 2);
      container.scrollTo({
        left: Math.max(0, scrollTarget),
        behavior: 'smooth',
      });
      setTimeout(() => {
        checkScroll(ref, setLeft, setRight);
      }, 350);
    }
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    centerCategoryTab(mainScrollRef, cat, setShowMainLeft, setShowMainRight);
    centerCategoryTab(stickyScrollRef, cat, setShowStickyLeft, setShowStickyRight);
  };

  useEffect(() => {
    const handleResize = () => {
      checkScroll(stickyScrollRef, setShowStickyLeft, setShowStickyRight);
      checkScroll(mainScrollRef, setShowMainLeft, setShowMainRight);
    };
    setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [categories, isSticky]);

  useEffect(() => {
    centerCategoryTab(mainScrollRef, activeCategory, setShowMainLeft, setShowMainRight);
    centerCategoryTab(stickyScrollRef, activeCategory, setShowStickyLeft, setShowStickyRight);
  }, [activeCategory, isSticky]);

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction === 'left' ? -150 : 150, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.boundingClientRect.top <= 97);
      },
      { threshold: [1], rootMargin: "-98px 0px 0px 0px" }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);





  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleViewProperty = useCallback((property: Property) => {
    setSelectedPropertyForView(property);
  }, []);

  const handleCardTap = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
    setSelectedMarker(id);
  };

  const suggestions = useMemo(() => {
    const m = properties.filter(
      (f) => !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    return searchQuery ? m : m.slice(0, 3);
  }, [searchQuery]);

  const filtered = useMemo(
    () => properties.filter((f) => {
      if (activeCategory !== "All" && f.category !== activeCategory) return false;
      const q = searchQuery.toLowerCase();
      return !searchQuery || f.name.toLowerCase().includes(q) || f.location.toLowerCase().includes(q) || f.category.toLowerCase().includes(q);
    }),
    [searchQuery, activeCategory],
  );

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-56px)] bg-[#fafbfd] font-sans transition-colors duration-300 relative pb-20">
      <div className="sticky top-[53px] z-40 w-full shadow-md">
        <ExploreHeaderTabs activeTab={exploreTab} onChange={handleTabChange} />
      </div>

      <AnimatePresence mode="wait">
        {selectedPropertyForView && (
          <motion.div
            key="property-view-mobile"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-[200] flex flex-col bg-white"
            style={{ top: "var(--top-bar-height, 0px)" }}
          >
            <div className="flex-1 overflow-y-auto scrollbar-hide bg-white relative z-0">
                {selectedPropertyForView.category === "Plot / Land" ? (
                  <LandBox viewModeProp="mobile" />
                ) : ["Warehouse", "Industrial"].includes(selectedPropertyForView.category) ? (
                  <AllBuildingBox viewModeProp="mobile" />
                ) : (
                  <BuildingBox viewModeProp="mobile" />
                )}
            </div>
            <div
              className="absolute top-0 left-0 right-0 z-[9999] flex items-center px-4 py-3 pointer-events-none bg-gradient-to-b from-black/60 via-black/30 to-transparent"
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedPropertyForView(null)}
                className="w-8 h-8 rounded flex items-center justify-center bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-all pointer-events-auto shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              >
                <ArrowLeft size={16} strokeWidth={2.5} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[97px] left-0 right-0 z-50 bg-[#0b1b42] shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col"
          >
            <div className="py-2 px-4 relative">
              <div className="relative w-full bg-white rounded-[4px] flex items-center p-1 shadow-md">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  placeholder="Search by property type, location, or keyword..."
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
            </div>

            <div className="w-full relative bg-[#f8f9fc] border-t border-[#0b1b42]/[0.08] flex items-center">
              {showStickyLeft && (
                <button
                  onClick={() => handleScroll(stickyScrollRef, 'left')}
                  className="absolute left-0 top-0 bottom-0 z-10 w-8 flex items-center justify-center bg-gradient-to-r from-[#f8f9fc] via-[#f8f9fc] to-transparent text-[#0b1b42] hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft size={18} strokeWidth={2.5} />
                </button>
              )}
              <div 
                ref={stickyScrollRef} 
                onScroll={() => checkScroll(stickyScrollRef, setShowStickyLeft, setShowStickyRight)}
                className="w-full overflow-x-auto scrollbar-hide px-4 py-2 flex items-center gap-2 relative"
              >
                <div className="flex items-center gap-1 mr-1 text-[#0b1b42]/40 shrink-0 font-medium">
                  <Filter size={12} strokeWidth={2.5} />
                  <span className="text-[9px] uppercase tracking-widest font-bold">
                    Filter:
                  </span>
                </div>

                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      data-category={cat}
                      onClick={() => handleSelectCategory(cat)}
                      className={`shrink-0 relative px-3 py-1 rounded-[4px] text-[10px] font-semibold tracking-normal transition-all flex flex-col items-center justify-center cursor-pointer ${
                        isActive
                          ? "bg-[#0b1b42] text-[#d4af37] shadow-[0_2px_8px_rgba(11,27,66,0.15)]"
                          : "bg-white text-[#0b1b42]/70 border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <span>{cat}</span>
                      {isActive && (
                        <span className="absolute bottom-0.5 inset-x-0 mx-auto w-3 h-[2px] rounded-full bg-[#d4af37]" />
                      )}
                    </button>
                  );
                })}
              </div>
              {showStickyRight && (
                <button
                  onClick={() => handleScroll(stickyScrollRef, 'right')}
                  className="absolute right-0 top-0 bottom-0 z-10 w-8 flex items-center justify-center bg-gradient-to-l from-[#f8f9fc] via-[#f8f9fc] to-transparent text-[#0b1b42] hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight size={18} strokeWidth={2.5} />
                </button>
              )}
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
                <pattern id="hero-grid-buy-m" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid-buy-m)" />
            </svg>
          </div>

          <FloatingDot delay={0} x="8%" y="25%" size={5} />
          <FloatingDot delay={1} x="75%" y="15%" size={4} />
          <FloatingDot delay={0.5} x="55%" y="65%" size={3} />

          <div className="absolute inset-y-0 right-0 w-[50%] z-0 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 25%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)" }}>
            <img src={SearchImage} alt="Buy search results hero" className="w-full h-full object-cover object-left" />
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
              <Building2 size={12} className="text-[#d4af37]" strokeWidth={2} />
              <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-[0.1em]">Property Discovery</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-white font-extrabold text-[24px] leading-[1.1] tracking-tight"
            >
              Find your ideal<br />
              <span className="text-[#d4af37]">commercial property</span>.
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
                placeholder="Search by property type, location, or keyword..."
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
                            <Building2 size={13} strokeWidth={1.5} />
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
                      <div className="p-3 text-center text-[10px] text-[#0b1b42]/35 font-medium">No listings found</div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className="w-full relative bg-[#f8f9fc] border-b border-[#0b1b42]/[0.08] flex items-center">
        {showMainLeft && (
          <button
            onClick={() => handleScroll(mainScrollRef, 'left')}
            className="absolute left-0 top-0 bottom-0 z-10 w-8 flex items-center justify-center bg-gradient-to-r from-[#f8f9fc] via-[#f8f9fc] to-transparent text-[#0b1b42] hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
        )}
        <div 
          ref={mainScrollRef} 
          onScroll={() => checkScroll(mainScrollRef, setShowMainLeft, setShowMainRight)}
          className="w-full overflow-x-auto scrollbar-hide px-4 py-2.5 flex items-center gap-2 relative"
        >
          <div className="flex items-center gap-1 mr-1 text-[#0b1b42]/40 shrink-0 font-medium">
            <Filter size={12} strokeWidth={2.5} />
            <span className="text-[9px] uppercase tracking-widest font-bold">
              Filter:
            </span>
          </div>

          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                data-category={cat}
                onClick={() => handleSelectCategory(cat)}
                className={`shrink-0 relative px-3 py-1 rounded-[4px] text-[10px] font-semibold tracking-normal transition-all flex flex-col items-center justify-center cursor-pointer ${
                  isActive
                    ? "bg-[#0b1b42] text-[#d4af37] shadow-[0_2px_8px_rgba(11,27,66,0.15)]"
                    : "bg-white text-[#0b1b42]/70 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <span className="absolute bottom-0.5 inset-x-0 mx-auto w-3 h-[2px] rounded-full bg-[#d4af37]" />
                )}
              </button>
            );
          })}
        </div>
        {showMainRight && (
          <button
            onClick={() => handleScroll(mainScrollRef, 'right')}
            className="absolute right-0 top-0 bottom-0 z-10 w-8 flex items-center justify-center bg-gradient-to-l from-[#f8f9fc] via-[#f8f9fc] to-transparent text-[#0b1b42] hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        )}
      </div>

      <div ref={sentinelRef} className="w-full h-[1px]" />

      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "130vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring" as const, stiffness: 280, damping: 28 }}
            className="w-full relative bg-gradient-to-br from-[#f4f6f9] via-[#eef1f6] to-[#e8ecf2] overflow-hidden border-b border-[#0b1b42]/[0.05]"
          >
            <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="topo-buy-m" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#0b1b42" strokeWidth="0.5" />
                  <circle cx="75" cy="75" r="40" fill="none" stroke="#0b1b42" strokeWidth="0.4" />
                  <circle cx="75" cy="75" r="20" fill="none" stroke="#0b1b42" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topo-buy-m)" />
            </svg>
            <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,80 Q 100,120 200,60 T 400,130" fill="none" stroke="#0b1b42" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M 30,180 Q 150,150 250,200 T 400,170" fill="none" stroke="#0b1b42" strokeWidth="1.5" strokeDasharray="4 6" />
            </svg>

            {filtered.map((f, i) => {
              const isActive = activeCard === f.id || selectedMarker === f.id;
              const meta = getMeta(f.category);
              const Icon = isActive ? meta.icon : Building2;
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
              {isCarouselOpen ? (
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 260 }}
                  className="fixed bottom-[68px] left-0 right-0 z-40 w-full bg-white/95 backdrop-blur-md rounded-t-[4px] shadow-[0_-4px_20px_rgba(10,17,40,0.1)] border-t border-[#0b1b42]/[0.06] flex flex-col max-h-[70vh]"
                >
                  <div 
                    className="w-full flex items-center justify-center py-1.5 cursor-pointer active:bg-gray-50 transition-colors shrink-0"
                    onClick={() => setIsCarouselOpen(false)}
                  >
                    <div className="w-8 h-[3px] rounded-full bg-[#0b1b42]/15" />
                  </div>
                  
                  <div className="w-full overflow-x-auto flex gap-2.5 px-4 scroll-px-4 pb-2 pt-0.5 snap-x scrollbar-hide items-start" style={{ scrollSnapType: 'x mandatory' }}>
                    {(() => {
                      const items: React.ReactNode[] = [];
                      let i = 0;
                      let groupType: 'big' | 'small' = 'big';
                      let bigCount = 1;
                      let smallGroupIndex = 0;
                      let cardIndex = 0;

                      while (i < filtered.length) {
                        if (groupType === 'big') {
                          const count = bigCount;
                          for (let j = 0; j < count && i < filtered.length; j++, i++) {
                            const f = filtered[i];
                            const isActive = activeCard === f.id || selectedMarker === f.id;
                            const idx = cardIndex++;
                            items.push(
                              <motion.div
                                key={`bcard-${f.id}`}
                                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: idx * 0.06, type: "spring", stiffness: 300, damping: 24 }}
                                whileTap={{ scale: 0.96, y: 2 }}
                                onClick={() => handleCardTap(f.id)}
                                className={clsx(
                                  "snap-start shrink-0 w-[62vw] max-w-[240px] relative cursor-pointer rounded-[4px] overflow-hidden flex flex-col select-none border transition-shadow duration-300",
                                  isActive
                                    ? "border-[#d4af37]/40 shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
                                    : "border-[#0b1b42]/[0.06] shadow-sm",
                                )}
                                style={{ background: "white" }}
                              >
                                <div className="relative w-full h-[100px] overflow-hidden bg-gray-100">
                                  <motion.img
                                    src={f.logo}
                                    alt={f.name}
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/70 via-[#0a1128]/10 to-transparent" />
                                  
                                  <div className="absolute top-1.5 right-1.5 flex items-center gap-1">
                                    <motion.button
                                      whileTap={{ scale: 1.4, rotate: 15 }}
                                      onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                                      className="p-0.5"
                                    >
                                      <Bookmark
                                        className={clsx(
                                          "w-4 h-4 transition-all duration-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]",
                                          favorites.has(f.id) ? "fill-[#d4af37] text-[#d4af37]" : "text-white/90"
                                        )}
                                      />
                                    </motion.button>
                                    <motion.button
                                      whileTap={{ scale: 1.3 }}
                                      onClick={(e) => { e.stopPropagation(); setIsCarouselOpen(false); }}
                                      className="p-0.5"
                                    >
                                      <X className="w-3.5 h-3.5 text-red-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" />
                                    </motion.button>
                                  </div>
                                  
                                  <div className="absolute bottom-1.5 left-2 right-2 flex items-end justify-between">
                                    <span className="text-[12px] font-semibold text-emerald-400 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">{f.price}</span>
                                    <span className="text-[9px] font-medium text-white/70 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">{f.area}</span>
                                  </div>
                                </div>
                                
                                <div className="px-2 py-1.5 flex items-center justify-between gap-1">
                                  <div className="min-w-0 flex-1">
                                    <h3 className="font-semibold text-[12px] leading-tight text-[#0a1128] truncate">{f.name}</h3>
                                    <span className="text-[9px] text-[#0a1128]/40 flex items-center gap-0.5 mt-px font-medium">
                                      <MapPin size={8} className="text-[#d4af37]" />
                                      {f.location}
                                    </span>
                                  </div>
                                  <motion.button
                                    whileTap={{ scale: 0.85, rotate: -10 }}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={(e) => { e.stopPropagation(); handleViewProperty(f); }}
                                    className="w-7 h-7 rounded-full bg-[#0b1b42] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(11,27,66,0.3)]"
                                    title="View Details"
                                  >
                                    <Eye size={12} strokeWidth={2.5} className="text-white" />
                                  </motion.button>
                                </div>
                              </motion.div>
                            );
                          }
                          bigCount = 4;
                          groupType = 'small';
                        } else {
                          const targetCount = smallGroupIndex === 0 ? 2 : smallGroupIndex === 1 ? 3 : 4;
                          const smallItems = filtered.slice(i, i + targetCount);
                          if (smallItems.length === 0) break;
                          const gridIdx = cardIndex++;
                          items.push(
                            <motion.div
                              key={`sgrid-${i}`}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: gridIdx * 0.06, type: "spring", stiffness: 280, damping: 22 }}
                              className={clsx(
                                "snap-start shrink-0 grid gap-1.5 self-stretch",
                                smallItems.length <= 2 ? "grid-cols-1" : "grid-cols-2"
                              )}
                            >
                              {smallItems.map((f, sIdx) => {
                                const isActive = activeCard === f.id || selectedMarker === f.id;
                                return (
                                  <motion.div
                                    key={`scard-${f.id}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: (gridIdx * 0.06) + (sIdx * 0.04), type: "spring", stiffness: 350, damping: 25 }}
                                    whileTap={{ scale: 0.94 }}
                                    onClick={() => handleCardTap(f.id)}
                                    className={clsx(
                                      "w-[100px] relative cursor-pointer rounded-[4px] overflow-hidden flex flex-col select-none border transition-shadow duration-300",
                                      isActive
                                        ? "border-[#d4af37]/30 shadow-[0_2px_12px_rgba(212,175,55,0.12)]"
                                        : "border-[#0b1b42]/[0.06] shadow-sm",
                                    )}
                                    style={{ background: "white" }}
                                  >
                                    <div className="relative w-full h-[50px] overflow-hidden bg-gray-100">
                                      <motion.img
                                        src={f.logo}
                                        alt={f.name}
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                        initial={{ scale: 1.15 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/50 to-transparent" />
                                      
                                      <div className="absolute top-0.5 right-0.5 flex items-center gap-0.5">
                                        <motion.button
                                          whileTap={{ scale: 1.5 }}
                                          onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                                          className="p-0.5"
                                        >
                                          <Bookmark
                                            className={clsx(
                                              "w-2.5 h-2.5 transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]",
                                              favorites.has(f.id) ? "fill-[#d4af37] text-[#d4af37]" : "text-white/80"
                                            )}
                                          />
                                        </motion.button>
                                        <motion.button
                                          whileTap={{ scale: 1.3 }}
                                          onClick={(e) => { e.stopPropagation(); setIsCarouselOpen(false); }}
                                          className="p-0.5"
                                        >
                                          <X className="w-2.5 h-2.5 text-red-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]" />
                                        </motion.button>
                                      </div>

                                      <div className="absolute bottom-0.5 left-1">
                                        <span className="text-[8px] font-semibold text-emerald-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">{f.price}</span>
                                      </div>
                                    </div>
                                    
                                    <div className="px-1.5 py-0.5 flex flex-col bg-white">
                                      <h3 className="font-semibold text-[8px] leading-tight text-[#0a1128] truncate w-full">{f.name}</h3>
                                      <span className="text-[7px] text-[#0a1128]/35 flex items-center gap-0.5 font-medium">
                                        <MapPin size={6} className="text-[#d4af37]" />
                                        <span className="truncate">{f.location}</span>
                                      </span>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </motion.div>
                          );
                          i += smallItems.length;
                          smallGroupIndex++;
                          groupType = 'big';
                        }
                      }
                      return items;
                    })()}
                  </div>
                </motion.div>
              ) : (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsCarouselOpen(true)}
                  className="fixed bottom-[88px] left-0 z-40 px-4 py-2.5 rounded-r-[4px] bg-[#0b1b42] text-white flex items-center gap-2 shadow-[4px_4px_15px_rgba(0,0,0,0.2)] border border-white/10 border-l-0"
                >
                  <Layers size={18} />
                  <span className="text-[11px] font-bold tracking-wide uppercase">Listings</span>
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!isCarouselOpen && selectedMarker !== null && (() => {
                const selectedProp = filtered.find(f => f.id === selectedMarker);
                if (!selectedProp) return null;
                const f = selectedProp;
                return (
                  <motion.div
                    key={`popup-${f.id}`}
                    initial={{ y: 60, opacity: 0, scale: 0.92 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 60, opacity: 0, scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 340, damping: 26 }}
                    className="fixed bottom-[88px] left-4 right-4 z-50 rounded-[4px] overflow-hidden bg-white border border-[#0b1b42]/[0.08] shadow-[0_-4px_24px_rgba(10,17,40,0.12)]"
                  >
                    <div className="flex">
                      <div className="relative w-[110px] h-[90px] shrink-0 overflow-hidden bg-gray-100">
                        <motion.img
                          src={f.logo}
                          alt={f.name}
                          className="w-full h-full object-cover"
                          draggable={false}
                          initial={{ scale: 1.15 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a1128]/5" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/50 to-transparent" />
                        
                        <motion.button
                          whileTap={{ scale: 1.4, rotate: 15 }}
                          onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                          className="absolute top-1.5 right-1.5 p-0.5"
                        >
                          <Bookmark
                            className={clsx(
                              "w-3.5 h-3.5 transition-all duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]",
                              favorites.has(f.id) ? "fill-[#d4af37] text-[#d4af37]" : "text-white/90"
                            )}
                          />
                        </motion.button>

                        <div className="absolute bottom-1.5 left-1.5">
                          <span className="text-[11px] font-semibold text-emerald-400 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">{f.price}</span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0 px-3 py-2 flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-[13px] leading-tight text-[#0a1128] truncate">{f.name}</h3>
                          <span className="text-[10px] text-[#0a1128]/40 flex items-center gap-0.5 mt-0.5 font-medium">
                            <MapPin size={9} className="text-[#d4af37] shrink-0" />
                            <span className="truncate">{f.location}</span>
                          </span>
                          {f.area && (
                            <span className="text-[9px] text-[#0b1b42]/30 font-medium mt-0.5 block">{f.area}</span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1.5">
                          <motion.button
                            whileTap={{ scale: 0.92 }}
                            onClick={() => handleViewProperty(f)}
                            className="flex-1 h-7 rounded-[4px] bg-[#0b1b42] flex items-center justify-center gap-1.5 shadow-[0_2px_8px_rgba(11,27,66,0.25)]"
                          >
                            <Eye size={11} strokeWidth={2.5} className="text-white" />
                            <span className="text-[10px] font-semibold text-white">View Details</span>
                          </motion.button>
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => setSelectedMarker(null)}
                            className="w-7 h-7 rounded-full flex items-center justify-center bg-red-50 border border-red-100"
                          >
                            <X size={13} strokeWidth={2.5} className="text-red-500" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>


      <MobileStickyFooter />
    </div>
  );
}
