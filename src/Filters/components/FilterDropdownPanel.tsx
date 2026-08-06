import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import {
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
import type { FilterState, SingleSelectFilterKey, ArrayFilterKey } from "./data";
import { singleSelectBtn, multiSelectBtn, checkBox } from "./filterStyles";

interface FilterDropdownPanelProps {
  activeDropdown: string | null;
  dropdownLeft: number | null;
  filters: FilterState;
  buyOrLease: "Buy" | "Lease";
  onSelectBuyOrLease: (opt: "Buy" | "Lease") => void;
  onToggleSingleValue: (key: SingleSelectFilterKey, value: string, defaultValue: string) => void;
  onToggleArrayItem: (key: ArrayFilterKey, value: string) => void;
  onClose: () => void;
}

export default function FilterDropdownPanel({
  activeDropdown,
  dropdownLeft,
  filters,
  buyOrLease,
  onSelectBuyOrLease,
  onToggleSingleValue,
  onToggleArrayItem,
  onClose,
}: FilterDropdownPanelProps) {
  return (
    <AnimatePresence>
      {activeDropdown && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 4 }}
            transition={{ duration: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
            role="menu"
            style={dropdownLeft !== null ? { left: dropdownLeft } : undefined}
            className="absolute left-0 top-full mt-2 w-[calc(100vw-32px)] sm:w-max sm:max-w-xs max-w-[calc(100vw-32px)] rounded shadow-elevation-4 border border-white/30 dark:border-white/10 bg-cremp-surface/70 backdrop-blur-2xl backdrop-saturate-150 z-[99999] py-4 px-3 pointer-events-auto cursor-default text-left max-h-[75vh] overflow-y-auto scrollbar-thin"
          >
            {activeDropdown === "buyOrLease" && (
              <div className="flex flex-col gap-1.5">
                {(["Buy", "Lease"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onSelectBuyOrLease(opt)}
                    className={singleSelectBtn(buyOrLease === opt)}
                  >
                    <span>{opt}</span>
                    {buyOrLease === opt && <Check className="w-4 h-4 text-cremp-accent" />}
                  </button>
                ))}
              </div>
            )}

            {activeDropdown === "property" && (
              <div className="grid grid-cols-2 gap-2">
                {PROPERTY_TYPES.map((opt) => {
                  const sel = filters.propertyType === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onToggleSingleValue("propertyType", opt.id, "office-space")}
                      className={`flex items-center gap-2.5 p-3 rounded border transition-all duration-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
                        sel
                          ? "bg-[#0b1b42] border-cremp-accent/50 text-white shadow-glow-accent"
                          : "bg-cremp-surface-alt/70 border-cremp-border hover:border-cremp-text-muted/40 text-cremp-text-primary hover:bg-cremp-surface"
                      }`}
                    >
                      <div className={`w-7 h-7 rounded flex items-center justify-center shrink-0 ${
                        sel ? "bg-black/25 border border-cremp-accent/40" : "bg-[#8B5CF6]"
                      }`}>
                        <opt.icon className={`w-3.5 h-3.5 ${sel ? "text-cremp-accent" : "text-white"}`} />
                      </div>
                      <span className="text-xs font-bold">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {activeDropdown === "budget" && (
              <div className="flex flex-col gap-1.5">
                {BUDGET_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onToggleSingleValue("budget", opt, "Any")}
                    className={singleSelectBtn(filters.budget === opt)}
                  >
                    <span>{opt}</span>
                    {filters.budget === opt && <Check className="w-4 h-4 text-cremp-accent" />}
                  </button>
                ))}
              </div>
            )}

            {activeDropdown === "size" && (
              <div className="flex flex-col gap-1.5">
                {SIZE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onToggleSingleValue("size", opt, "Any")}
                    className={singleSelectBtn(filters.size === opt)}
                  >
                    <span>{opt}</span>
                    {filters.size === opt && <Check className="w-4 h-4 text-cremp-accent" />}
                  </button>
                ))}
              </div>
            )}

            {activeDropdown === "fitout" && (
              <div className="flex flex-col gap-1.5">
                {FIT_OUT_OPTIONS.map((opt) => {
                  const sel = filters.fitOut === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onToggleSingleValue("fitOut", opt.id, "Any")}
                      className={singleSelectBtn(sel)}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-6 h-6 rounded flex items-center justify-center ${sel ? "bg-black/25 border border-cremp-accent/40" : "bg-[#14B8A6]"}`}>
                          <opt.icon className={`w-3 h-3 ${sel ? "text-cremp-accent" : "text-white"}`} />
                        </div>
                        <span>{opt.label}</span>
                      </div>
                      {sel && <Check className="w-4 h-4 text-cremp-accent" />}
                    </button>
                  );
                })}
              </div>
            )}

            {activeDropdown === "status" && (
              <div className="flex flex-col gap-2">
                {STATUS_OPTIONS.map((opt) => {
                  const isSelected = filters.status.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => onToggleArrayItem("status", opt)}
                      className={multiSelectBtn(isSelected)}
                    >
                      <span>{opt}</span>
                      <div className={checkBox(isSelected)}>
                        {isSelected && <Check className="w-3 h-3 text-[#0b1b42] stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {activeDropdown === "tags" && (
              <div className="flex flex-col gap-2">
                {COMMERCIAL_TAGS.map((opt) => {
                  const isSelected = filters.commercialTags.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onToggleArrayItem("commercialTags", opt.id)}
                      className={multiSelectBtn(isSelected)}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-6 h-6 rounded flex items-center justify-center ${isSelected ? "bg-black/25 border border-cremp-accent/40" : "bg-[#D946EF]"}`}>
                          <opt.icon className={`w-3 h-3 ${isSelected ? "text-cremp-accent" : "text-white"}`} />
                        </div>
                        <span>{opt.label}</span>
                      </div>
                      <div className={checkBox(isSelected)}>
                        {isSelected && <Check className="w-3 h-3 text-[#0b1b42] stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {activeDropdown === "deal" && (
              <div className="flex flex-col gap-1.5">
                {DEAL_PREF.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onToggleSingleValue("dealPref", opt, "Any")}
                    className={singleSelectBtn(filters.dealPref === opt)}
                  >
                    <span>{opt}</span>
                    {filters.dealPref === opt && <Check className="w-4 h-4 text-cremp-accent" />}
                  </button>
                ))}
              </div>
            )}

            {activeDropdown === "industry" && (
              <div className="flex flex-col gap-1.5">
                {INDUSTRY_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onToggleSingleValue("industry", opt.id, "food-beverage")}
                    className={singleSelectBtn(filters.industry === opt.id)}
                  >
                    <span>{opt.label}</span>
                    {filters.industry === opt.id && <Check className="w-4 h-4 text-cremp-accent" />}
                  </button>
                ))}
              </div>
            )}

            {activeDropdown === "inv-budget" && (
              <div className="flex flex-col gap-1.5">
                {INV_BUDGET.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onToggleSingleValue("invBudget", opt, "Any")}
                    className={singleSelectBtn(filters.invBudget === opt)}
                  >
                    <span>{opt}</span>
                    {filters.invBudget === opt && <Check className="w-4 h-4 text-cremp-accent" />}
                  </button>
                ))}
              </div>
            )}

            {activeDropdown === "model" && (
              <div className="flex flex-col gap-1.5">
                {MODEL_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onToggleSingleValue("model", opt, "Any")}
                    className={singleSelectBtn(filters.model === opt)}
                  >
                    <span>{opt}</span>
                    {filters.model === opt && <Check className="w-4 h-4 text-cremp-accent" />}
                  </button>
                ))}
              </div>
            )}

            {activeDropdown === "payback" && (
              <div className="flex flex-col gap-1.5">
                {PAYBACK_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onToggleSingleValue("payback", opt, "Any ROI")}
                    className={singleSelectBtn(filters.payback === opt)}
                  >
                    <span>{opt}</span>
                    {filters.payback === opt && <Check className="w-4 h-4 text-cremp-accent" />}
                  </button>
                ))}
              </div>
            )}

            {activeDropdown === "biz-tags" && (
              <div className="flex flex-col gap-2">
                {BUSINESS_TAGS.map((opt) => {
                  const isSelected = filters.businessTags.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onToggleArrayItem("businessTags", opt.id)}
                      className={multiSelectBtn(isSelected)}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-6 h-6 rounded flex items-center justify-center ${isSelected ? "bg-black/25 border border-cremp-accent/40" : "bg-[#D946EF]"}`}>
                          <opt.icon className={`w-3 h-3 ${isSelected ? "text-cremp-accent" : "text-white"}`} />
                        </div>
                        <span>{opt.label}</span>
                      </div>
                      <div className={checkBox(isSelected)}>
                        {isSelected && <Check className="w-3 h-3 text-[#0b1b42] stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
