import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: (Option | string)[];
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function CustomSelect({ options, value, onChange, placeholder = "Select...", icon, className }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const formattedOptions = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectedLabel = formattedOptions.find((o) => o.value === value)?.label || value || placeholder;
  const hasValue = value && value !== "Any" && value !== placeholder;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={clsx("relative", isOpen ? "z-[200]" : "z-10", className)} ref={containerRef}>
      <motion.button
        type="button"
        whileTap={{ scale: 0.98 }}
        whileHover={{ y: -1 }}
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-full flex items-center justify-between text-left appearance-none outline-none transition-all duration-300 cursor-pointer",
          "bg-white dark:bg-[#121c33] border shadow-xs rounded-[6px]",
          icon ? "pl-9 pr-3 py-2.5" : "px-3 py-2.5",
          isOpen
            ? "border-[#d4af37] ring-2 ring-[#d4af37]/25 shadow-[0_4px_16px_rgba(212,175,55,0.12)]"
            : hasValue
            ? "border-[#d4af37]/40 hover:border-[#d4af37]/70 shadow-[0_2px_8px_rgba(11,27,66,0.04)]"
            : "border-gray-200/90 dark:border-gray-700 hover:border-[#d4af37]/50 hover:bg-amber-50/10 dark:hover:bg-white/5"
        )}
      >
        {icon && (
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <span className={clsx(
          "font-semibold text-[13px] whitespace-normal text-left break-words transition-colors duration-200",
          !value || value === "Any" ? "text-gray-400 dark:text-gray-500" : "text-[#0a1128] dark:text-gray-100"
        )}>
          {selectedLabel}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
        >
          <ChevronDown className={clsx(
            "w-4 h-4 shrink-0 ml-2 transition-colors duration-200",
            isOpen ? "text-[#d4af37]" : hasValue ? "text-[#d4af37]/70" : "text-gray-400"
          )} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.97 }}
            transition={{ type: "spring", damping: 24, stiffness: 420 }}
            className="absolute left-0 min-w-full top-[calc(100%+6px)] bg-white/90 dark:bg-[#0e172f]/95 backdrop-blur-2xl border border-gray-200/60 dark:border-white/15 shadow-[0_16px_40px_rgba(11,27,66,0.16),0_4px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)] rounded-lg overflow-hidden z-[200] py-0.5"
          >
            
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />

            <div className="max-h-[220px] overflow-y-auto scrollbar-hide py-1">
              {formattedOptions.map((opt, index) => {
                const isSelected = value === opt.value;
                return (
                  <motion.button
                    key={opt.value}
                    type="button"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.18, ease: "easeOut" }}
                    whileHover={{ x: 3, backgroundColor: "rgba(212,175,55,0.05)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={clsx(
                      "w-full text-left px-3.5 py-2.5 text-[13px] transition-all duration-150 flex items-center justify-between cursor-pointer",
                      isSelected
                        ? "bg-[#0b1b42]/[0.06] dark:bg-white/10 text-[#0a1128] dark:text-white font-extrabold border-l-[3px] border-[#d4af37]"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#0b1b42] dark:hover:text-white font-medium border-l-[3px] border-transparent"
                    )}
                  >
                    <span className="whitespace-normal break-words pr-2">{opt.label}</span>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 22 }}
                      >
                        <Check className="w-3.5 h-3.5 text-[#d4af37]" strokeWidth={2.8} />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
