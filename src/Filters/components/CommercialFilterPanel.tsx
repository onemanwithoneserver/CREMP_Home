import { useState } from "react";
import {
  Building2,
  Store,
  MapPin,
  Users,
  Building,
  Check,
  ShieldCheck,
  Maximize2,
  Coins,
  Armchair,
  Layers,
  Filter,
  ChevronUp,
  ChevronDown,
  ClipboardCheck,
  TrendingUp,
  Headphones,
  Shield,
  Briefcase,
} from "lucide-react";

interface CommercialFilterPanelProps {
  buyOrLease: "Buy" | "Lease";
  onChangeBuyOrLease: (val: "Buy" | "Lease") => void;
  selectedPropertyType: string;
  onChangePropertyType: (type: string) => void;
  selectedBudget: string;
  onChangeBudget: (budget: string) => void;
  selectedFitOut: string;
  onChangeFitOut: (fitOut: string) => void;
  selectedCommercialTags: string[];
  onToggleCommercialTag: (tag: string) => void;
  minSize: number;
  maxSize: number;
  onChangeSizeRange: (min: number, max: number) => void;
  otherFilters: {
    readyToMove: boolean;
    underConstruction: boolean;
    reraRegistered: boolean;
  };
  onToggleOtherFilter: (key: "readyToMove" | "underConstruction" | "reraRegistered") => void;
  dealPreference: "any" | "owner" | "channel";
  onChangeDealPreference: (pref: "any" | "owner" | "channel") => void;
  isMobile?: boolean;
}

const BUDGET_OPTIONS = [
  { label: "Under 50L", id: "under-50l" },
  { label: "50L - 1 Cr", id: "50l-1cr" },
  { label: "1 - 3 Cr", id: "1-3cr" },
  { label: "3 - 5 Cr", id: "3-5cr" },
  { label: "5 Cr+", id: "5cr-plus" },
];

const PROPERTY_TYPES = [
  {
    id: "office-space",
    label: "Office Space",
    icon: Building2,
    color: "#6366f1",
  },
  {
    id: "retail-space",
    label: "Retail Space",
    icon: Store,
    color: "#f97316",
  },
  {
    id: "commercial-plot",
    label: "Commercial Plot",
    icon: MapPin,
    color: "#10b981",
  },
  {
    id: "full-building",
    label: "Full Building",
    icon: Building,
    color: "#2563eb",
  },
  {
    id: "co-working",
    label: "Co-Working",
    icon: Users,
    color: "#0d9488",
  },
];

const FIT_OUT_OPTIONS_LIST = [
  { id: "Any", label: "Any", icon: Armchair, color: "#6366f1" },
  { id: "Bare Shell", label: "Bare Shell", icon: Building, color: "#64748b" },
  { id: "Warm Shell", label: "Warm Shell", icon: Armchair, color: "#ec4899" },
  { id: "Semi-Fitted", label: "Semi-Fitted", icon: Layers, color: "#0ea5e9" },
  { id: "Fully Fitted", label: "Fully Fitted", icon: Briefcase, color: "#10b981" },
];

