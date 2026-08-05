import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Building2,
  Store,
  Building,
  Armchair,
  FilterX,
  Factory,
  Banknote,
  Tags,
  Check,
  TrendingUp,
  Briefcase,
  Maximize2,
  ListFilter,
} from "lucide-react";
import TopHeader from "./components/TopHeader";
import AdvancedFilterModal, {
  DEFAULT_FILTERS,
  PROPERTY_TYPES,
  BUDGET_OPTIONS,
  SIZE_OPTIONS,
  FIT_OUT_OPTIONS,
  COMMERCIAL_TAGS,
  STATUS_OPTIONS,
  DEAL_PREF,
  INDUSTRY_OPTIONS,
  INV_BUDGET,
  MODEL_OPTIONS,
  PAYBACK_OPTIONS,
  BUSINESS_TAGS,
} from "./components/AdvancedFilterModal";
import type { FilterState } from "./components/AdvancedFilterModal";

const CHIP_ICON_COLORS = [
  "bg-gradient-to-br from-blue-500 to-indigo-600",
  "bg-gradient-to-br from-orange-400 to-red-500",
  "bg-gradient-to-br from-emerald-400 to-teal-500",
  "bg-gradient-to-br from-violet-500 to-purple-600",
  "bg-gradient-to-br from-cyan-400 to-blue-500",
  "bg-gradient-to-br from-pink-500 to-rose-600",
  "bg-gradient-to-br from-amber-400 to-orange-500",
];

interface FiltersProps {
  isMobile?: boolean;
}

