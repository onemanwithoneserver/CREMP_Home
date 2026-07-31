import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Info, MapPin, Maximize2, MousePointerClick, Users, Wallet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { revenueROIData } from "../06_RevenueROI/data";
// removed theme imports
import { franchiseModelsData, type CostBreakdownItem } from "./data";
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
                                        <span className="text-xs font-black leading-tight mt-[1px]">{item.amount}</span>
                                    </div>
                                </motion.foreignObject>
                            )}
                        </g>
                    );
                })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-transparent rounded-full pointer-events-none" style={{ width: size - (strokeWidth * 2), height: size - (strokeWidth * 2), left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <span className="text-2xl font-black text-primary dark:text-white">{totalValue}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mt-0.5">AVG. TOTAL</span>
            </div>

            <AnimatePresence>
                {hoveredItem && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute pointer-events-none bg-gray-900 text-white text-xs font-bold px-2 py-2 rounded shadow-xl z-50 flex flex-col gap-1 whitespace-nowrap"
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

    const activeMilestone = revenueROIData.paybackPeriod.milestones.find(m => m.status === "active")?.label || "";
    const [selectedMilestone, setSelectedMilestone] = useState<string>(activeMilestone);

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
        <section className="w-full bg-background transition-colors duration-300 p-2 flex flex-col gap-2 ">
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
                    className="flex gap-2 w-full overflow-x-auto scrollbar-hide py-2 px-1 scroll-smooth"
                >
                    {franchiseModelsData.models.map((model) => {
                        const isActive = model.id === activeModel;
                        const Icon = model.icon;
                        return (
                            <button
                                key={model.id}
                                onClick={() => setActiveModel(model.id)}
                                className={`shrink-0 flex flex-col items-center justify-center text-center px-2 py-2 rounded border transition-colors duration-300 w-[85px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:ring-offset-2 ${isActive
                                        ? "bg-gradient-to-br from-primary to-primary-light border-accent shadow-glow-accent -translate-y-1"
                                        : "bg-surface border-transparent shadow-elevation-1"
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-1.5 ${isActive ? "bg-white/10" : "bg-surface-alt"
                                    }`}>
                                    <Icon size={12} className={isActive ? "text-[#d4af37] dark:text-[#0a1128]" : "text-gray-500"} />
                                </div>
                                <span className={`font-bold text-xs mb-0.5 ${isActive ? "text-white" : "text-primary"}`}>
                                    {model.name}
                                </span>
                                <span className={`text-xs font-semibold tracking-wider ${isActive ? "text-gray-300" : "text-gray-500"}`}>
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

                <div className="bg-surface rounded border-none p-4 flex flex-col items-center justify-center shadow-elevation-1">
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
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
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
                        className="bg-surface-alt rounded border-none p-5 flex flex-col shadow-elevation-1"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md border-none">
                                    <selected.icon size={18} className="[stroke:url(#goldGradient)] dark:!stroke-[#0a1128]" />
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
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#0F766E] text-white shadow-md shadow-[#14B8A6]/30 flex items-center justify-center shrink-0 z-10">
                                    <Wallet size={12} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-0.5">INVESTMENT</span>
                                    <span className="text-sm font-bold text-primary leading-tight">{selected.investment}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white shadow-md shadow-[#8B5CF6]/30 flex items-center justify-center shrink-0 z-10">
                                    <Maximize2 size={12} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-0.5">AREA</span>
                                    <span className="text-sm font-bold text-primary leading-tight">{selected.area}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#F43F5E] to-[#BE123C] text-white shadow-md shadow-[#F43F5E]/30 flex items-center justify-center shrink-0 z-10">
                                    <Users size={12} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-0.5">STAFF</span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm font-bold text-primary leading-tight">{selected.staffCount}</span>
                                        <Info size={10} className="text-gray-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white shadow-md shadow-[#3B82F6]/30 flex items-center justify-center shrink-0 z-10">
                                    <MapPin size={12} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-0.5">LOCATION</span>
                                    <span className="text-sm font-bold text-primary leading-tight">{selected.location}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="bg-surface rounded border-none p-4 shadow-elevation-1 flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                        <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-white font-black">
                            {revenueROIData.sectionLabel}
                        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        {revenueROIData.revenueCards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div
                                    key={card.year}
                                    className={clsx(
                                        "rounded-xl border border-gray-100 shadow-sm p-3",
                                        "bg-white dark:bg-[#0a1128]/40 backdrop-blur-sm"
                                    )}
                                >
                                    <div className="mb-2">
                                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                            {card.year}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-inner", getRoiColor(card.intent))}>
                                            <Icon size={14} strokeWidth={1.75} />
                                        </div>
                                        <p className="text-lg font-black text-[#0a1128] dark:text-white tracking-tight">
                                            {card.range}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-2 pt-4 border-t border-border flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37] font-black">
                                {revenueROIData.paybackPeriod.sectionLabel}
                            </span>
                            <span className="text-sm font-black text-[#0a1128] dark:text-white">
                                {revenueROIData.paybackPeriod.title}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 px-1 mt-1.5">
                            {revenueROIData.paybackPeriod.milestones.map((milestone, idx) => {
                                const Icon = milestone.icon;
                                const isSelected = selectedMilestone === milestone.label;
                                return (
                                    <div key={idx} className="flex items-center gap-2 flex-1">
                                        <button
                                            onClick={() => setSelectedMilestone(milestone.label)}
                                            className={clsx(
                                                "w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 focus:outline-none",
                                                milestone.status === "complete"
                                                    ? "bg-[#10B981] border-none text-white shadow-sm shadow-[#10B981]/40"
                                                    : milestone.status === "active"
                                                        ? "bg-[#0EA5E9] border-none text-white ring-4 ring-[#0EA5E9]/20 shadow-md shadow-[#0EA5E9]/40"
                                                        : "bg-slate-100 border-none text-slate-400",
                                                isSelected && "scale-110 ring-1 ring-primary"
                                            )}
                                        >
                                            <Icon size={11} strokeWidth={milestone.status === "active" ? 2 : 1.5} />
                                        </button>
                                        {idx < revenueROIData.paybackPeriod.milestones.length - 1 && (
                                            <div className="flex-1 h-[2px] rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                                <div className={clsx(
                                                    "h-full transition-all duration-500",
                                                    milestone.status === "complete" ? "bg-[#10B981]/40 w-full" : "w-0"
                                                )} />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedMilestone}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.18 }}
                                className="text-center mt-1 text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wide min-h-[16px]"
                            >
                                {selectedMilestone}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}
