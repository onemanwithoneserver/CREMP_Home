import { useState, useRef, useEffect } from "react";
import { Search, Filter, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FilterDropdown from "./FilterDropdown";
import type { FilterState } from "./data";
import clsx from "clsx";

interface FilterBarProps {
  activeTab: "commercial" | "business";
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export default function FilterBar({
  activeTab,
  searchQuery,
  onSearchChange,
  filters,
  onFilterChange,
}: FilterBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex gap-3 relative" ref={containerRef}>
      <div className="flex-1 relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#0b1b42] transition-colors" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search anything..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg leading-5 bg-white/70 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all text-sm shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
        />
      </div>



      <motion.button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          "flex items-center justify-center transition-all duration-200 cursor-pointer",
          isDropdownOpen
            ? "p-3 bg-transparent text-red-500 hover:text-red-600 border-none shadow-none"
            : "gap-2 px-4 py-3 rounded-lg border border-transparent bg-[#0b1b42] text-white hover:bg-[#121c33] shadow-sm text-sm font-bold"
        )}
        aria-label={isDropdownOpen ? "Close filters" : "Open filters"}
      >
        {isDropdownOpen ? (
          <motion.div
            initial={{ scale: 0.5, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <X className="w-5 h-5 text-red-500 hover:text-red-600" strokeWidth={2.5} />
          </motion.div>
        ) : (
          <>
            <div className="flex items-center justify-center text-white">
              <Filter className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline">Filters</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {isDropdownOpen && (
          <FilterDropdown
            activeTab={activeTab}
            filters={filters}
            onFilterChange={onFilterChange}
            onClose={() => setIsDropdownOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
