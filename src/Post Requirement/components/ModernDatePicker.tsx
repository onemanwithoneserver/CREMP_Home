import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

interface ModernDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minYear?: number;
  maxYear?: number;
  className?: string;
}

export default function ModernDatePicker({
  value,
  onChange,
  placeholder = "Select Date",
  minYear = 1940,
  maxYear = 2035,
  className = ""
}: ModernDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  

  const parseDate = (valStr: string) => {
    if (!valStr) return new Date();
    const d = new Date(valStr);
    return isNaN(d.getTime()) ? new Date() : d;
  };

  const [currentMonth, setCurrentMonth] = useState<Date>(() => parseDate(value));
  const [viewMode, setViewMode] = useState<"days" | "months" | "years">("days");

  useEffect(() => {
    if (value) {
      const d = parseDate(value);
      setCurrentMonth(d);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setViewMode("days");
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
    const year = currentMonth.getFullYear();
    const month = String(currentMonth.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const formatted = `${year}-${month}-${dayStr}`;
    
    onChange(formatted);
    setIsOpen(false);
    setViewMode("days");
  };

  const handleMonthSelect = (monthIdx: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), monthIdx, 1));
    setViewMode("days");
  };

  const handleYearSelect = (year: number) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth(), 1));
    setViewMode("days");
  };

  const formatDisplay = (val: string) => {
    if (!val) return placeholder;
    const d = new Date(val);
    if (isNaN(d.getTime())) return val;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const monthsList = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const yearsList = [];
  for (let y = maxYear; y >= minYear; y--) {
    yearsList.push(y);
  }

  return (
    <div className={`relative z-50 w-full font-['Outfit',sans-serif] ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded border transition-all duration-300 text-[13px] font-medium font-['Outfit',sans-serif] ${
          isOpen
            ? "border-[#d4af37] bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
            : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 text-[#0a1128] dark:text-white hover:border-[#d4af37]/60"
        }`}
      >
        <span className={!value ? "text-gray-400 dark:text-gray-400 font-['Outfit',sans-serif]" : "font-['Outfit',sans-serif]"}>
          {formatDisplay(value)}
        </span>
        <CalendarIcon size={16} className={isOpen ? "text-[#d4af37]" : "text-gray-400"} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-[calc(100%+6px)] left-0 w-full min-w-[290px] max-w-[320px] bg-white dark:bg-[#0b1b42] border border-[#d4af37]/20 dark:border-[#d4af37]/30 rounded-[8px] shadow-2xl z-[60] origin-top flex flex-col p-4 font-['Outfit',sans-serif]"
          >
            
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100 dark:border-white/10 font-['Outfit',sans-serif]">
              <button
                type="button"
                onClick={prevMonth}
                className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded transition-colors text-[#0a1128] dark:text-white"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex items-center gap-1 font-['Outfit',sans-serif]">
                <button
                  type="button"
                  onClick={() => setViewMode(viewMode === "months" ? "days" : "months")}
                  className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded text-[13px] font-semibold text-[#0a1128] dark:text-white flex items-center gap-1 transition-colors"
                >
                  {monthsList[currentMonth.getMonth()]}
                  <ChevronDown size={12} className="text-[#d4af37]" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode(viewMode === "years" ? "days" : "years")}
                  className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded text-[13px] font-semibold text-[#0a1128] dark:text-white flex items-center gap-1 transition-colors"
                >
                  {currentMonth.getFullYear()}
                  <ChevronDown size={12} className="text-[#d4af37]" />
                </button>
              </div>

              <button
                type="button"
                onClick={nextMonth}
                className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded transition-colors text-[#0a1128] dark:text-white"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            
            {viewMode === "months" && (
              <div className="grid grid-cols-3 gap-2 py-2 font-['Outfit',sans-serif]">
                {monthsList.map((m, idx) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => handleMonthSelect(idx)}
                    className={`py-2 text-[12px] font-semibold rounded transition-all font-['Outfit',sans-serif] ${
                      currentMonth.getMonth() === idx
                        ? "bg-[#0b1b42] text-[#d4af37] border border-[#d4af37]/40 shadow-sm"
                        : "text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            )}

            
            {viewMode === "years" && (
              <div className="max-h-[200px] overflow-y-auto grid grid-cols-3 gap-1.5 py-1 pr-1 font-['Outfit',sans-serif] scrollbar-thin">
                {yearsList.map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => handleYearSelect(y)}
                    className={`py-1.5 text-[12px] font-semibold rounded transition-all font-['Outfit',sans-serif] ${
                      currentMonth.getFullYear() === y
                        ? "bg-[#0b1b42] text-[#d4af37] border border-[#d4af37]/40 shadow-sm"
                        : "text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            )}

            
            {viewMode === "days" && (
              <>
                <div className="grid grid-cols-7 gap-1 text-center mb-1 font-['Outfit',sans-serif]">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                    <div key={d} className="text-[11px] font-semibold text-gray-400 dark:text-gray-400 uppercase tracking-wider font-['Outfit',sans-serif]">
                      {d}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1 font-['Outfit',sans-serif]">
                  {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const dateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                    const dateStr = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const isSelected = value === dateStr;
                    const isToday = new Date().toDateString() === dateObj.toDateString();

                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleDateSelect(day)}
                        className={`h-8 rounded text-[12px] font-medium transition-all flex items-center justify-center font-['Outfit',sans-serif] ${
                          isSelected
                            ? "bg-[#0b1b42] text-[#d4af37] font-bold border border-[#d4af37]/60 shadow-md shadow-[#0a1128]/20"
                            : isToday
                            ? "border border-[#d4af37]/50 text-[#0a1128] dark:text-white font-semibold"
                            : "text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
