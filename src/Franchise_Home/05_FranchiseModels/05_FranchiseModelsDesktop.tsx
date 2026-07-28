import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { franchiseModelsData, type CostBreakdownItem } from "./data";
import { Info, MapPin, Maximize2, Users, Wallet, MousePointerClick } from "lucide-react";

const DonutChart = ({ data, totalValue }: { data: CostBreakdownItem[]; totalValue: string }) => {
  const size = 260; // Size to match image
  const strokeWidth = 45; // Thicker stroke
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const gap = 1.5; // Gap between segments

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
              onMouseLeave={() => setHoveredItem(null)}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white dark:bg-[#0a1128] rounded-full pointer-events-none" style={{ width: size - (strokeWidth * 2) - 8, height: size - (strokeWidth * 2) - 8, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <span className="text-3xl font-black text-[#0b1b42] dark:text-white">{totalValue}</span>
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">avg. total</span>
      </div>

      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute pointer-events-none bg-gray-900 text-white text-xs font-bold px-3 py-2.5 rounded-xl shadow-xl z-50 flex flex-col gap-1.5 whitespace-nowrap border border-gray-800"
            style={{ left: hoveredItem.x + 15, top: hoveredItem.y - 15 }}
          >
            <span className="flex items-center gap-2 text-gray-300">
              <hoveredItem.item.icon size={14} className="text-gray-400" /> 
              {hoveredItem.item.label}
            </span>
            <span className="text-amber-400 text-sm">{hoveredItem.item.amount} <span className="text-gray-400 font-medium text-xs ml-1">({hoveredItem.item.percentage}%)</span></span>
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
    <section className="w-full bg-[#fcfdfd] dark:bg-[#0a1128] transition-colors duration-300 p-6 flex flex-col gap-6 font-sans">
      
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-6">
        <div className="flex items-center gap-4 mb-2">
           <div className="flex items-center gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
             <div className="w-8 h-px bg-amber-400" />
           </div>
           <h2 className="text-lg font-black text-[#0b1b42] dark:text-white uppercase tracking-widest">
             {franchiseModelsData.sectionLabel}
           </h2>
           <div className="flex items-center gap-1">
             <div className="w-8 h-px bg-amber-400" />
             <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
           </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          {franchiseModelsData.subtitle}
        </p>
      </div>

      {/* Tabs Row */}
      <div className="flex items-center gap-4 w-full">
         <span className="text-xs font-bold text-[#0b1b42] dark:text-gray-300 uppercase tracking-widest shrink-0 ml-2">
           SELECT OUTLET TYPE
         </span>
         
         <div className="flex gap-4 w-full justify-between items-stretch bg-transparent rounded-2xl overflow-x-auto scrollbar-hide py-2">
            {franchiseModelsData.models.map((model) => {
              const isActive = model.id === activeModel;
              const Icon = model.icon;
              return (
                <button
                  key={model.id}
                  onClick={() => setActiveModel(model.id)}
                  className={`flex-1 flex flex-col items-center justify-center text-center px-4 py-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-[#0b1b42] border-amber-400 shadow-md transform -translate-y-1"
                      : "bg-white dark:bg-[#0d1a3a] border-gray-100 dark:border-gray-800 hover:border-amber-200 dark:hover:border-gray-600 shadow-sm"
                  }`}
                >
                   <div className="flex items-center gap-3 mb-2">
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                       isActive ? "bg-[#1e3a8a] text-amber-400" : "bg-gray-50 dark:bg-[#1a2342] text-[#0b1b42] dark:text-gray-400"
                     }`}>
                       <Icon size={16} />
                     </div>
                     <span className={`font-bold text-[15px] ${isActive ? "text-white" : "text-[#0b1b42] dark:text-gray-200"}`}>
                       {model.name}
                     </span>
                   </div>
                   <span className={`text-[11px] font-semibold tracking-wider ${isActive ? "text-gray-300" : "text-gray-500"}`}>
                     {model.priceRange}
                   </span>
                   <div className={`flex items-center gap-1 mt-1 text-[11px] font-medium ${isActive ? "text-gray-400" : "text-gray-400"}`}>
                     <Users size={12} /> {model.staffCount}
                   </div>
                </button>
              );
            })}
         </div>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Summary Card */}
        <div className="col-span-12 lg:col-span-3 h-full">
           <AnimatePresence mode="wait">
             <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#f8f9fc] dark:bg-[#0d1a3a] rounded-3xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col h-full shadow-sm"
             >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#0b1b42] text-amber-400 flex items-center justify-center shadow-md border-2 border-white dark:border-[#1a2342]">
                    <selected.icon size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-black text-[#0b1b42] dark:text-white leading-tight">
                      {selected.name}
                    </h3>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
                      OUTLET FORMAT
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mb-8 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-[#1a2342] shadow-sm flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700">
                       <Wallet size={12} className="text-[#0b1b42] dark:text-amber-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">INVESTMENT</span>
                      <span className="text-[15px] font-bold text-[#0b1b42] dark:text-white leading-tight">{selected.investment}</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-[#1a2342] shadow-sm flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700">
                       <Maximize2 size={12} className="text-[#0b1b42] dark:text-amber-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">AREA REQUIRED</span>
                      <span className="text-[15px] font-bold text-[#0b1b42] dark:text-white leading-tight">{selected.area}</span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-[#1a2342] shadow-sm flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700">
                       <Users size={12} className="text-[#0b1b42] dark:text-amber-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">STAFF NEEDED</span>
                      <div className="flex items-center gap-1.5">
                         <span className="text-[15px] font-bold text-[#0b1b42] dark:text-white leading-tight">{selected.staffCount} members</span>
                         <Info size={12} className="text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-[#1a2342] shadow-sm flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700">
                       <MapPin size={12} className="text-[#0b1b42] dark:text-amber-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 mb-0.5">IDEAL LOCATION</span>
                      <span className="text-[15px] font-bold text-[#0b1b42] dark:text-white leading-tight">{selected.location}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full border border-amber-200 dark:border-amber-900/50 bg-white dark:bg-[#111827] rounded-xl p-4 flex flex-col items-center justify-center text-center mt-auto shadow-sm">
                   <span className="text-[9px] uppercase font-bold tracking-widest text-[#0b1b42] dark:text-gray-400 mb-1">
                     AVG. TOTAL INVESTMENT
                   </span>
                   <span className="text-2xl font-black text-[#0b1b42] dark:text-white">
                     {selected.avgTotal}
                   </span>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Center: Donut Chart */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center py-8">
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
           
           <div className="flex items-center justify-center gap-2 mt-8 animate-bounce">
             <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
               Tap segments for detail
             </span>
             <MousePointerClick size={14} className="text-amber-500" />
           </div>
        </div>

        {/* Right: Cost Breakdown List */}
        <div className="col-span-12 lg:col-span-4 h-full">
          <div className="bg-white dark:bg-[#0d1a3a] rounded-3xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
               <span className="text-[10px] uppercase font-bold tracking-widest text-[#0b1b42] dark:text-gray-300">
                 COST COMPONENT
               </span>
               <span className="text-[10px] uppercase font-bold tracking-widest text-[#0b1b42] dark:text-gray-300">
                 AMOUNT • SHARE
               </span>
            </div>

            <div className="flex flex-col gap-5 flex-1 justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  {selected.costBreakdown.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                         {/* Color Dot */}
                         <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                         {/* Icon Box */}
                         <div className="w-8 h-8 rounded-lg bg-[#f8f9fc] dark:bg-[#1a2342] border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                            <item.icon size={14} style={{ color: item.color }} />
                         </div>
                         <span className="text-xs font-bold text-[#0b1b42] dark:text-gray-200">
                           {item.label}
                         </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                         <span className="text-sm font-black text-[#0b1b42] dark:text-white w-10 text-right">
                           {item.amount}
                         </span>
                         {/* Progress bar line */}
                         <div className="w-16 h-1 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden hidden sm:block">
                            <div className="h-full rounded-full" style={{ width: `${item.percentage}%`, backgroundColor: item.color }} />
                         </div>
                         <span className="text-[10px] font-bold text-gray-400 w-8 text-right">
                           {item.percentage}%
                         </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <span className="text-sm font-bold text-[#0b1b42] dark:text-gray-300">
                Total (Average)
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                   key={selected.id}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="text-xl font-black text-amber-500"
                >
                   {selected.totalAvgLabel}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
