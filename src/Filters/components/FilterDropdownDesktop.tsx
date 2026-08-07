import { useState } from "react";
import { ChevronDown, MapPin, SlidersHorizontal, Filter, Layers, Tag, Handshake, Users, Construction, Briefcase, CheckCircle2, Maximize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FilterState } from "./data";
import { DEFAULT_FILTERS, PROPERTY_TYPES, BUDGET_OPTIONS, FIT_OUT_OPTIONS, COMMERCIAL_TAGS, STATUS_OPTIONS, DEAL_PREF, OCCUPANCY_OPTIONS, CONSTRUCTION_STAGE_OPTIONS, BOP_INDUSTRIES, BUSINESS_OPTIONS, SIZE_MIN_OPTIONS, SIZE_MAX_OPTIONS, SIZE_UNITS } from "./data";
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
    { key: "fitOut", title: "Fit Out", subtitle: "Across Fit Out", icon: Filter, iconBg: "bg-[#7c3aed]", options: FIT_OUT_OPTIONS.filter(o => o.id !== "Any").map(o => ({ id: o.id, label: o.label })) },
    { key: "occupancy", title: "Occupancy", subtitle: "Across Occupancy", icon: Users, iconBg: "bg-[#059669]", options: mapStringsToOptions(OCCUPANCY_OPTIONS) },
    { key: "constructionStage", title: "Construction Stage", subtitle: "Across Construction Stage", icon: Construction, iconBg: "bg-[#d97706]", options: mapStringsToOptions(CONSTRUCTION_STAGE_OPTIONS) },
    { key: "status", title: "Status", subtitle: "Across Status", icon: Layers, iconBg: "bg-[#0284c7]", options: mapStringsToOptions(STATUS_OPTIONS), isMulti: true },
    { key: "dealPref", title: "Deal Preference", subtitle: "Across Deal Preference", icon: Handshake, iconBg: "bg-[#D946EF]", options: mapStringsToOptions(DEAL_PREF.filter(o => o !== "Any")) },
    { key: "commercialTags", title: "Commercial Tags", subtitle: "Across Commercial Tags", icon: Tag, iconBg: "bg-[#14B8A6]", options: COMMERCIAL_TAGS.map(t => ({ id: t.id, label: t.label })), isMulti: true },
  ];

  const businessAdvancedCategories: CategoryDef[] = [
    { key: "businessOption", title: "Business Options", subtitle: "Across Business Options", icon: Briefcase, iconBg: "bg-[#7c3aed]", options: BUSINESS_OPTIONS.map(o => ({ id: o.id, label: o.label })) },
  ];

  const advancedCategories = activeTab === "commercial" ? commercialAdvancedCategories : businessAdvancedCategories;

  return (
    <motion.div initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }} transition={{ duration: 0.2, ease: "easeOut" }} className="absolute top-[calc(100%+8px)] right-0 bg-white/70 backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-white/40 overflow-hidden z-[9999] hidden sm:flex flex-col w-[440px]">
      
      <div className="px-4 pt-4 pb-2 shrink-0">
        <h2 className="text-[18px] font-extrabold text-[#0a1128] tracking-tight">Filters</h2>
        <p className="text-[11px] text-gray-500 font-medium mt-0.5">Refine your {activeTab === "commercial" ? "property" : "business"} search</p>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar px-4 pb-4 space-y-4 max-h-[calc(100vh-200px)]">
        
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MapPin className="w-[16px] h-[16px] text-gray-400" />
          </div>
          <select 
            className="w-full pl-9 pr-8 py-2.5 bg-white/60 border border-white/50 shadow-sm rounded-xl text-[13px] font-semibold text-gray-700 appearance-none outline-none hover:border-white/80 focus:border-[#0b1b42] focus:ring-2 focus:ring-[#0b1b42]/10 transition-all cursor-pointer"
            value={filters.city || ""}
            onChange={(e) => handleUpdate("city", e.target.value)}
          >
            <option value="" disabled>Select City</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {activeTab === "commercial" ? (
          <>
            <div>
              <h3 className="text-[13px] font-extrabold text-[#0a1128] mb-2 tracking-tight">Transaction Type</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Buy", "Lease"].map((type) => {
                  const isSelected = filters.transactionType === type;
                  return (
                    <button key={type} onClick={() => handleUpdate("transactionType", type)} className={clsx("relative py-2.5 rounded-xl border text-[13px] font-bold transition-all text-center flex items-center justify-center gap-1.5 hover:shadow-sm", isSelected ? "bg-white border-[#d4af37] text-[#d4af37] shadow-[0_2px_8px_rgba(212,175,55,0.15)]" : "bg-white/60 border-white/50 shadow-sm text-gray-600 hover:bg-white/80")}>
                      {type}
                      {isSelected && <div className="absolute right-2"><CheckCircle2 className="w-3.5 h-3.5 fill-[#d4af37] text-white" /></div>}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-extrabold text-[#0a1128] mb-2 tracking-tight">Property Type</h3>
              <div className="grid grid-cols-3 gap-2">
                {PROPERTY_TYPES.map((pt) => {
                  const isSelected = filters.propertyType === pt.id;
                  return (
                    <button key={pt.id} onClick={() => handleUpdate("propertyType", filters.propertyType === pt.id ? "Any" : pt.id)} className={clsx("flex flex-col items-center justify-center p-2 rounded-xl border transition-all h-[68px] gap-1 hover:shadow-sm", isSelected ? "bg-[#0a1128] border-[#0a1128] shadow-[0_4px_12px_rgba(10,17,40,0.15)]" : "bg-white/60 border-white/50 shadow-sm hover:border-gray-200")}>
                      <pt.icon className={clsx("w-4 h-4", isSelected ? "text-white" : "text-gray-500")} strokeWidth={1.5} />
                      <span className={clsx("text-[10px] font-bold text-center leading-tight", isSelected ? "text-white" : "text-gray-600")}>{pt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-extrabold text-[#0a1128] mb-2 tracking-tight">Budget Range</h3>
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label className="block text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Min</label>
                  <div className="relative">
                    <select className="w-full px-2.5 py-2 bg-white/60 border border-white/50 shadow-sm rounded-lg text-[12px] font-semibold text-gray-700 appearance-none outline-none focus:border-[#0b1b42] focus:ring-2 focus:ring-[#0b1b42]/10 cursor-pointer transition-all" value={filters.budgetMin} onChange={(e) => handleUpdate("budgetMin", e.target.value)}>
                      {BUDGET_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div className="w-3 h-[1px] bg-gray-300 mb-3 shrink-0" />
                <div className="flex-1">
                  <label className="block text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Max</label>
                  <div className="relative">
                    <select className="w-full px-2.5 py-2 bg-white/60 border border-white/50 shadow-sm rounded-lg text-[12px] font-semibold text-gray-700 appearance-none outline-none focus:border-[#0b1b42] focus:ring-2 focus:ring-[#0b1b42]/10 cursor-pointer transition-all" value={filters.budgetMax} onChange={(e) => handleUpdate("budgetMax", e.target.value)}>
                      {BUDGET_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h3 className="text-[13px] font-extrabold text-[#0a1128] mb-2 tracking-tight">Select Industry</h3>
            <div className="grid grid-cols-2 gap-2">
              {BOP_INDUSTRIES.map((ind) => {
                const isSelected = filters.industry === ind.id;
                return (
                  <button key={ind.id} onClick={() => handleUpdate("industry", filters.industry === ind.id ? "Any" : ind.id)} className={clsx("flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all h-[76px] gap-1.5 hover:shadow-sm", isSelected ? "bg-white border-[#d4af37] shadow-[0_4px_12px_rgba(212,175,55,0.15)]" : "bg-white/60 border-white/50 shadow-sm hover:border-gray-200")}>
                    <ind.icon className={clsx("w-5 h-5", ind.color)} />
                    <span className={clsx("text-[11px] font-bold text-center leading-tight", isSelected ? "text-[#0a1128]" : "text-gray-600")}>{ind.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div>
          <button onClick={() => setAdvancedOpen(!advancedOpen)} className={clsx("w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border font-bold text-[12px] transition-all", advancedOpen ? "bg-[#0b1b42] border-[#0b1b42] text-white shadow-[0_4px_12px_rgba(11,27,66,0.2)]" : "bg-white/80 border-[#d4af37] shadow-sm text-[#d4af37] hover:bg-white")}>
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
                      <button type="button" onClick={() => toggleCategory("size")} className={clsx("w-full flex items-center justify-between px-2.5 py-2.5 rounded-lg transition-colors", expandedCategoryKey === "size" ? "bg-white shadow-sm" : "hover:bg-white/60")}>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[#0284c7]">
                            <Maximize className="w-[16px] h-[16px] text-white" strokeWidth={2.5} />
                          </div>
                          <div className="text-left">
                            <div className="text-[13px] font-bold text-[#0a1128] leading-tight">Size</div>
                            <div className="text-[10px] text-gray-400 font-medium">Built-up Area</div>
                          </div>
                        </div>
                        <motion.div animate={{ rotate: expandedCategoryKey === "size" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {expandedCategoryKey === "size" && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="ml-[48px] mr-2 py-2 space-y-2 mb-1">
                              <div className="flex gap-2">
                                <div className="flex-1">
                                  <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">Min</label>
                                  <select className="w-full bg-white border border-gray-200 rounded-lg px-2.5 py-2 text-[12px] font-bold text-gray-700 outline-none hover:border-[#0b1b42] focus:border-[#0b1b42] cursor-pointer" value={filters.sizeMin} onChange={(e) => handleUpdate("sizeMin", e.target.value)}>
                                    {SIZE_MIN_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                  </select>
                                </div>
                                <div className="flex-1">
                                  <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">Max</label>
                                  <select className="w-full bg-white border border-gray-200 rounded-lg px-2.5 py-2 text-[12px] font-bold text-gray-700 outline-none hover:border-[#0b1b42] focus:border-[#0b1b42] cursor-pointer" value={filters.sizeMax} onChange={(e) => handleUpdate("sizeMax", e.target.value)}>
                                    {SIZE_MAX_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                  </select>
                                </div>
                              </div>
                              <div>
                                <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">Unit</label>
                                <select className="w-full bg-white border border-gray-200 rounded-lg px-2.5 py-2 text-[12px] font-bold text-gray-700 outline-none hover:border-[#0b1b42] focus:border-[#0b1b42] cursor-pointer" value={filters.sizeUnit} onChange={(e) => handleUpdate("sizeUnit", e.target.value)}>
                                  {SIZE_UNITS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
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
                        <button type="button" onClick={() => toggleCategory(cat.key)} className={clsx("w-full flex items-center justify-between px-2 py-2 rounded-lg transition-colors", isExpanded ? "bg-white shadow-sm" : "hover:bg-white/60")}>
                          <div className="flex items-center gap-2.5">
                            <div className={clsx("w-7 h-7 rounded-md flex items-center justify-center shrink-0", cat.iconBg)}>
                              <cat.icon className="w-[14px] h-[14px] text-white" strokeWidth={2.5} />
                            </div>
                            <div className="text-left">
                              <div className="text-[12px] font-bold text-[#0a1128] leading-tight">{cat.title}</div>
                              <div className="text-[9px] text-gray-400 font-medium">{cat.subtitle}</div>
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
                              <div className="ml-[48px] mr-2 py-2 mb-1">
                                <div className="flex flex-wrap gap-1.5">
                                  <button
                                    onClick={() => { const newFilters = { ...filters }; if (cat.isMulti) { (newFilters as any)[cat.key] = []; } else { (newFilters as any)[cat.key] = DEFAULT_FILTERS[cat.key]; } onFilterChange(newFilters); }}
                                    className={clsx("px-3.5 py-1.5 rounded-lg text-[12px] font-bold border-2 transition-all", (!currentValue || currentValue === "Any" || (cat.isMulti && (currentValue as string[]).length === 0)) ? "bg-[#0b1b42] text-[#d4af37] border-[#0b1b42]" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300")}
                                  >
                                    Any
                                  </button>
                                  {cat.options.map((opt) => {
                                    const isSelected = cat.isMulti ? (currentValue as string[]).includes(opt.id) : currentValue === opt.id;
                                    return (
                                      <button
                                        key={opt.id}
                                        onClick={() => handleOptionToggle(cat, opt.id)}
                                        className={clsx("px-3.5 py-1.5 rounded-lg text-[12px] font-bold border-2 transition-all", isSelected ? "bg-[#0b1b42] text-[#d4af37] border-[#0b1b42]" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300")}
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

      <div className="px-4 py-3 border-t border-white/50 bg-white/50 flex items-center gap-3 shrink-0 rounded-b-2xl">
        <button type="button" onClick={handleReset} className="flex-[1] py-2 text-[12px] font-bold text-[#0a1128] bg-white/80 rounded-lg border border-white hover:bg-white transition-colors text-center shadow-sm">
          Reset All
        </button>
        <button type="button" onClick={onClose} className="flex-[2] py-2 text-[12px] font-bold text-white bg-[#d4af37] rounded-lg hover:bg-[#c19b2e] transition-colors shadow-[0_4px_12px_rgba(212,175,55,0.4)] text-center flex flex-col items-center leading-tight">
          <span>Apply Filters</span>
          <span className="text-[9px] font-medium text-white/70">0 Listings</span>
        </button>
      </div>
    </motion.div>
  );
}
