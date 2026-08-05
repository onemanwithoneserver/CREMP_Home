import { motion } from "framer-motion";
import { Building2, Briefcase } from "lucide-react";

interface TopHeaderProps {
  activeTab: "commercial" | "business";
  onTabChange: (tab: "commercial" | "business") => void;
  commercialCount?: number;
  businessCount?: number;
}

export default function TopHeader({
  activeTab,
  onTabChange,
  commercialCount = 30,
  businessCount = 356,
}: TopHeaderProps) {
  return (
    <header className="w-full bg-[#0b1b42] border-b border-[#d4af37]/20 text-white select-none relative z-30 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center bg-white/5 backdrop-blur-md p-1 rounded-[4px] border border-white/10 max-w-sm sm:max-w-md w-full justify-center gap-1.5">
          <button
            type="button"
            onClick={() => onTabChange("commercial")}
            className={`flex-1 relative flex items-center justify-center gap-2 py-1.5 px-3 rounded-[4px] text-xs sm:text-sm font-bold transition-all ${
              activeTab === "commercial"
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {activeTab === "commercial" && (
              <motion.div
                layoutId="headerCategoryPill"
                className="absolute inset-0 bg-[#0b1b42] border border-[#d4af37]/50 rounded-[4px] -z-10 shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.8 }}
              >
                <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
              </motion.div>
            )}
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
              className={`w-7 h-7 rounded-[4px] flex items-center justify-center shrink-0 transition-all duration-300 ${
                activeTab === "commercial"
                  ? "bg-black/30 border border-[#d4af37]/40 text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                  : "bg-white/5 text-gray-400 border border-transparent"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" strokeWidth={activeTab === "commercial" ? 2.5 : 2} />
            </motion.div>
            <span className="font-bold">Commercial</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-[2px] font-mono font-extrabold shrink-0 ${
                activeTab === "commercial"
                  ? "bg-[#d4af37] text-[#0b1b42]"
                  : "bg-white/10 text-gray-400"
              }`}
            >
              {commercialCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange("business")}
            className={`flex-1 relative flex items-center justify-center gap-2 py-1.5 px-3 rounded-[4px] text-xs sm:text-sm font-bold transition-all ${
              activeTab === "business"
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {activeTab === "business" && (
              <motion.div
                layoutId="headerCategoryPill"
                className="absolute inset-0 bg-[#0b1b42] border border-[#d4af37]/50 rounded-[4px] -z-10 shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.8 }}
              >
                <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
              </motion.div>
            )}
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
              className={`w-7 h-7 rounded-[4px] flex items-center justify-center shrink-0 transition-all duration-300 ${
                activeTab === "business"
                  ? "bg-black/30 border border-[#d4af37]/40 text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                  : "bg-white/5 text-gray-400 border border-transparent"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" strokeWidth={activeTab === "business" ? 2.5 : 2} />
            </motion.div>
            <span className="font-bold">Business</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-[2px] font-mono font-extrabold shrink-0 ${
                activeTab === "business"
                  ? "bg-[#d4af37] text-[#0b1b42]"
                  : "bg-white/10 text-gray-400"
              }`}
            >
              {businessCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
