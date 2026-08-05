import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Crosshair,
  ArrowRight,
  X,
  Bookmark,
  Check,
  Building2,
  Coins,
  Maximize2,
  TrendingUp,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import TopHeader from "./components/TopHeader";
import CommercialFilterPanel from "./components/CommercialFilterPanel";
import BusinessFilterPanel from "./components/BusinessFilterPanel";
import AdvancedFilterModal, {
  DEFAULT_ADVANCED_FILTERS,
} from "./components/AdvancedFilterModal";
import type { AdvancedFilterState } from "./components/AdvancedFilterModal";

interface FiltersProps {
  isMobile?: boolean;
}

export default function Filters({ isMobile = false }: FiltersProps) {
  const [activeTab, setActiveTab] = useState<"commercial" | "business">("commercial");
  const [searchQuery, setSearchQuery] = useState("");

  const [buyOrLease, setBuyOrLease] = useState<"Buy" | "Lease">("Buy");
  const [selectedPropertyType, setSelectedPropertyType] = useState("office-space");
  const [selectedBudget, setSelectedBudget] = useState("1 - 3 Cr");
  const [selectedFitOut, setSelectedFitOut] = useState("Any");
  const [selectedCommercialTags, setSelectedCommercialTags] = useState<string[]>([
    "Pre-Leased",
    "Verified",
  ]);
  const [minSize, setMinSize] = useState(1500);
  const [maxSize, setMaxSize] = useState(4000);
  const [otherFilters, setOtherFilters] = useState({
    readyToMove: false,
    underConstruction: false,
    reraRegistered: false,
  });
  const [dealPreference, setDealPreference] = useState<"any" | "owner" | "channel">("any");

  const [selectedIndustry, setSelectedIndustry] = useState("food-beverage");
  const [selectedInvestmentBudget, setSelectedInvestmentBudget] = useState("₹ 25 L - ₹ 50 L");
  const [selectedModel, setSelectedModel] = useState("all");
  const [selectedBusinessTags, setSelectedBusinessTags] = useState<string[]>([
    "High ROI",
    "Turnkey",
  ]);
  const [selectedPayback, setSelectedPayback] = useState("Any ROI");

  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilterState>(
    DEFAULT_ADVANCED_FILTERS
  );
  const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false);

  const toggleCommercialTag = (tag: string) => {
    setSelectedCommercialTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleOtherFilter = (key: "readyToMove" | "underConstruction" | "reraRegistered") => {
    setOtherFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleBusinessTag = (tag: string) => {
    setSelectedBusinessTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearAll = () => {
    setAdvancedFilters(DEFAULT_ADVANCED_FILTERS);
    setSearchQuery("");
    if (activeTab === "commercial") {
      setBuyOrLease("Buy");
      setSelectedPropertyType("office-space");
      setSelectedBudget("1 - 3 Cr");
      setSelectedFitOut("Any");
      setSelectedCommercialTags([]);
      setMinSize(500);
      setMaxSize(10000);
      setOtherFilters({ readyToMove: false, underConstruction: false, reraRegistered: false });
      setDealPreference("any");
    } else {
      setSelectedIndustry("food-beverage");
      setSelectedInvestmentBudget("₹ 25 L - ₹ 50 L");
      setSelectedModel("all");
      setSelectedBusinessTags([]);
      setSelectedPayback("Any ROI");
    }
  };

  const resultsCount = activeTab === "commercial" ? 30 : 356;

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#f4f6fa] text-slate-900 overflow-hidden font-sans select-none relative">
      {/* Top Header matching reference */}
      <TopHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenAdvanced={() => setIsAdvancedFilterOpen(true)}
        commercialCount={30}
        businessCount={356}
        isMobile={isMobile}
      />

      {/* Search Bar & Active Filter Row Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2 shrink-0 flex flex-col gap-3">
        {/* Full width Search Box with Crosshair GPS */}
        <div className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-2.5 shadow-xs flex items-center gap-3 focus-within:border-purple-600 focus-within:ring-2 focus-within:ring-purple-500/10 transition-all">
          <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTab === "commercial"
                ? "Search micro-market, building, or road..."
                : "Search brand, industry, or franchise concept..."
            }
            className="w-full bg-transparent border-none outline-none text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 font-medium"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            className="p-1.5 rounded-xl text-slate-400 hover:text-purple-600 hover:bg-purple-50 transition-colors shrink-0"
            title="Use current location"
          >
            <Crosshair className="w-5 h-5" />
          </button>
        </div>

        {/* Transaction Intent Segmented Control + Active Filter Chips + Clear All */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Buy / Lease Toggle */}
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-xs shrink-0">
              <button
                type="button"
                onClick={() => setBuyOrLease("Buy")}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  buyOrLease === "Buy"
                    ? "bg-[#08122a] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Buy Property
              </button>
              <button
                type="button"
                onClick={() => setBuyOrLease("Lease")}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  buyOrLease === "Lease"
                    ? "bg-[#08122a] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Lease / Rent
              </button>
            </div>

            {/* Active Selected Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {activeTab === "commercial" ? (
                <>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-xs font-bold text-purple-900 shadow-2xs">
                    <Building2 className="w-3.5 h-3.5 text-purple-600" />
                    <span>
                      {selectedPropertyType === "office-space"
                        ? "Office Space"
                        : selectedPropertyType === "retail-space"
                        ? "Retail Space"
                        : selectedPropertyType === "commercial-plot"
                        ? "Commercial Plot"
                        : selectedPropertyType === "full-building"
                        ? "Full Building"
                        : "Co-Working"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedPropertyType("office-space")}
                      className="ml-1 text-purple-400 hover:text-purple-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 shadow-2xs">
                    <Coins className="w-3.5 h-3.5 text-amber-600" />
                    <span>₹ {selectedBudget}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedBudget("1 - 3 Cr")}
                      className="ml-1 text-amber-400 hover:text-amber-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900 shadow-2xs">
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>
                      {minSize} - {maxSize >= 10000 ? "10000+" : maxSize} sq.ft.
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setMinSize(500);
                        setMaxSize(10000);
                      }}
                      className="ml-1 text-emerald-400 hover:text-emerald-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>

                  {selectedCommercialTags.includes("Pre-Leased") && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-bold text-blue-900 shadow-2xs">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                      <span>Pre-Leased (High Yield)</span>
                      <button
                        type="button"
                        onClick={() => toggleCommercialTag("Pre-Leased")}
                        className="ml-1 text-blue-400 hover:text-blue-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {selectedCommercialTags.includes("Verified") && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 border border-teal-200 text-xs font-bold text-teal-900 shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>Verified</span>
                      <button
                        type="button"
                        onClick={() => toggleCommercialTag("Verified")}
                        className="ml-1 text-teal-400 hover:text-teal-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-xs font-bold text-purple-900 shadow-2xs">
                    <Briefcase className="w-3.5 h-3.5 text-purple-600" />
                    <span className="capitalize">{selectedIndustry.replace("-", " ")}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedIndustry("food-beverage")}
                      className="ml-1 text-purple-400 hover:text-purple-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 shadow-2xs">
                    <Coins className="w-3.5 h-3.5 text-amber-600" />
                    <span>{selectedInvestmentBudget}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedInvestmentBudget("₹ 25 L - ₹ 50 L")}
                      className="ml-1 text-amber-400 hover:text-amber-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Clear All Button */}
          <button
            type="button"
            onClick={handleClearAll}
            className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 ml-auto shrink-0 transition-colors"
          >
            <span>Clear All</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Scrollable Filter Canvas */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 overflow-y-auto relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "commercial" ? (
            <motion.div
              key="commercial"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <CommercialFilterPanel
                buyOrLease={buyOrLease}
                onChangeBuyOrLease={setBuyOrLease}
                selectedPropertyType={selectedPropertyType}
                onChangePropertyType={setSelectedPropertyType}
                selectedBudget={selectedBudget}
                onChangeBudget={setSelectedBudget}
                selectedFitOut={selectedFitOut}
                onChangeFitOut={setSelectedFitOut}
                selectedCommercialTags={selectedCommercialTags}
                onToggleCommercialTag={toggleCommercialTag}
                minSize={minSize}
                maxSize={maxSize}
                onChangeSizeRange={(min, max) => {
                  setMinSize(min);
                  setMaxSize(max);
                }}
                otherFilters={otherFilters}
                onToggleOtherFilter={toggleOtherFilter}
                dealPreference={dealPreference}
                onChangeDealPreference={setDealPreference}
                isMobile={isMobile}
              />
            </motion.div>
          ) : (
            <motion.div
              key="business"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <BusinessFilterPanel
                selectedIndustry={selectedIndustry}
                onChangeIndustry={setSelectedIndustry}
                selectedInvestmentBudget={selectedInvestmentBudget}
                onChangeInvestmentBudget={setSelectedInvestmentBudget}
                selectedModel={selectedModel}
                onChangeModel={setSelectedModel}
                selectedBusinessTags={selectedBusinessTags}
                onToggleBusinessTag={toggleBusinessTag}
                selectedPayback={selectedPayback}
                onChangePayback={setSelectedPayback}
                isMobile={isMobile}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Sticky Bottom Bar Matching Mockup */}
      <footer className="w-full bg-[#08122a] border-t border-white/10 px-4 sm:px-6 py-3 relative z-30 shadow-2xl shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left Results Count */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm shadow-md shadow-emerald-500/20 shrink-0">
              <Check className="w-5 h-5 stroke-[3.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-black text-white">{resultsCount}</span>
                <span className="text-base font-black text-white">Properties Found</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Showing best matches for your filters
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0d1c3e] hover:bg-[#12244f] border border-white/20 text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
            >
              <Bookmark className="w-4 h-4 text-slate-300" />
              <span>Save Search</span>
            </button>

            <button
              type="button"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-[#08122a] text-xs sm:text-sm font-black shadow-lg shadow-amber-500/25 transition-all active:scale-[0.98]"
            >
              <span>
                Explore {resultsCount} {activeTab === "commercial" ? "Properties" : "Opportunities"}
              </span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </footer>

      {/* Advanced Filter Modal */}
      <AdvancedFilterModal
        isOpen={isAdvancedFilterOpen}
        onClose={() => setIsAdvancedFilterOpen(false)}
        filters={advancedFilters}
        onApply={(updated) => setAdvancedFilters(updated)}
        onReset={handleClearAll}
        listingsCount={resultsCount}
      />
    </div>
  );
}
