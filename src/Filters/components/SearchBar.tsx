import { useState, useRef, useEffect, useCallback } from "react";
import { Search, X, MapPin, Building2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { searchLocations, DEFAULT_LOCATIONS } from "./searchData";
import type { LocationResult } from "./searchData";
import type { FilterState } from "./data";
import BasicFilters from "./BasicFilters";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onResultSelect: (result: LocationResult) => void;
  activeTab: "commercial" | "business";
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const typeIcons: Record<LocationResult["type"], typeof MapPin> = {
  locality: MapPin,
  landmark: Sparkles,
  hub: Building2,
};

export default function SearchBar({
  searchQuery,
  onSearchChange,
  onResultSelect,
  activeTab,
  filters,
  onFilterChange,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<LocationResult[]>(DEFAULT_LOCATIONS);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateResults = useCallback((query: string) => {
    setResults(searchLocations(query));
  }, []);

  useEffect(() => {
    updateResults(searchQuery);
  }, [searchQuery, updateResults]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showDropdown = isFocused;

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        className={clsx(
          "relative flex items-center transition-all duration-300 rounded-lg overflow-hidden",
          isFocused
            ? "ring-2 ring-[#d4af37]/50 shadow-[0_4px_24px_rgba(212,175,55,0.18)]"
            : "shadow-[0_2px_10px_rgba(11,27,66,0.06)]"
        )}
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <motion.div
            animate={isFocused ? { scale: [1, 1.15, 1] } : { scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Search
              className={clsx(
                "h-[18px] w-[18px] transition-colors duration-300",
                isFocused ? "text-[#d4af37]" : "text-gray-400"
              )}
            />
          </motion.div>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search KPHB, Kukatpally, Madhapur..."
          className={clsx(
            "block w-full pl-11 pr-10 py-3.5 text-sm font-medium leading-5",
            "bg-white/25 backdrop-blur-lg border border-white/40 shadow-sm dark:bg-white/5 dark:border-white/10",
            "placeholder-gray-500 text-[#0a1128] dark:text-white dark:placeholder-gray-400",
            "focus:outline-none transition-all duration-300",
            "rounded-lg",
            isFocused && "border-[#d4af37]/60 bg-white/35 dark:bg-white/10 shadow-[0_0_24px_rgba(212,175,55,0.12)]"
          )}
          id="search-location-input"
          autoComplete="off"
        />
        <AnimatePresence>
          {searchQuery && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 20 }}
              type="button"
              onClick={() => {
                onSearchChange("");
                inputRef.current?.focus();
              }}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-red-400 transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 380 }}
            className="absolute z-50 w-full mt-2.5 bg-white/70 dark:bg-[#0e172f]/85 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-xl shadow-[0_12px_40px_rgba(11,27,66,0.14),0_4px_12px_rgba(0,0,0,0.05)] overflow-visible"
          >
            {/* Gold top accent */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70" />

            <div className="px-3 pt-2.5 pb-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-1">
                {searchQuery ? "Search Results" : "Popular Locations"}
              </p>
            </div>

            <div className="px-2 pb-1">
              {results.length > 0 ? (
                results.map((result, index) => {
                  const Icon = typeIcons[result.type];
                  return (
                    <motion.button
                      key={result.id}
                      type="button"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.22, ease: "easeOut" }}
                      whileHover={{
                        x: 4,
                        backgroundColor: "rgba(212,175,55,0.05)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onResultSelect(result);
                        setIsFocused(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all cursor-pointer group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className={clsx(
                          "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300",
                          "bg-[#0b1b42]/[0.06] dark:bg-white/[0.06] text-[#0b1b42] dark:text-gray-300 group-hover:bg-[#0b1b42] group-hover:text-[#d4af37] dark:group-hover:bg-[#0b1b42] dark:group-hover:text-[#d4af37]"
                        )}
                      >
                        <Icon className="w-4 h-4" strokeWidth={2} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold text-[#0a1128] dark:text-gray-100 truncate group-hover:text-[#0b1b42] dark:group-hover:text-white transition-colors">
                          {result.name}
                        </p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">
                          {result.area} · {result.city}
                        </p>
                      </div>
                      <div className="shrink-0 flex flex-col items-end">
                        <span className="text-[11px] font-bold text-[#d4af37]">
                          {result.listings}
                        </span>
                        <span className="text-[9px] text-gray-400 dark:text-gray-500 font-medium">
                          listings
                        </span>
                      </div>
                    </motion.button>
                  );
                })
              ) : (
                <div className="px-3 py-5 text-center">
                  <p className="text-sm text-gray-400 font-medium">
                    No locations found
                  </p>
                  <p className="text-xs text-gray-300 dark:text-gray-500 mt-1">
                    Try searching for a different area
                  </p>
                </div>
              )}
            </div>

            <div className="mx-3 h-px bg-gradient-to-r from-transparent via-gray-200/60 dark:via-white/10 to-transparent" />

            <div className="px-3 py-3 relative z-[100] overflow-visible">
              <BasicFilters
                activeTab={activeTab}
                filters={filters}
                onFilterChange={onFilterChange}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
