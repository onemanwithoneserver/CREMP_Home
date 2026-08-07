import { useState } from "react";
import TopHeader from "./components/TopHeader";
import FilterBar from "./components/FilterBar";
import { DEFAULT_FILTERS } from "./components/data";
import type { FilterState } from "./components/data";

interface FiltersProps {
  isMobile?: boolean;
}

export default function Filters(_props: FiltersProps) {
  const [activeTab, setActiveTab] = useState<"commercial" | "business">("commercial");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  return (
    <div className="w-full min-h-full flex-1 flex flex-col bg-cremp-background text-cremp-text-primary font-sans select-none relative overflow-visible transition-colors duration-300">
      <TopHeader
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
        }}
        commercialCount={30}
        businessCount={356}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2 shrink-0 flex flex-col gap-4 relative z-[99999]">
        <FilterBar
          activeTab={activeTab}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filters={filters}
          onFilterChange={setFilters}
        />
      </div>

      <div className="flex-1" />
    </div>
  );
}
