import { useState } from 'react';
import { Heart, MapPin, Map, Search, ChevronRight, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { franchises, type Franchise } from './data';

const markerColors: Record<string, { bg: string; text: string; glow: string }> = {
  selected: { bg: 'bg-[#d4af37]', text: 'text-[#0b1b42]', glow: 'shadow-[0_0_12px_rgba(212,175,55,0.5)]' },
  high: { bg: 'bg-[#0b1b42] dark:bg-[#d4af37]', text: 'text-white dark:text-[#0b1b42]', glow: 'shadow-[0_0_12px_rgba(11,27,66,0.3)]' },
  other: { bg: 'bg-gray-400 dark:bg-gray-500', text: 'text-white', glow: '' },
};

function MapPopup({ franchise, onClose }: { franchise: Franchise; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 bg-white dark:bg-[#121c33] rounded-[4px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-gray-700 p-4 min-w-[260px]"
    >
      <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
        <X className="w-3.5 h-3.5 text-gray-400" />
      </button>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-[4px] overflow-hidden border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#0a1128] flex-shrink-0">
          <img src={franchise.logo} alt={franchise.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-[#0a1128] dark:text-white text-sm">{franchise.name}</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"><MapPin className="w-3 h-3" />{franchise.location}</p>
        </div>
      </div>
      <p className="text-sm font-bold text-[#d4af37] mb-2">{franchise.investment}</p>
      <button className="text-xs font-semibold text-[#0b1b42] dark:text-[#d4af37] hover:underline flex items-center gap-1">
        View Details <ChevronRight className="w-3 h-3" />
      </button>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-[#121c33] rotate-45 border-r border-b border-gray-200 dark:border-gray-700" />
    </motion.div>
  );
}

export default function SearchResultsDesktop() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

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

  return (
    <div className="flex flex-row w-full h-full bg-white dark:bg-[#0b1b42] overflow-hidden font-sans transition-colors duration-300">
      <div className="w-[65%] h-full flex flex-col relative border-r border-gray-200 dark:border-gray-800 z-10 bg-white dark:bg-[#0b1b42]">
        <div className="flex-none px-6 py-5 bg-white dark:bg-[#0b1b42] border-b border-gray-200 dark:border-gray-800 flex flex-col gap-4 relative z-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#0a1128] dark:text-white tracking-tight">Search Results</h1>
            <span className="text-sm font-bold text-[#0b1b42] dark:text-[#d4af37]">{franchises.length} Matches</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search by franchise name, industry, or location..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#121c33] border border-gray-200 dark:border-gray-700 rounded-[4px] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1b42] dark:focus:ring-[#d4af37] focus:border-transparent transition-all text-[#0a1128] dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 relative bg-[#eef2f6] dark:bg-[#0a1128] overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              color: '#64748b'
            }}
          />

          <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,120 Q 200,180 350,80 T 700,200 T 1100,100" fill="none" stroke="#475569" strokeWidth="3" />
            <path d="M 50,300 Q 300,250 450,350 T 850,280 T 1200,400" fill="none" stroke="#475569" strokeWidth="2" />
            <path d="M 100,450 Q 250,500 500,400 T 900,500" fill="none" stroke="#475569" strokeWidth="2" />
          </svg>

          {franchises.map((f, i) => {
            const isActive = hoveredCard === f.id || selectedMarker === f.id;
            const colors = markerColors[f.matchLevel];
            return (
              <motion.div
                key={`marker-${f.id}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 260, damping: 20 }}
                className="absolute"
                style={{ top: `${f.lat}%`, left: `${f.lng}%`, transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => setHoveredCard(f.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleMarkerClick(f.id)}
              >
                <div className={`relative flex flex-col items-center cursor-pointer transition-transform duration-200 ${isActive ? 'scale-125 z-30' : 'scale-100 z-10'}`}>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${isActive ? 'bg-[#d4af37] text-[#0b1b42] shadow-[0_0_16px_rgba(212,175,55,0.5)]' : `${colors.bg} ${colors.text} ${colors.glow}`} border-2 border-white dark:border-[#0b1b42]`}>
                    <span className="text-xs font-extrabold">{i + 1}</span>
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

          <div className="absolute bottom-5 left-5 flex items-center gap-4 bg-white dark:bg-[#121c33] px-4 py-2 rounded-[4px] shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#d4af37] border border-white" />
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">Selected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#0b1b42] dark:bg-[#d4af37] border border-white dark:border-[#121c33]" />
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">High Match</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-gray-400 border border-white" />
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">Other Matches</span>
            </div>
          </div>

          <div className="absolute bottom-5 right-5 flex flex-col gap-1.5">
            <button className="bg-white dark:bg-[#121c33] w-8 h-8 flex items-center justify-center rounded-[4px] shadow-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-[#0b1b42] dark:hover:text-[#d4af37] transition-colors text-lg font-light">+</button>
            <button className="bg-white dark:bg-[#121c33] w-8 h-8 flex items-center justify-center rounded-[4px] shadow-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-[#0b1b42] dark:hover:text-[#d4af37] transition-colors text-lg font-light">−</button>
            <button className="bg-white dark:bg-[#121c33] w-8 h-8 flex items-center justify-center rounded-[4px] shadow-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-[#0b1b42] dark:hover:text-[#d4af37] transition-colors">
              <Map className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-[35%] h-full flex flex-col bg-white dark:bg-[#0b1b42] overflow-hidden">
        <div className="flex-none px-5 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <span className="text-sm font-bold text-[#0a1128] dark:text-white">{franchises.length} Franchise Opportunities</span>
          <button className="flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#0b1b42] dark:hover:text-[#d4af37] transition-colors">
            Sort by: <span className="font-bold text-[#0a1128] dark:text-white">Relevance</span> <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-4 grid grid-cols-2 gap-3">
            {franchises.map((f, i) => {
              const isActive = hoveredCard === f.id || selectedMarker === f.id;
              return (
                <motion.div
                  key={`card-${f.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 + 0.15 }}
                  onMouseEnter={() => setHoveredCard(f.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group bg-white dark:bg-[#121c33] rounded-[4px] border transition-all duration-200 cursor-pointer flex flex-col relative overflow-hidden ${
                    isActive ? 'border-[#d4af37] shadow-[0_4px_20px_rgba(212,175,55,0.15)] dark:shadow-[0_4px_24px_rgba(212,175,55,0.1)]' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm'
                  }`}
                >
                  <div className="p-3.5 pb-3 flex flex-col gap-2.5">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-[4px] overflow-hidden border border-gray-100 dark:border-gray-800 flex-shrink-0 bg-gray-50 dark:bg-[#0a1128]">
                        <img src={f.logo} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleFavorite(f.id); }}
                        className="p-1 rounded-full hover:bg-gray-50 dark:hover:bg-white/5 transition-colors -mt-0.5 -mr-0.5"
                      >
                        <Heart className={`w-4 h-4 transition-colors ${favorites.has(f.id) ? 'fill-red-500 text-red-500' : 'text-gray-300 dark:text-gray-600 hover:text-red-400'}`} />
                      </button>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a1128] dark:text-white text-sm leading-tight truncate">{f.name}</h3>
                      <p className="text-xs font-bold text-[#0b1b42] dark:text-[#d4af37] mt-0.5">{f.investment}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{f.location}</span>
                    </div>
                  </div>
                  <div className="px-3.5 pb-3.5">
                    <button className="w-full flex items-center justify-center gap-1 text-xs font-bold text-white bg-[#0b1b42] dark:bg-[#d4af37] dark:text-[#0b1b42] hover:bg-[#0a1128] dark:hover:bg-[#c9a030] py-2 rounded-[4px] transition-colors">
                      Apply Now <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className={`absolute top-0 left-0 w-[3px] h-full bg-[#d4af37] transition-transform duration-200 origin-top ${isActive ? 'scale-y-100' : 'scale-y-0'}`} />
                </motion.div>
              );
            })}
          </div>

          <div className="px-4 pb-6 pt-2 flex justify-center">
            <button className="flex items-center gap-1.5 px-6 py-2 border border-gray-200 dark:border-gray-700 rounded-[4px] text-sm font-semibold text-[#0a1128] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              Load More <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
