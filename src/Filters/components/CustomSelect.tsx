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
    <div className={clsx("relative", isOpen ? "z-[100]" : "z-10", className)} ref={containerRef}>
      <motion.button
        type="button"
        whileTap={{ scale: 0.99 }}
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-full flex items-center justify-between text-left appearance-none outline-none transition-all duration-200 cursor-pointer",
          "bg-white border shadow-xs rounded-[4px] text-gray-700",
          icon ? "pl-9 pr-3 py-2.5" : "px-3 py-2.5",
          isOpen
            ? "border-[#d4af37] ring-2 ring-[#d4af37]/30 shadow-xs"
            : "border-gray-200/90 hover:border-[#d4af37]/60 hover:bg-amber-50/15"
        )}
      >
        {icon && (
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <span className={clsx("font-semibold text-[13px] truncate", !value && "text-gray-400")}>
          {selectedLabel}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 350, damping: 25 }}>
          <ChevronDown className={clsx("w-4 h-4 shrink-0 ml-2 transition-colors", isOpen ? "text-[#d4af37]" : "text-gray-400")} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 450 }}
            className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border border-[#d4af37]/40 shadow-[0_12px_32px_rgba(11,27,66,0.18)] rounded-[4px] overflow-hidden z-[100] py-1"
          >
            <div className="max-h-[200px] overflow-y-auto scrollbar-hide py-0.5">
              {formattedOptions.map((opt) => {
                const isSelected = value === opt.value;
                return (
                  <motion.button
                    key={opt.value}
                    type="button"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={clsx(
                      "w-full text-left px-3 py-2 text-[13px] transition-all duration-150 flex items-center justify-between cursor-pointer",
                      isSelected
                        ? "bg-[#0b1b42]/[0.08] text-[#0b1b42] font-extrabold border-l-2 border-[#d4af37]"
                        : "text-gray-700 hover:bg-amber-50/50 hover:text-[#0b1b42] hover:border-l-2 hover:border-[#d4af37]/40 font-medium"
                    )}
                  >
                    <span>{opt.label}</span>
                    {isSelected && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500, damping: 25 }}>
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
