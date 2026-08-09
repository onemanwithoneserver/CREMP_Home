import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { useState } from "react";
import CrempTextLogo from "../../components/CrempTextLogo";
import HeaderStickyBanner from "../02_Onboarding/StickyAnnouncementBanner";
import { useAnnouncement } from "../context/AnnouncementContext";
import logo from "../../Logo/CREMP.png";
import logoLight from "../../Logo/CREMP_Light.png";
import { useTheme } from "../ThemeContext";

export default function Mobile() {
    const { theme, toggleTheme } = useTheme();
    const { showSticky } = useAnnouncement();
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 30);
    });

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 z-50 flex w-full items-center justify-between px-5 py-3.5 text-[#0a1128] transition-all duration-500 dark:text-white ${scrolled
                    ? "bg-white/75 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md border-b border-white/40 dark:bg-[#0b1b42]/85 dark:border-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                    : "bg-white dark:bg-[#0b1b42] border-b border-transparent"
                }`}
        >
            <motion.a
                href="/"
                aria-label="CREMP Home"
                className="flex shrink-0 items-center gap-1.5"
                whileTap={{ scale: 0.97 }}
            >
                <motion.img
                    src={logo}
                    alt="CREMP Logo"
                    className="hidden h-10 w-auto object-contain dark:block"
                    animate={{
                        filter: [
                            "drop-shadow(0 0 4px rgba(246,178,59,0.2))",
                            "drop-shadow(0 0 10px rgba(246,178,59,0.35))",
                            "drop-shadow(0 0 4px rgba(246,178,59,0.2))",
                        ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <img
                    src={logoLight}
                    alt="CREMP Logo"
                    className="block h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(178,127,28,0.1)] dark:hidden"
                />
                <div className="flex flex-col justify-center">
                    <CrempTextLogo className="h-7 w-auto text-[#0a1128] dark:text-white" />
                </div>
            </motion.a>

            <HeaderStickyBanner isVisible={showSticky} isMobile />

            <div className="flex items-center gap-3">
                <motion.button
                    onClick={toggleTheme}
                    initial={{ scale: 1, rotate: 0 }} animate={{ scale: 1, rotate: 0 }} whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                    whileTap={{ scale: 0.88, rotate: 20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-9 w-9 items-center justify-center rounded-[4px] border transition-all duration-300 ${theme === "dark"
                            ? "border-amber-500/20 bg-amber-500/10 text-amber-400 active:bg-amber-500/25"
                            : "border-gray-200 bg-white text-[#0a1128] active:bg-gray-100"
                        }`}
                    aria-label="Toggle Theme"
                >
                    <motion.div
                        key={theme}
                        initial={{ rotate: -90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {theme === "dark" ? (
                            <Sun className="h-4 w-4" strokeWidth={2} />
                        ) : (
                            <Moon className="h-4 w-4" strokeWidth={2} />
                        )}
                    </motion.div>
                </motion.button>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.35 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center justify-center gap-1.5 overflow-hidden rounded-[4px] bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] px-3.5 py-1.5 text-xs font-semibold text-black transition-all active:shadow-lg duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"
                >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-active:translate-x-full" />
                    <span className="relative">Get Started</span>
                    <ArrowRight className="relative h-3.5 w-3.5 transition-transform group-active:translate-x-0.5" />
                </motion.button>
            </div>
        </motion.header>
    );
}
