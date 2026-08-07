import { useState } from "react";
import { ChevronDown, MapPin, Coffee, ShoppingBag, GraduationCap, HeartPulse, Flower2, Dumbbell, Bell, Car, Factory, MoreHorizontal, SlidersHorizontal, Filter, Layers, Tag, Handshake, Users, Construction, Briefcase, CheckCircle2, Store, Truck, Box, Maximize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FilterState } from "./data";
import { DEFAULT_FILTERS, PROPERTY_TYPES, BUDGET_OPTIONS, FIT_OUT_OPTIONS, COMMERCIAL_TAGS, STATUS_OPTIONS, DEAL_PREF, OCCUPANCY_OPTIONS, CONSTRUCTION_STAGE_OPTIONS } from "./data";
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
  options: { id: string; label: string }[];
  isMulti?: boolean;
}

const COLOR_PALETTE = [
  { bg: "bg-blue-50", text: "text-blue-600" },
  { bg: "bg-red-50", text: "text-red-500" },
  { bg: "bg-green-50", text: "text-green-600" },
  { bg: "bg-purple-50", text: "text-purple-600" },
  { bg: "bg-orange-50", text: "text-orange-500" },
  { bg: "bg-teal-50", text: "text-teal-600" },
];

const BOP_INDUSTRIES = [
  { id: "food-beverage", label: "Food & Beverage", icon: Coffee, color: "text-amber-500" },
  { id: "retail", label: "Retail", icon: ShoppingBag, color: "text-purple-500" },
  { id: "education", label: "Education", icon: GraduationCap, color: "text-blue-500" },
  { id: "healthcare", label: "Healthcare", icon: HeartPulse, color: "text-emerald-500" },
  { id: "beauty-wellness", label: "Beauty & Wellness", icon: Flower2, color: "text-pink-500" },
  { id: "fitness", label: "Fitness", icon: Dumbbell, color: "text-orange-500" },
  { id: "hospitality", label: "Hospitality", icon: Bell, color: "text-indigo-500" },
  { id: "automobile", label: "Automobile", icon: Car, color: "text-cyan-500" },
  { id: "manufacturing", label: "Manufacturing", icon: Factory, color: "text-teal-500" },
  { id: "more", label: "More Industries", icon: MoreHorizontal, color: "text-gray-400" },
];

const BUSINESS_OPTIONS = [
  { id: "New Franchise", label: "New Franchise", icon: Store },
  { id: "Existing Business", label: "Existing Business", icon: Store },
  { id: "Distribution", label: "Distribution", icon: Truck },
  { id: "Movable Assets", label: "Movable Assets", icon: Box },
];

