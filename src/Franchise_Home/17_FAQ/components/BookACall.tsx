import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, CheckCircle2, Send, Sparkles } from "lucide-react";
import clsx from "clsx";

const SCHEDULE_DATA = [
  {
    id: "date-1",
    dayStr: "Today",
    date: "Aug 02",
    slots: ["02:00 PM", "04:30 PM", "05:15 PM"],
  },
  {
    id: "date-2",
    dayStr: "Tomorrow",
    date: "Aug 03",
    slots: ["10:00 AM", "01:15 PM"],
  },
  {
    id: "date-3",
    dayStr: "Wed",
    date: "Aug 04",
    slots: [], // No slots
  },
  {
    id: "date-4",
    dayStr: "Thu",
    date: "Aug 05",
    slots: ["09:00 AM", "11:30 AM", "03:00 PM"],
  },
];

export function BookACall() {
  const [selectedDateId, setSelectedDateId] = useState<string>(SCHEDULE_DATA[0].id);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingState, setBookingState] = useState<"idle" | "booking" | "success">("idle");

  const selectedDateObj = SCHEDULE_DATA.find((d) => d.id === selectedDateId);

  // Reset selected slot when changing date
  useEffect(() => {
    setSelectedSlot(null);
  }, [selectedDateId]);

  const handleBook = () => {
    if (selectedSlot) {
      setBookingState("booking");
      
      // Simulate booking delay
      setTimeout(() => {
        setBookingState("success");
        
        // Reset after success
        setTimeout(() => {
          setBookingState("idle");
          setSelectedSlot(null);
        }, 3500);
      }, 1200);
    }
  };

  return (
    <div className="w-full relative flex flex-col gap-5 p-5 bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl border border-gray-200/60 dark:border-[#d4af37]/20 rounded-[8px] shadow-sm overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-[4px] bg-[#d4af37]/10 flex items-center justify-center shrink-0 text-[#d4af37] border border-[#d4af37]/20">
          <Calendar size={18} />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
            Book a Discovery Call
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
            Select a date and time to speak with our franchise team.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 relative z-10">
        {/* Date Row */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Select Date
          </span>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide snap-x">
            {SCHEDULE_DATA.map((item) => {
              const isSelected = selectedDateId === item.id;
              const hasSlots = item.slots.length > 0;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => hasSlots && setSelectedDateId(item.id)}
                  whileHover={hasSlots ? { y: -2 } : {}}
                  whileTap={hasSlots ? { scale: 0.95 } : {}}
                  disabled={!hasSlots}
                  className={clsx(
                    "relative shrink-0 snap-start flex flex-col items-center justify-center gap-1 p-2.5 w-[72px] rounded-[6px] border transition-all duration-300",
                    isSelected
                      ? "bg-[#0b1b42] border-[#0b1b42] dark:bg-[#d4af37] dark:border-[#d4af37] shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
                      : hasSlots
                      ? "bg-white dark:bg-[#121c33] border-gray-200 dark:border-gray-700 hover:border-[#d4af37]/50 shadow-sm"
                      : "bg-gray-100 dark:bg-gray-800/50 border-gray-200 dark:border-gray-800 opacity-50 cursor-not-allowed"
                  )}
                >
                  <span
                    className={clsx(
                      "text-[10px] font-bold uppercase",
                      isSelected
                        ? "text-[#d4af37] dark:text-[#0b1b42]"
                        : "text-gray-500 dark:text-gray-400"
                    )}
                  >
                    {item.dayStr}
                  </span>
                  <span
                    className={clsx(
                      "text-xs font-black",
                      isSelected ? "text-white dark:text-gray-950" : "text-gray-900 dark:text-white"
                    )}
                  >
                    {item.date.split(" ")[1]}
                  </span>
                  {!hasSlots && (
                    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px] rounded-[6px]">
                      <div className="h-[1px] w-8 bg-gray-400 dark:bg-gray-500 rotate-45" />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Time Slots */}
        <div className="flex flex-col gap-2 min-h-[90px]">
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Available Slots
          </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDateId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2"
            >
              {selectedDateObj?.slots.length === 0 ? (
                <div className="col-span-full py-4 flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-200 dark:border-gray-700 rounded-[4px]">
                  <span className="text-xs font-medium">No slots available on this date.</span>
                </div>
              ) : (
                selectedDateObj?.slots.map((slot, i) => {
                  const isSelected = selectedSlot === slot;
                  return (
                    <motion.button
                      key={slot}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setSelectedSlot(slot)}
                      className={clsx(
                        "flex items-center justify-center gap-1.5 p-2 rounded-[4px] border transition-all duration-200",
                        isSelected
                          ? "bg-[#d4af37] border-[#d4af37] text-gray-950 shadow-md"
                          : "bg-white dark:bg-[#121c33] border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#d4af37]/50"
                      )}
                    >
                      <Clock size={12} className={isSelected ? "opacity-90" : "text-[#d4af37] opacity-70"} />
                      <span className="text-[11px] font-bold tracking-wide">{slot}</span>
                    </motion.button>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={handleBook}
        disabled={!selectedSlot || bookingState !== "idle"}
        className={clsx(
          "w-full py-3 mt-2 rounded-[4px] font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 relative z-10",
          selectedSlot
            ? "bg-[#0b1b42] dark:bg-white text-white dark:text-gray-950 hover:shadow-lg hover:shadow-[#0b1b42]/20 dark:hover:shadow-white/20 active:scale-[0.98]"
            : "bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
        )}
      >
        Confirm Booking
      </button>

      {/* Booking Success Animation Overlay */}
      <AnimatePresence>
        {bookingState !== "idle" && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="absolute inset-0 z-50 bg-white/90 dark:bg-[#0b1b42]/95 flex flex-col items-center justify-center"
          >
            {bookingState === "booking" && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0, y: -50 }}
                className="flex flex-col items-center gap-4 text-[#d4af37]"
              >
                <motion.div
                  animate={{ 
                    x: [0, 10, -10, 0],
                    y: [0, -10, -5, 0],
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send size={40} className="drop-shadow-lg" fill="currentColor" />
                </motion.div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white animate-pulse">
                  Sending Request...
                </span>
              </motion.div>
            )}

            {bookingState === "success" && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 200 }}
                className="flex flex-col items-center gap-3 text-center px-4"
              >
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/30 mb-2"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  
                  {/* Floating sparkles */}
                  <motion.div
                    animate={{ y: [-10, -20], opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="absolute -top-4 -right-4 text-emerald-400"
                  >
                    <Sparkles size={16} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [10, 20], opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    className="absolute -bottom-2 -left-4 text-emerald-400"
                  >
                    <Sparkles size={12} />
                  </motion.div>
                </div>
                
                <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">
                  Call Scheduled!
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed max-w-[200px]">
                  You're all set for <strong className="text-[#d4af37]">{selectedDateObj?.dayStr} at {selectedSlot}</strong>. Check your email for details.
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
