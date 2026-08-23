import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
interface FilterChipOption {
  id: string;
  label: string;
}
interface FilterChipProps {
  label: string;
  value: string;
  options: FilterChipOption[];
  onChange: (value: string) => void;
  isActive?: boolean;
}
function FilterChip({
  label,
  value,
  options,
  onChange,
  isActive,
}: FilterChipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const chipRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (chipRef.current && !chipRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const selectedOption = options.find((o) => o.id === value);
  const displayLabel = selectedOption ? selectedOption.label : label;
  const hasValue = value && value !== "Any" && value !== "";
  return (
    <div
      className={clsx("relative shrink-0", isOpen ? "z-[200]" : "z-10")}
      ref={chipRef}
    >
      <motion.button
        type="button"
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2 px-4 py-2 text-[12.5px] font-bold border transition-all duration-300 cursor-pointer whitespace-normal select-none",
          "rounded-full",
          isOpen
            ? "bg-[#0b1b42] text-white border-[#d4af37] shadow-[0_4px_20px_rgba(212,175,55,0.3),0_0_0_2px_rgba(212,175,55,0.2)]"
            : hasValue || isActive
              ? "bg-[#0b1b42] text-white border-[#0b1b42] shadow-[0_4px_16px_rgba(11,27,66,0.35)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:border-[#d4af37]/60"
              : "bg-white/60 dark:bg-white/10 text-gray-600 dark:text-gray-300 border-gray-200/80 dark:border-white/15 hover:border-[#d4af37]/50 hover:bg-white/80 dark:hover:bg-white/15 shadow-sm backdrop-blur-md",
        )}
      >
        <span
          className={clsx(hasValue || isActive || isOpen ? "text-white" : "")}
        >
          {displayLabel}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <ChevronDown
            className={clsx(
              "w-3.5 h-3.5 transition-colors duration-200",
              isOpen || hasValue || isActive
                ? "text-[#d4af37]"
                : "text-gray-400",
            )}
          />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 420 }}
            className="absolute left-0 top-[calc(100%+8px)] w-full sm:min-w-[180px] z-[9999] bg-white/80 backdrop-blur-2xl rounded-xl border border-gray-200/60 shadow-[0_16px_48px_rgba(11,27,66,0.18),0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden dark:bg-[#0e172f]/90 dark:border-white/15 dark:shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
          >
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70" />
            <div className="py-1.5 max-h-[240px] overflow-y-auto scrollbar-hide">
              {options.map((opt, index) => {
                const isSelected = value === opt.id;
                return (
                  <motion.button
                    key={opt.id}
                    type="button"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      x: 4,
                      backgroundColor: "rgba(212,175,55,0.06)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onChange(opt.id);
                      setIsOpen(false);
                    }}
                    className={clsx(
                      "w-full text-left px-4 py-2.5 text-[12.5px] transition-all duration-150 flex items-center justify-between cursor-pointer group",
                      isSelected
                        ? "bg-[#0b1b42]/[0.06] dark:bg-white/10 text-[#0a1128] dark:text-white font-extrabold border-l-[3px] border-[#d4af37]"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#0b1b42] dark:hover:text-white font-medium border-l-[3px] border-transparent",
                    )}
                  >
                    <span>{opt.label}</span>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 22,
                        }}
                      >
                        <Check
                          className="w-3.5 h-3.5 text-[#d4af37]"
                          strokeWidth={2.8}
                        />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
import type { FilterState } from "./data";
import { PROPERTY_TYPES, BUDGET_OPTIONS } from "./data";
import { BOP_INDUSTRIES } from "./data";
interface BasicFiltersProps {
  activeTab: "commercial" | "business";
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}
export default function BasicFilters({
  activeTab,
  filters,
  onFilterChange,
}: BasicFiltersProps) {
  const handleUpdate = (key: keyof FilterState, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };
  const commercialFilters = [
    {
      key: "transactionType" as keyof FilterState,
      label: "Transaction",
      value: filters.transactionType,
      options: [
        { id: "Buy", label: "Buy" },
        { id: "Lease", label: "Lease" },
      ],
    },
    {
      key: "propertyType" as keyof FilterState,
      label: "Property Type",
      value: filters.propertyType,
      options: PROPERTY_TYPES.map((pt) => ({ id: pt.id, label: pt.label })),
    },
    {
      key: "budgetMin" as keyof FilterState,
      label: "Budget",
      value: filters.budgetMin,
      options: BUDGET_OPTIONS.map((b) => ({ id: b, label: b })),
    },
  ];
  const businessFilters = [
    {
      key: "industry" as keyof FilterState,
      label: "Industry",
      value: filters.industry,
      options: BOP_INDUSTRIES.map((ind) => ({
        id: ind.id,
        label: ind.label,
      })),
    },
  ];
  const activeFilters =
    activeTab === "commercial" ? commercialFilters : businessFilters;
  return (
    <div className="w-full relative z-40">
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2 sm:gap-2.5 pb-1">
        <div className="hidden sm:flex shrink-0 items-center gap-2 pr-3 border-r border-gray-200/50 dark:border-white/10 mr-1">
          <div className="w-6 h-6 rounded-md bg-[#0b1b42]/[0.08] dark:bg-white/[0.06] flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-[#0b1b42] dark:text-[#d4af37]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 whitespace-nowrap">
            Filters
          </span>
        </div>
        <div className="flex sm:hidden items-center gap-1.5 px-1 pb-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Basic Filters
          </span>
        </div>
        {activeFilters.map((filter) => (
          <FilterChip
            key={filter.key}
            label={filter.label}
            value={filter.value}
            options={filter.options}
            onChange={(val) => handleUpdate(filter.key, val)}
          />
        ))}
      </div>
    </div>
  );
}
