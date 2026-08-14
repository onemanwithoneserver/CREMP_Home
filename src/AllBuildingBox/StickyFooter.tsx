import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Share2, Calendar, MessageCircle, X } from "lucide-react";

import clsx from "clsx";
import { BookACall } from "../Franchise_Home/17_FAQ/components/BookACall";

export default function StickyFooter() {
  const [isSaved, setIsSaved] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      {isBookingOpen && (
        <div
          className="fixed inset-0 z-[40]"
          onClick={() => setIsBookingOpen(false)}
        />
      )}

      <div className="w-full z-50">
        <AnimatePresence>
          {isBookingOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute bottom-full left-0 w-full px-3 pb-2"
            >
              <div className="w-full max-w-md mx-auto relative shadow-2xl rounded-[4px] overflow-hidden">
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="absolute -top-11 right-2 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xl border border-gray-200/60 flex items-center justify-center text-gray-700 shadow-lg z-10 hover:bg-white transition-colors"
                >
                  <X size={18} />
                </button>
                <BookACall />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-50 w-full bg-[#0b1b42]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-15px_40px_rgba(0,0,0,0.6)] px-4 py-3 pb-[max(calc(env(safe-area-inset-bottom)+0.75rem),0.75rem)] flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

          <div className="w-full flex items-center justify-between gap-2 relative z-10">
            <div className="flex items-center gap-1.5 shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsSaved(!isSaved)}
                className={clsx(
                  "w-10 h-11 flex flex-col items-center justify-center gap-0.5 rounded-[4px] transition-all duration-300 border shrink-0",
                  isSaved
                    ? "bg-rose-500/20 border-rose-500/40 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]"
                    : "bg-white/5 hover:bg-rose-500/10 border-white/10 hover:border-rose-400/40 text-white hover:text-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.15)]",
                )}
              >
                <Heart
                  size={17}
                  strokeWidth={isSaved ? 0 : 2}
                  className={clsx(
                    "transition-all duration-300",
                    isSaved
                      ? "fill-rose-500 text-rose-500 scale-110"
                      : "fill-transparent",
                  )}
                />
                <span className="text-[0.52rem] font-semibold">
                  {isSaved ? "Saved" : "Save"}
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-11 flex flex-col items-center justify-center gap-0.5 rounded-[4px] transition-all duration-300 bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-400/40 text-white hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] shrink-0"
              >
                <Share2 size={17} strokeWidth={2} />
                <span className="text-[0.52rem] font-semibold">Share</span>
              </motion.button>

            </div>

            <div className="flex items-center gap-2 flex-1 justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className="h-11 flex-1 max-w-[115px] flex items-center justify-center gap-1.5 rounded-[4px] font-semibold transition-all duration-300 bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/25 text-white px-2.5 text-[0.72rem]"
              >
                <MessageCircle
                  size={15}
                  className="text-emerald-400 shrink-0"
                />
                <span className="truncate">WhatsApp</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsBookingOpen(true)}
                className="h-11 flex-1 max-w-[150px] flex items-center justify-center gap-1.5 rounded-[4px] font-semibold transition-all duration-300 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] hover:from-[#d4af37] hover:via-[#bf953f] hover:to-[#a67c00] text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] border border-[#f9df9f]/50 px-2.5 text-[0.72rem]"
              >
                <Calendar size={15} strokeWidth={2} className="shrink-0" />
                <span className="truncate">Schedule Visit</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