export default function CommercialFilterPanel({
  selectedPropertyType,
  onChangePropertyType,
  selectedBudget,
  onChangeBudget,
  selectedFitOut,
  onChangeFitOut,
  selectedCommercialTags,
  onToggleCommercialTag,
  minSize,
  maxSize,
  onChangeSizeRange,
  otherFilters,
  onToggleOtherFilter,
  dealPreference,
  onChangeDealPreference,
  isMobile: _isMobile = false,
}: CommercialFilterPanelProps) {
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(true);

  return (
    <div className="w-full flex flex-col gap-4 select-none pb-6">
      {/* 1. INVESTMENT / PRICE */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-wide uppercase">
                1. Investment / Price
              </h2>
              <p className="text-[11px] text-slate-500 font-medium">Select your investment range</p>
            </div>
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-400/50 text-amber-700 text-[10px] font-bold uppercase tracking-wider hover:bg-amber-500/20 transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Investment Breakdown</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
          {BUDGET_OPTIONS.map((b) => {
            const isSelected = selectedBudget === b.label;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => onChangeBudget(b.label)}
                className={`flex items-center justify-center gap-2.5 py-3 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all relative ${
                  isSelected
                    ? "bg-[#08122a] border-[#08122a] text-[#f59e0b] shadow-md ring-1 ring-[#f59e0b]/40"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <Coins
                  className={`w-4 h-4 shrink-0 ${
                    isSelected ? "text-[#f59e0b]" : "text-purple-500"
                  }`}
                />
                <span className="truncate">{b.label}</span>
                {isSelected && (
                  <div className="w-4 h-4 rounded-full bg-white text-[#08122a] flex items-center justify-center shrink-0 ml-1">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. PROPERTY TYPE */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-wide uppercase">
              2. Property Type
            </h2>
            <p className="text-[11px] text-slate-500 font-medium">Select one or more</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
          {PROPERTY_TYPES.map((type) => {
            const isSelected = selectedPropertyType === type.id;
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => onChangePropertyType(type.id)}
                className={`flex flex-col items-center justify-center py-4 px-2 rounded-2xl border text-center transition-all relative ${
                  isSelected
                    ? "bg-purple-50/70 border-purple-600 shadow-sm ring-1 ring-purple-600"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-2"
                  style={{ color: type.color }}
                >
                  <Icon className="w-8 h-8 stroke-[1.8]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {type.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TWO COLUMN ROW: 3. AREA (SIZE) & 4. FIT-OUT & FURNISHING */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 3. AREA (SIZE) */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-wide uppercase">
                  3. Area (Size)
                </h2>
                <p className="text-[11px] text-slate-500 font-medium">Set preferred area range</p>
              </div>
            </div>

            <div className="px-2 pt-2 pb-4">
              <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-2">
                <span>500 sq.ft.</span>
                <span>10,000+ sq.ft.</span>
              </div>

              {/* Interactive dual range track */}
              <div className="relative w-full h-3 bg-slate-100 rounded-full flex items-center mb-4">
                <div
                  className="absolute h-3 bg-purple-500 rounded-full"
                  style={{
                    left: `${Math.max(0, ((minSize - 500) / 9500) * 100)}%`,
                    right: `${Math.max(0, ((10000 - maxSize) / 9500) * 100)}%`,
                  }}
                />
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={minSize}
                  onChange={(e) => {
                    const val = Math.min(Number(e.target.value), maxSize - 250);
                    onChangeSizeRange(val, maxSize);
                  }}
                  className="absolute w-full h-3 opacity-0 cursor-pointer pointer-events-auto"
                />
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={maxSize}
                  onChange={(e) => {
                    const val = Math.max(Number(e.target.value), minSize + 250);
                    onChangeSizeRange(minSize, val);
                  }}
                  className="absolute w-full h-3 opacity-0 cursor-pointer pointer-events-auto"
                />
                <div
                  className="absolute w-5 h-5 rounded-full bg-purple-600 border-2 border-white shadow-md cursor-grab active:cursor-grabbing -translate-x-1/2 pointer-events-none"
                  style={{ left: `${((minSize - 500) / 9500) * 100}%` }}
                />
                <div
                  className="absolute w-5 h-5 rounded-full bg-purple-600 border-2 border-white shadow-md cursor-grab active:cursor-grabbing -translate-x-1/2 pointer-events-none"
                  style={{ left: `${((maxSize - 500) / 9500) * 100}%` }}
                />
              </div>

              <div className="text-center">
                <p className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  {minSize.toLocaleString()} - {maxSize >= 10000 ? "10,000+" : maxSize.toLocaleString()}{" "}
                  <span className="text-sm font-semibold text-slate-600">sq.ft.</span>
                </p>
                <button
                  type="button"
                  onClick={() => onChangeSizeRange(500, 10000)}
                  className="mt-1 text-xs font-bold text-purple-600 hover:text-purple-700 underline underline-offset-2"
                >
                  Any Size
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. FIT-OUT & FURNISHING */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0">
                <Armchair className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-wide uppercase">
                  4. Fit-Out & Furnishing
                </h2>
                <p className="text-[11px] text-slate-500 font-medium">Select fit-out condition</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {FIT_OUT_OPTIONS_LIST.map((opt) => {
                const isSelected = selectedFitOut === opt.id;
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onChangeFitOut(opt.id)}
                    className={`flex flex-col items-center justify-center py-3 px-1 rounded-xl border text-center transition-all relative ${
                      isSelected
                        ? "bg-purple-50/70 border-purple-600 shadow-xs ring-1 ring-purple-600"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                    <Icon className="w-5 h-5 mb-1.5" style={{ color: opt.color }} />
                    <span className="text-[11px] font-bold text-slate-900 truncate max-w-full">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 5. MORE FILTERS (Collapsible) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xs overflow-hidden transition-all">
        <button
          type="button"
          onClick={() => setIsMoreFiltersOpen(!isMoreFiltersOpen)}
          className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0">
              <Filter className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-wide uppercase">
                5. More Filters
              </h2>
              <p className="text-[11px] text-slate-500 font-medium">Refine your preferences</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
            <span>{isMoreFiltersOpen ? "Collapse" : "Expand"}</span>
            {isMoreFiltersOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </button>

        {isMoreFiltersOpen && (
          <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Col 1: Investment Preferences */}
            <div>
              <h3 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider mb-3">
                Investment Preferences
              </h3>
              <div className="flex flex-col gap-2.5">
                {[
                  { id: "Pre-Leased", label: "Pre-Leased (High Yield)" },
                  { id: "Verified", label: "CREMP Verified" },
                  { id: "Corner Plot", label: "Corner / Main Road" },
                  { id: "Metro Connected", label: "Metro Adjacent (<500m)" },
                ].map((item) => {
                  const isChecked = selectedCommercialTags.includes(item.id);
                  return (
                    <label
                      key={item.id}
                      className="flex items-center gap-2.5 text-xs font-bold text-slate-800 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onToggleCommercialTag(item.id)}
                        className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span>{item.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Col 2: Others */}
            <div>
              <h3 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider mb-3">
                Others
              </h3>
              <div className="flex flex-col gap-2.5">
                {[
                  { key: "readyToMove", label: "Ready to Move" },
                  { key: "underConstruction", label: "Under Construction" },
                  { key: "reraRegistered", label: "RERA Registered" },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center gap-2.5 text-xs font-bold text-slate-800 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={otherFilters[item.key as keyof typeof otherFilters]}
                      onChange={() =>
                        onToggleOtherFilter(item.key as keyof typeof otherFilters)
                      }
                      className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Col 3: Deal Preferences */}
            <div>
              <h3 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider mb-3">
                Deal Preferences
              </h3>
              <div className="flex flex-col gap-2.5">
                {[
                  { value: "any", label: "Any Deal" },
                  { value: "owner", label: "Direct from Owner" },
                  { value: "channel", label: "Channel Partner" },
                ].map((item) => (
                  <label
                    key={item.value}
                    className="flex items-center gap-2.5 text-xs font-bold text-slate-800 cursor-pointer select-none"
                  >
                    <input
                      type="radio"
                      name="dealPreference"
                      value={item.value}
                      checked={dealPreference === item.value}
                      onChange={() =>
                        onChangeDealPreference(item.value as "any" | "owner" | "channel")
                      }
                      className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-500"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* WHY CHOOSE US TRUST BAR */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs">
        <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-wider mb-4">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight">Verified Listings</h4>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">
                All properties are verified for authenticity and clarity.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight">
                High-Yield Opportunities
              </h4>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">
                Focus on pre-leased and income-generating assets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight">Expert Guidance</h4>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">
                Experienced advisors to help you make smarter investment decisions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight">End-to-End Support</h4>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">
                From shortlisting to closure, we assist you at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
