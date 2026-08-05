import { motion, AnimatePresence, useDragControls } from "framer-motion";
import {
  X,
  Building2,
  Store,
  MapPin,
  Building,
  Users,
  Armchair,
  Layers,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";

export interface FilterState {
  propertyType: string;
  budget: string;
  size: string;
  fitOut: string;
  status: string[];
  commercialTags: string[];
  dealPref: string;
  industry: string;
  invBudget: string;
  model: string;
  payback: string;
  businessTags: string[];
}

export const DEFAULT_FILTERS: FilterState = {
  propertyType: "office-space",
  budget: "Any",
  size: "Any",
  fitOut: "Any",
  status: [],
  commercialTags: [],
  dealPref: "Any",
  industry: "food-beverage",
  invBudget: "Any",
  model: "Any",
  payback: "Any ROI",
  businessTags: [],
};

interface AdvancedFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "commercial" | "business";
  filters: FilterState;
  onApply: (filters: FilterState) => void;
  onReset: () => void;
}

export const PROPERTY_TYPES = [
  { id: "office-space", label: "Office Space", icon: Building2 },
  { id: "retail-space", label: "Retail Space", icon: Store },
  { id: "commercial-plot", label: "Commercial Plot", icon: MapPin },
  { id: "full-building", label: "Full Building", icon: Building },
  { id: "co-working", label: "Co-Working", icon: Users },
];

export const BUDGET_OPTIONS = ["Any", "Under 50L", "50L - 1 Cr", "1 - 3 Cr", "3 - 5 Cr", "5 Cr+"];
export const SIZE_OPTIONS = ["Any", "Under 500 sq.ft", "500 - 1500 sq.ft", "1500 - 3000 sq.ft", "3000 - 5000 sq.ft", "5000+ sq.ft"];

export const FIT_OUT_OPTIONS = [
  { id: "Any", label: "Any", icon: Armchair },
  { id: "Bare Shell", label: "Bare Shell", icon: Building },
  { id: "Warm Shell", label: "Warm Shell", icon: Armchair },
  { id: "Semi-Fitted", label: "Semi-Fitted", icon: Layers },
  { id: "Fully Fitted", label: "Fully Fitted", icon: Briefcase },
];

export const COMMERCIAL_TAGS = [
  { id: "Pre-Leased", label: "Pre-Leased (High Yield)", icon: TrendingUp },
  { id: "Verified", label: "Verified Property", icon: ShieldCheck },
];

export const STATUS_OPTIONS = ["Ready to Move", "Under Construction", "RERA Registered"];
export const DEAL_PREF = ["Any", "Direct Owner", "Channel Partner"];

export const INDUSTRY_OPTIONS = [
  { id: "food-beverage", label: "Food & Beverage" },
  { id: "retail", label: "Retail" },
  { id: "education", label: "Education" },
  { id: "healthcare", label: "Healthcare" },
];

export const INV_BUDGET = ["Any", "Under ₹ 10 L", "₹ 10 L - ₹ 25 L", "₹ 25 L - ₹ 50 L", "₹ 50 L - ₹ 1 Cr", "₹ 1 Cr+"];
export const MODEL_OPTIONS = ["Any", "FOCO", "FOFO", "COCO", "Master Franchise"];
export const PAYBACK_OPTIONS = ["Any ROI", "< 1 Year", "1-2 Years", "2-3 Years", "3+ Years"];

export const BUSINESS_TAGS = [
  { id: "High ROI", label: "High ROI", icon: TrendingUp },
  { id: "Turnkey", label: "Turnkey Setup", icon: Zap },
  { id: "Premium", label: "Premium Brand", icon: ShieldCheck },
];

