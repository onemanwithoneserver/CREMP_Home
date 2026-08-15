import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import clsx from "clsx";
import {
  ChevronRight,
  ChevronDown,
  Globe2,
  MapPin,
  Navigation,
  Sparkles,
  Building2,
  Zap,
  LayoutGrid,
} from "lucide-react";
import { franchiseNetworkData, type CityNode } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import mapBg from "../../assets/map_bg.png";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.08, 1],
    opacity: [0.2, 0.5, 0.2],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FranchiseNetworkDesktop() {
  const [hoveredCity, setHoveredCity] = useState<CityNode | null>(null);
  const [activeCity, setActiveCity] = useState<CityNode>(
    franchiseNetworkData.cities[0],
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="w-full px-6 py-16 relative overflow-hidden rounded-[4px]">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[140px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#3b82f6]/10 blur-[140px] dark:bg-[#3b82f6]/15"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
      <SectionHeader
        overline={franchiseNetworkData.sectionLabel}
        title={franchiseNetworkData.title}
        subtitle={franchiseNetworkData.subtitle}
        align="center"
      />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {franchiseNetworkData.stats.map((stat, idx) => {
            const Icon = stat.icon;
            const bgColors = [
              "bg-[#0f9d58]", 
              "bg-[#8a2be2]", 
              "bg-[#f4b400]", 
              "bg-[#0088cc]", 
            ];
            const pillColors = [
              "bg-[#0f9d58]/10 text-[#0f9d58]",
              "bg-[#8a2be2]/10 text-[#8a2be2]",
              "bg-[#f4b400]/10 text-[#f4b400]",
              "bg-[#0088cc]/10 text-[#0088cc]",
            ];
            
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="relative flex items-center p-4 rounded-[12px] bg-white dark:bg-[#0b1b42]/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 gap-4 group border border-gray-100/80 dark:border-white/5"
              >
                <div
                  className={clsx(
                    "w-16 h-16 rounded-[12px] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300",
                    bgColors[idx]
                  )}
                >
                  <Icon size={26} strokeWidth={2} />
                </div>
                
                <div className="flex flex-col flex-1 min-w-0 items-start">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                    {stat.label}
                  </span>
                  <div className="text-[28px] font-black text-[#0a1128] dark:text-white tracking-tight leading-none mb-2">
                    {stat.value}
                  </div>
                  <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-[4px] whitespace-nowrap", pillColors[idx])}>
                    {stat.change}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Panel */}
          <div className="lg:col-span-7 relative min-h-[580px] bg-[#070d1e] rounded-[4px] border border-gray-800/80 overflow-hidden shadow-2xl flex flex-col p-6 group">
            <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-luminosity overflow-hidden transition-opacity duration-700 group-hover:opacity-70">
              <img
                src={mapBg}
                alt="Expansion Map Background"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-[#070d1e]/40 to-[#070d1e]/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070d1e]/90 via-transparent to-transparent" />
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70">
              <defs>
                <linearGradient id="networkGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#d4af37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <g filter="url(#glow)">
                <path d="M 44% 62% Q 42% 69% 40% 76%" stroke="url(#networkGold)" strokeWidth="1.5" strokeDasharray="4 6" fill="none" className="animate-[dash_30s_linear_infinite]" />
                <path d="M 44% 62% Q 34% 59% 24% 56%" stroke="url(#networkGold)" strokeWidth="1.5" strokeDasharray="4 6" fill="none" className="animate-[dash_30s_linear_infinite]" />
                <path d="M 24% 56% Q 30% 42% 37% 28%" stroke="url(#networkGold)" strokeWidth="1.5" strokeDasharray="4 6" fill="none" className="animate-[dash_30s_linear_infinite]" />
                <path d="M 44% 62% Q 58% 55% 72% 48%" stroke="url(#networkGold)" strokeWidth="1.5" strokeDasharray="4 6" fill="none" className="animate-[dash_30s_linear_infinite]" />
                <path d="M 44% 62% Q 45% 71% 47% 80%" stroke="url(#networkGold)" strokeWidth="1.5" strokeDasharray="4 6" fill="none" className="animate-[dash_30s_linear_infinite]" />
              </g>
            </svg>

            <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5 px-3.5 py-2 bg-[#0b1b42]/90 backdrop-blur-xl border border-[#d4af37]/40 rounded-[2px] shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <Globe2 size={16} className="text-[#d4af37] animate-spin-slow" />
                <span className="text-[11px] font-black text-white uppercase tracking-widest">
                  Live National Network
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse ml-1" />
              </div>

              <div className="flex items-center gap-3 bg-[#0b1b42]/80 backdrop-blur-xl px-4 py-2 rounded-[4px] border border-gray-700/60 shadow-lg">
                {franchiseNetworkData.legend.map((l) => (
                  <div key={l.status} className="flex items-center gap-2 text-[11px] text-gray-200 font-bold tracking-wide">
                    <span className={clsx("w-2.5 h-2.5 rounded-full shadow-sm", l.bg)} />
                    <span className="hidden sm:inline">{l.label.split("(")[0]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 z-20 mt-[80px]">
              {franchiseNetworkData.cities.map((city) => {
                const isSelected = activeCity.id === city.id;
                const isHovered = hoveredCity?.id === city.id;

                const nodeColor =
                  city.status === "active"
                    ? "bg-emerald-500 border-emerald-300 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    : city.status === "expansion"
                      ? "bg-[#d4af37] border-amber-200 text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      : "bg-blue-500 border-blue-300 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]";

                return (
                  <div
                    key={city.id}
                    style={{ top: city.top, left: city.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                    onClick={() => setActiveCity(city)}
                  >
                    <div
                      className={clsx(
                        "absolute -inset-3 rounded-full opacity-40 animate-ping pointer-events-none",
                        city.status === "active"
                          ? "bg-emerald-400"
                          : city.status === "expansion"
                            ? "bg-[#d4af37]"
                            : "bg-blue-400",
                      )}
                      style={{ animationDuration: "3s" }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      className={clsx(
                        "relative w-8 h-8 rounded-full flex items-center justify-center border-2 backdrop-blur-md transition-all duration-300",
                        isSelected
                          ? "ring-4 ring-white/20 scale-125 z-40"
                          : "z-30",
                        nodeColor.includes("emerald")
                          ? "bg-[#052e16]/90 border-emerald-400 text-emerald-300"
                          : "",
                        nodeColor.includes("d4af37")
                          ? "bg-[#382600]/90 border-[#d4af37] text-[#d4af37]"
                          : "",
                        nodeColor.includes("blue")
                          ? "bg-[#0f172a]/90 border-blue-400 text-blue-300"
                          : "",
                      )}
                    >
                      <MapPin size={14} strokeWidth={2.5} className="drop-shadow-md" />
                    </motion.div>

                    <div
                      className={clsx(
                        "absolute left-1/2 -translate-x-1/2 top-full mt-2.5 whitespace-nowrap px-2.5 py-1 rounded-[2px] text-[11px] font-black tracking-wide shadow-xl border transition-all duration-300 pointer-events-none z-50",
                        isSelected || isHovered
                          ? "bg-white text-gray-950 border-[#d4af37] opacity-100 translate-y-0"
                          : "bg-[#070d1e]/95 text-gray-300 border-gray-700/80 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
                      )}
                    >
                      {city.name}
                      {city.outlets > 0 && (
                        <span className={clsx("ml-1.5", isSelected || isHovered ? "text-[#d4af37]" : "text-gray-500")}>
                          ({city.outlets})
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-20 mt-auto flex items-center justify-between text-[11px] font-bold tracking-wide text-gray-400 border-t border-gray-800/80 pt-4 bg-gradient-to-t from-[#070d1e] to-transparent">
              <span className="flex items-center gap-2">
                <Navigation size={14} className="text-[#d4af37]" />
                Click any node on the map to inspect micro-market capacity
              </span>
              <span className="hidden sm:inline text-gray-500 uppercase">
                Updated Real-Time • FY 2025-26
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[16px] p-7 relative text-gray-900 dark:text-white bg-white dark:bg-[#0a1128]/80 backdrop-blur-3xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(212,175,55,0.1)]">
            <div className="flex flex-col gap-6">
              <motion.div 
                key={`header-${activeCity.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-black uppercase tracking-widest text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1128] rounded-[6px] flex items-center justify-center text-white">
                      <MapPin size={16} strokeWidth={2.5} />
                    </div>
                    SELECT HUB
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-[4px] bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                    EXISTING HUB
                  </span>
                </div>

                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex items-center justify-between bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-[#d4af37]/50 rounded-[4px] py-4 px-5 text-[15px] font-medium text-gray-900 dark:text-white shadow-sm transition-all focus:outline-none"
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 dark:text-white">{activeCity.name}</span>
                      <span className="text-gray-500 dark:text-white/40">({activeCity.state})</span>
                      <span className="text-gray-300 dark:text-white/20 mx-1">—</span>
                      <span className="text-[#d4af37] font-bold">
                        {activeCity.outlets > 0 ? `${activeCity.outlets} Live Stores` : "Prime Open Zone"}
                      </span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={clsx(
                        "text-gray-400 dark:text-white/50 transition-transform duration-300",
                        isDropdownOpen && "rotate-180 text-gray-900 dark:text-white"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 bg-white dark:bg-[#0a1128]/95 backdrop-blur-xl border border-gray-200 dark:border-[#d4af37]/40 rounded-[4px] shadow-2xl overflow-hidden max-h-[280px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                      >
                        {franchiseNetworkData.cities.map((city) => (
                          <button
                            key={city.id}
                            onClick={() => {
                              setActiveCity(city);
                              setIsDropdownOpen(false);
                            }}
                            className={clsx(
                              "w-full text-left px-5 py-3 text-[14px] transition-all hover:bg-gray-50 dark:hover:bg-white/10 border-b border-gray-100 dark:border-white/5 last:border-0",
                              activeCity.id === city.id
                                ? "bg-gray-50 dark:bg-white/10 font-bold text-[#d4af37]"
                                : "text-gray-700 dark:text-white/80 font-medium"
                            )}
                          >
                            <span className="flex items-center justify-between">
                              <span>{city.name} <span className="text-gray-400 dark:text-white/40 text-[12px] ml-1">({city.state})</span></span>
                              <span className="text-[11px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-black/20 text-gray-600 dark:text-white px-2 py-0.5 rounded-[2px]">
                                {city.outlets > 0 ? `${city.outlets} Stores` : "Open"}
                              </span>
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="w-full h-px bg-gray-200/60 dark:bg-white/10 my-1" />
              </motion.div>

              <motion.div 
                key={`metrics-${activeCity.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="grid grid-cols-3 gap-3"
              >
                <div className="p-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[8px] flex flex-col items-start shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 dark:text-white/50 mb-3">
                    OPERATING STORES
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[8px] bg-[#0088cc] text-white flex items-center justify-center shrink-0">
                      <Building2 size={18} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[22px] font-black text-[#0a1128] dark:text-white tracking-tight leading-none">
                        {activeCity.outlets}
                      </span>
                      <span className="text-[10px] text-gray-500 dark:text-white/50 font-semibold mt-0.5">Units</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[8px] flex flex-col items-start shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 dark:text-white/50 mb-3">
                    IN PIPELINE
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[8px] bg-[#f4b400] text-white flex items-center justify-center shrink-0">
                      <Zap size={18} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[22px] font-black text-[#0a1128] dark:text-white tracking-tight leading-none">
                        {activeCity.pipeline}
                      </span>
                      <span className="text-[10px] text-gray-500 dark:text-white/50 font-semibold mt-0.5">Loc</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[8px] flex flex-col items-start shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 dark:text-white/50 mb-3">
                    AVAILABLE FORMATS
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[8px] bg-[#8a2be2] text-white flex items-center justify-center shrink-0">
                      <LayoutGrid size={18} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[22px] font-black text-[#0a1128] dark:text-white tracking-tight leading-none">
                        5
                      </span>
                      <span className="text-[10px] text-gray-500 dark:text-white/50 font-semibold mt-0.5">Models</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                key={`opps-${activeCity.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center justify-between mb-3 mt-2">
                  <span className="text-[12px] font-black uppercase tracking-widest text-[#0a1128] dark:text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[6px] bg-[#0f9d58] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Sparkles size={16} strokeWidth={2.5} />
                    </div>
                    AVAILABLE OPPORTUNITIES
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-[#0f9d58] px-3 py-1.5 uppercase">
                    {activeCity.opportunities?.length || 0} CIRCLES OPEN
                  </span>
                </div>

                <div className="flex items-center justify-between px-5 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-[#0a1128] rounded-[6px] shadow-sm">
                  <span className="flex-1">CIRCLE NAME</span>
                  <span className="w-[150px] text-center">FORMAT</span>
                  <span className="w-[120px] text-center">TERRITORY STATUS</span>
                </div>

                <div className="flex flex-col max-h-[190px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
                  {activeCity.opportunities?.map((opp, idx) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={opp.id}
                        className="flex items-center justify-between p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[6px] hover:border-gray-300 dark:hover:border-[#d4af37]/40 transition-all duration-300 group shadow-sm mb-3 last:mb-0"
                      >
                        <div className="flex-1 flex flex-col pr-3">
                          <span className="font-bold text-[#0a1128] dark:text-white text-[14px] mb-1.5">
                            {opp.circleName}
                          </span>
                          {opp.badge && (
                            <span className="text-[10px] font-bold text-[#0f9d58] dark:text-emerald-400 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0f9d58] inline-block" /> {opp.badge} Zone
                            </span>
                          )}
                        </div>

                        <div className="w-[150px] text-center px-1">
                          <span className="inline-block whitespace-nowrap px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-[4px] bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 max-w-full">
                            {opp.format}
                          </span>
                        </div>

                        <div className="w-[120px] text-center px-1 text-[11px] font-semibold text-[#0f9d58] dark:text-emerald-400">
                          Available
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-3 pt-4 mt-auto">
              <button className="w-full py-4 px-4 bg-[#0a1128] hover:bg-[#1a2b5e] dark:bg-white dark:text-[#0a1128] text-white text-[12px] font-bold tracking-widest rounded-[8px] shadow-[0_4px_20px_rgba(10,17,40,0.15)] transition-all flex items-center justify-center gap-3 group">
                <MapPin size={16} />
                <span>CHECK TERRITORY AVAILABILITY</span>
                <ChevronRight
                  size={18}
                  strokeWidth={3}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}