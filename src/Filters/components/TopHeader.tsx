import { motion } from "framer-motion";
import { Building2, Briefcase } from "lucide-react";

interface TopHeaderProps {
  activeTab: "commercial" | "business";
  onTabChange: (tab: "commercial" | "business") => void;
  commercialCount?: number;
  businessCount?: number;
}

const TABS = [
  { id: "commercial" as const, label: "Commercial", icon: Building2 },
  { id: "business" as const, label: "Business", icon: Briefcase },
];

export default function TopHeader({
  activeTab,
  onTabChange,
  commercialCount = 30,
  businessCount = 356,
}: TopHeaderProps) {
  const counts = { commercial: commercialCount, business: businessCount };

  return (
    <header className="w-full bg-[#0b1b42] border-b border-cremp-accent/20 text-white select-none relative z-30 shadow-elevation-3">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cremp-accent/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Listing category"
          className="flex items-center bg-white/5 backdrop-blur-md p-1 rounded border border-white/10 max-w-sm sm:max-w-md w-full justify-center gap-1.5"
        >
          {TABS.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onTabChange(id)}
                className={`flex-1 relative flex items-center justify-center gap-2 py-1.5 px-3 rounded text-xs sm:text-sm font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/60 ${
                  isActive ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="headerCategoryPill"
                    className="absolute inset-0 bg-[#0b1b42] border border-cremp-accent/50 rounded -z-10 shadow-glow-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.8 }}
                  >
                    <div className="absolute top-0 inset-x-2 h-px bg-gradient-to-r from-transparent via-cremp-accent to-transparent opacity-80" />
                  </motion.div>
                )}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`w-7 h-7 rounded flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-black/30 border border-cremp-accent/40 text-cremp-accent shadow-glow-accent"
                      : "bg-white/5 text-white/50 border border-transparent"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
                <span className="font-bold">{label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-sm font-mono font-extrabold shrink-0 transition-colors duration-300 ${
                    isActive ? "bg-cremp-accent text-[#0b1b42]" : "bg-white/10 text-white/50"
                  }`}
                >
                  {counts[id]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
