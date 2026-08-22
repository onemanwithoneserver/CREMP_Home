import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, Globe2, MapPin, Sparkles, Check } from "lucide-react";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [bookedOpps, setBookedOpps] = useState<Set<string>>(new Set());
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="w-full py-12 pb-20 px-2 relative overflow-hidden rounded-[4px] bg-white/40 ">
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
        <SectionHeader
          overline={franchiseNetworkData.sectionLabel}
          title={franchiseNetworkData.title}
          subtitle={franchiseNetworkData.subtitle}
          align="center"
        />

        <div className="relative z-10 w-full grid grid-cols-2 gap-3">
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
              <div
                key={idx}
                className="relative flex flex-col p-3.5 rounded-[4px] bg-white dark:bg-[#0b1b42]/40 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.2)] gap-3 border border-gray-100 dark:border-white/5"
              >
                <div className="flex flex-col gap-2">
                  <div
                    className={clsx(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm",
                      bgColors[idx],
                    )}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </span>
                </div>

                <div className="flex flex-col mt-1">
                  <div className="text-[24px] font-black text-[#0a1128] dark:text-white tracking-tight leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="self-start">
                    <span
                      className={clsx(
                        "text-[9px] font-bold px-2 py-0.5 rounded-[2px] whitespace-nowrap",
                        pillColors[idx],
                      )}
                    >
                      {stat.change}
                    </span>
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
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0b1b42]/90 border border-[#d4af37]/30 rounded-[2px] backdrop-blur-md">
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
        <div className="bg-white dark:bg-[#0a1128]/80 backdrop-blur-3xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(212,175,55,0.1)] rounded-[4px] p-5 relative mt-4 text-gray-900 dark:text-white">
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-4 border-b border-gray-200 dark:border-white/10 pb-5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-black uppercase tracking-widest text-gray-900 dark:text-white flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-[#0a1128] rounded-full flex items-center justify-center text-white shadow-sm">
                    <MapPin size={14} strokeWidth={2.5} />
                  </div>
                  SELECT CITY
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-[2px] bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                  EXISTING CITY
                </span>
              </div>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-[#d4af37]/50 rounded-[4px] py-3 px-3.5 text-[13px] font-bold text-gray-900 dark:text-white shadow-sm transition-all focus:outline-none"
                >
                  <span className="truncate pr-2 text-left flex items-center gap-1.5 flex-wrap">
                    <span className="text-gray-900 dark:text-white">
                      {activeCity.name}
                    </span>
                    <span className="text-gray-500 dark:text-white/40 font-medium text-[11px]">
                      ({activeCity.state})
                    </span>
                    <span className="hidden sm:inline text-gray-300 dark:text-white/20">
                      —
                    </span>
                    <span className="text-[#d4af37]">
                      {activeCity.outlets > 0
                        ? `${activeCity.outlets} Live Stores`
                        : "Prime Open Zone"}
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={clsx(
                      "text-gray-400 dark:text-white/50 transition-transform duration-300 shrink-0",
                      isDropdownOpen &&
                        "rotate-180 text-gray-900 dark:text-white",
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
                      className="absolute z-50 w-full mt-2 bg-white dark:bg-[#0a1128]/95 backdrop-blur-xl border border-gray-200 dark:border-[#d4af37]/40 rounded-[4px] shadow-2xl overflow-hidden max-h-[220px] overflow-y-auto [&::-webkit-scrollbar]:hidden"
                    >
                      {franchiseNetworkData.cities.map((city) => (
                        <button
                          key={city.id}
                          onClick={() => {
                            setActiveCity(city);
                            setIsDropdownOpen(false);
                          }}
                          className={clsx(
                            "w-full text-left px-3.5 py-3 text-[12px] transition-colors border-b border-gray-100 dark:border-white/5 last:border-0 hover:bg-gray-50 dark:hover:bg-white/10",
                            activeCity.id === city.id
                              ? "bg-gray-50 dark:bg-white/10 font-bold text-[#d4af37]"
                              : "text-gray-700 dark:text-white/80 font-medium",
                          )}
                        >
                          <span className="flex items-center justify-between">
                            <span>{city.name}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-black/20 text-gray-600 dark:text-white px-2 py-0.5 rounded-[2px]">
                              {city.outlets > 0
                                ? `${city.outlets} Stores`
                                : "Open"}
                            </span>
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-2 mt-1"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0a1128] dark:text-white flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#0f9d58] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles size={12} strokeWidth={2.5} />
                  </div>
                  AVAILABLE OPPORTUNITIES
                </span>
                <span className="text-[9px] font-bold tracking-widest text-[#0f9d58] uppercase">
                  {activeCity.opportunities?.length || 0} CIRCLES OPEN
                </span>
              </div>

              <div className="flex items-center justify-between px-3 py-2 mt-1 text-[8px] font-black uppercase tracking-widest text-white bg-[#17274c] rounded-[4px] shadow-sm">
                <span className="flex-1">CIRCLE NAME</span>
                <span className="w-[80px] text-center">FORMAT</span>
                <span className="w-[80px] text-center">TERRITORY STATUS</span>
              </div>
              <div className="flex flex-col gap-2.5 max-h-[220px] overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden pb-2 border-b border-gray-200 dark:border-white/10">
                {activeCity.opportunities?.map((opp) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{
                        scale: 1.01,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                      key={opp.id}
                      className="group flex items-center justify-between p-3 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[4px] shadow-sm transition-colors"
                    >
                      <div className="flex flex-col flex-1 pr-2">
                        <span className="font-bold text-[#0a1128] dark:text-white text-[12px] leading-tight mb-1">
                          {opp.circleName}
                        </span>
                        {opp.badge && (
                          <span className="text-[8px] font-bold text-[#0f9d58] dark:text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0f9d58] inline-block" />{" "}
                            {opp.badge} Zone
                          </span>
                        )}
                      </div>

                      <div className="w-[80px] flex justify-center px-1">
                        <span className="inline-block text-center px-2 py-1 text-[7px] font-bold uppercase tracking-widest rounded-[2px] bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 max-w-full">
                          {opp.format}
                        </span>
                      </div>

                      <div className="w-[80px] flex justify-center pl-1">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            setBookedOpps((prev) => new Set(prev).add(opp.id));
                          }}
                          whileHover={
                            !bookedOpps.has(opp.id) ? { scale: 1.05 } : {}
                          }
                          whileTap={
                            !bookedOpps.has(opp.id) ? { scale: 0.95 } : {}
                          }
                          className={clsx(
                            "w-full px-1 py-1.5 text-[8px] font-bold rounded-[2px] transition-all duration-300 relative overflow-hidden flex items-center justify-center border",
                            bookedOpps.has(opp.id)
                              ? "bg-[#17274c] text-[#d4af37] border-[#d4af37]/40 shadow-[0_2px_10px_rgba(212,175,55,0.2)] cursor-default"
                              : "bg-[#0f9d58] text-white border-transparent hover:bg-[#0b8243] shadow-[0_2px_10px_rgba(15,157,88,0.2)]",
                          )}
                        >
                          <AnimatePresence mode="wait">
                            {bookedOpps.has(opp.id) ? (
                              <motion.span
                                key="enquired"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute flex items-center gap-1 whitespace-nowrap"
                              >
                                <Check size={10} strokeWidth={3} /> ENQUIRED
                              </motion.span>
                            ) : (
                              <motion.span
                                key="enquire-now"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute whitespace-nowrap"
                              >
                                ENQUIRE NOW
                              </motion.span>
                            )}
                          </AnimatePresence>
                          <span className="opacity-0 flex items-center gap-1 whitespace-nowrap">
                            ENQUIRE NOW
                          </span>
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
