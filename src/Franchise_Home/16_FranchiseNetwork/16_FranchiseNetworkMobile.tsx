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
          <p className="text-gray-600 dark:text-gray-400 text-xs text-center max-w-md mx-auto mt-1">
            {franchiseNetworkData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {franchiseNetworkData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="group bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl border border-gray-200/60 dark:border-[#d4af37]/20 rounded-[4px] p-3.5 flex flex-col justify-between shadow-sm transition-all duration-300"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {stat.label}
              </span>
              <div className="text-xl font-black text-gray-900 dark:text-white mt-1">
                {stat.value}
              </div>
              <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                {stat.change}
              </span>
            </div>
          ))}
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

          <div className="relative z-20 flex items-center justify-between">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0b1b42]/90 border border-[#d4af37]/30 rounded-[4px]">
              <Globe2 size={12} className="text-[#d4af37]" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                Pan-India Network
              </span>
            </div>
            <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              187+ Outlets Active
            </span>
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
                      "w-6 h-6 rounded-full flex items-center justify-center border shadow-md transition-transform",
                      isSelected
                        ? "ring-2 ring-[#d4af37] scale-125 z-30"
                        : "z-10",
                      city.status === "active"
                        ? "bg-emerald-950 border-emerald-400 text-emerald-300"
                        : "",
                      city.status === "expansion"
                        ? "bg-amber-950 border-[#d4af37] text-[#d4af37]"
                        : "",
                      city.status === "available"
                        ? "bg-blue-950 border-blue-400 text-blue-300"
                        : "",
                    )}
                  >
                    <MapPin size={11} />
                  </div>
                  {isSelected && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-white text-gray-950 text-[9px] font-bold px-1.5 py-0.5 rounded-[2px] shadow whitespace-nowrap border border-[#d4af37]">
                      {city.name} ({city.outlets})
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative z-20 flex flex-wrap items-center justify-between gap-1 text-[10px] text-gray-300 border-t border-gray-800/80 pt-2">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{" "}
              Active
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />{" "}
              Expanding
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />{" "}
              Available
            </span>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl border border-gray-200/60 dark:border-[#d4af37]/20 rounded-[4px] p-4 flex flex-col gap-3 shadow-sm">
          {/* City Selection Header & Dropdown */}
          <div className="flex flex-col gap-2 pb-3 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <MapPin size={11} className="text-[#d4af37]" /> Select Hub
              </span>
              <span
                className={clsx(
                  "text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[2px] border",
                  activeCity.status === "active"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300"
                    : activeCity.status === "expansion"
                      ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-[#d4af37]"
                      : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300",
                )}
              >
                {activeCity.statusLabel}
              </span>
            </div>

            {/* Modern Custom Dropdown Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-white dark:bg-[#0b1b42] border border-gray-300 dark:border-gray-700 hover:border-[#d4af37] dark:hover:border-[#d4af37] rounded-[4px] py-2 px-3 text-xs font-semibold text-gray-900 dark:text-white shadow-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
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
                    className="absolute z-50 w-full mt-1 bg-white dark:bg-[#0b1b42] border border-gray-200 dark:border-gray-700 rounded-[4px] shadow-xl overflow-hidden max-h-[220px] overflow-y-auto"
                  >
                    {franchiseNetworkData.cities.map((city) => (
                      <button
                        key={city.id}
                        onClick={() => {
                          setActiveCity(city);
                          setIsDropdownOpen(false);
                        }}
                        className={clsx(
                          "w-full text-left px-3 py-2 text-xs transition-colors hover:bg-gray-50 dark:hover:bg-[#121c33]",
                          activeCity.id === city.id
                            ? "bg-gray-50 dark:bg-[#121c33] font-bold text-[#d4af37]"
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
            <div className="p-2 bg-white dark:bg-[#0b1b42] border border-gray-200 dark:border-gray-800 rounded-[4px] flex items-center justify-between">
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
            <div className="p-2 bg-white dark:bg-[#0b1b42] border border-gray-200 dark:border-gray-800 rounded-[4px] flex items-center justify-between">
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

            {/* Rows List */}
            <div className="flex flex-col gap-1.5">
              {activeCity.opportunities?.map((opp) => {
                const isInterested = interestedMap[opp.id];
                return (
                  <div
                    key={opp.id}
                    className="flex items-center justify-between p-2 bg-white dark:bg-[#0b1b42] border border-gray-200/80 dark:border-gray-800 rounded-[4px] shadow-sm text-xs"
                  >
                    <div className="flex flex-col flex-1 pr-1 min-w-0">
                      <span className="font-semibold text-gray-900 dark:text-white truncate text-[11px]">
                        {opp.circleName}
                      </span>
                      <span className="text-[9px] text-gray-500 dark:text-gray-400">
                        {opp.format}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleInterest(opp.id)}
                      className={clsx(
                        "px-2 py-1 text-[10px] font-semibold rounded-[3px] transition-all shrink-0 flex items-center gap-1",
                        isInterested
                          ? "bg-emerald-600 text-white"
                          : "bg-[#0b1b42] text-white dark:bg-[#d4af37]/20 dark:text-[#d4af37] border border-[#d4af37]/40",
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
