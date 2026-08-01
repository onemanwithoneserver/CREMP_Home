import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  Info,
  MapPin,
  Maximize2,
  Users,
  Wallet,
  Sparkles,
  X,
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
  const size = 320;
  const strokeWidth = 84;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const gapLength = 2;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const chartData = useMemo(() => {
    let currentOffset = 0;
    return data.map((item, idx) => {
      const rawSegmentLength = (item.percentage / 100) * circumference;
      const segmentLength = Math.max(0, rawSegmentLength - gapLength);
      const offset = currentOffset;
      currentOffset += rawSegmentLength;

      return { ...item, segmentLength, offset, rawSegmentLength, idx };
    });
  }, [data, circumference]);

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-8 w-full">
      <div
        className="relative flex items-center justify-center shrink-0"
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
            const isSmall = item.percentage < 10;
            const isHovered = hoveredIdx === i;

            return (
              <g
                key={`group-${item.label}`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="cursor-pointer"
              >
                <motion.circle
                  key={item.label}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth={isHovered ? strokeWidth + 6 : strokeWidth}
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
                  style={{
                    transition: "stroke-width 0.3s ease",
                  }}
                />
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
                    <item.icon
                      size={isSmall ? 13 : 15}
                      className="mb-0.5 opacity-90"
                    />
                    <span
                      className={clsx(
                        "font-semibold leading-tight",
                        isSmall ? "text-xs" : "text-sm",
                      )}
                    >
                      {item.amount}
                    </span>
                    <span
                      className={clsx(
                        "font-semibold leading-tight opacity-90",
                        isSmall ? "text-[9px]" : "text-[10px]",
                      )}
                    >
                      {Math.round(item.percentage)}%
                    </span>
                  </div>
                </motion.foreignObject>
              </g>
            );
          })}
        </svg>

        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 rounded-full pointer-events-none z-10 shadow-lg border border-gray-100 dark:border-gray-800"
          style={{
            width: size - strokeWidth * 2,
            height: size - strokeWidth * 2,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-3xl font-semibold text-[#0b1b42] dark:text-white tracking-tight relative z-10">
            {totalValue}
          </span>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mt-0.5 max-w-[85px] leading-tight relative z-10">
            AVG. TOTAL INVESTMENT
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 justify-center flex-1 max-w-sm w-full">
        {data.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <motion.div
              key={`legend-${idx}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={clsx(
                "flex items-center justify-between p-2.5 px-3.5 rounded-xl transition-all duration-300 cursor-pointer border",
                isHovered
                  ? "bg-white dark:bg-gray-800 shadow-md border-gray-200 dark:border-gray-600 scale-[1.02]"
                  : "bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 hover:border-gray-200",
              )}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
                  className="w-3.5 h-3.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-semibold text-[#0b1b42] dark:text-gray-200">
                  {item.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[#0b1b42] dark:text-white">
                  {item.amount}
                </span>
                <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-md">
                  {item.percentage}%
                </span>
              </div>
            </motion.div>
          );
        })}
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
    if (intent === "primary" || intent === "warning")
      return "bg-[#d97706] text-white";
    if (intent === "success") return "bg-[#059669] text-white";
    if (intent === "info") return "bg-[#0284c7] text-white";
    return "bg-[#7c3aed] text-white";
  };

  const getStaffBadgeColor = (idx: number) => {
    const colors = [
      "text-emerald-700 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-900",
      "text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900",
      "text-orange-700 bg-orange-100 dark:text-orange-300 dark:bg-orange-900",
      "text-purple-700 bg-purple-100 dark:text-purple-300 dark:bg-purple-900",
    ];
    return colors[idx % colors.length];
  };

  return (
    <section className="w-full px-8 py-16 -pb-8 flex flex-col gap-6 relative bg-gray-50 dark:bg-gray-900">
      <SectionHeader
        overline={franchiseModelsData.sectionLabel}
        title={franchiseModelsData.title}
        subtitle={franchiseModelsData.subtitle}
        align="center"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-center mb-6">
        <div className="flex w-full bg-white dark:bg-gray-800 rounded-2xl p-1.5 border border-gray-200 dark:border-gray-700 shadow-sm relative gap-1.5">
          {franchiseModelsData.models.map((model) => {
            const isActive = model.id === activeModel;
            const Icon = model.icon;
            return (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className="flex-1 relative flex flex-col items-center justify-center py-3.5 px-3 rounded-xl transition-all duration-300 z-10 group focus-visible:outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeModelIndicator"
                    className="absolute inset-0 bg-[#0b1b42] dark:bg-gray-700 rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="flex items-center gap-2 mb-1 relative z-10">
                  <motion.div
                    className={clsx(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",
                      isActive
                        ? "bg-[#d4af37]/20 text-[#d4af37]"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-500 group-hover:bg-gray-200 dark:group-hover:bg-gray-700",
                    )}
                    animate={
                      isActive
                        ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Icon
                      size={15}
                      strokeWidth={isActive ? 2.5 : 2}
                      className={isActive ? "text-[#d4af37]" : "text-gray-500"}
                    />
                  </motion.div>
                  <span
                    className={clsx(
                      "font-semibold text-sm whitespace-nowrap transition-colors duration-300",
                      isActive
                        ? "text-white"
                        : "text-[#0b1b42] dark:text-gray-200",
                    )}
                  >
                    {model.name}
                  </span>
                </div>
                <span
                  className={clsx(
                    "text-xs font-semibold tracking-tight transition-colors duration-300 relative z-10",
                    isActive
                      ? "text-gray-300"
                      : "text-gray-500 dark:text-gray-400",
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
        <div className="col-span-12 lg:col-span-3 flex flex-col h-full relative z-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm relative overflow-visible"
            >
              <div className="bg-[#0b1b42] dark:bg-gray-900 p-5 flex items-center justify-between shrink-0 relative overflow-hidden rounded-t-2xl">
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center"
                  >
                    <selected.icon size={20} className="text-[#d4af37]" />
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-semibold text-[#d4af37] uppercase tracking-widest block">
                      MODEL SPECIFICATIONS
                    </span>
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {selected.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 relative flex flex-col justify-between">
                <div className="flex flex-col gap-3 relative z-10">
                  <div className="absolute left-[32px] -translate-x-1/2 top-[32px] bottom-[32px] w-[3px] pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37]/60 to-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.35)]" />
                    <div className="absolute inset-0 border-l border-dashed border-[#ffd700]/70" />
                    <motion.div
                      className="absolute -left-[3px] -translate-y-1/2 w-[9px] h-14 rounded-full bg-gradient-to-b from-transparent via-[#ffd700] to-transparent shadow-[0_0_16px_#ffd700]"
                      animate={{
                        top: ["0%", "100%"],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {[
                    {
                      icon: Wallet,
                      label: "INVESTMENT",
                      value: selected.investment,
                      color: "bg-[#059669] text-white",
                    },
                    {
                      icon: Maximize2,
                      label: "AREA REQUIRED",
                      value: selected.area,
                      color: "bg-[#7c3aed] text-white",
                    },
                    {
                      icon: Users,
                      label: "STAFF NEEDED",
                      value: `${selected.staffCount} members`,
                      color: "bg-[#d97706] text-white",
                      extra: Info,
                    },
                    {
                      icon: MapPin,
                      label: "IDEAL LOCATION",
                      value: selected.location,
                      color: "bg-[#0284c7] text-white",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-colors duration-300 flex items-center gap-3.5 group cursor-default shadow-sm relative z-10"
                    >
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className={clsx(
                          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10 shadow-sm",
                          stat.color,
                        )}
                      >
                        <stat.icon size={18} strokeWidth={2.2} />
                      </motion.div>

                      <div className="flex flex-col flex-1">
                        <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
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
                          <span className="text-base font-semibold text-[#0b1b42] dark:text-white leading-tight group-hover/staff:text-blue-600 dark:group-hover/staff:text-blue-400 transition-colors">
                            {stat.value}
                          </span>
                          {stat.extra && (
                            <stat.extra
                              size={14}
                              className="text-gray-400 group-hover/staff:text-blue-500 transition-colors"
                            />
                          )}

                          <AnimatePresence>
                            {isStaffTooltipOpen &&
                              stat.label === "STAFF NEEDED" && (
                                <motion.div
                                  initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                    y: 20,
                                    filter: "blur(8px)",
                                  }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                  }}
                                  exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    y: 20,
                                    filter: "blur(8px)",
                                  }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                    mass: 0.8,
                                  }}
                                  className="absolute left-[calc(100%+24px)] bottom-[-40px] w-80 max-w-[90vw] bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-white/50 dark:border-white/10 z-[99999] p-6 pointer-events-auto cursor-default"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <div className="absolute bottom-12 -left-2 w-5 h-5 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border-l border-b border-white/50 dark:border-white/10 rotate-45 pointer-events-none" />

                                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200/50 dark:border-gray-700/50 relative z-10">
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <Users size={16} strokeWidth={2.5} />
                                      </div>
                                      <span className="text-sm font-semibold uppercase tracking-wider text-[#0b1b42] dark:text-white">
                                        Staff Requirements
                                      </span>
                                    </div>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsStaffTooltipOpen(false);
                                      }}
                                      className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-100/80 hover:bg-red-50 text-gray-500 hover:text-red-500 dark:bg-gray-800/80 dark:hover:bg-red-900/50 transition-colors"
                                      aria-label="Close"
                                    >
                                      <X size={14} strokeWidth={2.5} />
                                    </button>
                                  </div>

                                  <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2 relative z-10 scrollbar-thin">
                                    {selected.staffDetails?.map(
                                      (staff, idx) => (
                                        <div
                                          key={idx}
                                          className="flex flex-col bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 border border-white/60 dark:border-white/5 shadow-sm"
                                        >
                                          <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-semibold text-[#0b1b42] dark:text-white">
                                              {staff.name}
                                            </span>
                                            <span
                                              className={clsx(
                                                "text-[10px] font-semibold px-2.5 py-1 rounded-full",
                                                getStaffBadgeColor(idx),
                                              )}
                                            >
                                              {staff.count}x
                                            </span>
                                          </div>
                                          <div className="flex gap-2 text-[10px] font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                                            <span>{staff.type}</span>
                                            <span>•</span>
                                            <span>{staff.experience}</span>
                                          </div>
                                          <p className="text-xs font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {staff.remarks}
                                          </p>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="col-span-12 lg:col-span-6 rounded-2xl p-2 flex flex-col justify-center relative overflow-hidden">
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

        <div className="col-span-12 lg:col-span-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm flex flex-col h-full relative overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0b1b42] dark:text-white">
              Break Even & Estimated ROI
            </span>
          </div>

          <div className="relative flex flex-col justify-between flex-1 py-1">
            <div className="absolute left-[32px] -translate-x-1/2 top-[32px] bottom-[38px] w-[3px] pointer-events-none z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37]/60 to-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.35)]" />
              <div className="absolute inset-0 border-l border-dashed border-[#ffd700]/70" />
              <motion.div
                className="absolute -left-[3px] -translate-y-1/2 w-[9px] h-14 rounded-full bg-gradient-to-b from-transparent via-[#ffd700] to-transparent shadow-[0_0_16px_#ffd700]"
                animate={{
                  top: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="flex flex-col gap-3 relative z-10">
              {revenueROIData.revenueCards.map((card: any) => {
                const Icon = card.icon;
                const colorClass = getRoiColor(card.intent);
                return (
                  <div
                    key={card.year}
                    className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 flex items-center gap-3.5 group cursor-default shadow-sm"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      className={clsx(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10 shadow-sm",
                        colorClass,
                      )}
                    >
                      <Icon size={18} strokeWidth={2.2} />
                    </motion.div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {card.year}
                        </span>
                        <span className="text-[10px] font-semibold text-gray-400">
                          • {card.label || "Projected"}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-[#0b1b42] dark:text-white tracking-tight">
                        {card.range}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-[#0b1b42] dark:bg-gray-900 border border-[#d4af37]/40 rounded-2xl p-4 shadow-md flex items-center gap-3.5 relative overflow-hidden group z-10 cursor-default">
              <div className="relative shrink-0">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-11 h-11 rounded-xl bg-[#d4af37] text-[#0b1b42] flex items-center justify-center relative z-10 shadow-sm"
                >
                  <Sparkles size={20} strokeWidth={2.2} />
                </motion.div>
              </div>

              <div className="flex flex-col relative z-10">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[10px] font-semibold text-amber-500 uppercase tracking-widest">
                    Destination • Breakeven
                  </span>
                </div>
                <p className="text-xl font-semibold text-white tracking-tight">
                  {revenueROIData.paybackPeriod.title}
                </p>
                <span className="text-[10px] font-medium text-gray-400">
                  Target milestone for full investment recovery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}