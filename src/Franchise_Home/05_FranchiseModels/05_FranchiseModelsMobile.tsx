import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Info,
  MousePointerClick,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  franchiseModelsData,
  franchiseModelsUI,
  getStaffBadgeColor,
  revenueROIData,
  viewOptions,
  getModelSpecifications,
  getRightMetrics,
  type CostBreakdownItem,
} from "./data";
import Dropdown from "../../components/commonfiles/Dropdown";
import { CostBreakdownTable } from "./CostBreakdownTable";
import { SectionHeader } from "../components/SectionHeader";

const DonutChart = ({
  data,
  totalValue,
}: {
  data: CostBreakdownItem[];
  totalValue: string;
}) => {
  const size = 220;
  const strokeWidth = 55;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const gapLength = 1;

  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<{
    item: CostBreakdownItem;
    x: number;
    y: number;
  } | null>(null);

  let currentOffset = 0;

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90 overflow-visible"
      >
        {data.map((item, i) => {
          const rawSegmentLength = (item.percentage / 100) * circumference;
          const segmentLength = Math.max(0, rawSegmentLength - gapLength);

          const offset = currentOffset;
          currentOffset += rawSegmentLength;

          const angle =
            ((offset + segmentLength / 2) / circumference) * 2 * Math.PI;
          const textX = size / 2 + radius * Math.cos(angle);
          const textY = size / 2 + radius * Math.sin(angle);
          const isSmall = item.percentage < 10;

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
                animate={{
                  strokeDasharray: `${segmentLength} ${circumference - segmentLength}`,
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  type: "spring",
                  bounce: 0.1,
                }}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={(e) => {
                  if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    setHoveredItem((prev) =>
                      prev?.item.label === item.label
                        ? null
                        : {
                            item,
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top,
                          },
                    );
                  }
                }}
              />
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
                <div className="flex flex-col items-center justify-center w-full h-full text-white">
                  <item.icon
                    size={isSmall ? 9 : 11}
                    className="mb-[1px] opacity-90"
                  />
                  <span
                    className={clsx(
                      "font-semibold leading-tight mt-[1px]",
                      isSmall ? "text-[10px]" : "text-xs",
                    )}
                  >
                    {item.amount}
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
        <span className="text-2xl font-bold text-[#0a1128] dark:text-white tracking-tight relative z-10">
          {totalValue}
        </span>
        <span className="text-[9px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mt-0.5 relative z-10">
          {franchiseModelsUI.avgTotalMobile}
        </span>
      </div>

      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, y: 10, filter: "blur(4px)" }}
            className="absolute pointer-events-none bg-white dark:bg-[#0a1128] border border-gray-200 dark:border-gray-700 text-[#0a1128] dark:text-white px-3.5 py-2.5 rounded-[4px] shadow-xl z-50 flex flex-col gap-1 whitespace-nowrap"
            style={{
              left: hoveredItem.x,
              top: hoveredItem.y - 10,
              transform: "translate(-50%, -100%)",
            }}
          >
            <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300">
              <hoveredItem.item.icon size={13} className="text-[#d4af37]" />
              {hoveredItem.item.label}
            </span>
            <span className="text-[#0a1128] dark:text-white font-bold text-sm">
              {hoveredItem.item.amount}{" "}
              <span className="text-gray-500 dark:text-gray-400 font-semibold text-[10px] ml-1 uppercase tracking-wider">
                ({hoveredItem.item.percentage}%)
              </span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FranchiseModelsMobile() {
  const [activeModel, setActiveModel] = useState(
    franchiseModelsData.models.find((m) => m.id === "mall-outlet")?.id ||
      franchiseModelsData.models[0].id,
  );
  const [viewType, setViewType] = useState<"chart" | "table">("chart");
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);

  const selected = franchiseModelsData.models.find(
    (m) => m.id === activeModel,
  )!;

  const leftMetrics = useMemo(
    () => getModelSpecifications(selected),
    [selected],
  );
  const rightMetrics = useMemo(() => getRightMetrics(), []);

  const tabsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({
        left: direction === "left" ? -120 : 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-4 py-8 flex flex-col gap-6 relative bg-white dark:bg-[#0a1128] transition-colors duration-300">
      <SectionHeader
        overline={franchiseModelsData.sectionLabel}
        title={franchiseModelsData.title}
        subtitle={franchiseModelsData.subtitle}
        align="center"
      />

      <div className="relative z-10 w-full overflow-hidden group flex items-center mb-4 mt-2">
        {canScrollLeft && (
          <button
            onClick={() => scrollTabs("left")}
            className="absolute left-0 z-20 h-full px-1.5 bg-gradient-to-r from-white/90 dark:from-[#0a1128] to-transparent flex items-center justify-start text-[#0a1128] dark:text-white"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div
          ref={tabsRef}
          onScroll={checkScroll}
          className="flex gap-1.5 w-full overflow-x-auto scrollbar-hide p-1.5 scroll-smooth bg-white/70 dark:bg-[#0e172f]/70 backdrop-blur-xl rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] border border-gray-200/80 dark:border-white/10 relative"
        >
          {franchiseModelsData.models.map((model) => {
            const isActive = model.id === activeModel;
            const Icon = model.icon;
            return (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className={clsx(
                  "shrink-0 relative flex flex-col items-center justify-center text-center px-2 py-2.5 rounded-[4px] transition-all duration-300 w-[90px] focus-visible:outline-none z-10",
                  !isActive && "hover:bg-white/50 dark:hover:bg-white/5",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileTabActive"
                    className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#121c33] to-[#0a1128] dark:from-[#16254c] dark:via-[#0e1a38] dark:to-[#0a1128] border border-[#d4af37]/60 rounded-[4px] shadow-[0_4px_20px_rgba(212,175,55,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-md"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                      mass: 0.8,
                    }}
                  >
                    <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
                  </motion.div>
                )}
                <motion.div
                  className={clsx(
                    "relative z-10 w-7 h-7 rounded-[2px] flex items-center justify-center mb-1 transition-all duration-300 backdrop-blur-sm",
                    isActive
                      ? "bg-gradient-to-br from-[#d4af37]/30 to-[#d4af37]/10 border border-[#d4af37]/60 text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                      : "bg-white/80 dark:bg-[#0a1128]/80 text-gray-500 border border-transparent shadow-sm",
                  )}
                  animate={
                    isActive
                      ? { scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Icon
                    size={13}
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
                    "relative z-10 font-bold text-xs mb-0.5 transition-colors duration-300",
                    isActive
                      ? "text-white"
                      : "text-[#0a1128] dark:text-gray-200",
                  )}
                >
                  {model.name}
                </span>
                <span
                  className={clsx(
                    "relative z-10 text-[10px] font-semibold tracking-wider transition-colors duration-300",
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

        {canScrollRight && (
          <button
            onClick={() => scrollTabs("right")}
            className="absolute right-0 z-20 h-full px-1.5 bg-gradient-to-l from-white/90 dark:from-[#0a1128] to-transparent flex items-center justify-end text-[#0a1128] dark:text-white"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center pt-2">
          <div className="w-full flex justify-center mb-6 z-50">
            <div className="w-48">
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
                <DonutChart
                  data={selected.costBreakdown}
                  totalValue={selected.avgTotal}
                />
                <div className="flex items-center justify-center gap-1.5 mt-8 animate-bounce">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    {franchiseModelsUI.tapSegmentsHint}
                  </span>
                  <MousePointerClick size={14} className="text-blue-500" />
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
                <CostBreakdownTable
                  data={selected.costBreakdown}
                  totalValue={selected.avgTotal}
                />
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
            className="flex flex-col bg-white dark:bg-[#121c33] rounded-[4px] overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#0a1128]/95 via-[#16254c]/90 to-[#0a1128]/95 backdrop-blur-xl p-4 flex items-center justify-between shrink-0 relative overflow-hidden border-b border-[#d4af37]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] min-h-[72px]">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />
              <div className="flex items-center gap-3 relative z-10">
                <motion.div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#d4af37]/25 via-white/10 to-[#d4af37]/10 border border-[#d4af37]/50 shadow-[0_0_12px_rgba(212,175,55,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-md flex items-center justify-center text-[#d4af37] shrink-0">
                  <selected.icon size={18} />
                </motion.div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-widest block leading-none mb-1">
                    {franchiseModelsUI.specificationLabel}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight truncate">
                    {selected.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-3 relative overflow-hidden">
              <div className="relative flex flex-col pt-1">
                <div className="absolute left-[32px] -translate-x-1/2 -top-[16px] bottom-[24px] w-[2px] pointer-events-none z-0 origin-top">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37]/60 to-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.35)]" />
                  <div className="absolute inset-0 border-l border-dashed border-[#ffd700]/70" />
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

                <div className="flex flex-col gap-3 relative z-10">
                  {leftMetrics.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{
                        scale: 1.02,
                        x: 4,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        },
                      }}
                      className="rounded-[4px] border border-gray-200/80 dark:border-gray-800 shadow-sm p-3 bg-gray-50/90 dark:bg-[#0a1128]/90 backdrop-blur-sm flex items-center justify-between gap-3 relative z-10 min-h-[58px]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <motion.div
                          whileHover={{ scale: 1.08, rotate: 4 }}
                          className={clsx(
                            "w-9 h-9 rounded-[4px] flex items-center justify-center shrink-0 shadow-sm relative z-10",
                            stat.color,
                          )}
                        >
                          <stat.icon size={16} strokeWidth={2.2} />
                        </motion.div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                            {stat.label}
                          </span>
                          <span className="text-sm font-bold text-[#0a1128] dark:text-white tracking-tight truncate">
                            {stat.value}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {stat.hasStaffModal ? (
                          <button
                            onClick={() => setIsStaffModalOpen(true)}
                            className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2 py-0.5 rounded-[2px] border border-blue-200/60 dark:border-blue-700/50 flex items-center gap-1 hover:bg-blue-100 transition-colors"
                          >
                            <span>Staff</span>
                            <Info size={11} strokeWidth={2.5} />
                          </button>
                        ) : (
                          <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-2 py-0.5 rounded-[2px] border border-gray-200 dark:border-gray-700/60">
                            {stat.badge}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col bg-white dark:bg-[#121c33] rounded-[4px] overflow-hidden">
          <div className="bg-gradient-to-r from-[#0a1128]/95 via-[#16254c]/90 to-[#0a1128]/95 backdrop-blur-xl p-4 flex items-center justify-between shrink-0 relative overflow-hidden border-b border-[#d4af37]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] min-h-[72px]">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />
            <div className="flex items-center gap-3 relative z-10">
              <motion.div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#d4af37]/25 via-white/10 to-[#d4af37]/10 border border-[#d4af37]/50 shadow-[0_0_12px_rgba(212,175,55,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-md flex items-center justify-center text-[#d4af37] shrink-0">
                <TrendingUp size={18} />
              </motion.div>
              <div className="flex flex-col justify-center min-w-0">
                <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-widest block leading-none mb-1">
                  FINANCIAL METRICS
                </span>
                <h3 className="text-base font-bold text-white leading-tight truncate">
                  {revenueROIData.sectionLabel}
                </h3>
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col gap-3 relative overflow-hidden">
            <div className="relative flex flex-col pt-1">
              <div className="absolute left-[32px] -translate-x-1/2 -top-[16px] bottom-[24px] w-[2px] pointer-events-none z-0 origin-top">
                <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37]/60 to-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.35)]" />
                <motion.div
                  className="absolute -left-[3px] -translate-y-1/2 w-[8px] h-14 rounded-full bg-gradient-to-b from-transparent via-[#ffd700] to-transparent shadow-[0_0_16px_#ffd700]"
                  animate={{
                    top: ["0%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                {rightMetrics.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{
                      scale: 1.02,
                      x: 4,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    className="rounded-[4px] border border-gray-200/80 dark:border-gray-800 shadow-sm p-3 bg-gray-50/90 dark:bg-[#0a1128]/90 backdrop-blur-sm flex items-center justify-between gap-3 min-h-[58px]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: -4 }}
                        className={clsx(
                          "w-9 h-9 rounded-[4px] flex items-center justify-center shrink-0 shadow-sm relative z-10",
                          stat.color,
                        )}
                      >
                        <stat.icon size={16} strokeWidth={2.2} />
                      </motion.div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                          {stat.label}
                        </span>
                        <span className="text-sm font-bold text-[#0a1128] dark:text-white tracking-tight truncate">
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
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isStaffModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
              onClick={() => setIsStaffModalOpen(false)}
            >
              <motion.div
                initial={{
                  scale: 0.3,
                  opacity: 0,
                  y: 40,
                  filter: "blur(20px)",
                  borderRadius: "100px",
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  borderRadius: "4px",
                }}
                exit={{
                  scale: 0.5,
                  opacity: 0,
                  y: 20,
                  filter: "blur(15px)",
                  borderRadius: "50px",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  mass: 1.5,
                }}
                className="w-full max-w-[90vw] sm:max-w-md bg-white/80 dark:bg-[#0a1128]/80 backdrop-blur-2xl rounded-[4px] shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-5 relative overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-[2px] bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Users size={15} strokeWidth={2.5} />
                    </div>
                    <h5 className="text-xs font-bold text-[#0a1128] dark:text-white uppercase tracking-wider">
                      {franchiseModelsUI.staffRequirements}
                    </h5>
                  </div>
                  <button
                    onClick={() => setIsStaffModalOpen(false)}
                    className="w-6 h-6 flex items-center justify-center rounded-[2px] bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 dark:bg-gray-800 dark:hover:bg-red-900/50 transition-colors"
                    aria-label="Close"
                  >
                    <X size={14} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="flex flex-col gap-2.5 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin">
                  {selected.staffDetails?.map((staff, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col bg-gray-50 dark:bg-[#121c33] p-3 rounded-[4px] border border-gray-200 dark:border-gray-800 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-1">
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
                      <div className="flex items-center gap-2 mb-1 text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        <span>{staff.type}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <span>{staff.experience}</span>
                      </div>
                      <p className="text-[11px] font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                        {staff.remarks}
                      </p>
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
