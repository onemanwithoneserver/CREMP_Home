import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info, ChevronDown, ChevronUp, Store, Truck, Box, Filter, Maximize2, Users, Construction } from "lucide-react";
import clsx from "clsx";
import type { FilterState } from "../data";

interface AdvancedFiltersProps {
  activeTab: "commercial" | "business";
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClose: () => void;
}

const FIT_OUT_OPTIONS = ["Any", "Bare Shell", "Warm Shell", "Semi-Fitted", "Fully Fitted"];
const OCCUPANCY_OPTIONS = ["Any", "Pre-Leased", "Vacant", "Fractional"];
const CONSTRUCTION_STAGE_OPTIONS = ["Any", "Ready to Move", "Under Construction", "Planned"];
const SIZE_MIN_OPTIONS = ["Any", "1000", "2000", "5000", "10000"];
const SIZE_MAX_OPTIONS = ["Any", "2000", "5000", "10000", "20000+"];
const SIZE_UNITS = ["Sq Ft", "Sq M", "Acres"];

const BUSINESS_OPTIONS = [
  { id: "New Franchise", label: "New Franchise", icon: Store },
  { id: "Existing Business", label: "Existing Business", icon: Store },
  { id: "Distribution", label: "Distribution", icon: Truck },
  { id: "Movable Assets", label: "Movable Assets", icon: Box },
];

export default function AdvancedFiltersMobile({ activeTab, filters, onFilterChange, onClose }: AdvancedFiltersProps) {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);
  const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);

  const handleUpdate = (key: keyof FilterState, value: any) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onFilterChange(localFilters);
    onClose();
  };

  const handleResetAll = () => {
    setLocalFilters({
      ...localFilters,
      fitOut: "Any",
      sizeMin: "Any",
      sizeMax: "Any",
      sizeUnit: "Sq Ft",
      occupancy: "Any",
      constructionStage: "Any",
      businessOption: "Any",
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-[99998] sm:hidden backdrop-blur-sm"
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 bg-[#f9fafb] rounded-t-3xl shadow-[0_-8px_40px_rgb(0,0,0,0.12)] z-[99999] flex flex-col sm:hidden max-h-[95vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white rounded-t-3xl shrink-0">
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h2 className="text-[17px] font-bold text-[#0a1128] leading-tight">Advanced Filters</h2>
            <p className="text-[12px] text-gray-500 font-medium mt-0.5">Refine your {activeTab} search</p>
          </div>
          <button
            onClick={handleResetAll}
            className="text-[14px] font-bold text-blue-600 hover:text-blue-700"
          >
            Clear All
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto custom-scrollbar p-4 space-y-4">
          
          {activeTab === "commercial" ? (
            <>
              {/* Fit Out Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-5 h-5 text-purple-600" />
                  <h3 className="text-[15px] font-bold text-[#0a1128]">Fit Out</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {FIT_OUT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleUpdate("fitOut", opt)}
                      className={clsx(
                        "px-4 py-2 rounded-xl text-[14px] font-bold border transition-colors",
                        localFilters.fitOut === opt
                          ? "bg-[#0b1b42] text-[#d4af37] border-[#0b1b42]"
                          : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Maximize2 className="w-5 h-5 text-blue-600" />
                  <h3 className="text-[15px] font-bold text-[#0a1128]">Size <span className="text-gray-400 font-normal text-sm">(Built-up Area)</span></h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <label className="absolute -top-2 left-3 bg-white px-1 text-[11px] text-gray-400 font-medium">Min Size</label>
                    <select 
                      value={localFilters.sizeMin}
                      onChange={(e) => handleUpdate("sizeMin", e.target.value)}
                      className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-bold text-gray-700 outline-none hover:border-blue-300 focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      {SIZE_MIN_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                  <div className="text-gray-300 font-bold">-</div>
                  <div className="flex-1 relative">
                    <label className="absolute -top-2 left-3 bg-white px-1 text-[11px] text-gray-400 font-medium">Max Size</label>
                    <select 
                      value={localFilters.sizeMax}
                      onChange={(e) => handleUpdate("sizeMax", e.target.value)}
                      className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-bold text-gray-700 outline-none hover:border-blue-300 focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      {SIZE_MAX_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                  <div className="w-[85px] relative">
                    <label className="absolute -top-2 left-3 bg-white px-1 text-[11px] text-gray-400 font-medium">Unit</label>
                    <select 
                      value={localFilters.sizeUnit}
                      onChange={(e) => handleUpdate("sizeUnit", e.target.value)}
                      className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3 py-3 text-[14px] font-bold text-gray-900 outline-none hover:border-blue-300 focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      {SIZE_UNITS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown className="absolute right-2 top-3.5 w-4 h-4 text-gray-900 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Occupancy Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-[15px] font-bold text-[#0a1128]">Occupancy</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {OCCUPANCY_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleUpdate("occupancy", opt)}
                      className={clsx(
                        "px-4 py-2 rounded-xl text-[14px] font-bold border transition-colors",
                        localFilters.occupancy === opt
                          ? "bg-[#0b1b42] text-[#d4af37] border-[#0b1b42]"
                          : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Construction Stage Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Construction className="w-5 h-5 text-amber-600" />
                  <h3 className="text-[15px] font-bold text-[#0a1128]">Construction Stage</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {CONSTRUCTION_STAGE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleUpdate("constructionStage", opt)}
                      className={clsx(
                        "px-4 py-2 rounded-xl text-[14px] font-bold border transition-colors",
                        localFilters.constructionStage === opt
                          ? "bg-[#0b1b42] text-[#d4af37] border-[#0b1b42]"
                          : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Business Options Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <BriefcaseIcon className="text-indigo-600" />
                  <h3 className="text-[16px] font-bold text-[#0a1128]">Business Options</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {BUSINESS_OPTIONS.map((opt) => {
                    const isSelected = localFilters.businessOption === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleUpdate("businessOption", opt.id)}
                        className={clsx(
                          "px-4 py-2.5 rounded-xl text-[14px] font-bold border transition-colors flex items-center gap-2",
                          isSelected
                            ? "bg-[#0b1b42] text-[#d4af37] border-[#0b1b42]"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                        )}
                      >
                        <opt.icon className="w-4 h-4" />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* More Filters Accordion */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <button 
              onClick={() => setMoreFiltersOpen(!moreFiltersOpen)}
              className="w-full flex items-center justify-between font-bold text-[#0a1128]"
            >
              More Filters
              {moreFiltersOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </button>
            <AnimatePresence>
              {moreFiltersOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Additional filters can go here.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-gray-100 shrink-0 pb-safe">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={handleResetAll}
              className="px-6 py-3.5 text-[15px] font-bold text-[#0a1128] bg-white rounded-xl border border-gray-200 hover:bg-gray-50 flex-1 text-center transition-colors"
            >
              Reset All
            </button>
            <button
              onClick={handleApply}
              className="px-6 py-3.5 text-[15px] font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-xl flex-[2] text-center shadow-md flex flex-col items-center leading-tight transition-colors"
            >
              <span>Apply Filters</span>
              <span className="text-[11px] font-medium text-amber-100">0 Listings</span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span className="text-[12px] font-medium">Your preferences are 100% private and secure</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>
    </svg>
  );
}
