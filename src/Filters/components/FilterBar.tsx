import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ShoppingCart,
  Building2,
  IndianRupee,
  Utensils,
} from "lucide-react";
import { useState } from "react";
import { COMMERCIAL_PROPERTY_TYPES, BUSINESS_INDUSTRIES } from "../data";

interface FilterBarProps {
  activeTab: "commercial" | "business";
  searchQuery: string;
  onSearchChange: (q: string) => void;
  radiusKm: number;
  onRadiusChange: (r: number) => void;
  // Commercial Quick States
  buyOrLease: "Buy" | "Lease";
  selectedPropertyType: string;
  selectedBudget: string;
  selectedCommercialTags: string[];
  onToggleCommercialTag: (tag: string) => void;
  // Business Quick States
  selectedIndustry: string;
  selectedInvestmentBudget: string;
  selectedBusinessTags: string[];
  onToggleBusinessTag: (tag: string) => void;
  // Modal Triggers
  onOpenAdvancedFilters: () => void;
  onOpenBuyLease: () => void;
  onOpenPropertyType: () => void;
  onOpenBudget: () => void;
  onOpenIndustry: () => void;
  onOpenInvestmentBudget: () => void;
}

export default function FilterBar({
  activeTab,
  searchQuery,
  onSearchChange,
  radiusKm,
  onRadiusChange,
  buyOrLease,
  selectedPropertyType,
  selectedBudget,
  selectedCommercialTags,
  onToggleCommercialTag,
  selectedIndustry,
  selectedInvestmentBudget,
  selectedBusinessTags,
  onToggleBusinessTag,
  onOpenAdvancedFilters,
  onOpenBuyLease,
  onOpenPropertyType,
  onOpenBudget,
  onOpenIndustry,
  onOpenInvestmentBudget,
}: FilterBarProps) {
  const [isRadiusOpen, setIsRadiusOpen] = useState(false);

  const getPropertyTypeName = () => {
    const found = COMMERCIAL_PROPERTY_TYPES.find(
      (p) => p.id === selectedPropertyType
    );
    return found ? found.name : "Property Type";
  };

  const getIndustryName = () => {
    const found = BUSINESS_INDUSTRIES.find((i) => i.id === selectedIndustry);
    return found ? found.name : "Select Industry";
  };

  return (
    <div className="w-full bg-white border-b border-gray-200/80 shadow-xs px-3 sm:px-6 py-2.5 space-y-2 select-none z-20 relative">
      {/* 1. Main Search Row */}
      <div className="flex items-center gap-2 max-w-7xl mx-auto">
        <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200/90 rounded-lg px-3 py-2 text-xs sm:text-sm focus-within:border-[#d4af37] focus-within:bg-white transition-all shadow-2xs">
          <Search className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={
              activeTab === "commercial"
                ? "Search location, area, or project..."
                : "Search industry, brand, or franchise..."
            }
            className="flex-1 bg-transparent border-none outline-none text-[#0a1128] placeholder:text-gray-400 text-xs sm:text-sm font-normal"
          />

          {/* Distance Radius Dropdown */}
          <div className="relative border-l border-gray-200 pl-2">
            <button
              type="button"
              onClick={() => setIsRadiusOpen(!isRadiusOpen)}
              className="flex items-center gap-1 text-[11px] font-semibold text-gray-600 hover:text-[#0a1128]"
            >
              <span>{radiusKm} km</span>
              <ChevronDown
                className={`w-3 h-3 text-gray-400 transition-transform ${
                  isRadiusOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isRadiusOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-24 bg-white border border-gray-200 rounded-[6px] shadow-lg py-1 z-40">
                {[2, 5, 10, 15, 25].map((km) => (
                  <button
                    key={km}
                    type="button"
                    onClick={() => {
                      onRadiusChange(km);
                      setIsRadiusOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                      radiusKm === km
                        ? "bg-[#d4af37]/15 text-[#0a1128] font-bold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {km} km
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Filter Button */}
        <button
          type="button"
          onClick={onOpenAdvancedFilters}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-gray-300 hover:border-gray-400 text-[#0a1128] text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-xs transition-all active:scale-[0.98]"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#ea580c]" />
          <span>Filter</span>
        </button>
      </div>

      {/* 2. Quick Filter Pill Rows */}
      <div className="max-w-7xl mx-auto space-y-1.5 overflow-x-auto no-scrollbar pb-1">
        {activeTab === "commercial" ? (
          <>
            {/* Commercial Row 1: Primary Dropdown Triggers */}
            <div className="flex items-center gap-1.5 flex-nowrap">
              <button
                type="button"
                onClick={onOpenBuyLease}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-white hover:bg-gray-50 text-[11px] font-semibold text-[#0a1128] whitespace-nowrap shadow-2xs"
              >
                <ShoppingCart className="w-3 h-3 text-[#f59e0b]" />
                <span>{buyOrLease}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <button
                type="button"
                onClick={onOpenPropertyType}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-white hover:bg-gray-50 text-[11px] font-semibold text-[#0a1128] whitespace-nowrap shadow-2xs"
              >
                <Building2 className="w-3 h-3 text-[#9333ea]" />
                <span>{getPropertyTypeName()}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <button
                type="button"
                onClick={onOpenBudget}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-white hover:bg-gray-50 text-[11px] font-semibold text-[#0a1128] whitespace-nowrap shadow-2xs"
              >
                <IndianRupee className="w-3 h-3 text-[#16a34a]" />
                <span>₹ {selectedBudget || "1 - 3 Cr"}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {/* Tag Toggles */}
              {["Pre-Leased", "Vacant", "Fractional"].map((tag) => {
                const isActive = selectedCommercialTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => onToggleCommercialTag(tag)}
                    className={`px-2.5 py-1 rounded-[6px] text-[11px] font-medium border whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-[#0b1b42] text-white border-[#0b1b42] shadow-2xs font-semibold"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            {/* Commercial Row 2: Secondary Quick Filter Triggers */}
            <div className="flex items-center gap-1.5 flex-nowrap">
              <button
                type="button"
                onClick={onOpenAdvancedFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-[11px] font-medium text-gray-700 whitespace-nowrap"
              >
                <span>Fit Out</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <button
                type="button"
                onClick={onOpenAdvancedFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-[11px] font-medium text-gray-700 whitespace-nowrap"
              >
                <span>Size</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <button
                type="button"
                onClick={onOpenAdvancedFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-[11px] font-medium text-gray-700 whitespace-nowrap"
              >
                <span>Occupancy</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <button
                type="button"
                onClick={onOpenAdvancedFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-[11px] font-medium text-gray-700 whitespace-nowrap"
              >
                <span>Construction Stage</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Business Opportunities Row 1 */}
            <div className="flex items-center gap-1.5 flex-nowrap">
              <button
                type="button"
                onClick={onOpenIndustry}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-white hover:bg-gray-50 text-[11px] font-semibold text-[#0a1128] whitespace-nowrap shadow-2xs"
              >
                <Utensils className="w-3 h-3 text-[#f59e0b]" />
                <span>{getIndustryName()}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <button
                type="button"
                onClick={onOpenInvestmentBudget}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-white hover:bg-gray-50 text-[11px] font-semibold text-[#0a1128] whitespace-nowrap shadow-2xs"
              >
                <IndianRupee className="w-3 h-3 text-[#16a34a]" />
                <span>{selectedInvestmentBudget || "₹ 25 L - ₹ 50 L"}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {/* Tag Toggles */}
              {[
                "New Franchise",
                "Existing Business",
                "Business for Lease",
                "Distribution",
              ].map((tag) => {
                const isActive = selectedBusinessTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => onToggleBusinessTag(tag)}
                    className={`px-2.5 py-1 rounded-[6px] text-[11px] font-medium border whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-[#0b1b42] text-white border-[#0b1b42] shadow-2xs font-semibold"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            {/* Business Opportunities Row 2 */}
            <div className="flex items-center gap-1.5 flex-nowrap">
              <button
                type="button"
                onClick={onOpenAdvancedFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-[11px] font-medium text-gray-700 whitespace-nowrap"
              >
                <span>Investment</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <button
                type="button"
                onClick={onOpenAdvancedFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-[11px] font-medium text-gray-700 whitespace-nowrap"
              >
                <span>Area Required</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <button
                type="button"
                onClick={onOpenAdvancedFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-[11px] font-medium text-gray-700 whitespace-nowrap"
              >
                <span>Brand</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <button
                type="button"
                onClick={onOpenAdvancedFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-[11px] font-medium text-gray-700 whitespace-nowrap"
              >
                <span>Payback</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
