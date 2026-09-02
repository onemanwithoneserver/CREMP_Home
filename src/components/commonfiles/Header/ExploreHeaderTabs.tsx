import { motion } from "framer-motion";

export interface ExploreHeaderTabsProps {
  activeTab: "explore" | "commercial" | "business";
  onChange: (tab: "explore" | "commercial" | "business") => void;
}

const tabs = [
  {
    id: "explore" as const,
    label: "Explore",
    sublabel: undefined,
    icon: (active: boolean) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#d4af37" : "#ffffff"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: "commercial" as const,
    label: "Commercial",
    sublabel: "Properties",
    icon: (active: boolean) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#d4af37" : "#ffffff"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    id: "business" as const,
    label: "Business",
    sublabel: "Opportunities",
    icon: (active: boolean) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#d4af37" : "#ffffff"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect x="2" y="8" width="20" height="12" rx="2" />
      </svg>
    ),
  },
];

export default function ExploreHeaderTabs({
  activeTab,
  onChange,
}: ExploreHeaderTabsProps) {
  return (
    <div
      className="flex w-full relative"
      style={{
        background:
          "linear-gradient(180deg, #0d1f4b 0%, #0b1b42 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {tabs.map((tab, idx) => {
        const isActive = activeTab === tab.id;
        return (
          <motion.button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            whileTap={{ scale: 0.97 }}
            className="flex-1 relative flex items-center justify-center gap-2.5 py-2.5 outline-none cursor-pointer"
            style={{
              borderRight:
                idx < tabs.length - 1
                  ? "1px solid rgba(255,255,255,0.06)"
                  : undefined,
            }}
          >
            {/* Active background glow */}
            {isActive && (
              <motion.div
                layoutId="exploreTabBg"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.08) 0%, transparent 70%)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                }}
              />
            )}

            {/* Icon */}
            <motion.div
              animate={{
                scale: isActive ? 1 : 0.9,
                opacity: isActive ? 1 : 0.45,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="relative z-10 flex items-center justify-center"
            >
              {tab.icon(isActive)}
            </motion.div>

            {/* Label */}
            <motion.div
              animate={{ opacity: isActive ? 1 : 0.45 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex flex-col text-left leading-none"
            >
              <span
                className="font-bold tracking-wide"
                style={{
                  fontSize: "11px",
                  lineHeight: "1.15",
                  color: isActive ? "#d4af37" : "#ffffff",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {tab.label}
              </span>
              {tab.sublabel && (
                <span
                  className="font-semibold tracking-wide"
                  style={{
                    fontSize: "10.5px",
                    lineHeight: "1.3",
                    color: isActive ? "#d4af37" : "#ffffff",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {tab.sublabel}
                </span>
              )}
            </motion.div>

            {/* Active underline indicator */}
            {isActive && (
              <motion.div
                layoutId="exploreTabIndicator"
                className="absolute bottom-0 h-[2.5px] rounded-full"
                style={{
                  left: "20%",
                  right: "20%",
                  background:
                    "linear-gradient(90deg, transparent, #d4af37 20%, #f5d76e 50%, #d4af37 80%, transparent)",
                  boxShadow:
                    "0 0 8px rgba(212,175,55,0.5), 0 0 20px rgba(212,175,55,0.15)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
