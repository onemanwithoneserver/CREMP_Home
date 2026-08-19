import { useState, useMemo, useEffect } from 'react';
import { Heart, MapPin, Search, ChevronRight, X, TrendingUp, Calendar, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { franchises, getMeta, tagColors, type Franchise } from './data';

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 350, damping: 28 } },
};

function MapPopup({ franchise, onClose }: { franchise: Franchise; onClose: () => void }) {
  const meta = getMeta(franchise.category);
  const Icon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
      animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
      exit={{ opacity: 0, x: "-50%", scale: 0.95 }}
      className="absolute bottom-[calc(100%+12px)] left-1/2 w-[300px] glass-strong rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/10 p-4 z-50"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728]" />

      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-[6px] bg-gray-50/50 hover:bg-gray-100/80 dark:bg-white/5 dark:hover:bg-white/10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-all"
      >
        <X className="w-4 h-4" strokeWidth={2.5} />
      </button>

      <div className="flex items-center gap-3.5 mb-4">
        <div className="w-12 h-12 rounded-[6px] overflow-hidden border border-gray-100 dark:border-white/10 flex-shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <img src={franchise.logo} alt={franchise.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0 pr-6">
          <h4 className="font-bold text-[#0a1128] dark:text-white text-[15px] leading-tight truncate mb-1">{franchise.name}</h4>
          <p className="text-[12px] text-gray-500 dark:text-gray-400 flex items-center gap-1 font-medium">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" /><span className="truncate">{franchise.location}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="flex flex-col justify-center items-center p-2 rounded-[6px] bg-white/50 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 shadow-[0_1px_4px_rgba(0,0,0,0.02)] min-h-[56px]">
          <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Investment</span>
          <span className="text-[11px] font-extrabold text-[#d4af37] text-center leading-[1.2]">{franchise.investment}</span>
        </div>
        <div className="flex flex-col justify-center items-center p-2 rounded-[6px] bg-white/50 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 shadow-[0_1px_4px_rgba(0,0,0,0.02)] min-h-[56px]">
          <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">ROI</span>
          <span className="text-[12px] font-extrabold text-emerald-500 text-center">{franchise.roi}</span>
        </div>
        <div className="flex flex-col justify-center items-center p-2 rounded-[6px] bg-white/50 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 shadow-[0_1px_4px_rgba(0,0,0,0.02)] min-h-[56px]">
          <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Breakeven</span>
          <span className="text-[12px] font-extrabold text-blue-500 text-center leading-[1.2]">{franchise.breakeven}</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className={clsx('flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[11px] font-bold shadow-sm', meta.bg, meta.text)}>
          <Icon size={14} strokeWidth={2.5} />
          {franchise.category}
        </div>
        <button className="flex items-center justify-center gap-1.5 text-[12px] font-bold text-white bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] shadow-[0_4px_12px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_16px_rgba(212,175,55,0.4)] px-5 py-2 rounded-[6px] transition-all group min-w-[100px]">
          Enquire <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-4 h-4 glass-strong border-r border-b border-gray-200/80 dark:border-white/10 rotate-45 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
    </motion.div>
  );
}

