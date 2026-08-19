import { useState, useMemo, useEffect } from 'react';
import { Heart, MapPin, Search, ChevronRight, TrendingUp, Calendar, Store, Map, ChevronDown, ChevronUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { franchises, getMeta, tagColors } from './data';

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 350, damping: 28 } },
};

export default function SearchResultsMobile() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showMap, setShowMap] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isListCollapsed, setIsListCollapsed] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 5);
      setIsLoadingMore(false);
    }, 600);
  };

  useEffect(() => {
    setVisibleCount(5);
  }, [searchQuery]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCardTap = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
    setSelectedMarker(id);
  };

  const uniquePlaces = useMemo(() => {
    const places = franchises.map(f => f.location);
    return Array.from(new Set(places)).filter(p => !searchQuery || p.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const matchingFranchises = useMemo(() => {
    return franchises.filter(f => !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const displayPlaces = searchQuery ? uniquePlaces : uniquePlaces.slice(0, 3);
  const displayFranchises = searchQuery ? matchingFranchises : matchingFranchises.slice(0, 3);

  const filtered = useMemo(() => {
    return franchises.filter(f => {
      const matchesSearch = !searchQuery ||
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-[#0b1b42] overflow-hidden font-sans transition-colors duration-300 relative">

      {}
      <div
        className="flex-none px-4 pt-4 pb-0 relative z-40 pointer-events-none flex flex-col gap-2"
        style={{ marginBottom: showMap ? '-76px' : '8px' }}
      >
                <div className="relative pointer-events-auto group">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            placeholder="Search franchise, industry, or location..."
            className="w-full pl-4 pr-[72px] py-3 bg-white/90 dark:bg-[#121c33]/90 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[4px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 focus:border-[#d4af37]/40 transition-all text-[#0a1128] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]"
          />
          <div className="absolute inset-y-1.5 right-1.5 flex gap-1 items-center justify-center pointer-events-auto">
            <button 
              onClick={() => setShowMap(!showMap)}
              className={clsx(
                "w-8 h-full flex items-center justify-center rounded-[4px] transition-all",
                showMap ? "bg-[#d4af37] text-white" : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
              )}
            >
              <Map className="h-4 w-4" />
            </button>
            <div className="w-8 h-full flex items-center justify-center bg-[#0a1128] dark:bg-[#d4af37]/20 rounded-[4px] text-white dark:text-[#d4af37] shadow-sm pointer-events-none">
              <Search className="h-4 w-4" />
            </div>
          </div>

                    <AnimatePresence>
            {isSearchFocused && (searchQuery || displayPlaces.length > 0 || displayFranchises.length > 0) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-[8px] overflow-hidden flex text-[11px] z-50"
              >
                <div className="w-full flex flex-col">
                  <div className="overflow-y-auto flex-1 p-1.5 max-h-[260px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {displayFranchises.length > 0 ? displayFranchises.map(f => (
                      <div key={f.id} onClick={() => setSearchQuery(f.name)} className="px-3 py-3 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer rounded-[8px] text-slate-800 dark:text-slate-200 flex items-center gap-3 transition-all duration-200 mx-1 my-0.5 group">
                        <div className="w-9 h-9 rounded-[8px] bg-slate-100 dark:bg-white/10 group-hover:bg-white dark:group-hover:bg-white/20 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0 shadow-sm border border-slate-200/50 dark:border-white/5 transition-colors">
                          <Store size={15} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col min-w-0 justify-center">
                          <span className="truncate font-bold text-[13px] leading-tight tracking-tight text-[#0a1128] dark:text-white">{f.name}</span>
                          <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
                            <MapPin size={10} strokeWidth={2} />
                            <span className="truncate">{f.location}</span>
                          </span>
                        </div>
                      </div>
                    )) : (
                      <div className="p-3 text-center text-[10px] text-gray-400">No franchises</div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {}
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isListCollapsed ? '100vh' : '36vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
            className="w-full relative bg-gradient-to-br from-[#eef2f6] via-[#e8edf4] to-[#dfe5ee] dark:from-[#0a1128] dark:via-[#0d1730] dark:to-[#0a1128] overflow-hidden flex-shrink-0 border-y border-gray-200/60 dark:border-gray-800"
          >
                        <svg className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="topo-m" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <circle cx="75" cy="75" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="75" cy="75" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="75" cy="75" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topo-m)" className="text-slate-500" />
            </svg>

            <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,80 Q 100,120 200,60 T 400,130" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M 30,180 Q 150,150 250,200 T 400,170" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 6" />
            </svg>

                        <div className="absolute bottom-16 right-3 flex flex-col gap-1 z-10">
              {['+', '−'].map((label) => (
                <motion.button
                  key={label}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/80 dark:bg-[#121c33]/80 backdrop-blur-xl w-7 h-7 flex items-center justify-center rounded-[4px] shadow-sm border border-white/40 dark:border-white/10 text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-[#d4af37] transition-colors"
                >{label}</motion.button>
              ))}
              <div className="h-px w-full bg-gray-200 dark:bg-white/10 my-0.5" />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsListCollapsed(!isListCollapsed)}
                className="bg-white/80 dark:bg-[#121c33]/80 backdrop-blur-xl w-7 h-7 flex items-center justify-center rounded-[4px] shadow-sm border border-white/40 dark:border-white/10 text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-[#d4af37] transition-colors"
              >
                {isListCollapsed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </motion.button>
            </div>

                        {filtered.map((f, i) => {
              const isActive = activeCard === f.id || selectedMarker === f.id;
              const meta = getMeta(f.category);
              const Icon = isActive ? meta.icon : Store;
              return (
                <motion.div
                  key={`marker-${f.id}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.04, type: 'spring' as const, stiffness: 300, damping: 20 }}
                  className="absolute"
                  style={{ top: `${f.lat}%`, left: `${f.lng}%`, transform: 'translate(-50%, -50%)' }}
                  onClick={() => setSelectedMarker(selectedMarker === f.id ? null : f.id)}
                >
                  <motion.div
                    animate={isActive ? { scale: 1.35 } : { scale: 1 }}
                    transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
                    className={clsx('relative flex flex-col items-center cursor-pointer', isActive ? 'z-30' : 'z-10')}
                  >
                    {isActive && (
                      <motion.div
                        className={clsx('absolute w-11 h-11 rounded-full border-2', `border-current ${meta.text} opacity-40`)}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: [0.5, 1.2], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                    <div className={clsx(
                      'w-8 h-8 rounded-[4px] flex items-center justify-center transition-all duration-200 shadow-md',
                      isActive ? `${meta.bg} ${meta.glow}` : 'bg-gray-200/80 dark:bg-white/10'
                    )}>
                      <Icon size={14} strokeWidth={2.5} className={isActive ? meta.text : 'text-gray-500 dark:text-gray-400'} />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            <AnimatePresence>
              {isListCollapsed && selectedMarker && (() => {
                const f = filtered.find(x => x.id === selectedMarker);
                if (!f) return null;
                return (
                  <motion.div
                    key={`popup-${f.id}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    style={{
                      position: 'absolute',
                      top: f.lat < 40 ? `calc(${f.lat}% + 24px)` : 'auto',
                      bottom: f.lat >= 40 ? `calc(${100 - f.lat}% + 24px)` : 'auto',
                      left: `max(16px, min(calc(${f.lng}% - 130px), calc(100% - 276px)))`,
                      width: '260px',
                      transformOrigin: f.lat < 40 ? 'top center' : 'bottom center'
                    }}
                    className="bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-xl rounded-[8px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_40px_rgba(212,175,55,0.08)] border border-gray-200/80 dark:border-white/10 p-2.5 z-40 cursor-pointer pointer-events-auto"
                    onClick={() => handleCardTap(f.id)}
                  >
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-[4px] overflow-hidden flex-shrink-0 border border-gray-200/80 dark:border-gray-700 shadow-sm">
                          <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.3 }}
                          onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                          className="p-1"
                        >
                          <Heart className={clsx(
                            'w-4 h-4 transition-all duration-300',
                            favorites.has(f.id) ? 'fill-red-500 text-red-500' : 'text-gray-300 dark:text-gray-600'
                          )} />
                        </motion.button>
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <div className="min-w-0">
                              <h3 className="font-extrabold text-[12px] leading-tight truncate text-[#0a1128] dark:text-white">{f.name}</h3>
                              <p className="text-[9px] text-gray-500 dark:text-gray-400 flex items-center gap-0.5 font-medium mt-0.5 mb-1.5">
                                <MapPin className="w-2.5 h-2.5 flex-shrink-0" /><span className="truncate">{f.location}</span>
                              </p>
                            </div>
                            <motion.button
                              whileTap={{ scale: 1.1 }}
                              onClick={(e) => { e.stopPropagation(); setSelectedMarker(null); }}
                              className="p-0.5 flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                            >
                              <X className="w-3.5 h-3.5" />
                            </motion.button>
                          </div>
                          
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[10px] font-extrabold text-[#0b1b42] dark:text-[#d4af37]">{f.investment}</span>
                            <span className="w-px h-2.5 bg-gray-200 dark:bg-gray-700" />
                            <div className="flex items-center gap-0.5">
                              <TrendingUp size={9} className="text-emerald-500" />
                              <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400">{f.roi}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end mt-2">
                          <motion.button
                            whileTap={{ scale: 0.92 }}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-0.5 text-[9px] font-bold px-3 py-1.5 rounded-[4px] bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white shadow-[0_0_10px_rgba(212,175,55,0.2)] border border-[#f9df9f]/50 transition-all whitespace-nowrap relative overflow-hidden group"
                          >
                            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                            <span className="relative z-10 flex items-center gap-0.5">
                              Enquire <ChevronRight className="w-2.5 h-2.5" />
                            </span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>


      {}
      <div className="flex-1 overflow-y-auto scrollbar-hide relative">


        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {filtered.slice(0, visibleCount).map((f) => {
            const isActive = activeCard === f.id || selectedMarker === f.id;
            return (
              <motion.div
                key={`card-${f.id}`}
                variants={fadeUp}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardTap(f.id)}
                className={clsx(
                  'relative cursor-pointer transition-all duration-300 hover:z-10 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.12)] rounded-[8px] my-1 mx-2',
                  isActive
                    ? 'bg-[#d4af37]/[0.04] dark:bg-[#d4af37]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
                    : 'bg-white dark:bg-[#0b1b42]'
                )}
              >
             <motion.div
                  initial={false}
                  animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ type: 'spring' as const, stiffness: 500, damping: 30 }}
                  className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#d4af37] to-[#aa8922] origin-top rounded-r-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                />

                <div className="px-3.5 py-3 pl-3">
                                    <div className="flex gap-3">
                                        <div className={clsx(
                      'w-14 h-14 rounded-[4px] overflow-hidden flex-shrink-0 border transition-all duration-300',
                      isActive
                        ? 'border-[#d4af37]/40 shadow-[0_4px_12px_rgba(212,175,55,0.15)]'
                        : 'border-gray-200/80 dark:border-gray-700 shadow-sm'
                    )}>
                      <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                    </div>

                                        <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1.5">
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <h3 className={clsx(
                              'font-extrabold text-[12px] leading-tight truncate transition-colors',
                              isActive ? 'text-[#0a1128] dark:text-[#d4af37]' : 'text-[#0a1128] dark:text-white'
                            )}>{f.name}</h3>
                          </div>
                          <p className="text-[9px] text-gray-500 dark:text-gray-400 flex items-center gap-0.5 font-medium">
                            <MapPin className="w-2.5 h-2.5 flex-shrink-0" /><span className="truncate">{f.location}</span>
                          </p>
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.3 }}
                          onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                          className="p-0.5 flex-shrink-0"
                        >
                          <Heart className={clsx(
                            'w-4 h-4 transition-all duration-300',
                            favorites.has(f.id) ? 'fill-red-500 text-red-500' : 'text-gray-300 dark:text-gray-600'
                          )} />
                        </motion.button>
                      </div>

                                            <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span className="text-[11px] font-extrabold text-[#0b1b42] dark:text-[#d4af37]">{f.investment}</span>
                        <span className="w-px h-2.5 bg-gray-200 dark:bg-gray-700" />
                        <div className="flex items-center gap-0.5">
                          <TrendingUp size={9} className="text-emerald-500" />
                          <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400">{f.roi}</span>
                        </div>
                        <span className="w-px h-2.5 bg-gray-200 dark:bg-gray-700" />
                        <div className="flex items-center gap-0.5">
                          <Calendar size={9} className="text-blue-500" />
                          <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400">{f.breakeven}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                                    <div className="flex items-center justify-between mt-2 gap-2">
                    <div className="flex items-center gap-1 flex-wrap min-w-0">
                      {f.tags.slice(0, 1).map((tag) => (
                        <span key={tag} className={clsx('px-1.5 py-0.5 rounded-[4px] text-[8px] font-bold border', tagColors[tag] || 'bg-gray-100 dark:bg-white/5 text-gray-500 border-gray-200/60 dark:border-white/10')}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      className="flex-shrink-0 flex items-center gap-0.5 text-[10px] font-bold px-3 py-1.5 rounded-[4px] bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white shadow-[0_0_10px_rgba(212,175,55,0.2)] border border-[#f9df9f]/50 transition-all whitespace-nowrap relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                      <span className="relative z-10 flex items-center gap-0.5">
                        Enquire <ChevronRight className="w-3 h-3" />
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {visibleCount < filtered.length && (
          <div className="px-4 py-6 flex justify-center ml-4">
            <motion.button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center min-w-[120px] px-6 py-2.5 bg-[#0a1128] hover:bg-[#121c33] dark:bg-[#121c33] dark:hover:bg-[#1a2642] backdrop-blur-xl border border-[#0a1128]/10 dark:border-white/10 rounded-[4px] text-[11px] font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all uppercase tracking-widest disabled:opacity-80"
            >
              {isLoadingMore ? (
                <div className="flex gap-1 items-center justify-center">
                  <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [-1.5, 1.5, -1.5] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }} />
                  <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [-1.5, 1.5, -1.5] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }} />
                  <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [-1.5, 1.5, -1.5] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} />
                </div>
              ) : (
                "Load More"
              )}
            </motion.button>
          </div>
        )}
      </div>

    </div>
  );
}
