import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { franchiseModelsData, type CostBreakdownItem } from "./data";
import { Info, MapPin, Maximize2, Users, Wallet, MousePointerClick } from "lucide-react";

const DonutChart = ({ data }: { data: CostBreakdownItem[]; totalValue: string }) => {
  const size = 260;
  const strokeWidth = 45;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const gap = 1.5;

  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<{ item: CostBreakdownItem, x: number, y: number } | null>(null);

  const chartData = useMemo(() => {
    let currentOffset = 0;
    return data.map((item) => {
      const segmentPercent = item.percentage;
      const rawSegmentLength = (segmentPercent / 100) * circumference;
      const gapLength = (gap / 100) * circumference;
      const segmentLength = Math.max(0, rawSegmentLength - gapLength);
      const offset = currentOffset;
      currentOffset += rawSegmentLength;
      
      return { ...item, segmentLength, offset };
    });
  }, [data, circumference]);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90 drop-shadow-xl z-10">
        {chartData.map((item, i) => (
          <motion.circle
            key={item.label}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={item.color}
            strokeWidth={strokeWidth}
            strokeDashoffset={-item.offset}
            strokeLinecap="butt"
            initial={{ strokeDasharray: `0 ${circumference}` }}
            animate={{ strokeDasharray: `${item.segmentLength} ${circumference}` }}
            transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onMouseMove={(e) => {
              if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setHoveredItem({ item, x: e.clientX - rect.left, y: e.clientY - rect.top });
              }
            }}
            onMouseLeave={() => setHoveredItem(null)}
          />
        ))}
      </svg>

      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute pointer-events-none bg-gray-900 text-white text-xs font-bold px-3 py-2.5 rounded shadow-2xl z-50 flex flex-col gap-1.5 whitespace-nowrap border border-gray-700"
            style={{ left: hoveredItem.x + 15, top: hoveredItem.y - 15 }}
          >
            <span className="flex items-center gap-2 text-gray-300">
              <hoveredItem.item.icon size={14} className="text-gray-400" /> 
              {hoveredItem.item.label}
            </span>
            <span className="text-[#d4af37] text-sm">
              {hoveredItem.item.amount} 
              <span className="text-gray-400 font-medium text-xs ml-1">({hoveredItem.item.percentage}%)</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FranchiseModelsDesktop() {
  const [activeModel, setActiveModel] = useState(
    franchiseModelsData.models.find((m) => m.id === "mall-outlet")?.id || franchiseModelsData.models[0].id
  );

  const selected = franchiseModelsData.models.find((m) => m.id === activeModel)!;

  return (
    <section className="w-full bg-background transition-colors duration-300 p-6 flex flex-col gap-8 font-sans overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bf953f" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#b38728" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-4 mb-2">
           <div className="flex items-center justify-center gap-3 w-full">
            <div className="flex items-center gap-1.5 overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-[1px] w-8 sm:w-24 bg-gradient-to-l from-[#d4af37] to-transparent"
              />
              <motion.div 
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-1.5 h-1.5 bg-[#d4af37]"
              />
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center"
            >
              {franchiseModelsData.sectionLabel}
            </motion.p>
            <div className="flex items-center gap-1.5 overflow-hidden">
              <motion.div 
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-1.5 h-1.5 bg-[#d4af37]"
              />
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-[1px] w-8 sm:w-24 bg-gradient-to-r from-[#d4af37] to-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full">
         <div className="flex gap-4 w-full justify-between items-stretch bg-transparent rounded-lg overflow-x-auto py-2">
            {franchiseModelsData.models.map((model) => {
              const isActive = model.id === activeModel;
              const Icon = model.icon;
              return (
                <button
                  key={model.id}
                  onClick={() => setActiveModel(model.id)}
                  className={`relative flex-1 flex flex-col items-center justify-center text-center px-4 py-4 rounded-xl border transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "bg-gradient-to-br from-primary to-primary-light border-accent shadow-lg shadow-accent/20 scale-[1.02] z-10"
                      : "bg-surface border-border hover:border-accent/50 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div 
                      layout
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? "bg-white/10" : "bg-surface-alt"
                      }`}
                    >
                      <Icon size={20} className={isActive ? "[stroke:url(#goldGradient)] dark:!stroke-[#0b162c]" : "text-gray-500"} />
                    </motion.div>
                    <span className={`font-bold text-[15px] ${isActive ? "text-white" : "text-primary"}`}>
                      {model.name}
                    </span>
                  </div>
                  <span className={`text-sm font-semibold tracking-wider ${isActive ? "text-accent-light" : "text-gray-500"}`}>
                    {model.priceRange}
                  </span>
                  <div className={`flex items-center gap-1.5 mt-2 text-sm font-medium ${isActive ? "text-gray-200" : "text-gray-400"}`}>
                    <Users size={14} /> {model.staffCount}
                  </div>
                </button>
              );
            })}
         </div>
      </div>

      <div className="relative grid grid-cols-12 gap-6 items-stretch mt-4">
        
        <div className="absolute top-1/2 left-0 w-full h-[1px] hidden lg:block -z-10 bg-gray-200 dark:bg-gray-800">
          <motion.div 
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 flex items-center -ml-32"
          >
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37] opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] shadow-[0_0_12px_4px_rgba(212,175,55,0.7)]" />
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-3 h-full relative z-10">
           <AnimatePresence mode="wait">
             <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="bg-surface-alt rounded-2xl border border-border p-6 flex flex-col h-full shadow-lg backdrop-blur-sm relative overflow-hidden"
             >
                <div className="absolute right-0 top-1/2 w-4 h-4 bg-accent/20 rounded-full blur-md -mr-2 hidden lg:block" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-md border border-accent/50">
                    <selected.icon size={24} className="[stroke:url(#goldGradient)] dark:!stroke-[#0b162c]" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-black text-primary leading-tight">
                      {selected.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mb-8 flex-1 relative">
                  <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-gray-300 dark:via-gray-700 to-transparent -z-10" />
                  
                  {[
                    { icon: Wallet, label: "INVESTMENT", value: selected.investment },
                    { icon: Maximize2, label: "AREA REQUIRED", value: selected.area },
                    { icon: Users, label: "STAFF NEEDED", value: `${selected.staffCount} members`, extra: Info },
                    { icon: MapPin, label: "IDEAL LOCATION", value: selected.location }
                  ].map((stat, i) => (
                    <motion.div 
                      key={stat.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center shrink-0 border-2 border-accent/30 z-10">
                         <stat.icon size={12} className="text-primary dark:text-accent-light" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">{stat.label}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[15px] font-bold text-primary leading-tight">{stat.value}</span>
                          {stat.extra && <stat.extra size={12} className="text-gray-400" />}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="w-full border border-accent/40 bg-primary rounded-xl p-5 flex flex-col items-center justify-center text-center mt-auto shadow-xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                   <span className="text-[10px] uppercase font-bold tracking-widest text-gray-300 dark:text-[#0b162c]/80 mb-1 z-10">
                     AVG. TOTAL INVESTMENT
                   </span>
                   <span className="text-2xl font-black text-white dark:text-[#0b162c] z-10">
                     {selected.avgTotal}
                   </span>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>

        <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center py-8 relative z-10">
           <AnimatePresence mode="wait">
             <motion.div
               key={selected.id}
               initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
               transition={{ duration: 0.5, type: "spring" }}
               className="relative"
             >
               <DonutChart data={selected.costBreakdown} totalValue={selected.avgTotal} />
             </motion.div>
           </AnimatePresence>
           
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8 }}
             className="flex items-center justify-center gap-2 mt-10"
           >
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
               Tap segments for detail
             </span>
             <motion.div
               animate={{ y: [0, -4, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             >
               <MousePointerClick size={16} className="text-accent drop-shadow-md" />
             </motion.div>
           </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-4 h-full relative z-10">
          <div className="bg-surface-alt rounded-2xl border border-border p-6 shadow-lg h-full flex flex-col relative overflow-hidden backdrop-blur-sm">
            <div className="absolute left-0 top-1/2 w-4 h-4 bg-accent/20 rounded-full blur-md -ml-2 hidden lg:block" />
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
               <span className="text-[11px] uppercase font-bold tracking-widest text-primary text-opacity-90">
                 COST COMPONENT
               </span>
               <span className="text-[11px] uppercase font-bold tracking-widest text-primary text-opacity-90">
                 AMOUNT • SHARE
               </span>
            </div>

            <div className="flex flex-col gap-6 flex-1 justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {selected.costBreakdown.map((item, i) => (
                    <div key={item.label} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: item.color }} />
                         <div className="w-9 h-9 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110">
                            <item.icon size={16} style={{ color: item.color }} />
                         </div>
                         <span className="text-sm font-bold text-primary">
                           {item.label}
                         </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                         <span className="text-[13px] font-black text-primary w-12 text-right">
                           {item.amount}
                         </span>
                         <div className="w-20 h-1.5 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden hidden sm:block">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.percentage}%` }}
                              transition={{ duration: 1, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                              className="h-full rounded-full" 
                              style={{ backgroundColor: item.color }} 
                            />
                         </div>
                         <span className="text-xs font-bold text-gray-500 w-8 text-right">
                           {item.percentage}%
                         </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

