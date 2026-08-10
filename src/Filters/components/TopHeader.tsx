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
}: TopHeaderProps) {
  return (
    <header className="w-full bg-white/20 backdrop-blur-2xl border-b border-white/30 text-gray-900 select-none relative z-30 shadow-[0_4px_24px_rgba(11,27,66,0.06)] dark:bg-white/5 dark:text-white dark:border-white/10 dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      
      <motion.div
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-1 py-3 flex items-center justify-between gap-4 relative">
        <div
          role="tablist"
          aria-label="Listing category"
          className="flex items-center bg-white/30 backdrop-blur-md p-1.5 rounded-lg border border-white/40 w-full justify-center gap-1.5 dark:bg-black/20 dark:border-white/10"
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
                className={`flex-1 relative flex items-center justify-center gap-1.5 sm:gap-2 py-1.5 sm:py-2 px-1 sm:px-3 rounded-md font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/60 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-800 dark:text-white/45 dark:hover:text-white/75"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="headerCategoryPill"
                    className="absolute inset-0 bg-[#0b1b42] dark:bg-[#0b1b42] backdrop-blur-md border border-[#d4af37]/50 rounded-md -z-10 shadow-[0_4px_20px_rgba(212,175,55,0.2),0_2px_8px_rgba(11,27,66,0.3)]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                      mass: 0.8,
                    }}
                  >
                    <div className="absolute top-0 inset-x-3 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
                    <div className="absolute bottom-0 inset-x-3 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-25" />
                    
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#d4af37]/15 rounded-full blur-xl pointer-events-none" />
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  animate={isActive ? { scale: [1, 1.12, 1], rotate: [0, -6, 6, 0] } : { scale: 1, rotate: 0 }}
                  transition={
                    isActive
                      ? { duration: 0.5, ease: "easeInOut" }
                      : { type: "spring", stiffness: 400, damping: 20 }
                  }
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 border border-[#d4af37]/50 text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.25)]"
                      : "bg-black/5 dark:bg-white/[0.05] text-gray-400 dark:text-white/45 border border-transparent"
                  }`}
                >
                  <Icon
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </motion.div>

                <span className="font-bold sm:whitespace-nowrap leading-[1.1] text-center text-[10px] sm:text-[12px]">
                  {label}
                </span>

              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
