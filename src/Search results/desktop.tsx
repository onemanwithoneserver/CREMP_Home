import { useState, useMemo } from 'react';
import {
  Heart,
  MapPin,
  Search,
  ChevronRight,
  ChevronDown,
  X,
  TrendingUp,
  Calendar,
  Sparkles,
  Utensils,
  Coffee,
  Smartphone,
  Dumbbell,
  PawPrint,
  Store,
  GraduationCap,
  Scissors,
  Car,
  Wrench,
  Building2,
  SlidersHorizontal,
  ArrowUpDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { franchises, categories, type Franchise } from './data';

/* ════════════════════════════════════════════════════════════
   CATEGORY CONFIG — icon + pastel colour per category
   ════════════════════════════════════════════════════════════ */
const categoryMeta: Record<string, { icon: React.ElementType; bg: string; text: string; glow: string }> = {
  'Food & Beverage':   { icon: Utensils,     bg: 'bg-rose-100 dark:bg-rose-500/20',      text: 'text-rose-500',    glow: 'shadow-[0_0_20px_rgba(244,63,94,0.4)]' },
  'Coffee & Cafe':     { icon: Coffee,       bg: 'bg-emerald-100 dark:bg-emerald-500/20', text: 'text-emerald-500', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.4)]' },
  'Technology':        { icon: Smartphone,   bg: 'bg-blue-100 dark:bg-blue-500/20',       text: 'text-blue-500',    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.4)]' },
  'Health & Fitness':  { icon: Dumbbell,     bg: 'bg-cyan-100 dark:bg-cyan-500/20',       text: 'text-cyan-500',    glow: 'shadow-[0_0_20px_rgba(6,182,212,0.4)]' },
  'Pet Services':      { icon: PawPrint,     bg: 'bg-orange-100 dark:bg-orange-500/20',   text: 'text-orange-500',  glow: 'shadow-[0_0_20px_rgba(249,115,22,0.4)]' },
  'Education':         { icon: GraduationCap,bg: 'bg-indigo-100 dark:bg-indigo-500/20',   text: 'text-indigo-500',  glow: 'shadow-[0_0_20px_rgba(99,102,241,0.4)]' },
  'Beauty & Wellness': { icon: Scissors,     bg: 'bg-pink-100 dark:bg-pink-500/20',       text: 'text-pink-500',    glow: 'shadow-[0_0_20px_rgba(236,72,153,0.4)]' },
  'Automotive':        { icon: Car,          bg: 'bg-sky-100 dark:bg-sky-500/20',         text: 'text-sky-500',     glow: 'shadow-[0_0_20px_rgba(14,165,233,0.4)]' },
  'Home Services':     { icon: Wrench,       bg: 'bg-teal-100 dark:bg-teal-500/20',       text: 'text-teal-500',    glow: 'shadow-[0_0_20px_rgba(20,184,166,0.4)]' },
};

const defaultMeta = { icon: Store, bg: 'bg-gray-100 dark:bg-gray-500/20', text: 'text-gray-500', glow: '' };
const getMeta = (cat: string) => categoryMeta[cat] || defaultMeta;

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

/* ── stagger animation variants ─────────────────────────── */
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 350, damping: 28 } },
};

/* ════════════════════════════════════════════════════════════
   MAP POPUP — glassmorphic with gold accent
   ════════════════════════════════════════════════════════════ */
