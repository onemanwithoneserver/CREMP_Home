import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MapPin,
  Building2,
  Store,
  Factory,
  Warehouse,
  Map,
  TrendingUp,
  Users,
  Layers,
  Handshake,
  Coins,
  Award,
  ArrowUpDown,
  Search,
  ChevronDown,
  X,
  RotateCcw,
  Check,
  SlidersHorizontal,
} from 'lucide-react';
import type { ActiveFilters, BrokerSortOption } from '../types/broker.types';
import { sortOptions } from '../data/filtersData';

const locationOptions = [
  { id: 'Hyderabad', label: 'HITEC City' },
  { id: 'Gachibowli', label: 'Gachibowli' },
  { id: 'Mumbai', label: 'BKC' },
  { id: 'Bengaluru', label: 'Whitefield' },
  { id: 'Delhi', label: 'Connaught Place' },
  { id: 'Pune', label: 'Hinjewadi' },
  { id: 'Chennai', label: 'OMR' },
  { id: 'Koramangala', label: 'Koramangala' },
];

const propertyExpertise = [
  { id: 'Office',     label: 'Office',     icon: 'office'     },
  { id: 'Retail',     label: 'Retail',     icon: 'retail'     },
  { id: 'Industrial', label: 'Industrial', icon: 'industrial' },
  { id: 'Warehouse',  label: 'Warehouse',  icon: 'warehouse'  },
  { id: 'Land',       label: 'Land',       icon: 'land'       },
  { id: 'Investment', label: 'Investment', icon: 'investment' },
  { id: 'Co-working', label: 'Co-working', icon: 'coworking'  },
  { id: 'Mixed Use',  label: 'Mixed Use',  icon: 'mixed'      },
];

const dealTypeOptions = [
  { id: 'Sale',        label: 'Sale'        },
  { id: 'Leasing',     label: 'Leasing'     },
  { id: 'Investment',  label: 'Investment'  },
  { id: 'Pre-leased',  label: 'Pre-leased'  },
];

const dealSizeOptions = [
  { id: 'under-50l',  label: 'Under ₹50L'   },
  { id: '50l-2cr',    label: '₹50L – ₹2Cr'  },
  { id: '2cr-10cr',   label: '₹2Cr – ₹10Cr' },
  { id: '10cr-50cr',  label: '₹10Cr – ₹50Cr'},
  { id: '50cr+',      label: '₹50Cr+'        },
];

const experienceOptions = [
  { id: '0-3',  label: '0–3 Years'  },
  { id: '3-5',  label: '3–5 Years'  },
  { id: '5-10', label: '5–10 Years' },
  { id: '10+',  label: '10+ Years'  },
];

const QUICK_LOC_COUNT = 4;

export interface BrokerFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  isDesktop: boolean;
  filters: ActiveFilters;
  sortOption: BrokerSortOption;
  activeFilterCount: number;
  onToggleSpecialty: (s: string) => void;
  onToggleLocation:  (l: string) => void;
  onToggleDealType:  (v: string) => void;
  onToggleDealSize:  (v: string) => void;
  onSetExperience:   (e: string | null) => void;
  onSetSort:         (s: BrokerSortOption) => void;
  onReset:           () => void;
}

function useAnimatedMount(isOpen: boolean, durationMs = 320) {
  const [mounted,  setMounted]  = useState(isOpen);
  const [visible,  setVisible]  = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), durationMs);
      return () => clearTimeout(t);
    }
  }, [isOpen, durationMs]);

  return { mounted, visible };
}

function ExpertiseIcon({ type, active }: { type: string; active: boolean }) {
  const iconClass = `w-5 h-5 transition-colors ${active ? 'text-[#d4af37]' : 'text-[#637089] dark:text-gray-400'}`;
  const map: Record<string, React.ReactNode> = {
    office: <Building2 className={iconClass} strokeWidth={1.8} />,
    retail: <Store className={iconClass} strokeWidth={1.8} />,
    industrial: <Factory className={iconClass} strokeWidth={1.8} />,
    warehouse: <Warehouse className={iconClass} strokeWidth={1.8} />,
    land: <Map className={iconClass} strokeWidth={1.8} />,
    investment: <TrendingUp className={iconClass} strokeWidth={1.8} />,
    coworking: <Users className={iconClass} strokeWidth={1.8} />,
    mixed: <Layers className={iconClass} strokeWidth={1.8} />,
  };
  return <>{map[type] ?? <Building2 className={iconClass} strokeWidth={1.8} />}</>;
}

