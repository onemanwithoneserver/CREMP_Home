import { useState } from "react";
import clsx from "clsx";
import { motion, type Variants } from "framer-motion";
import { 
  ChevronRight, 
  Download, 
  Globe2, 
  MapPin 
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
  const [activeCity, setActiveCity] = useState<CityNode>(franchiseNetworkData.cities[0]);

  return (
    <section className="w-full px-4 py-12 pb-20 relative overflow-hidden rounded-[8px] bg-white/40 ">
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
                      isSelected ? "ring-2 ring-[#d4af37] scale-125 z-30" : "z-10",
                      city.status === "active" ? "bg-emerald-950 border-emerald-400 text-emerald-300" : "",
                      city.status === "expansion" ? "bg-amber-950 border-[#d4af37] text-[#d4af37]" : "",
                      city.status === "available" ? "bg-blue-950 border-blue-400 text-blue-300" : ""
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
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" /> Expanding</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Available</span>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl border border-gray-200/60 dark:border-[#d4af37]/20 rounded-[4px] p-4 flex flex-col gap-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className={clsx(
                "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[2px] border",
                activeCity.status === "active"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300"
                  : activeCity.status === "expansion"
                  ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-[#d4af37]"
                  : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300"
              )}>
                {activeCity.statusLabel}
              </span>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                {activeCity.name}
              </h4>
            </div>

            <div className="text-right">
              <span className="text-lg font-black text-gray-900 dark:text-white">
                {activeCity.outlets}
              </span>
              <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 block">
                Live Outlets
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-white dark:bg-[#0b1b42] border border-gray-200 dark:border-gray-800 rounded-[4px]">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 block">Upcoming Pipeline</span>
              <span className="font-bold text-[#d4af37]">{activeCity.pipeline} Stores</span>
            </div>
            <div className="p-2.5 bg-white dark:bg-[#0b1b42] border border-gray-200 dark:border-gray-800 rounded-[4px]">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 block">Zone Region</span>
              <span className="font-bold text-gray-900 dark:text-white">{activeCity.zone} Zone</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mt-1">
            {franchiseNetworkData.cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setActiveCity(city)}
                className={clsx(
                  "px-2 py-1 text-[11px] rounded-[2px] border",
                  activeCity.id === city.id
                    ? "bg-[#0b1b42] text-white border-[#0a1128] dark:bg-[#d4af37] dark:text-gray-950 font-bold"
                    : "bg-white dark:bg-[#0b1b42] text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800"
                )}
              >
                {city.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-gray-200 dark:border-gray-800">
            <motion.button whileTap={{ scale: 0.95 }} className="w-full py-2.5 bg-[#0b1b42] dark:bg-[#d4af37] text-white dark:text-gray-950 text-xs font-bold uppercase tracking-wider rounded-[4px] shadow-sm flex items-center justify-center gap-1.5">
              <span>{franchiseNetworkData.cta.primary}</span>
              <ChevronRight size={14} />
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} className="w-full py-2 bg-white/50 dark:bg-[#0b1b42]/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-[4px] flex items-center justify-center gap-1.5">
              <Download size={13} className="text-[#d4af37]" />
              <span>{franchiseNetworkData.cta.secondary}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
