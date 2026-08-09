import { motion } from "framer-motion";
import { Building2, Briefcase } from "lucide-react";

interface TopHeaderProps {
  activeTab: "commercial" | "business";
  onTabChange: (tab: "commercial" | "business") => void;
  commercialCount?: number;
  businessCount?: number;
}

const TABS = [
  { id: "commercial" as const, label: "Commercial Properties", icon: Building2 },
  { id: "business" as const, label: "Business Opportunities", icon: Briefcase },
];

export default function TopHeader({
  activeTab,
  onTabChange,
  commercialCount = 30,
  businessCount = 356,
}: TopHeaderProps) {
  const counts = { commercial: commercialCount, business: businessCount };

  return (
    <header className="w-full bg-[#0b1b42] text-white select-none relative z-30 shadow-[0_4px_20px_rgba(11,27,66,0.3)]">
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 relative">
        <div
          role="tablist"
          aria-label="Listing category"
          className="flex items-center bg-white/[0.06] backdrop-blur-md p-1 rounded-lg border border-white/[0.08] w-full justify-center gap-1.5"
        >
          {TABS.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            const count = counts[id];

            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onTabChange(id)}
                className={`flex-1 relative flex items-center justify-center gap-2 py-2 px-3 rounded-md text-xs sm:text-sm font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/60 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-white/45 hover:text-white/75"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="headerCategoryPill"
                    className="absolute inset-0 bg-gradient-to-b from-[#0b1b42] to-[#0f2254] border border-[#d4af37]/50 rounded-md -z-10 shadow-[0_0_16px_rgba(212,175,55,0.15)]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                      mass: 0.8,
                    }}
                  >
                    <div className="absolute top-0 inset-x-3 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-black/25 border border-[#d4af37]/40 text-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.2)]"
                      : "bg-white/[0.05] text-white/45 border border-transparent"
                  }`}
                >
                  <Icon
                    className="w-3.5 h-3.5"
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </motion.div>

                <span className="font-bold whitespace-nowrap leading-tight">
                  {label}
                </span>

                {isActive && count !== undefined && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 25,
                      delay: 0.1,
                    }}
                    className="ml-1 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30"
                  >
                    {count}
                  </motion.span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
