import { useState } from "react";
import { ChevronDown, MapPin, SlidersHorizontal, Filter, Layers, Tag, Handshake, Users, Construction, Briefcase, CheckCircle2, Maximize, IndianRupee, Building2, Store, Check, RotateCcw, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FilterState } from "./data";
import { DEFAULT_FILTERS, PROPERTY_TYPES, BUDGET_OPTIONS, FIT_OUT_OPTIONS, COMMERCIAL_TAGS, STATUS_OPTIONS, DEAL_PREF, OCCUPANCY_OPTIONS, CONSTRUCTION_STAGE_OPTIONS, BOP_INDUSTRIES, BUSINESS_OPTIONS, SIZE_MIN_OPTIONS, SIZE_MAX_OPTIONS, SIZE_UNITS } from "./data";
import { CustomSelect } from "./CustomSelect";
import clsx from "clsx";

interface FilterDropdownProps {
  activeTab: "commercial" | "business";
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClose: () => void;
}

interface CategoryDef {
  key: keyof FilterState;
  title: string;
  subtitle: string;
  icon: any;
  iconBg: string;
  options: { id: string; label: string }[];
  isMulti?: boolean;
}

export default function FilterDropdownDesktop({ activeTab, filters, onFilterChange, onClose }: FilterDropdownProps) {
  const mapStringsToOptions = (arr: string[]) => arr.map((item) => ({ id: item, label: item }));

  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [expandedCategoryKey, setExpandedCategoryKey] = useState<string | null>(null);

  const toggleCategory = (key: string) => {
    setExpandedCategoryKey((prev) => (prev === key ? null : key));
  };

  const handleUpdate = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleOptionToggle = (cat: CategoryDef, optionId: string) => {
    const newFilters = { ...filters };
    if (cat.isMulti) {
      const currentList = (newFilters[cat.key] as string[]) || [];
      if (currentList.includes(optionId)) {
        newFilters[cat.key] = currentList.filter((id) => id !== optionId) as any;
      } else {
        newFilters[cat.key] = [...currentList, optionId] as any;
      }
    } else {
      const isSelected = newFilters[cat.key] === optionId;
      const defaultVal = DEFAULT_FILTERS[cat.key];
      newFilters[cat.key] = isSelected ? defaultVal : (optionId as any);
    }
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    onFilterChange({
      ...filters,
      ...(activeTab === "commercial"
        ? {
            transactionType: DEFAULT_FILTERS.transactionType,
            propertyType: DEFAULT_FILTERS.propertyType,
            budgetMin: DEFAULT_FILTERS.budgetMin,
            budgetMax: DEFAULT_FILTERS.budgetMax,
            sizeMin: DEFAULT_FILTERS.sizeMin,
            sizeMax: DEFAULT_FILTERS.sizeMax,
            sizeUnit: DEFAULT_FILTERS.sizeUnit,
            fitOut: DEFAULT_FILTERS.fitOut,
            status: DEFAULT_FILTERS.status,
            dealPref: DEFAULT_FILTERS.dealPref,
            commercialTags: DEFAULT_FILTERS.commercialTags,
            occupancy: DEFAULT_FILTERS.occupancy,
            constructionStage: DEFAULT_FILTERS.constructionStage,
          }
        : {
            industry: DEFAULT_FILTERS.industry,
            city: "",
            businessOption: DEFAULT_FILTERS.businessOption,
          }),
    });
  };

  const commercialAdvancedCategories: CategoryDef[] = [
    { key: "fitOut", title: "Fit Out", subtitle: "Fit Out", icon: Filter, iconBg: "bg-[#7c3aed]", options: FIT_OUT_OPTIONS.filter(o => o.id !== "Any").map(o => ({ id: o.id, label: o.label })) },
    { key: "occupancy", title: "Occupancy", subtitle: "Occupancy", icon: Users, iconBg: "bg-[#059669]", options: mapStringsToOptions(OCCUPANCY_OPTIONS) },
    { key: "constructionStage", title: "Construction Stage", subtitle: "Construction Stage", icon: Construction, iconBg: "bg-[#d97706]", options: mapStringsToOptions(CONSTRUCTION_STAGE_OPTIONS) },
    { key: "status", title: "Status", subtitle: "Status", icon: Layers, iconBg: "bg-[#0b1b42]", options: mapStringsToOptions(STATUS_OPTIONS), isMulti: true },
    { key: "dealPref", title: "Deal Preference", subtitle: "Deal Preference", icon: Handshake, iconBg: "bg-[#D946EF]", options: mapStringsToOptions(DEAL_PREF.filter(o => o !== "Any")) },
    { key: "commercialTags", title: "Commercial Tags", subtitle: "Commercial Tags", icon: Tag, iconBg: "bg-[#0d9488]", options: COMMERCIAL_TAGS.map(t => ({ id: t.id, label: t.label })), isMulti: true },
  ];

  const businessAdvancedCategories: CategoryDef[] = [
    { key: "businessOption", title: "Business Options", subtitle: "Business Options", icon: Briefcase, iconBg: "bg-[#7c3aed]", options: BUSINESS_OPTIONS.map(o => ({ id: o.id, label: o.label })) },
  ];

  const activeCategories = activeTab === "commercial" ? commercialAdvancedCategories : businessAdvancedCategories;

  const activeAdvancedCount = activeTab === "commercial"
    ? [
        (filters.sizeMin && filters.sizeMin !== DEFAULT_FILTERS.sizeMin) || (filters.sizeMax && filters.sizeMax !== DEFAULT_FILTERS.sizeMax),
        filters.fitOut && filters.fitOut !== "Any" && filters.fitOut !== DEFAULT_FILTERS.fitOut,
        filters.occupancy && filters.occupancy !== "Any" && filters.occupancy !== DEFAULT_FILTERS.occupancy,
        filters.constructionStage && filters.constructionStage !== "Any" && filters.constructionStage !== DEFAULT_FILTERS.constructionStage,
        filters.status && filters.status.length > 0,
        filters.dealPref && filters.dealPref !== "Any" && filters.dealPref !== DEFAULT_FILTERS.dealPref,
        filters.commercialTags && filters.commercialTags.length > 0,
      ].filter(Boolean).length
    : [
        filters.businessOption && filters.businessOption.length > 0,
      ].filter(Boolean).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: -14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.96 }}
      transition={{ type: "spring", damping: 26, stiffness: 360 }}
      className="absolute top-[calc(100%+8px)] right-0 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-gray-100 overflow-hidden z-[9999] flex flex-col w-full max-w-[440px]"
    >
      <div className="px-4 pt-4 pb-2 shrink-0 flex items-center justify-between">
        <div>
          <h2 className="text-[18px] font-extrabold text-[#0a1128] tracking-tight">Filters</h2>
        </div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.06, rotate: -4 }}
          whileTap={{ scale: 0.94 }}
          onClick={handleReset}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold text-gray-500 hover:text-[#d4af37] hover:bg-[#0b1b42]/5 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </motion.button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pb-8 space-y-4 max-h-[calc(100vh-200px)]">
        
        <div className="relative z-40">
          <CustomSelect
            options={["Hyderabad", "Bangalore", "Mumbai"]}
            value={filters.city || ""}
            onChange={(val) => handleUpdate("city", val)}
            placeholder="Select City"
            icon={<MapPin className="w-[16px] h-[16px] text-[#d4af37]" />}
          />
        </div>

        {activeTab === "commercial" ? (
          <div className="space-y-2">
            <div className="bg-gray-50/80 border border-gray-200/70 shadow-xs rounded-xl overflow-hidden">
              <motion.button
                type="button"
                whileTap={{ scale: 0.99 }}
                onClick={() => setExpandedCategoryKey(expandedCategoryKey === "transaction" ? null : "transaction")}
                className="w-full flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-gray-100/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#0b1b42] border border-[#d4af37]/30 shadow-xs">
                    <Handshake className="w-3.5 h-3.5 text-[#d4af37]" />
                  </div>
                  <span className="text-[13px] font-extrabold text-[#0a1128]">Transaction Type</span>
                </div>
                <motion.div animate={{ rotate: expandedCategoryKey === "transaction" ? 180 : 0 }} transition={{ type: "spring", stiffness: 350, damping: 25 }}>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {expandedCategoryKey === "transaction" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 grid grid-cols-2 gap-2">
                      {["Buy", "Lease"].map((type) => {
                        const isSelected = filters.transactionType === type;
                        return (
                          <motion.button
                            key={type}
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => handleUpdate("transactionType", type)}
                            className={clsx(
                              "relative py-2.5 rounded-xl border text-[13px] font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer",
                              isSelected
                                ? "bg-[#0b1b42] border-[#d4af37]/60 text-white shadow-[0_4px_14px_rgba(11,27,66,0.22)]"
                                : "bg-white border-gray-200 shadow-xs text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                            )}
                          >
                            <span>{type}</span>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0, rotate: -20 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                className="absolute right-2.5"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 fill-[#d4af37] text-[#0b1b42]" />
                              </motion.div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-gray-50/80 border border-gray-200/70 shadow-xs rounded-xl overflow-hidden">
              <motion.button
                type="button"
                whileTap={{ scale: 0.99 }}
                onClick={() => setExpandedCategoryKey(expandedCategoryKey === "property" ? null : "property")}
                className="w-full flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-gray-100/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#0b1b42] border border-[#d4af37]/30 shadow-xs">
                    <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  </div>
                  <span className="text-[13px] font-extrabold text-[#0a1128]">Property Type</span>
                </div>
                <motion.div animate={{ rotate: expandedCategoryKey === "property" ? 180 : 0 }} transition={{ type: "spring", stiffness: 350, damping: 25 }}>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {expandedCategoryKey === "property" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 grid grid-cols-3 gap-2">
                      {PROPERTY_TYPES.map((pt) => {
                        const isSelected = filters.propertyType === pt.id;
                        return (
                          <motion.button
                            key={pt.id}
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => handleUpdate("propertyType", filters.propertyType === pt.id ? "Any" : pt.id)}
                            className={clsx(
                              "flex flex-col items-center justify-center p-2 rounded-xl border transition-all h-[68px] gap-1 cursor-pointer group",
                              isSelected
                                ? "bg-[#0b1b42] border-[#d4af37]/60 shadow-[0_6px_18px_rgba(11,27,66,0.25)]"
                                : "bg-white border-gray-200 shadow-xs hover:border-gray-300 hover:bg-gray-50/50"
                            )}
                          >
                            <pt.icon className={clsx("w-4 h-4 transition-transform group-hover:scale-110", isSelected ? "text-[#d4af37]" : "text-gray-500")} strokeWidth={1.5} />
                            <span className={clsx("text-[10px] font-bold text-center leading-tight", isSelected ? "text-white" : "text-gray-600")}>{pt.label}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={clsx("bg-gray-50/80 border border-gray-200/70 shadow-xs rounded-xl transition-all", expandedCategoryKey === "budget" ? "overflow-visible z-30 relative" : "overflow-hidden")}>
              <motion.button
                type="button"
                whileTap={{ scale: 0.99 }}
                onClick={() => setExpandedCategoryKey(expandedCategoryKey === "budget" ? null : "budget")}
                className="w-full flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-gray-100/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#0b1b42] border border-[#d4af37]/30 shadow-xs">
                    <IndianRupee className="w-3.5 h-3.5 text-[#d4af37]" />
                  </div>
                  <span className="text-[13px] font-extrabold text-[#0a1128]">Budget Range</span>
                </div>
                <motion.div animate={{ rotate: expandedCategoryKey === "budget" ? 180 : 0 }} transition={{ type: "spring", stiffness: 350, damping: 25 }}>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {expandedCategoryKey === "budget" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={clsx(expandedCategoryKey === "budget" ? "overflow-visible" : "overflow-hidden")}
                  >
                    <div className="px-3 pb-3 flex items-end gap-2">
                      <div className="flex-1 relative z-20">
                        <label className="block text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Min</label>
                        <CustomSelect
                          options={BUDGET_OPTIONS}
                          value={filters.budgetMin}
                          onChange={(val) => handleUpdate("budgetMin", val)}
                        />
                      </div>
                      <div className="w-3 h-[1px] bg-gray-300 mb-3 shrink-0" />
                      <div className="flex-1 relative z-10">
                        <label className="block text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Max</label>
                        <CustomSelect
                          options={BUDGET_OPTIONS}
                          value={filters.budgetMax}
                          onChange={(val) => handleUpdate("budgetMax", val)}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="bg-gray-50/80 border border-gray-200/70 shadow-xs rounded-xl overflow-hidden">
              <motion.button
                type="button"
                whileTap={{ scale: 0.99 }}
                onClick={() => setExpandedCategoryKey(expandedCategoryKey === "industry" ? null : "industry")}
                className="w-full flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-gray-100/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#0b1b42] border border-[#d4af37]/30 shadow-xs">
                    <Store className="w-3.5 h-3.5 text-[#d4af37]" />
                  </div>
                  <span className="text-[13px] font-extrabold text-[#0a1128]">Select Industry</span>
                </div>
                <motion.div animate={{ rotate: expandedCategoryKey === "industry" ? 180 : 0 }} transition={{ type: "spring", stiffness: 350, damping: 25 }}>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {expandedCategoryKey === "industry" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 grid grid-cols-2 gap-2">
                      {BOP_INDUSTRIES.map((ind) => {
                        const isSelected = filters.industry === ind.id;
                        return (
                          <motion.button
                            key={ind.id}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => handleUpdate("industry", filters.industry === ind.id ? "Any" : ind.id)}
                            className={clsx(
                              "flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all h-[76px] gap-1.5 cursor-pointer group",
                              isSelected
                                ? "bg-[#0b1b42] border-[#d4af37]/70 shadow-[0_6px_18px_rgba(11,27,66,0.25)] ring-1 ring-[#d4af37]/30"
                                : "bg-white border-gray-200 shadow-xs hover:border-gray-300 hover:bg-gray-50/50"
                            )}
                          >
                            <ind.icon className={clsx("w-5 h-5 transition-transform group-hover:scale-110", isSelected ? "text-[#d4af37]" : ind.color)} />
                            <span className={clsx("text-[11px] font-bold text-center leading-tight", isSelected ? "text-white" : "text-gray-600")}>{ind.label}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        <div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => setAdvancedOpen(!advancedOpen)}
            className={clsx(
              "w-full flex items-center justify-between p-2.5 rounded-xl border transition-all duration-200 cursor-pointer text-left group",
              advancedOpen
                ? "bg-gradient-to-r from-gray-50 via-white to-gray-50 border-[#0b1b42]/30 shadow-xs ring-1 ring-[#0b1b42]/10"
                : "bg-white hover:bg-gray-50/80 border-gray-200/90 shadow-xs hover:border-gray-300"
            )}
          >
            <div className="flex items-center gap-2.5">
              <div
                className={clsx(
                  "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 shadow-xs shrink-0",
                  advancedOpen
                    ? "bg-[#0b1b42] text-[#d4af37] border border-[#d4af37]/40"
                    : "bg-gray-100 text-gray-700 group-hover:bg-[#0b1b42] group-hover:text-[#d4af37]"
                )}
              >
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-extrabold text-[#0a1128] tracking-tight">
                    Advanced Filters
                  </span>
                  {activeAdvancedCount > 0 && (
                    <span className="px-1.5 py-0.5 rounded-full text-[9.5px] font-extrabold bg-[#d4af37] text-[#0b1b42] shadow-xs">
                      {activeAdvancedCount} active
                    </span>
                  )}
                </div>
                <span className="text-[10.5px] text-gray-500 font-medium leading-tight">
                  {activeTab === "commercial" ? "Size, Fit-out, Status, Tags & more" : "Business model options"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 pl-2">
              <div
                className={clsx(
                  "w-6 h-6 rounded-md flex items-center justify-center transition-all duration-200",
                  advancedOpen ? "bg-[#0b1b42] text-[#d4af37] border border-[#d4af37]/40 shadow-xs" : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                )}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {advancedOpen ? (
                    <motion.div
                      key="minus"
                      initial={{ scale: 0.6, rotate: -90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.6, rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="plus"
                      initial={{ scale: 0.6, rotate: 90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.6, rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.button>

          <AnimatePresence>
            {advancedOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className={clsx(advancedOpen ? "overflow-visible" : "overflow-hidden")}
              >
                <div className={clsx("mt-2 pt-1 space-y-1", advancedOpen ? "overflow-visible" : "overflow-hidden")}>
                  
                  {activeTab === "commercial" && (
                    <div className={clsx("flex flex-col", expandedCategoryKey === "size" ? "overflow-visible z-30 relative" : "overflow-hidden")}>
                      <motion.button
                        type="button"
                        whileHover={{ x: 2 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => toggleCategory("size")}
                        className={clsx(
                          "w-full flex items-center justify-between px-2.5 py-2 rounded-lg transition-colors cursor-pointer",
                          expandedCategoryKey === "size" ? "bg-gray-50" : "hover:bg-gray-50"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[#0284c7]">
                            <Maximize className="w-[16px] h-[16px] text-white" strokeWidth={2.5} />
                          </div>
                          <div className="text-left">
                            <span className="text-[14px] font-bold text-[#0a1128]">Size</span>
                          </div>
                        </div>
                        <motion.div animate={{ rotate: expandedCategoryKey === "size" ? 180 : 0 }} transition={{ type: "spring", stiffness: 350, damping: 25 }}>
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {expandedCategoryKey === "size" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className={clsx(expandedCategoryKey === "size" ? "overflow-visible" : "overflow-hidden")}
                          >
                            <div className="ml-[48px] mr-2 py-2 space-y-2 mb-1">
                              <div className="flex gap-2">
                                <div className="flex-1 relative z-30">
                                  <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">Min</label>
                                  <CustomSelect
                                    options={SIZE_MIN_OPTIONS}
                                    value={filters.sizeMin}
                                    onChange={(val) => handleUpdate("sizeMin", val)}
                                  />
                                </div>
                                <div className="flex-1 relative z-20">
                                  <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">Max</label>
                                  <CustomSelect
                                    options={SIZE_MAX_OPTIONS}
                                    value={filters.sizeMax}
                                    onChange={(val) => handleUpdate("sizeMax", val)}
                                  />
                                </div>
                              </div>
                              <div className="relative z-10">
                                <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">Unit</label>
                                <CustomSelect
                                  options={SIZE_UNITS}
                                  value={filters.sizeUnit}
                                  onChange={(val) => handleUpdate("sizeUnit", val)}
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {activeCategories.map((cat) => {
                    const isExpanded = expandedCategoryKey === cat.key;
                    const currentValue = filters[cat.key as keyof FilterState];
                    const hasActiveFilter = cat.isMulti
                      ? ((currentValue as string[]) || []).length > 0
                      : (currentValue !== "Any" && currentValue !== DEFAULT_FILTERS[cat.key]);
                    
                    return (
                      <div key={cat.key} className="flex flex-col">
                        <motion.button
                          type="button"
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => toggleCategory(cat.key)}
                          className={clsx(
                            "w-full flex items-center justify-between px-2.5 py-2 rounded-lg transition-colors cursor-pointer",
                            isExpanded ? "bg-gray-50" : "hover:bg-gray-50"
                          )}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className={clsx("w-7 h-7 rounded-md flex items-center justify-center shrink-0 shadow-xs", cat.iconBg)}>
                              <cat.icon className="w-[14px] h-[14px] text-white" strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col text-left">
                              <span className="text-[13px] font-extrabold text-[#0a1128]">{cat.title}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {hasActiveFilter && !isExpanded && (
                              <motion.div
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="w-2 h-2 rounded-full bg-[#d4af37]"
                              />
                            )}
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ type: "spring", stiffness: 350, damping: 25 }}>
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            </motion.div>
                          </div>
                        </motion.button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="ml-[40px] mr-1.5 py-1.5 space-y-1">
                                {cat.isMulti ? (
                                  cat.options.map((opt) => {
                                    const isSelected = ((currentValue as string[]) || []).includes(opt.id);
                                    return (
                                      <motion.button
                                        key={opt.id}
                                        type="button"
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleOptionToggle(cat, opt.id)}
                                        className={clsx(
                                          "w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition-colors group cursor-pointer",
                                          isSelected
                                            ? "bg-[#0b1b42]/[0.05] text-[#0a1128] font-bold border-l-2 border-[#d4af37]"
                                            : "text-gray-600 hover:bg-gray-50/80 font-medium"
                                        )}
                                      >
                                        <div
                                          className={clsx(
                                            "w-4 h-4 rounded-[4px] border flex items-center justify-center shrink-0 transition-all",
                                            isSelected
                                              ? "bg-[#0b1b42] border-[#d4af37]/80 text-[#d4af37]"
                                              : "bg-white border-gray-300 group-hover:border-gray-400"
                                          )}
                                        >
                                          {isSelected && (
                                            <motion.div
                                              initial={{ scale: 0, rotate: -45 }}
                                              animate={{ scale: 1, rotate: 0 }}
                                              transition={{ type: "spring", stiffness: 500, damping: 22 }}
                                            >
                                              <Check className="w-3 h-3 stroke-[3] text-[#d4af37]" />
                                            </motion.div>
                                          )}
                                        </div>
                                        <span className="text-[12.5px] leading-tight">{opt.label}</span>
                                      </motion.button>
                                    );
                                  })
                                ) : (
                                  <>
                                    <motion.button
                                      type="button"
                                      whileHover={{ x: 4 }}
                                      whileTap={{ scale: 0.98 }}
                                      onClick={() => {
                                        const newFilters = { ...filters, [cat.key]: DEFAULT_FILTERS[cat.key] };
                                        onFilterChange(newFilters);
                                      }}
                                      className={clsx(
                                        "w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition-colors group cursor-pointer",
                                        (!currentValue || currentValue === "Any" || currentValue === DEFAULT_FILTERS[cat.key])
                                          ? "bg-[#0b1b42]/[0.05] text-[#0a1128] font-bold border-l-2 border-[#d4af37]"
                                          : "text-gray-600 hover:bg-gray-50/80 font-medium"
                                      )}
                                    >
                                      <div
                                        className={clsx(
                                          "w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all",
                                          (!currentValue || currentValue === "Any" || currentValue === DEFAULT_FILTERS[cat.key])
                                            ? "border-[#d4af37] bg-white ring-2 ring-[#d4af37]/20"
                                            : "bg-white border-gray-300 group-hover:border-gray-400"
                                        )}
                                      >
                                        {(!currentValue || currentValue === "Any" || currentValue === DEFAULT_FILTERS[cat.key]) && (
                                          <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 600, damping: 22 }}
                                            className="w-2 h-2 rounded-full bg-[#0b1b42]"
                                          />
                                        )}
                                      </div>
                                      <span className="text-[12.5px] leading-tight">Any</span>
                                    </motion.button>
                                    {cat.options.map((opt) => {
                                      const isSelected = currentValue === opt.id;
                                      return (
                                        <motion.button
                                          key={opt.id}
                                          type="button"
                                          whileHover={{ x: 4 }}
                                          whileTap={{ scale: 0.98 }}
                                          onClick={() => handleOptionToggle(cat, opt.id)}
                                          className={clsx(
                                            "w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition-colors group cursor-pointer",
                                            isSelected
                                              ? "bg-[#0b1b42]/[0.05] text-[#0a1128] font-bold border-l-2 border-[#d4af37]"
                                              : "text-gray-600 hover:bg-gray-50/80 font-medium"
                                          )}
                                        >
                                          <div
                                            className={clsx(
                                              "w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all",
                                              isSelected
                                                ? "border-[#d4af37] bg-white ring-2 ring-[#d4af37]/20"
                                                : "bg-white border-gray-300 group-hover:border-gray-400"
                                            )}
                                          >
                                            {isSelected && (
                                              <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 600, damping: 22 }}
                                                className="w-2 h-2 rounded-full bg-[#0b1b42]"
                                              />
                                            )}
                                          </div>
                                          <span className="text-[12.5px] leading-tight">{opt.label}</span>
                                        </motion.button>
                                      );
                                    })}
                                  </>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="px-4 py-3 border-t border-gray-100 bg-white shrink-0 rounded-b-2xl">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02, y: -1, boxShadow: "0 8px 24px rgba(212,175,55,0.4)" }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
          className="w-full py-2.5 text-[12.5px] font-bold text-white bg-[#0b1b42] hover:bg-[#121c33] border border-[#d4af37]/50 rounded-xl transition-all shadow-[0_4px_16px_rgba(11,27,66,0.3)] text-center flex flex-col items-center leading-tight cursor-pointer group"
        >
          <span>Apply Filters</span>
          <span className="text-[9.5px] font-semibold text-[#d4af37] group-hover:text-amber-300 transition-colors">0 Listings</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
