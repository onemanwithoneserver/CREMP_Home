import { useState, useEffect } from "react";
import { 
  MapPin, 
  ChevronDown, 
  Menu, 
  User, 
  Settings, 
  LogOut, 
  LocateFixed, 
  History 
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import logo from "../../../Logo/CREMP.png";
import logoLight from "../../../Logo/CREMP_Light.png";
import HeaderMobile from "./headermobile";
import { navLinks } from "./data";

interface SiteHeaderProps {
  currentPage?: string;
  isMobile?: boolean;
}

export default function SiteHeader({ currentPage = "/", isMobile }: SiteHeaderProps) {
  const [activeNav, setActiveNav] = useState("Home");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Lakshmipuram");
  
  const recentLocations = ["Hyderabad", "Bengaluru", "Chennai", "Kurnool"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const liquidDropdownVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 400, damping: 28, mass: 0.8 },
    },
    exit: {
      opacity: 0,
      y: 8,
      scale: 0.98,
      filter: "blur(4px)",
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  return (
    <>
      <header className="fixed inset-x-0 z-50 pointer-events-none" style={{ top: "var(--top-bar-height, 0px)" }}>
        <div className={`transition-all duration-500 ease-out flex justify-center w-full ${scrolled ? "pt-4" : "pt-0"}`}>
          {!isMobile && (
            <div
              className={`
                pointer-events-auto 
                flex items-center justify-between gap-4 
                transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
                backdrop-blur-none bg-white dark:bg-[#0a1128] 
                shadow-sm dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)]
                ${scrolled 
                  ? "max-w-[1400px] w-[calc(100%-32px)] px-3 py-2.5 rounded border border-gray-200 dark:border-white/10" 
                  : "w-full px-6 py-3 border-b border-gray-200 dark:border-white/10 rounded-none"
                }
              `}
            >
              <div className="flex items-center shrink-0 pl-3 pr-2">
                <a href="#" className="flex items-center group focus:outline-none" aria-label="CREMP home">
                  <img src={logoLight} alt="CREMP" className="h-8 w-auto object-contain dark:hidden transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-sm" />
                  <img src={logo} alt="CREMP" className="hidden h-8 w-auto object-contain dark:block transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                </a>
              </div>
              <nav className="flex items-center gap-1.5" onMouseLeave={() => setHoveredNav(null)}>
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
                            ? "text-[#d4af37] dark:text-[#f3cd52]"
                            : "text-gray-700/80 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        }`}
                        href={link.href || "#"}
                      >
                        {isHovered && !isActive && (
                          <motion.div
                            layoutId="nav-hover"
                            className="absolute inset-0 bg-gray-100 dark:bg-white/5 rounded -z-10"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10 drop-shadow-sm flex flex-col items-center">
                          {link.label}
                          {!link.subItems && isActive && (
                            <motion.div
                              layoutId="nav-underline"
                              className="absolute -bottom-[9px] left-0 right-0 h-[2.5px] bg-[#d4af37] dark:bg-[#f3cd52] rounded-t shadow-[0_0_8px_rgba(212,175,55,0.5)] z-0"
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                        </span>
                        {link.subItems && (
                          <ChevronDown size={14} className={`relative z-10 transition-transform duration-500 group-hover/nav:rotate-180 ${isActive || isHovered ? 'opacity-100' : 'opacity-60'}`} strokeWidth={2.5} />
                        )}
                      </a>
                      {link.subItems && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                          <div className="min-w-[200px] p-2 bg-white dark:bg-[#0b1b42] border border-gray-200 dark:border-white/10 rounded shadow-lg">
                            {link.subItems.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                className="block px-4 py-2.5 text-[13px] font-bold text-gray-700 dark:text-gray-200 hover:bg-white/60 dark:hover:bg-white/10 rounded hover:text-[#d4af37] transition-all duration-200"
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
              <div className="flex items-center gap-2 pr-1 shrink-0 flex-1 justify-end">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                    className={`flex items-center gap-2 h-10 px-3.5 rounded transition-all duration-300 border ${
                      showLocationDropdown
                        ? "bg-white/95 dark:bg-[#0b1b42]/95 border-[#d4af37]/50 shadow-[0_0_0_3px_rgba(212,175,55,0.15)] text-[#d4af37]"
                        : "bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-white/5 text-gray-700/90 dark:text-gray-300"
                    }`}
                  >
                    <MapPin size={15} className={showLocationDropdown ? "text-[#d4af37]" : "text-gray-500/90 dark:text-gray-400"} strokeWidth={2.5} />
                    <span className="font-bold text-[13px] tracking-tight truncate max-w-[100px]">
                      {currentLocation}
                    </span>
                    <ChevronDown size={14} className={`transition-transform duration-500 ${showLocationDropdown ? "rotate-180" : "opacity-60"}`} strokeWidth={2.5} />
                  </button>
                  <AnimatePresence>
                    {showLocationDropdown && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowLocationDropdown(false)} />
                        <motion.div
                          variants={liquidDropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full right-0 mt-4 w-[260px] p-2 bg-white dark:bg-[#0b1b42] border border-gray-200 dark:border-white/10 rounded shadow-xl z-50 overflow-hidden"
                        >
                          <div className="mb-2">
                            <button className="flex items-center gap-3 w-full p-2.5 rounded hover:bg-blue-50/90 dark:hover:bg-blue-500/10 transition-colors text-left group/loc border border-transparent hover:border-blue-100/50 dark:hover:border-blue-500/20">
                              <div className="w-9 h-9 rounded bg-blue-100/60 dark:bg-blue-500/20 flex items-center justify-center group-hover/loc:scale-110 group-hover/loc:rotate-6 transition-transform duration-500">
                                <LocateFixed size={16} className="text-blue-600 dark:text-blue-400" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[13px] font-bold text-blue-700 dark:text-blue-400">Detect Location</span>
                                <span className="text-[11px] text-blue-600/70 dark:text-blue-400/70 font-semibold">Using precise GPS</span>
                              </div>
                            </button>
                          </div>
                          <div className="px-3 pb-1 pt-2 border-t border-gray-200/50 dark:border-white/10">
                            <span className="text-[10px] font-extrabold text-gray-400/80 uppercase tracking-widest">Recent</span>
                          </div>
                          <div className="flex flex-col gap-1 mt-1">
                            {recentLocations.map((loc) => (
                              <button
                                key={loc}
                                onClick={() => {
                                  setCurrentLocation(loc);
                                  setShowLocationDropdown(false);
                                }}
                                className="flex items-center gap-3 w-full px-3 py-2.5 rounded hover:bg-white/80 dark:hover:bg-white/10 transition-colors text-left group/item"
                              >
                                <History size={14} className="text-gray-400/80 group-hover/item:text-[#d4af37] transition-colors" />
                                <span className="text-[13px] font-bold text-gray-600 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
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
                <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent opacity-60 mx-1.5" />
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="flex items-center gap-2 group focus:outline-none h-10 px-2 rounded hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold text-gray-700 dark:text-gray-200 group-hover:text-[#d4af37] transition-colors pl-1">Alex</span>
                      <div className="w-7 h-7 rounded-full bg-white dark:bg-[#1a294d] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-colors shadow-sm">
                        <User size={13} strokeWidth={2.5} />
                      </div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {showProfileDropdown && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowProfileDropdown(false)} />
                        <motion.div
                          variants={liquidDropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full right-0 mt-4 w-[200px] bg-white dark:bg-[#0b1b42] border border-gray-200 dark:border-white/10 rounded shadow-xl z-50 py-1.5 overflow-hidden"
                        >
                          <div className="py-1 border-b border-gray-100/50 dark:border-white/10">
                            <a href="#" className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-50/80 dark:hover:bg-white/5 transition-colors group">
                              <User size={14} className="text-gray-400 group-hover:text-[#d4af37]" />
                              <span className="text-[13px] font-semibold text-[#0a1128] dark:text-gray-200">Profile</span>
                            </a>
                            <a href="#" className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-50/80 dark:hover:bg-white/5 transition-colors group">
                              <Settings size={14} className="text-gray-400 group-hover:text-[#d4af37]" />
                              <span className="text-[13px] font-semibold text-[#0a1128] dark:text-gray-200">Settings</span>
                            </a>
                          </div>
                          <div className="py-1">
                            <a href="#" className="flex items-center gap-2.5 px-4 py-2 hover:bg-red-50/80 dark:hover:bg-red-900/10 transition-colors group">
                              <LogOut size={14} className="text-red-400 group-hover:text-red-500" />
                              <span className="text-[13px] font-semibold text-red-500">Sign out</span>
                            </a>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}
          <div className={`${isMobile ? "flex" : "flex xl:hidden"} pointer-events-auto flex-col w-full bg-white dark:bg-[#0a1128] border-b border-gray-200 dark:border-white/10 shadow-sm p-3 transition-all duration-300`}>
            <div className="flex items-center justify-between w-full relative z-40">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="w-8 h-8 rounded bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-sm transition-colors hover:bg-white/80 dark:hover:bg-white/10 shrink-0"
                >
                  <Menu size={16} strokeWidth={2.5} />
                </button>
                <a href="#" className="flex items-center shrink-0">
                  <img src={logoLight} alt="CREMP" className="h-7 w-auto dark:hidden drop-shadow-sm" />
                  <img src={logo} alt="CREMP" className="hidden h-7 w-auto dark:block drop-shadow-md" />
                </a>
                <div className="hidden sm:block w-[1px] h-4 bg-gray-200/80 dark:bg-gray-700/80 mx-1"></div>
                <div className="relative">
                  <button
                    onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/60 dark:bg-white/5 rounded text-gray-700 dark:text-gray-200 border border-white/50 dark:border-white/10 shadow-sm transition-all"
                  >
                    <MapPin size={13} className="text-[#d4af37]" strokeWidth={3} />
                    <span className="font-bold text-[12px] truncate max-w-[65px] sm:max-w-[100px]">
                      {currentLocation}
                    </span>
                    <ChevronDown size={13} className={`text-gray-400 transition-transform duration-300 ${showLocationDropdown ? "rotate-180" : ""}`} strokeWidth={3} />
                  </button>
                  <AnimatePresence>
                    {showLocationDropdown && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowLocationDropdown(false)} />
                        <motion.div
                          variants={liquidDropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 sm:-left-4 mt-3 w-[240px] p-2 bg-white dark:bg-[#0b1b42] border border-gray-200 dark:border-white/10 rounded shadow-xl z-50"
                        >
                          <div className="mb-1">
                            <button className="flex items-center gap-3 w-full p-2.5 rounded hover:bg-blue-50/80 dark:hover:bg-blue-500/10 text-left transition-colors">
                              <div className="w-8 h-8 rounded bg-blue-100/60 dark:bg-blue-500/20 flex items-center justify-center">
                                <LocateFixed size={15} className="text-blue-600 dark:text-blue-400" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[13px] font-bold text-blue-700 dark:text-blue-400">Detect Location</span>
                              </div>
                            </button>
                          </div>
                          <div className="px-3 pb-1 pt-2 border-t border-gray-200/50 dark:border-white/10">
                            <span className="text-[10px] font-extrabold text-gray-400/80 uppercase tracking-widest">Recent</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            {recentLocations.map((loc) => (
                              <button
                                key={loc}
                                onClick={() => {
                                  setCurrentLocation(loc);
                                  setShowLocationDropdown(false);
                                }}
                                className="flex items-center gap-3 w-full px-3 py-2 rounded hover:bg-white/80 dark:hover:bg-white/5 text-left transition-colors"
                              >
                                <History size={13} className="text-gray-400/80" />
                                <span className="text-[13px] font-bold text-gray-700 dark:text-gray-300">
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
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <button
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="w-8 h-8 rounded-full bg-white dark:bg-[#1a294d] border border-gray-200/80 dark:border-white/10 flex items-center justify-center text-gray-500 shadow-sm shrink-0 focus:outline-none hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
                  >
                    <User size={14} strokeWidth={2.5} />
                  </button>
                  <AnimatePresence>
                    {showProfileDropdown && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowProfileDropdown(false)} />
                        <motion.div
                          variants={liquidDropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full right-0 mt-3 w-[200px] bg-white dark:bg-[#0b1b42] border border-gray-200 dark:border-white/10 rounded shadow-xl z-50 py-1.5 overflow-hidden"
                        >
                          <div className="py-1 border-b border-gray-100/50 dark:border-white/10">
                            <a href="#" className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-50/80 dark:hover:bg-white/5 transition-colors group">
                              <User size={14} className="text-gray-400 group-hover:text-[#d4af37]" />
                              <span className="text-[13px] font-semibold text-[#0a1128] dark:text-gray-200">Profile</span>
                            </a>
                            <a href="#" className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-50/80 dark:hover:bg-white/5 transition-colors group">
                              <Settings size={14} className="text-gray-400 group-hover:text-[#d4af37]" />
                              <span className="text-[13px] font-semibold text-[#0a1128] dark:text-gray-200">Settings</span>
                            </a>
                          </div>
                          <div className="py-1">
                            <a href="#" className="flex items-center gap-2.5 px-4 py-2 hover:bg-red-50/80 dark:hover:bg-red-900/10 transition-colors group">
                              <LogOut size={14} className="text-red-400 group-hover:text-red-500" />
                              <span className="text-[13px] font-semibold text-red-500">Sign out</span>
                            </a>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`transition-all duration-500 ${isMobile ? "h-[80px]" : "h-[68px] sm:h-[72px]"}`} />
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