import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";

export interface ExploreHeaderTabsProps {
  activeTab: "explore" | "commercial" | "business";
  onChange: (tab: "explore" | "commercial" | "business") => void;
}

const tabs = [
  {
    id: "explore" as const,
    label: "Video",
    sublabel: "Hub",
    gradient: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52,211,153,0.25)",
    icon: (active: boolean) => (
      <VideoLibraryOutlinedIcon
        sx={{
          fontSize: 20,
          color: active ? "#d4af37" : "#ffffff",
          transition: "color 0.3s ease",
        }}
      />
    ),
  },
  {
    id: "commercial" as const,
    label: "Commercial",
    sublabel: "Properties",
    gradient: "from-blue-500 to-indigo-600",
    glowColor: "rgba(99,102,241,0.25)",
    icon: (active: boolean) => (
      <svg
        width="20"
        height="20"
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
    gradient: "from-orange-400 to-red-500",
    glowColor: "rgba(251,146,60,0.25)",
    icon: (active: boolean) => (
      <svg
        width="20"
        height="20"
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
  const [pressedTab, setPressedTab] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0d1f4b 0%, #0b1b42 100%)",
      }}
    >
      {/* Top gold accent line */}
      <div
        className="absolute top-0 left-0 w-full h-[1px] z-20"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, rgba(212,175,55,0.15) 50%, transparent 90%)",
        }}
      />

      {/* Ambient floating particles */}
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-[#d4af37]/20 pointer-events-none z-0"
        animate={{
          x: [0, 60, 120, 180, 240],
          y: [20, 10, 25, 8, 20],
          opacity: [0, 0.4, 0.2, 0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ left: "5%", top: "30%" }}
      />
      <motion.div
        className="absolute w-0.5 h-0.5 rounded-full bg-white/10 pointer-events-none z-0"
        animate={{
          x: [0, -40, -80, -120],
          y: [15, 25, 12, 15],
          opacity: [0, 0.3, 0.15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ right: "10%", top: "50%" }}
      />

      {tabs.map((tab, idx) => {
        const isActive = activeTab === tab.id;
        const isPressed = pressedTab === tab.id;

        return (
          <motion.button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            onPointerDown={() => setPressedTab(tab.id)}
            onPointerUp={() => setPressedTab(null)}
            onPointerLeave={() => setPressedTab(null)}
            whileTap={{ scale: 0.96 }}
            className="flex-1 relative flex items-center justify-center gap-2.5 py-3 outline-none cursor-pointer select-none"
            style={{
              borderRight:
                idx < tabs.length - 1
                  ? "1px solid rgba(255,255,255,0.04)"
                  : undefined,
            }}
          >
            {/* Active background radial glow */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId="exploreTabBg"
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 40%, transparent 70%)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </AnimatePresence>

            {/* Press ripple effect */}
            <AnimatePresence>
              {isPressed && (
                <motion.div
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Icon with gradient background pill */}
            <motion.div
              animate={{
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.7,
              }}
              whileHover={{ scale: isActive ? 1.05 : 0.95, opacity: isActive ? 1 : 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative z-10 flex items-center justify-center"
            >
              {/* Icon glow when active */}
              {isActive && (
                <motion.div
                  className="absolute inset-[-4px] rounded-full"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: `radial-gradient(circle, ${tab.glowColor}, transparent 70%)`,
                    filter: "blur(4px)",
                  }}
                  transition={{ duration: 0.4 }}
                />
              )}
              <div className="relative">
                {tab.icon(isActive)}
              </div>
            </motion.div>

            {/* Label with staggered entrance */}
            <motion.div
              animate={{
                opacity: 1, // Removed inactive fade to keep it visible
                x: isActive ? 0 : -1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative z-10 flex flex-col text-left leading-none"
            >
              <motion.span
                className="font-bold tracking-wide"
                animate={{
                  color: isActive ? "#d4af37" : "#e2e8f0", // Very light gray when inactive
                  letterSpacing: isActive ? "0.06em" : "0.04em",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: "11.5px",
                  lineHeight: "1.15",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {tab.label}
              </motion.span>
              {tab.sublabel && (
                <motion.span
                  className="font-semibold"
                  animate={{
                    color: isActive ? "#d4af37" : "#cbd5e1", // Light gray when inactive
                    opacity: isActive ? 0.9 : 0.85, // Much higher opacity when inactive
                  }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  style={{
                    fontSize: "10px",
                    lineHeight: "1.4",
                    fontFamily: "'Outfit', sans-serif",
                    letterSpacing: "0.03em",
                  }}
                >
                  {tab.sublabel}
                </motion.span>
              )}
            </motion.div>

            {/* Active underline indicator with glow */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId="exploreTabIndicator"
                  className="absolute bottom-0 h-[2.5px] rounded-full z-10"
                  style={{
                    left: "15%",
                    right: "15%",
                    background:
                      "linear-gradient(90deg, transparent, #bf953f 15%, #d4af37 35%, #f5d76e 50%, #d4af37 65%, #bf953f 85%, transparent)",
                    boxShadow:
                      "0 0 10px rgba(212,175,55,0.6), 0 0 25px rgba(212,175,55,0.2), 0 2px 4px rgba(212,175,55,0.3)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 32,
                  }}
                />
              )}
            </AnimatePresence>

            {/* Shimmer sweep on active tab */}
            {isActive && (
              <motion.div
                className="absolute inset-0 z-5 pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="absolute top-0 bottom-0 w-[60%]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 60%, transparent)",
                  }}
                  animate={{ x: ["-100%", "250%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 4,
                  }}
                />
              </motion.div>
            )}
          </motion.button>
        );
      })}

      {/* Bottom border gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-[1px] z-20"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(212,175,55,0.12) 30%, rgba(212,175,55,0.2) 50%, rgba(212,175,55,0.12) 70%, transparent 95%)",
        }}
      />
    </div>
  );
}
