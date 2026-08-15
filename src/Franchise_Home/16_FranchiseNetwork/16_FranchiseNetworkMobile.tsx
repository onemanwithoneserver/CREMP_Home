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
    <section className="w-full py-12 pb-20 px-2 relative overflow-hidden rounded-[8px] bg-white/40 ">
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

      <div className="relative z-10 w-full flex flex-col gap-6 px-2">
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

        <div className="relative z-10 w-full grid grid-cols-2 gap-2">
          {franchiseNetworkData.stats.map((stat, idx) => {
            const Icon = stat.icon;
            const bgColors = [
              "bg-[#0f9d58] shadow-[0_4px_12px_rgba(15,157,88,0.25)]", 
              "bg-[#8a2be2] shadow-[0_4px_12px_rgba(138,43,226,0.25)]", 
              "bg-[#f4b400] shadow-[0_4px_12px_rgba(244,180,0,0.25)]", 
              "bg-[#0088cc] shadow-[0_4px_12px_rgba(0,136,204,0.25)]", 
            ];
            
            return (
              <div
                key={idx}
                className="relative flex flex-col p-3 rounded-[4px] bg-white dark:bg-[#0b1b42] border border-gray-100 dark:border-gray-800 shadow-sm gap-2"
              >
                <div className="flex items-start gap-2">
                  <div
                    className={clsx(
                      "w-7 h-7 rounded-[3px] flex items-center justify-center text-white shrink-0",
                      bgColors[idx]
                    )}
                  >
                    <Icon size={14} strokeWidth={2.5} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
                
                <div className="mt-auto pt-1">
                  <div className="text-xl font-black text-gray-900 dark:text-white tracking-tight leading-none truncate">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-semibold text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-wide truncate">
                    {stat.change}
                  </div>
                </div>
              </div>
            );
          })}
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
        {/* Right Panel / Bottom Container in Mobile */}
        <div className="bg-white dark:bg-white border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-[8px] p-5 relative mt-4">
          <div className="flex flex-col gap-5">
            
            {/* City Dropdown & Status Header */}
            <div className="flex flex-col gap-3 border-b border-gray-100 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#d4af37]" /> Select Hub
                </span>
                <span
                  className={clsx(
                    "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border",
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
                  className="w-full flex items-center justify-between bg-white border border-gray-200 hover:border-gray-300 rounded-[4px] py-2.5 px-3 text-[12px] font-bold text-gray-900 shadow-sm transition-all focus:outline-none"
                >
                  <span className="truncate pr-2 text-left">
                    {activeCity.name} ({activeCity.state}) —{" "}
                    {activeCity.outlets > 0 ? `${activeCity.outlets} Live Stores` : "Prime Open Zone"}
                  </span>
                  <ChevronDown
                    size={16}
                    className={clsx(
                      "text-gray-400 transition-transform duration-200 shrink-0",
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
                      className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-[4px] shadow-xl overflow-hidden max-h-[220px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                      {franchiseNetworkData.cities.map((city) => (
                        <button
                          key={city.id}
                          onClick={() => {
                            setActiveCity(city);
                            setIsDropdownOpen(false);
                          }}
                          className={clsx(
                            "w-full text-left px-3 py-2.5 text-[12px] transition-colors hover:bg-gray-50",
                            activeCity.id === city.id
                              ? "bg-gray-50 font-bold text-[#d4af37]"
                              : "text-gray-700 font-semibold"
                          )}
                        >
                          <span className="flex items-center justify-between">
                            <span>{city.name}</span>
                            <span className="text-[10px] text-gray-400">
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
              <div className="p-2.5 bg-white border border-gray-100 rounded-[6px] flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 mb-0.5">
                    Operating Stores
                  </span>
                  <span className="text-sm font-black text-gray-900 tracking-tight">
                    {activeCity.outlets} Units
                  </span>
                </div>
                <div className="w-6 h-6 rounded-[3px] bg-[#0f9d58]/10 text-[#0f9d58] flex items-center justify-center shrink-0">
                  <Building2 size={12} strokeWidth={2.5} />
                </div>
              </div>
              
              <div className="p-2.5 bg-white border border-gray-100 rounded-[6px] flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 mb-0.5">
                    In Pipeline
                  </span>
                  <span className="text-sm font-black text-[#d4af37] tracking-tight">
                    {activeCity.pipeline} Locations
                  </span>
                </div>
                <div className="w-6 h-6 rounded-[3px] bg-[#f4b400]/10 text-[#f4b400] flex items-center justify-center shrink-0">
                  <Zap size={12} strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Opportunities in Rows */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                  <Sparkles size={11} className="text-[#d4af37]" />
                  Available Opportunities
                </span>
                <span className="text-[10px] font-bold text-[#d4af37]">
                  {activeCity.opportunities?.length || 0} Circles Open
                </span>
              </div>

              {/* Table / Row headers */}
              <div className="flex items-center justify-between px-2 py-1.5 text-[9px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-200">
                <span className="flex-1">Opportunity Details</span>
                <span className="w-[70px] text-right">Action</span>
              </div>

              {/* Rows List with custom scrollbar */}
              <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full pb-2 border-b border-gray-200">
                {activeCity.opportunities?.map((opp) => {
                  const isInterested = interestedMap[opp.id];
                  return (
                    <div
                      key={opp.id}
                      className="flex items-center justify-between p-2.5 bg-white border border-gray-100 rounded-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all group"
                    >
                      <div className="flex flex-col flex-1 pr-2 min-w-0">
                        <span className="font-bold text-gray-900 truncate text-[12px] mb-0.5">
                          {opp.circleName}
                        </span>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          {opp.badge && (
                            <span className="text-[9px] font-bold text-emerald-600 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> {opp.badge} Zone
                            </span>
                          )}
                          <span className="inline-block px-1.5 py-0.5 text-[9px] font-bold rounded-[3px] bg-white text-gray-600 border border-gray-200">
                            {opp.format}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleInterest(opp.id)}
                        className={clsx(
                          "px-2.5 py-1.5 text-[10px] font-bold rounded-[4px] transition-all shrink-0 flex items-center gap-1 border",
                          isInterested
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm"
                            : "bg-white text-gray-800 hover:bg-gray-50 border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
                        )}
                      >
                        {isInterested ? (
                          <>
                            <CheckCircle2 size={10} className="text-emerald-500" />
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

            {/* Bottom Actions */}
            <div className="flex flex-col gap-2.5 pt-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-[#0a1128] hover:bg-[#121c33] text-white text-[12px] font-bold uppercase tracking-wider rounded-[4px] shadow-lg flex items-center justify-center gap-1.5"
              >
                <span>{franchiseNetworkData.cta.primary}</span>
                <ChevronRight size={14} />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-[12px] font-bold rounded-[4px] shadow-sm flex items-center justify-center gap-1.5"
              >
                <Download size={13} className="text-[#d4af37]" />
                <span>{franchiseNetworkData.cta.secondary}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
