import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ModernSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
}

export default function ModernSelect({ value, onChange, options, placeholder = "Select...", disabled = false }: ModernSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative z-50 w-full" ref={containerRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3.5 rounded border-2 transition-all duration-300 text-[13px] font-medium ${
          disabled 
            ? "border-[#0a1128]/5 dark:border-white/5 bg-gray-50 dark:bg-[#0b1b42]/50 text-gray-400 cursor-not-allowed" 
            : isOpen
              ? "border-[#d4af37] bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white shadow-[0_0_0_3px_rgba(212,175,55,0.12)]"
              : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white hover:border-[#0a1128]/15 dark:hover:border-white/20"
        }`}
      >
        <span className={!selectedOption ? "text-gray-400 dark:text-white/40" : ""}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#d4af37]" : "text-gray-400"}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -5, scaleY: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-[calc(100%+4px)] left-0 w-full bg-white dark:bg-[#0b1b42] border border-[#0a1128]/10 dark:border-white/10 rounded shadow-xl max-h-60 overflow-y-auto z-[60] origin-top flex flex-col p-1"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded text-[13px] font-medium transition-colors ${
                  value === opt.value
                    ? "bg-[#d4af37]/10 text-[#d4af37]"
                    : "text-[#0a1128] dark:text-white hover:bg-[#0a1128]/5 dark:hover:bg-white/5"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
