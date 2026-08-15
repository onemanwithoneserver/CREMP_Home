import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import clsx from "clsx";
import {
  ChevronRight,
  ChevronDown,
  Download,
  Globe2,
  MapPin,
  Navigation,
  CheckCircle2,
  Sparkles,
  Building2,
  Zap,
} from "lucide-react";
import { franchiseNetworkData, type CityNode } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import mapBg from "../../assets/map_bg.png";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function FranchiseNetworkDesktop() {
  const [hoveredCity, setHoveredCity] = useState<CityNode | null>(null);
  const [activeCity, setActiveCity] = useState<CityNode>(
    franchiseNetworkData.cities[0],
  );
  const [interestedMap, setInterestedMap] = useState<Record<string, boolean>>({});
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

  const toggleInterest = (id: string) => {
    setInterestedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full px-6 py-16 relative overflow-hidden rounded-[8px] ">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/10"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 dark:border-gray-800 pb-8">
          <div>
            <SectionHeader
              overline={franchiseNetworkData.sectionLabel}
              title={franchiseNetworkData.title}
              align="left"
            />
            {franchiseNetworkData.subtitle && (
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mt-1">
                {franchiseNetworkData.subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 bg-white/70 dark:bg-[#0b1b42]/70 rounded-[4px] border border-gray-200/60 dark:border-[#d4af37]/20 backdrop-blur-md self-start md:self-auto shrink-0 shadow-sm">
            <Sparkles size={14} className="text-[#d4af37]" />
            <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
              {franchiseNetworkData.outletCount}
            </span>
          </div>
        </div>

        <div className="relative z-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          {franchiseNetworkData.stats.map((stat, idx) => {
            const Icon = stat.icon;
            const bgColors = [
              "bg-[#0f9d58] shadow-[0_4px_12px_rgba(15,157,88,0.25)]", 
              "bg-[#8a2be2] shadow-[0_4px_12px_rgba(138,43,226,0.25)]", 
              "bg-[#f4b400] shadow-[0_4px_12px_rgba(244,180,0,0.25)]", 
              "bg-[#0088cc] shadow-[0_4px_12px_rgba(0,136,204,0.25)]", 
            ];
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative flex items-center p-4 rounded-md bg-white dark:bg-[#0b1b42] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow gap-3.5"
              >
                <div
                  className={clsx(
                    "w-10 h-10 rounded-[4px] flex items-center justify-center text-white shrink-0",
                    bgColors[idx]
                  )}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </div>
                
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </span>
                  <div className="text-xl font-black text-gray-900 dark:text-white tracking-tight leading-none mt-1 truncate">
                    {stat.value}
                  </div>
                </div>

                <div className="hidden xl:block shrink-0 border border-gray-200 dark:border-gray-700 rounded-[3px] px-2 py-0.5 bg-gray-50 dark:bg-gray-800/50">
                  <span className="text-[9px] font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {stat.change}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 relative min-h-[540px] bg-[#070d1e] rounded-[4px] border border-gray-800 overflow-hidden shadow-2xl flex flex-col justify-between p-6">
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-luminosity overflow-hidden">
              <img
                src={mapBg}
                alt="Expansion Map Background"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-transparent to-[#070d1e]/80" />
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60">
              <defs>
                <linearGradient
                  id="networkGold"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M 44% 62% Q 42% 69% 40% 76%"
                stroke="url(#networkGold)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M 44% 62% Q 34% 59% 24% 56%"
                stroke="url(#networkGold)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M 24% 56% Q 30% 42% 37% 28%"
                stroke="url(#networkGold)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M 44% 62% Q 58% 55% 72% 48%"
                stroke="url(#networkGold)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M 44% 62% Q 45% 71% 47% 80%"
                stroke="url(#networkGold)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>

            <div className="relative z-20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0b1b42]/80 backdrop-blur-md border border-[#d4af37]/30 rounded-[4px]">
                <Globe2
                  size={14}
                  className="text-[#d4af37] animate-spin-slow"
                />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                  Live National Network
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
              </div>

              <div className="flex items-center gap-2 bg-[#0b1b42]/90 backdrop-blur-md px-3 py-1.5 rounded-[4px] border border-gray-700/60">
                {franchiseNetworkData.legend.map((l) => (
                  <div
                    key={l.status}
                    className="flex items-center gap-1.5 text-[11px] text-gray-300 font-medium"
                  >
                    <span className={clsx("w-2 h-2 rounded-full", l.bg)} />
                    <span className="hidden sm:inline">
                      {l.label.split("(")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full h-[400px] z-20">
              {franchiseNetworkData.cities.map((city) => {
                const isSelected = activeCity.id === city.id;
                const isHovered = hoveredCity?.id === city.id;

                const nodeColor =
                  city.status === "active"
                    ? "bg-emerald-500 border-emerald-300 text-emerald-400"
                    : city.status === "expansion"
                      ? "bg-[#d4af37] border-amber-200 text-[#d4af37]"
                      : "bg-blue-500 border-blue-300 text-blue-400";

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
                        "absolute -inset-2 rounded-full opacity-60 animate-ping pointer-events-none",
                        city.status === "active"
                          ? "bg-emerald-400"
                          : city.status === "expansion"
                            ? "bg-[#d4af37]"
                            : "bg-blue-400",
                      )}
                      style={{ animationDuration: "3s" }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.95 }}
                      className={clsx(
                        "relative w-7 h-7 rounded-full flex items-center justify-center border-2 shadow-lg backdrop-blur-md transition-all duration-300",
                        isSelected
                          ? "ring-4 ring-[#d4af37] scale-110 z-30"
                          : "z-10",
                        nodeColor.includes("emerald")
                          ? "bg-emerald-950/80 border-emerald-400 text-emerald-300"
                          : "",
                        nodeColor.includes("d4af37")
                          ? "bg-amber-950/80 border-[#d4af37] text-[#d4af37]"
                          : "",
                        nodeColor.includes("blue")
                          ? "bg-blue-950/80 border-blue-400 text-blue-300"
                          : "",
                      )}
                    >
                      <MapPin size={13} className="drop-shadow" />
                    </motion.div>

                    <div
                      className={clsx(
                        "absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap px-2 py-0.5 rounded-[2px] text-[10px] font-bold tracking-tight shadow-md border transition-all duration-200 pointer-events-none z-30",
                        isSelected || isHovered
                          ? "bg-white text-gray-950 border-[#d4af37] opacity-100 translate-y-0"
                          : "bg-gray-900/90 text-gray-300 border-gray-700 opacity-80",
                      )}
                    >
                      {city.name}
                      {city.outlets > 0 && (
                        <span className="ml-1 text-[#d4af37]">
                          ({city.outlets})
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-20 flex items-center justify-between text-[11px] text-gray-400 border-t border-gray-800/80 pt-3">
              <span className="flex items-center gap-1.5">
                <Navigation size={12} className="text-[#d4af37]" />
                Click any node on the map to inspect micro-market capacity
              </span>
              <span className="hidden sm:inline text-gray-500">
                Updated Real-Time • FY 2025-26
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between bg-white dark:bg-white border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-[8px] p-6 relative">
            <div className="flex flex-col gap-6">
              
              {/* City Dropdown & Status Header */}
              <div className="flex flex-col gap-3 border-b border-gray-100 pb-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#d4af37]" /> Select Hub
                  </span>
                  <span
                    className={clsx(
                      "text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[3px] border",
                      activeCity.status === "active"
                        ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                        : activeCity.status === "expansion"
                          ? "bg-amber-50 text-[#b38728] border-amber-200"
                          : "bg-blue-50 text-blue-600 border-blue-200",
                    )}
                  >
                    {activeCity.statusLabel}
                  </span>
                </div>

                {/* Modern Custom Dropdown Selector */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex items-center justify-between bg-white border border-gray-200 hover:border-gray-300 rounded-[4px] py-3 px-4 text-[13px] font-bold text-gray-900 shadow-sm transition-all focus:outline-none"
                  >
                    <span>
                      {activeCity.name} ({activeCity.state}) —{" "}
                      {activeCity.outlets > 0 ? `${activeCity.outlets} Live Stores` : "Prime Open Zone"}
                    </span>
                    <ChevronDown
                      size={16}
                      className={clsx(
                        "text-gray-400 transition-transform duration-200",
                        isDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-[4px] shadow-xl overflow-hidden max-h-[250px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full"
                      >
                        {franchiseNetworkData.cities.map((city) => (
                          <button
                            key={city.id}
                            onClick={() => {
                              setActiveCity(city);
                              setIsDropdownOpen(false);
                            }}
                            className={clsx(
                              "w-full text-left px-4 py-2.5 text-[13px] transition-colors hover:bg-gray-50",
                              activeCity.id === city.id
                                ? "bg-gray-50 font-bold text-[#d4af37]"
                                : "text-gray-700 font-semibold"
                            )}
                          >
                            <span className="flex items-center justify-between">
                              <span>{city.name} ({city.state})</span>
                              <span className="text-[11px] text-gray-400">
                                {city.outlets > 0 ? `${city.outlets} Stores` : "Open"}
                              </span>
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* City Quick Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white border border-gray-100 rounded-[6px] flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-gray-500 mb-0.5">
                      Operating Stores
                    </span>
                    <span className="text-lg font-black text-gray-900 tracking-tight">
                      {activeCity.outlets} Units
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-[4px] bg-[#0f9d58]/10 text-[#0f9d58] flex items-center justify-center shrink-0">
                    <Building2 size={16} strokeWidth={2.5} />
                  </div>
                </div>

                <div className="p-3 bg-white border border-gray-100 rounded-[6px] flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-gray-500 mb-0.5">
                      In Pipeline
                    </span>
                    <span className="text-lg font-black text-[#d4af37] tracking-tight">
                      {activeCity.pipeline} Locations
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-[4px] bg-[#f4b400]/10 text-[#f4b400] flex items-center justify-center shrink-0">
                    <Zap size={16} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Opportunities in Rows */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                    <Sparkles size={13} className="text-[#d4af37]" />
                    Available Opportunities
                  </span>
                  <span className="text-[11px] font-bold text-[#d4af37]">
                    {activeCity.opportunities?.length || 0} Circles Open
                  </span>
                </div>

                {/* Table / Row headers */}
                <div className="flex items-center justify-between px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-200">
                  <span className="w-[45%]">Circle Name</span>
                  <span className="w-[30%] text-center">Outlet Format</span>
                  <span className="w-[25%] text-right">Interested</span>
                </div>

                {/* Rows list */}
                <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full pb-2 border-b border-gray-200">
                  {activeCity.opportunities?.map((opp) => {
                    const isInterested = interestedMap[opp.id];
                    return (
                      <div
                        key={opp.id}
                        className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all group"
                      >
                        {/* Circle Name */}
                        <div className="w-[45%] flex flex-col pr-2">
                          <span className="font-bold text-gray-900 truncate text-[13px] mb-0.5">
                            {opp.circleName}
                          </span>
                          {opp.badge && (
                            <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> {opp.badge} Zone
                            </span>
                          )}
                        </div>

                        {/* Outlet Format */}
                        <div className="w-[30%] text-center px-1">
                          <span className="inline-block px-2 py-1 text-[10px] font-bold rounded-[3px] bg-white text-gray-600 border border-gray-200 truncate max-w-full">
                            {opp.format}
                          </span>
                        </div>

                        {/* Interested CTA */}
                        <div className="w-[25%] flex justify-end">
                          <button
                            onClick={() => toggleInterest(opp.id)}
                            className={clsx(
                              "px-3 py-1.5 text-[11px] font-bold rounded-[4px] transition-all flex items-center gap-1.5 border",
                              isInterested
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm"
                                : "bg-white text-gray-800 hover:bg-gray-50 border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
                            )}
                          >
                            {isInterested ? (
                              <>
                                <CheckCircle2 size={12} className="text-emerald-500" />
                                <span>Applied</span>
                              </>
                            ) : (
                              <span>Interested</span>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-3 pt-4 mt-auto">
              <button className="w-full py-3.5 px-4 bg-[#0a1128] hover:bg-[#121c33] text-white text-[13px] font-bold uppercase tracking-wider rounded-[4px] shadow-lg transition-all flex items-center justify-center gap-2 group">
                <span>{franchiseNetworkData.cta.primary}</span>
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="w-full py-3 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-[13px] font-bold rounded-[4px] transition-all flex items-center justify-center gap-2 shadow-sm">
                <Download size={14} className="text-[#d4af37]" />
                <span>{franchiseNetworkData.cta.secondary}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