export default function SearchResultsDesktop() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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
      const newFavs = new Set(prev);
      if (newFavs.has(id)) newFavs.delete(id);
      else newFavs.add(id);
      return newFavs;
    });
  };

  const handleMarkerClick = (id: number) => {
    setSelectedMarker(selectedMarker === id ? null : id);
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
    <div className="flex flex-row w-full h-full bg-white dark:bg-[#0b1b42] overflow-hidden font-sans transition-colors duration-300">

      {}
      <div className="w-[65%] h-full flex flex-col relative border-r border-gray-200/60 dark:border-gray-800 z-10 bg-white dark:bg-[#0b1b42]">

                <div className="flex-1 relative bg-gradient-to-br from-[#eef2f6] via-[#e8edf4] to-[#dfe5ee] dark:from-[#0a1128] dark:via-[#0d1730] dark:to-[#0a1128] overflow-hidden">

                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[88%] max-w-xl z-30 flex flex-col gap-2">
            <div className="relative group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search franchise name, industry, or location..."
                className="w-full pl-5 pr-12 py-3.5 bg-white dark:bg-[#121c33] border border-gray-200/60 dark:border-white/10 rounded-[4px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 focus:border-[#d4af37]/40 transition-all text-[#0a1128] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]"
              />
              <div className="absolute inset-y-1.5 right-1.5 w-9 flex items-center justify-center bg-[#0a1128] dark:bg-[#d4af37]/20 rounded-[4px] text-white dark:text-[#d4af37] shadow-sm pointer-events-none">
                <Search className="h-4 w-4" />
              </div>

                            <AnimatePresence>
                {isSearchFocused && (searchQuery || displayPlaces.length > 0 || displayFranchises.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-[8px] overflow-hidden flex text-sm z-50"
                  >
                    <div className="w-full flex flex-col">
                      <div className="overflow-y-auto flex-1 p-2 max-h-[320px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {displayFranchises.length > 0 ? displayFranchises.map(f => (
                          <div key={f.id} onClick={() => setSearchQuery(f.name)} className="px-4 py-3.5 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer rounded-[8px] text-slate-800 dark:text-slate-200 flex items-center gap-4 transition-all duration-200 mx-1 my-0.5 group">
                            <div className="w-10 h-10 rounded-[8px] bg-slate-100 dark:bg-white/10 group-hover:bg-white dark:group-hover:bg-white/20 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0 shadow-sm border border-slate-200/50 dark:border-white/5 transition-colors">
                              <Store size={18} strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col min-w-0 justify-center">
                              <span className="truncate font-semibold text-[14px] leading-tight tracking-tight text-[#0a1128] dark:text-white">{f.name}</span>
                              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1.5">
                                <MapPin size={11} strokeWidth={2} />
                                <span className="truncate">{f.location}</span>
                              </span>
                            </div>
                          </div>
                        )) : (
                          <div className="p-4 text-center text-xs text-gray-400">No franchises found</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

                    <svg className="absolute inset-0 w-full h-full opacity-[0.07] dark:opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)" className="text-slate-500" />
          </svg>

          <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,120 Q 200,180 400,100 T 800,200" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="8 6" />
            <path d="M 50,300 Q 250,250 450,350 T 800,280" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 7" />
          </svg>

                    {filtered.map((f, i) => {
            const isActive = hoveredCard === f.id || selectedMarker === f.id;
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
                onClick={() => handleMarkerClick(f.id)}
              >
                <motion.div
                  animate={isActive ? { scale: 1.35 } : { scale: 1 }}
                  transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
                  className={clsx('relative flex flex-col items-center cursor-pointer', isActive ? 'z-30' : 'z-10')}
                >
                                    {isActive && (
                    <motion.div
                      className={clsx('absolute w-14 h-14 rounded-full border-2', `border-current ${meta.text} opacity-40`)}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: [0.5, 1.2], opacity: [0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                  <div className={clsx(
                    'w-10 h-10 rounded-[4px] flex items-center justify-center transition-all duration-300 shadow-md',
                    isActive ? `${meta.bg} ${meta.glow}` : 'bg-gray-200/80 dark:bg-white/10'
                  )}>
                    <Icon size={18} strokeWidth={2.5} className={isActive ? meta.text : 'text-gray-500 dark:text-gray-400'} />
                  </div>
                </motion.div>

                <AnimatePresence>
                  {selectedMarker === f.id && (
                    <MapPopup franchise={f} onClose={() => setSelectedMarker(null)} />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

                    <div className="absolute bottom-5 right-5 flex flex-col gap-1.5 z-10">
            {['+', '−'].map((label) => (
              <motion.button key={label} whileTap={{ scale: 0.88 }} whileHover={{ scale: 1.05 }} className="glass w-9 h-9 flex items-center justify-center rounded-[4px] text-gray-600 dark:text-gray-300 text-lg font-medium hover:text-[#d4af37] transition-colors">{label}</motion.button>
            ))}
          </div>
        </div>
      </div>

      {}
      <div className="w-[35%] h-full flex flex-col bg-gradient-to-br from-[#eef2f6] via-[#e8edf4] to-[#dfe5ee] dark:from-[#0a1128] dark:via-[#0d1730] dark:to-[#0a1128] overflow-hidden border-l border-white/50 dark:border-white/5 z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.03)]">


                <div className="flex-1 overflow-y-auto scrollbar-hide relative">


          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {filtered.slice(0, visibleCount).map((f) => {
              const isActive = hoveredCard === f.id || selectedMarker === f.id;
              return (
                <motion.div
                  key={`card-${f.id}`}
                  variants={fadeUp}
                  onMouseEnter={() => setHoveredCard(f.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleMarkerClick(f.id)}
                  whileHover={{ scale: 1.01, x: 4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  className={clsx(
                    'relative cursor-pointer transition-all duration-300 hover:z-10 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.12)] rounded-[10px] my-2 mx-3 border',
                    isActive
                      ? 'bg-white/90 dark:bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-[#d4af37]/40 dark:border-[#d4af37]/40'
                      : 'glass border-white/40 dark:border-white/10'
                  )}
                >
                                    <motion.div
                    initial={false}
                    animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ type: 'spring' as const, stiffness: 500, damping: 30 }}
                    className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#d4af37] to-[#aa8922] origin-top rounded-r-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                  />

                  <div className="p-4 pl-4">
                                        <div className="flex gap-3.5">
                                            <div className={clsx(
                        'w-[72px] h-[56px] rounded-[4px] overflow-hidden flex-shrink-0 border transition-all duration-300',
                        isActive
                          ? 'border-[#d4af37]/40 shadow-[0_4px_16px_rgba(212,175,55,0.15)]'
                          : 'border-gray-200/80 dark:border-gray-700 shadow-sm'
                      )}>
                        <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                      </div>

                                            <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <h3 className={clsx(
                                'font-semibold text-[13px] leading-tight truncate transition-colors',
                                isActive ? 'text-[#0a1128] dark:text-[#d4af37]' : 'text-[#0a1128] dark:text-white'
                              )}>{f.name}</h3>
                            </div>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 flex items-center gap-1 font-medium">
                              <MapPin className="w-3 h-3 flex-shrink-0" /><span className="truncate">{f.location}</span>
                            </p>
                          </div>
                          <motion.button
                            whileTap={{ scale: 1.3 }}
                            onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                            className="p-1 flex-shrink-0 rounded-[4px] hover:bg-rose-500/10 transition-colors"
                          >
                            <Heart className={clsx(
                              'w-4 h-4 transition-all duration-300',
                              favorites.has(f.id) ? 'fill-red-500 text-red-500' : 'text-gray-300 dark:text-gray-600 hover:text-red-400'
                            )} />
                          </motion.button>
                        </div>

                                                <div className="flex items-center gap-2 mt-2">
                          <span className="text-[12px] font-extrabold text-[#0b1b42] dark:text-[#d4af37]">{f.investment}</span>
                          <span className="w-px h-3 bg-gray-200 dark:bg-gray-700" />
                          <div className="flex items-center gap-0.5">
                            <TrendingUp size={10} className="text-emerald-500" />
                            <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">{f.roi}</span>
                          </div>
                          <span className="w-px h-3 bg-gray-200 dark:bg-gray-700" />
                          <div className="flex items-center gap-0.5">
                            <Calendar size={10} className="text-blue-500" />
                            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400">{f.breakeven}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                                        <div className="flex items-center justify-between mt-2.5 gap-2 pl-[84px]">
                      <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                        {f.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className={clsx('px-2 py-0.5 rounded-[4px] text-[9px] font-semibold border', tagColors[tag] || 'bg-gray-100 dark:bg-white/5 text-gray-500 border-gray-200/60 dark:border-white/10')}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 flex items-center gap-1 text-[10px] font-semibold px-3.5 py-1.5 rounded-[4px] bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] hover:from-[#d4af37] hover:via-[#bf953f] hover:to-[#a67c00] text-white shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] border border-[#f9df9f]/50 transition-all group whitespace-nowrap relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                        <span className="relative z-10 flex items-center gap-1">
                          Enquire <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {visibleCount < filtered.length && (
            <div className="px-5 py-8 flex justify-center ml-5">
              <motion.button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -1 }}
                className="flex items-center justify-center min-w-[140px] px-8 py-3 bg-[#0a1128] hover:bg-[#121c33] dark:bg-[#121c33] dark:hover:bg-[#1a2642] backdrop-blur-xl border border-[#0a1128]/10 dark:border-white/10 rounded-[4px] text-xs font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all uppercase tracking-widest disabled:opacity-80"
              >
                {isLoadingMore ? (
                  <div className="flex gap-1.5 items-center justify-center">
                    <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [-2, 2, -2] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }} />
                    <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [-2, 2, -2] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }} />
                    <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [-2, 2, -2] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} />
                  </div>
                ) : (
                  "Load More"
                )}
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
