import { useState, useEffect } from 'react';
import './styles/cremp-brokers.css';
import BrokerHeader from './components/BrokerHeader';
import BrokerSearch from './components/BrokerSearch';
import BrokerFilters from './components/BrokerFilters';
import BrokerCard from './components/BrokerCard';
import BrokerProfileDialog from './components/BrokerProfileDialog';
import BrokerMapDrawer from './components/BrokerMapDrawer';
import EmptyState from './components/EmptyState';
import { useBrokerFilters } from './hooks/useBrokerFilters';
import { brokersData } from './data/brokersData';
import { ctaBanner } from './data/marketplaceData';
import type { Broker } from './types/broker.types';

interface CREMPBrokersPageProps {
  viewMode?: 'desktop' | 'mobile';
}

const SKELETON_COUNT = 6;

export default function CREMPBrokersPage({ viewMode = 'desktop' }: CREMPBrokersPageProps) {
  const isDesktop = viewMode === 'desktop';

  const [isLoading, setIsLoading] = useState(true);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [mapPanelOpen, setMapPanelOpen] = useState(false);
  const [selectedBroker, setSelectedBroker] = useState<Broker | null>(null);

  const {
    filters,
    sortOption,
    setSortOption,
    filteredBrokers,
    setSearch,
    toggleSpecialty,
    toggleLocation,
    toggleDealType,
    toggleDealSize,
    setExperience,
    clearAllFilters,
    activeFilterCount,
  } = useBrokerFilters();

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const hasActiveFilters =
    activeFilterCount > 0 || filters.search.trim().length > 0;

  const sharedFilterProps = {
    isOpen: filterPanelOpen,
    onClose: () => setFilterPanelOpen(false),
    filters,
    sortOption,
    activeFilterCount,
    onToggleSpecialty: toggleSpecialty,
    onToggleLocation: toggleLocation,
    onToggleDealType: toggleDealType,
    onToggleDealSize: toggleDealSize,
    onSetExperience: setExperience,
    onSetSort: setSortOption,
    onReset: clearAllFilters,
  };

  if (isDesktop) {
    return (
        <div
          className="w-full flex items-start justify-center bg-background text-gray-900 dark:text-primary transition-colors duration-300 overflow-hidden animate-in fade-in duration-500"
          style={{ height: '100%', fontFamily: 'Outfit' }}
        >
        <div className="w-full h-full flex flex-col overflow-hidden relative">

        
        <BrokerHeader isDesktop />

        <div className="cb-sticky-bar px-4 py-1 flex items-center gap-3">
          
          <button
            onClick={() => setFilterPanelOpen(true)}
            aria-label="Open filters"
            className={`shrink-0 flex items-center gap-1.5 text-[11px] font-semibold rounded-lg px-3 py-[7px] border transition-colors shadow-sm whitespace-nowrap
              ${activeFilterCount > 0
                ? 'bg-[#0a1128] text-white border-[#0a1128]'
                : 'bg-white dark:bg-[#0b1b42] dark:border-white/10 text-[#0a1128] dark:text-white border-black/[0.08] hover:text-[#d4af37]'
              }`}
          >
            <svg viewBox="0 0 16 16" fill="none" stroke={activeFilterCount > 0 ? '#ffffff' : '#0a1128'} strokeWidth="1.6" strokeLinecap="round" className="w-3.5 h-3.5 shrink-0">
              <path d="M2 4h12M4 8h8M6 12h4" />
            </svg>
            Filters
            {activeFilterCount > 0 && (
              <span className="w-4 h-4 bg-[#d4af37] text-[#0a1128] dark:text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <BrokerSearch
            value={filters.search}
            onChange={setSearch}
            className="flex-1 max-w-[480px]"
          />
          
          <button
            onClick={() => setMapPanelOpen(true)}
            aria-label="Open map view"
            title="View brokers on map"
            className={`shrink-0 ml-auto flex items-center gap-1.5 text-[11px] font-semibold rounded-lg px-3 py-[7px] border transition-colors shadow-sm whitespace-nowrap
              ${mapPanelOpen
                ? 'bg-[#0a1128] text-[#d4af37] border-[#0a1128]'
                : 'bg-white dark:bg-[#0b1b42] dark:border-white/10 text-[#0a1128] dark:text-white border-black/[0.08] hover:text-[#d4af37] hover:border-[#d4af37]/40'
              }`}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5 shrink-0">
              <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" fill="currentColor" />
              <circle cx="10" cy="7" r="2.2" fill="white" />
            </svg>
            Map
          </button>
        </div>

        
        <div className="flex flex-1 overflow-hidden">

          
          <main className="flex-1 overflow-y-auto scrollbar-hide px-3 pb-2">
            
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
              </div>
              {hasActiveFilters && !isLoading && (
                <button
                  onClick={clearAllFilters}
                  className="text-[11px] font-semibold text-[#ef4444] hover:text-[#dc2626]"
                >
                  Clear filters
                </button>
              )}
            </div>

            
            {!isLoading && filteredBrokers.length === 0 ? (
              <EmptyState hasFilters={hasActiveFilters} onClearFilters={clearAllFilters} />
            ) : (
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
                {isLoading
                  ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                      <BrokerCard
                        key={`sk-${i}`}
                        broker={brokersData[0]}
                        isDesktop
                        isLoading
                      />
                    ))
                  : filteredBrokers.map((broker) => (
                      <BrokerCard key={broker.id} broker={broker} isDesktop onViewProfile={setSelectedBroker} />
                    ))}
              </div>
            )}

            
            {!isLoading && (
              <div className="mt-8 mb-2 rounded-[8px] bg-gradient-to-br from-[#0a1128] via-[#0f1b3d] to-[#1a3463] border border-[#d4af37]/20 shadow-[0_8px_30px_rgba(10,17,40,0.12)] px-8 py-7 flex items-center justify-between gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 blur-[60px] rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#d4af37]/5 blur-[40px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
                
                <div className="relative z-10 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <path d="M11 8v2m0 0v2m0-2h2m-2 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-white text-[18px] font-bold leading-tight tracking-wide"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {ctaBanner.heading}
                    </h3>
                    <p
                      className="text-white/70 text-[13px] font-light mt-1.5 max-w-[340px]"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {ctaBanner.subHeading}
                    </p>
                  </div>
                </div>
                <button className="relative z-10 flex items-center justify-center font-bold px-7 py-3 text-[13px] rounded-[6px] tracking-wide shrink-0 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white shadow-[0_4px_15px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 border-none transition-all duration-300">
                  {ctaBanner.cta}
                </button>
              </div>
            )}
          </main>
        </div>

        
        <BrokerFilters {...sharedFilterProps} isDesktop={true} />
        
        <BrokerMapDrawer isOpen={mapPanelOpen} onClose={() => setMapPanelOpen(false)} isDesktop brokerCount={filteredBrokers.length} />
        
        {selectedBroker && (
          <BrokerProfileDialog
            broker={selectedBroker}
            isDesktop
            onClose={() => setSelectedBroker(null)}
          />
        )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full flex flex-col items-center justify-start bg-background text-gray-900 dark:text-primary transition-colors duration-300 overflow-hidden animate-in fade-in duration-500"
      style={{ height: '100%', fontFamily: 'Outfit' }}
    >
      <div
        className="w-[24.375rem] shrink-0 h-full flex flex-col overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.08)] dark:shadow-[0_0_40px_rgba(255,255,255,0.05)] relative"
      >
        
        <BrokerHeader isDesktop={false} />

        
        <div className="cb-sticky-bar px-4 py-3 flex flex-col gap-2 shrink-0">
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterPanelOpen(true)}
              aria-label="Open filters"
              className={`shrink-0 w-[38px] h-[38px] flex items-center justify-center rounded-lg border transition-colors shadow-sm relative
                ${activeFilterCount > 0
                  ? 'bg-[#0a1128] text-white border-[#0a1128]'
                  : 'bg-white dark:bg-[#0b1b42] dark:border-white/10 text-[#0a1128] dark:text-white border-black/[0.08] hover:text-[#d4af37]'
                }`}
            >
              <svg viewBox="0 0 16 16" fill="none" stroke={activeFilterCount > 0 ? '#ffffff' : '#0a1128'} strokeWidth="1.6" strokeLinecap="round" className="w-3.5 h-3.5">
                <path d="M2 4h12M4 8h8M6 12h4" />
              </svg>
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] text-[#0a1128] dark:text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <BrokerSearch value={filters.search} onChange={setSearch} className="flex-1" />
            
            <button
              onClick={() => setMapPanelOpen(true)}
              aria-label="Open map view"
              className={`shrink-0 w-[38px] h-[38px] flex items-center justify-center rounded-lg border transition-colors shadow-sm
                ${mapPanelOpen
                  ? 'bg-[#0a1128] text-[#d4af37] border-[#0a1128]'
                  : 'bg-white dark:bg-[#0b1b42] dark:border-white/10 text-[#0a1128] dark:text-white border-black/[0.08] hover:text-[#d4af37]'
                }`}
            >
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" fill="currentColor" />
                <circle cx="10" cy="7" r="2.2" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        
        <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pb-4">
        
          {!isLoading && filteredBrokers.length === 0 ? (
            <EmptyState hasFilters={hasActiveFilters} onClearFilters={clearAllFilters} />
          ) : (
            <div className="flex flex-col gap-3">
              {isLoading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <BrokerCard
                      key={`sk-${i}`}
                      broker={brokersData[0]}
                      isDesktop={false}
                      isLoading
                    />
                  ))
                : filteredBrokers.map((broker) => (
                    <BrokerCard key={broker.id} broker={broker} isDesktop={false} onViewProfile={setSelectedBroker} />
                  ))}
            </div>
          )}

          
          {!isLoading && (
            <div className="mt-5 rounded-[12px] bg-gradient-to-br from-[#0a1128] via-[#0f1b3d] to-[#1a3463] border border-[#d4af37]/20 shadow-[0_8px_30px_rgba(10,17,40,0.12)] px-5 py-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-[40px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:scale-110 transition-transform duration-300 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <path d="M11 8v2m0 0v2m0-2h2m-2 0H9" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-white text-[15px] font-bold leading-tight tracking-wide"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {ctaBanner.heading}
                    </h3>
                    <p
                      className="text-white/70 text-[12px] font-light mt-1.5 leading-snug"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {ctaBanner.subHeading}
                    </p>
                  </div>
                </div>
                <button className="mt-1 w-full flex items-center justify-center font-bold px-5 py-2.5 text-[13px] rounded-[6px] tracking-wide bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white shadow-[0_4px_15px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.35)] active:scale-[0.98] transition-all duration-300 border-none">
                  {ctaBanner.cta}
                </button>
              </div>
            </div>
          )}
        </div>
        
        <BrokerFilters {...sharedFilterProps} isDesktop={false} />
        
        <BrokerMapDrawer isOpen={mapPanelOpen} onClose={() => setMapPanelOpen(false)} isDesktop={false} brokerCount={filteredBrokers.length} />
        
        {selectedBroker && (
          <BrokerProfileDialog
            broker={selectedBroker}
            isDesktop={false}
            onClose={() => setSelectedBroker(null)}
          />
        )}
      </div>
    </div>
  );
}
