import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Info,
  ChevronDown,
  Paintbrush,
  Maximize2,
  Users2,
  HardHat,
  ShieldCheck,
  Check,
} from "lucide-react";
import { useState } from "react";
import {
  FIT_OUT_OPTIONS,
  OCCUPANCY_OPTIONS,
  CONSTRUCTION_STAGE_OPTIONS,
  SIZE_UNITS,
} from "../data";

export interface AdvancedFilterState {
  fitOut: string;
  minSize: string;
  maxSize: string;
  sizeUnit: (typeof SIZE_UNITS)[number];
  occupancy: string;
  constructionStage: string;
  parkingAvailable: boolean;
  verifiedOnly: boolean;
  cornerPlot: boolean;
}

export const DEFAULT_ADVANCED_FILTERS: AdvancedFilterState = {
  fitOut: "Any",
  minSize: "Any",
  maxSize: "Any",
  sizeUnit: "Sq Ft",
  occupancy: "Any",
  constructionStage: "Any",
  parkingAvailable: false,
  verifiedOnly: false,
  cornerPlot: false,
};

interface AdvancedFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: AdvancedFilterState;
  onApply: (filters: AdvancedFilterState) => void;
  onReset: () => void;
  listingsCount?: number;
}

export default function AdvancedFilterModal({
  isOpen,
  onClose,
  filters,
  onApply,
  onReset,
  listingsCount = 30,
}: AdvancedFilterModalProps) {
  const [draftFilters, setDraftFilters] = useState<AdvancedFilterState>(filters);
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);

  if (!isOpen) return null;

  const handleClearAll = () => {
    setDraftFilters(DEFAULT_ADVANCED_FILTERS);
  };

  const handleApply = () => {
    onApply(draftFilters);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <h2 className="text-base sm:text-lg font-bold text-[#0a1128]">
                Advanced Filters
              </h2>
              <p className="text-[11px] text-gray-400 font-normal">
                Refine your search with advanced filters
              </p>
            </div>

            <button
              type="button"
              onClick={handleClearAll}
              className="text-xs font-semibold text-[#0284c7] hover:text-[#0369a1] transition-colors"
            >
              Clear All
            </button>
          </div>

          {/* Scrollable Filters Content */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5 text-gray-800">
            {/* 1. Fit Out Section */}
            <div className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Paintbrush className="w-4 h-4 text-[#8b5cf6]" />
                  <span className="text-xs sm:text-sm font-bold text-[#0a1128]">
                    Fit Out
                  </span>
                  <Info className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {FIT_OUT_OPTIONS.map((option) => {
                  const isSelected = draftFilters.fitOut === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setDraftFilters({ ...draftFilters, fitOut: option })
                      }
                      className={`px-3 py-1.5 rounded-[6px] text-xs font-medium border transition-all ${
                        isSelected
                          ? "bg-[#0b1b42] text-white border-[#d4af37] ring-1 ring-[#d4af37]/50 shadow-xs"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Size (Built-up Area) Section */}
            <div className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#0284c7]" />
                  <span className="text-xs sm:text-sm font-bold text-[#0a1128]">
                    Size (Built-up Area)
                  </span>
                  <Info className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <select
                      value={draftFilters.minSize}
                      onChange={(e) =>
                        setDraftFilters({
                          ...draftFilters,
                          minSize: e.target.value,
                        })
                      }
                      className="w-full bg-white border border-gray-200 rounded-[6px] px-3 py-1.5 text-xs text-gray-700 outline-none appearance-none cursor-pointer focus:border-[#d4af37]"
                    >
                      <option value="Any">Min Size: Any</option>
                      <option value="500">500</option>
                      <option value="1000">1,000</option>
                      <option value="2500">2,500</option>
                      <option value="5000">5,000</option>
                      <option value="10000">10,000+</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  <span className="text-gray-400 text-xs font-bold">-</span>

                  <div className="relative flex-1">
                    <select
                      value={draftFilters.maxSize}
                      onChange={(e) =>
                        setDraftFilters({
                          ...draftFilters,
                          maxSize: e.target.value,
                        })
                      }
                      className="w-full bg-white border border-gray-200 rounded-[6px] px-3 py-1.5 text-xs text-gray-700 outline-none appearance-none cursor-pointer focus:border-[#d4af37]"
                    >
                      <option value="Any">Max Size: Any</option>
                      <option value="2000">2,000</option>
                      <option value="5000">5,000</option>
                      <option value="10000">10,000</option>
                      <option value="25000">25,000</option>
                      <option value="50000">50,000+</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="flex rounded-[6px] border border-gray-200 overflow-hidden bg-white">
                  {SIZE_UNITS.map((unit) => {
                    const isSelected = draftFilters.sizeUnit === unit;
                    return (
                      <button
                        key={unit}
                        type="button"
                        onClick={() =>
                          setDraftFilters({
                            ...draftFilters,
                            sizeUnit: unit,
                          })
                        }
                        className={`flex-1 py-1.5 text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-[#0b1b42] text-white border-r last:border-r-0 border-[#d4af37]"
                            : "text-gray-600 hover:bg-gray-50 border-r last:border-r-0 border-gray-200"
                        }`}
                      >
                        {unit}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. Occupancy Section */}
            <div className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-[#10b981]" />
                  <span className="text-xs sm:text-sm font-bold text-[#0a1128]">
                    Occupancy
                  </span>
                  <Info className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {OCCUPANCY_OPTIONS.map((option) => {
                  const isSelected = draftFilters.occupancy === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setDraftFilters({ ...draftFilters, occupancy: option })
                      }
                      className={`px-3 py-1.5 rounded-[6px] text-xs font-medium border transition-all ${
                        isSelected
                          ? "bg-[#0b1b42] text-white border-[#d4af37] ring-1 ring-[#d4af37]/50 shadow-xs"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Construction Stage Section */}
            <div className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <HardHat className="w-4 h-4 text-[#f97316]" />
                  <span className="text-xs sm:text-sm font-bold text-[#0a1128]">
                    Construction Stage
                  </span>
                  <Info className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {CONSTRUCTION_STAGE_OPTIONS.map((option) => {
                  const isSelected = draftFilters.constructionStage === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setDraftFilters({
                          ...draftFilters,
                          constructionStage: option,
                        })
                      }
                      className={`px-3 py-1.5 rounded-[6px] text-xs font-medium border transition-all ${
                        isSelected
                          ? "bg-[#0b1b42] text-white border-[#d4af37] ring-1 ring-[#d4af37]/50 shadow-xs"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Collapsible More Filters */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setIsMoreFiltersOpen(!isMoreFiltersOpen)}
                className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-[#0a1128] hover:bg-gray-50 transition-colors"
              >
                <span>More Filters</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMoreFiltersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMoreFiltersOpen && (
                <div className="px-4 py-3.5 border-t border-gray-100 space-y-2.5 bg-gray-50/40">
                  <label className="flex items-center justify-between text-xs font-medium text-gray-700 cursor-pointer">
                    <span>Dedicated Parking Available</span>
                    <input
                      type="checkbox"
                      checked={draftFilters.parkingAvailable}
                      onChange={(e) =>
                        setDraftFilters({
                          ...draftFilters,
                          parkingAvailable: e.target.checked,
                        })
                      }
                      className="w-4 h-4 accent-[#f59e0b] rounded"
                    />
                  </label>

                  <label className="flex items-center justify-between text-xs font-medium text-gray-700 cursor-pointer">
                    <span>CREMP Verified Listings Only</span>
                    <input
                      type="checkbox"
                      checked={draftFilters.verifiedOnly}
                      onChange={(e) =>
                        setDraftFilters({
                          ...draftFilters,
                          verifiedOnly: e.target.checked,
                        })
                      }
                      className="w-4 h-4 accent-[#f59e0b] rounded"
                    />
                  </label>

                  <label className="flex items-center justify-between text-xs font-medium text-gray-700 cursor-pointer">
                    <span>Corner Plot / Main Road Facing</span>
                    <input
                      type="checkbox"
                      checked={draftFilters.cornerPlot}
                      onChange={(e) =>
                        setDraftFilters({
                          ...draftFilters,
                          cornerPlot: e.target.checked,
                        })
                      }
                      className="w-4 h-4 accent-[#f59e0b] rounded"
                    />
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-5 py-3.5 border-t border-gray-100 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={onReset}
                className="py-2.5 px-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs sm:text-sm font-semibold transition-colors order-2 sm:order-1"
              >
                Reset All
              </button>

              <button
                type="button"
                onClick={handleApply}
                className="sm:col-span-2 py-2.5 px-4 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 order-1 sm:order-2"
              >
                <Check className="w-4 h-4" />
                <span>Apply Filters ({listingsCount} Listings)</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[10px] text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Your preferences are 100% private and secure</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
