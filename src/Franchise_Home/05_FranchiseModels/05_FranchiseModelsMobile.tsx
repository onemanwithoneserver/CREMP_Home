import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { franchiseModelsData, type CostBreakdownItem } from "./data";
import { Info, MapPin, Maximize2, Users, Wallet, MousePointerClick } from "lucide-react";

const DonutChart = ({ data, totalValue }: { data: CostBreakdownItem[]; totalValue: string }) => {
  const size = 200; // Smaller for mobile
  const strokeWidth = 35; 
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const gap = 1.5; 

  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<{ item: CostBreakdownItem, x: number, y: number } | null>(null);

  let currentOffset = 0;

  return (
    <div ref={containerRef} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90 drop-shadow-md">
        {data.map((item, i) => {
          const segmentPercent = item.percentage;
          const rawSegmentLength = (segmentPercent / 100) * circumference;
          const gapLength = (gap / 100) * circumference;
          const segmentLength = Math.max(0, rawSegmentLength - gapLength);
          
          const offset = currentOffset;
          currentOffset += rawSegmentLength; 

          return (
            <motion.circle
              key={item.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`0 ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              animate={{ strokeDasharray: `${segmentLength} ${circumference - segmentLength}` }}
              transition={{ duration: 0.8, delay: i * 0.05, type: "spring", bounce: 0.1 }}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onMouseMove={(e) => {
                if (containerRef.current) {
                  const rect = containerRef.current.getBoundingClientRect();
                  setHoveredItem({ item, x: e.clientX - rect.left, y: e.clientY - rect.top });
                }
              }}
              onTouchStart={(e) => {
                 if (containerRef.current) {
                  const rect = containerRef.current.getBoundingClientRect();
                  const touch = e.touches[0];
                  setHoveredItem({ item, x: touch.clientX - rect.left, y: touch.clientY - rect.top });
                }
              }}
              onMouseLeave={() => setHoveredItem(null)}
              onTouchEnd={() => setTimeout(() => setHoveredItem(null), 1500)}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white dark:bg-background rounded-full pointer-events-none" style={{ width: size - (strokeWidth * 2) - 6, height: size - (strokeWidth * 2) - 6, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <span className="text-xl font-black text-primary">{totalValue}</span>
        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5">avg. total</span>
      </div>

      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute pointer-events-none bg-gray-900 text-white text-xs font-bold px-2 py-2 rounded shadow-xl z-50 flex flex-col gap-1 whitespace-nowrap border border-gray-800"
            style={{ left: hoveredItem.x, top: hoveredItem.y - 10, transform: 'translate(-50%, -100%)' }}
          >
            <span className="flex items-center gap-1.5 text-gray-300">
              <hoveredItem.item.icon size={12} className="text-gray-400" /> 
              {hoveredItem.item.label}
            </span>
            <span className="text-[#d4af37] text-xs">{hoveredItem.item.amount} <span className="text-gray-400 font-medium text-[10px] ml-1">({hoveredItem.item.percentage}%)</span></span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FranchiseModelsMobile() {
  const [activeModel, setActiveModel] = useState(
    franchiseModelsData.models.find((m) => m.id === "mall-outlet")?.id || franchiseModelsData.models[0].id
  );

  const selected = franchiseModelsData.models.find((m) => m.id === activeModel)!;

  return (
    <section className="w-full bg-background transition-colors duration-300 p-4 flex flex-col gap-5 font-sans">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bf953f" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#b38728" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-3 mb-1.5">
           <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
            <div className="flex items-center gap-1.5">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
            </div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
              {franchiseModelsData.sectionLabel}
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
         <div className="flex gap-3 w-full overflow-x-auto scrollbar-hide py-2 px-1">
            {franchiseModelsData.models.map((model) => {
              const isActive = model.id === activeModel;
              const Icon = model.icon;
              return (
                <button
                  key={model.id}
                  onClick={() => setActiveModel(model.id)}
                  className={`shrink-0 flex flex-col items-center justify-center text-center px-4 py-3 rounded border transition-colors duration-300 w-[110px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-gradient-to-br from-primary to-primary-light border-accent shadow-lg shadow-accent/20 -translate-y-1"
                      : "bg-surface border-border shadow-sm"
                  }`}
                >
                   <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-1.5 ${
                     isActive ? "bg-white/10" : "bg-surface-alt"
                   }`}>
                     <Icon size={14} className="[stroke:url(#goldGradient)] dark:!stroke-[#0b162c]" />
                   </div>
                   <span className={`font-bold text-[11px] mb-0.5 ${isActive ? "text-white" : "text-primary"}`}>
                     {model.name}
                   </span>
                   <span className={`text-xs font-semibold tracking-wider ${isActive ? "text-gray-300" : "text-gray-500"}`}>
                     {model.priceRange}
                   </span>
                </button>
              );
            })}
         </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-4">
        
        {/* Top: Donut Chart */}
        <div className="bg-surface rounded border border-border p-6 flex flex-col items-center justify-center shadow-sm">
           <AnimatePresence mode="wait">
             <motion.div
               key={selected.id}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               transition={{ duration: 0.4 }}
               className="relative"
             >
               <DonutChart data={selected.costBreakdown} totalValue={selected.avgTotal} />
             </motion.div>
           </AnimatePresence>
           
           <div className="flex items-center justify-center gap-1.5 mt-5 animate-bounce">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
               Tap segments for detail
             </span>
             <MousePointerClick size={12} className="text-accent" />
           </div>
        </div>

        {/* Middle: Summary Card */}
        <AnimatePresence mode="wait">
          <motion.div
             key={selected.id}
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: 10 }}
             transition={{ duration: 0.3 }}
             className="bg-surface-alt rounded border border-border p-5 flex flex-col shadow-sm"
          >
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md border border-accent/50">
                    <selected.icon size={18} className="[stroke:url(#goldGradient)] dark:!stroke-[#0b162c]" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[15px] font-black text-primary leading-tight">
                      {selected.name}
                    </h3>
                  </div>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-y-4 gap-x-2">
               <div className="flex items-start gap-2.5">
                 <div className="w-5 h-5 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center shrink-0 border border-accent/30 mt-0.5 z-10">
                    <Wallet size={10} className="text-primary dark:text-accent-light" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">INVESTMENT</span>
                   <span className="text-sm font-bold text-primary leading-tight">{selected.investment}</span>
                 </div>
               </div>
               
               <div className="flex items-start gap-2.5">
                 <div className="w-5 h-5 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center shrink-0 border border-accent/30 mt-0.5 z-10">
                    <Maximize2 size={10} className="text-primary dark:text-accent-light" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">AREA</span>
                   <span className="text-sm font-bold text-primary leading-tight">{selected.area}</span>
                 </div>
               </div>

               <div className="flex items-start gap-2.5">
                 <div className="w-5 h-5 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center shrink-0 border border-accent/30 mt-0.5 z-10">
                    <Users size={10} className="text-primary dark:text-accent-light" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">STAFF</span>
                   <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-primary leading-tight">{selected.staffCount}</span>
                      <Info size={10} className="text-gray-500" />
                   </div>
                 </div>
               </div>

               <div className="flex items-start gap-2.5">
                 <div className="w-5 h-5 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center shrink-0 border border-accent/30 mt-0.5 z-10">
                    <MapPin size={10} className="text-primary dark:text-accent-light" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">LOCATION</span>
                   <span className="text-sm font-bold text-primary leading-tight">{selected.location}</span>
                 </div>
               </div>
             </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom: Cost Breakdown List */}
        <div className="bg-surface rounded border border-border p-5 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-border">
             <span className="text-xs uppercase font-bold tracking-widest text-primary text-opacity-90">
               COST COMPONENT
             </span>
             <span className="text-xs uppercase font-bold tracking-widest text-primary text-opacity-90">
               AMOUNT
             </span>
          </div>

          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {selected.costBreakdown.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                       <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                       <div className="w-7 h-7 rounded bg-surface-alt border border-border-light flex items-center justify-center shrink-0">
                          <item.icon size={12} style={{ color: item.color }} />
                       </div>
                       <span className="text-sm font-bold text-primary">
                         {item.label}
                       </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                       <span className="text-sm font-black text-primary w-10 text-right">
                         {item.amount}
                       </span>
                       <span className="text-xs font-bold text-gray-500 w-6 text-right">
                         {item.percentage}%
                       </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}




