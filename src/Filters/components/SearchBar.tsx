import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  activeTab: "commercial" | "business";
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ activeTab, searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="w-full bg-cremp-surface/90 backdrop-blur-xl rounded px-4 py-2.5 shadow-elevation-2 border border-cremp-border flex items-center gap-3 focus-within:border-cremp-accent/50 focus-within:shadow-glow-accent transition-all duration-300">
      <Search className="w-4.5 h-4.5 text-cremp-text-muted shrink-0" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={
          activeTab === "commercial"
            ? "Search micro-market, building, or road..."
            : "Search brand, industry, or franchise concept..."
        }
        aria-label="Search listings"
        className="w-full bg-transparent border-none outline-none text-sm text-cremp-text-primary placeholder:text-cremp-text-muted font-medium"
      />
      <AnimatePresence>
        {searchQuery && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            type="button"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
            className="w-6 h-6 rounded-sm flex items-center justify-center bg-cremp-surface-alt hover:bg-error-surface text-cremp-text-muted hover:text-error transition-colors duration-200"
          >
            <X className="w-3.5 h-3.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
