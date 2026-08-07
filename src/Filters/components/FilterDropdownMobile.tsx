import { useState } from "react";
import { ChevronDown, MapPin, SlidersHorizontal, Filter, Layers, Tag, Handshake, Users, Construction, Briefcase, CheckCircle2, Maximize, IndianRupee, Building2, Store, X } from "lucide-react";
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


export default function FilterDropdownMobile({ activeTab, filters, onFilterChange, onClose }: FilterDropdownProps) {
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
    { key: "status", title: "Status", subtitle: "Status", icon: Layers, iconBg: "bg-[#0284c7]", options: mapStringsToOptions(STATUS_OPTIONS), isMulti: true },
    { key: "dealPref", title: "Deal Preference", subtitle: "Deal Preference", icon: Handshake, iconBg: "bg-[#D946EF]", options: mapStringsToOptions(DEAL_PREF.filter(o => o !== "Any")) },
    { key: "commercialTags", title: "Commercial Tags", subtitle: "Commercial Tags", icon: Tag, iconBg: "bg-[#14B8A6]", options: COMMERCIAL_TAGS.map(t => ({ id: t.id, label: t.label })), isMulti: true },
  ];

  const businessAdvancedCategories: CategoryDef[] = [
    { key: "businessOption", title: "Business Options", subtitle: "Business Options", icon: Briefcase, iconBg: "bg-[#7c3aed]", options: BUSINESS_OPTIONS.map(o => ({ id: o.id, label: o.label })) },
  ];

  const advancedCategories = activeTab === "commercial" ? commercialAdvancedCategories : businessAdvancedCategories;

  return (
    <>
      <div className="fixed inset-0 bg-[#0a1128]/20 backdrop-blur-sm z-[9998]" onClick={onClose} />
      
      <motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "100%", opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed bottom-4 left-4 right-4 bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/40 z-[9999] flex flex-col max-h-[85vh] overflow-hidden">
        
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 bg-gray-200 rounded-full" />
        </div>

        <div className="px-4 pb-2 shrink-0 flex items-center justify-between">
          <div>
            <h2 className="text-[20px] font-extrabold text-[#0a1128] tracking-tight">Filters</h2>
            <p className="text-[12px] text-gray-500 font-medium mt-0.5">Refine your {activeTab === "commercial" ? "property" : "business"} search</p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={handleReset} className="text-[12px] font-bold text-[#0a1128] hover:text-[#d4af37] transition-colors underline underline-offset-2">
              Reset
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-red-500 hover:text-red-600 transition-colors bg-transparent border-none cursor-pointer flex items-center justify-center active:scale-95"
              aria-label="Close filters"
            >
              <X className="w-5 h-5 text-red-500" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pb-4 space-y-4">
          
          <CustomSelect
            options={["Hyderabad", "Bangalore", "Mumbai"]}
            value={filters.city || ""}
            onChange={(val) => handleUpdate("city", val)}
            placeholder="Select City"
            icon={<MapPin className="w-[16px] h-[16px] text-[#0a1128]" />}
          />

          {activeTab === "commercial" ? (
            <div className="space-y-2">
              <div className="bg-white/40 border border-white/50 shadow-sm rounded-xl overflow-hidden">
                <button type="button" onClick={() => setExpandedCategoryKey(expandedCategoryKey === "transaction" ? null : "transaction")} className="w-full flex items-center justify-between px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#0b1b42]">
                      <Handshake className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-[13px] font-extrabold text-[#0a1128]">Transaction Type</span>
                  </div>
                  <ChevronDown className={clsx("w-4 h-4 text-gray-500 transition-transform", expandedCategoryKey === "transaction" ? "rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {expandedCategoryKey === "transaction" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-3 pb-3 grid grid-cols-2 gap-2">
                        {["Buy", "Lease"].map((type) => {
                          const isSelected = filters.transactionType === type;
                          return (
                            <button key={type} onClick={() => handleUpdate("transactionType", type)} className={clsx("relative py-2.5 rounded-xl border text-[13px] font-bold transition-all text-center flex items-center justify-center gap-2", isSelected ? "bg-white border-[#d4af37] text-[#d4af37] shadow-[0_2px_8px_rgba(212,175,55,0.15)]" : "bg-white/60 border-white/50 shadow-sm text-gray-600 hover:bg-white/80")}>
                              {type}
                              {isSelected && <div className="absolute right-2"><CheckCircle2 className="w-4 h-4 fill-[#d4af37] text-white" /></div>}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="bg-white/40 border border-white/50 shadow-sm rounded-xl overflow-hidden">
                <button type="button" onClick={() => setExpandedCategoryKey(expandedCategoryKey === "property" ? null : "property")} className="w-full flex items-center justify-between px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#d4af37]">
                      <Building2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-[13px] font-extrabold text-[#0a1128]">Property Type</span>
                  </div>
                  <ChevronDown className={clsx("w-4 h-4 text-gray-500 transition-transform", expandedCategoryKey === "property" ? "rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {expandedCategoryKey === "property" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-3 pb-3 grid grid-cols-3 gap-2">
                        {PROPERTY_TYPES.map((pt) => {
                          const isSelected = filters.propertyType === pt.id;
                          return (
                            <button key={pt.id} onClick={() => handleUpdate("propertyType", filters.propertyType === pt.id ? "Any" : pt.id)} className={clsx("flex flex-col items-center justify-center p-2 rounded-xl border transition-all h-[70px] gap-1.5", isSelected ? "bg-[#0a1128] border-[#0a1128] shadow-[0_4px_12px_rgba(10,17,40,0.2)]" : "bg-white/60 border-white/50 shadow-sm hover:border-gray-200")}>
                              <pt.icon className={clsx("w-5 h-5", isSelected ? "text-white" : "text-gray-500")} strokeWidth={1.5} />
                              <span className={clsx("text-[11px] font-bold text-center leading-tight", isSelected ? "text-white" : "text-gray-600")}>{pt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="bg-white/40 border border-white/50 shadow-sm rounded-xl overflow-hidden">
                <button type="button" onClick={() => setExpandedCategoryKey(expandedCategoryKey === "budget" ? null : "budget")} className="w-full flex items-center justify-between px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#0b1b42] border border-[#d4af37]/30 shadow-xs">
                      <IndianRupee className="w-3.5 h-3.5 text-[#d4af37]" />
                    </div>
                    <span className="text-[13px] font-extrabold text-[#0a1128]">Budget Range</span>
                  </div>
                  <ChevronDown className={clsx("w-4 h-4 text-gray-500 transition-transform", expandedCategoryKey === "budget" ? "rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {expandedCategoryKey === "budget" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-3 pb-3 flex items-end gap-2">
                        <div className="flex-1">
                          <label className="block text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Min</label>
                          <CustomSelect
                            options={BUDGET_OPTIONS}
                            value={filters.budgetMin}
                            onChange={(val) => handleUpdate("budgetMin", val)}
                          />
                        </div>
                        <div className="w-3 h-[1px] bg-gray-300 mb-3.5 shrink-0" />
                        <div className="flex-1">
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
              <div className="bg-white/40 border border-white/50 shadow-sm rounded-xl overflow-hidden">
                <button type="button" onClick={() => setExpandedCategoryKey(expandedCategoryKey === "industry" ? null : "industry")} className="w-full flex items-center justify-between px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#7c3aed]">
                      <Store className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-[13px] font-extrabold text-[#0a1128]">Select Industry</span>
                  </div>
                  <ChevronDown className={clsx("w-4 h-4 text-gray-500 transition-transform", expandedCategoryKey === "industry" ? "rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {expandedCategoryKey === "industry" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-3 pb-3 grid grid-cols-2 gap-2">
                {BOP_INDUSTRIES.map((ind) => {
                  const isSelected = filters.industry === ind.id;
                  return (
                    <button key={ind.id} onClick={() => handleUpdate("industry", filters.industry === ind.id ? "Any" : ind.id)} className={clsx("flex flex-col items-center justify-center p-3 rounded-xl border transition-all h-[80px] gap-2", isSelected ? "bg-white border-[#d4af37] shadow-[0_4px_12px_rgba(212,175,55,0.15)]" : "bg-white/60 border-white/50 shadow-sm hover:border-gray-200")}>
                      <ind.icon className={clsx("w-5 h-5", ind.color)} />
                      <span className={clsx("text-[11px] font-bold text-center leading-tight", isSelected ? "text-[#0a1128]" : "text-gray-600")}>{ind.label}</span>
                    </button>
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
            <button onClick={() => setAdvancedOpen(!advancedOpen)} className={clsx("w-full flex items-center justify-center gap-2 py-3 rounded-xl border font-bold text-[13px] transition-all", advancedOpen ? "bg-[#0b1b42] border-[#0b1b42] text-white shadow-[0_4px_12px_rgba(11,27,66,0.2)]" : "bg-white/80 border-[#d4af37] shadow-sm text-[#d4af37] hover:bg-white")}>
              <SlidersHorizontal className="w-4 h-4" />
              Advanced Filters
              <motion.div animate={{ rotate: advancedOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {advancedOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                  <div className="mt-3 rounded-xl bg-white/40 border border-white/50 shadow-inner p-2.5 space-y-0.5">
                    
                    {activeTab === "commercial" && (
                      <div className="flex flex-col">
                        <button type="button" onClick={() => toggleCategory("size")} className={clsx("w-full flex items-center justify-between px-2.5 py-3 rounded-xl transition-colors", expandedCategoryKey === "size" ? "bg-white shadow-sm" : "hover:bg-white/60")}>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#0284c7]">
                              <Maximize className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />
                            </div>
                            <div className="text-left">
                              <div className="text-[14px] font-bold text-[#0a1128] leading-tight">Size</div>
                            </div>
                          </div>
                          <motion.div animate={{ rotate: expandedCategoryKey === "size" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {expandedCategoryKey === "size" && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                              <div className="ml-[52px] mr-2 py-2.5 space-y-2.5 mb-1">
                                <div className="flex gap-2">
                                  <div className="flex-1">
                                    <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">Min</label>
                                    <CustomSelect
                                      options={SIZE_MIN_OPTIONS}
                                      value={filters.sizeMin}
                                      onChange={(val) => handleUpdate("sizeMin", val)}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">Max</label>
                                    <CustomSelect
                                      options={SIZE_MAX_OPTIONS}
                                      value={filters.sizeMax}
                                      onChange={(val) => handleUpdate("sizeMax", val)}
                                    />
                                  </div>
                                </div>
                                <div>
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

                    {advancedCategories.map((cat) => {
                      const isExpanded = expandedCategoryKey === cat.key;
                      const currentValue = filters[cat.key as keyof FilterState];
                      const hasActiveFilter = cat.isMulti ? (currentValue as string[]).length > 0 : (currentValue !== "Any" && currentValue !== DEFAULT_FILTERS[cat.key]);
                      
                      return (
                        <div key={cat.key} className="flex flex-col">
                          <button type="button" onClick={() => toggleCategory(cat.key)} className={clsx("w-full flex items-center justify-between px-2 py-2.5 rounded-lg transition-colors", isExpanded ? "bg-white shadow-sm" : "hover:bg-white/60")}>
                            <div className="flex items-center gap-3">
                              <div className={clsx("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", cat.iconBg)}>
                                <cat.icon className="w-[14px] h-[14px] text-white" strokeWidth={2.5} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[14px] font-extrabold text-[#0a1128]">{cat.title}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {hasActiveFilter && !isExpanded && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                              </motion.div>
                            </div>
                          </button>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                <div className="ml-[52px] mr-2 py-2 mb-1">
                                  <div className="flex flex-wrap gap-2">
                                    <button
                                      onClick={() => { const newFilters = { ...filters }; if (cat.isMulti) { (newFilters as any)[cat.key] = []; } else { (newFilters as any)[cat.key] = DEFAULT_FILTERS[cat.key]; } onFilterChange(newFilters); }}
                                      className={clsx("px-3.5 py-1.5 rounded-lg text-[12px] font-bold border transition-all", (!currentValue || currentValue === "Any" || (cat.isMulti && (currentValue as string[]).length === 0)) ? "bg-[#0b1b42] text-[#d4af37] border-[#0b1b42] shadow-sm" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300")}
                                    >
                                      Any
                                    </button>
                                    {cat.options.map((opt) => {
                                      const isSelected = cat.isMulti ? (currentValue as string[]).includes(opt.id) : currentValue === opt.id;
                                      return (
                                        <button
                                          key={opt.id}
                                          onClick={() => handleOptionToggle(cat, opt.id)}
                                          className={clsx("px-3.5 py-1.5 rounded-lg text-[12px] font-bold border transition-all", isSelected ? "bg-[#0b1b42] text-[#d4af37] border-[#0b1b42] shadow-sm" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300")}
                                        >
                                          {opt.label}
                                        </button>
                                      );
                                    })}
                                  </div>
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

        <div className="px-4 py-3 border-t border-white/50 bg-white/50 shrink-0 pb-safe">
          <button type="button" onClick={onClose} className="w-full py-2.5 text-[12.5px] font-bold text-white bg-[#0b1b42] hover:bg-[#121c33] border border-[#d4af37]/50 rounded-xl transition-all shadow-[0_4px_16px_rgba(11,27,66,0.3)] text-center flex flex-col items-center leading-tight cursor-pointer group">
            <span>Apply Filters</span>
            <span className="text-[9.5px] font-semibold text-[#d4af37] group-hover:text-amber-300 transition-colors">0 Listings</span>
          </button>
        </div>
      </motion.div>
    </>
  );
}
