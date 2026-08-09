import { useState, useCallback } from "react";
import TopHeader from "./components/TopHeader";
import SearchBar from "./components/SearchBar";
import AdvancedFilters from "./components/AdvancedFilters";
import { DEFAULT_FILTERS } from "./components/data";
import type { FilterState } from "./components/data";
import type { LocationResult } from "./components/searchData";

interface FiltersProps {
  isMobile?: boolean;
}

export default function Filters(_props: FiltersProps) {
  const [activeTab, setActiveTab] = useState<"commercial" | "business">(
    "commercial"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const handleResultSelect = useCallback((_result: LocationResult) => {
    // Handle location selection (e.g. navigate, update context, etc.)
  }, []);

  return (
    <div className="w-full min-h-full flex-1 flex flex-col bg-white/30 backdrop-blur-2xl border-t border-white/20 text-[#0a1128] font-sans select-none relative transition-colors duration-300 dark:bg-[#17274C]/50 dark:border-white/10 shadow-[0_-8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_-8px_32px_rgba(0,0,0,0.2)]">
      <TopHeader
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        commercialCount={30}
        businessCount={356}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-8 flex flex-col gap-5">
        <section className="relative z-40 flex items-start gap-3 w-full max-w-4xl mx-auto">
          <div className="flex-1">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onResultSelect={handleResultSelect}
              activeTab={activeTab}
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          <div className="shrink-0 relative">
            <AdvancedFilters
              activeTab={activeTab}
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>
        </section>
      </div>

      <div className="flex-1" />
    </div>
  );
}
