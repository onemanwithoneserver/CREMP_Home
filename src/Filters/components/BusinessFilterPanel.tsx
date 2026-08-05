import {
  Utensils,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Sparkles,
  Dumbbell,
  Hotel,
  Car,
  Check,
  TrendingUp,
  Award,
  Zap,
  Briefcase,
} from "lucide-react";
import { BUSINESS_INDUSTRIES, BUSINESS_BUDGET_PRESETS } from "../data";

interface BusinessFilterPanelProps {
  selectedIndustry: string;
  onChangeIndustry: (industry: string) => void;
  selectedInvestmentBudget: string;
  onChangeInvestmentBudget: (budget: string) => void;
  selectedModel: string;
  onChangeModel: (model: string) => void;
  selectedBusinessTags: string[];
  onToggleBusinessTag: (tag: string) => void;
  selectedPayback: string;
  onChangePayback: (payback: string) => void;
  isMobile?: boolean;
}

const INDUSTRY_CONFIGS: Record<
  string,
  {
    icon: typeof Utensils;
    color: string;
    bgUnselected: string;
    borderUnselected: string;
    textUnselected: string;
  }
> = {
  "food-beverage": {
    icon: Utensils,
    color: "#F97316",
    bgUnselected: "bg-orange-50",
    borderUnselected: "border-orange-200/80",
    textUnselected: "text-orange-700",
  },
  retail: {
    icon: ShoppingBag,
    color: "#8B5CF6",
    bgUnselected: "bg-purple-50",
    borderUnselected: "border-purple-200/80",
    textUnselected: "text-purple-700",
  },
  education: {
    icon: GraduationCap,
    color: "#3B82F6",
    bgUnselected: "bg-blue-50",
    borderUnselected: "border-blue-200/80",
    textUnselected: "text-blue-700",
  },
  healthcare: {
    icon: HeartPulse,
    color: "#10B981",
    bgUnselected: "bg-emerald-50",
    borderUnselected: "border-emerald-200/80",
    textUnselected: "text-emerald-700",
  },
  "beauty-wellness": {
    icon: Sparkles,
    color: "#D946EF",
    bgUnselected: "bg-fuchsia-50",
    borderUnselected: "border-fuchsia-200/80",
    textUnselected: "text-fuchsia-700",
  },
  fitness: {
    icon: Dumbbell,
    color: "#EF4444",
    bgUnselected: "bg-red-50",
    borderUnselected: "border-red-200/80",
    textUnselected: "text-red-700",
  },
  hospitality: {
    icon: Hotel,
    color: "#6366F1",
    bgUnselected: "bg-indigo-50",
    borderUnselected: "border-indigo-200/80",
    textUnselected: "text-indigo-700",
  },
  automobile: {
    icon: Car,
    color: "#06B6D4",
    bgUnselected: "bg-cyan-50",
    borderUnselected: "border-cyan-200/80",
    textUnselected: "text-cyan-700",
  },
};

const BUSINESS_MODELS = [
  { id: "all", label: "Any Model" },
  { id: "FOCO", label: "FOCO (Investor Run)" },
  { id: "FOFO", label: "FOFO (Owner Operated)" },
  { id: "Master", label: "Master Franchise" },
  { id: "Resale", label: "Running Biz Resale" },
];

const PAYBACK_PRESETS = ["Any ROI", "< 12 Months", "12 - 24 Months", "24+ Months"];

const BUSINESS_TAGS = [
  {
    id: "High ROI",
    label: "High ROI (>35% p.a.)",
    icon: TrendingUp,
    color: "#10B981",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200/80",
  },
  {
    id: "Turnkey",
    label: "100% Turnkey Support",
    icon: Zap,
    color: "#F97316",
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200/80",
  },
  {
    id: "Established Brand",
    label: "Established Brand (50+ Outlets)",
    icon: Award,
    color: "#D4AF37",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200/80",
  },
  {
    id: "New Franchise",
    label: "Exclusive Territory Available",
    icon: Sparkles,
    color: "#8B5CF6",
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200/80",
  },
];

