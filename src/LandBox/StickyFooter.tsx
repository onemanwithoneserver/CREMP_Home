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
                  className="absolute -top-11 right-2 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xl border border-gray-200/60 flex items-center justify-center text-[#0a1128] shadow-lg z-10 hover:bg-white transition-colors"
                >
                  <X size={18} />
                </button>
                <BookACall />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-50 w-full bg-[#0b1b42]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-15px_40px_rgba(0,0,0,0.6)] px-4 py-3 pb-[max(calc(env(safe-area-inset-bottom)+0.75rem),0.75rem)] flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
          <div className="w-full flex items-center gap-2 relative z-10 max-w-[480px] mx-auto">
            <div className="flex items-center gap-2 shrink-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSaved(!isSaved)}
                className={clsx(
                  "w-11 h-11 flex flex-col items-center justify-center gap-1 rounded-[4px] transition-all duration-300 border shrink-0",
                  isSaved
                    ? "bg-[#d4af37]/10 border-[#d4af37]/40 text-[#d4af37]"
                    : "bg-transparent hover:bg-white/5 border-white/20 hover:border-white/30 text-white",
                )}
              >
                <Heart
                  size={16}
                  strokeWidth={isSaved ? 0 : 1.5}
                  className={clsx(
                    "transition-all duration-300",
                    isSaved
                      ? "fill-[#d4af37] text-[#d4af37]"
                      : "fill-transparent",
                  )}
                />
                <span className="text-[0.6rem] font-semibold leading-none">
                  {isSaved ? "Saved" : "Save"}
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 flex flex-col items-center justify-center gap-1 rounded-[4px] transition-all duration-300 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/30 text-white shrink-0"
              >
                <Share2 size={16} strokeWidth={1.5} />
                <span className="text-[0.6rem] font-semibold leading-none">
                  Share
                </span>
              </motion.button>
            </div>

            <div className="flex items-center gap-2 flex-1 justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="h-11 flex-1 max-w-[120px] flex items-center justify-center gap-1.5 rounded-[4px] font-semibold transition-all duration-300 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/30 text-white px-2 text-[0.8rem]"
              >
                <MessageCircle size={15} strokeWidth={2} className="shrink-0" />
                <span className="truncate">WhatsApp</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingOpen(true)}
                className="h-11 flex-1 max-w-[160px] flex items-center justify-center gap-1.5 rounded-[4px] font-semibold transition-all duration-300 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] hover:from-[#d4af37] hover:via-[#bf953f] hover:to-[#a67c00] text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] border border-[#f9df9f]/50 px-2 text-[0.8rem]"
              >
                <Calendar
                  size={15}
                  strokeWidth={2}
                  className="shrink-0 text-white"
                />
                <span className="truncate text-white">Schedule Visit</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
