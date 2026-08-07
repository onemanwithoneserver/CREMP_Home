import { useState } from "react";
import { ChevronDown, MapPin, Coffee, ShoppingBag, GraduationCap, HeartPulse, Flower2, Dumbbell, Bell, Car, Factory, MoreHorizontal, SlidersHorizontal, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FilterState } from "./data";
import { PROPERTY_TYPES, BUDGET_OPTIONS } from "./data";
import clsx from "clsx";
import AdvancedFilters from "./AdvancedFilters";

interface FilterDropdownProps {
  activeTab: "commercial" | "business";
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClose: () => void;
}

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

export default function FilterDropdownDesktop({
  activeTab,
  filters,
  onFilterChange,
  onClose,
}: FilterDropdownProps) {
  const [advancedFiltersOpen, setAdvancedFiltersOpen] = useState(false);

  const handleIndustrySelect = (id: string) => {
    if (id === "more") return;
    onFilterChange({
      ...filters,
      industry: filters.industry === id ? "Any" : id
    });
  };

  const handlePropertyTypeSelect = (id: string) => {
    onFilterChange({
      ...filters,
      propertyType: filters.propertyType === id ? "Any" : id
    });
  };

  const handleTransactionTypeSelect = (type: string) => {
    onFilterChange({ ...filters, transactionType: type });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-[calc(100%+8px)] right-0 bg-white rounded-2xl shadow-[0_12px_40px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden z-[9999] hidden sm:flex flex-col w-[440px] max-h-[calc(100vh-140px)]"
    >
      {/* Common Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white shrink-0">
        <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">Filters</h2>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6 bg-white">
        
        {/* City Select (Common) */}
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <MapPin className="w-5 h-5 text-gray-400" />
          </div>
          <select 
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-bold text-gray-700 appearance-none outline-none hover:border-gray-300 focus:border-[#0b1b42] shadow-sm transition-colors cursor-pointer"
            value={filters.city || ""}
            onChange={(e) => onFilterChange({ ...filters, city: e.target.value })}
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
            {/* Transaction Type */}
            <div>
              <h3 className="text-[16px] font-bold text-[#0a1128] mb-4">Transaction Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Buy", "Lease"].map((type) => {
                  const isSelected = filters.transactionType === type;
                  return (
                    <button
                      key={type}
                      onClick={() => handleTransactionTypeSelect(type)}
                      className={clsx(
                        "relative py-3.5 rounded-xl border text-[14px] font-bold transition-all text-center flex items-center justify-center gap-2",
                        isSelected
                          ? "bg-white border-[#d4af37] text-[#d4af37]"
                          : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {type}
                      {isSelected && (
                        <div className="absolute right-3">
                          <CheckCircle2 className="w-4 h-4 fill-[#d4af37] text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Property Type Grid */}
            <div>
              <h3 className="text-[16px] font-bold text-[#0a1128] mb-4">Property Type</h3>
              <div className="grid grid-cols-3 gap-3">
                {PROPERTY_TYPES.map((pt) => {
                  const isSelected = filters.propertyType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => handlePropertyTypeSelect(pt.id)}
                      className={clsx(
                        "flex flex-col items-center justify-center p-3 rounded-xl border transition-all h-[80px] gap-2",
                        isSelected
                          ? "bg-white border-[#0a1128] shadow-[0_4px_15px_rgba(10,17,40,0.1)] text-[#0a1128]"
                          : "bg-white border-gray-200 hover:border-gray-300 text-gray-500 shadow-sm hover:shadow-md"
                      )}
                    >
                      <pt.icon className={clsx("w-5 h-5", isSelected ? "text-[#0a1128]" : "text-gray-500")} strokeWidth={1.5} />
                      <span className={clsx("text-[12px] font-semibold text-center leading-tight", isSelected ? "text-[#0a1128]" : "text-gray-500")}>
                        {pt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <h3 className="text-[16px] font-bold text-[#0a1128] mb-4">Budget Range</h3>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <label className="block text-[11px] font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Min</label>
                  <select
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[13px] font-bold text-gray-700 appearance-none outline-none focus:border-[#0b1b42] hover:border-gray-300 cursor-pointer transition-colors"
                    value={filters.budgetMin}
                    onChange={(e) => onFilterChange({ ...filters, budgetMin: e.target.value })}
                  >
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 bottom-3.5 pointer-events-none" />
                </div>
                <div className="w-4 h-[1px] bg-gray-300 mt-6 shrink-0" />
                <div className="relative flex-1">
                  <label className="block text-[11px] font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Max</label>
                  <select
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[13px] font-bold text-gray-700 appearance-none outline-none focus:border-[#0b1b42] hover:border-gray-300 cursor-pointer transition-colors"
                    value={filters.budgetMax}
                    onChange={(e) => onFilterChange({ ...filters, budgetMax: e.target.value })}
                  >
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 bottom-3.5 pointer-events-none" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Industry Grid */}
            <div>
              <h3 className="text-[16px] font-bold text-[#0a1128] mb-4">Select Industry</h3>
              <div className="grid grid-cols-2 gap-3">
                {BOP_INDUSTRIES.map((ind) => {
                  const isSelected = filters.industry === ind.id;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => handleIndustrySelect(ind.id)}
                      className={clsx(
                        "flex flex-col items-center justify-center p-4 rounded-xl border transition-all h-[100px] gap-2.5",
                        isSelected
                          ? "bg-white border-[#d4af37] shadow-[0_4px_15px_rgba(212,175,55,0.15)]"
                          : "bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                      )}
                    >
                      <ind.icon className={clsx("w-6 h-6", ind.color)} />
                      <span className={clsx("text-[13px] font-bold text-center", isSelected ? "text-[#0a1128]" : "text-gray-700")}>
                        {ind.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Advanced Filters Button (Common) */}
        <button
          onClick={() => setAdvancedFiltersOpen(true)}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-[#d4af37] bg-white text-[#d4af37] font-bold text-[14px] hover:bg-[#d4af37]/5 transition-colors shadow-sm mt-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Advanced Filters
        </button>
      </div>

      {/* Common Bottom Action Bar */}
      <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between gap-3 shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 py-2.5 text-[14px] font-bold text-[#0a1128] bg-white rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors text-center shadow-sm"
        >
          Close
        </button>
        
        <button
          type="button"
          onClick={onClose}
          className="flex-1 py-2.5 text-[14px] font-bold text-white bg-[#0a1128] rounded-xl hover:bg-[#0a1128]/90 transition-colors shadow-sm text-center"
        >
          Continue
        </button>
      </div>

      <AnimatePresence>
        {advancedFiltersOpen && (
          <AdvancedFilters
            activeTab={activeTab}
            filters={filters}
            onFilterChange={onFilterChange}
            onClose={() => setAdvancedFiltersOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
