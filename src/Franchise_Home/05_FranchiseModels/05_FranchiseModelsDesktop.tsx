import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Info, MapPin, Maximize2, Users, Wallet, Calendar, UserCheck, Clock, Target } from "lucide-react";
import { useMemo, useState } from "react";
import { franchiseModelsData, revenueROIData, type CostBreakdownItem } from "./data";

const DonutChartWithLegend = ({ data, totalValue }: { data: CostBreakdownItem[]; totalValue: string }) => {
    const size = 300;
    const strokeWidth = 80;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const gapLength = 1.5;

    const chartData = useMemo(() => {
        let currentOffset = 0;
        return data.map((item) => {
            const rawSegmentLength = (item.percentage / 100) * circumference;
            const segmentLength = Math.max(0, rawSegmentLength - gapLength);
            const offset = currentOffset;
            currentOffset += rawSegmentLength;

            return { ...item, segmentLength, offset, rawSegmentLength };
        });
    }, [data, circumference]);

    return (
        <div className="flex flex-col xl:flex-row items-center justify-center gap-8 w-full">
            <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
                <svg width={size} height={size} className="transform -rotate-90 overflow-visible">
                    {chartData.map((item, i) => {
                        const angle = ((item.offset + item.segmentLength / 2) / circumference) * 2 * Math.PI;
                        const textX = size / 2 + radius * Math.cos(angle);
                        const textY = size / 2 + radius * Math.sin(angle);
                        const shouldShowText = item.percentage >= 5;
                        
                        return (
                            <g key={`group-${item.label}`}>
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
                                    className="transition-opacity hover:opacity-90 cursor-pointer"
                                />
                                {shouldShowText && (
                                    <motion.foreignObject
                                        x={textX - 45}
                                        y={textY - 45}
                                        width={90}
                                        height={90}
                                        transform={`rotate(90, ${textX}, ${textY})`}
                                        className="pointer-events-none overflow-visible"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                                    >
                                        <div className="flex flex-col items-center justify-center w-full h-full text-white">
                                            <item.icon size={14} className="mb-0.5 opacity-90" />
                                            <span className="text-sm font-semibold leading-tight drop-shadow-md">{item.amount}</span>
                                            <span className="text-[10px] font-medium leading-tight opacity-90">{item.percentage}%</span>
                                        </div>
                                    </motion.foreignObject>
                                )}
                            </g>
                        );
                    })}
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white rounded-full pointer-events-none z-0 shadow-inner" style={{ width: size - (strokeWidth * 2), height: size - (strokeWidth * 2), left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                    <span className="text-3xl font-semibold text-[#0b1b42]">{totalValue}</span>
                    <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5 max-w-[80px] leading-tight">AVG. TOTAL INVESTMENT</span>
                </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-3 justify-center">
                {data.map((item, idx) => (
                    <div key={`legend-${idx}`} className="flex items-center gap-3 w-full">
                        <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                        <span className="text-sm font-semibold text-gray-600 w-40 truncate">{item.label}</span>
                        <span className="text-sm font-semibold text-[#0b1b42] text-right w-12">{item.amount}</span>
                        <span className="text-xs font-medium text-gray-500 text-right w-10">({item.percentage}%)</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function FranchiseModelsDesktop() {
    const [activeModel, setActiveModel] = useState(
        franchiseModelsData.models.find((m) => m.id === "mall-outlet")?.id || franchiseModelsData.models[0].id
    );
    const [isStaffTooltipOpen, setIsStaffTooltipOpen] = useState(false);

    const selected = franchiseModelsData.models.find((m) => m.id === activeModel)!;

    // Mapping ROI intents to specific colors from the image
    const getRoiColor = (intent: string) => {
        if (intent === "primary") return "text-white bg-gradient-to-br from-[#F97316] to-[#C2410C] shadow-md shadow-[#F97316]/30";
        if (intent === "success") return "text-white bg-gradient-to-br from-[#10B981] to-[#047857] shadow-md shadow-[#10B981]/30";
        if (intent === "info") return "text-white bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-md shadow-[#0EA5E9]/30";
        if (intent === "warning") return "text-white bg-gradient-to-br from-[#FBBF24] to-[#D97706] shadow-md shadow-[#FBBF24]/30";
        return "text-white bg-gray-400";
    };
    
    // Fallback payback icons if needed
    const paybackIcons = [Calendar, UserCheck, Clock, Target];

    return (
        <section className="w-full bg-[#f8f9fa] transition-colors duration-300 px-8 py-16 flex flex-col gap-6 overflow-hidden min-h-screen">
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="goldGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
                        <stop offset="0%" stopColor="#bf953f" />
                        <stop offset="50%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#b38728" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="w-full max-w-7xl mx-auto flex justify-center mb-2">
                <div className="flex w-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    {franchiseModelsData.models.map((model, _idx) => {
                        const isActive = model.id === activeModel;
                        const Icon = model.icon;
                        return (
                            <button
                                key={model.id}
                                onClick={() => setActiveModel(model.id)}
                                className={clsx(
                                    "flex-1 flex flex-col items-center justify-center py-4 px-2 border-r last:border-r-0 transition-all duration-300",
                                    isActive 
                                        ? "bg-[#0b1b42] border-[#d4af37] shadow-[inset_0_-4px_0_0_#d4af37]" 
                                        : "hover:bg-gray-50 border-gray-200"
                                )}
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <div className={clsx(
                                        "w-8 h-8 rounded-full flex items-center justify-center border",
                                        isActive ? "border-[#d4af37]/30 bg-white/10" : "border-gray-200 bg-gray-50"
                                    )}>
                                        <Icon size={14} className={isActive ? "text-[#d4af37]" : "text-gray-400"} />
                                    </div>
                                    <span className={clsx("font-semibold text-sm whitespace-nowrap", isActive ? "text-white" : "text-[#0b1b42]")}>
                                        {model.name}
                                    </span>
                                </div>
                                <span className={clsx("text-xs font-semibold", isActive ? "text-gray-300" : "text-gray-500")}>
                                    {model.priceRange}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-3 flex flex-col h-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl"
                        >
                            <div className="bg-[#0b1b42] p-5 flex flex-col items-start gap-4 shrink-0 rounded-t-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full border border-[#d4af37] bg-white/5 flex items-center justify-center shadow-inner">
                                        <selected.icon size={20} className="text-[#d4af37]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white leading-tight">
                                        {selected.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="bg-white p-6 flex-1 relative border border-t-0 border-gray-200 rounded-b-xl">
                                <div className="absolute left-[47px] top-10 bottom-10 w-px border-l-2 border-dashed border-gray-200 z-0" />
                                
                                <div className="flex flex-col gap-6 relative z-10">
                                    {[
                                        { icon: Wallet, label: "INVESTMENT", value: selected.investment },
                                        { icon: Maximize2, label: "AREA REQUIRED", value: selected.area },
                                        { icon: Users, label: "STAFF NEEDED", value: `${selected.staffCount} members`, extra: Info },
                                        { icon: MapPin, label: "IDEAL LOCATION", value: selected.location }
                                    ].map((stat, i) => (
                                        <div key={stat.label} className="flex items-start gap-5">
                                            <div className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center shrink-0 z-10 text-white ${
                                                    i === 0 ? 'bg-gradient-to-br from-[#14B8A6] to-[#0F766E] shadow-[#14B8A6]/30' : 
                                                    i === 1 ? 'bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] shadow-[#8B5CF6]/30' : 
                                                    i === 2 ? 'bg-gradient-to-br from-[#F43F5E] to-[#BE123C] shadow-[#F43F5E]/30' : 
                                                    'bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] shadow-[#3B82F6]/30'
                                                }`}>
                                                    <stat.icon size={18} />
                                            </div>
                                            <div className="flex flex-col pt-1">
                                                <span className="text-[10px] uppercase font-semibold tracking-widest text-gray-400 mb-1">{stat.label}</span>
                                                <div 
                                                    className="flex items-center gap-1.5 relative group/staff cursor-pointer"
                                                    onClick={() => stat.label === "STAFF NEEDED" && setIsStaffTooltipOpen(!isStaffTooltipOpen)}
                                                    onKeyDown={(e) => {
                                                        if (stat.label === "STAFF NEEDED" && (e.key === "Enter" || e.key === " ")) {
                                                            setIsStaffTooltipOpen(!isStaffTooltipOpen);
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    tabIndex={stat.label === "STAFF NEEDED" ? 0 : undefined}
                                                    aria-expanded={isStaffTooltipOpen}
                                                >
                                                    <span className="text-[15px] font-semibold text-[#0b1b42] leading-tight group-hover/staff:text-primary transition-colors">{stat.value}</span>
                                                    {stat.extra && <stat.extra size={12} className="text-gray-400 group-hover/staff:text-primary transition-colors" />}
                                                    
                                                    {stat.label === "STAFF NEEDED" && (
                                                        <div className={`absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-200 z-[9999] p-3 pointer-events-auto ${isStaffTooltipOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                                            <h5 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2 border-b border-gray-100 pb-1.5 text-center">Staff Requirements</h5>
                                                            <div className="flex flex-col gap-2 max-h-48 overflow-y-auto scrollbar-hide">
                                                                {selected.staffDetails?.map((staff, idx) => (
                                                                    <div key={idx} className="flex flex-col bg-gray-50/80 rounded-lg p-2.5">
                                                                        <div className="flex justify-between items-center mb-1">
                                                                            <span className="text-xs font-semibold text-[#0b1b42]">{staff.name}</span>
                                                                            <span className="text-[9px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">{staff.count}x</span>
                                                                        </div>
                                                                        <div className="flex gap-2 text-[9px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                                                            <span>{staff.type}</span>
                                                                            <span>•</span>
                                                                            <span>{staff.experience}</span>
                                                                        </div>
                                                                        <p className="text-[10px] font-medium text-gray-600 leading-snug">{staff.remarks}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="absolute top-1/2 -translate-y-1/2 -left-[6px] w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-white drop-shadow-sm" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>


                <div className="col-span-12 lg:col-span-6  p-6 flex flex-col">
                    <div className="flex items-center justify-start mb-8">
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#0b1b42]">
                            INVESTMENT BREAKDOWN
                        </span>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`chart-${selected.id}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="w-full"
                            >
                                <DonutChartWithLegend data={selected.costBreakdown} totalValue={selected.avgTotal} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-3 bg-white border border-gray-100 rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col">
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#0b1b42] mb-6">
                        ESTIMATED ROI BY YEAR
                    </span>

                    <div className="flex flex-col gap-4 flex-1 justify-center">
                        {revenueROIData.revenueCards.map((card: any) => {
                            const Icon = card.icon;
                            const colorClass = getRoiColor(card.intent);
                            return (
                                <div
                                    key={card.year}
                                    className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                                >
                                    <div className={clsx("w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm", colorClass)}>
                                        <Icon size={14} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                                            {card.year}
                                        </span>
                                        <p className="text-xl font-semibold text-[#0b1b42] tracking-tight">
                                            {card.range}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="col-span-12 bg-white border border-gray-100 rounded-2xl py-4 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col gap-4 mt-0">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#0b1b42]">
                            PAYBACK PERIOD
                        </span>
                        <span className="text-lg font-semibold text-[#0b1b42]">
                            {revenueROIData.paybackPeriod.title}
                        </span>
                    </div>

                    <div className="flex items-start justify-between w-full relative pt-2 pb-4">
                        <div className="absolute top-[28px] left-[5%] right-[5%] h-[3px] bg-gray-100 z-0 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-gradient-to-r from-[#10B981] via-[#0EA5E9] to-[#D946EF]"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                            />
                        </div>
                        
                        {revenueROIData.paybackPeriod.milestones.map((milestone: any, idx: number) => {
                            const Icon = paybackIcons[idx % paybackIcons.length];
                            
                            // Accent colors for the glowing effects and text
                            const accents = [
                                "#10B981", "#0EA5E9", "#F97316", "#D946EF"
                            ];
                            const accent = accents[idx % accents.length];
                            
                            const colors = [
                                "text-white bg-[#10B981] shadow-lg shadow-[#10B981]/30 border-none", 
                                "text-white bg-[#0EA5E9] shadow-lg shadow-[#0EA5E9]/30 border-none", 
                                "text-white bg-[#F97316] shadow-lg shadow-[#F97316]/30 border-none", 
                                "text-white bg-[#D946EF] shadow-lg shadow-[#D946EF]/30 border-none"
                            ];
                            const colorClass = colors[idx % colors.length];

                            return (
                                <motion.div 
                                    key={idx} 
                                    className="flex flex-col items-center gap-3 relative z-10 flex-1 group cursor-pointer"
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 + 0.3, type: "spring", stiffness: 100 }}
                                >
                                    <motion.div 
                                        className={clsx("w-14 h-14 rounded-full flex items-center justify-center relative", colorClass)}
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Icon size={20} strokeWidth={2.5} className="relative z-10 drop-shadow-sm" />
                                        <div 
                                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-ping" 
                                            style={{ backgroundColor: accent, animationDuration: '2s' }} 
                                        />
                                    </motion.div>
                                    
                                    <div className="flex flex-col items-center text-center">
                                        <span 
                                            className="text-sm font-semibold transition-colors duration-300 group-hover:scale-110" 
                                            style={{ color: accent }}
                                        >
                                            0{idx + 1}
                                        </span>
                                        <span className="text-[11px] font-semibold text-gray-400 uppercase max-w-[120px] group-hover:text-[#0b1b42] transition-colors duration-300 mt-1">
                                            {milestone.label}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
