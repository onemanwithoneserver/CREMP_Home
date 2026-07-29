import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Info, MapPin, Maximize2, Users, Wallet } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { revenueROIData } from "../06_RevenueROI/data";
import { getBadgeStyles, getCardStyles, getIconContainerStyles } from "../utils/theme";
import { franchiseModelsData, type CostBreakdownItem } from "./data";
import Dropdown from "../../components/commonfiles/Dropdown";
import { CostBreakdownTable } from "./CostBreakdownTable";

const DonutChart = ({ data, totalValue }: { data: CostBreakdownItem[]; totalValue: string }) => {
    const size = 280;
    const strokeWidth = 65;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const gapLength = 2;

    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredItem, setHoveredItem] = useState<{ item: CostBreakdownItem, x: number, y: number } | null>(null);

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
        <div ref={containerRef} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90 drop-shadow-xl z-10 overflow-visible">
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
                                    <div className="flex flex-col items-center justify-center w-full h-full text-white drop-shadow-md">
                                        <item.icon size={12} className="mb-0.5 opacity-90" />
                                        <span className="text-[11px] font-black leading-tight mt-0.5">{item.amount}</span>
                                    </div>
                                </motion.foreignObject>
                            )}
                        </g>
                    );
                })}
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-transparent rounded-full pointer-events-none z-0" style={{ width: size - (strokeWidth * 2), height: size - (strokeWidth * 2), left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <span className="text-3xl font-black text-primary dark:text-white">{totalValue}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mt-1">AVG. TOTAL</span>
            </div>

            <AnimatePresence>
                {hoveredItem && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute pointer-events-none bg-gray-900 text-white text-xs font-bold px-3 py-2.5 rounded shadow-2xl z-50 flex flex-col gap-1.5 whitespace-nowrap"
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
    const [viewType, setViewType] = useState<"chart" | "table">("chart");

    const viewOptions = [
        { value: "chart", label: "Pie Chart View" },
        { value: "table", label: "Tabular View" }
    ];

    const selected = franchiseModelsData.models.find((m) => m.id === activeModel)!;

    return (
        <section className="w-full bg-background transition-colors duration-300 px-4 flex flex-col gap-4 overflow-hidden">
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
                <div className="flex gap-4 w-full px-40 justify-between items-stretch bg-transparent rounded-lg overflow-x-auto scrollbar-hide py-2">
                    {franchiseModelsData.models.map((model) => {
                        const isActive = model.id === activeModel;
                        const Icon = model.icon;
                        return (
                            <button
                                key={model.id}
                                onClick={() => setActiveModel(model.id)}
                                className={`relative flex-1 flex flex-col items-center justify-center text-center px-2 py-2 w-1/2 rounded-xl border transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isActive
                                        ? "bg-gradient-to-br from-primary to-primary-light border-accent shadow-lg shadow-accent/20 scale-[1.02] z-10"
                                        : "bg-surface border-transparent hover:border-accent/50 shadow-sm"
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <motion.div
                                        layout
                                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isActive ? "bg-white/10" : "bg-surface-alt"
                                            }`}
                                    >
                                        <Icon size={20} className={isActive ? "text-[#d4af37] dark:text-[#0b162c]" : "text-gray-500"} />
                                    </motion.div>
                                    <span className={`font-bold text-[15px] ${isActive ? "text-white" : "text-primary"}`}>
                                        {model.name}
                                    </span>
                                </div>
                                <span className={`text-sm font-semibold tracking-wider ${isActive ? "text-accent-light" : "text-gray-500"}`}>
                                    {model.priceRange}
                                </span>

                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="relative grid grid-cols-12 gap-6 items-stretch ">

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

                <div className="col-span-12 lg:col-span-3 relative z-10 self-start">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4, type: "spring" }}
                            className="bg-surface-alt rounded-2xl border-none p-6 flex flex-col shadow-lg backdrop-blur-sm relative overflow-hidden"
                        >
                            <div className="absolute right-0 top-1/2 w-4 h-4 bg-accent/20 rounded-full blur-md -mr-2 hidden lg:block" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-md border-none">
                                    <selected.icon size={24} className="[stroke:url(#goldGradient)] dark:!stroke-[#0b162c]" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-black text-primary leading-tight">
                                        {selected.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 mb-6 flex-1 relative">
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

 
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="col-span-12 lg:col-span-5 flex flex-col items-center py-2 relative z-10">
                    <div className="w-full flex justify-end mb-4 z-50">
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
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                transition={{ duration: 0.5, type: "spring" }}
                                className="relative my-auto"
                            >
                                <DonutChart data={selected.costBreakdown} totalValue={selected.avgTotal} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key={`table-${selected.id}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-md my-auto h-full min-h-[300px]"
                            >
                                <CostBreakdownTable data={selected.costBreakdown} totalValue={selected.avgTotal} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                <div className="col-span-12 lg:col-span-4 lg:row-span-2 h-full relative z-10">
                    <div className="bg-surface-alt rounded-2xl border-none px-4 pb-4 shadow-lg h-auto flex flex-col relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute left-0 top-1/2 w-4 h-4 bg-accent/20 rounded-full blur-md -mr-2 hidden lg:block" />

                        <div className="flex items-center justify-between mb-6 pb-3 border-b border-border">
                            <span className="text-[11px] uppercase font-bold tracking-widest text-primary dark:text-white font-black">
                                {revenueROIData.sectionLabel}
                            </span>
                        </div>

                        <div className="flex flex-col gap-4 flex-1">
                            {revenueROIData.revenueCards.map((card) => {
                                const Icon = card.icon;
                                return (
                                    <div
                                        key={card.year}
                                        className={clsx(
                                            "rounded-xl border-none p-4 shadow-sm",
                                            "bg-white dark:bg-[#0b162c]/40 backdrop-blur-sm",
                                            "hover:-translate-y-0.5 hover:shadow-md",
                                            "cursor-default transition-all duration-300",
                                            getCardStyles(card.intent)
                                        )}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                                {card.year}
                                            </span>
                                            <span
                                                className={clsx(
                                                    "text-[9px] font-bold uppercase px-2 py-0.5 rounded shadow-xs",
                                                    getBadgeStyles(card.intent)
                                                )}
                                            >
                                                {card.label}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div
                                                className={clsx(
                                                    "w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-inner",
                                                    getIconContainerStyles(card.intent)
                                                )}
                                            >
                                                <Icon size={16} strokeWidth={1.75} />
                                            </div>
                                            <p className="text-xl font-black text-[#0b162c] dark:text-white tracking-tight">
                                                {card.range}
                                            </p>
                                            <div className="flex flex-col ml-auto text-right max-w-[60%]">
                                                <p className="text-slate-600 dark:text-slate-300 text-xs font-semibold leading-tight line-clamp-1">
                                                    {card.description}
                                                </p>
                                                <p className="text-slate-400 dark:text-slate-500 text-[10px] font-medium leading-none mt-0.5 line-clamp-1">
                                                    {card.sublabel}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-8 relative z-10 h-full">
                    <div className="w-full h-full bg-white dark:bg-[#0b162c]/40 rounded-xl border-none p-6 pb-6 shadow-sm flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                                {revenueROIData.paybackPeriod.sectionLabel}
                            </span>
                            <span className="text-xl font-black text-[#0b162c] dark:text-white">
                                {revenueROIData.paybackPeriod.title}
                            </span>
                        </div>
                        <div className="flex items-center gap-4 px-4 mt-auto">
                            {revenueROIData.paybackPeriod.milestones.map((milestone, idx) => {
                                const Icon = milestone.icon;
                                return (
                                    <div key={idx} className={clsx("flex items-center gap-3", idx < revenueROIData.paybackPeriod.milestones.length - 1 ? "flex-1" : "")}>
                                        <div className="relative flex flex-col items-center">
                                            <div
                                                className={clsx(
                                                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-white dark:bg-surface transition-colors duration-300",
                                                    milestone.status === "complete"
                                                        ? "bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400"
                                                        : milestone.status === "active"
                                                            ? "bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37] ring-2 ring-[#d4af37]/10 dark:ring-[#d4af37]/20"
                                                            : "bg-slate-50 border-slate-200 text-slate-400 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-500"
                                                )}
                                                title={milestone.label}
                                            >
                                                <Icon size={16} strokeWidth={milestone.status === "active" ? 2 : 1.5} />
                                            </div>
                                            <span className={clsx("absolute -bottom-5 text-[9px] font-bold whitespace-nowrap", milestone.status === "active" ? "text-[#d4af37]" : "text-slate-500 dark:text-slate-400")}>
                                                {milestone.label}
                                            </span>
                                        </div>
                                        {idx < revenueROIData.paybackPeriod.milestones.length - 1 && (
                                            <div className="flex-1 h-[2px] rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                                <div className={clsx(
                                                    "h-full transition-all duration-500",
                                                    milestone.status === "complete" ? "bg-emerald-400/50 w-full" : "w-0"
                                                )} />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}