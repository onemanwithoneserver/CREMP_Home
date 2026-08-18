import { useState } from 'react';
import { Heart, MapPin, Map, Search, ChevronRight, ChevronDown, X, ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { franchises, type Franchise } from './data';

const markerColors: Record<string, { bg: string; text: string }> = {
  selected: { bg: 'bg-[#d4af37]', text: 'text-[#0b1b42]' },
  high: { bg: 'bg-[#0b1b42]', text: 'text-white' },
  other: { bg: 'bg-gray-400', text: 'text-white' },
};

function MapPopup({ franchise, onClose }: { franchise: Franchise; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 bg-white dark:bg-[#121c33] rounded-[4px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-gray-700 p-3 min-w-[200px]"
    >
      <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
        <X className="w-3 h-3 text-gray-400" />
      </button>
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-8 h-8 rounded-[4px] overflow-hidden border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#0a1128] flex-shrink-0">
          <img src={franchise.logo} alt={franchise.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-[#0a1128] dark:text-white text-[11px] truncate">{franchise.name}</h4>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 flex items-center gap-0.5"><MapPin className="w-2.5 h-2.5 flex-shrink-0" /><span className="truncate">{franchise.location}</span></p>
        </div>
      </div>
      <p className="text-xs font-bold text-[#d4af37] mb-1">{franchise.investment}</p>
      <button className="text-[10px] font-semibold text-[#0b1b42] dark:text-[#d4af37] hover:underline flex items-center gap-0.5">
        View Details <ChevronRight className="w-2.5 h-2.5" />
      </button>
      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-[#121c33] rotate-45 border-r border-b border-gray-200 dark:border-gray-700" />
    </motion.div>
  );
}

export default function SearchResultsMobile() {
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) newFavs.delete(id);
      else newFavs.add(id);
      return newFavs;
    });
  };

  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-[#0b1b42] overflow-hidden font-sans transition-colors duration-300">
      <div className="flex-none px-4 pt-3 pb-2.5 bg-white dark:bg-[#0b1b42] flex items-center justify-between gap-3 relative z-20">
        <div className="flex items-center gap-2.5">
          <button className="p-1 -ml-1 text-[#0a1128] dark:text-white">
            <ArrowLeft className="w-5 h-5" strokeWidth={2} />
          </button>
          <h1 className="text-base font-bold text-[#0a1128] dark:text-white tracking-tight">Search Results</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-[#0b1b42] dark:text-[#d4af37] bg-gray-100 dark:bg-[#121c33] px-2.5 py-1 rounded-full">{franchises.length} Matches</span>
          <button className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-[#0b1b42] dark:hover:text-[#d4af37] transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-none px-4 pb-3 bg-white dark:bg-[#0b1b42] border-b border-gray-100 dark:border-gray-800">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search by franchise name, industry, or location..."
            className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-[#121c33] border border-gray-200 dark:border-gray-700 rounded-[4px] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1b42] dark:focus:ring-[#d4af37] focus:border-transparent transition-all text-[#0a1128] dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
      </div>

      <div className="w-full h-[38vh] relative bg-[#eef2f6] dark:bg-[#0a1128] overflow-hidden flex-shrink-0 border-b border-gray-200 dark:border-gray-800">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            color: '#64748b'
          }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,80 Q 100,120 200,60 T 400,130" fill="none" stroke="#475569" strokeWidth="2.5" />
          <path d="M 30,180 Q 150,150 250,200 T 400,170" fill="none" stroke="#475569" strokeWidth="2" />
        </svg>

        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          <button className="bg-white dark:bg-[#121c33] w-7 h-7 flex items-center justify-center rounded-[4px] shadow-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-light">+</button>
          <button className="bg-white dark:bg-[#121c33] w-7 h-7 flex items-center justify-center rounded-[4px] shadow-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-light">−</button>
        </div>

        {franchises.map((f, i) => {
          const isActive = activeCard === f.id || selectedMarker === f.id;
          const colors = markerColors[f.matchLevel];
          return (
            <motion.div
              key={`marker-${f.id}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.04, type: 'spring', stiffness: 260, damping: 20 }}
              className="absolute"
              style={{ top: `${f.lat}%`, left: `${f.lng}%`, transform: 'translate(-50%, -50%)' }}
              onClick={() => setSelectedMarker(selectedMarker === f.id ? null : f.id)}
            >
              <div className={`relative flex flex-col items-center cursor-pointer transition-transform duration-200 ${isActive ? 'scale-[1.3] z-30' : 'scale-100 z-10'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${isActive ? 'bg-[#d4af37] text-[#0b1b42] shadow-[0_0_12px_rgba(212,175,55,0.5)]' : `${colors.bg} ${colors.text}`} border-2 border-white dark:border-[#0b1b42]`}>
                  <span className="text-[10px] font-extrabold">{i + 1}</span>
                </div>
              </div>

              <AnimatePresence>
                {selectedMarker === f.id && (
                  <MapPopup franchise={f} onClose={() => setSelectedMarker(null)} />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-4 bg-white/95 dark:bg-[#121c33]/95 backdrop-blur-sm px-3 py-1.5 rounded-[4px] shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] border border-white" />
            <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">Selected</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0b1b42] dark:bg-[#d4af37] border border-white dark:border-[#121c33]" />
            <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">High Match</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-400 border border-white" />
            <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">Other Matches</span>
          </div>
        </div>
      </div>

      <div className="flex-none px-4 py-2.5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-white dark:bg-[#0b1b42]">
        <span className="text-xs font-bold text-[#0a1128] dark:text-white">{franchises.length} Franchise Opportunities</span>
        <button className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400">
          Sort by: <span className="font-bold text-[#0a1128] dark:text-white">Relevance</span> <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide bg-white dark:bg-[#0b1b42]">
        <div className="flex flex-col">
          {franchises.map((f, i) => {
            const isActive = activeCard === f.id || selectedMarker === f.id;
            return (
              <motion.div
                key={`card-${f.id}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 + 0.1 }}
                onClick={() => {
                  setActiveCard(activeCard === f.id ? null : f.id);
                  setSelectedMarker(f.id);
                }}
                className={`flex items-center gap-3.5 px-4 py-3.5 border-b border-gray-100 dark:border-gray-800 transition-colors duration-150 relative ${
                  isActive ? 'bg-[#d4af37]/5 dark:bg-[#d4af37]/5' : 'bg-white dark:bg-[#0b1b42]'
                }`}
              >
                <div className="w-12 h-12 rounded-[4px] overflow-hidden border border-gray-100 dark:border-gray-700 flex-shrink-0 bg-gray-50 dark:bg-[#0a1128]">
                  <img src={f.logo} alt={f.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-[#0a1128] dark:text-white text-sm leading-tight truncate">{f.name}</h3>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                      className="p-0.5 flex-shrink-0"
                    >
                      <Heart className={`w-4 h-4 transition-colors ${favorites.has(f.id) ? 'fill-red-500 text-red-500' : 'text-gray-300 dark:text-gray-600'}`} />
                    </button>
                  </div>
                  <p className="text-xs font-bold text-[#0b1b42] dark:text-[#d4af37] mt-0.5">{f.investment}</p>
                  <div className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{f.location}</span>
                  </div>
                </div>

                <button className="flex-shrink-0 flex items-center gap-0.5 text-[11px] font-bold text-white bg-[#0b1b42] dark:bg-[#d4af37] dark:text-[#0b1b42] px-3.5 py-2 rounded-[4px] transition-colors whitespace-nowrap">
                  Apply Now <ChevronRight className="w-3 h-3" />
                </button>

                <div className={`absolute left-0 top-0 w-[3px] h-full bg-[#d4af37] transition-transform duration-200 origin-top ${isActive ? 'scale-y-100' : 'scale-y-0'}`} />
              </motion.div>
            );
          })}
        </div>

        <div className="px-4 py-5 flex justify-center">
          <button className="flex items-center gap-1.5 px-6 py-2 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-[#0a1128] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            Load More <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
