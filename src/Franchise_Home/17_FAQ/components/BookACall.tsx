import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  Send,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Headset,
  User,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";
import clsx from "clsx";

const SCHEDULE_DATA = [
  {
    id: "date-0",
    dayStr: "Sat",
    date: "Aug 01",
    slots: ["10:00 AM", "11:00 AM"],
    isPast: true,
  },
  {
    id: "date-1",
    dayStr: "Sun",
    date: "Aug 02",
    slots: ["02:00 PM", "04:30 PM", "05:15 PM"],
    isPast: false,
  },
  {
    id: "date-2",
    dayStr: "Mon",
    date: "Aug 03",
    slots: ["10:00 AM", "01:15 PM"],
    isPast: false,
  },
  {
    id: "date-3",
    dayStr: "Tue",
    date: "Aug 04",
    slots: [],
    isPast: false,
  },
  {
    id: "date-4",
    dayStr: "Wed",
    date: "Aug 05",
    slots: ["09:00 AM", "11:30 AM", "03:00 PM"],
    isPast: false,
  },
  {
    id: "date-5",
    dayStr: "Thu",
    date: "Aug 06",
    slots: ["10:30 AM", "02:00 PM", "04:00 PM"],
    isPast: false,
  },
  {
    id: "date-6",
    dayStr: "Fri",
    date: "Aug 07",
    slots: ["09:30 AM", "01:00 PM"],
    isPast: false,
  },
];

const FEATURES = [
  {
    icon: User,
    label: "Expert\nGuidance",
    delay: 0,
    colors:
      "bg-orange-500 text-white border-orange-400/50 shadow-md shadow-orange-500/20",
  },
  {
    icon: CalendarDays,
    label: "Flexible\nScheduling",
    delay: 0.15,
    colors:
      "bg-pink-500 text-white border-pink-400/50 shadow-md shadow-pink-500/20",
  },
  {
    icon: ShieldCheck,
    label: "No\nObligation",
    delay: 0.3,
    colors:
      "bg-emerald-500 text-white border-emerald-400/50 shadow-md shadow-emerald-500/20",
  },
];