function MapPopup({ franchise, onClose }: { franchise: Franchise; onClose: () => void }) {
  const meta = getMeta(franchise.category);
  const Icon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.92, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 8, scale: 0.92, filter: 'blur(6px)' }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 bg-white/85 dark:bg-[#0b1b42]/85 backdrop-blur-2xl rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] border border-white/40 dark:border-white/10 p-4 min-w-[300px] overflow-hidden"
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

      {/* metrics row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="flex flex-col items-center p-2 rounded-[4px] bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/10">
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Investment</span>
          <span className="text-[11px] font-extrabold text-[#d4af37] mt-0.5">{franchise.investment}</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-[4px] bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/10">
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">ROI</span>
          <span className="text-[11px] font-extrabold text-emerald-500 mt-0.5">{franchise.roi}</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-[4px] bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/10">
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Breakeven</span>
          <span className="text-[11px] font-extrabold text-blue-500 mt-0.5">{franchise.breakeven}</span>
        </div>
      </div>

      {/* category + CTA */}
      <div className="flex items-center justify-between gap-2">
        <div className={clsx('flex items-center gap-1.5 px-2 py-1 rounded-[4px] text-[10px] font-bold', meta.bg, meta.text)}>
          <Icon size={12} strokeWidth={2.5} />
          {franchise.category}
        </div>
        <button className="flex items-center gap-1 text-[10px] font-bold text-white bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] border border-[#f9df9f]/50 shadow-[0_0_15px_rgba(212,175,55,0.3)] px-3 py-1.5 rounded-[4px] transition-all group">
          Enquire <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

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
  const [activeCategory, setActiveCategory] = useState('All');

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

  const filtered = useMemo(() => {
    return franchises.filter(f => {
      const matchesSearch = !searchQuery ||
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex flex-row w-full h-full bg-white dark:bg-[#0b1b42] overflow-hidden font-sans transition-colors duration-300">

      {/* ───── MAP PANEL ───── */}
      <div className="w-[60%] h-full flex flex-col relative border-r border-gray-200/60 dark:border-gray-800 z-10 bg-white dark:bg-[#0b1b42]">

        {/* map area */}
        <div className="flex-1 relative bg-gradient-to-br from-[#eef2f6] via-[#e8edf4] to-[#dfe5ee] dark:from-[#0a1128] dark:via-[#0d1730] dark:to-[#0a1128] overflow-hidden">

          {/* floating search bar */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[88%] max-w-xl z-30 flex flex-col gap-2">
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

            {/* category filter pills */}
            <div className="flex w-full bg-white/70 dark:bg-[#0e172f]/70 backdrop-blur-xl rounded-[4px] p-1 border border-gray-200/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] relative gap-1 overflow-x-auto scrollbar-hide">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/5 pointer-events-none opacity-60" />
              {categories.map((cat) => {
                const isActive = cat === activeCategory;
                const meta = cat === 'All' ? null : getMeta(cat);
                const Icon = meta?.icon || SlidersHorizontal;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={clsx(
                      'relative flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] transition-all duration-300 z-10 text-[10px] font-bold whitespace-nowrap shrink-0',
                      !isActive && 'hover:bg-white/50 dark:hover:bg-white/10'
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryDesktop"
                        className="absolute inset-0 bg-[#0b1b42] dark:bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-[4px] shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.8 }}
                      >
                        <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
                      </motion.div>
                    )}
                    <Icon size={12} strokeWidth={2.5} className={clsx('relative z-10', isActive ? 'text-[#d4af37]' : meta?.text || 'text-gray-500 dark:text-gray-400')} />
                    <span className={clsx('relative z-10', isActive ? 'text-white dark:text-[#d4af37]' : 'text-[#0a1128] dark:text-gray-300')}>
                      {cat}
                    </span>
                  </button>
                );
              })}
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

          <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,120 Q 200,180 400,100 T 800,200" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="8 6" />
            <path d="M 50,300 Q 250,250 450,350 T 800,280" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 7" />
          </svg>

          {/* markers */}
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
                  {/* pulse ring */}
                  {isActive && (
                    <motion.div
                      className={clsx('absolute w-14 h-14 rounded-full border-2', `border-current ${meta.text} opacity-40`)}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: [0.5, 1.2], opacity: [0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                  <div className={clsx(
                    'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-[2.5px]',
                    isActive ? 'border-white dark:border-[#0b1b42]' : 'border-gray-200 dark:border-white/10',
                    isActive ? `${meta.bg} ${meta.text} ${meta.glow}` : 'bg-white text-gray-400 dark:bg-[#121c33] dark:text-gray-500 shadow-md'
                  )}>
                    <Icon size={18} strokeWidth={2.5} />
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

        {/* panel header — dark navy with gold accents */}
        <div className="flex-none bg-[#0b1b42] px-5 py-4 relative overflow-hidden border-b border-[#d4af37]/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', delay: 0.1 }}
                className="w-9 h-9 rounded-[4px] bg-white/5 border border-[#d4af37]/60 shadow-[0_0_12px_rgba(212,175,55,0.3)] backdrop-blur-md flex items-center justify-center text-[#d4af37] shrink-0"
              >
                <Building2 size={18} />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest leading-none mb-0.5">FRANCHISE MATCHES</span>
                <span className="text-lg font-bold text-white leading-tight">{filtered.length} Results</span>
              </div>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d4af37]/40 text-white text-[11px] font-semibold transition-all">
              <ArrowUpDown size={12} /> Sort
            </button>
          </div>
        </div>

        {/* card list with animated gold timeline */}
        <div className="flex-1 overflow-y-auto scrollbar-hide relative">
          {/* gold timeline */}
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37]/60 to-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.35)]" />
            <motion.div
              className="absolute -left-[3px] -translate-y-1/2 w-[8px] h-14 rounded-full bg-gradient-to-b from-transparent via-[#ffd700] to-transparent shadow-[0_0_16px_#ffd700]"
              animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {filtered.map((f) => {
              const isActive = hoveredCard === f.id || selectedMarker === f.id;
              const meta = getMeta(f.category);
              const CatIcon = meta.icon;
              return (
                <motion.div
                  key={`card-${f.id}`}
                  variants={fadeUp}
                  onMouseEnter={() => setHoveredCard(f.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleMarkerClick(f.id)}
                  whileHover={{ scale: 1.01, x: 4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  className={clsx(
                    'relative cursor-pointer transition-all duration-300 border-b ml-5',
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

                  {/* timeline dot */}
                  <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-[#d4af37] bg-white dark:bg-[#0b1b42] z-10 shadow-[0_0_6px_rgba(212,175,55,0.4)]" />

                  <div className="p-4 pl-4">
                    {/* top row: image + info */}
                    <div className="flex gap-3.5">
                      {/* image */}
                      <div className={clsx(
                        'w-[72px] h-[56px] rounded-[4px] overflow-hidden flex-shrink-0 border transition-all duration-300',
                        isActive
                          ? 'border-[#d4af37]/40 shadow-[0_4px_16px_rgba(212,175,55,0.15)]'
                          : 'border-gray-200/80 dark:border-gray-700 shadow-sm'
                      )}>
                        <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                      </div>

                      {/* info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <div className={clsx('w-5 h-5 rounded-[2px] flex items-center justify-center', meta.bg, meta.text)}>
                                <CatIcon size={11} strokeWidth={2.5} />
                              </div>
                              <h3 className={clsx(
                                'font-bold text-[13px] leading-tight truncate transition-colors',
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

                        {/* metrics row */}
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[12px] font-extrabold text-[#0b1b42] dark:text-[#d4af37]">{f.investment}</span>
                          <span className="w-px h-3 bg-gray-200 dark:bg-gray-700" />
                          <div className="flex items-center gap-0.5">
                            <TrendingUp size={10} className="text-emerald-500" />
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">{f.roi}</span>
                          </div>
                          <span className="w-px h-3 bg-gray-200 dark:bg-gray-700" />
                          <div className="flex items-center gap-0.5">
                            <Calendar size={10} className="text-blue-500" />
                            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">{f.breakeven}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* bottom row: tags + units + CTA */}
                    <div className="flex items-center justify-between mt-2.5 gap-2 pl-[84px]">
                      <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                        {f.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className={clsx('px-2 py-0.5 rounded-[4px] text-[9px] font-bold border', tagColors[tag] || 'bg-gray-100 dark:bg-white/5 text-gray-500 border-gray-200/60 dark:border-white/10')}>
                            {tag}
                          </span>
                        ))}
                        <span className="text-[9px] font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800/80 px-2 py-0.5 rounded-[2px] border border-gray-200 dark:border-gray-700/60">
                          {f.units.toLocaleString()} units
                        </span>
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 flex items-center gap-1 text-[10px] font-bold px-3.5 py-1.5 rounded-[4px] bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] hover:from-[#d4af37] hover:via-[#bf953f] hover:to-[#a67c00] text-white shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] border border-[#f9df9f]/50 transition-all group whitespace-nowrap relative overflow-hidden"
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

          {/* load more */}
          <div className="px-5 py-8 flex justify-center ml-5">
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