export default function AdvancedFilterModal({
  isOpen,
  onClose,
  activeTab,
  filters,
  onApply,
  onReset,
}: AdvancedFilterModalProps) {
  const [draft, setDraft] = useState<FilterState>(filters);
  const dragControls = useDragControls();

  useEffect(() => {
    if (isOpen) {
      setDraft(filters);
    }
  }, [isOpen, filters]);

  if (!isOpen) return null;

  const toggleArray = (key: keyof FilterState, val: string) => {
    setDraft((prev) => {
      const arr = prev[key] as string[];
      return {
        ...prev,
        [key]: arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val],
      };
    });
  };

  const handleApply = () => {
    onApply(draft);
    onClose();
  };

  const renderSectionHeader = (title: string) => (
    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 mt-8 first:mt-2">
      {title}
    </h3>
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#080e24]/40 backdrop-blur-[2px]"
          onClick={onClose}
        />

        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          drag="y"
          dragControls={dragControls}
          dragListener={false}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={(_e, info) => {
            if (info.offset.y > 100 && info.velocity.y > 20) {
              onClose();
            }
          }}
          className="relative w-full max-w-4xl bg-white rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.15)] z-10 flex flex-col overflow-hidden h-[85vh] sm:h-[90vh]"
        >
          <div
            className="flex flex-col items-center pt-3 pb-4 border-b border-slate-100 shrink-0 cursor-grab active:cursor-grabbing bg-white relative z-20"
            onPointerDown={(e) => dragControls.start(e)}
          >
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mb-4" />
            <div className="w-full flex items-center justify-between px-6">
              <h2 className="text-xl font-bold text-slate-800">Advanced Filters</h2>
              <button
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {activeTab === "commercial" ? (
              <>
                <div id="section-property">{renderSectionHeader("Property Type")}</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PROPERTY_TYPES.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setDraft({ ...draft, propertyType: opt.id })}
                      className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                        draft.propertyType === opt.id
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-100 bg-white hover:border-slate-300 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <opt.icon className={`w-5 h-5 ${draft.propertyType === opt.id ? "text-[#d4af37]" : "text-slate-400"}`} />
                      <span className="text-xs font-semibold">{opt.label}</span>
                    </button>
                  ))}
                </div>

                <div id="section-budget">{renderSectionHeader("Budget")}</div>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setDraft({ ...draft, budget: opt })}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                        draft.budget === opt
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div id="section-size">{renderSectionHeader("Size (Sq.Ft)")}</div>
                <div className="flex flex-wrap gap-2">
                  {SIZE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setDraft({ ...draft, size: opt })}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                        draft.size === opt
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div id="section-fitout">{renderSectionHeader("Fit-Out Status")}</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {FIT_OUT_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setDraft({ ...draft, fitOut: opt.id })}
                      className={`flex items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                        draft.fitOut === opt.id
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-100 bg-white hover:border-slate-300 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <opt.icon className={`w-4 h-4 ${draft.fitOut === opt.id ? "text-[#d4af37]" : "text-slate-400"}`} />
                      <span className="text-xs font-semibold">{opt.label}</span>
                    </button>
                  ))}
                </div>

                <div id="section-status">{renderSectionHeader("Project Status")}</div>
                <div className="flex flex-wrap gap-2">
                  {STATUS_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => toggleArray("status", opt)}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                        draft.status.includes(opt)
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div id="section-tags">{renderSectionHeader("Property Tags")}</div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {COMMERCIAL_TAGS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => toggleArray("commercialTags", opt.id)}
                      className={`flex items-center justify-between sm:justify-start flex-1 gap-3 p-4 rounded-2xl border-2 transition-all ${
                        draft.commercialTags.includes(opt.id)
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-100 bg-white hover:border-slate-300 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <opt.icon className={`w-5 h-5 ${draft.commercialTags.includes(opt.id) ? "text-[#d4af37]" : "text-slate-400"}`} />
                        <span className="text-sm font-semibold">{opt.label}</span>
                      </div>
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                        draft.commercialTags.includes(opt.id) ? "bg-[#d4af37] border-[#d4af37]" : "border-slate-300 bg-white"
                      }`}>
                        {draft.commercialTags.includes(opt.id) && <div className="w-2 h-2 rounded-sm bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>

                <div id="section-deal">{renderSectionHeader("Deal Preference")}</div>
                <div className="flex flex-wrap gap-2">
                  {DEAL_PREF.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setDraft({ ...draft, dealPref: opt })}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                        draft.dealPref === opt
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div id="section-industry">{renderSectionHeader("Industry")}</div>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRY_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setDraft({ ...draft, industry: opt.id })}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                        draft.industry === opt.id
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <div id="section-inv-budget">{renderSectionHeader("Investment Range")}</div>
                <div className="flex flex-wrap gap-2">
                  {INV_BUDGET.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setDraft({ ...draft, invBudget: opt })}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                        draft.invBudget === opt
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div id="section-model">{renderSectionHeader("Business Model")}</div>
                <div className="flex flex-wrap gap-2">
                  {MODEL_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setDraft({ ...draft, model: opt })}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                        draft.model === opt
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div id="section-payback">{renderSectionHeader("Payback Period")}</div>
                <div className="flex flex-wrap gap-2">
                  {PAYBACK_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setDraft({ ...draft, payback: opt })}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                        draft.payback === opt
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div id="section-biz-tags">{renderSectionHeader("Business Tags")}</div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {BUSINESS_TAGS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => toggleArray("businessTags", opt.id)}
                      className={`flex items-center justify-between sm:justify-start flex-1 gap-3 p-4 rounded-2xl border-2 transition-all ${
                        draft.businessTags.includes(opt.id)
                          ? "border-[#0b1b42] bg-[#0b1b42] text-white"
                          : "border-slate-100 bg-white hover:border-slate-300 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <opt.icon className={`w-5 h-5 ${draft.businessTags.includes(opt.id) ? "text-[#d4af37]" : "text-slate-400"}`} />
                        <span className="text-sm font-semibold">{opt.label}</span>
                      </div>
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                        draft.businessTags.includes(opt.id) ? "bg-[#d4af37] border-[#d4af37]" : "border-slate-300 bg-white"
                      }`}>
                        {draft.businessTags.includes(opt.id) && <div className="w-2 h-2 rounded-sm bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 p-4 sm:p-6 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] z-20 flex gap-4">
            <button
              type="button"
              onClick={onReset}
              className="flex-1 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="flex-[2] py-3.5 rounded-xl bg-[#0b1b42] text-white font-bold shadow-lg shadow-[#0b1b42]/20 hover:bg-[#06122d] transition-colors"
            >
              Show Results
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
