import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Heart,
  MapPin,
  Search,
  X,
  Star,
  TrendingUp,
  Calendar,
  Sparkles,
  Map,
} from 'lucide-react';
import { franchises, type Franchise } from './data';

/* ── marker styles ──────────────────────────────────────── */
const markerStyles: Record<string, string> = {
  selected: 'bg-[#d4af37] text-[#0b1b42]',
  high: 'bg-[#0b1b42] text-white dark:bg-[#d4af37] dark:text-[#0b1b42]',
  other: 'bg-gray-400 text-white dark:bg-gray-500',
};

/* ── tag colours ──────────────────────────────────────────── */
const tagColors: Record<string, string> = {
  'Top Rated':    'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20',
  'Trending':     'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/20',
  'Premium':      'bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/20',
  'Popular':      'bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/20',
  'Indian Brand': 'bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'New':          'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'High ROI':     'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/20',
  'Growing':      'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/20',
};

/* ── star rating ────────────────────────────────────────── */
function StarRating({ rating, count, size = 10 }: { rating: number; count: number; size?: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-px">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={size}
            className={clsx(
              s <= Math.floor(rating)
                ? 'fill-amber-400 text-amber-400'
                : s - 0.5 <= rating
                  ? 'fill-amber-400/50 text-amber-400'
                  : 'fill-gray-200 dark:fill-gray-700 text-gray-200 dark:text-gray-700'
            )}
          />
        ))}
      </div>
      <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400">{rating}</span>
      <span className="text-[9px] text-gray-400 dark:text-gray-500">({count})</span>
    </div>
  );
}