const sectionIcons: Record<string, React.ReactNode> = {
  location: <MapPin size={16} strokeWidth={1.9} />,
  expertise: <Building2 size={16} strokeWidth={1.9} />,
  dealType: <Handshake size={16} strokeWidth={1.9} />,
  dealSize: <Coins size={16} strokeWidth={1.9} />,
  experience: <Award size={16} strokeWidth={1.9} />,
  sort: <ArrowUpDown size={16} strokeWidth={1.9} />,
};

function AccordionSection({
  id, label, isExpanded, onToggle, children,
}: {
  id: string; label: string; isExpanded: boolean;
  onToggle: () => void; children: React.ReactNode;
}) {
  return (
    <div className="border-b border-black/[0.05] dark:border-white/[0.08]" role="region" aria-labelledby={`fs-${id}`}>
      <button
        id={`fs-${id}`}
        type="button"
        aria-expanded={isExpanded}
        aria-controls={`fc-${id}`}
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-4 py-2.5 text-left
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d4af37]/30
          transition-all
          ${isExpanded
            ? 'bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/[0.02] to-transparent'
            : 'hover:bg-black/[0.02] dark:hover:bg-white/[0.03]'
          }`}
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        <span className="flex items-center gap-2.5">
          <span className={`transition-colors ${isExpanded ? 'text-[#d4af37]' : 'text-[#637089] dark:text-gray-400'}`}>
            {sectionIcons[id]}
          </span>
          <span className="text-[13px] font-bold text-[#0a1128] dark:text-white tracking-tight">{label}</span>
        </span>
        <span
          aria-hidden
          className="transition-transform duration-200 ease-in-out"
        >
          <ChevronDown
            size={15}
            strokeWidth={2.2}
            className={`transition-transform duration-250 ease-out ${
              isExpanded ? 'rotate-180 text-[#d4af37]' : 'text-[#9ca3af] dark:text-gray-500'
            }`}
          />
        </span>
      </button>
      <div
        id={`fc-${id}`}
        role="group"
        aria-label={`${label} filter options`}
        className="overflow-hidden transition-all duration-200 ease-in-out"
        style={{ maxHeight: isExpanded ? '600px' : '0px', opacity: isExpanded ? 1 : 0 }}
      >
        <div className="px-4 pb-3 pt-1">{children}</div>
      </div>
    </div>
  );
}

function FilterChip({
  label, active, onClick, ariaLabel,
}: {
  label: string; active: boolean; onClick: () => void; ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={active}
      aria-label={ariaLabel ?? label}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center px-3 py-[5px] rounded-[4px]
        text-[12px] font-semibold border min-h-[30px] min-w-[44px]
        transition-all duration-200 cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#d4af37]/40
        ${active
          ? 'bg-gradient-to-r from-[#bf953f]/15 via-[#d4af37]/20 to-[#b38728]/15 border-[#d4af37] text-[#8a6b22] dark:text-[#f3e3a2] shadow-[0_0_12px_rgba(212,175,55,0.15)]'
          : 'bg-white dark:bg-[#111e3b]/60 border-black/[0.08] dark:border-white/10 text-[#4d6080] dark:text-gray-300 hover:border-[#d4af37]/50 hover:text-[#d4af37] dark:hover:text-[#d4af37] hover:bg-[#d4af37]/[0.04]'
        }
      `}
      style={{ fontFamily: 'Outfit, sans-serif' }}
    >
      {label}
    </button>
  );
}

