import { useState, useRef, useEffect } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
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
        whileTap={{ scale: 0.97 }}
        className={clsx(
          "flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 text-sm font-bold shadow-sm relative overflow-hidden",
          isDropdownOpen
            ? "bg-[#0b1b42] border-[#d4af37]/50 text-white shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
            : "bg-[#0b1b42] text-white hover:bg-[#121c33] border-transparent"
        )}
      >
        {isDropdownOpen && (
          <>
            <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
            <div className="absolute bottom-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#d4af37]/20 rounded-full blur-lg pointer-events-none" />
          </>
        )}
        <motion.div
          animate={isDropdownOpen ? { scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] } : {}}
          transition={{ duration: 0.4 }}
          className={clsx(
            "flex items-center justify-center transition-colors",
            isDropdownOpen ? "text-[#d4af37]" : "text-white"
          )}
        >
          <Filter className="w-4 h-4" />
        </motion.div>
        
        <span className="hidden sm:inline">Across Filter</span>
        
        <motion.div
          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className={clsx("w-4 h-4", isDropdownOpen ? "text-[#d4af37]" : "opacity-70")} />
        </motion.div>
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
