import { useRef, useState } from "react";
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

const CATEGORY_ICON_BG: Record<string, string> = {
  property: "bg-[#8B5CF6]",
  industry: "bg-[#8B5CF6]",
  budget: "bg-[#F97316]",
  "inv-budget": "bg-[#F97316]",
  size: "bg-[#0EA5E9]",
  fitout: "bg-[#14B8A6]",
  model: "bg-[#14B8A6]",
  status: "bg-[#10B981]",
  tags: "bg-[#D946EF]",
  "biz-tags": "bg-[#D946EF]",
  deal: "bg-cremp-accent",
  payback: "bg-cremp-accent",
};

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
        const maxLeft = Math.max(0, containerRect.width - 288);
        setDropdownLeft(Math.max(0, Math.min(btnRect.left - containerRect.left, maxLeft)));
      } else {
        setDropdownLeft(null);
      }
      return next;
    });
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

  const toggleSingleValue = (
    key:
      | "propertyType"
      | "budget"
      | "size"
      | "fitOut"
      | "dealPref"
      | "industry"
      | "invBudget"
      | "model"
      | "payback",
    value: string,
    defaultValue: string,
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? defaultValue : value,
    }));
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

  const singleSelectBtn = (isSelected: boolean) =>
    `flex items-center justify-between px-3.5 py-2.5 rounded border text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
      isSelected
        ? "bg-[#0b1b42] border-cremp-accent/50 text-white shadow-glow-accent"
        : "bg-cremp-surface-alt/60 border-cremp-border hover:border-cremp-text-muted/40 hover:bg-cremp-surface text-cremp-text-primary"
    }`;

  const multiSelectBtn = singleSelectBtn;

  const checkBox = (isSelected: boolean) =>
    `w-4 h-4 rounded-sm border flex items-center justify-center transition-colors duration-200 ${
      isSelected ? "bg-cremp-accent border-cremp-accent" : "border-cremp-border bg-cremp-surface"
    }`;

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
        <div className="w-full bg-cremp-surface/90 backdrop-blur-xl rounded px-4 py-2.5 shadow-elevation-2 border border-cremp-border flex items-center gap-3 focus-within:border-cremp-accent/50 focus-within:shadow-glow-accent transition-all duration-300">
          <Search className="w-4.5 h-4.5 text-cremp-text-muted shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="w-6 h-6 rounded-sm flex items-center justify-center bg-cremp-surface-alt hover:bg-error-surface text-cremp-text-muted hover:text-error transition-colors duration-200"
              >
                <X className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div ref={toolbarRef} className="relative w-full">
          <div className="w-full flex flex-wrap items-center gap-2 pb-1.5">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                if (hasActiveFilters) {
                  handleClearAll();
                }
              }}
              className={`group flex items-center justify-center w-9 h-9 rounded border shrink-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
                hasActiveFilters
                  ? "bg-error-surface border-error-light hover:bg-error-light"
                  : "bg-cremp-surface-alt/60 backdrop-blur-md border-cremp-border hover:bg-cremp-surface text-cremp-text-primary shadow-elevation-1"
              }`}
              title={hasActiveFilters ? "Clear all filters" : "Filters"}
              aria-label={hasActiveFilters ? "Clear all filters" : "Filters"}
            >
              {hasActiveFilters ? (
                <FilterX className="w-4 h-4 text-error" />
              ) : (
                <ListFilter className="w-4 h-4 text-cremp-text-secondary" />
              )}
            </motion.button>

            {activeTab === "commercial" && (
              <>
                <div className="h-5 w-px bg-cremp-border shrink-0" />

                <motion.button
                  ref={(el) => {
                    chipRefs.current["buyOrLease"] = el;
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggleDropdown("buyOrLease")}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === "buyOrLease"}
                  className={`group flex items-center gap-2 px-3 h-9 rounded border shrink-0 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
                    activeDropdown === "buyOrLease"
                      ? "bg-[#0b1b42] border-cremp-accent/50 text-white shadow-glow-accent"
                      : "bg-cremp-surface-alt/60 backdrop-blur-md border-cremp-border hover:bg-cremp-surface text-cremp-text-primary shadow-elevation-1"
                  }`}
                >
                  <span className="text-xs font-bold tracking-tight">{buyOrLease}</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === "buyOrLease" ? "rotate-180 text-cremp-accent" : "text-cremp-text-muted"
                    }`}
                  />
                </motion.button>

                <div className="h-5 w-px bg-cremp-border shrink-0" />
              </>
            )}

            {activeChips.map((chip) => {
              const isOpen = activeDropdown === chip.id;
              const iconBg = CATEGORY_ICON_BG[chip.id] ?? "bg-cremp-primary";
              return (
                <motion.button
                  key={chip.id}
                  ref={(el) => {
                    chipRefs.current[chip.id] = el;
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggleDropdown(chip.id)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  className={`group flex items-center gap-2 px-2.5 h-9 rounded border transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
                    chip.isActive || isOpen
                      ? "bg-[#0b1b42] border-cremp-accent/50 text-white shadow-glow-accent"
                      : "bg-cremp-surface-alt/60 backdrop-blur-md border-cremp-border hover:bg-cremp-surface text-cremp-text-primary shadow-elevation-1"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    className={`w-7 h-7 rounded flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${
                      chip.isActive || isOpen
                        ? "bg-black/25 border border-cremp-accent/40 shadow-glow-accent"
                        : `${iconBg} shadow-sm`
                    }`}
                  >
                    <chip.icon
                      className={`w-3.5 h-3.5 ${
                        chip.isActive || isOpen ? "text-cremp-accent" : "text-white"
                      }`}
                      strokeWidth={chip.isActive || isOpen ? 2.5 : 2}
                    />
                  </motion.div>
                  <span className="text-xs font-bold tracking-tight">{chip.label}</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    } ${
                      chip.isActive || isOpen ? "text-cremp-accent" : "text-cremp-text-muted group-hover:text-cremp-text-secondary"
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
              className="group flex items-center gap-2 px-3 h-9 rounded bg-cremp-surface-alt/60 backdrop-blur-md border border-cremp-border hover:bg-cremp-surface text-cremp-text-primary transition-all duration-300 shadow-elevation-1 whitespace-nowrap ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 4 }}
                className="w-7 h-7 rounded bg-cremp-surface border border-transparent group-hover:border-cremp-border shadow-sm flex items-center justify-center text-cremp-text-secondary transition-all duration-300"
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
                  initial={{ opacity: 0, scale: 0.96, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: 4 }}
                  transition={{ duration: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
                  role="menu"
                  style={dropdownLeft !== null ? { left: dropdownLeft } : undefined}
                  className="absolute left-0 top-full mt-2 w-[calc(100vw-32px)] sm:w-max sm:min-w-[220px] sm:max-w-[288px] max-w-[calc(100vw-32px)] bg-cremp-surface rounded shadow-elevation-4 border border-cremp-border z-[99999] py-4 px-3 pointer-events-auto cursor-default text-left max-h-[75vh] overflow-y-auto scrollbar-thin"
                >
                  {activeDropdown === "buyOrLease" && (
                    <div className="flex flex-col gap-1.5">
                      {(["Buy", "Lease"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setBuyOrLease((prev) => (prev === opt ? "Buy" : opt));
                            setActiveDropdown(null);
                          }}
                          className={singleSelectBtn(buyOrLease === opt)}
                        >
                          <span>{opt}</span>
                          {buyOrLease === opt && <Check className="w-4 h-4 text-cremp-accent" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "property" && (
                    <div className="grid grid-cols-2 gap-2">
                      {PROPERTY_TYPES.map((opt) => {
                        const sel = filters.propertyType === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggleSingleValue("propertyType", opt.id, "office-space")}
                            className={`flex items-center gap-2.5 p-3 rounded border transition-all duration-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
                              sel
                                ? "bg-[#0b1b42] border-cremp-accent/50 text-white shadow-glow-accent"
                                : "bg-cremp-surface-alt/70 border-cremp-border hover:border-cremp-text-muted/40 text-cremp-text-primary hover:bg-cremp-surface"
                            }`}
                          >
                            <div className={`w-7 h-7 rounded flex items-center justify-center shrink-0 ${
                              sel ? "bg-black/25 border border-cremp-accent/40" : "bg-[#8B5CF6]"
                            }`}>
                              <opt.icon className={`w-3.5 h-3.5 ${sel ? "text-cremp-accent" : "text-white"}`} />
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
                          onClick={() => toggleSingleValue("budget", opt, "Any")}
                          className={singleSelectBtn(filters.budget === opt)}
                        >
                          <span>{opt}</span>
                          {filters.budget === opt && <Check className="w-4 h-4 text-cremp-accent" />}
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
                          onClick={() => toggleSingleValue("size", opt, "Any")}
                          className={singleSelectBtn(filters.size === opt)}
                        >
                          <span>{opt}</span>
                          {filters.size === opt && <Check className="w-4 h-4 text-cremp-accent" />}
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
                            onClick={() => toggleSingleValue("fitOut", opt.id, "Any")}
                            className={singleSelectBtn(sel)}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className={`w-6 h-6 rounded flex items-center justify-center ${sel ? "bg-black/25 border border-cremp-accent/40" : "bg-[#14B8A6]"}`}>
                                <opt.icon className={`w-3 h-3 ${sel ? "text-cremp-accent" : "text-white"}`} />
                              </div>
                              <span>{opt.label}</span>
                            </div>
                            {sel && <Check className="w-4 h-4 text-cremp-accent" />}
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
                              {isSelected && <Check className="w-3 h-3 text-[#0b1b42] stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
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
                              <div className={`w-6 h-6 rounded flex items-center justify-center ${isSelected ? "bg-black/25 border border-cremp-accent/40" : "bg-[#D946EF]"}`}>
                                <opt.icon className={`w-3 h-3 ${isSelected ? "text-cremp-accent" : "text-white"}`} />
                              </div>
                              <span>{opt.label}</span>
                            </div>
                            <div className={checkBox(isSelected)}>
                              {isSelected && <Check className="w-3 h-3 text-[#0b1b42] stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {activeDropdown === "deal" && (
                    <div className="flex flex-col gap-1.5">
                      {DEAL_PREF.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleSingleValue("dealPref", opt, "Any")}
                          className={singleSelectBtn(filters.dealPref === opt)}
                        >
                          <span>{opt}</span>
                          {filters.dealPref === opt && <Check className="w-4 h-4 text-cremp-accent" />}
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
                          onClick={() => toggleSingleValue("industry", opt.id, "food-beverage")}
                          className={singleSelectBtn(filters.industry === opt.id)}
                        >
                          <span>{opt.label}</span>
                          {filters.industry === opt.id && <Check className="w-4 h-4 text-cremp-accent" />}
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
                          onClick={() => toggleSingleValue("invBudget", opt, "Any")}
                          className={singleSelectBtn(filters.invBudget === opt)}
                        >
                          <span>{opt}</span>
                          {filters.invBudget === opt && <Check className="w-4 h-4 text-cremp-accent" />}
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
                          onClick={() => toggleSingleValue("model", opt, "Any")}
                          className={singleSelectBtn(filters.model === opt)}
                        >
                          <span>{opt}</span>
                          {filters.model === opt && <Check className="w-4 h-4 text-cremp-accent" />}
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
                          onClick={() => toggleSingleValue("payback", opt, "Any ROI")}
                          className={singleSelectBtn(filters.payback === opt)}
                        >
                          <span>{opt}</span>
                          {filters.payback === opt && <Check className="w-4 h-4 text-cremp-accent" />}
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
                              <div className={`w-6 h-6 rounded flex items-center justify-center ${isSelected ? "bg-black/25 border border-cremp-accent/40" : "bg-[#D946EF]"}`}>
                                <opt.icon className={`w-3 h-3 ${isSelected ? "text-cremp-accent" : "text-white"}`} />
                              </div>
                              <span>{opt.label}</span>
                            </div>
                            <div className={checkBox(isSelected)}>
                              {isSelected && <Check className="w-3 h-3 text-[#0b1b42] stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
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
