import { useState } from "react";
import {
  SlidersHorizontal,
  Check,
  RotateCcw,
  Plus,
  Minus,
  Filter,
  Layers,
  Tag,
  Handshake,
  Users,
  Construction,
  Briefcase,
  Maximize,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import type { FilterState } from "./data";
import {
  DEFAULT_FILTERS,
  FIT_OUT_OPTIONS,
  COMMERCIAL_TAGS,
  STATUS_OPTIONS,
  DEAL_PREF,
  OCCUPANCY_OPTIONS,
  CONSTRUCTION_STAGE_OPTIONS,
  BUSINESS_OPTIONS,
  SIZE_MIN_OPTIONS,
  SIZE_MAX_OPTIONS,
  SIZE_UNITS,
} from "./data";
import { CustomSelect } from "./CustomSelect";

interface AdvancedFiltersProps {
  activeTab: "commercial" | "business";
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

interface CategoryDef {
  key: keyof FilterState;
  title: string;
  icon: typeof Filter;
  iconBg: string;
  options: { id: string; label: string }[];
  isMulti?: boolean;
}

export default function AdvancedFilters({
  activeTab,
  filters,
  onFilterChange,
}: AdvancedFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const mapStringsToOptions = (arr: string[]) =>
    arr.map((item) => ({ id: item, label: item }));

  const handleUpdate = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleOptionToggle = (cat: CategoryDef, optionId: string) => {
    const newFilters = { ...filters };
    if (cat.isMulti) {
      const currentList = (newFilters[cat.key] as string[]) || [];
      if (currentList.includes(optionId)) {
        newFilters[cat.key] = currentList.filter(
          (id) => id !== optionId
        ) as any;
      } else {
        newFilters[cat.key] = [...currentList, optionId] as any;
      }
    } else {
      const isSelected = newFilters[cat.key] === optionId;
      const defaultVal = DEFAULT_FILTERS[cat.key];
      newFilters[cat.key] = isSelected ? defaultVal : (optionId as any);
    }
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    onFilterChange({
      ...filters,
      ...(activeTab === "commercial"
        ? {
            sizeMin: DEFAULT_FILTERS.sizeMin,
            sizeMax: DEFAULT_FILTERS.sizeMax,
            sizeUnit: DEFAULT_FILTERS.sizeUnit,
            fitOut: DEFAULT_FILTERS.fitOut,
            status: DEFAULT_FILTERS.status,
            dealPref: DEFAULT_FILTERS.dealPref,
            commercialTags: DEFAULT_FILTERS.commercialTags,
            occupancy: DEFAULT_FILTERS.occupancy,
            constructionStage: DEFAULT_FILTERS.constructionStage,
          }
        : {
            businessOption: DEFAULT_FILTERS.businessOption,
          }),
    });
  };

  const commercialCategories: CategoryDef[] = [
    {
      key: "fitOut",
      title: "Fit Out",
      icon: Filter,
      iconBg: "bg-[#7c3aed] text-white",
      options: FIT_OUT_OPTIONS.filter((o) => o.id !== "Any").map((o) => ({
        id: o.id,
        label: o.label,
      })),
    },
    {
      key: "occupancy",
      title: "Occupancy",
      icon: Users,
      iconBg: "bg-[#059669] text-white",
      options: mapStringsToOptions(OCCUPANCY_OPTIONS),
    },
    {
      key: "constructionStage",
      title: "Construction Stage",
      icon: Construction,
      iconBg: "bg-[#d97706] text-white",
      options: mapStringsToOptions(CONSTRUCTION_STAGE_OPTIONS),
    },
    {
      key: "status",
      title: "Status",
      icon: Layers,
      iconBg: "bg-[#4f46e5] text-white",
      options: mapStringsToOptions(STATUS_OPTIONS),
      isMulti: true,
    },
    {
      key: "dealPref",
      title: "Deal Preference",
      icon: Handshake,
      iconBg: "bg-[#d946ef] text-white",
      options: mapStringsToOptions(DEAL_PREF.filter((o) => o !== "Any")),
    },
    {
      key: "commercialTags",
      title: "Commercial Tags",
      icon: Tag,
      iconBg: "bg-[#0d9488] text-white",
      options: COMMERCIAL_TAGS.map((t) => ({ id: t.id, label: t.label })),
      isMulti: true,
    },
  ];

  const businessCategories: CategoryDef[] = [
    {
      key: "businessOption",
      title: "Business Options",
      icon: Briefcase,
      iconBg: "bg-[#7c3aed] text-white",
      options: BUSINESS_OPTIONS.map((o) => ({ id: o.id, label: o.label })),
    },
  ];

  const activeCategories =
    activeTab === "commercial" ? commercialCategories : businessCategories;

  // Count active advanced filters
  const activeCount =
    activeTab === "commercial"
      ? [
          (filters.sizeMin && filters.sizeMin !== DEFAULT_FILTERS.sizeMin) ||
            (filters.sizeMax && filters.sizeMax !== DEFAULT_FILTERS.sizeMax),
          filters.fitOut &&
            filters.fitOut !== "Any" &&
            filters.fitOut !== DEFAULT_FILTERS.fitOut,
          filters.occupancy &&
            filters.occupancy !== "Any" &&
            filters.occupancy !== DEFAULT_FILTERS.occupancy,
          filters.constructionStage &&
            filters.constructionStage !== "Any" &&
            filters.constructionStage !== DEFAULT_FILTERS.constructionStage,
          filters.status && filters.status.length > 0,
          filters.dealPref &&
            filters.dealPref !== "Any" &&
            filters.dealPref !== DEFAULT_FILTERS.dealPref,
          filters.commercialTags && filters.commercialTags.length > 0,
        ].filter(Boolean).length
      : [
          filters.businessOption && filters.businessOption.length > 0,
        ].filter(Boolean).length;

  return (
    <div className="relative">
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-12 h-12 flex items-center justify-center rounded-lg border transition-all duration-300 cursor-pointer shadow-sm relative backdrop-blur-md",
          isOpen
            ? "bg-red-500/90 border-red-500 text-white shadow-[0_4px_16px_rgba(239,68,68,0.25)]"
            : "bg-white/30 dark:bg-black/20 border-white/40 dark:border-white/10 text-[#0b1b42] dark:text-white hover:bg-white/50 dark:hover:bg-black/40 hover:border-[#d4af37]/40 hover:text-[#d4af37] dark:hover:text-[#d4af37]"
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </motion.div>
          ) : (
            <motion.div
              key="filter"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <SlidersHorizontal className="w-5 h-5 stroke-[2.5]" />
            </motion.div>
          )}
        </AnimatePresence>

        {activeCount > 0 && !isOpen && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#d4af37] text-[#0b1b42] text-[10px] font-extrabold flex items-center justify-center shadow-sm"
          >
            {activeCount}
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 400 }}
            className="absolute top-[calc(100%+8px)] right-0 w-[320px] sm:w-[360px] bg-white/70 backdrop-blur-xl rounded-xl border border-white/40 shadow-[0_16px_48px_rgba(11,27,66,0.14)] overflow-hidden z-50 flex flex-col max-h-[calc(100vh-200px)] dark:bg-black/60 dark:border-white/10 dark:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center justify-between p-2 shrink-0">
              <div className="flex items-center gap-2">
                {activeCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#d4af37] text-[#0b1b42]">
                    {activeCount} active
                  </span>
                )}
              </div>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            <div className="overflow-y-auto p-3 space-y-2 scrollbar-hide">
              {activeTab === "commercial" && (
                <div
                  className={clsx(
                    " transition-all duration-200",
                    expandedKey === "size"
                      ? "bg-white/60 dark:bg-black/30 border-[#d4af37]/50 shadow-sm overflow-visible relative z-30 backdrop-blur-md"
                      : "bg-white/30 dark:bg-black/20 border-white/40 dark:border-white/10 overflow-hidden hover:border-[#d4af37]/40 hover:bg-white/50 dark:hover:bg-black/40 backdrop-blur-md"
                  )}
                >
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.99 }}
                    onClick={() =>
                      setExpandedKey(expandedKey === "size" ? null : "size")
                    }
                    className="w-full flex items-center justify-between px-3.5 py-2.5 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#0284c7] text-white shadow-xs shrink-0">
                        <Maximize
                          className="w-[14px] h-[14px]"
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-[13px] font-extrabold text-[#0a1128]">
                        Size
                      </span>
                    </div>
                    <div className="text-gray-400 transition-colors">
                      {expandedKey === "size" ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedKey === "size" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={clsx(
                          expandedKey === "size"
                            ? "overflow-visible"
                            : "overflow-hidden"
                        )}
                      >
                        <div className="px-3.5 pb-3 space-y-2.5">
                          <div className="flex gap-2">
                            <div className="flex-1 relative z-30">
                              <label className="block text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">
                                Min
                              </label>
                              <CustomSelect
                                options={SIZE_MIN_OPTIONS}
                                value={filters.sizeMin}
                                onChange={(val) =>
                                  handleUpdate("sizeMin", val)
                                }
                              />
                            </div>
                            <div className="flex-1 relative z-20">
                              <label className="block text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">
                                Max
                              </label>
                              <CustomSelect
                                options={SIZE_MAX_OPTIONS}
                                value={filters.sizeMax}
                                onChange={(val) =>
                                  handleUpdate("sizeMax", val)
                                }
                              />
                            </div>
                          </div>
                          <div className="relative z-10">
                            <label className="block text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">
                              Unit
                            </label>
                            <CustomSelect
                              options={SIZE_UNITS}
                              value={filters.sizeUnit}
                              onChange={(val) =>
                                handleUpdate("sizeUnit", val)
                              }
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Category filters */}
              {activeCategories.map((cat) => {
                const isExpanded = expandedKey === cat.key;
                const currentValue = filters[cat.key as keyof FilterState];
                const hasActive = cat.isMulti
                  ? ((currentValue as string[]) || []).length > 0
                  : currentValue !== "Any" &&
                    currentValue !== DEFAULT_FILTERS[cat.key];

                return (
                  <div
                    key={cat.key}
                    className={clsx(
                      " transition-all duration-200",
                      isExpanded
                        ? "bg-white/60 dark:bg-black/30 border-[#d4af37]/50 shadow-sm backdrop-blur-md"
                        : "bg-white/30 dark:bg-black/20 border-white/40 dark:border-white/10 hover:border-[#d4af37]/40 hover:bg-white/50 dark:hover:bg-black/40 backdrop-blur-md"
                    )}
                  >
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.99 }}
                      onClick={() =>
                        setExpandedKey(isExpanded ? null : cat.key)
                      }
                      className="w-full flex items-center justify-between px-3.5 py-2.5 cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={clsx(
                            "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-xs",
                            cat.iconBg
                          )}
                        >
                          <cat.icon
                            className="w-[14px] h-[14px]"
                            strokeWidth={2.5}
                          />
                        </div>
                        <span className="text-[13px] font-extrabold text-[#0a1128]">
                          {cat.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {hasActive && !isExpanded && (
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              ease: "easeInOut",
                            }}
                            className="w-2 h-2 rounded-full bg-[#d4af37]"
                          />
                        )}
                        <div className="text-gray-400 transition-colors">
                          {isExpanded ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </motion.button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-3.5 pb-3 space-y-1">
                            {cat.isMulti
                              ? cat.options.map((opt) => {
                                  const isSelected = (
                                    (currentValue as string[]) || []
                                  ).includes(opt.id);
                                  return (
                                    <motion.button
                                      key={opt.id}
                                      type="button"
                                      whileHover={{ x: 3 }}
                                      whileTap={{ scale: 0.98 }}
                                      onClick={() =>
                                        handleOptionToggle(cat, opt.id)
                                      }
                                      className={clsx(
                                        "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-all cursor-pointer group",
                                        isSelected
                                          ? "bg-[#0b1b42]/[0.06] dark:bg-white/10 text-[#0a1128] dark:text-white font-bold border-l-2 border-[#d4af37]"
                                          : "text-gray-700 dark:text-gray-300 hover:bg-amber-50/40 dark:hover:bg-white/5 hover:text-[#0b1b42] dark:hover:text-white font-medium"
                                      )}
                                    >
                                      <div
                                        className={clsx(
                                          "w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all",
                                          isSelected
                                            ? "bg-[#0b1b42] border-[#d4af37] text-[#d4af37]"
                                            : "bg-white border-gray-300 group-hover:border-[#d4af37]"
                                        )}
                                      >
                                        {isSelected && (
                                          <motion.div
                                            initial={{
                                              scale: 0,
                                              rotate: -45,
                                            }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{
                                              type: "spring",
                                              stiffness: 500,
                                              damping: 22,
                                            }}
                                          >
                                            <Check className="w-3 h-3 stroke-[3] text-[#d4af37]" />
                                          </motion.div>
                                        )}
                                      </div>
                                      <span className="text-[12.5px] leading-tight">
                                        {opt.label}
                                      </span>
                                    </motion.button>
                                  );
                                })
                              : /* Single-select with "Any" default */
                                [
                                  { id: "Any", label: "Any" },
                                  ...cat.options,
                                ].map((opt) => {
                                  const isSelected =
                                    opt.id === "Any"
                                      ? !currentValue ||
                                        currentValue === "Any" ||
                                        currentValue ===
                                          DEFAULT_FILTERS[cat.key]
                                      : currentValue === opt.id;

                                  return (
                                    <motion.button
                                      key={opt.id}
                                      type="button"
                                      whileHover={{ x: 3 }}
                                      whileTap={{ scale: 0.98 }}
                                      onClick={() => {
                                        if (opt.id === "Any") {
                                          onFilterChange({
                                            ...filters,
                                            [cat.key]:
                                              DEFAULT_FILTERS[cat.key],
                                          });
                                        } else {
                                          handleOptionToggle(cat, opt.id);
                                        }
                                      }}
                                      className={clsx(
                                        "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-all cursor-pointer group",
                                        isSelected
                                          ? "bg-[#0b1b42]/[0.06] dark:bg-white/10 text-[#0a1128] dark:text-white font-bold border-l-2 border-[#d4af37]"
                                          : "text-gray-700 dark:text-gray-300 hover:bg-amber-50/40 dark:hover:bg-white/5 hover:text-[#0b1b42] dark:hover:text-white font-medium"
                                      )}
                                    >
                                      <div
                                        className={clsx(
                                          "w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all",
                                          isSelected
                                            ? "border-[#d4af37] bg-white ring-2 ring-[#d4af37]/30"
                                            : "bg-white border-gray-300 group-hover:border-[#d4af37]"
                                        )}
                                      >
                                        {isSelected && (
                                          <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                              type: "spring",
                                              stiffness: 600,
                                              damping: 22,
                                            }}
                                            className="w-2 h-2 rounded-full bg-[#0b1b42]"
                                          />
                                        )}
                                      </div>
                                      <span className="text-[12.5px] leading-tight">
                                        {opt.label}
                                      </span>
                                    </motion.button>
                                  );
                                })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
