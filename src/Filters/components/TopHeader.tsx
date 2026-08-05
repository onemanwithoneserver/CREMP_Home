import { motion } from "framer-motion";
import { Building2, Briefcase, SlidersHorizontal } from "lucide-react";

interface TopHeaderProps {
  activeTab: "commercial" | "business";
  onTabChange: (tab: "commercial" | "business") => void;
  onOpenAdvanced: () => void;
  commercialCount?: number;
  businessCount?: number;
  isMobile?: boolean;
}

export default function TopHeader({
  activeTab,
  onTabChange,
  onOpenAdvanced,
  commercialCount = 30,
  businessCount = 356,
  isMobile: _isMobile = false,
}: TopHeaderProps) {
  return (
    <header className="w-full bg-[#08122a] border-b border-white/10 text-white select-none relative z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Center Category Switcher */}
        <div className="flex items-center bg-[#0d1c3e] p-1 rounded-xl border border-white/15 max-w-sm sm:max-w-md w-full justify-center shadow-inner">
          <button
            type="button"
            onClick={() => onTabChange("commercial")}
            className={`flex-1 relative flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === "commercial"
                ? "text-white shadow-sm"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {activeTab === "commercial" && (
              <motion.div
                layoutId="headerCategoryPill"
                className="absolute inset-0 bg-[#08122a] border border-[#f59e0b]/80 rounded-lg -z-10 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}
            <Building2
              className={`w-4 h-4 shrink-0 ${
                activeTab === "commercial" ? "text-[#f59e0b]" : "text-gray-400"
              }`}
            />
            <span className="font-bold">Commercial</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-extrabold shrink-0 ${
                activeTab === "commercial"
                  ? "bg-[#f59e0b] text-[#08122a]"
                  : "bg-white/10 text-gray-400"
              }`}
            >
              {commercialCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange("business")}
            className={`flex-1 relative flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === "business"
                ? "text-white shadow-sm"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {activeTab === "business" && (
              <motion.div
                layoutId="headerCategoryPill"
                className="absolute inset-0 bg-[#08122a] border border-[#f59e0b]/80 rounded-lg -z-10 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}
            <Briefcase
              className={`w-4 h-4 shrink-0 ${
                activeTab === "business" ? "text-[#f59e0b]" : "text-gray-400"
              }`}
            />
            <span className="font-bold">Business</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-extrabold shrink-0 ${
                activeTab === "business"
                  ? "bg-[#f59e0b] text-[#08122a]"
                  : "bg-white/10 text-gray-400"
              }`}
            >
              {businessCount}
            </span>
          </button>
        </div>

        {/* Right Advanced Filters Button */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={onOpenAdvanced}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-[#f59e0b]/70 text-[#f59e0b] text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-[0.98]"
          >
            <SlidersHorizontal className="w-4 h-4 stroke-[2.2]" />
            <span className="hidden sm:inline">Advanced Filters</span>
            <span className="sm:hidden">Filters</span>
          </button>
        </div>
      </div>
    </header>
  );
}
