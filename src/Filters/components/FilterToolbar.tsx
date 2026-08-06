import type { MutableRefObject } from "react";
import { ChevronDown, FilterX, ListFilter, SlidersHorizontal } from "lucide-react";
import { CATEGORY_ICON_BG } from "./data";
import type { FilterChip } from "./chipHelpers";
import { useDragToScroll } from "./useDragToScroll";

interface FilterToolbarProps {
  activeTab: "commercial" | "business";
  buyOrLease: "Buy" | "Lease";
  activeChips: FilterChip[];
  activeDropdown: string | null;
  hasActiveFilters: boolean;
  onToggleDropdown: (id: string) => void;
  onClearAll: () => void;
  onOpenAdvanced: () => void;
  chipRefs: MutableRefObject<Record<string, HTMLButtonElement | null>>;
}

export default function FilterToolbar({
  activeTab,
  buyOrLease,
  activeChips,
  activeDropdown,
  hasActiveFilters,
  onToggleDropdown,
  onClearAll,
  onOpenAdvanced,
  chipRefs,
}: FilterToolbarProps) {
  const { ref: scrollRef, isDragging, onPointerDown, onPointerMove, onPointerUp, onPointerCancel, onPointerLeave } =
    useDragToScroll<HTMLDivElement>();

  return (
    <div
      ref={scrollRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onPointerLeave={onPointerLeave}
      className={`w-full min-w-max flex flex-nowrap items-center gap-2 pb-2 overflow-x-auto overflow-y-hidden scrollbar-thin overscroll-x-contain scroll-smooth cursor-grab ${
        isDragging ? "cursor-grabbing select-none" : ""
      }`}
      style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
    >
      <button
        type="button"
        onClick={() => {
          if (hasActiveFilters) {
            onClearAll();
          }
        }}
        className={`group flex items-center justify-center w-9 h-9 rounded border shrink-0 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
          hasActiveFilters
            ? "bg-error-surface border-error-light hover:bg-error-light"
            : "bg-cremp-surface-alt/60 backdrop-blur-md border-cremp-border hover:bg-cremp-surface text-cremp-text-primary shadow-elevation-1"
        }`}
        title={hasActiveFilters ? "Clear all filters" : "Filters"}
        aria-label={hasActiveFilters ? "Clear all filters" : "Filters"}
      >
        {hasActiveFilters ? (
          <FilterX className="w-4 h-4 text-error" />
        ) : (
          <ListFilter className="w-4 h-4 text-cremp-text-secondary" />
        )}
      </button>

      {activeTab === "commercial" && (
        <>
          <div className="h-5 w-px bg-cremp-border shrink-0" />

          <button
            type="button"
            ref={(el) => {
              chipRefs.current["buyOrLease"] = el;
            }}
            onClick={() => onToggleDropdown("buyOrLease")}
            aria-haspopup="true"
            aria-expanded={activeDropdown === "buyOrLease"}
            className={`group flex items-center gap-2 px-3 h-9 rounded border shrink-0 whitespace-nowrap transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
              activeDropdown === "buyOrLease"
                ? "bg-[#0b1b42] border-cremp-accent/50 text-white shadow-glow-accent"
                : "bg-cremp-surface-alt/60 backdrop-blur-md border-cremp-border hover:bg-cremp-surface text-cremp-text-primary shadow-elevation-1"
            }`}
          >
            <span className="text-xs font-bold tracking-tight">{buyOrLease}</span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                activeDropdown === "buyOrLease" ? "rotate-180 text-cremp-accent" : "text-cremp-text-muted"
              }`}
            />
          </button>

          <div className="h-5 w-px bg-cremp-border shrink-0" />
        </>
      )}

      {activeChips.map((chip) => {
        const isOpen = activeDropdown === chip.id;
        const iconBg = CATEGORY_ICON_BG[chip.id] ?? "bg-cremp-primary";
        return (
          <button
            key={chip.id}
            type="button"
            ref={(el) => {
              chipRefs.current[chip.id] = el;
            }}
            onClick={() => onToggleDropdown(chip.id)}
            aria-haspopup="true"
            aria-expanded={isOpen}
            className={`group flex items-center gap-2 px-2.5 h-9 rounded border shrink-0 transition-all duration-200 active:scale-95 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
              chip.isActive || isOpen
                ? "bg-[#0b1b42] border-cremp-accent/50 text-white shadow-glow-accent"
                : "bg-cremp-surface-alt/60 backdrop-blur-md border-cremp-border hover:bg-cremp-surface text-cremp-text-primary shadow-elevation-1"
            }`}
          >
            <div
              className={`w-7 h-7 rounded flex items-center justify-center shrink-0 shadow-sm transition-all duration-200 group-hover:rotate-3 ${
                chip.isActive || isOpen
                  ? "bg-black/25 border border-cremp-accent/40 shadow-glow-accent"
                  : `${iconBg} shadow-sm`
              }`}
            >
              <chip.icon
                className={`w-3.5 h-3.5 ${
                  chip.isActive || isOpen ? "text-cremp-accent" : "text-white"
                }`}
                strokeWidth={chip.isActive || isOpen ? 2.5 : 2}
              />
            </div>
            <span className="text-xs font-bold tracking-tight">{chip.label}</span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              } ${
                chip.isActive || isOpen ? "text-cremp-accent" : "text-cremp-text-muted group-hover:text-cremp-text-secondary"
              }`}
            />
          </button>
        );
      })}

      <button
        type="button"
        onClick={onOpenAdvanced}
        className="group flex items-center gap-2 px-3 h-9 rounded bg-cremp-surface-alt/60 backdrop-blur-md border border-cremp-border hover:bg-cremp-surface text-cremp-text-primary transition-all duration-200 active:scale-95 shadow-elevation-1 shrink-0 whitespace-nowrap sm:ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50"
      >
        <div className="w-7 h-7 rounded bg-cremp-surface border border-transparent group-hover:border-cremp-border shadow-sm flex items-center justify-center text-cremp-text-secondary transition-all duration-200 group-hover:rotate-3">
          <SlidersHorizontal className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-bold tracking-tight">Advanced Filters</span>
      </button>
    </div>
  );
}
