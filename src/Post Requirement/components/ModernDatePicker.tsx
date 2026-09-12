import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

interface ModernDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function ModernDatePicker({ value, onChange, placeholder = "Select Date" }: ModernDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const handleDateSelect = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);

    const formatted = date.toISOString().split('T')[0];
    onChange(formatted);
    setIsOpen(false);
  };

  const formattedDisplay = value ? new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : placeholder;

  return (
    <div className="relative z-50 w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3.5 rounded border-2 transition-all duration-300 text-[13px] font-medium ${
          isOpen
            ? "border-[#d4af37] bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white shadow-[0_0_0_3px_rgba(212,175,55,0.12)]"
            : "border-[#0a1128]/8 dark:border-white/10 bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white hover:border-[#0a1128]/15 dark:hover:border-white/20"
        }`}
      >
        <span className={!value ? "text-gray-400 dark:text-white/40" : ""}>
          {formattedDisplay}
        </span>
        <CalendarIcon size={16} className={isOpen ? "text-[#d4af37]" : "text-gray-400"} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -5, scaleY: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-[calc(100%+4px)] left-0 w-full min-w-[280px] bg-white dark:bg-[#0b1b42] border border-[#0a1128]/10 dark:border-white/10 rounded shadow-xl z-[60] origin-top flex flex-col p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <button type="button" onClick={prevMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded text-[#0a1128] dark:text-white">
                <ChevronLeft size={16} />
              </button>
              <div className="font-bold text-[13px] text-[#0a1128] dark:text-white">
                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </div>
              <button type="button" onClick={nextMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded text-[#0a1128] dark:text-white">
                <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                <div key={d} className="text-[11px] font-bold text-gray-400 dark:text-white/40">{d}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dateStr = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split('T')[0];
                const isSelected = value === dateStr;
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDateSelect(day)}
                    className={`h-8 rounded text-[12px] font-medium transition-colors flex items-center justify-center ${
                      isSelected
                        ? "bg-[#d4af37] text-white shadow-md"
                        : "text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
