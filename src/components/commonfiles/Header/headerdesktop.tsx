import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  ChevronDown,
  Menu,
  LocateFixed,
  History,
  User,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import logo from "../../../Logo/CREMP.png";
import logoLight from "../../../Logo/CREMP_Light.png";
import HeaderMobile from "./headermobile";
import { navLinks } from "./data";
import CrempTextLogo from "../../CrempTextLogo";

interface SiteHeaderProps {
  currentPage?: string;
  isMobile?: boolean;
}

const profileMenuItems = [
  { label: "My Account", icon: User, href: "#" },
  { label: "Saved Properties", icon: Heart, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
  { label: "Logout", icon: LogOut, href: "#", danger: true },
];

export default function SiteHeader({ currentPage = "/", isMobile }: SiteHeaderProps) {
  const [activeNav, setActiveNav] = useState("Home");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Lakshmipuram");
  const profileRef = useRef<HTMLDivElement>(null);

  const recentLocations = ["Hyderabad", "Bengaluru", "Chennai", "Kurnool"];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 8, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: 6,
      scale: 0.97,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  return (
    <>
      <header className="fixed inset-x-0 z-50 pointer-events-none" style={{ top: "var(--top-bar-height, 0px)" }}>
        <div className="transition-all duration-500 ease-out flex justify-center w-full">
          {!isMobile && (
            <div
              className="pointer-events-auto flex items-center gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full px-6 py-2.5 rounded-none"
              style={{
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                borderBottom: "1px solid rgba(11,27,66,0.08)",
                boxShadow: "0 1px 3px rgba(11,27,66,0.06), inset 0 -1px 0 rgba(212,175,55,0.12)",
              }}
            >
              <div className="flex items-center shrink-0 pl-2 gap-3 min-w-[180px]">
                <a href="#" className="flex items-center gap-2.5 group focus:outline-none" aria-label="CREMP home">
                  <img src={logoLight} alt="CREMP Logo" className="h-8 w-auto object-contain dark:hidden transition-all duration-500 group-hover:scale-105" />
                  <img src={logo} alt="CREMP Logo" className="hidden h-8 w-auto object-contain dark:block transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                  <div className="flex flex-col justify-center">
                    <CrempTextLogo className="h-5 w-auto text-[#0a1128] dark:text-white sm:h-6" />
                  </div>
                </a>
              </div>

              <nav className="flex-1 flex items-center justify-center gap-1" onMouseLeave={() => setHoveredNav(null)}>
                {navLinks.map((link) => {
                  const isActive = activeNav === link.label;
                  const isHovered = hoveredNav === link.label;

                  return (
                    <div key={link.label} className="relative group/nav" onMouseEnter={() => setHoveredNav(link.label)}>
                      <a
                        onClick={(e) => {
                          if (!link.href) e.preventDefault();
                          setActiveNav(link.label);
                        }}
                        className={`relative flex items-center gap-1.5 px-4 py-2 text-[13px] font-bold tracking-wide transition-colors duration-300 z-10 cursor-pointer rounded ${
                          isActive || isHovered
                            ? "text-[#0a1128] dark:text-[#d4af37]"
                            : "text-[#0b1b42]/70 dark:text-gray-300 hover:text-[#0a1128] dark:hover:text-white"
                        }`}
                        href={link.href || "#"}
                      >
                        {isHovered && !isActive && (
                          <motion.div
                            layoutId="nav-hover"
                            className="absolute inset-0 bg-[#0b1b42]/[0.04] dark:bg-[#d4af37]/[0.06] rounded -z-10"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10 drop-shadow-sm flex flex-col items-center">
                          {link.label}
                          {isActive && (
                            <motion.div
                              layoutId="nav-underline"
                              className="absolute -bottom-[9px] left-0 right-0 h-[2.5px] rounded-t z-0"
                              style={{
                                background: "linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)",
                                boxShadow: "0 0 10px rgba(212,175,55,0.4)",
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                        </span>
                        {link.subItems && (
                          <ChevronDown size={14} className={`relative z-10 transition-transform duration-500 group-hover/nav:rotate-180 ${isActive || isHovered ? 'opacity-100 text-[#d4af37]' : 'opacity-50'}`} strokeWidth={2.5} />
                        )}
                      </a>
                      {link.subItems && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                          <div
                            className="min-w-[210px] p-1.5 rounded shadow-xl overflow-hidden"
                            style={{
                              background: "rgba(255,255,255,0.95)",
                              backdropFilter: "blur(20px)",
                              border: "1px solid rgba(11,27,66,0.08)",
                            }}
                          >
                            {link.subItems.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                className="block px-4 py-2.5 text-[13px] font-bold text-[#0b1b42]/70 hover:bg-[#0b1b42]/[0.04] rounded hover:text-[#0a1128] transition-all duration-200"
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2 pr-2 shrink-0 min-w-[180px] justify-end">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                    className={`flex items-center gap-2 h-9 px-3 rounded-full transition-all duration-300 border text-[13px] font-bold ${
                      showLocationDropdown
                        ? "bg-[#0b1b42]/[0.06] border-[#d4af37]/40 shadow-[0_0_0_3px_rgba(212,175,55,0.1)] text-[#0a1128]"
                        : "bg-transparent border-transparent hover:bg-[#0b1b42]/[0.04] text-[#0b1b42]/70"
                    }`}
                  >
                    <MapPin size={14} className={showLocationDropdown ? "text-[#d4af37]" : "text-[#0b1b42]/50"} strokeWidth={2.5} />
                    <span className="tracking-tight truncate max-w-[90px]">
                      {currentLocation}
                    </span>
                    <ChevronDown size={13} className={`transition-transform duration-500 ${showLocationDropdown ? "rotate-180 text-[#d4af37]" : "opacity-50"}`} strokeWidth={2.5} />
                  </button>
                  <AnimatePresence>
                    {showLocationDropdown && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowLocationDropdown(false)} />
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full right-0 mt-3 w-[260px] p-2 rounded shadow-xl z-50 overflow-hidden"
                          style={{
                            background: "rgba(255,255,255,0.97)",
                            backdropFilter: "blur(24px)",
                            border: "1px solid rgba(11,27,66,0.08)",
                          }}
                        >
                          <div className="mb-2">
                            <button className="flex items-center gap-3 w-full p-2.5 rounded hover:bg-[#0b1b42]/[0.04] transition-colors text-left group/loc border border-transparent hover:border-[#0b1b42]/[0.06]">
                              <div className="w-9 h-9 rounded-full bg-[#0b1b42]/[0.06] flex items-center justify-center group-hover/loc:scale-110 transition-transform duration-500">
                                <LocateFixed size={16} className="text-[#0b1b42]" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[13px] font-bold text-[#0b1b42]">Detect Location</span>
                                <span className="text-[11px] text-[#0b1b42]/50 font-semibold">Using precise GPS</span>
                              </div>
                            </button>
                          </div>
                          <div className="px-3 pb-1 pt-2 border-t border-[#0b1b42]/[0.06]">
                            <span className="text-[10px] font-extrabold text-[#0b1b42]/40 uppercase tracking-widest">Recent</span>
                          </div>
                          <div className="flex flex-col gap-0.5 mt-1">
                            {recentLocations.map((loc) => (
                              <button
                                key={loc}
                                onClick={() => {
                                  setCurrentLocation(loc);
                                  setShowLocationDropdown(false);
                                }}
                                className="flex items-center gap-3 w-full px-3 py-2.5 rounded hover:bg-[#0b1b42]/[0.04] transition-colors text-left group/item"
                              >
                                <History size={14} className="text-[#0b1b42]/30 group-hover/item:text-[#d4af37] transition-colors" />
                                <span className="text-[13px] font-bold text-[#0b1b42]/60 group-hover/item:text-[#0a1128] transition-colors">
                                  {loc}
                                </span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                <div className="w-px h-5 bg-[#0b1b42]/[0.08] mx-0.5" />

                <div className="relative" ref={profileRef}>
                  <button
                    type="button"
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 group ${
                      showProfileDropdown
                        ? "ring-2 ring-[#d4af37] ring-offset-1 ring-offset-white"
                        : "hover:ring-2 hover:ring-[#d4af37]/30 hover:ring-offset-1 hover:ring-offset-white"
                    }`}
                    style={{
                      background: "linear-gradient(135deg, #0b1b42, #1a2d5e)",
                    }}
                  >
                    <span className="text-[13px] font-bold text-white tracking-tight select-none">U</span>
                    <div
                      className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white"
                      style={{ background: "#22c55e" }}
                    />
                  </button>
                  <AnimatePresence>
                    {showProfileDropdown && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full right-0 mt-3 w-[220px] p-1.5 rounded shadow-xl z-50 overflow-hidden"
                        style={{
                          background: "rgba(255,255,255,0.97)",
                          backdropFilter: "blur(24px)",
                          border: "1px solid rgba(11,27,66,0.08)",
                        }}
                      >
                        <div className="px-3 py-3 border-b border-[#0b1b42]/[0.06] mb-1">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: "linear-gradient(135deg, #0b1b42, #1a2d5e)" }}
                            >
                              <span className="text-sm font-bold text-white">U</span>
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-[13px] font-bold text-[#0a1128] truncate">User</span>
                              <span className="text-[11px] font-semibold text-[#0b1b42]/50 truncate">user@cremp.com</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          {profileMenuItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-bold transition-all duration-200 ${
                                item.danger
                                  ? "text-rose-500 hover:bg-rose-50 hover:text-rose-600"
                                  : "text-[#0b1b42]/70 hover:bg-[#0b1b42]/[0.04] hover:text-[#0a1128]"
                              }`}
                              onClick={() => setShowProfileDropdown(false)}
                            >
                              <item.icon size={15} strokeWidth={2} className={item.danger ? "" : "text-[#0b1b42]/40"} />
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}
          <div className={`${isMobile ? "flex" : "flex xl:hidden"} pointer-events-auto flex-col w-full shadow-sm p-3 transition-all duration-300`}
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              borderBottom: "1px solid rgba(11,27,66,0.08)",
            }}
          >
            <div className="flex items-center justify-between w-full relative z-40">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="w-8 h-8 rounded-full bg-[#0b1b42]/[0.05] border border-[#0b1b42]/[0.08] flex items-center justify-center text-[#0b1b42] shadow-sm transition-colors hover:bg-[#0b1b42]/[0.08] shrink-0"
                >
                  <Menu size={16} strokeWidth={2.5} />
                </button>

              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <button
                    onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#0b1b42]/[0.04] rounded-full text-[#0b1b42] border border-[#0b1b42]/[0.06] shadow-sm transition-all text-[12px] font-bold"
                  >
                    <MapPin size={13} className="text-[#d4af37]" strokeWidth={3} />
                    <span className="truncate max-w-[65px] sm:max-w-[100px]">
                      {currentLocation}
                    </span>
                    <ChevronDown size={13} className={`text-[#0b1b42]/40 transition-transform duration-300 ${showLocationDropdown ? "rotate-180" : ""}`} strokeWidth={3} />
                  </button>
                  <AnimatePresence>
                    {showLocationDropdown && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowLocationDropdown(false)} />
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full right-0 mt-3 w-[240px] p-2 rounded shadow-xl z-50"
                          style={{
                            background: "rgba(255,255,255,0.97)",
                            backdropFilter: "blur(24px)",
                            border: "1px solid rgba(11,27,66,0.08)",
                          }}
                        >
                          <div className="mb-1">
                            <button className="flex items-center gap-3 w-full p-2.5 rounded hover:bg-[#0b1b42]/[0.04] text-left transition-colors">
                              <div className="w-8 h-8 rounded-full bg-[#0b1b42]/[0.06] flex items-center justify-center">
                                <LocateFixed size={15} className="text-[#0b1b42]" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[13px] font-bold text-[#0b1b42]">Detect Location</span>
                              </div>
                            </button>
                          </div>
                          <div className="px-3 pb-1 pt-2 border-t border-[#0b1b42]/[0.06]">
                            <span className="text-[10px] font-extrabold text-[#0b1b42]/40 uppercase tracking-widest">Recent</span>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            {recentLocations.map((loc) => (
                              <button
                                key={loc}
                                onClick={() => {
                                  setCurrentLocation(loc);
                                  setShowLocationDropdown(false);
                                }}
                                className="flex items-center gap-3 w-full px-3 py-2 rounded hover:bg-[#0b1b42]/[0.04] text-left transition-colors group/item"
                              >
                                <History size={13} className="text-[#0b1b42]/30 group-hover/item:text-[#d4af37] transition-colors" />
                                <span className="text-[13px] font-bold text-[#0b1b42]/60 group-hover/item:text-[#0a1128] transition-colors">
                                  {loc}
                                </span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #0b1b42, #1a2d5e)",
                  }}
                >
                  <span className="text-[12px] font-bold text-white select-none">U</span>
                  <div
                    className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-[1.5px] border-white"
                    style={{ background: "#22c55e" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`transition-all duration-500 ${isMobile ? "h-[53px]" : "h-[53px]"}`} />
      <AnimatePresence>
        {mobileMenuOpen && (
          <HeaderMobile
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            currentPage={currentPage}
          />
        )}
      </AnimatePresence>
    </>
  );
}