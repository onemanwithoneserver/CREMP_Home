import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import clsx from "clsx";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};
import { 
  ChevronRight, 
  Download, 
  Globe2, 
  MapPin, 
  Navigation, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { franchiseNetworkData, type CityNode } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import mapBg from "../../assets/map_bg.png";

export default function FranchiseNetworkDesktop() {
  const [hoveredCity, setHoveredCity] = useState<CityNode | null>(null);
  const [activeCity, setActiveCity] = useState<CityNode>(franchiseNetworkData.cities[0]);

  return (
    <section className="w-full px-6 py-16 relative overflow-hidden rounded-[8px] bg-gray-50 shadow-xl transition-colors duration-700 dark:bg-[#0a1128] dark:shadow-none">
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
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mt-1">
              {franchiseNetworkData.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 bg-gray-50 dark:bg-[#121c33] rounded-[4px] border border-gray-200 dark:border-gray-800 backdrop-blur-sm self-start md:self-auto shrink-0">
            <Sparkles size={14} className="text-[#d4af37]" />
            <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
              {franchiseNetworkData.outletCount}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {franchiseNetworkData.stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-gray-50/70 dark:bg-[#121c33] border border-gray-200 dark:border-gray-800 rounded-[4px] p-5 flex flex-col justify-between hover:border-[#d4af37]/40 dark:hover:border-[#d4af37]/40 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </span>
                  <div className="w-8 h-8 rounded-[4px] bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                    <Icon size={16} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {stat.change}
                  </div>
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
                <linearGradient id="networkGold" x1="0%" y1="0%" x2="100%" y2="100%">
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
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1128]/80 backdrop-blur-md border border-[#d4af37]/30 rounded-[4px]">
                <Globe2 size={14} className="text-[#d4af37] animate-spin-slow" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                  Live National Network
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
              </div>

              <div className="flex items-center gap-2 bg-[#0a1128]/90 backdrop-blur-md px-3 py-1.5 rounded-[4px] border border-gray-700/60">
                {franchiseNetworkData.legend.map((l) => (
                  <div key={l.status} className="flex items-center gap-1.5 text-[11px] text-gray-300 font-medium">
                    <span className={clsx("w-2 h-2 rounded-full", l.bg)} />
                    <span className="hidden sm:inline">{l.label.split("(")[0]}</span>
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
                        city.status === "active" ? "bg-emerald-400" : city.status === "expansion" ? "bg-[#d4af37]" : "bg-blue-400"
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
                        nodeColor.includes("emerald") ? "bg-emerald-950/80 border-emerald-400 text-emerald-300" : "",
                        nodeColor.includes("d4af37") ? "bg-amber-950/80 border-[#d4af37] text-[#d4af37]" : "",
                        nodeColor.includes("blue") ? "bg-blue-950/80 border-blue-400 text-blue-300" : ""
                      )}
                    >
                      <MapPin size={13} className="drop-shadow" />
                    </motion.div>

                    <div
                      className={clsx(
                        "absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap px-2 py-0.5 rounded-[2px] text-[10px] font-bold tracking-tight shadow-md border transition-all duration-200 pointer-events-none z-30",
                        isSelected || isHovered
                          ? "bg-white text-gray-950 border-[#d4af37] opacity-100 translate-y-0"
                          : "bg-gray-900/90 text-gray-300 border-gray-700 opacity-80"
                      )}
                    >
                      {city.name}
                      {city.outlets > 0 && <span className="ml-1 text-[#d4af37]">({city.outlets})</span>}
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
              <span className="hidden sm:inline text-gray-500">Updated Real-Time • FY 2025-26</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between bg-gray-50 dark:bg-[#121c33] border border-gray-200 dark:border-gray-800 rounded-[4px] p-6 shadow-sm">
            <div className="flex flex-col gap-5">
              <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={clsx(
                    "text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[2px] border",
                    activeCity.status === "active"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800"
                      : activeCity.status === "expansion"
                      ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-[#d4af37] dark:border-amber-800"
                      : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800"
                  )}>
                    {activeCity.statusLabel}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {activeCity.zone} Region
                  </span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                  {activeCity.name}
                </h3>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                  State: {activeCity.state}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white dark:bg-[#0a1128] border border-gray-200 dark:border-gray-800 rounded-[4px]">
                  <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 block">
                    Operating Stores
                  </span>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {activeCity.outlets} Units
                  </span>
                </div>

                <div className="p-3 bg-white dark:bg-[#0a1128] border border-gray-200 dark:border-gray-800 rounded-[4px]">
                  <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 block">
                    In Pipeline
                  </span>
                  <span className="text-xl font-bold text-[#d4af37]">
                    {activeCity.pipeline} Locations
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-600 dark:text-gray-400">Territory Exclusivity</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Guaranteed
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-600 dark:text-gray-400">Supply Chain Access</span>
                  <span className="font-semibold text-gray-900 dark:text-white">24h Direct Depot</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-600 dark:text-gray-400">Launch Timeline</span>
                  <span className="font-semibold text-gray-900 dark:text-white">45–60 Days</span>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Key Growth Hubs ({franchiseNetworkData.cities.length})
                </p>
                <div className="flex flex-wrap gap-1.5 max-h-[110px] overflow-y-auto pr-1 scrollbar-hide">
                  {franchiseNetworkData.cities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => setActiveCity(city)}
                      className={clsx(
                        "px-2.5 py-1 text-xs rounded-[2px] border transition-all",
                        activeCity.id === city.id
                          ? "bg-[#0a1128] text-white border-[#0a1128] dark:bg-[#d4af37] dark:text-gray-950 dark:border-[#d4af37] font-bold"
                          : "bg-white dark:bg-[#0a1128] text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 hover:border-[#d4af37]"
                      )}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 pt-5 border-t border-gray-200 dark:border-gray-800 mt-4">
              <button className="w-full py-3 px-4 bg-[#0a1128] hover:bg-[#121c33] dark:bg-[#d4af37] dark:hover:bg-[#bfa030] text-white dark:text-gray-950 text-xs font-bold uppercase tracking-wider rounded-[4px] shadow-md transition-all flex items-center justify-center gap-2 group">
                <span>{franchiseNetworkData.cta.primary}</span>
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="w-full py-2.5 px-4 bg-white dark:bg-[#0a1128] border border-gray-300 dark:border-gray-800 hover:border-[#d4af37] text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-[4px] transition-all flex items-center justify-center gap-2">
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
