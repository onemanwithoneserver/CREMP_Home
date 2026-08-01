import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  Info,
  MapPin,
  Maximize2,
  Users,
  Wallet,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  franchiseModelsData,
  revenueROIData,
  type CostBreakdownItem,
} from "./data";
import { SectionHeader } from "../components/SectionHeader";

const DonutChartWithLegend = ({
  data,
  totalValue,
}: {
  data: CostBreakdownItem[];
  totalValue: string;
}) => {
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
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className="transform -rotate-90 overflow-visible"
        >
          {chartData.map((item, i) => {
            const angle =
              ((item.offset + item.segmentLength / 2) / circumference) *
              2 *
              Math.PI;
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
                  animate={{
                    strokeDasharray: `${item.segmentLength} ${circumference}`,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
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
                      <span className="text-sm font-semibold leading-tight drop-shadow-md">
                        {item.amount}
                      </span>
                      <span className="text-[10px] font-medium leading-tight opacity-90">
                        {item.percentage}%
                      </span>
                    </div>
                  </motion.foreignObject>
                )}
              </g>
            );
          })}
        </svg>

        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white rounded-full pointer-events-none z-0 shadow-inner"
          style={{
            width: size - strokeWidth * 2,
            height: size - strokeWidth * 2,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-3xl font-semibold text-[#0b1b42]">
            {totalValue}
          </span>
          <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5 max-w-[80px] leading-tight">
            AVG. TOTAL INVESTMENT
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center">
        {data.map((item, idx) => (
          <div key={`legend-${idx}`} className="flex items-center gap-3 w-full">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm font-semibold text-gray-600 w-40 truncate">
              {item.label}
            </span>
            <span className="text-sm font-semibold text-[#0b1b42] text-right w-12">
              {item.amount}
            </span>
            <span className="text-xs font-medium text-gray-500 text-right w-10">
              ({item.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function FranchiseModelsDesktop() {
  const [activeModel, setActiveModel] = useState(
    franchiseModelsData.models.find((m) => m.id === "mall-outlet")?.id ||
      franchiseModelsData.models[0].id,
  );
  const [isStaffTooltipOpen, setIsStaffTooltipOpen] = useState(false);

  const selected = franchiseModelsData.models.find(
    (m) => m.id === activeModel,
  )!;

  const getRoiColor = (intent: string) => {
    if (intent === "primary")
      return "text-white bg-gradient-to-br from-[#F97316] to-[#C2410C] shadow-md shadow-[#F97316]/30";
    if (intent === "success")
      return "text-white bg-gradient-to-br from-[#10B981] to-[#047857] shadow-md shadow-[#10B981]/30";
    if (intent === "info")
      return "text-white bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-md shadow-[#0EA5E9]/30";
    if (intent === "warning")
      return "text-white bg-gradient-to-br from-[#FBBF24] to-[#D97706] shadow-md shadow-[#FBBF24]/30";
    return "text-white bg-gray-400";
  };

  const getStaffBadgeColor = (idx: number) => {
    const colors = [
      "text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/20",
      "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-500/20",
      "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-500/20",
      "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-500/20"
    ];
    return colors[idx % colors.length];
  };
  return (
    <section className="w-full bg-gradient-to-tr from-[#f8f9fa] via-white to-[#f1f5f9] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-[length:200%_200%] animate-gradient-shift transition-colors duration-300 px-8 py-16 flex flex-col gap-6 overflow-hidden min-h-screen relative">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[0%] w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient
            id="goldGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
          >
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

      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-center mb-2">
        <div className="flex w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-700/50 overflow-hidden shadow-sm">
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
                    : "hover:bg-gray-50 border-gray-200",
                )}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className={clsx(
                      "w-8 h-8 rounded-full flex items-center justify-center border",
                      isActive
                        ? "border-[#d4af37]/30 bg-white/10"
                        : "border-gray-200 bg-gray-50",
                    )}
                  >
                    <Icon
                      size={14}
                      className={isActive ? "text-[#d4af37]" : "text-gray-400"}
                    />
                  </div>
                  <span
                    className={clsx(
                      "font-semibold text-sm whitespace-nowrap",
                      isActive ? "text-white" : "text-[#0b1b42]",
                    )}
                  >
                    {model.name}
                  </span>
                </div>
                <span
                  className={clsx(
                    "text-xs font-semibold",
                    isActive ? "text-gray-300" : "text-gray-500",
                  )}
                >
                  {model.priceRange}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-12 gap-6">
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

              <div className="bg-white p-6 flex-1 relative border border-t-0 border-gray-200 rounded-b-xl flex flex-col">
                <div className="absolute left-[47px] top-10 bottom-10 w-px border-l-2 border-dashed border-gray-200 z-0" />

                <div className="flex flex-col flex-1 justify-between relative z-10 py-2">
                  {[
                    {
                      icon: Wallet,
                      label: "INVESTMENT",
                      value: selected.investment,
                    },
                    {
                      icon: Maximize2,
                      label: "AREA REQUIRED",
                      value: selected.area,
                    },
                    {
                      icon: Users,
                      label: "STAFF NEEDED",
                      value: `${selected.staffCount} members`,
                      extra: Info,
                    },
                    {
                      icon: MapPin,
                      label: "IDEAL LOCATION",
                      value: selected.location,
                    },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex items-start gap-5">
                      <div
                        className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center shrink-0 z-10 text-white ${
                          i === 0
                            ? "bg-gradient-to-br from-[#14B8A6] to-[#0F766E] shadow-[#14B8A6]/30"
                            : i === 1
                              ? "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] shadow-[#8B5CF6]/30"
                              : i === 2
                                ? "bg-gradient-to-br from-[#F43F5E] to-[#BE123C] shadow-[#F43F5E]/30"
                                : "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] shadow-[#3B82F6]/30"
                        }`}
                      >
                        <stat.icon size={18} />
                      </div>
                      <div className="flex flex-col pt-1">
                        <span className="text-[10px] uppercase font-semibold tracking-widest text-gray-400 mb-1">
                          {stat.label}
                        </span>
                        <div
                          className="flex items-center gap-1.5 relative group/staff cursor-pointer"
                          onClick={() =>
                            stat.label === "STAFF NEEDED" &&
                            setIsStaffTooltipOpen(!isStaffTooltipOpen)
                          }
                          onKeyDown={(e) => {
                            if (
                              stat.label === "STAFF NEEDED" &&
                              (e.key === "Enter" || e.key === " ")
                            ) {
                              setIsStaffTooltipOpen(!isStaffTooltipOpen);
                              e.preventDefault();
                            }
                          }}
                          tabIndex={
                            stat.label === "STAFF NEEDED" ? 0 : undefined
                          }
                          aria-expanded={isStaffTooltipOpen}
                        >
                          <span className="text-[15px] font-semibold text-[#0b1b42] leading-tight group-hover/staff:text-primary transition-colors">
                            {stat.value}
                          </span>
                          {stat.extra && (
                            <stat.extra
                              size={12}
                              className="text-gray-400 group-hover/staff:text-primary transition-colors"
                            />
                          )}

                          {stat.label === "STAFF NEEDED" && (
                            <div
                              className={`absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-200 z-[9999] p-3 pointer-events-auto ${isStaffTooltipOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                            >
                              <h5 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2 border-b border-gray-100 pb-1.5 text-center relative">
                                Staff Requirements
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsStaffTooltipOpen(false);
                                  }}
                                  className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                                  aria-label="Close"
                                >
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                              </h5>
                              <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-2">
                                {selected.staffDetails?.map((staff, idx) => (
                                  <div
                                    key={idx}
                                    className="flex flex-col bg-gray-50/80 rounded-lg p-2.5"
                                  >
                                    <div className="flex justify-between items-center mb-1">
                                      <span className="text-xs font-semibold text-[#0b1b42]">
                                        {staff.name}
                                      </span>
                                      <span className={clsx("text-[9px] font-bold px-1.5 py-0.5 rounded-full", getStaffBadgeColor(idx))}>
                                        {staff.count}x
                                      </span>
                                    </div>
                                    <div className="flex gap-2 text-[9px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                      <span>{staff.type}</span>
                                      <span>•</span>
                                      <span>{staff.experience}</span>
                                    </div>
                                    <p className="text-[10px] font-medium text-gray-600 leading-snug">
                                      {staff.remarks}
                                    </p>
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
                <DonutChartWithLegend
                  data={selected.costBreakdown}
                  totalValue={selected.avgTotal}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 bg-white border border-gray-100 rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col h-full">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#0b1b42] mb-6">
            Break Even & Estimated ROI
          </span>

          <div className="flex flex-col gap-4 flex-1 justify-between py-2">
            {revenueROIData.revenueCards.map((card: any) => {
              const Icon = card.icon;
              const colorClass = getRoiColor(card.intent);
              return (
                <div
                  key={card.year}
                  className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  <div
                    className={clsx(
                      "w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                      colorClass,
                    )}
                  >
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

            <div className="bg-[#0b1b42] border border-[#d4af37]/30 rounded-xl p-4 shadow-lg shadow-[#0b1b42]/20 flex items-center gap-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-0.5">
                  Breakeven Timeframe
                </span>
                <p className="text-xl font-bold text-[#d4af37] tracking-tight">
                  {revenueROIData.paybackPeriod.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