export default function Filters(_props: FiltersProps) {
  const [activeTab, setActiveTab] = useState<"commercial" | "business">("commercial");
  const [searchQuery, setSearchQuery] = useState("");
  const [buyOrLease, setBuyOrLease] = useState<"Buy" | "Lease">("Buy");
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleClearAll = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchQuery("");
    setActiveDropdown(null);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const toggleArrayItem = (key: "status" | "commercialTags" | "businessTags", val: string) => {
    setFilters((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val],
      };
    });
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

  const commercialChips = [
    {
      id: "property",
      icon: Building2,
      label: PROPERTY_TYPES.find((p) => p.id === filters.propertyType)?.label || "Property Type",
      isActive: filters.propertyType !== "office-space",
    },
    {
      id: "budget",
      icon: Banknote,
      label: filters.budget !== "Any" ? filters.budget : "Budget",
      isActive: filters.budget !== "Any",
    },
    {
      id: "size",
      icon: Maximize2,
      label: filters.size !== "Any" ? filters.size : "Size",
      isActive: filters.size !== "Any",
    },
    {
      id: "fitout",
      icon: Armchair,
      label: filters.fitOut !== "Any" ? filters.fitOut : "Fit-Out",
      isActive: filters.fitOut !== "Any",
    },
    {
      id: "status",
      icon: Building,
      label: filters.status.length > 0 ? `${filters.status.length} Status` : "Project Status",
      isActive: filters.status.length > 0,
    },
    {
      id: "tags",
      icon: Tags,
      label: filters.commercialTags.length > 0 ? `${filters.commercialTags.length} Tags` : "Tags",
      isActive: filters.commercialTags.length > 0,
    },
    {
      id: "deal",
      icon: Briefcase,
      label: filters.dealPref !== "Any" ? filters.dealPref : "Deal By",
      isActive: filters.dealPref !== "Any",
    },
  ];

  const businessChips = [
    {
      id: "industry",
      icon: Factory,
      label: INDUSTRY_OPTIONS.find((p) => p.id === filters.industry)?.label || "Industry",
      isActive: filters.industry !== "food-beverage",
    },
    {
      id: "inv-budget",
      icon: Banknote,
      label: filters.invBudget !== "Any" ? filters.invBudget : "Investment",
      isActive: filters.invBudget !== "Any",
    },
    {
      id: "model",
      icon: Store,
      label: filters.model !== "Any" ? filters.model : "Model",
      isActive: filters.model !== "Any",
    },
    {
      id: "payback",
      icon: TrendingUp,
      label: filters.payback !== "Any ROI" ? filters.payback : "Payback",
      isActive: filters.payback !== "Any ROI",
    },
    {
      id: "biz-tags",
      icon: Tags,
      label: filters.businessTags.length > 0 ? `${filters.businessTags.length} Tags` : "Tags",
      isActive: filters.businessTags.length > 0,
    },
  ];

  const activeChips = activeTab === "commercial" ? commercialChips : businessChips;

  const dropdownLabel: Record<string, string> = {
    property: "Property Type",
    budget: "Budget",
    size: "Size (Sq.Ft)",
    fitout: "Fit-Out Status",
    status: "Project Status",
    tags: "Property Tags",
    deal: "Deal Preference",
    industry: "Industry",
    "inv-budget": "Investment Range",
    model: "Business Model",
    payback: "Payback Period",
    "biz-tags": "Business Tags",
  };

  const singleSelectBtn = (isSelected: boolean) =>
    `flex items-center justify-between px-3.5 py-2.5 rounded-[4px] border text-xs font-bold transition-all duration-200 ${
      isSelected
        ? "bg-[#0b1b42] border-[#0b1b42] text-white shadow-[0_4px_12px_rgba(11,27,66,0.15)]"
        : "bg-gray-50/90 border-gray-200/80 hover:border-gray-300 text-[#0a1128] hover:bg-white"
    }`;

  const multiSelectBtn = (isSelected: boolean) =>
    `flex items-center justify-between px-3.5 py-2.5 rounded-[4px] border text-xs font-bold transition-all duration-200 ${
      isSelected
        ? "bg-[#0b1b42] border-[#0b1b42] text-white shadow-[0_4px_12px_rgba(11,27,66,0.15)]"
        : "bg-gray-50/90 border-gray-200/80 hover:border-gray-300 text-[#0a1128] hover:bg-white"
    }`;

  const checkBox = (isSelected: boolean) =>
    `w-4 h-4 rounded-[2px] border flex items-center justify-center transition-all ${
      isSelected ? "bg-[#d4af37] border-[#d4af37]" : "border-gray-300 bg-white"
    }`;

  return (
    <div className="w-full min-h-full flex-1 flex flex-col bg-white text-[#0a1128] font-sans select-none relative overflow-visible transition-colors duration-300">
      <TopHeader
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setActiveDropdown(null);
        }}
        commercialCount={30}
        businessCount={356}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-1.5 shrink-0 flex flex-col gap-3 relative z-50">
        <div className="w-full bg-white/70 backdrop-blur-xl rounded-[4px] px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200/80 flex items-center gap-3 focus-within:border-[#d4af37]/40 focus-within:shadow-[0_0_0_3px_rgba(212,175,55,0.08)] transition-all duration-300">
          <Search className="w-4.5 h-4.5 text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTab === "commercial"
                ? "Search micro-market, building, or road..."
                : "Search brand, industry, or franchise concept..."
            }
            className="w-full bg-transparent border-none outline-none text-sm text-[#0a1128] placeholder:text-gray-400 font-medium"
          />
          <AnimatePresence>
            {searchQuery && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                type="button"
                onClick={() => setSearchQuery("")}
                className="w-6 h-6 rounded-[2px] flex items-center justify-center bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="relative w-full">
          <div className="w-full overflow-x-auto flex items-center gap-2 pb-1.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                if (hasActiveFilters) {
                  handleClearAll();
                }
              }}
              className={`group relative flex items-center justify-center w-9 h-9 rounded-[4px] border shrink-0 transition-all duration-300 ${
                hasActiveFilters
                  ? "bg-red-50 border-red-200 hover:bg-red-100"
                  : "bg-white/30 border-gray-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              }`}
              title={hasActiveFilters ? "Clear all filters" : "Filters"}
            >
              {hasActiveFilters ? (
                <FilterX className="w-4 h-4 text-red-500" />
              ) : (
                <ListFilter className="w-4 h-4 text-gray-500" />
              )}
              {hasActiveFilters && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white leading-none">!</span>
                </span>
              )}
            </motion.button>

            <div className="h-5 w-px bg-gray-200 shrink-0" />

            <div className="relative flex bg-white/30 backdrop-blur-md p-1 rounded-[4px] border border-gray-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.05)] shrink-0 h-9">
              <motion.div
                className="absolute top-1 bottom-1 rounded-[3px] bg-[#0b1b42]"
                layoutId="buyLeaseIndicator"
                style={{
                  width: "calc(50% - 4px)",
                  left: buyOrLease === "Buy" ? 4 : "calc(50%)",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              />
              <button
                type="button"
                onClick={() => setBuyOrLease("Buy")}
                className={`relative z-10 px-4 rounded-[3px] text-xs font-bold transition-colors duration-200 flex items-center ${
                  buyOrLease === "Buy" ? "text-white" : "text-gray-600 hover:text-[#0a1128]"
                }`}
              >
                Buy
              </button>
              <button
                type="button"
                onClick={() => setBuyOrLease("Lease")}
                className={`relative z-10 px-4 rounded-[3px] text-xs font-bold transition-colors duration-200 flex items-center ${
                  buyOrLease === "Lease" ? "text-white" : "text-gray-600 hover:text-[#0a1128]"
                }`}
              >
                Lease
              </button>
            </div>

            <div className="h-5 w-px bg-gray-200 shrink-0" />

            {activeChips.map((chip, idx) => {
              const isOpen = activeDropdown === chip.id;
              const colorClass = CHIP_ICON_COLORS[idx % CHIP_ICON_COLORS.length];
              return (
                <motion.button
                  key={chip.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggleDropdown(chip.id)}
                  className={`group flex items-center gap-2 px-2.5 h-9 rounded-[4px] border transition-all duration-300 shrink-0 whitespace-nowrap ${
                    chip.isActive || isOpen
                      ? "bg-[#0b1b42] border-[#d4af37]/50 text-white shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
                      : "bg-white/30 backdrop-blur-md border-gray-200/80 hover:bg-white/50 text-[#0a1128] shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    className={`w-7 h-7 rounded-[4px] flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${
                      chip.isActive || isOpen
                        ? "bg-black/30 border border-[#d4af37]/40 shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                        : `${colorClass} shadow-sm`
                    }`}
                  >
                    <chip.icon
                      className={`w-3.5 h-3.5 ${
                        chip.isActive || isOpen ? "text-[#d4af37]" : "text-white"
                      }`}
                      strokeWidth={chip.isActive || isOpen ? 2.5 : 2}
                    />
                  </motion.div>
                  <span className="text-xs font-bold tracking-tight">{chip.label}</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    } ${
                      chip.isActive || isOpen ? "text-[#d4af37]" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  />
                </motion.button>
              );
            })}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setActiveDropdown(null);
                setIsBottomSheetOpen(true);
              }}
              className="group flex items-center gap-2 px-3 h-9 rounded-[4px] bg-white/30 backdrop-blur-md border border-gray-200/80 hover:bg-white/50 text-[#0a1128] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.05)] shrink-0 whitespace-nowrap ml-auto"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 4 }}
                className="w-7 h-7 rounded-[4px] bg-white/80 border border-transparent group-hover:border-gray-300 shadow-sm flex items-center justify-center text-gray-600 transition-all"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </motion.div>
              <span className="text-xs font-bold tracking-tight">Advanced Filters</span>
            </motion.button>
          </div>

          <AnimatePresence>
            {activeDropdown && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveDropdown(null)}
                  className="fixed inset-0 z-[60]"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.3, y: 40, filter: "blur(20px)", borderRadius: "100px" }}
                  animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", borderRadius: "4px" }}
                  exit={{ opacity: 0, scale: 0.5, y: 20, filter: "blur(15px)", borderRadius: "50px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, mass: 1.5 }}
                  className="absolute left-0 sm:left-2 top-full mt-2 w-[calc(100vw-32px)] sm:w-[420px] max-w-[calc(100vw-32px)] bg-white/80 backdrop-blur-2xl border border-gray-200/50 shadow-2xl z-[70] p-4 max-h-[75vh] overflow-y-auto"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-[2px] bg-[#0b1b42]/10 flex items-center justify-center text-[#0b1b42]">
                        <ListFilter className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0a1128]">
                        {activeDropdown && dropdownLabel[activeDropdown]}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(null)}
                      className="w-6 h-6 rounded-[2px] flex items-center justify-center bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </button>
                  </div>

                  {activeDropdown === "property" && (
                    <div className="grid grid-cols-2 gap-2">
                      {PROPERTY_TYPES.map((opt) => {
                        const sel = filters.propertyType === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setFilters({ ...filters, propertyType: opt.id });
                              setActiveDropdown(null);
                            }}
                            className={`flex items-center gap-2.5 p-3 rounded-[4px] border transition-all text-left ${
                              sel
                                ? "bg-[#0b1b42] border-[#d4af37]/50 text-white shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
                                : "bg-gray-50/90 border-gray-200/80 hover:border-gray-300 text-[#0a1128] hover:bg-white"
                            }`}
                          >
                            <div className={`w-7 h-7 rounded-[4px] flex items-center justify-center shrink-0 ${
                              sel ? "bg-black/30 border border-[#d4af37]/40" : "bg-gradient-to-br from-blue-500 to-indigo-600"
                            }`}>
                              <opt.icon className={`w-3.5 h-3.5 ${sel ? "text-[#d4af37]" : "text-white"}`} />
                            </div>
                            <span className="text-xs font-bold">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {activeDropdown === "budget" && (
                    <div className="flex flex-col gap-1.5">
                      {BUDGET_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => { setFilters({ ...filters, budget: opt }); setActiveDropdown(null); }}
                          className={singleSelectBtn(filters.budget === opt)}
                        >
                          <span>{opt}</span>
                          {filters.budget === opt && <Check className="w-4 h-4 text-[#d4af37]" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "size" && (
                    <div className="flex flex-col gap-1.5">
                      {SIZE_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => { setFilters({ ...filters, size: opt }); setActiveDropdown(null); }}
                          className={singleSelectBtn(filters.size === opt)}
                        >
                          <span>{opt}</span>
                          {filters.size === opt && <Check className="w-4 h-4 text-[#d4af37]" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "fitout" && (
                    <div className="flex flex-col gap-1.5">
                      {FIT_OUT_OPTIONS.map((opt) => {
                        const sel = filters.fitOut === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => { setFilters({ ...filters, fitOut: opt.id }); setActiveDropdown(null); }}
                            className={singleSelectBtn(sel)}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className={`w-6 h-6 rounded-[4px] flex items-center justify-center ${sel ? "bg-black/30 border border-[#d4af37]/40" : "bg-gradient-to-br from-violet-500 to-purple-600"}`}>
                                <opt.icon className={`w-3 h-3 ${sel ? "text-[#d4af37]" : "text-white"}`} />
                              </div>
                              <span>{opt.label}</span>
                            </div>
                            {sel && <Check className="w-4 h-4 text-[#d4af37]" />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {activeDropdown === "status" && (
                    <div className="flex flex-col gap-2">
                      {STATUS_OPTIONS.map((opt) => {
                        const isSelected = filters.status.includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => toggleArrayItem("status", opt)}
                            className={multiSelectBtn(isSelected)}
                          >
                            <span>{opt}</span>
                            <div className={checkBox(isSelected)}>
                              {isSelected && <Check className="w-3 h-3 text-[#0a1128] stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(null)}
                        className="mt-1.5 w-full py-2 bg-[#0b1b42] text-white text-xs font-bold rounded-[4px] shadow-[0_4px_12px_rgba(11,27,66,0.2)] hover:shadow-[0_8px_24px_rgba(11,27,66,0.3)] transition-shadow"
                      >
                        Done
                      </button>
                    </div>
                  )}

                  {activeDropdown === "tags" && (
                    <div className="flex flex-col gap-2">
                      {COMMERCIAL_TAGS.map((opt) => {
                        const isSelected = filters.commercialTags.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggleArrayItem("commercialTags", opt.id)}
                            className={multiSelectBtn(isSelected)}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className={`w-6 h-6 rounded-[4px] flex items-center justify-center ${isSelected ? "bg-black/30 border border-[#d4af37]/40" : "bg-gradient-to-br from-emerald-400 to-teal-500"}`}>
                                <opt.icon className={`w-3 h-3 ${isSelected ? "text-[#d4af37]" : "text-white"}`} />
                              </div>
                              <span>{opt.label}</span>
                            </div>
                            <div className={checkBox(isSelected)}>
                              {isSelected && <Check className="w-3 h-3 text-[#0a1128] stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(null)}
                        className="mt-1.5 w-full py-2 bg-[#0b1b42] text-white text-xs font-bold rounded-[4px] shadow-[0_4px_12px_rgba(11,27,66,0.2)] hover:shadow-[0_8px_24px_rgba(11,27,66,0.3)] transition-shadow"
                      >
                        Done
                      </button>
                    </div>
                  )}

                  {activeDropdown === "deal" && (
                    <div className="flex flex-col gap-1.5">
                      {DEAL_PREF.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => { setFilters({ ...filters, dealPref: opt }); setActiveDropdown(null); }}
                          className={singleSelectBtn(filters.dealPref === opt)}
                        >
                          <span>{opt}</span>
                          {filters.dealPref === opt && <Check className="w-4 h-4 text-[#d4af37]" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "industry" && (
                    <div className="flex flex-col gap-1.5">
                      {INDUSTRY_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => { setFilters({ ...filters, industry: opt.id }); setActiveDropdown(null); }}
                          className={singleSelectBtn(filters.industry === opt.id)}
                        >
                          <span>{opt.label}</span>
                          {filters.industry === opt.id && <Check className="w-4 h-4 text-[#d4af37]" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "inv-budget" && (
                    <div className="flex flex-col gap-1.5">
                      {INV_BUDGET.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => { setFilters({ ...filters, invBudget: opt }); setActiveDropdown(null); }}
                          className={singleSelectBtn(filters.invBudget === opt)}
                        >
                          <span>{opt}</span>
                          {filters.invBudget === opt && <Check className="w-4 h-4 text-[#d4af37]" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "model" && (
                    <div className="flex flex-col gap-1.5">
                      {MODEL_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => { setFilters({ ...filters, model: opt }); setActiveDropdown(null); }}
                          className={singleSelectBtn(filters.model === opt)}
                        >
                          <span>{opt}</span>
                          {filters.model === opt && <Check className="w-4 h-4 text-[#d4af37]" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "payback" && (
                    <div className="flex flex-col gap-1.5">
                      {PAYBACK_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => { setFilters({ ...filters, payback: opt }); setActiveDropdown(null); }}
                          className={singleSelectBtn(filters.payback === opt)}
                        >
                          <span>{opt}</span>
                          {filters.payback === opt && <Check className="w-4 h-4 text-[#d4af37]" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "biz-tags" && (
                    <div className="flex flex-col gap-2">
                      {BUSINESS_TAGS.map((opt) => {
                        const isSelected = filters.businessTags.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggleArrayItem("businessTags", opt.id)}
                            className={multiSelectBtn(isSelected)}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className={`w-6 h-6 rounded-[4px] flex items-center justify-center ${isSelected ? "bg-black/30 border border-[#d4af37]/40" : "bg-gradient-to-br from-pink-500 to-rose-600"}`}>
                                <opt.icon className={`w-3 h-3 ${isSelected ? "text-[#d4af37]" : "text-white"}`} />
                              </div>
                              <span>{opt.label}</span>
                            </div>
                            <div className={checkBox(isSelected)}>
                              {isSelected && <Check className="w-3 h-3 text-[#0a1128] stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(null)}
                        className="mt-1.5 w-full py-2 bg-[#0b1b42] text-white text-xs font-bold rounded-[4px] shadow-[0_4px_12px_rgba(11,27,66,0.2)] hover:shadow-[0_8px_24px_rgba(11,27,66,0.3)] transition-shadow"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
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
