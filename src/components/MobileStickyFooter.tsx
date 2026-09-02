import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Logo/CREMP.png";
import logoLight from "../Logo/CREMP_Light.png";

export interface MobileStickyFooterProps {
  activeTab?: "home" | "explore" | "saved" | "hire-broker" | "hand-picked" | "post-requirement" | string;
  onTabChange?: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  isLogo?: boolean;
}

export default function MobileStickyFooter({
  activeTab = "explore",
  onTabChange,
}: MobileStickyFooterProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [tapEffect, setTapEffect] = useState<string | null>(null);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const handleNav = (tab: string) => {
    setCurrentTab(tab);
    setTapEffect(tab);
    setTimeout(() => setTapEffect(null), 400);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const navItems: NavItem[] = [
    { id: "home", label: "CREMP", isLogo: true },
    { id: "explore", label: "Explore" },
    { id: "saved", label: "Saved" },
    { id: "hire-broker", label: "Hire Broker" },
    { id: "hand-picked", label: "Hand Picked" },
    { id: "post-requirement", label: "Post Req" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main mobile navigation"
      className="
        relative left-0 right-0 z-50
        flex flex-col w-full
        bg-[#0b1b42]
        border-t border-white/[0.08]
        shadow-[0_-12px_36px_rgba(0,0,0,0.8)]
        select-none font-['Outfit',sans-serif]
        pb-[max(calc(env(safe-area-inset-bottom)+0.2rem),0.4rem)]
      "
    >
      <div className="flex items-stretch justify-between w-full relative px-1 pt-1.5 pb-0.5">
        {navItems.map((item, index) => {
          const isActive = currentTab === item.id;
          const isTapped = tapEffect === item.id;

          return (
            <div key={item.id} className="flex-1 flex items-stretch relative min-w-0">
              {/* Vertical divider */}
              {index > 0 && (
                <div className="self-stretch flex items-center py-2.5 shrink-0 -ml-[0.5px]">
                  <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-white/[0.12] to-transparent opacity-60" />
                </div>
              )}

              <motion.button
                type="button"
                whileTap={{ scale: 0.92 }}
                onClick={() => handleNav(item.id)}
                aria-label={item.isLogo ? "Go to CREMP home" : item.label}
                aria-current={isActive ? "page" : undefined}
                className="
                  relative group flex flex-1 min-w-0 flex-col items-center justify-center
                  gap-1 py-1.5 px-0.5 rounded-[4px] cursor-pointer outline-none
                  bg-transparent border-none
                  transition-colors duration-300 ease-out
                  [-webkit-tap-highlight-color:transparent]
                  overflow-hidden
                "
              >
                {/* Centered Top Golden Indicator Bar with Downward Shadow / Glow Effect */}
                {isActive && (
                  <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none z-20">
                    {/* Soft downward radiating golden shadow beam */}
                    <div className="absolute -top-1 w-16 h-10 bg-gradient-to-b from-[#d4af37]/35 via-[#d4af37]/10 to-transparent blur-md rounded-full pointer-events-none" />
                    <motion.div
                      layoutId="activeTopBar"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 32,
                      }}
                      className="
                        h-[3px] w-8 rounded-b-full
                        bg-gradient-to-r from-[#bf953f] via-[#fde047] to-[#b38728]
                        shadow-[0_4px_18px_rgba(251,191,36,0.95),0_0_8px_rgba(245,158,11,0.85)]
                        relative z-10
                      "
                    />
                  </div>
                )}

                {/* Tap micro ripple */}
                <AnimatePresence>
                  {isTapped && (
                    <motion.span
                      initial={{ scale: 0.2, opacity: 0.6 }}
                      animate={{ scale: 2, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute w-7 h-7 rounded-full bg-[#d4af37]/25 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Icon Container */}
                <motion.div
                  animate={
                    isActive
                      ? {
                          scale: 1.1,
                          y: -0.5,
                          rotate: [0, -20, 20, -10, 10, -5, 5, 0],
                        }
                      : {
                          scale: 1,
                          y: 0,
                          rotate: 0,
                        }
                  }
                  transition={{
                    rotate: { duration: 0.6, ease: "easeInOut" },
                    default: { type: "spring", stiffness: 450, damping: 26 },
                  }}
                  className={`
                    flex items-center justify-center shrink-0 w-6 h-6 relative z-10
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                        : "text-white/65 group-hover:text-white"
                    }
                  `}
                >
                  {/* Item 1: CREMP Logo */}
                  {item.id === "home" && (
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        alt="CREMP Logo"
                        src={logo}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== logoLight) {
                            target.src = logoLight;
                          }
                        }}
                        className={`w-full h-full object-contain transition-all duration-300 ${
                          isActive
                            ? "drop-shadow-[0_0_8px_rgba(246,178,59,0.75)] scale-105"
                            : "drop-shadow-[0_0_4px_rgba(246,178,59,0.3)] opacity-90 group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  )}

                  {/* Item 2: Explore (Video Frame + Search Glass) */}
                  {item.id === "explore" && (
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <motion.path
                        d={isActive ? "M13 18H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z" : "M13 18H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"}
                        initial={false}
                        animate={{ fill: isActive ? "currentColor" : "transparent" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.polygon
                        points="8 7.5 8 13.5 13 10.5"
                        initial={false}
                        animate={{
                          fill: isActive ? "#0b1b42" : "transparent",
                          stroke: isActive ? "#0b1b42" : "currentColor",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.circle
                        cx="17.5"
                        cy="17.5"
                        r="3.5"
                        initial={false}
                        animate={{ fill: isActive ? "currentColor" : "transparent" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.path
                        d="M20 20L22.5 22.5"
                        initial={false}
                        animate={{ strokeWidth: isActive ? 2.5 : 1.8 }}
                        transition={{ duration: 0.3 }}
                      />
                    </svg>
                  )}

                  {/* Item 3: Saved (Heart) */}
                  {item.id === "saved" && (
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <motion.path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        initial={false}
                        animate={{ fill: isActive ? "currentColor" : "transparent" }}
                        transition={{ duration: 0.3 }}
                      />
                    </svg>
                  )}

                  {/* Item 4: Hire Broker (User Profile + Badge) */}
                  {item.id === "hire-broker" && (
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <motion.circle
                        cx="10"
                        cy="7"
                        r="4"
                        initial={false}
                        animate={{ fill: isActive ? "currentColor" : "transparent" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.path
                        d={isActive ? "M3 21v-2a5.5 5.5 0 0 1 11 0v2Z" : "M3 21v-2a5.5 5.5 0 0 1 7.5-5.1"}
                        initial={false}
                        animate={{ fill: isActive ? "currentColor" : "transparent" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.circle
                        cx="17.5"
                        cy="16.5"
                        r="3.5"
                        initial={false}
                        animate={{ fill: isActive ? "currentColor" : "transparent" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.path
                        d="M17.5 16.5v.01"
                        initial={false}
                        animate={{
                          stroke: isActive ? "#0b1b42" : "currentColor",
                          strokeWidth: isActive ? 2.5 : 1.8,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </svg>
                  )}

                  {/* Item 5: Hand Picked (Star Badge) */}
                  {item.id === "hand-picked" && (
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <motion.path
                        d="M12 2.5a1.5 1.5 0 0 1 1 .5l1.5 1.5a1.5 1.5 0 0 0 1 .5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 0 .5 1l1.5 1.5a1.5 1.5 0 0 1 0 2l-1.5 1.5a1.5 1.5 0 0 0-.5 1v2a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 0-1 .5l-1.5 1.5a1.5 1.5 0 0 1-2 0l-1.5-1.5a1.5 1.5 0 0 0-1-.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 0-.5-1l-1.5-1.5a1.5 1.5 0 0 1 0-2l1.5-1.5a1.5 1.5 0 0 0 .5-1v-2A1.5 1.5 0 0 1 5.5 6h2a1.5 1.5 0 0 0 1-.5l1.5-1.5a1.5 1.5 0 0 1 1-.5z"
                        initial={false}
                        animate={{ fill: isActive ? "currentColor" : "transparent" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.polygon
                        points="12 7.5 13.5 10 16.5 10.5 14 12.5 14.5 15.5 12 14 9.5 15.5 10 12.5 7.5 10.5 10.5 10"
                        initial={false}
                        animate={{
                          fill: isActive ? "#0b1b42" : "transparent",
                          stroke: isActive ? "#0b1b42" : "currentColor",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </svg>
                  )}

                  {/* Item 6: Post Requirement (Document + Plus) */}
                  {item.id === "post-requirement" && (
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <motion.path
                        d={isActive ? "M14 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Z" : "M14 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6"}
                        initial={false}
                        animate={{ fill: isActive ? "currentColor" : "transparent" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.path
                        d="M7 8h6 M7 12h6 M7 16h3"
                        initial={false}
                        animate={{ stroke: isActive ? "#0b1b42" : "currentColor" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.circle
                        cx="17.5"
                        cy="16.5"
                        r="4"
                        initial={false}
                        animate={{ fill: isActive ? "currentColor" : "transparent" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.path
                        d="M17.5 14.5v4M15.5 16.5h4"
                        initial={false}
                        animate={{ stroke: isActive ? "#0b1b42" : "currentColor" }}
                        transition={{ duration: 0.3 }}
                      />
                    </svg>
                  )}
                </motion.div>

                {/* Text Label */}
                <span
                  className={`
                    block w-full text-center leading-tight whitespace-pre-wrap relative z-10
                    transition-all duration-300 text-[0.56rem] tracking-tight
                    ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 bg-clip-text text-transparent font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                        : "font-medium text-white/65 group-hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </span>
              </motion.button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}