/* ── glassmorphic map popup ─────────────────────────────── */
function MapPopup({ franchise, onClose }: { franchise: Franchise; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 10, scale: 0.9, filter: 'blur(4px)' }}
      transition={{ type: 'spring' as const, stiffness: 400, damping: 28 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 bg-white/85 dark:bg-[#0b1b42]/85 backdrop-blur-2xl rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.2)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.5)] border border-white/40 dark:border-white/10 p-3.5 min-w-[240px] overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-lg bg-gray-100/80 hover:bg-red-50 dark:bg-white/10 dark:hover:bg-red-900/30 text-gray-500 hover:text-red-500 transition-all backdrop-blur-md"
      >
        <X className="w-3 h-3" strokeWidth={2.5} />
      </button>
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/30 dark:border-white/10 flex-shrink-0 shadow-md">
          <img src={franchise.logo} alt={franchise.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-[#0a1128] dark:text-white text-xs truncate">{franchise.name}</h4>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 flex items-center gap-0.5 font-medium">
            <MapPin className="w-2.5 h-2.5 flex-shrink-0" /><span className="truncate">{franchise.location}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs font-extrabold text-[#d4af37]">{franchise.investment}</span>
        <StarRating rating={franchise.rating} count={franchise.reviewCount} />
      </div>
      <div className="flex items-center gap-1.5 mb-2.5">
        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
          <TrendingUp size={9} className="text-emerald-500" />
          <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400">ROI {franchise.roi}</span>
        </div>
        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200/60 dark:border-white/10">
          <Calendar size={9} className="text-gray-500 dark:text-gray-400" />
          <span className="text-[9px] font-bold text-gray-600 dark:text-gray-400">Est. {franchise.established}</span>
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-1 text-[10px] font-bold text-white bg-gradient-to-r from-[#0b1b42] to-[#162a5e] dark:from-[#d4af37] dark:to-[#c19a2e] dark:text-[#0b1b42] py-2 rounded-lg transition-all group">
        Enquire Now <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
      </button>
      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/85 dark:bg-[#0b1b42]/85 rotate-45 border-r border-b border-white/40 dark:border-white/10 backdrop-blur-2xl" />
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   MOBILE SEARCH RESULTS
   ════════════════════════════════════════════════════════════ */
export default function SearchResultsMobile() {
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showMap, setShowMap] = useState(true);

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

  const filtered = franchises;

  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-[#0b1b42] overflow-hidden font-sans transition-colors duration-300 relative">

      {/* ───── STICKY HEADER ───── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring' as const, stiffness: 400, damping: 30 }}
        className="flex-none bg-white/90 dark:bg-[#0b1b42]/90 backdrop-blur-xl relative z-20"
      >
        {/* top bar */}
        <div className="px-4 pt-3 pb-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-xl text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors -ml-1"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.2} />
            </motion.button>
            <h1 className="text-base font-extrabold text-[#0a1128] dark:text-white tracking-tight">Discover</h1>
          </div>
        </div>

        {/* search bar */}
        <div className="px-4 pb-2.5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search franchise, industry, or location..."
              className="w-full pl-9 pr-3 py-2.5 bg-gray-50/80 dark:bg-[#121c33]/80 backdrop-blur-md border border-gray-200/80 dark:border-gray-700 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 focus:border-[#d4af37]/40 transition-all text-[#0a1128] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
            />
          </div>
        </div>
      </motion.div>

      {/* ───── MAP SECTION ───── */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '36vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
            className="w-full relative bg-gradient-to-br from-[#eef2f6] via-[#e8edf4] to-[#dfe5ee] dark:from-[#0a1128] dark:via-[#0d1730] dark:to-[#0a1128] overflow-hidden flex-shrink-0 border-y border-gray-200/60 dark:border-gray-800"
          >
            {/* topo pattern */}
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

            {/* zoom controls */}
            <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
              {['+', '−'].map((label) => (
                <motion.button
                  key={label}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/80 dark:bg-[#121c33]/80 backdrop-blur-xl w-7 h-7 flex items-center justify-center rounded-lg shadow-sm border border-white/40 dark:border-white/10 text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-[#d4af37] transition-colors"
                >{label}</motion.button>
              ))}
            </div>

            {/* markers */}
            {filtered.map((f, i) => {
              const isActive = activeCard === f.id || selectedMarker === f.id;
              return (
                <motion.div
                  key={`marker-${f.id}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.05, type: 'spring' as const, stiffness: 300, damping: 20 }}
                  className="absolute"
                  style={{ top: `${f.lat}%`, left: `${f.lng}%`, transform: 'translate(-50%, -50%)' }}
                  onClick={() => setSelectedMarker(selectedMarker === f.id ? null : f.id)}
                >
                  <motion.div
                    animate={isActive ? { scale: 1.35 } : { scale: 1 }}
                    transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
                    className={clsx('relative flex flex-col items-center cursor-pointer', isActive ? 'z-30' : 'z-10')}
                  >
                    {/* pulse ring */}
                    {isActive && (
                      <motion.div
                        className="absolute w-11 h-11 rounded-full border-2 border-[#d4af37]/40"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: [0.5, 1.2], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                    <div className={clsx(
                      'w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 border-2 border-white dark:border-[#0b1b42]',
                      isActive
                        ? 'bg-[#d4af37] text-[#0b1b42] shadow-[0_0_16px_rgba(212,175,55,0.5)]'
                        : markerStyles[f.matchLevel]
                    )}>
                      <span className="text-[10px] font-extrabold">{i + 1}</span>
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

            {/* legend */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-4 bg-white/85 dark:bg-[#121c33]/85 backdrop-blur-xl px-4 py-2 rounded-xl shadow-lg border border-white/40 dark:border-white/10">
              {[
                { label: 'Best Match', color: 'bg-[#d4af37]' },
                { label: 'High Match', color: 'bg-[#0b1b42] dark:bg-[#d4af37]' },
                { label: 'Other', color: 'bg-gray-400' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div className={clsx('w-2.5 h-2.5 rounded-full border-2 border-white dark:border-[#121c33]', item.color)} />
                  <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ───── CARD LIST ───── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex-1 overflow-y-auto scrollbar-hide bg-white dark:bg-[#0b1b42]"
      >
        <div className="flex flex-col">
          {filtered.map((f, i) => {
            const isActive = activeCard === f.id || selectedMarker === f.id;
            return (
              <motion.div
                key={`card-${f.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 + 0.15, type: 'spring' as const, stiffness: 350, damping: 28 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardTap(f.id)}
                className={clsx(
                  'relative cursor-pointer transition-all duration-300 border-b',
                  isActive
                    ? 'bg-[#d4af37]/[0.04] dark:bg-[#d4af37]/[0.06] border-[#d4af37]/20'
                    : 'bg-white dark:bg-[#0b1b42] border-gray-100 dark:border-gray-800/60'
                )}
              >
                {/* gold accent bar */}
                <motion.div
                  initial={false}
                  animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ type: 'spring' as const, stiffness: 500, damping: 30 }}
                  className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#d4af37] to-[#aa8922] origin-top rounded-r-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                />

                <div className="px-4 py-3.5 pl-5">
                  {/* top row */}
                  <div className="flex gap-3">
                    {/* image */}
                    <div className={clsx(
                      'w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border transition-all duration-300',
                      isActive
                        ? 'border-[#d4af37]/40 shadow-[0_4px_12px_rgba(212,175,55,0.15)]'
                        : 'border-gray-200/80 dark:border-gray-700 shadow-sm'
                    )}>
                      <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                    </div>

                    {/* info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1.5">
                        <div className="min-w-0">
                          <h3 className={clsx(
                            'font-extrabold text-[13px] leading-tight truncate transition-colors',
                            isActive ? 'text-[#0a1128] dark:text-[#d4af37]' : 'text-[#0a1128] dark:text-white'
                          )}>{f.name}</h3>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-0.5 font-medium">
                            <MapPin className="w-3 h-3 flex-shrink-0" /><span className="truncate">{f.location}</span>
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

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[12px] font-extrabold text-[#0b1b42] dark:text-[#d4af37]">{f.investment}</span>
                      </div>
                      <div className="mt-0.5">
                        <StarRating rating={f.rating} count={f.reviewCount} size={9} />
                      </div>
                    </div>
                  </div>

                  {/* bottom row: badges + CTA */}
                  <div className="flex items-center justify-between mt-2.5 gap-2">
                    <div className="flex items-center gap-1 flex-wrap min-w-0">
                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                        <TrendingUp size={9} className="text-emerald-500" />
                        <span className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400">{f.roi}</span>
                      </div>
                      {f.tags.slice(0, 1).map((tag) => (
                        <span key={tag} className={clsx('px-1.5 py-0.5 rounded-md text-[8px] font-bold border', tagColors[tag] || 'bg-gray-100 dark:bg-white/5 text-gray-500 border-gray-200/60 dark:border-white/10')}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      className={clsx(
                        'flex-shrink-0 flex items-center gap-0.5 text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shadow-sm',
                        isActive
                          ? 'bg-[#d4af37] text-[#0b1b42] shadow-[0_4px_12px_rgba(212,175,55,0.25)]'
                          : 'bg-gradient-to-r from-[#0b1b42] to-[#162a5e] dark:from-[#d4af37] dark:to-[#c19a2e] text-white dark:text-[#0b1b42]'
                      )}
                    >
                      Enquire <ChevronRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* load more */}
        <div className="px-4 py-6 flex justify-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2.5 bg-white/70 dark:bg-[#121c33]/70 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 rounded-xl text-[11px] font-bold text-[#0a1128] dark:text-white shadow-sm hover:shadow-md transition-all uppercase tracking-widest"
          >
            <Sparkles size={12} className="text-[#d4af37]" />
            Load More
            <ChevronDown className="w-3 h-3" />
          </motion.button>
        </div>
      </motion.div>

      {/* ───── FLOATING MAP TOGGLE ───── */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' as const, stiffness: 300, damping: 25 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => setShowMap(!showMap)}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-5 py-2.5 bg-[#0a1128]/90 dark:bg-white/90 backdrop-blur-xl text-white dark:text-[#0a1128] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/10 dark:border-gray-200/30"
      >
        <Map size={14} />
        <span className="text-[11px] font-bold tracking-wide">{showMap ? 'Hide Map' : 'Show Map'}</span>
      </motion.button>
    </div>
  );
}
