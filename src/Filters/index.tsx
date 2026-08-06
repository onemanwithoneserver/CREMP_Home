import { useRef, useState } from "react";
import TopHeader from "./components/TopHeader";
import AdvancedFilterModal from "./components/AdvancedFilterModal";
import SearchBar from "./components/SearchBar";
import FilterToolbar from "./components/FilterToolbar";
import FilterDropdownPanel from "./components/FilterDropdownPanel";
import { getCommercialChips, getBusinessChips } from "./components/chipHelpers";
import { DEFAULT_FILTERS } from "./components/data";
import type { FilterState, SingleSelectFilterKey, ArrayFilterKey } from "./components/data";

interface FiltersProps {
  isMobile?: boolean;
}

export default function Filters(_props: FiltersProps) {
  const [activeTab, setActiveTab] = useState<"commercial" | "business">("commercial");
  const [searchQuery, setSearchQuery] = useState("");
  const [buyOrLease, setBuyOrLease] = useState<"Buy" | "Lease">("Buy");
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownLeft, setDropdownLeft] = useState<number | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const toolbarRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleClearAll = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchQuery("");
    setActiveDropdown(null);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown((prev) => {
      const next = prev === id ? null : id;
      const btn = chipRefs.current[id];
      const container = toolbarRef.current;
      if (next && btn && container && window.innerWidth >= 640) {
        const btnRect = btn.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const maxLeft = Math.max(0, containerRect.width - 320);
        setDropdownLeft(Math.max(0, Math.min(btnRect.left - containerRect.left, maxLeft)));
      } else {
        setDropdownLeft(null);
      }
      return next;
    });
  };

  const toggleArrayItem = (key: ArrayFilterKey, val: string) => {
    setFilters((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val],
      };
    });
  };

  const toggleSingleValue = (key: SingleSelectFilterKey, value: string, defaultValue: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? defaultValue : value,
    }));
    setActiveDropdown(null);
  };

  const selectBuyOrLease = (opt: "Buy" | "Lease") => {
    setBuyOrLease((prev) => (prev === opt ? "Buy" : opt));
    setActiveDropdown(null);
  };

  const hasActiveFilters =
    activeTab === "commercial"
      ? filters.propertyType !== "office-space" ||
        filters.budget !== "Any" ||
        filters.fitOut !== "Any" ||
        filters.size !== "Any" ||
        filters.commercialTags.length > 0 ||
        filters.status.length > 0 ||
        filters.dealPref !== "Any"
      : filters.industry !== "food-beverage" ||
        filters.invBudget !== "Any" ||
        filters.model !== "Any" ||
        filters.businessTags.length > 0 ||
        filters.payback !== "Any ROI";

  const activeChips = activeTab === "commercial" ? getCommercialChips(filters) : getBusinessChips(filters);

  return (
    <div className="w-full min-h-full flex-1 flex flex-col bg-cremp-background text-cremp-text-primary font-sans select-none relative overflow-visible transition-colors duration-300">
      <TopHeader
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setActiveDropdown(null);
        }}
        commercialCount={30}
        businessCount={356}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2 shrink-0 flex flex-col gap-3 relative z-50">
        <SearchBar activeTab={activeTab} searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <div ref={toolbarRef} className="relative w-full">
          <FilterToolbar
            activeTab={activeTab}
            buyOrLease={buyOrLease}
            activeChips={activeChips}
            activeDropdown={activeDropdown}
            hasActiveFilters={hasActiveFilters}
            onToggleDropdown={toggleDropdown}
            onClearAll={handleClearAll}
            onOpenAdvanced={() => {
              setActiveDropdown(null);
              setIsBottomSheetOpen(true);
            }}
            chipRefs={chipRefs}
          />

          <FilterDropdownPanel
            activeDropdown={activeDropdown}
            dropdownLeft={dropdownLeft}
            filters={filters}
            buyOrLease={buyOrLease}
            onSelectBuyOrLease={selectBuyOrLease}
            onToggleSingleValue={toggleSingleValue}
            onToggleArrayItem={toggleArrayItem}
            onClose={() => setActiveDropdown(null)}
          />
        </div>
      </div>

      <div className="flex-1" />

      <AdvancedFilterModal
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        activeTab={activeTab}
        filters={filters}
        onApply={(updatedFilters) => setFilters(updatedFilters)}
        onReset={() => setFilters(DEFAULT_FILTERS)}
      />
    </div>
  );
}
