import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Info, TrendingUp, Users, X } from "lucide-react";
import { useMemo, useState } from "react";
import {
  franchiseModelsData,
  franchiseModelsUI,
  getStaffBadgeColor,
  revenueROIData,
  getModelSpecifications,
  getRightMetrics,
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
          className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white/90 dark:bg-[#0a1128]/95 backdrop-blur-md rounded-full pointer-events-none z-10 shadow-lg border border-gray-200 dark:border-gray-800"
          style={{
            width: size - strokeWidth * 2,
            height: size - strokeWidth * 2,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-3xl font-bold text-[#0a1128] dark:text-white tracking-tight relative z-10">
            {totalValue}
          </span>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-0.5 max-w-[85px] leading-tight relative z-10">
            {franchiseModelsUI.avgTotalInvestment}
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
                "flex items-center justify-between p-2.5 px-3.5 rounded-[4px] bg-white dark:bg-[#121c33] transition-all duration-300 cursor-pointer border",
                isHovered
                  ? "bg-white dark:bg-[#121c33] shadow-md border-gray-300 dark:border-[#d4af37]/40 scale-[1.02]"
                  : "border-transparent",
              )}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
                  className="w-3.5 h-3.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-semibold text-[#0a1128] dark:text-gray-200">
                  {item.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#0a1128] dark:text-white">
                  {item.amount}
                </span>
                <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-[2px]">
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

  const leftMetrics = useMemo(
    () => getModelSpecifications(selected),
    [selected],
  );
  const rightMetrics = useMemo(() => getRightMetrics(), []);

  return (
    <section className="w-full px-8 py-16 flex flex-col gap-6 relative bg-white dark:bg-[#0a1128] transition-colors duration-300">
      <SectionHeader
        overline={franchiseModelsData.sectionLabel}
        title={franchiseModelsData.title}
        subtitle={franchiseModelsData.subtitle}
        align="center"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-center mb-6">
        <div className="flex w-full bg-white/70 dark:bg-[#0e172f]/70 backdrop-blur-xl rounded-[4px] p-1.5 border border-gray-200/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] relative gap-1.5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/5 pointer-events-none opacity-60" />

          {franchiseModelsData.models.map((model) => {
            const isActive = model.id === activeModel;
            const Icon = model.icon;
            return (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className={clsx(
                  "flex-1 relative flex flex-col items-center justify-center py-3 px-3 rounded-[4px] transition-all duration-300 z-10 group focus-visible:outline-none",
                  !isActive &&
                    "hover:bg-white/50 dark:hover:bg-white/5 hover:backdrop-blur-sm",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeModelIndicator"
                    className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#121c33] to-[#0a1128] dark:from-[#16254c] dark:via-[#0e1a38] dark:to-[#0a1128] border border-[#d4af37]/60 rounded-[4px] shadow-[0_4px_20px_rgba(212,175,55,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-md"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                      mass: 0.8,
                    }}
                  >
                    <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#d4af37]/20 rounded-full blur-lg pointer-events-none" />
                  </motion.div>
                )}

                <div className="flex items-center gap-2 mb-1 relative z-10">
                  <motion.div
                    className={clsx(
                      "w-7 h-7 rounded-[2px] flex items-center justify-center transition-all duration-300 backdrop-blur-sm",
                      isActive
                        ? "bg-gradient-to-br from-[#d4af37]/30 to-[#d4af37]/10  text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                        : "bg-white/80 dark:bg-[#0a1128]/80 text-gray-500  group-hover:border-gray-200 dark:group-hover:border-gray-700 shadow-sm",
                    )}
                    animate={
                      isActive
                        ? { scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Icon
                      size={14}
                      strokeWidth={isActive ? 2.5 : 2}
                      className={
                        isActive
                          ? "text-[#d4af37]"
                          : "text-gray-500 dark:text-gray-400"
                      }
                    />
                  </motion.div>
                  <span
                    className={clsx(
                      "font-bold text-sm whitespace-nowrap transition-colors duration-300",
                      isActive
                        ? "text-white"
                        : "text-[#0a1128] dark:text-gray-200",
                    )}
                  >
                    {model.name}
                  </span>
                </div>
                <span
                  className={clsx(
                    "text-xs font-semibold tracking-tight transition-colors duration-300 relative z-10",
                    isActive
                      ? "text-amber-200/90 dark:text-[#d4af37]"
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

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-12 gap-6 items-stretch">
        <div className="col-span-12 lg:col-span-3 flex flex-col h-full relative z-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full bg-white dark:bg-[#121c33] rounded-[4px] relative overflow-visible"
            >
              <div className="bg-white/60 dark:bg-[#0a1128]/60 backdrop-blur-xl p-4 sm:p-5 flex items-center justify-between shrink-0 relative overflow-hidden rounded-t-[4px] border-b border-gray-200/80 dark:border-[#d4af37]/20 shadow-sm min-h-[82px]">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="w-10 h-10 rounded-[4px] bg-white/80 dark:bg-white/5 border border-[#d4af37]/30 shadow-sm backdrop-blur-md flex items-center justify-center text-[#d4af37] shrink-0"
                  >
                    <selected.icon size={20} />
                  </motion.div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block leading-none mb-1">
                      {franchiseModelsUI.specificationLabel}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight truncate">
                      {selected.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 relative flex flex-col justify-between">
                <div className="flex flex-col gap-3.5 relative z-10">
                  <div className="absolute left-[36px] -translate-x-1/2 top-[24px] bottom-[24px] w-[2px] pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37]/60 to-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.35)]" />
                    <motion.div
                      className="absolute -left-[3px] -translate-y-1/2 w-[8px] h-14 rounded-full bg-gradient-to-b from-transparent via-[#ffd700] to-transparent shadow-[0_0_16px_#ffd700]"
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

                  {leftMetrics.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 sm:p-3.5 rounded-[4px] bg-gray-50/90 dark:bg-[#0a1128] border border-gray-200/80 dark:border-gray-800 hover:border-gray-300 dark:hover:border-[#d4af37]/40 transition-all duration-300 flex items-center justify-between gap-3 group cursor-default shadow-sm relative z-10 min-h-[64px]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <motion.div
                          whileHover={{ scale: 1.08, rotate: 4 }}
                          className={clsx(
                            "w-10 h-10 rounded-[4px] flex items-center justify-center shrink-0 relative z-10 shadow-sm",
                            stat.color,
                          )}
                        >
                          <stat.icon size={18} strokeWidth={2.2} />
                        </motion.div>

                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                            {stat.label}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-[#0a1128] dark:text-white leading-tight group-hover:text-[#d4af37] transition-colors truncate">
                            {stat.value}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {stat.hasStaffModal ? (
                          <div
                            className="flex items-center gap-1 relative cursor-pointer"
                            onClick={() =>
                              setIsStaffTooltipOpen(!isStaffTooltipOpen)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                setIsStaffTooltipOpen(!isStaffTooltipOpen);
                                e.preventDefault();
                              }
                            }}
                            tabIndex={0}
                            aria-expanded={isStaffTooltipOpen}
                          >
                            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2 py-0.5 rounded-[2px] border border-blue-200/60 dark:border-blue-700/50 flex items-center gap-1 hover:bg-blue-100 transition-colors">
                              <span>Staff</span>
                              <Info size={11} strokeWidth={2.5} />
                            </span>

                            <AnimatePresence>
                              {isStaffTooltipOpen && (
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
                                  className="absolute left-[calc(100%+16px)] bottom-[-40px] w-80 max-w-[90vw] bg-white dark:bg-[#0a1128] backdrop-blur-2xl rounded-[4px] shadow-2xl border border-gray-200 dark:border-gray-700 z-[99999] p-5 pointer-events-auto cursor-default text-left"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-gray-800 relative z-10">
                                    <div className="flex items-center gap-2.5">
                                      <div className="w-7 h-7 rounded-[2px] bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <Users size={15} strokeWidth={2.5} />
                                      </div>
                                      <span className="text-xs font-bold uppercase tracking-wider text-[#0a1128] dark:text-white">
                                        {franchiseModelsUI.staffRequirements}
                                      </span>
                                    </div>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsStaffTooltipOpen(false);
                                      }}
                                      className="w-6 h-6 rounded-[2px] flex items-center justify-center bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 dark:bg-gray-800 dark:hover:bg-red-900/50 transition-colors"
                                      aria-label="Close"
                                    >
                                      <X size={14} strokeWidth={2.5} />
                                    </button>
                                  </div>

                                  <div className="flex flex-col gap-2.5 max-h-[360px] overflow-y-auto pr-1 relative z-10 scrollbar-thin">
                                    {selected.staffDetails?.map(
                                      (staff, idx) => (
                                        <div
                                          key={idx}
                                          className="flex flex-col bg-gray-50 dark:bg-[#121c33] rounded-[4px] p-3 border border-gray-200 dark:border-gray-800 shadow-sm"
                                        >
                                          <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs font-bold text-[#0a1128] dark:text-white">
                                              {staff.name}
                                            </span>
                                            <span
                                              className={clsx(
                                                "text-[10px] font-bold px-2 py-0.5 rounded-[2px]",
                                                getStaffBadgeColor(idx),
                                              )}
                                            >
                                              {staff.count}x
                                            </span>
                                          </div>
                                          <div className="flex gap-2 text-[10px] font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                                            <span>{staff.type}</span>
                                            <span>•</span>
                                            <span>{staff.experience}</span>
                                          </div>
                                          <p className="text-[11px] font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
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
                        ) : (
                          <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-2 py-0.5 rounded-[2px] border border-gray-200 dark:border-gray-700/60">
                            {stat.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="col-span-12 lg:col-span-6 rounded-[4px] p-2 flex flex-col justify-center relative overflow-hidden h-full">
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

        <div className="col-span-12 lg:col-span-3 bg-white dark:bg-[#121c33] rounded-[4px] flex flex-col h-full relative overflow-hidden">
          <div className="bg-white/60 dark:bg-[#0a1128]/60 backdrop-blur-xl p-4 sm:p-5 flex items-center justify-between shrink-0 relative overflow-hidden rounded-t-[4px] border-b border-gray-200/80 dark:border-[#d4af37]/20 shadow-sm min-h-[82px]">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
                className="w-10 h-10 rounded-[4px] bg-white/80 dark:bg-white/5 border border-[#d4af37]/30 shadow-sm backdrop-blur-md flex items-center justify-center text-[#d4af37] shrink-0"
              >
                <TrendingUp size={20} />
              </motion.div>
              <div className="flex flex-col justify-center min-w-0">
                <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block leading-none mb-1">
                  FINANCIAL METRICS
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight truncate">
                  {revenueROIData.sectionLabel}
                </h3>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 flex-1 relative flex flex-col justify-between">
            <div className="flex flex-col gap-3.5 relative z-10">
              <div className="absolute left-[36px] -translate-x-1/2 top-[24px] bottom-[24px] w-[2px] pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37]/60 to-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.35)]" />
                <motion.div
                  className="absolute -left-[3px] -translate-y-1/2 w-[8px] h-14 rounded-full bg-gradient-to-b from-transparent via-[#ffd700] to-transparent shadow-[0_0_16px_#ffd700]"
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

              {rightMetrics.map((stat) => {
                const isHighlight = stat.badge === "Breakeven";
                return (
                  <motion.div
                    key={stat.label}
                    animate={
                      isHighlight
                        ? {
                            borderColor: [
                              "rgba(212,175,55,0.3)",
                              "rgba(212,175,55,0.8)",
                              "rgba(212,175,55,0.3)",
                            ],
                            boxShadow: [
                              "0px 0px 0px rgba(212,175,55,0)",
                              "0px 0px 12px rgba(212,175,55,0.3)",
                              "0px 0px 0px rgba(212,175,55,0)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={clsx(
                      "p-3 sm:p-3.5 rounded-[4px] transition-all duration-300 flex items-center justify-between gap-3 group cursor-default relative z-10 min-h-[64px]",
                      isHighlight
                        ? "bg-gradient-to-r from-[#d4af37]/10 to-transparent border border-[#d4af37]/50 dark:from-[#d4af37]/15 dark:to-[#0a1128]"
                        : "bg-gray-50/90 dark:bg-[#0a1128] border border-gray-200/80 dark:border-gray-800 hover:border-gray-300 dark:hover:border-[#d4af37]/40 shadow-sm",
                    )}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: -4 }}
                        className={clsx(
                          "w-10 h-10 rounded-[4px] flex items-center justify-center shrink-0 relative z-10 shadow-sm",
                          stat.color,
                        )}
                      >
                        <stat.icon size={18} strokeWidth={2.2} />
                      </motion.div>

                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                          {stat.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#0a1128] dark:text-white leading-tight group-hover:text-[#d4af37] transition-colors truncate">
                          {stat.value}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span
                        className={clsx(
                          "text-[10px] font-semibold px-2 py-0.5 rounded-[2px] border",
                          stat.badge === "Breakeven"
                            ? "text-[#d4af37] bg-[#d4af37]/10 border-[#d4af37]/40"
                            : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700/60",
                        )}
                      >
                        {stat.badge}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
