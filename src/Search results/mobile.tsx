import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Heart,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { franchises, type Franchise } from './data';

const markerStyles: Record<string, string> = {
  selected: 'bg-[#d4af37] text-[#0b1b42]',
  high: 'bg-[#0b1b42] text-white dark:bg-[#d4af37] dark:text-[#0b1b42]',
  other: 'bg-gray-400 text-white dark:bg-gray-500',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

function MapPopup({ franchise, onClose }: { franchise: Franchise; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 10, scale: 0.9, filter: 'blur(4px)' }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 bg-white/80 dark:bg-[#0b1b42]/80 backdrop-blur-2xl rounded-[4px] shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-3.5 min-w-[220px] overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-[2px] bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 dark:bg-gray-800 dark:hover:bg-red-900/50 transition-colors"
      >
        <X className="w-3 h-3" strokeWidth={2.5} />
      </button>
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-9 h-9 rounded-[4px] overflow-hidden border border-gray-200/80 dark:border-gray-700 bg-gray-50 dark:bg-[#121c33] flex-shrink-0 shadow-sm">
          <img src={franchise.logo} alt={franchise.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-[#0a1128] dark:text-white text-xs truncate">{franchise.name}</h4>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 flex items-center gap-0.5 font-medium">
            <MapPin className="w-2.5 h-2.5 flex-shrink-0" /><span className="truncate">{franchise.location}</span>
          </p>
        </div>
      </div>
      <p className="text-xs font-bold text-[#d4af37] mb-2">{franchise.investment}</p>
      <button className="text-[10px] font-bold text-[#0b1b42] dark:text-[#d4af37] uppercase tracking-wider flex items-center gap-0.5 hover:gap-1.5 transition-all">
        View Details <ChevronRight className="w-2.5 h-2.5" />
      </button>
      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/80 dark:bg-[#0b1b42]/80 rotate-45 border-r border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-2xl" />
    </motion.div>
  );
}

export default function SearchResultsMobile() {
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

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

  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-[#0b1b42] overflow-hidden font-sans transition-colors duration-300">

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="flex-none px-4 pt-3 pb-2.5 bg-white dark:bg-[#0b1b42] flex items-center justify-between gap-3 relative z-20"
      >
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 flex items-center justify-center rounded-[4px] text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors -ml-1"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2.2} />
          </motion.button>
          <h1 className="text-base font-bold text-[#0a1128] dark:text-white tracking-tight">Search Results</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex w-fit items-center gap-1 rounded-[2px] border border-[#D4AF37]/20 bg-white/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] shadow-sm backdrop-blur-xl dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/5 dark:text-[#D4AF37]">
            {franchises.length} Matches
          </span>
          <motion.button
            whileTap={{ scale: 0.9, rotate: 15 }}
            className="w-8 h-8 flex items-center justify-center rounded-[4px] text-gray-500 dark:text-gray-400 hover:text-[#0b1b42] dark:hover:text-[#d4af37] hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={2.2} />
          </motion.button>
        </div>
      </motion.div>

      <div className="flex-none px-4 pb-3 bg-white dark:bg-[#0b1b42]">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search by franchise name, industry, or location..."
            className="w-full pl-9 pr-3 py-2.5 bg-gray-50/90 dark:bg-[#121c33] backdrop-blur-sm border border-gray-200/80 dark:border-gray-700 rounded-[4px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all text-[#0a1128] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
          />
        </div>
      </div>

      <div className="w-full h-[38vh] relative bg-gray-50 dark:bg-[#0a1128] overflow-hidden flex-shrink-0 border-y border-gray-200/80 dark:border-gray-800">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            color: '#64748b'
          }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,80 Q 100,120 200,60 T 400,130" fill="none" stroke="#475569" strokeWidth="2.5" />
          <path d="M 30,180 Q 150,150 250,200 T 400,170" fill="none" stroke="#475569" strokeWidth="2" />
        </svg>

        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-white/80 dark:bg-[#121c33]/80 backdrop-blur-md w-7 h-7 flex items-center justify-center rounded-[4px] shadow-sm border border-gray-200/80 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-[#0b1b42] dark:hover:text-[#d4af37] transition-colors"
          >+</motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-white/80 dark:bg-[#121c33]/80 backdrop-blur-md w-7 h-7 flex items-center justify-center rounded-[4px] shadow-sm border border-gray-200/80 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-[#0b1b42] dark:hover:text-[#d4af37] transition-colors"
          >−</motion.button>
        </div>

        {franchises.map((f, i) => {
          const isActive = activeCard === f.id || selectedMarker === f.id;
          return (
            <motion.div
              key={`marker-${f.id}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute"
              style={{ top: `${f.lat}%`, left: `${f.lng}%`, transform: 'translate(-50%, -50%)' }}
              onClick={() => setSelectedMarker(selectedMarker === f.id ? null : f.id)}
            >
              <motion.div
                animate={isActive ? { scale: 1.35 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`relative flex flex-col items-center cursor-pointer ${isActive ? 'z-30' : 'z-10'}`}
              >
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

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-4 bg-white/90 dark:bg-[#121c33]/90 backdrop-blur-xl px-4 py-2 rounded-[4px] shadow-sm border border-gray-200/80 dark:border-white/10">
          {[
            { label: 'Selected', color: 'bg-[#d4af37]' },
            { label: 'High Match', color: 'bg-[#0b1b42] dark:bg-[#d4af37]' },
            { label: 'Other Matches', color: 'bg-gray-400' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className={clsx('w-2.5 h-2.5 rounded-full border border-white dark:border-[#121c33]', item.color)} />
              <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-none px-4 py-2.5 border-b border-gray-200/80 dark:border-gray-800 flex items-center justify-between bg-white dark:bg-[#0b1b42]">
        <span className="text-[11px] font-bold text-[#0a1128] dark:text-white uppercase tracking-wider">
          {franchises.length} Franchise Opportunities
        </span>
        <button className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
          Sort by: <span className="font-bold text-[#0a1128] dark:text-white ml-0.5">Relevance</span>
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex-1 overflow-y-auto scrollbar-hide bg-white dark:bg-[#0b1b42]"
      >
        <div className="flex flex-col">
          {franchises.map((f) => {
            const isActive = activeCard === f.id || selectedMarker === f.id;
            return (
              <motion.div
                key={`card-${f.id}`}
                variants={fadeInUp}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardTap(f.id)}
                className={clsx(
                  'flex items-center gap-3.5 px-4 py-3.5 border-b transition-all duration-200 relative cursor-pointer group',
                  isActive
                    ? 'bg-[#d4af37]/5 dark:bg-[#d4af37]/5 border-[#d4af37]/20 dark:border-[#d4af37]/20'
                    : 'bg-white dark:bg-[#0b1b42] border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-white/[0.02]'
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={clsx(
                    'w-12 h-12 rounded-[4px] overflow-hidden flex-shrink-0 shadow-sm border transition-all duration-200',
                    isActive
                      ? 'border-[#d4af37]/40 shadow-[0_0_8px_rgba(212,175,55,0.15)]'
                      : 'border-gray-200/80 dark:border-gray-700'
                  )}
                >
                  <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className={clsx(
                      'font-bold text-sm leading-tight truncate transition-colors',
                      isActive ? 'text-[#0a1128] dark:text-[#d4af37]' : 'text-[#0a1128] dark:text-white'
                    )}>{f.name}</h3>
                    <motion.button
                      whileTap={{ scale: 1.3 }}
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                      className="p-0.5 flex-shrink-0"
                    >
                      <Heart className={clsx(
                        'w-4 h-4 transition-all duration-300',
                        favorites.has(f.id)
                          ? 'fill-red-500 text-red-500 scale-110'
                          : 'text-gray-300 dark:text-gray-600 group-hover:text-gray-400'
                      )} />
                    </motion.button>
                  </div>
                  <p className="text-xs font-bold text-[#0b1b42] dark:text-[#d4af37] mt-0.5 tracking-tight">{f.investment}</p>
                  <div className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 font-medium">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{f.location}</span>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.92, x: 2 }}
                  className={clsx(
                    'flex-shrink-0 flex items-center gap-0.5 text-[11px] font-bold px-3.5 py-2 rounded-[4px] transition-all duration-200 whitespace-nowrap shadow-sm',
                    isActive
                      ? 'bg-[#d4af37] text-[#0b1b42] shadow-[0_4px_12px_rgba(212,175,55,0.25)]'
                      : 'bg-gradient-to-r from-[#16254c] to-[#0a1128] dark:from-[#d4af37] dark:to-[#aa8922] text-white dark:text-[#0b1b42] hover:shadow-md'
                  )}
                >
                  Apply Now <ChevronRight className="w-3 h-3" />
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    scaleY: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#d4af37] to-[#aa8922] origin-top rounded-r-full shadow-[0_0_8px_rgba(212,175,55,0.35)]"
                />
              </motion.div>
            );
          })}
        </div>

        <div className="px-4 py-6 flex justify-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-6 py-2.5 bg-white/70 dark:bg-[#121c33]/70 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 rounded-[4px] text-xs font-bold text-[#0a1128] dark:text-white shadow-sm hover:shadow-md transition-all uppercase tracking-wider"
          >
            Load More <ChevronDown className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