export default function BusinessFilterPanel({
  selectedIndustry,
  onChangeIndustry,
  selectedInvestmentBudget,
  onChangeInvestmentBudget,
  selectedModel,
  onChangeModel,
  selectedBusinessTags,
  onToggleBusinessTag,
  selectedPayback,
  onChangePayback,
  isMobile = false,
}: BusinessFilterPanelProps) {
  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-3 pb-20 select-none">
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[11px] font-bold text-[#0b1b42] uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
              Industry Category
            </span>
            <span className="text-[10px] text-[#d4af37] font-bold">8 Sectors</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {BUSINESS_INDUSTRIES.slice(0, 8).map((ind) => {
              const config = INDUSTRY_CONFIGS[ind.id] || {
                icon: Briefcase,
                color: "#8B5CF6",
                bgUnselected: "bg-purple-50",
                borderUnselected: "border-purple-200/80",
                textUnselected: "text-purple-700",
              };
              const Icon = config.icon;
              const isSelected = selectedIndustry === ind.id;

              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => onChangeIndustry(ind.id)}
                  className={`flex items-center gap-2 p-2 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-[#0b1b42] border-[#d4af37] text-white shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
                      : "bg-slate-50 border-slate-200/80 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-[#d4af37] text-[#0b1b42]"
                        : `${config.bgUnselected} ${config.textUnselected} border ${config.borderUnselected}`
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold truncate leading-tight">{ind.name}</p>
                    <p
                      className={`text-[9px] truncate ${
                        isSelected ? "text-[#d4af37] font-semibold" : "text-slate-500"
                      }`}
                    >
                      {isSelected ? "Active Sector" : "Opportunities"}
                    </p>
                  </div>
                  {isSelected && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#0b1b42] uppercase tracking-wider flex items-center gap-1.5">
              <span className="text-[#d4af37] font-bold">₹</span>
              Capital Investment Range
            </span>
            <div className="px-2 py-0.5 rounded-full bg-[#0b1b42] border border-[#d4af37]/50 text-[#d4af37] text-[10px] font-bold">
              {selectedInvestmentBudget}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {BUSINESS_BUDGET_PRESETS.map((b) => {
              const isSelected = selectedInvestmentBudget === b.label;
              return (
                <button
                  key={b.label}
                  type="button"
                  onClick={() => onChangeInvestmentBudget(b.label)}
                  className={`py-2 px-2 rounded-xl border text-center transition-all ${
                    isSelected
                      ? "bg-[#0b1b42] border-[#d4af37] text-white shadow-[0_2px_10px_rgba(212,175,55,0.25)]"
                      : "bg-slate-50 border-slate-200/80 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <p
                    className={`text-xs font-bold leading-tight ${
                      isSelected ? "text-[#d4af37]" : "text-slate-800"
                    }`}
                  >
                    {b.label}
                  </p>
                  <p
                    className={`text-[9px] mt-0.5 ${
                      isSelected ? "text-gray-300 font-medium" : "text-slate-500"
                    }`}
                  >
                    {b.max <= 25 ? "Micro Segment" : b.max <= 50 ? "Mid Expansion" : "Flagship Project"}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#0b1b42] uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#d4af37]" />
              Business Operating Format
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Model</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {BUSINESS_MODELS.map((model) => {
              const isSelected = selectedModel === model.id;
              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => onChangeModel(model.id)}
                  className={`py-2 px-2 rounded-xl border text-center text-xs font-bold transition-all truncate ${
                    isSelected
                      ? "bg-[#0b1b42] text-[#d4af37] border-[#d4af37] shadow-xs"
                      : "bg-slate-50 border-slate-200/80 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {model.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#0b1b42] uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#d4af37]" />
              Target Breakeven Period
            </span>
            <span className="text-[10px] text-slate-600 font-bold">{selectedPayback}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {PAYBACK_PRESETS.map((p) => {
              const isSelected = selectedPayback === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => onChangePayback(p)}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold text-center transition-all border ${
                    isSelected
                      ? "bg-[#0b1b42] text-[#d4af37] border-[#d4af37] shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[11px] font-bold text-[#0b1b42] uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              Franchise Badges & Guarantees
            </span>
            <span className="text-[10px] text-[#d4af37] font-bold">Multi-select</span>
          </div>
          <div className="flex flex-col gap-2">
            {BUSINESS_TAGS.map((tag) => {
              const isSelected = selectedBusinessTags.includes(tag.id);
              const Icon = tag.icon;
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => onToggleBusinessTag(tag.id)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-[#0b1b42] border-[#d4af37] text-white shadow-[0_2px_10px_rgba(212,175,55,0.2)]"
                      : "bg-slate-50 border-slate-200/80 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-[#d4af37] text-[#0b1b42]"
                          : `${tag.bg} ${tag.text} border ${tag.border}`
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold truncate">{tag.label}</span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                      isSelected
                        ? "border-[#d4af37] bg-[#d4af37] text-[#0b1b42]"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-12 gap-3 select-none">
      <div className="col-span-6 flex flex-col gap-3">
        <div className="bg-white border border-slate-200/90 rounded-xl p-3 shadow-xs flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-bold text-[#0b1b42] uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
                Industry & Sector Category
              </span>
              <span className="text-[10px] text-[#d4af37] font-bold">8 Active Sectors</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {BUSINESS_INDUSTRIES.slice(0, 8).map((ind) => {
                const config = INDUSTRY_CONFIGS[ind.id] || {
                  icon: Briefcase,
                  color: "#8B5CF6",
                  bgUnselected: "bg-purple-50",
                  borderUnselected: "border-purple-200/80",
                  textUnselected: "text-purple-700",
                };
                const Icon = config.icon;
                const isSelected = selectedIndustry === ind.id;

                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => onChangeIndustry(ind.id)}
                    className={`flex items-center gap-2 p-2 rounded-xl border text-left transition-all relative overflow-hidden group ${
                      isSelected
                        ? "bg-[#0b1b42] border-[#d4af37] text-white shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
                        : "bg-slate-50 border-slate-200/80 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#d4af37] text-[#0b1b42] shadow-xs"
                          : `${config.bgUnselected} ${config.textUnselected} border ${config.borderUnselected}`
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold truncate leading-tight">{ind.name}</p>
                      <p
                        className={`text-[9px] truncate ${
                          isSelected ? "text-[#d4af37] font-semibold" : "text-slate-500"
                        }`}
                      >
                        {isSelected ? "Active Sector" : "Opportunities"}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0 mr-0.5 shadow-[0_0_6px_#d4af37]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-[#0b1b42] uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3 h-3 text-[#d4af37]" />
                Target Breakeven Period
              </span>
              <span className="text-[10px] text-slate-600 font-mono font-bold">{selectedPayback}</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {PAYBACK_PRESETS.map((p) => {
                const isSelected = selectedPayback === p;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => onChangePayback(p)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-all border ${
                      isSelected
                        ? "bg-[#0b1b42] text-[#d4af37] border-[#d4af37] shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-6 flex flex-col gap-3">
        <div className="bg-white border border-slate-200/90 rounded-xl p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#0b1b42] uppercase tracking-wider flex items-center gap-1.5">
              <span className="text-[#d4af37] font-bold">₹</span>
              Capital Investment Range
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0b1b42] border border-[#d4af37]/50 text-[#d4af37] text-[11px] font-bold shadow-xs">
              <span>{selectedInvestmentBudget}</span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-1.5">
            {BUSINESS_BUDGET_PRESETS.map((b) => {
              const isSelected = selectedInvestmentBudget === b.label;
              return (
                <button
                  key={b.label}
                  type="button"
                  onClick={() => onChangeInvestmentBudget(b.label)}
                  className={`py-2 px-1.5 rounded-xl border text-center transition-all ${
                    isSelected
                      ? "bg-[#0b1b42] border-[#d4af37] text-white shadow-[0_2px_10px_rgba(212,175,55,0.25)]"
                      : "bg-slate-50 border-slate-200/80 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <p
                    className={`text-[11px] font-bold leading-tight ${
                      isSelected ? "text-[#d4af37]" : "text-slate-800"
                    }`}
                  >
                    {b.label}
                  </p>
                  <p
                    className={`text-[9px] mt-0.5 ${
                      isSelected ? "text-gray-300 font-medium" : "text-slate-500"
                    }`}
                  >
                    {b.max <= 25 ? "Micro" : b.max <= 50 ? "Mid" : "Flagship"}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-xl p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#0b1b42] uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#d4af37]" />
              Business Operating Format
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Model</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {BUSINESS_MODELS.map((model) => {
              const isSelected = selectedModel === model.id;
              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => onChangeModel(model.id)}
                  className={`py-2 px-2 rounded-xl border text-center text-xs font-bold transition-all truncate ${
                    isSelected
                      ? "bg-[#0b1b42] text-[#d4af37] border-[#d4af37] shadow-xs"
                      : "bg-slate-50 border-slate-200/80 text-slate-700 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {model.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-xl p-3 shadow-xs flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#0b1b42] uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              Franchise Badges & Guarantees
            </span>
            <span className="text-[10px] text-[#d4af37] font-bold">Multi-select</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {BUSINESS_TAGS.map((tag) => {
              const isSelected = selectedBusinessTags.includes(tag.id);
              const Icon = tag.icon;
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => onToggleBusinessTag(tag.id)}
                  className={`flex items-center justify-between p-2 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-[#0b1b42] border-[#d4af37] text-white shadow-[0_2px_10px_rgba(212,175,55,0.2)]"
                      : "bg-slate-50 border-slate-200/80 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#d4af37] text-[#0b1b42]"
                          : `${tag.bg} ${tag.text} border ${tag.border}`
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold truncate">{tag.label}</span>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                      isSelected
                        ? "border-[#d4af37] bg-[#d4af37] text-[#0b1b42]"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
