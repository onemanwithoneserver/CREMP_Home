import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Download,
  Globe2,
  MapPin,
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

export default function FranchiseNetworkMobile() {
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
    <section className="w-full py-12 pb-20 relative overflow-hidden rounded-[8px] bg-white/40 ">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute top-[10%] left-[10%] w-[250px] h-[250px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[10%] right-[10%] w-[250px] h-[250px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/10"
      />

      <div className="relative z-10 w-full flex flex-col gap-6">
        <div>
          <SectionHeader
            overline={franchiseNetworkData.sectionLabel}
            title={franchiseNetworkData.title}
            align="center"
          />
          {franchiseNetworkData.subtitle && (
            <p className="text-gray-600 dark:text-gray-400 text-xs text-center max-w-md mx-auto mt-1">
              {franchiseNetworkData.subtitle}
            </p>
          )}
        </div>

        {/* Unified Glassmorphic Stats Container */}
        <div className="relative z-10 w-full flex bg-white/70 dark:bg-[#0e172f]/70 backdrop-blur-xl rounded-[4px] p-1.5 border border-gray-200/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] overflow-hidden gap-1.5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/5 pointer-events-none opacity-60" />
          <div className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-1">
            {franchiseNetworkData.stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex-none w-[140px] shrink-0 snap-start relative flex flex-col p-3 rounded-[4px] bg-white/30 dark:bg-white/5 backdrop-blur-md border border-white/40 dark:border-white/10 mx-1 first:ml-0 last:mr-0 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <div className="w-6 h-6 rounded-[3px] flex items-center justify-center bg-[#d4af37]/10 text-[#d4af37]">
                      <Icon size={12} strokeWidth={2.5} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-xl font-black text-gray-900 dark:text-white tracking-tight mt-auto relative z-10">
                    {stat.value}
                  </span>
                  <span className="text-[9px] font-semibold text-[#d4af37] mt-0.5 uppercase tracking-wide truncate relative z-10">
                    {stat.change}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[360px] bg-[#070d1e] rounded-[4px] border border-gray-800 overflow-hidden shadow-xl p-4 flex flex-col justify-between">
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-luminosity">
            <img
              src={mapBg}
              alt="Expansion Map"
              className="w-full h-full object-cover scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-transparent to-[#070d1e]/70" />
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60">
            <defs>
              <linearGradient
                id="networkGoldMob"
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
              stroke="url(#networkGoldMob)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M 44% 62% Q 34% 59% 24% 56%"
              stroke="url(#networkGoldMob)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M 44% 62% Q 40% 45% 37% 28%"
              stroke="url(#networkGoldMob)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M 44% 62% Q 58% 55% 72% 48%"
              stroke="url(#networkGoldMob)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
          </svg>

          <div className="relative z-20 flex items-center justify-between">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0b1b42]/90 border border-[#d4af37]/30 rounded-[4px] backdrop-blur-md">
              <Globe2 size={12} className="text-[#d4af37]" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                Pan-India Network
              </span>
            </div>
          </div>

          <div className="relative w-full h-[260px] z-20">
            {franchiseNetworkData.cities.map((city) => {
              const isSelected = activeCity.id === city.id;

              return (
                <div
                  key={city.id}
                  style={{ top: city.top, left: city.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setActiveCity(city)}
                >
                  <div
                    className={clsx(
                      "w-6 h-6 rounded-full flex items-center justify-center border shadow-md transition-transform backdrop-blur-md",
                      isSelected
                        ? "ring-2 ring-[#d4af37] ring-offset-1 ring-offset-[#070d1e] scale-125 z-30"
                        : "z-10 hover:scale-110",
                      city.status === "active"
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                        : "",
                      city.status === "expansion"
                        ? "bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37]"
                        : "",
                      city.status === "available"
                        ? "bg-blue-500/20 border-blue-400 text-blue-300"
                        : "",
                    )}
                  >
                    <MapPin size={11} />
                  </div>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-md text-gray-900 dark:text-white text-[9px] font-bold px-2 py-1 rounded-[3px] shadow-[0_4px_12px_rgba(212,175,55,0.3)] whitespace-nowrap border border-[#d4af37]"
                    >
                      {city.name} ({city.outlets})
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative z-20 flex flex-wrap items-center justify-between gap-1 text-[10px] text-gray-300 border-t border-gray-800/80 pt-2">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />{" "}
              Active
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />{" "}
              Expanding
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />{" "}
              Available
            </span>
          </div>
        </div>

        {/* Right Panel / Bottom Container in Mobile */}
        <div className="bg-white/70 dark:bg-[#0e172f]/70 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] rounded-[4px] p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent dark:via-white/5 pointer-events-none opacity-60" />
          
          <div className="relative z-10 flex flex-col gap-4">
            {/* City Dropdown & Status Header */}
            <div className="border-b border-gray-200/60 dark:border-white/10 pb-3.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <MapPin size={11} className="text-[#d4af37]" /> Select Hub
                </span>
                <span
                  className={clsx(
                    "text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[2px] border",
                    activeCity.status === "active"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800/50"
                      : activeCity.status === "expansion"
                        ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-[#d4af37]/10 dark:text-[#d4af37] dark:border-[#d4af37]/30"
                        : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800/50",
                  )}
                >
                  {activeCity.statusLabel}
                </span>
              </div>

              {/* Modern Custom Dropdown Selector */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between bg-white/50 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 hover:border-[#d4af37]/50 dark:hover:border-[#d4af37]/50 rounded-[4px] py-2 px-3 text-xs font-semibold text-gray-900 dark:text-white shadow-sm transition-all focus:outline-none"
                >
                  <span>
                    {activeCity.name} ({activeCity.state}) —{" "}
                    {activeCity.outlets > 0 ? `${activeCity.outlets} Stores` : "Prime Territory"}
                  </span>
                  <ChevronDown
                    size={13}
                    className={clsx(
                      "text-gray-400 dark:text-gray-300 transition-transform duration-200",
                      isDropdownOpen && "rotate-180 text-[#d4af37]"
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
                      className="absolute z-50 w-full mt-1 bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[4px] shadow-2xl overflow-hidden max-h-[220px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                      {franchiseNetworkData.cities.map((city) => (
                        <button
                          key={city.id}
                          onClick={() => {
                            setActiveCity(city);
                            setIsDropdownOpen(false);
                          }}
                          className={clsx(
                            "w-full text-left px-3 py-2 text-xs transition-colors hover:bg-gray-50/80 dark:hover:bg-white/5",
                            activeCity.id === city.id
                              ? "bg-gray-50/80 dark:bg-white/5 font-bold text-[#d4af37]"
                              : "text-gray-700 dark:text-gray-300 font-medium"
                          )}
                        >
                          <span className="flex items-center justify-between">
                            <span>{city.name} ({city.state})</span>
                            <span className="text-[9px] text-gray-400">
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

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/5 rounded-[4px] flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400 block">
                    Operating Stores
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {activeCity.outlets} Units
                  </span>
                </div>
                <div className="w-5 h-5 rounded-[2px] bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <Building2 size={11} />
                </div>
              </div>
              <div className="p-2 bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/5 rounded-[4px] flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400 block">
                    In Pipeline
                  </span>
                  <span className="text-sm font-semibold text-[#d4af37]">
                    {activeCity.pipeline} Stores
                  </span>
                </div>
                <div className="w-5 h-5 rounded-[2px] bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center">
                  <Zap size={11} />
                </div>
              </div>
            </div>

            {/* Opportunities in Rows */}
            <div className="mt-1">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-1">
                  <Sparkles size={10} className="text-[#d4af37]" />
                  Opportunities ({activeCity.opportunities?.length || 0})
                </span>
                <span className="text-[9px] font-medium text-[#d4af37]">
                  Live Territories
                </span>
              </div>

              {/* Rows List with custom scrollbar */}
              <div className="flex flex-col gap-1.5 max-h-[220px] overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full">
                {activeCity.opportunities?.map((opp) => {
                  const isInterested = interestedMap[opp.id];
                  return (
                    <div
                      key={opp.id}
                      className="flex items-center justify-between p-2 bg-white/50 dark:bg-white/5 border border-white/40 dark:border-white/5 hover:border-[#d4af37]/30 dark:hover:border-[#d4af37]/30 rounded-[4px] shadow-sm transition-all text-xs group"
                    >
                      <div className="flex flex-col flex-1 pr-1 min-w-0">
                        <span className="font-semibold text-gray-900 dark:text-white truncate text-[11px] group-hover:text-[#b38728] dark:group-hover:text-[#d4af37] transition-colors">
                          {opp.circleName}
                        </span>
                        <span className="text-[9px] text-gray-500 dark:text-gray-400">
                          {opp.format}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleInterest(opp.id)}
                        className={clsx(
                          "px-2 py-1 text-[10px] font-semibold rounded-[3px] transition-all shrink-0 flex items-center gap-1 border",
                          isInterested
                            ? "bg-emerald-600 text-white border-emerald-500 shadow-sm"
                            : "bg-white/80 dark:bg-[#d4af37]/10 text-gray-800 dark:text-[#d4af37] hover:bg-[#d4af37] hover:text-white dark:hover:bg-[#d4af37] dark:hover:text-gray-950 border-gray-200 dark:border-[#d4af37]/30",
                        )}
                      >
                        {isInterested ? (
                          <>
                            <CheckCircle2 size={10} />
                            <span>Applied</span>
                          </>
                        ) : (
                          <span>Interested</span>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-gray-200 dark:border-gray-800">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full py-2.5 bg-[#0b1b42] dark:bg-[#d4af37] text-white dark:text-gray-950 text-xs font-semibold uppercase tracking-wider rounded-[4px] shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>{franchiseNetworkData.cta.primary}</span>
              <ChevronRight size={14} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-white/50 dark:bg-[#0b1b42]/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-[4px] flex items-center justify-center gap-1.5"
            >
              <Download size={13} className="text-[#d4af37]" />
              <span>{franchiseNetworkData.cta.secondary}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
