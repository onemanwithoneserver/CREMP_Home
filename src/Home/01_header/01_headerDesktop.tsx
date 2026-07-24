import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";
import CrempTextLogo from "../../components/CrempTextLogo";
import logo from "../../Logo/CREMP.png";
import logoLight from "../../Logo/CREMP_Light.png";

export default function Desktop() {
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 flex w-full items-center justify-center px-6 py-3.5 text-[#0a1128] transition-all duration-500 dark:text-white lg:px-12 ${
        scrolled
          ? "bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md border-b border-white/40 dark:bg-[#0a1128]/80 dark:border-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white dark:bg-[#0a1128] border-b border-transparent"
      }`}
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        <motion.a
          href="/"
          aria-label="CREMP Home"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.img
            src={logo}
            alt="CREMP Logo"
            className="hidden h-12 w-auto object-contain dark:block"
            animate={{
              filter: [
                "drop-shadow(0 0 6px rgba(246,178,59,0.2))",
                "drop-shadow(0 0 12px rgba(246,178,59,0.35))",
                "drop-shadow(0 0 6px rgba(246,178,59,0.2))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <img
            src={logoLight}
            alt="CREMP Logo"
            className="block h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(178,127,28,0.1)] dark:hidden"
          />
          <div className="flex flex-col justify-center">
            <CrempTextLogo className="h-5 w-auto text-[#0a1128] dark:text-white sm:h-6" />
          </div>
        </motion.a>

        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92, rotate: 15 }}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              theme === "dark"
                ? "border-amber-500/20 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 hover:shadow-[0_0_18px_rgba(245,158,11,0.3)]"
                : "border-gray-200 bg-white text-[#0a1128] hover:bg-gray-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            }`}
            aria-label="Toggle Theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Moon className="h-5 w-5" strokeWidth={2} />
              )}
            </motion.div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:shadow-[0_6px_20px_rgba(246,178,59,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative">Get Started</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
