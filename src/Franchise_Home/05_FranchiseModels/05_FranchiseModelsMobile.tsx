import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Info, MapPin, Maximize2, MousePointerClick, Users, Wallet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { franchiseModelsData, revenueROIData, type CostBreakdownItem } from "./data";
import Dropdown from "../../components/commonfiles/Dropdown";
import { CostBreakdownTable } from "./CostBreakdownTable";
import { SectionHeader } from "../components/SectionHeader";

const DonutChart = ({ data, totalValue }: { data: CostBreakdownItem[]; totalValue: string }) => {
    const size = 220;
    const strokeWidth = 55;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const gapLength = 1; 

    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredItem, setHoveredItem] = useState<{ item: CostBreakdownItem, x: number, y: number } | null>(null);

    let currentOffset = 0;

    return (
        <div ref={containerRef} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90 drop-shadow-md overflow-visible">
                {data.map((item, i) => {
                    const rawSegmentLength = (item.percentage / 100) * circumference;
                    const segmentLength = Math.max(0, rawSegmentLength - gapLength);

                    const offset = currentOffset;
                    currentOffset += rawSegmentLength;

                    const angle = ((offset + segmentLength / 2) / circumference) * 2 * Math.PI;
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
                                strokeDasharray={`0 ${circumference}`}
                                strokeDashoffset={-offset}
                                strokeLinecap="butt"
                                animate={{ strokeDasharray: `${segmentLength} ${circumference - segmentLength}` }}
                                transition={{ duration: 0.8, delay: i * 0.05, type: "spring", bounce: 0.1 }}
                                className="cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={(e) => {
                                    if (containerRef.current) {
                                        const rect = containerRef.current.getBoundingClientRect();
                                        setHoveredItem(prev => 
                                            prev?.item.label === item.label 
                                                ? null 
                                                : { item, x: e.clientX - rect.left, y: e.clientY - rect.top }
                                        );
                                    }
                                }}
                            />
                            {shouldShowText && (
                                <motion.foreignObject
                                    x={textX - 40}
                                    y={textY - 40}
                                    width={80}
                                    height={80}
                                    transform={`rotate(90, ${textX}, ${textY})`}
                                    className="pointer-events-none overflow-visible"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                                >
                                    <div className="flex flex-col items-center justify-center w-full h-full text-white drop-shadow-md">
                                        <item.icon size={10} className="mb-[1px] opacity-90" />
                                        <span className="text-xs font-semibold leading-tight mt-[1px]">{item.amount}</span>
                                    </div>
                                </motion.foreignObject>
                            )}
                        </g>
                    );
                })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-transparent rounded-full pointer-events-none" style={{ width: size - (strokeWidth * 2), height: size - (strokeWidth * 2), left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <span className="text-2xl font-semibold text-primary dark:text-white">{totalValue}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest mt-0.5">AVG. TOTAL</span>
            </div>

            <AnimatePresence>
                {hoveredItem && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute pointer-events-none bg-gray-900 text-white text-xs font-semibold px-2 py-2 rounded shadow-xl z-50 flex flex-col gap-1 whitespace-nowrap"
                        style={{ left: hoveredItem.x, top: hoveredItem.y - 10, transform: 'translate(-50%, -100%)' }}
                    >
                        <span className="flex items-center gap-1.5 text-gray-300">
                            <hoveredItem.item.icon size={12} className="text-gray-400" />
                            {hoveredItem.item.label}
                        </span>
                        <span className="text-[#d4af37] text-xs">{hoveredItem.item.amount} <span className="text-gray-400 font-medium text-xs ml-1">({hoveredItem.item.percentage}%)</span></span>
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
    const [viewType, setViewType] = useState<"chart" | "table">("chart");
    const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);

    const viewOptions = [
        { value: "chart", label: "Pie Chart View" },
        { value: "table", label: "Tabular View" }
    ];

    const selected = franchiseModelsData.models.find((m) => m.id === activeModel)!;

    const getRoiColor = (intent: string) => {
        if (intent === "primary") return "text-white bg-gradient-to-br from-[#F97316] to-[#C2410C] shadow-md shadow-[#F97316]/30";
        if (intent === "success") return "text-white bg-gradient-to-br from-[#10B981] to-[#047857] shadow-md shadow-[#10B981]/30";
        if (intent === "info") return "text-white bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-md shadow-[#0EA5E9]/30";
        if (intent === "warning") return "text-white bg-gradient-to-br from-[#FBBF24] to-[#D97706] shadow-md shadow-[#FBBF24]/30";
        return "text-white bg-gray-400";
    };




    const tabsRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (tabsRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scrollTabs = (direction: "left" | "right") => {
        if (tabsRef.current) {
            const scrollAmount = 150;
            tabsRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="w-full bg-background transition-colors duration-300 px-4 py-12 flex flex-col gap-6 ">
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="goldGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
                        <stop offset="0%" stopColor="#bf953f" />
                        <stop offset="50%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#b38728" />
                    </linearGradient>
                </defs>
            </svg>

            <SectionHeader 
                overline={franchiseModelsData.sectionLabel}
                title={franchiseModelsData.title}
                subtitle={franchiseModelsData.subtitle}
                align="center"
            />

            <div className="w-full overflow-hidden relative group flex items-center">
                {canScrollLeft && (
                    <button
                        onClick={() => scrollTabs("left")}
                        className="absolute left-0 z-10 h-full px-1 bg-gradient-to-r from-background via-background to-transparent flex items-center justify-start text-primary dark:text-white"
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}

                <div 
                    ref={tabsRef} 
                    onScroll={checkScroll}
                    className="flex gap-1 w-full overflow-x-auto scrollbar-hide py-1 px-1 scroll-smooth bg-gray-100 dark:bg-gray-800 rounded-[4px] shadow-inner border border-gray-200/60 dark:border-gray-700/60 mt-1"
                >
                    {franchiseModelsData.models.map((model) => {
                        const isActive = model.id === activeModel;
                        const Icon = model.icon;
                        return (
                            <button
                                key={model.id}
                                onClick={() => setActiveModel(model.id)}
                                className="shrink-0 relative flex flex-col items-center justify-center text-center px-2 py-2.5 rounded-[14px] transition-all duration-300 w-[85px] focus-visible:outline-none"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="mobileTabActive"
                                        className="absolute inset-0 bg-[#0b1b42] shadow-[0_4px_12px_rgba(11,27,66,0.25)] rounded-[14px]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <div className={clsx("relative z-10 w-7 h-7 rounded-full flex items-center justify-center mb-1 border transition-colors duration-300", isActive ? "bg-white/10 border-[#d4af37]/40 text-[#d4af37]" : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-400 shadow-sm")}>
                                    <Icon size={12} strokeWidth={isActive ? 2.5 : 2} />
                                </div>
                                <span className={clsx("relative z-10 font-semibold text-xs mb-0.5 transition-colors duration-300", isActive ? "text-white" : "text-[#0b1b42] dark:text-gray-200")}>
                                    {model.name}
                                </span>
                                <span className={clsx("relative z-10 text-[10px] font-semibold tracking-wider transition-colors duration-300", isActive ? "text-gray-300" : "text-gray-500 dark:text-gray-400")}>
                                    {model.priceRange}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {canScrollRight && (
                    <button
                        onClick={() => scrollTabs("right")}
                        className="absolute right-0 z-10 h-full px-1 bg-gradient-to-l from-background via-background to-transparent flex items-center justify-end text-primary dark:text-white"
                    >
                        <ChevronRight size={20} />
                    </button>
                )}
            </div>

            <div className="flex flex-col gap-4">

                <div className=" p-4 flex flex-col items-center justify-center ">
                    <div className="w-full flex justify-center mb-4 z-50">
                        <div className="w-40">
                            <Dropdown
                                options={viewOptions}
                                value={viewType}
                                onChange={(val) => setViewType(val as "chart" | "table")}
                                size="sm"
                            />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {viewType === "chart" ? (
                            <motion.div
                                key={`chart-${selected.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative flex flex-col items-center"
                            >
                                <DonutChart data={selected.costBreakdown} totalValue={selected.avgTotal} />
                                <div className="flex items-center justify-center gap-1.5 mt-5 animate-bounce">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                                        Tap segments for detail
                                    </span>
                                    <MousePointerClick size={12} className="text-accent" />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={`table-${selected.id}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <CostBreakdownTable data={selected.costBreakdown} totalValue={selected.avgTotal} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className=" rounded border-none p-2 flex flex-col"
                    >
                       {/*  <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md border-none">
                                    <selected.icon size={18} className="[stroke:url(#goldGradient)] dark:!stroke-[#0b1b42]" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[15px] font-semibold text-primary leading-tight">
                                        {selected.name}
                                    </h3>
                                </div>
                            </div>
                        </div> */}

                        <div className="grid grid-cols-2 gap-3 mt-4">
                            {[
                                { icon: Wallet, label: "INVESTMENT", value: selected.investment },
                                { icon: Maximize2, label: "AREA", value: selected.area },
                                { icon: Users, label: "STAFF", value: `${selected.staffCount} members`, extra: Info },
                                { icon: MapPin, label: "LOCATION", value: selected.location }
                            ].map((stat, i) => (
                                <div 
                                    key={stat.label} 
                                    className="flex flex-col items-start gap-2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 text-white ${
                                                i === 0 ? 'bg-gradient-to-br from-[#10B981] to-[#047857] shadow-lg shadow-[#10B981]/30' : 
                                                i === 1 ? 'bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] shadow-lg shadow-[#8B5CF6]/30' : 
                                                i === 2 ? 'bg-gradient-to-br from-[#F43F5E] to-[#BE123C] shadow-lg shadow-[#F43F5E]/30' : 
                                                'bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-lg shadow-[#0EA5E9]/30'
                                            }`}>
                                                <stat.icon size={14} strokeWidth={2.5} />
                                        </div>
                                        <span className="text-[12px] uppercase font-semibold text-gray-600 mb-0.5">{stat.label}</span>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-[13px] font-semibold text-[#0b1b42] dark:text-gray-100 leading-tight truncate">{stat.value}</span>
                                        {stat.extra && (
                                            <button 
                                                onClick={() => stat.label === "STAFF" && setIsStaffModalOpen(true)}
                                                className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20 shrink-0 hover:bg-primary/20 transition-colors"
                                            >
                                                <stat.extra size={12} strokeWidth={2.5} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="rounded border-none p-2  flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-1 border-b border-border">
                        <span className="text-xs uppercase font-semibold tracking-widest text-primary dark:text-white font-semibold">
                            {revenueROIData.sectionLabel}
                        </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1 w-full mt-1">
                        {revenueROIData.revenueCards.map((card: any) => {
                            const Icon = card.icon;
                            return (
                                <div
                                    key={card.year}
                                    className="rounded-[4px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-3 bg-white flex flex-col justify-between"
                                >
                                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-3">
                                        {card.year}
                                    </span>
                                    
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 w-full">
                                        <div className={clsx("w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm", getRoiColor(card.intent))}>
                                            <Icon size={12} strokeWidth={2.5} />
                                        </div>
                                        <span className="text-[12px] sm:text-[14px] font-semibold text-[#0b1b42] tracking-tighter">
                                            {card.range}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-1 pt-3 border-t border-border flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs uppercase font-semibold tracking-widest text-[#d4af37] font-semibold">
                                {revenueROIData.paybackPeriod.sectionLabel}
                            </span>
                            <span className="text-sm font-semibold text-[#0b1b42] dark:text-white">
                                {revenueROIData.paybackPeriod.title}
                            </span>
                        </div>

                        <div className="flex items-start justify-between w-full relative pt-2 pb-1 px-1">
                            <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-gray-100 dark:bg-slate-800 z-0 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-gradient-to-r from-[#10B981] via-[#0EA5E9] to-[#D946EF]"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                                />
                            </div>
                            
                            {revenueROIData.paybackPeriod.milestones.map((milestone: any, idx: number) => {
                                const Icon = milestone.icon;
                                
                                // Accent colors for the glowing effects and text
                                const accents = [
                                    "#10B981", "#0EA5E9", "#F97316", "#D946EF"
                                ];
                                const accent = accents[idx % accents.length];
                                
                                const colors = [
                                    "text-white bg-[#10B981] shadow-md shadow-[#10B981]/30 border-none", 
                                    "text-white bg-[#0EA5E9] shadow-md shadow-[#0EA5E9]/30 border-none", 
                                    "text-white bg-[#F97316] shadow-md shadow-[#F97316]/30 border-none", 
                                    "text-white bg-[#D946EF] shadow-md shadow-[#D946EF]/30 border-none"
                                ];
                                const colorClass = colors[idx % colors.length];

                                return (
                                    <motion.div 
                                        key={idx} 
                                        className="flex flex-col items-center gap-1.5 relative z-10 flex-1 group"
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.15 + 0.3, type: "spring", stiffness: 120 }}
                                    >
                                        <motion.div 
                                            className={clsx("w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center relative", colorClass)}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon size={14} strokeWidth={2.5} className="relative z-10 drop-shadow-sm" />
                                            <div 
                                                className="absolute inset-0 rounded-full opacity-0 animate-[ping_3s_infinite]" 
                                                style={{ backgroundColor: accent }} 
                                            />
                                        </motion.div>
                                        
                                        <div className="flex flex-col items-center text-center mt-0.5">
                                            <span 
                                                className="text-[10px] font-semibold" 
                                                style={{ color: accent }}
                                            >
                                                0{idx + 1}
                                            </span>
                                            <span className="text-[8px] sm:text-[9px] font-semibold text-gray-500 dark:text-gray-400 uppercase leading-tight max-w-[60px] sm:max-w-[80px]">
                                                {milestone.label}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isStaffModalOpen && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
                            onClick={() => setIsStaffModalOpen(false)}
                        >
                            <motion.div 
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="w-full max-w-xs bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-5 relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button 
                                    onClick={() => setIsStaffModalOpen(false)}
                                    className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <h5 className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-100 dark:border-gray-700 pb-2 text-center">
                                    Staff Requirements
                                </h5>
                                <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-1 scrollbar-hide">
                                    {selected.staffDetails?.map((staff, idx) => (
                                        <div key={idx} className="flex flex-col bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="text-[13px] font-bold text-[#0b1b42] dark:text-white">{staff.name}</span>
                                                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{staff.count}x</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                                <span>{staff.type}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                                                <span>{staff.experience}</span>
                                            </div>
                                            <p className="text-[11px] font-medium text-gray-600 dark:text-gray-300 leading-snug">{staff.remarks}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
