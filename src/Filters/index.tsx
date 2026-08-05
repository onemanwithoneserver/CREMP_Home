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

  return (
    <div className="w-full min-h-full flex-1 flex flex-col bg-[#f0f2f8] text-slate-900 font-sans select-none relative overflow-visible">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6366f1]/[0.04] rounded-full blur-3xl" />
      </div>

      <TopHeader
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setActiveDropdown(null);
        }}
        commercialCount={30}
        businessCount={356}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2 shrink-0 flex flex-col gap-4 relative z-50">
        <div className="w-full bg-white backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-sm border border-slate-200 flex items-center gap-3 focus-within:border-[#0b1b42] focus-within:ring-4 focus-within:ring-[#0b1b42]/5 transition-all duration-300">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTab === "commercial"
                ? "Search micro-market, building, or road..."
                : "Search brand, industry, or franchise concept..."
            }
            className="w-full bg-transparent border-none outline-none text-[15px] text-slate-800 placeholder:text-slate-400 font-medium"
          />
          <AnimatePresence>
            {searchQuery && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                type="button"
                onClick={() => setSearchQuery("")}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="relative w-full">
          <div className="w-full overflow-x-auto flex items-center gap-3 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="relative flex bg-white p-1 rounded-full border border-slate-200 shadow-sm shrink-0 h-10">
              <motion.div
                className="absolute top-1 bottom-1 rounded-full bg-[#0b1b42]"
                layoutId="buyLeaseIndicator"
                style={{
                  width: "calc(50% - 4px)",
                  left: buyOrLease === "Buy" ? 4 : "calc(50%)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
              <button
                type="button"
                onClick={() => setBuyOrLease("Buy")}
                className={`relative z-10 px-5 rounded-full text-[13px] font-bold transition-colors duration-200 flex items-center ${
                  buyOrLease === "Buy" ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Buy
              </button>
              <button
                type="button"
                onClick={() => setBuyOrLease("Lease")}
                className={`relative z-10 px-5 rounded-full text-[13px] font-bold transition-colors duration-200 flex items-center ${
                  buyOrLease === "Lease" ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Lease
              </button>
            </div>

            <div className="h-5 w-px bg-slate-300 shrink-0 mx-0.5" />

            {activeChips.map((chip) => {
              const isOpen = activeDropdown === chip.id;
              return (
                <motion.button
                  key={chip.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleDropdown(chip.id)}
                  className={`group flex items-center gap-2 px-4 h-10 rounded-full border transition-all shrink-0 whitespace-nowrap shadow-sm ${
                    chip.isActive || isOpen
                      ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                      : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <chip.icon
                    className={`w-4 h-4 ${
                      chip.isActive || isOpen ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  />
                  <span className="text-[13px] font-bold tracking-tight">{chip.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : chip.isActive ? "text-white/70" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  />
                </motion.button>
              );
            })}

            <AnimatePresence>
              {hasActiveFilters && (
                <motion.button
                  initial={{ scale: 0, opacity: 0, width: 0, marginLeft: 0 }}
                  animate={{ scale: 1, opacity: 1, width: "auto", marginLeft: 4 }}
                  exit={{ scale: 0, opacity: 0, width: 0, marginLeft: 0 }}
                  type="button"
                  onClick={handleClearAll}
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 border border-slate-300 transition-colors shrink-0 overflow-hidden"
                  title="Clear all filters"
                >
                  <FilterX className="w-4 h-4 text-slate-600 group-hover:text-slate-900 group-hover:scale-110 transition-transform" />
                </motion.button>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActiveDropdown(null);
                setIsBottomSheetOpen(true);
              }}
              className="group flex items-center gap-2 px-5 h-10 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 transition-all shadow-sm shrink-0 whitespace-nowrap ml-auto"
            >
              <SlidersHorizontal className="w-4 h-4 text-slate-500 group-hover:text-slate-700" />
              <span className="text-[13px] font-bold tracking-tight">Advanced Filters</span>
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
                  className="fixed inset-0 z-[60] bg-black/15 backdrop-blur-[1px]"
                />

                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-0 sm:left-2 top-full mt-2.5 w-[calc(100vw-32px)] sm:w-[440px] max-w-[calc(100vw-32px)] bg-white border border-slate-200 shadow-[0_25px_70px_rgba(11,27,66,0.22)] rounded-2xl z-[70] p-4 sm:p-5 max-h-[75vh] overflow-y-auto"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      {activeDropdown === "property" && "Property Type"}
                      {activeDropdown === "budget" && "Budget"}
                      {activeDropdown === "size" && "Size (Sq.Ft)"}
                      {activeDropdown === "fitout" && "Fit-Out Status"}
                      {activeDropdown === "status" && "Project Status"}
                      {activeDropdown === "tags" && "Property Tags"}
                      {activeDropdown === "deal" && "Deal Preference"}
                      {activeDropdown === "industry" && "Industry"}
                      {activeDropdown === "inv-budget" && "Investment Range"}
                      {activeDropdown === "model" && "Business Model"}
                      {activeDropdown === "payback" && "Payback Period"}
                      {activeDropdown === "biz-tags" && "Business Tags"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(null)}
                      className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {activeDropdown === "property" && (
                    <div className="grid grid-cols-2 gap-2">
                      {PROPERTY_TYPES.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setFilters({ ...filters, propertyType: opt.id });
                            setActiveDropdown(null);
                          }}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all text-left ${
                            filters.propertyType === opt.id
                              ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <opt.icon
                            className={`w-4 h-4 shrink-0 ${
                              filters.propertyType === opt.id ? "text-[#d4af37]" : "text-slate-400"
                            }`}
                          />
                          <span className="text-xs font-bold">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "budget" && (
                    <div className="flex flex-col gap-1.5">
                      {BUDGET_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setFilters({ ...filters, budget: opt });
                            setActiveDropdown(null);
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            filters.budget === opt
                              ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
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
                          onClick={() => {
                            setFilters({ ...filters, size: opt });
                            setActiveDropdown(null);
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            filters.size === opt
                              ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span>{opt}</span>
                          {filters.size === opt && <Check className="w-4 h-4 text-[#d4af37]" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "fitout" && (
                    <div className="flex flex-col gap-1.5">
                      {FIT_OUT_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setFilters({ ...filters, fitOut: opt.id });
                            setActiveDropdown(null);
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            filters.fitOut === opt.id
                              ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <opt.icon
                              className={`w-4 h-4 ${
                                filters.fitOut === opt.id ? "text-[#d4af37]" : "text-slate-400"
                              }`}
                            />
                            <span>{opt.label}</span>
                          </div>
                          {filters.fitOut === opt.id && <Check className="w-4 h-4 text-[#d4af37]" />}
                        </button>
                      ))}
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
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                              isSelected
                                ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                                : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <span>{opt}</span>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                isSelected ? "bg-[#d4af37] border-[#d4af37]" : "border-slate-300 bg-white"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 text-slate-900 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(null)}
                        className="mt-2 w-full py-2 bg-[#0b1b42] text-white text-xs font-bold rounded-xl"
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
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                              isSelected
                                ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                                : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <opt.icon
                                className={`w-4 h-4 ${isSelected ? "text-[#d4af37]" : "text-slate-400"}`}
                              />
                              <span>{opt.label}</span>
                            </div>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                isSelected ? "bg-[#d4af37] border-[#d4af37]" : "border-slate-300 bg-white"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 text-slate-900 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(null)}
                        className="mt-2 w-full py-2 bg-[#0b1b42] text-white text-xs font-bold rounded-xl"
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
                          onClick={() => {
                            setFilters({ ...filters, dealPref: opt });
                            setActiveDropdown(null);
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            filters.dealPref === opt
                              ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
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
                          onClick={() => {
                            setFilters({ ...filters, industry: opt.id });
                            setActiveDropdown(null);
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            filters.industry === opt.id
                              ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
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
                          onClick={() => {
                            setFilters({ ...filters, invBudget: opt });
                            setActiveDropdown(null);
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            filters.invBudget === opt
                              ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
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
                          onClick={() => {
                            setFilters({ ...filters, model: opt });
                            setActiveDropdown(null);
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            filters.model === opt
                              ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
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
                          onClick={() => {
                            setFilters({ ...filters, payback: opt });
                            setActiveDropdown(null);
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            filters.payback === opt
                              ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
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
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                              isSelected
                                ? "bg-[#0b1b42] border-[#0b1b42] text-white"
                                : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <opt.icon
                                className={`w-4 h-4 ${isSelected ? "text-[#d4af37]" : "text-slate-400"}`}
                              />
                              <span>{opt.label}</span>
                            </div>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                isSelected ? "bg-[#d4af37] border-[#d4af37]" : "border-slate-300 bg-white"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 text-slate-900 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(null)}
                        className="mt-2 w-full py-2 bg-[#0b1b42] text-white text-xs font-bold rounded-xl"
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
