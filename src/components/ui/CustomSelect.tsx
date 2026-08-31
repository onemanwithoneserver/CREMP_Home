import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
interface Option {
  value: string;
  label: string;
}
interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}
export function CustomSelect({ options, value, onChange, label, className = "" }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((opt) => opt.value === value) || options[0];
  const [coords, setCoords] = useState({ left: 0, top: 0, width: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, { capture: true });
      window.addEventListener("resize", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, { capture: true });
      window.removeEventListener("resize", handleScroll);
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        left: rect.left,
        top: rect.bottom + window.scrollY,
        width: rect.width
      });
    }
  }, [isOpen]);
  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white dark:bg-[#121c33] border border-gray-100 dark:border-gray-800 rounded-[4px] px-3 py-1.5 shadow-sm hover:border-gray-200 dark:hover:border-gray-700 transition-colors w-full focus:outline-none"
      >
        {label && <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">{label}</span>}
        <span className="text-[10px] font-bold text-[#0a1128] dark:text-white uppercase tracking-wider">
          {selectedOption.label}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-auto text-gray-400"
        >
          <ChevronDown size={12} strokeWidth={3} />
        </motion.div>
      </button>
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                top: `${coords.top + 4}px`,
                right: `${window.innerWidth - coords.left - coords.width}px`,
              }}
              className="w-36 bg-white dark:bg-[#121c33] border border-gray-100 dark:border-gray-800 rounded-md shadow-lg z-50 overflow-hidden"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="py-1">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-left transition-colors ${
                      value === option.value
                        ? "text-[#d4af37] bg-gray-50 dark:bg-gray-800/50"
                        : "text-[#0a1128] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    {option.label}
                    {value === option.value && <Check size={12} strokeWidth={3} className="text-[#d4af37]" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