export function BookACall() {
  const todayDateStr = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
  const defaultDate =
    SCHEDULE_DATA.find((d) => d.date === todayDateStr) ||
    SCHEDULE_DATA.find((d) => !d.isPast && d.slots.length > 0) ||
    SCHEDULE_DATA[1];

  const [selectedDateId, setSelectedDateId] = useState<string>(defaultDate.id);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingState, setBookingState] = useState<
    "idle" | "booking" | "success"
  >("idle");

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const selectedDateObj = SCHEDULE_DATA.find((d) => d.id === selectedDateId);

  useEffect(() => {
    setSelectedSlot(null);
  }, [selectedDateId]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    setTimeout(checkScroll, 100);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleBook = () => {
    if (selectedSlot) {
      setBookingState("booking");

      setTimeout(() => {
        setBookingState("success");

        setTimeout(() => {
          setBookingState("idle");
          setSelectedSlot(null);
        }, 3000);
      }, 1500);
    }
  };

  const scrollDates = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 140;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full relative flex flex-col p-4 sm:p-5 bg-white/40 dark:bg-[#0b1b42]/30 backdrop-blur-2xl border border-white/60 dark:border-white/10 rounded-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 min-h-[320px] justify-center group/container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px] z-0">
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-20, 30, -20], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-10 w-48 h-48 bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-[60px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{ x: [20, -30, 20], y: [20, -20, 20], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#d4af37]/20 dark:bg-[#d4af37]/15 rounded-full blur-[60px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent z-10" />

      <div className="flex flex-col gap-3 relative z-10 w-full">
            <div className="flex flex-col items-center justify-center text-center gap-2 w-full">
              <div className="relative flex items-center justify-center mt-1 mb-1">
                <motion.div
                  animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 180] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-[#d4af37]/20 dark:from-blue-500/40 dark:to-[#d4af37]/30 rounded-full scale-[1.5] blur-[8px] pointer-events-none"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-blue-100/50 dark:bg-[#0b1b42]/80 border border-white/50 dark:border-white/10 rounded-full scale-[1.3] pointer-events-none"
                />
                <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-b from-[#1c4ed8] to-[#0b1b42] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(11,27,66,0.3)] relative z-10 border border-white/20">
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Headset
                      size={26}
                      strokeWidth={2}
                      className="drop-shadow-md"
                    />
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-1 right-1 text-[#d4af37]"
                  >
                    <Sparkles size={12} />
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] sm:text-[24px] font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                  Let's get to know{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1c4ed8] to-[#0b1b42] dark:from-[#d4af37] dark:to-[#e8d07a]">
                    each other.
                  </span>
                </h3>
                <p className="text-[12px] text-gray-600 dark:text-gray-300 font-medium max-w-[260px] mx-auto leading-relaxed">
                  Schedule a 1-on-1 discovery call with our franchise specialists
                  today.
                </p>
              </div>

              <div className="flex items-center justify-center w-full max-w-[320px] mx-auto mt-1">
                {FEATURES.map((feature, index) => (
                  <div
                    key={feature.label}
                    className="flex flex-1 items-center justify-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: feature.delay, duration: 0.4 }}
                      className="flex flex-col items-center gap-1.5 group"
                    >
                      <div
                        className={clsx(
                          "w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 border group-hover:scale-110 transition-transform duration-300",
                          feature.colors,
                        )}
                      >
                        <feature.icon size={15} strokeWidth={2.5} />
                      </div>
                      <span className="text-[9px] font-bold text-gray-800 dark:text-gray-300 leading-tight text-center whitespace-pre-line">
                        {feature.label}
                      </span>
                    </motion.div>
                    {index < FEATURES.length - 1 && (
                      <div className="w-px h-6 bg-gray-300 dark:bg-gray-700/60 mx-1.5" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-200/60 dark:border-white/10 pt-3 mt-1">
              <div className="flex flex-col gap-1.5 relative">
                <div className="flex justify-between items-center px-1">
                  <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Available Dates
                  </span>
                </div>

                <AnimatePresence>
                  {canScrollLeft && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => scrollDates("left")}
                      className="absolute left-0 top-[55%] z-20 w-7 h-7 rounded-full bg-white/95 dark:bg-[#121c33]/95 backdrop-blur-xl flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-700 dark:text-[#d4af37] shadow-md transition-all active:scale-95 -translate-x-1/2 hover:scale-110"
                    >
                      <ChevronLeft size={14} strokeWidth={2.5} />
                    </motion.button>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {canScrollRight && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => scrollDates("right")}
                      className="absolute right-0 top-[55%] z-20 w-7 h-7 rounded-full bg-white/95 dark:bg-[#121c33]/95 backdrop-blur-xl flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-700 dark:text-[#d4af37] shadow-md transition-all active:scale-95 translate-x-1/2 hover:scale-110"
                    >
                      <ChevronRight size={14} strokeWidth={2.5} />
                    </motion.button>
                  )}
                </AnimatePresence>

                <div
                  ref={scrollRef}
                  onScroll={checkScroll}
                  className="flex gap-2 overflow-x-auto pt-1 pb-2 px-1 -mx-1 scrollbar-hide snap-x snap-mandatory relative z-10"
                >
                  {SCHEDULE_DATA.map((item) => {
                    const isSelected = selectedDateId === item.id;
                    const isPast = item.isPast;
                    const hasSlots = item.slots.length > 0;
                    const isDisabled = isPast || !hasSlots;

                    return (
                      <button
                        key={item.id}
                        onClick={() =>
                          !isDisabled && setSelectedDateId(item.id)
                        }
                        disabled={isDisabled}
                        className={clsx(
                          "relative shrink-0 snap-start flex flex-col items-center justify-center gap-0.5 py-2.5 w-[64px] rounded-[8px] border transition-all duration-300",
                          isSelected
                            ? "bg-gradient-to-b from-[#0b1b42] to-[#060e24] dark:from-[#d4af37] dark:to-[#aa8922] border-transparent shadow-[0_4px_12px_rgba(11,27,66,0.3)] dark:shadow-[0_4px_12px_rgba(212,175,55,0.3)] scale-[1.02]"
                            : isDisabled
                              ? "bg-gray-100/50 dark:bg-white/5 border-transparent opacity-40 cursor-not-allowed grayscale"
                              : "bg-white/70 dark:bg-white/5 border-white/60 dark:border-white/10 hover:border-[#0b1b42]/30 dark:hover:border-[#d4af37]/50 shadow-sm backdrop-blur-md",
                        )}
                      >
                        {isSelected && (
                          <div className="absolute top-0 inset-x-0 h-[1px] bg-white/30 rounded-t-[8px]" />
                        )}
                        <span
                          className={clsx(
                            "text-[10px] font-black uppercase tracking-widest transition-colors",
                            isSelected
                              ? "text-blue-100 dark:text-[#0b1b42]/80"
                              : "text-gray-500 dark:text-gray-400",
                          )}
                        >
                          {item.dayStr}
                        </span>
                        <span
                          className={clsx(
                            "text-[13px] font-black transition-colors",
                            isSelected
                              ? "text-white dark:text-[#0b1b42]"
                              : "text-gray-900 dark:text-white",
                          )}
                        >
                          {item.date.split(" ")[1]}
                        </span>

                        {isDisabled && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="h-[1.5px] w-8 bg-gray-400/80 dark:bg-gray-500/80 rotate-45 rounded-full" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2 min-h-[90px] bg-white/30 dark:bg-black/20 backdrop-blur-md rounded-[8px] p-3 border border-white/50 dark:border-white/5 shadow-inner">
                <div className="flex justify-between items-end px-1">
                  <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Available Slots
                  </span>
                  <span className="text-[10px] font-bold text-[#0b1b42] dark:text-[#d4af37]">
                    {selectedDateObj?.date}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedDateId}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                  >
                    {selectedDateObj?.slots.length === 0 ? (
                      <div className="col-span-full py-5 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 border border-dashed border-gray-300 dark:border-gray-700/50 rounded-[4px] bg-white/40 dark:bg-transparent">
                        <span className="text-[11px] font-bold">
                          No slots available.
                        </span>
                      </div>
                    ) : (
                      selectedDateObj?.slots.map((slot) => {
                        const isSelected = selectedSlot === slot;
                        return (
                          <button
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={clsx(
                              "flex items-center justify-center gap-1.5 py-2 px-1 rounded-[4px] border transition-all duration-300 group active:scale-95",
                              isSelected
                                ? "bg-gradient-to-r from-[#0b1b42] to-[#12235a] dark:from-[#d4af37] dark:to-[#aa8922] border-transparent text-white dark:text-[#0b1b42] shadow-md"
                                : "bg-white/80 dark:bg-white/5 border-white/60 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-[#0b1b42]/40 dark:hover:border-[#d4af37]/60 hover:shadow-sm",
                            )}
                          >
                            {isSelected && (
                              <div className="absolute top-0 inset-x-0 h-[1px] bg-white/30 rounded-t-[4px]" />
                            )}
                            <Clock
                              size={12}
                              className={clsx(
                                "transition-colors shrink-0",
                                isSelected
                                  ? "text-blue-200 dark:text-[#0b1b42]/80"
                                  : "text-[#0b1b42]/60 dark:text-[#d4af37]/80 group-hover:text-[#0b1b42] dark:group-hover:text-[#d4af37]",
                              )}
                            />
                            <span
                              className={clsx(
                                "text-[11px] font-bold tracking-wide transition-colors",
                                isSelected
                                  ? "text-white dark:text-[#0b1b42]"
                                  : "text-gray-800 dark:text-gray-200",
                              )}
                            >
                              {slot}
                            </span>
                          </button>
                        );
                      })
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex justify-center w-full mt-0 pt-0">
              <button
                onClick={handleBook}
                disabled={!selectedSlot || bookingState !== "idle"}
                className={clsx(
                  "w-full max-w-[280px] py-3 rounded-[8px] font-black text-[12px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 relative z-10 overflow-hidden group border",
                  selectedSlot
                    ? "bg-[#0b1b42] text-white border-[#0b1b42] shadow-[0_4px_12px_rgba(11,27,66,0.3)] hover:shadow-[0_4px_16px_rgba(11,27,66,0.4)] dark:hover:shadow-[0_4px_16px_rgba(255,255,255,0.3)] active:scale-[0.98]"
                    : "bg-gray-200/50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-500 border-transparent cursor-not-allowed backdrop-blur-md",
                )}
              >
                {selectedSlot && (
                  <>
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-white/20" />
                  </>
                )}
                <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
                  Book a Call
                  {selectedSlot && (
                    <CheckCircle2 size={16} className="text-[#d4af37]" />
                  )}
                </span>
              </button>
            </div>
          </div>

      <AnimatePresence>
        {bookingState !== "idle" && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="absolute inset-0 z-50 bg-white/90 dark:bg-[#040914]/90 flex flex-col items-center justify-center rounded-[8px]"
          >
            {bookingState === "booking" && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0, y: -10 }}
                className="flex flex-col items-center gap-4 text-[#0b1b42] dark:text-[#d4af37]"
              >
                <div className="relative flex items-center justify-center w-14 h-14">
                  <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-[#0b1b42] dark:border-[#d4af37] animate-[spin_3s_linear_infinite]" />
                  <motion.div
                    animate={{
                      x: [0, 4, -4, 0],
                      y: [0, -4, -2, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Send
                      size={20}
                      className="drop-shadow-md"
                      fill="currentColor"
                    />
                  </motion.div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white animate-pulse">
                  Securing Slot...
                </span>
              </motion.div>
            )}

            {bookingState === "success" && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="flex flex-col items-center gap-3 text-center px-6"
              >
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.1, 1] }}
                    transition={{ duration: 0.4 }}
                    className="w-16 h-16 rounded-full bg-emerald-500 dark:bg-emerald-500 flex items-center justify-center text-white shadow-[0_8px_20px_rgba(16,185,129,0.4)] mb-2 relative overflow-hidden"
                  >
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-white/40" />
                    <CheckCircle2 size={32} strokeWidth={2.5} />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [-10, -20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{ duration: 1.2, delay: 0.1 }}
                    className="absolute -top-3 -right-3 text-[#d4af37]"
                  >
                    <Sparkles size={16} fill="currentColor" />
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [10, 20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="absolute -bottom-1 -left-4 text-[#d4af37]"
                  >
                    <Sparkles size={12} fill="currentColor" />
                  </motion.div>
                </div>

                <div className="flex flex-col gap-1 items-center">
                  <h4 className="text-[18px] font-black text-gray-900 dark:text-white tracking-tight leading-none">
                    Booking Confirmed!
                  </h4>
                  <p className="text-[11px] text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-[220px] mt-1">
                    You're scheduled for{" "}
                    <span className="text-[#d4af37] font-black">
                      {selectedDateObj?.dayStr} at {selectedSlot}
                    </span>
                    . Check your inbox for the calendar invite.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
