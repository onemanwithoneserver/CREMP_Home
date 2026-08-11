import { MapPin, ArrowRight, Building2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { LocationResult } from "./searchData";

interface SearchResultsProps {
  results: LocationResult[];
  onResultClick: (result: LocationResult) => void;
}

const typeConfig: Record<
  LocationResult["type"],
  { icon: typeof MapPin; badge: string; badgeBg: string; iconBg: string }
> = {
  locality: {
    icon: MapPin,
    badge: "Locality",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    iconBg:
      "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
  },
  landmark: {
    icon: Sparkles,
    badge: "Landmark",
    badgeBg: "bg-violet-50 text-violet-700 border-violet-200/60",
    iconBg:
      "bg-violet-500/10 text-violet-600 group-hover:bg-violet-500 group-hover:text-white",
  },
  hub: {
    icon: Building2,
    badge: "IT Hub",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200/60",
    iconBg:
      "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500 group-hover:text-white",
  },
};

export default function SearchResults({
  results,
  onResultClick,
}: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="py-8 text-center">
        <MapPin className="w-8 h-8 text-gray-300 mx-auto mb-2" />
        <p className="text-sm text-gray-400 font-medium">No results found</p>
        <p className="text-xs text-gray-300 mt-1">
          Try a different search term
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
          {results.length} matching locations
        </h3>
      </div>

      <div className="flex flex-col gap-2">
        {results.map((result, index) => {
          const config = typeConfig[result.type];
          const Icon = config.icon;

          return (
            <motion.button
              key={result.id}
              type="button"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.06,
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onResultClick(result)}
              className={clsx(
                "relative group w-full flex items-center gap-3.5 p-3.5 transition-all duration-200 cursor-pointer text-left",
                "bg-gray-50/60 border-gray-100",
                "hover:bg-white hover:border-[#d4af37]/40 hover:shadow-[0_4px_16px_rgba(23,39,76,0.06)]",
              )}
            >
              <div
                className={clsx(
                  "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200",
                  config.iconBg,
                )}
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-[14px] font-extrabold text-[#0a1128] truncate">
                    {result.name}
                  </h4>
                  <span
                    className={clsx(
                      "text-[8.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border shrink-0",
                      config.badgeBg,
                    )}
                  >
                    {config.badge}
                  </span>
                </div>
                <p className="text-[11.5px] text-gray-500 font-medium truncate">
                  {result.area} · {result.city}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <div className="text-right">
                  <span className="text-[14px] font-extrabold text-[#d4af37] block leading-tight">
                    {result.listings}
                  </span>
                  <span className="text-[9px] text-gray-400 font-medium">
                    listings
                  </span>
                </div>
                <div className="w-7 h-7 rounded-md bg-gray-100 group-hover:bg-[#17274C] flex items-center justify-center transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#d4af37] transition-colors" />
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