const SIZE_MIN_OPTIONS = ["Any", "1000", "2000", "5000", "10000"];
const SIZE_MAX_OPTIONS = ["Any", "2000", "5000", "10000", "20000+"];
const SIZE_UNITS = ["Sq Ft", "Sq M", "Acres"];

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
            size: DEFAULT_FILTERS.size,
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
    { key: "fitOut", title: "Fit Out", subtitle: "Across Fit Out", icon: Filter, options: FIT_OUT_OPTIONS.filter(o => o.id !== "Any").map(o => ({ id: o.id, label: o.label })) },
    { key: "occupancy", title: "Occupancy", subtitle: "Across Occupancy", icon: Users, options: mapStringsToOptions(OCCUPANCY_OPTIONS) },
    { key: "constructionStage", title: "Construction Stage", subtitle: "Across Construction Stage", icon: Construction, options: mapStringsToOptions(CONSTRUCTION_STAGE_OPTIONS) },
    { key: "status", title: "Status", subtitle: "Across Status", icon: Layers, options: mapStringsToOptions(STATUS_OPTIONS), isMulti: true },
    { key: "dealPref", title: "Deal Preference", subtitle: "Across Deal Preference", icon: Handshake, options: mapStringsToOptions(DEAL_PREF.filter(o => o !== "Any")) },
    { key: "commercialTags", title: "Commercial Tags", subtitle: "Across Commercial Tags", icon: Tag, options: COMMERCIAL_TAGS.map(t => ({ id: t.id, label: t.label })), isMulti: true },
  ];

  const businessAdvancedCategories: CategoryDef[] = [
    { key: "businessOption", title: "Business Options", subtitle: "Across Business Options", icon: Briefcase, options: BUSINESS_OPTIONS.map(o => ({ id: o.id, label: o.label })) },
  ];

  const advancedCategories = activeTab === "commercial" ? commercialAdvancedCategories : businessAdvancedCategories;

  return (
    <motion.div initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }} transition={{ duration: 0.2, ease: "easeOut" }} className="absolute top-[calc(100%+8px)] right-0 bg-white rounded-2xl shadow-[0_12px_40px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden z-[9999] hidden sm:flex flex-col w-[440px]">
      
      <div className="flex items-center justify-between p-4 px-5 bg-white border-b border-gray-100 shrink-0">
        <h2 className="text-[20px] font-bold text-[#0a1128] tracking-tight">Filters</h2>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-5 pt-4 space-y-6 bg-white max-h-[calc(100vh-200px)]">
        
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <MapPin className="w-5 h-5 text-gray-400" />
          </div>
          <select 
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-bold text-gray-700 appearance-none outline-none hover:border-gray-300 focus:border-[#0b1b42] shadow-sm transition-colors cursor-pointer"
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
              <h3 className="text-[15px] font-bold text-[#0a1128] mb-3">Transaction Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Buy", "Lease"].map((type) => {
                  const isSelected = filters.transactionType === type;
                  return (
                    <button key={type} onClick={() => handleUpdate("transactionType", type)} className={clsx("relative py-3 rounded-xl border text-[14px] font-bold transition-all text-center flex items-center justify-center gap-2 hover:shadow-sm", isSelected ? "bg-white border-[#d4af37] text-[#d4af37]" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50")}>
                      {type}
                      {isSelected && <div className="absolute right-3"><CheckCircle2 className="w-4 h-4 fill-[#d4af37] text-white" /></div>}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-[#0a1128] mb-3">Property Type</h3>
              <div className="grid grid-cols-3 gap-3">
                {PROPERTY_TYPES.map((pt) => {
                  const isSelected = filters.propertyType === pt.id;
                  return (
                    <button key={pt.id} onClick={() => handleUpdate("propertyType", filters.propertyType === pt.id ? "Any" : pt.id)} className={clsx("flex flex-col items-center justify-center p-3 rounded-xl border transition-all h-[80px] gap-2 hover:shadow-sm", isSelected ? "bg-[#0a1128] border-[#0a1128] shadow-[0_4px_15px_rgba(10,17,40,0.1)] text-white" : "bg-white border-gray-200 hover:border-gray-300 text-gray-500 shadow-sm")}>
                      <pt.icon className={clsx("w-5 h-5", isSelected ? "text-white" : "text-gray-500")} strokeWidth={1.5} />
                      <span className={clsx("text-[12px] font-bold text-center leading-tight", isSelected ? "text-white" : "text-gray-500")}>{pt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-[#0a1128] mb-3">Budget Range</h3>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <label className="block text-[11px] text-gray-400 font-bold mb-1">MIN</label>
                  <select className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] font-bold text-gray-700 appearance-none outline-none focus:border-[#0b1b42] cursor-pointer" value={filters.budgetMin} onChange={(e) => handleUpdate("budgetMin", e.target.value)}>
                    {BUDGET_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 bottom-3 pointer-events-none" />
                </div>
                <div className="w-3 h-[1px] bg-gray-300 mt-5 shrink-0" />
                <div className="relative flex-1">
                  <label className="block text-[11px] text-gray-400 font-bold mb-1">MAX</label>
                  <select className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] font-bold text-gray-700 appearance-none outline-none focus:border-[#0b1b42] cursor-pointer" value={filters.budgetMax} onChange={(e) => handleUpdate("budgetMax", e.target.value)}>
                    {BUDGET_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 bottom-3 pointer-events-none" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <h3 className="text-[15px] font-bold text-[#0a1128] mb-3">Select Industry</h3>
              <div className="grid grid-cols-2 gap-3">
                {BOP_INDUSTRIES.map((ind) => {
                  const isSelected = filters.industry === ind.id;
                  return (
                    <button key={ind.id} onClick={() => handleUpdate("industry", filters.industry === ind.id ? "Any" : ind.id)} className={clsx("flex flex-col items-center justify-center p-4 rounded-xl border transition-all h-[100px] gap-2.5", isSelected ? "bg-white border-[#d4af37] shadow-[0_4px_15px_rgba(212,175,55,0.15)]" : "bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md")}>
                      <ind.icon className={clsx("w-6 h-6", ind.color)} />
                      <span className={clsx("text-[13px] font-bold text-center", isSelected ? "text-[#0a1128]" : "text-gray-700")}>{ind.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        <div className="pt-2">
          <button onClick={() => setAdvancedOpen(!advancedOpen)} className={clsx("w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border font-bold text-[14px] transition-colors shadow-sm", advancedOpen ? "bg-[#d4af37]/10 border-[#d4af37] text-[#0b1b42]" : "border-[#d4af37] bg-white text-[#d4af37] hover:bg-[#d4af37]/5")}>
            <SlidersHorizontal className="w-4 h-4" />
            Advanced Filters
            <motion.div animate={{ rotate: advancedOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4 ml-1" />
            </motion.div>
          </button>

          <AnimatePresence>
            {advancedOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="mt-4 border border-gray-100 rounded-2xl bg-[#f8f9fc] p-2 space-y-1">
                  
                  {activeTab === "commercial" && (
                    <div className="flex flex-col mb-1">
                      <button type="button" onClick={() => toggleCategory("size")} className="w-full flex items-center justify-between px-3 py-3 rounded-xl transition-colors hover:bg-gray-50 focus-visible:outline-none">
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0 bg-blue-50 text-blue-600">
                            <Maximize className="w-5 h-5" strokeWidth={2.5} />
                          </div>
                          <div className="text-left">
                            <div className="text-[15px] font-bold text-[#0a1128]">Size</div>
                            <div className="text-[12px] text-gray-500 font-medium">Built-up Area</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <motion.div animate={{ rotate: expandedCategoryKey === "size" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        </div>
                      </button>
                      <AnimatePresence>
                        {expandedCategoryKey === "size" && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="pl-[68px] pr-3 py-2 space-y-3 mb-2">
                              <div className="flex gap-2">
                                <div className="flex-1">
                                  <label className="block text-[11px] text-gray-400 font-bold mb-1">MIN</label>
                                  <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-bold text-gray-700 outline-none focus:border-[#0b1b42] cursor-pointer" value={filters.sizeMin} onChange={(e) => handleUpdate("sizeMin", e.target.value)}>
                                    {SIZE_MIN_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                  </select>
                                </div>
                                <div className="flex-1">
                                  <label className="block text-[11px] text-gray-400 font-bold mb-1">MAX</label>
                                  <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-bold text-gray-700 outline-none focus:border-[#0b1b42] cursor-pointer" value={filters.sizeMax} onChange={(e) => handleUpdate("sizeMax", e.target.value)}>
                                    {SIZE_MAX_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                  </select>
                                </div>
                              </div>
                              <div>
                                <label className="block text-[11px] text-gray-400 font-bold mb-1">UNIT</label>
                                <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-bold text-gray-700 outline-none focus:border-[#0b1b42] cursor-pointer" value={filters.sizeUnit} onChange={(e) => handleUpdate("sizeUnit", e.target.value)}>
                                  {SIZE_UNITS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {advancedCategories.map((cat, idx) => {
                    const isExpanded = expandedCategoryKey === cat.key;
                    const colors = COLOR_PALETTE[(idx + (activeTab === "commercial" ? 1 : 0)) % COLOR_PALETTE.length];
                    
                    return (
                      <div key={cat.key} className="flex flex-col">
                        <button type="button" onClick={() => toggleCategory(cat.key)} className="w-full flex items-center justify-between px-3 py-3 rounded-xl transition-colors hover:bg-gray-50 focus-visible:outline-none">
                          <div className="flex items-center gap-4">
                            <div className={clsx("w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0", colors.bg, colors.text)}>
                              <cat.icon className="w-5 h-5" strokeWidth={2.5} />
                            </div>
                            <div className="text-left">
                              <div className="text-[15px] font-bold text-[#0a1128]">{cat.title}</div>
                              <div className="text-[12px] text-gray-500 font-medium">{cat.subtitle}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            </motion.div>
                          </div>
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                              <div className="pl-[68px] pr-3 py-2 space-y-1 mb-2">
                                <div className="flex flex-wrap gap-2">
                                  <button
                                    onClick={() => handleOptionToggle(cat, "Any")}
                                    className={clsx("px-4 py-2 rounded-xl text-[13px] font-bold border transition-colors", (!filters[cat.key] || filters[cat.key] === "Any" || (cat.isMulti && (filters[cat.key] as string[]).length === 0)) ? "bg-[#0b1b42] text-[#d4af37] border-[#0b1b42]" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50")}
                                  >
                                    Any
                                  </button>
                                  {cat.options.map((opt) => {
                                    const isSelected = cat.isMulti ? (filters[cat.key] as string[]).includes(opt.id) : filters[cat.key] === opt.id;
                                    return (
                                      <button
                                        key={opt.id}
                                        onClick={() => handleOptionToggle(cat, opt.id)}
                                        className={clsx("px-4 py-2 rounded-xl text-[13px] font-bold border transition-colors", isSelected ? "bg-[#0b1b42] text-[#d4af37] border-[#0b1b42]" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50")}
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

      <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between gap-3 shrink-0 rounded-b-2xl">
        <button type="button" onClick={handleReset} className="flex-[1] py-3 text-[14px] font-bold text-[#0a1128] bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-center shadow-sm">
          Reset All
        </button>
        <button type="button" onClick={onClose} className="flex-[2] py-3 text-[14px] font-bold text-white bg-[#d4af37] rounded-xl hover:bg-[#c19b2e] transition-colors shadow-md text-center flex flex-col items-center leading-tight">
          <span>Apply Filters</span>
          <span className="text-[11px] font-medium text-amber-100/80">0 Listings</span>
        </button>
      </div>
    </motion.div>
  );
}
