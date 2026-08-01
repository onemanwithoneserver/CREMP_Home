import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MousePointerClick,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  franchiseModelsData,
  franchiseModelsUI,
  getModelSpecifications,
  getRoiColor,
  getStaffBadgeColor,
  revenueROIData,
  viewOptions,
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
        className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-800 rounded-full pointer-events-none z-10 shadow-lg border border-gray-100 dark:border-gray-700"
        style={{
          width: size - strokeWidth * 2,
          height: size - strokeWidth * 2,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-2xl font-semibold text-[#0b1b42] dark:text-white tracking-tight relative z-10">
          {totalValue}
        </span>
        <span className="text-[9px] text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest mt-0.5 relative z-10">
          {franchiseModelsUI.avgTotalMobile}
        </span>
      </div>

      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, y: 10, filter: "blur(4px)" }}
            className="absolute pointer-events-none bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/50 dark:border-gray-700/50 text-[#0b1b42] dark:text-white px-4 py-3 rounded-2xl shadow-xl z-50 flex flex-col gap-1.5 whitespace-nowrap"
            style={{
              left: hoveredItem.x,
              top: hoveredItem.y - 10,
              transform: "translate(-50%, -100%)",
            }}
          >
            <span className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
              <hoveredItem.item.icon size={14} className="text-[#d4af37]" />
              {hoveredItem.item.label}
            </span>
            <span className="text-[#0b1b42] dark:text-white font-semibold text-sm">
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

  const specifications = useMemo(
    () => getModelSpecifications(selected),
    [selected],
  );

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
      tabsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-4 py-8 flex flex-col relative overflow-hidden bg-gray-50 dark:bg-gray-900">
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
            className="absolute left-0 z-10 h-full px-1 bg-gradient-to-r from-white dark:from-gray-900 to-transparent flex items-center justify-start text-[#0b1b42] dark:text-white"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div
          ref={tabsRef}
          onScroll={checkScroll}
          className="flex gap-1.5 w-full overflow-x-auto scrollbar-hide p-1.5 scroll-smooth bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700"
        >
          {franchiseModelsData.models.map((model) => {
            const isActive = model.id === activeModel;
            const Icon = model.icon;
            return (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className="shrink-0 relative flex flex-col items-center justify-center text-center px-2 py-2.5 rounded-xl transition-all duration-300 w-[90px] focus-visible:outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileTabActive"
                    className="absolute inset-0 bg-[#0a1128] dark:bg-gray-700 rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <motion.div
                  className={clsx(
                    "relative z-10 w-7 h-7 rounded-lg flex items-center justify-center mb-1 transition-colors duration-300",
                    isActive
                      ? "bg-[#d4af37]/20 text-[#d4af37]"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-500",
                  )}
                  animate={
                    isActive
                      ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Icon size={13} strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
                <span
                  className={clsx(
                    "relative z-10 font-semibold text-xs mb-0.5 transition-colors duration-300",
                    isActive
                      ? "text-white"
                      : "text-[#0b1b42] dark:text-gray-200",
                  )}
                >
                  {model.name}
                </span>
                <span
                  className={clsx(
                    "relative z-10 text-[10px] font-semibold tracking-wider transition-colors duration-300",
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

        {canScrollRight && (
          <button
            onClick={() => scrollTabs("right")}
            className="absolute right-0 z-10 h-full px-1 bg-gradient-to-l from-white dark:from-gray-900 to-transparent flex items-center justify-end text-[#0b1b42] dark:text-white"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      <div className="relative z-10 flex flex-col gap-4">
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
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
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
            className="flex flex-col gap-4"
          >
            <div className="p-2 -pt-4 flex flex-col gap-4 relative overflow-hidden">
              <div className="flex items-center justify-between pb-1">
              </div>

              <div className="relative flex flex-col pt-2">
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
                  {specifications.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-3 bg-white dark:bg-gray-800 flex items-center justify-between gap-3 relative z-10"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          className={clsx(
                            "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm relative z-10",
                            stat.color,
                          )}
                        >
                          <stat.icon size={16} strokeWidth={2.2} />
                        </motion.div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {stat.mobileLabel || stat.label}
                          </span>
                          <span className="text-[9px] font-semibold text-gray-400 dark:text-gray-500">
                            Milestone 0{i + 1}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#0b1b42] dark:text-white tracking-tight">
                          {stat.value}
                        </span>
                        {stat.extra && (
                          <button
                            onClick={() =>
                              stat.hasStaffModal &&
                              setIsStaffModalOpen(true)
                            }
                            className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                          >
                            <stat.extra size={14} strokeWidth={2.5} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="p-2  flex flex-col gap-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#0b1b42] dark:text-white">
              {revenueROIData.sectionLabel}
            </span>
          </div>

          <div className="relative flex flex-col pt-2">
            <div className="absolute left-[32px] -translate-x-1/2 top-[32px] bottom-[30px] w-[3px] pointer-events-none z-0">
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
                return (
                  <div
                    key={card.year}
                    className="rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-3 bg-white dark:bg-gray-800 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        className={clsx(
                          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm relative z-10",
                          getRoiColor(card.intent),
                        )}
                      >
                        <Icon size={16} strokeWidth={2.2} />
                      </motion.div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {card.year}
                        </span>
                        <span className="text-[9px] font-semibold text-gray-400 dark:text-gray-500">
                          {card.label || "Projected"}
                        </span>
                      </div>
                    </div>

                    <span className="text-sm font-semibold text-[#0b1b42] dark:text-white tracking-tight">
                      {card.range}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 bg-[#0a1128] dark:bg-gray-900 border border-[#d4af37]/40 rounded-2xl p-4 shadow-md flex items-center justify-between gap-3 relative overflow-hidden z-10">
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative shrink-0">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-10 h-10 rounded-xl bg-[#d4af37] text-[#0b1b42] flex items-center justify-center relative z-10 shadow-sm"
                  >
                    <Sparkles size={18} strokeWidth={2.2} />
                  </motion.div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-amber-500 uppercase tracking-widest">
                    {revenueROIData.paybackPeriod.destinationLabel}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {revenueROIData.paybackPeriod.mobileSubtitle}
                  </span>
                </div>
              </div>
              <span className="text-base font-semibold text-white tracking-tight relative z-10">
                {revenueROIData.paybackPeriod.title}
              </span>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isStaffModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
              onClick={() => setIsStaffModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ scale: 0.9, opacity: 0, y: 20, filter: "blur(8px)" }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                }}
                className="w-full max-w-[90vw] sm:max-w-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-3xl rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-white/50 dark:border-white/10 p-6 relative overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Users size={16} strokeWidth={2.5} />
                    </div>
                    <h5 className="text-sm font-semibold text-[#0b1b42] dark:text-white uppercase tracking-wider">
                      {franchiseModelsUI.staffRequirements}
                    </h5>
                  </div>
                  <button
                    onClick={() => setIsStaffModalOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-red-50 text-gray-500 hover:text-red-500 dark:bg-gray-800/80 dark:hover:bg-red-900/50 transition-colors"
                    aria-label="Close"
                  >
                    <X size={16} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
                  {selected.staffDetails?.map((staff, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl border border-white/60 dark:border-white/5 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
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
                      <div className="flex items-center gap-2 mb-1.5 text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        <span>{staff.type}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <span>{staff.experience}</span>
                      </div>
                      <p className="text-xs font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
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