function FilterPanelContent({
  filters, sortOption, activeFilterCount,
  isDesktop,
  onToggleSpecialty, onToggleLocation,
  onToggleDealType, onToggleDealSize,
  onSetExperience, onSetSort,
  onClose, onReset,
}: Omit<BrokerFiltersProps, 'isOpen'> & { onClose: () => void }) {
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(['location', 'expertise', 'dealType', 'dealSize', 'experience', 'sort'])
  );
  const [locSearch, setLocSearch] = useState('');
  const [showAllLoc, setShowAllLoc] = useState(false);

  const toggle = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const filteredLocs = locSearch.trim()
    ? locationOptions.filter((o) => o.label.toLowerCase().includes(locSearch.toLowerCase()))
    : locationOptions;
  const visibleLocs = showAllLoc ? filteredLocs : filteredLocs.slice(0, QUICK_LOC_COUNT);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0b1b42]">
      
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        
        {/* Location Section */}
        <AccordionSection id="location" label="Location" isExpanded={expanded.has('location')} onToggle={() => toggle('location')}>
          <div className="relative mb-3">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af] dark:text-gray-500 pointer-events-none" />
            <input
              type="search"
              aria-label="Search locations"
              placeholder="Search location…"
              value={locSearch}
              onChange={(e) => setLocSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-[12.5px] rounded-[4px] border border-black/[0.08] dark:border-white/10
                bg-black/[0.02] dark:bg-[#070d1e] text-[#0a1128] dark:text-white placeholder-[#9ca3af] dark:placeholder-gray-500
                focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20
                transition-all"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {visibleLocs.map((opt) => (
              <FilterChip
                key={opt.id}
                label={opt.label}
                active={filters.locations.includes(opt.id)}
                onClick={() => onToggleLocation(opt.id)}
                ariaLabel={`Filter by ${opt.label}`}
              />
            ))}
          </div>
          {!locSearch && filteredLocs.length > QUICK_LOC_COUNT && (
            <button
              type="button"
              onClick={() => setShowAllLoc((v) => !v)}
              className="mt-3 text-[12px] font-bold text-[#d4af37] hover:text-[#b8903c]
                transition-colors focus-visible:outline-none focus-visible:underline"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {showAllLoc ? '– Less' : `+ ${filteredLocs.length - QUICK_LOC_COUNT} More`}
            </button>
          )}
        </AccordionSection>

        {/* Property Expertise Section */}
        <AccordionSection id="expertise" label="Property Expertise" isExpanded={expanded.has('expertise')} onToggle={() => toggle('expertise')}>
          <div className="grid grid-cols-4 gap-1.5" role="group" aria-label="Property Expertise options">
            {propertyExpertise.map((opt) => {
              const active = filters.specialties.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="checkbox"
                  aria-checked={active}
                  aria-label={`${opt.label} expertise`}
                  onClick={() => onToggleSpecialty(opt.id)}
                  className={`
                    flex flex-col items-center gap-1.5 py-2.5 px-1 rounded-[4px] border
                    transition-all duration-200 text-center cursor-pointer min-h-[62px] group
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/40 focus-visible:ring-offset-1
                    ${active
                      ? 'bg-gradient-to-b from-[#d4af37]/15 to-[#d4af37]/5 border-[#d4af37] text-[#8a6b22] dark:text-[#f3e3a2] shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                      : 'bg-white dark:bg-[#111e3b]/60 border-black/[0.08] dark:border-white/10 text-[#637089] dark:text-gray-400 hover:border-[#d4af37]/50 hover:text-[#d4af37] dark:hover:text-[#d4af37] hover:bg-[#d4af37]/[0.03]'
                    }
                  `}
                >
                  <ExpertiseIcon type={opt.icon} active={active} />
                  <span
                    className="text-[10px] font-semibold leading-tight"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </AccordionSection>

        {/* Deal Type Section */}
        <AccordionSection id="dealType" label="Deal Type" isExpanded={expanded.has('dealType')} onToggle={() => toggle('dealType')}>
          <div className="flex flex-wrap gap-2">
            {dealTypeOptions.map((opt) => (
              <FilterChip
                key={opt.id}
                label={opt.label}
                active={filters.dealTypes.includes(opt.id)}
                onClick={() => onToggleDealType(opt.id)}
                ariaLabel={`Deal type: ${opt.label}`}
              />
            ))}
          </div>
        </AccordionSection>

        {/* Deal Size Section */}
        <AccordionSection id="dealSize" label="Deal Size Range" isExpanded={expanded.has('dealSize')} onToggle={() => toggle('dealSize')}>
          <div className="flex flex-wrap gap-2">
            {dealSizeOptions.map((opt) => (
              <FilterChip
                key={opt.id}
                label={opt.label}
                active={filters.dealSizes.includes(opt.id)}
                onClick={() => onToggleDealSize(opt.id)}
                ariaLabel={`Deal size: ${opt.label}`}
              />
            ))}
          </div>
        </AccordionSection>

        {/* Experience Section */}
        <AccordionSection id="experience" label="Experience" isExpanded={expanded.has('experience')} onToggle={() => toggle('experience')}>
          <div className="flex flex-wrap gap-2">
            {experienceOptions.map((opt) => {
              const active = filters.experience === opt.id;
              return (
                <FilterChip
                  key={opt.id}
                  label={opt.label}
                  active={active}
                  onClick={() => onSetExperience(active ? null : opt.id)}
                  ariaLabel={`Experience: ${opt.label}`}
                />
              );
            })}
          </div>
        </AccordionSection>

        {/* Sort By Section */}
        <AccordionSection id="sort" label="Sort By" isExpanded={expanded.has('sort')} onToggle={() => toggle('sort')}>
          <div className="flex flex-col gap-1" role="radiogroup" aria-label="Sort brokers by">
            {sortOptions.map((opt) => {
              const active = sortOption === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => onSetSort(opt.id as BrokerSortOption)}
                  className={`
                    flex items-center gap-3 py-2 px-2.5 w-full text-left rounded-[4px] min-h-[38px]
                    transition-all hover:bg-black/[0.02] dark:hover:bg-white/[0.03]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/30 focus-visible:ring-inset
                    ${active ? 'bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/[0.02] to-transparent' : ''}
                  `}
                >
                  <span
                    aria-hidden
                    className={`w-[17px] h-[17px] rounded-full border-2 shrink-0 flex items-center justify-center transition-all
                      ${active ? 'border-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.3)]' : 'border-gray-300 dark:border-gray-600'}`}
                  >
                    {active && <span className="w-[7px] h-[7px] rounded-full bg-[#d4af37]" />}
                  </span>
                  <span
                    className={`text-[13px] ${active ? 'font-bold text-[#0a1128] dark:text-white' : 'font-medium text-gray-600 dark:text-gray-400'}`}
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </AccordionSection>

      </div>

      {/* Footer / CTA Bar */}
      <div className="shrink-0 px-4 py-3 bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-md border-t border-black/[0.06] dark:border-white/10 flex items-center gap-2.5">
        {isDesktop && (
          <button
            type="button"
            onClick={() => { onReset(); onClose(); }}
            className="
              flex-1 py-2.5 rounded-[4px] border border-black/[0.08] dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.04]
              text-[12.5px] font-bold text-gray-700 dark:text-gray-300
              hover:border-[#d4af37]/50 hover:text-[#d4af37] dark:hover:text-[#d4af37] active:scale-[0.99] transition-all
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/25 focus-visible:ring-offset-1
              flex items-center justify-center gap-1.5
            "
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            <RotateCcw size={13} strokeWidth={2} />
            Reset
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          className="flex-[2] py-2.5 rounded-[4px] bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] hover:from-[#d4af37] hover:via-[#bf953f] hover:to-[#a67c00] text-white text-[13px] font-bold tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] active:scale-[0.99] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/60 focus-visible:ring-offset-2 flex items-center justify-center gap-1.5"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          <Check size={14} strokeWidth={2.5} />
          Apply{activeFilterCount > 0 ? ` (${activeFilterCount})` : ''}
        </button>
      </div>
    </div>
  );
}

function DesktopDrawer(props: BrokerFiltersProps) {
  const { isOpen, onClose, activeFilterCount, onReset } = props;
  const { mounted, visible } = useAnimatedMount(isOpen, 300);
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return (
    <>
      <div
        role="presentation"
        aria-hidden="true"
        className="absolute inset-0 z-[100] bg-black/50 backdrop-blur-[3px] transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filter Options"
        className="absolute right-0 top-0 h-full z-[101] bg-white dark:bg-[#0b1b42] border-l border-black/5 dark:border-white/10 shadow-[-10px_0_40px_rgba(0,0,0,0.25)] flex flex-col"
        style={{
          width: 'clamp(340px, 37.5vw, 480px)',
          transform: visible ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 280ms cubic-bezier(0.4, 0, 0.2, 1)',
          fontFamily: 'Outfit, sans-serif',
        }}
      >
        {/* Drawer Header */}
        <div className="shrink-0 flex items-center justify-between px-5 py-3.5 border-b border-black/[0.06] dark:border-white/10 bg-white/90 dark:bg-[#0b1b42]/90 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[#bf953f] via-[#d4af37] to-[#b38728] shrink-0" />
            <SlidersHorizontal size={16} className="text-[#d4af37]" />
            <h2 className="text-[15px] font-bold text-[#0a1128] dark:text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-2 text-[10px] font-bold text-[#b8903c] dark:text-[#d4af37] bg-[#d4af37]/15 border border-[#d4af37]/30 rounded-full px-2 py-0.5">
                  {activeFilterCount}
                </span>
              )}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={onReset}
                className="text-[12px] font-bold text-[#d4af37] hover:text-[#b8903c] transition-colors focus-visible:outline-none focus-visible:underline"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Clear All
              </button>
            )}
            <button
              type="button"
              aria-label="Close filter panel"
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center rounded-[4px] bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#d4af37]/15 hover:text-[#d4af37] dark:hover:text-[#d4af37] text-gray-500 dark:text-gray-400 border border-black/5 dark:border-white/10 transition-colors focus-visible:outline-none"
            >
              <X size={15} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          <FilterPanelContent {...props} onClose={onClose} />
        </div>
      </div>
    </>
  );
}

function MobileSheet(props: BrokerFiltersProps) {
  const { isOpen, onClose } = props;
  const { mounted, visible } = useAnimatedMount(isOpen, 340);

  const sheetRef   = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const dragY       = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    dragY.current = 0;
    if (sheetRef.current) sheetRef.current.style.transition = 'none';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const delta = e.touches[0].clientY - touchStartY.current;
    dragY.current = Math.max(0, delta);
    if (sheetRef.current) {
      sheetRef.current.style.transform = `translateY(${dragY.current}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (sheetRef.current) {
      sheetRef.current.style.transition = '';
    }
    if (dragY.current > 90) {
      onClose();
    } else if (sheetRef.current) {
      sheetRef.current.style.transform = 'translateY(0)';
    }
  };

  if (!mounted) return null;

  return (
    <>
      <div
        role="presentation"
        aria-hidden="true"
        className="absolute inset-0 z-50 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={onClose}
      />

      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Filter Options"
        className="absolute bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#0b1b42] border-t border-black/5 dark:border-white/10 flex flex-col overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
        style={{
          height: '88%',
          borderRadius: '8px 8px 0 0',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 330ms cubic-bezier(0.32, 0.72, 0, 1)',
          willChange: 'transform',
          fontFamily: 'Outfit, sans-serif',
        }}
      >
        {/* Mobile Drag Header */}
        <div
          className="shrink-0 relative flex items-center justify-center pt-3 pb-2 touch-none select-none cursor-grab active:cursor-grabbing bg-white/90 dark:bg-[#0b1b42]/90 backdrop-blur-md border-b border-black/[0.05] dark:border-white/[0.08]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <span className="w-10 h-1 rounded-full bg-black/20 dark:bg-white/20 pointer-events-none" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-[4px] bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#d4af37]/15 hover:text-[#d4af37] text-gray-500 dark:text-gray-400 border border-black/5 dark:border-white/10 transition-colors focus-visible:outline-none"
          >
            <X size={15} strokeWidth={2.2} />
          </button>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          <FilterPanelContent {...props} onClose={onClose} />
        </div>
      </div>
    </>
  );
}

export default function BrokerFilters(props: BrokerFiltersProps) {
  if (props.isDesktop) return <DesktopDrawer {...props} />;
  return <MobileSheet {...props} />;
}

export function ActiveFilterChips({
  filters,
  onToggleSpecialty,
  onToggleLocation,
  onToggleDealType,
  onToggleDealSize,
  onClearAll,
}: {
  filters: ActiveFilters;
  onToggleSpecialty: (s: string) => void;
  onToggleLocation:  (l: string) => void;
  onToggleDealType:  (v: string) => void;
  onToggleDealSize:  (v: string) => void;
  onClearAll: () => void;
}) {
  const all = [
    ...filters.specialties.map((v) => ({ label: v, remove: () => onToggleSpecialty(v) })),
    ...filters.locations.map((v) => {
      const loc = locationOptions.find((o) => o.id === v);
      return { label: loc?.label ?? v, remove: () => onToggleLocation(v) };
    }),
    ...filters.dealTypes.map((v) => ({ label: v, remove: () => onToggleDealType(v) })),
    ...filters.dealSizes.map((v) => {
      const sz = dealSizeOptions.find((o) => o.id === v);
      return { label: sz?.label ?? v, remove: () => onToggleDealSize(v) };
    }),
  ];
  if (all.length === 0) return null;
  return (
    <div
      className="flex items-center gap-2 flex-wrap px-6 py-2.5 border-b border-black/[0.04] dark:border-white/[0.06] bg-[#fafafb] dark:bg-background"
      role="list"
      aria-label="Active filters"
    >
      {all.map((chip, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Remove filter: ${chip.label}`}
          onClick={chip.remove}
          className="flex items-center gap-1.5 text-[11px] font-semibold
            bg-[#d4af37]/15 text-[#8a6b22] dark:text-[#f3e3a2] border border-[#d4af37]/30
            rounded-[4px] px-2.5 py-1 whitespace-nowrap
            hover:bg-[#d4af37]/25 transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/50"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          {chip.label}
          <X size={12} strokeWidth={2.2} className="shrink-0" />
        </button>
      ))}
      <button
        type="button"
        onClick={onClearAll}
        aria-label="Clear all filters"
        className="text-[11px] font-bold text-[#ef4444] hover:text-[#dc2626]
          shrink-0 px-1 focus-visible:outline-none focus-visible:underline"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        Clear all
      </button>
    </div>
  );
}
