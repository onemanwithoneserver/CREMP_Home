import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DEFAULT_FILTERS,
  PROPERTY_TYPES,
  BUDGET_OPTIONS,
  SIZE_OPTIONS,
  FIT_OUT_OPTIONS,
  COMMERCIAL_TAGS,
  STATUS_OPTIONS,
  DEAL_PREF,
  INDUSTRY_OPTIONS,
  INV_BUDGET,
  MODEL_OPTIONS,
  PAYBACK_OPTIONS,
  BUSINESS_TAGS,
} from "./data";
import type { FilterState } from "./data";

export type { FilterState };
export {
  DEFAULT_FILTERS,
  PROPERTY_TYPES,
  BUDGET_OPTIONS,
  SIZE_OPTIONS,
  FIT_OUT_OPTIONS,
  COMMERCIAL_TAGS,
  STATUS_OPTIONS,
  DEAL_PREF,
  INDUSTRY_OPTIONS,
  INV_BUDGET,
  MODEL_OPTIONS,
  PAYBACK_OPTIONS,
  BUSINESS_TAGS,
};

interface AdvancedFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "commercial" | "business";
  filters: FilterState;
  onApply: (filters: FilterState) => void;
  onReset: () => void;
}

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

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

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
    <h3 className="text-xs font-semibold text-cremp-text-muted uppercase tracking-widest mb-3 mt-8 first:mt-0">
      {title}
    </h3>
  );

  const getPillClasses = (isSelected: boolean) =>
    `px-4 py-2 rounded border text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
      isSelected
        ? "border-cremp-accent/50 bg-[#0b1b42] text-white shadow-glow-accent"
        : "border-cremp-border bg-cremp-surface-alt/60 hover:border-cremp-text-muted/50 hover:bg-cremp-surface text-cremp-text-secondary"
    }`;

  const getCardClasses = (isSelected: boolean) =>
    `p-3 rounded border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
      isSelected
        ? "border-cremp-accent/50 bg-[#0b1b42] text-white shadow-glow-accent"
        : "border-cremp-border bg-cremp-surface-alt/60 hover:border-cremp-text-muted/50 hover:bg-cremp-surface text-cremp-text-secondary"
    }`;

  const getIconClasses = (isSelected: boolean) =>
    isSelected ? "text-cremp-accent" : "text-cremp-text-muted";

  const getCheckboxClasses = (isSelected: boolean) =>
    `w-5 h-5 rounded-sm border flex items-center justify-center shrink-0 transition-colors duration-200 ${
      isSelected ? "bg-cremp-accent border-cremp-accent" : "border-cremp-border bg-cremp-surface"
    }`;

  const getCheckboxInnerClasses = (isSelected: boolean) =>
    isSelected ? "w-2 h-2 rounded-sm bg-[#0b1b42]" : "";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-end justify-center select-none" role="dialog" aria-modal="true" aria-label="Advanced filters">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
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
            className="relative w-full max-w-4xl bg-cremp-surface/95 backdrop-blur-2xl rounded-t sm:rounded-t-lg shadow-elevation-4 z-10 flex flex-col overflow-hidden h-[85vh] sm:h-[90vh] border-t border-x-0 sm:border-x border-cremp-border"
          >
            <div
              className="flex flex-col items-center pt-3 pb-4 border-b border-cremp-border shrink-0 cursor-grab active:cursor-grabbing bg-cremp-surface/70 backdrop-blur-md relative z-20"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <div className="w-10 h-1 bg-cremp-border rounded-full mb-4" />
              <div className="w-full flex items-center justify-between px-5 sm:px-6">
                <h2 className="text-lg sm:text-xl font-semibold text-cremp-text-primary tracking-tight">Advanced Filters</h2>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close advanced filters"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-cremp-text-muted hover:text-error hover:bg-error-surface transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 sm:px-6 pb-24 scrollbar-hide">
            {activeTab === "commercial" ? (
              <>
                <div id="section-property">{renderSectionHeader("Property Type")}</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PROPERTY_TYPES.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setDraft({ ...draft, propertyType: opt.id })}
                      className={`flex flex-col items-center gap-2 ${getCardClasses(draft.propertyType === opt.id)}`}
                    >
                      <opt.icon className={`w-5 h-5 ${getIconClasses(draft.propertyType === opt.id)}`} />
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
                      className={getPillClasses(draft.budget === opt)}
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
                      className={getPillClasses(draft.size === opt)}
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
                      className={`flex items-center gap-2 ${getCardClasses(draft.fitOut === opt.id)}`}
                    >
                      <opt.icon className={`w-4 h-4 ${getIconClasses(draft.fitOut === opt.id)}`} />
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
                      className={getPillClasses(draft.status.includes(opt))}
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
                      className={`flex items-center justify-between sm:justify-start flex-1 gap-3 ${getCardClasses(draft.commercialTags.includes(opt.id))}`}
                    >
                      <div className="flex items-center gap-3">
                        <opt.icon className={`w-5 h-5 ${getIconClasses(draft.commercialTags.includes(opt.id))}`} />
                        <span className="text-sm font-semibold">{opt.label}</span>
                      </div>
                      <div className={getCheckboxClasses(draft.commercialTags.includes(opt.id))}>
                        {draft.commercialTags.includes(opt.id) && <div className={getCheckboxInnerClasses(true)} />}
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
                      className={getPillClasses(draft.dealPref === opt)}
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
                      className={getPillClasses(draft.industry === opt.id)}
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
                      className={getPillClasses(draft.invBudget === opt)}
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
                      className={getPillClasses(draft.model === opt)}
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
                      className={getPillClasses(draft.payback === opt)}
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
                      className={`flex items-center justify-between sm:justify-start flex-1 gap-3 ${getCardClasses(draft.businessTags.includes(opt.id))}`}
                    >
                      <div className="flex items-center gap-3">
                        <opt.icon className={`w-5 h-5 ${getIconClasses(draft.businessTags.includes(opt.id))}`} />
                        <span className="text-sm font-semibold">{opt.label}</span>
                      </div>
                      <div className={getCheckboxClasses(draft.businessTags.includes(opt.id))}>
                        {draft.businessTags.includes(opt.id) && <div className={getCheckboxInnerClasses(true)} />}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-cremp-surface/95 backdrop-blur-xl border-t border-cremp-border p-4 sm:p-5 shadow-elevation-3 z-20 flex gap-3">
              <button
                type="button"
                onClick={onReset}
                className="flex-1 py-3 rounded border border-cremp-border text-cremp-text-secondary font-semibold hover:bg-cremp-surface-alt hover:border-cremp-text-muted/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleApply}
                className="flex-[2] py-3 rounded bg-[#0b1b42] text-white font-semibold shadow-elevation-2 hover:shadow-glow-accent border border-cremp-accent/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50"
              >
                Show Results
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
