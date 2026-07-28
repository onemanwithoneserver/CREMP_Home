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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white dark:bg-[#0a1128] rounded-full pointer-events-none" style={{ width: size - (strokeWidth * 2) - 6, height: size - (strokeWidth * 2) - 6, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <span className="text-xl font-black text-[#0b1b42] dark:text-white">{totalValue}</span>
        <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">avg. total</span>
      </div>

      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute pointer-events-none bg-gray-900 text-white text-[10px] font-bold px-2 py-2 rounded-lg shadow-xl z-50 flex flex-col gap-1 whitespace-nowrap border border-gray-800"
            style={{ left: hoveredItem.x, top: hoveredItem.y - 10, transform: 'translate(-50%, -100%)' }}
          >
            <span className="flex items-center gap-1.5 text-gray-300">
              <hoveredItem.item.icon size={12} className="text-gray-400" /> 
              {hoveredItem.item.label}
            </span>
            <span className="text-amber-400 text-[11px]">{hoveredItem.item.amount} <span className="text-gray-400 font-medium text-[9px] ml-1">({hoveredItem.item.percentage}%)</span></span>
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
    <section className="w-full bg-[#fcfdfd] dark:bg-[#0a1128] transition-colors duration-300 p-4 flex flex-col gap-5 font-sans">
      
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-3 mb-1.5">
           <div className="flex items-center gap-1">
             <div className="w-1 h-1 rounded-full bg-amber-400" />
             <div className="w-4 h-px bg-amber-400" />
           </div>
           <h2 className="text-[13px] font-black text-[#0b1b42] dark:text-white uppercase tracking-widest">
             {franchiseModelsData.sectionLabel}
           </h2>
           <div className="flex items-center gap-1">
             <div className="w-4 h-px bg-amber-400" />
             <div className="w-1 h-1 rounded-full bg-amber-400" />
           </div>
        </div>
        <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium px-4">
          {franchiseModelsData.subtitle}
        </p>
      </div>

      {/* Tabs Row (Scrollable) */}
      <div className="w-full overflow-hidden">
         <div className="flex gap-3 w-full overflow-x-auto scrollbar-hide py-2 px-1">
            {franchiseModelsData.models.map((model) => {
              const isActive = model.id === activeModel;
              const Icon = model.icon;
              return (
                <button
                  key={model.id}
                  onClick={() => setActiveModel(model.id)}
                  className={`shrink-0 flex flex-col items-center justify-center text-center px-4 py-3 rounded-xl border transition-all duration-300 w-[110px] ${
                    isActive
                      ? "bg-[#0b1b42] border-amber-400 shadow-md transform -translate-y-1"
                      : "bg-white dark:bg-[#0d1a3a] border-gray-100 dark:border-gray-800 shadow-sm"
                  }`}
                >
                   <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-1.5 ${
                     isActive ? "bg-[#1e3a8a] text-amber-400" : "bg-gray-50 dark:bg-[#1a2342] text-[#0b1b42] dark:text-gray-400"
                   }`}>
                     <Icon size={14} />
                   </div>
                   <span className={`font-bold text-[11px] mb-0.5 ${isActive ? "text-white" : "text-[#0b1b42] dark:text-gray-200"}`}>
                     {model.name}
                   </span>
                   <span className={`text-[9px] font-semibold tracking-wider ${isActive ? "text-gray-300" : "text-gray-500"}`}>
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
        <div className="bg-white dark:bg-[#0d1a3a] rounded-3xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col items-center justify-center shadow-sm">
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
             <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
               Tap segments for detail
             </span>
             <MousePointerClick size={12} className="text-amber-500" />
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
             className="bg-[#f8f9fc] dark:bg-[#0d1a3a] rounded-3xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col shadow-sm"
          >
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0b1b42] text-amber-400 flex items-center justify-center shadow-md">
                    <selected.icon size={18} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[15px] font-black text-[#0b1b42] dark:text-white leading-tight">
                      {selected.name}
                    </h3>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
                      OUTLET FORMAT
                    </span>
                  </div>
                </div>
                
                <div className="border border-amber-200 dark:border-amber-900/50 bg-white dark:bg-[#111827] rounded-lg px-3 py-1.5 flex flex-col items-end shadow-sm">
                   <span className="text-[8px] uppercase font-bold tracking-widest text-[#0b1b42] dark:text-gray-400">
                     AVG. TOTAL
                   </span>
                   <span className="text-sm font-black text-[#0b1b42] dark:text-white">
                     {selected.avgTotal}
                   </span>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-y-4 gap-x-2">
               <div className="flex items-start gap-2.5">
                 <div className="w-5 h-5 rounded-full bg-white dark:bg-[#1a2342] shadow-sm flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700 mt-0.5">
                    <Wallet size={10} className="text-[#0b1b42] dark:text-amber-400" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[8px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">INVESTMENT</span>
                   <span className="text-[11px] font-bold text-[#0b1b42] dark:text-white leading-tight">{selected.investment}</span>
                 </div>
               </div>
               
               <div className="flex items-start gap-2.5">
                 <div className="w-5 h-5 rounded-full bg-white dark:bg-[#1a2342] shadow-sm flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700 mt-0.5">
                    <Maximize2 size={10} className="text-[#0b1b42] dark:text-amber-400" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[8px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">AREA</span>
                   <span className="text-[11px] font-bold text-[#0b1b42] dark:text-white leading-tight">{selected.area}</span>
                 </div>
               </div>

               <div className="flex items-start gap-2.5">
                 <div className="w-5 h-5 rounded-full bg-white dark:bg-[#1a2342] shadow-sm flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700 mt-0.5">
                    <Users size={10} className="text-[#0b1b42] dark:text-amber-400" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[8px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">STAFF</span>
                   <div className="flex items-center gap-1">
                      <span className="text-[11px] font-bold text-[#0b1b42] dark:text-white leading-tight">{selected.staffCount}</span>
                      <Info size={10} className="text-gray-400" />
                   </div>
                 </div>
               </div>

               <div className="flex items-start gap-2.5">
                 <div className="w-5 h-5 rounded-full bg-white dark:bg-[#1a2342] shadow-sm flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700 mt-0.5">
                    <MapPin size={10} className="text-[#0b1b42] dark:text-amber-400" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[8px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">LOCATION</span>
                   <span className="text-[11px] font-bold text-[#0b1b42] dark:text-white leading-tight">{selected.location}</span>
                 </div>
               </div>
             </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom: Cost Breakdown List */}
        <div className="bg-white dark:bg-[#0d1a3a] rounded-3xl border border-gray-100 dark:border-gray-800 p-5 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100 dark:border-gray-800">
             <span className="text-[9px] uppercase font-bold tracking-widest text-[#0b1b42] dark:text-gray-300">
               COST COMPONENT
             </span>
             <span className="text-[9px] uppercase font-bold tracking-widest text-[#0b1b42] dark:text-gray-300">
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
                       <div className="w-7 h-7 rounded-lg bg-[#f8f9fc] dark:bg-[#1a2342] border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                          <item.icon size={12} style={{ color: item.color }} />
                       </div>
                       <span className="text-[11px] font-bold text-[#0b1b42] dark:text-gray-200">
                         {item.label}
                       </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                       <span className="text-[11px] font-black text-[#0b1b42] dark:text-white w-10 text-right">
                         {item.amount}
                       </span>
                       <span className="text-[9px] font-bold text-gray-400 w-6 text-right">
                         {item.percentage}%
                       </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <span className="text-xs font-bold text-[#0b1b42] dark:text-gray-300">
              Total (Average)
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                 key={selected.id}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 className="text-base font-black text-amber-500"
              >
                 {selected.totalAvgLabel}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
