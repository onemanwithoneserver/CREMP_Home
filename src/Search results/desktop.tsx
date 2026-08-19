import { useState } from 'react';
import {
  Heart,
  MapPin,
  Search,
  ChevronRight,
  ChevronDown,
  X,
  Star,
  TrendingUp,
  Calendar,
  Sparkles,
  Utensils,
  Coffee,
  Smartphone,
  Dumbbell,
  PawPrint,
  Store,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { franchises, type Franchise } from './data';

const getCategoryConfig = (category: string, size = 18) => {
  switch (category) {
    case 'Food & Beverage': 
      return { icon: <Utensils size={size} strokeWidth={2.5} />, colors: 'bg-rose-100 text-rose-500 dark:bg-rose-500/20' };
    case 'Coffee & Cafe': 
      return { icon: <Coffee size={size} strokeWidth={2.5} />, colors: 'bg-emerald-100 text-emerald-500 dark:bg-emerald-500/20' };
    case 'Technology': 
      return { icon: <Smartphone size={size} strokeWidth={2.5} />, colors: 'bg-blue-100 text-blue-500 dark:bg-blue-500/20' };
    case 'Health & Fitness': 
      return { icon: <Dumbbell size={size} strokeWidth={2.5} />, colors: 'bg-cyan-100 text-cyan-500 dark:bg-cyan-500/20' };
    case 'Pet Services': 
      return { icon: <PawPrint size={size} strokeWidth={2.5} />, colors: 'bg-orange-100 text-orange-500 dark:bg-orange-500/20' };
    default: 
      return { icon: <Store size={size} strokeWidth={2.5} />, colors: 'bg-gray-100 text-gray-500 dark:bg-gray-500/20' };
  }
};

/* ── marker colours ─────────────────────────────────────── */
const markerColors: Record<string, { bg: string; text: string; glow: string }> = {
  selected: { bg: 'bg-[#d4af37]', text: 'text-[#0b1b42]', glow: 'shadow-[0_0_18px_rgba(212,175,55,0.55)]' },
  high:     { bg: 'bg-[#0b1b42] dark:bg-[#d4af37]', text: 'text-white dark:text-[#0b1b42]', glow: 'shadow-[0_0_14px_rgba(11,27,66,0.35)]' },
  other:    { bg: 'bg-gray-400 dark:bg-gray-500', text: 'text-white', glow: '' },
};

/* ── tag colours ─────────────────────────────────────────── */
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


/* ── glassmorphic map popup ─────────────────────────────── */
function MapPopup({ franchise, onClose }: { franchise: Franchise; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.92, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 8, scale: 0.92, filter: 'blur(6px)' }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 bg-white/85 dark:bg-[#0b1b42]/85 backdrop-blur-2xl rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] border border-white/40 dark:border-white/10 p-4 min-w-[280px] overflow-hidden"
    >
      {/* top accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-2.5 right-2.5 w-6 h-6 flex items-center justify-center rounded-[4px] bg-gray-100/80 hover:bg-red-50 dark:bg-white/10 dark:hover:bg-red-900/30 text-gray-500 hover:text-red-500 transition-all backdrop-blur-md"
      >
        <X className="w-3.5 h-3.5" strokeWidth={2.5} />
      </button>

      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-[4px] overflow-hidden border border-white/30 dark:border-white/10 flex-shrink-0 shadow-md">
          <img src={franchise.logo} alt={franchise.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-[#0a1128] dark:text-white text-sm truncate">{franchise.name}</h4>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1 font-medium">
            <MapPin className="w-3 h-3 flex-shrink-0" /><span className="truncate">{franchise.location}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-extrabold text-[#d4af37]">{franchise.investment}</span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1 px-2 py-1 rounded-[4px] bg-emerald-500/10 border border-emerald-500/20">
          <TrendingUp size={11} className="text-emerald-500" />
          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">ROI {franchise.roi}</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-[4px] bg-gray-100 dark:bg-white/5 border border-gray-200/60 dark:border-white/10">
          <Calendar size={11} className="text-gray-500 dark:text-gray-400" />
          <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400">Est. {franchise.established}</span>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] hover:from-[#d4af37] hover:via-[#bf953f] hover:to-[#a67c00] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] border border-[#f9df9f]/50 py-2.5 rounded-[4px] transition-all group">
        Enquire Now <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/85 dark:bg-[#0b1b42]/85 rotate-45 border-r border-b border-white/40 dark:border-white/10 backdrop-blur-2xl" />
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   DESKTOP SEARCH RESULTS
   ════════════════════════════════════════════════════════════ */
export default function SearchResultsDesktop() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

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

  const filtered = franchises.filter(f => {
    return !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase()) || f.location.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="flex flex-row w-full h-full bg-white dark:bg-[#0b1b42] overflow-hidden font-sans transition-colors duration-300">

      {/* ───── MAP PANEL ───── */}
      <div className="w-[60%] h-full flex flex-col relative border-r border-gray-200/60 dark:border-gray-800 z-10 bg-white dark:bg-[#0b1b42]">


        {/* map area */}
        <div className="flex-1 relative bg-gradient-to-br from-[#eef2f6] via-[#e8edf4] to-[#dfe5ee] dark:from-[#0a1128] dark:via-[#0d1730] dark:to-[#0a1128] overflow-hidden">
          {/* floating search bar */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[85%] max-w-lg z-30">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search franchise name, industry, or location..."
                className="w-full pl-11 pr-4 py-3 bg-white/90 dark:bg-[#121c33]/90 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[4px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 focus:border-[#d4af37]/40 transition-all text-[#0a1128] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>

          {/* topo pattern */}
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

          {/* decorative road lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,120 Q 200,180 350,80 T 700,200 T 1100,100" fill="none" stroke="#64748b" strokeWidth="2.5" strokeDasharray="8 4" />
            <path d="M 50,300 Q 300,250 450,350 T 850,280 T 1200,400" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M 100,450 Q 250,500 500,400 T 900,500" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 8" />
          </svg>

          {/* markers */}
          {filtered.map((f, i) => {
            const isActive = hoveredCard === f.id || selectedMarker === f.id;
            const colors = markerColors[f.matchLevel];
            return (
              <motion.div
                key={`marker-${f.id}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.06, type: 'spring' as const, stiffness: 260, damping: 20 }}
                className="absolute"
                style={{ top: `${f.lat}%`, left: `${f.lng}%`, transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => setHoveredCard(f.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleMarkerClick(f.id)}
              >
                <div className={clsx('relative flex flex-col items-center cursor-pointer transition-transform duration-200', isActive ? 'scale-125 z-30' : 'scale-100 z-10')}>
                  {/* pulse ring */}
                  {isActive && (
                    <motion.div
                      className="absolute w-14 h-14 rounded-full border-2 border-[#d4af37]/40"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: [0.6, 1.2], opacity: [0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                  <div className={clsx(
                    'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-[2.5px] border-white dark:border-[#0b1b42]',
                    isActive
                      ? 'bg-[#d4af37] text-[#0b1b42] shadow-[0_0_20px_rgba(212,175,55,0.55)]'
                      : `${getCategoryConfig(f.category).colors} shadow-md`
                  )}>
                    {getCategoryConfig(f.category).icon}
                  </div>
                  {/* label */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="absolute -bottom-6 whitespace-nowrap bg-[#0a1128]/90 dark:bg-white/90 text-white dark:text-[#0a1128] text-[9px] font-bold px-2 py-0.5 rounded-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                      >
                        {f.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {selectedMarker === f.id && (
                    <MapPopup franchise={f} onClose={() => setSelectedMarker(null)} />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* legend */}
          <div className="absolute bottom-5 left-5 flex items-center gap-5 bg-white/80 dark:bg-[#121c33]/80 backdrop-blur-xl px-5 py-2.5 rounded-[4px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/40 dark:border-white/10">
            {[
              { label: 'Best Match', color: 'bg-[#d4af37]' },
              { label: 'High Match', color: 'bg-[#0b1b42] dark:bg-[#d4af37]' },
              { label: 'Other', color: 'bg-gray-400' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={clsx('w-3 h-3 rounded-full border-2 border-white dark:border-[#121c33]', item.color)} />
                <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>

          {/* zoom controls */}
          <div className="absolute bottom-5 right-5 flex flex-col gap-1.5">
            {['+', '−'].map((label) => (
              <button key={label} className="bg-white/80 dark:bg-[#121c33]/80 backdrop-blur-xl w-9 h-9 flex items-center justify-center rounded-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-white/40 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-[#d4af37] transition-colors text-lg font-medium">{label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ───── RESULTS PANEL ───── */}
      <div className="w-[40%] h-full flex flex-col bg-white dark:bg-[#0b1b42] overflow-hidden">

        {/* card list */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col">
            {filtered.map((f, i) => {
              const isActive = hoveredCard === f.id || selectedMarker === f.id;
              return (
                <motion.div
                  key={`card-${f.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, type: 'spring' as const, stiffness: 300, damping: 25 }}
                  onMouseEnter={() => setHoveredCard(f.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleMarkerClick(f.id)}
                  className={clsx(
                    'relative cursor-pointer transition-all duration-300 border-b',
                    isActive
                      ? 'bg-[#d4af37]/[0.04] dark:bg-[#d4af37]/[0.06] border-[#d4af37]/20'
                      : 'bg-white dark:bg-[#0b1b42] border-gray-100 dark:border-gray-800/60 hover:bg-gray-50/50 dark:hover:bg-white/[0.02]'
                  )}
                >
                  {/* gold accent bar */}
                  <motion.div
                    initial={false}
                    animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ type: 'spring' as const, stiffness: 500, damping: 30 }}
                    className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#d4af37] to-[#aa8922] origin-top rounded-r-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                  />

                  <div className="p-4 pl-5">
                    {/* top row: image + info */}
                    <div className="flex gap-4">
                      {/* image */}
                      <div className={clsx(
                        'w-20 h-16 rounded-[4px] overflow-hidden flex-shrink-0 border transition-all duration-300',
                        isActive
                          ? 'border-[#d4af37]/40 shadow-[0_4px_16px_rgba(212,175,55,0.15)]'
                          : 'border-gray-200/80 dark:border-gray-700 shadow-sm'
                      )}>
                        <img src={f.logo} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>

                      {/* info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className={clsx(
                              'font-extrabold text-[14px] leading-tight truncate transition-colors',
                              isActive ? 'text-[#0a1128] dark:text-[#d4af37]' : 'text-[#0a1128] dark:text-white'
                            )}>{f.name}</h3>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-1 font-medium">
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

                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-[13px] font-extrabold text-[#0b1b42] dark:text-[#d4af37]">{f.investment}</span>
                        </div>
                      </div>
                    </div>

                    {/* description */}
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-2.5 leading-relaxed line-clamp-1 font-medium">{f.description}</p>

                    {/* bottom row: badges + CTA */}
                    <div className="flex items-center justify-between mt-3 gap-3">
                      <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-emerald-500/10 border border-emerald-500/20">
                          <TrendingUp size={10} className="text-emerald-500" />
                          <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400">{f.roi}</span>
                        </div>
                        {f.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className={clsx('px-2 py-0.5 rounded-[4px] text-[9px] font-bold border', tagColors[tag] || 'bg-gray-100 dark:bg-white/5 text-gray-500 border-gray-200/60 dark:border-white/10')}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 flex items-center gap-1 text-[10px] font-bold px-4 py-2 rounded-[4px] bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] hover:from-[#d4af37] hover:via-[#bf953f] hover:to-[#a67c00] text-white shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] border border-[#f9df9f]/50 transition-all group whitespace-nowrap relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                        <span className="relative z-10 flex items-center gap-1">
                          Enquire Now <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* load more */}
          <div className="px-5 py-8 flex justify-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -1 }}
              className="flex items-center gap-2 px-8 py-3 bg-white/70 dark:bg-[#121c33]/70 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 rounded-[4px] text-xs font-bold text-[#0a1128] dark:text-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all uppercase tracking-widest"
            >
              <Sparkles size={14} className="text-[#d4af37]" />
              Load More
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
