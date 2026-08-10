import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Share2, Calendar, MessageCircle } from "lucide-react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import clsx from "clsx";

export default function StickyFooter() {
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-[#0b1b42]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-15px_40px_rgba(0,0,0,0.6)] px-4 py-3 pb-[max(calc(env(safe-area-inset-bottom)+0.75rem),0.75rem)] flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

            <div className="w-full flex items-center justify-between gap-2 relative z-10">
                <div className="flex items-center gap-1.5 shrink-0">
                    <motion.button
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setIsSaved(!isSaved)}
                        className="w-10 h-11 flex flex-col items-center justify-center gap-0.5 rounded-[4px] transition-all duration-300 text-white"
                    >
                        <Heart
                            size={18}
                            strokeWidth={isSaved ? 0 : 2}
                            className={clsx(
                                "transition-all duration-300",
                                isSaved ? "fill-rose-500 text-rose-500 scale-110" : "fill-transparent"
                            )}
                        />
                        <span className="text-[0.6rem]">Save</span>
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="w-10 h-11 flex flex-col items-center justify-center gap-0.5 rounded-[4px] transition-all duration-300 text-white"
                    >
                        <Share2 size={18} strokeWidth={2} />
                        <span className="text-[0.6rem]">Share</span>
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="w-10 h-11 flex flex-col items-center justify-center gap-0.5 rounded-[4px] transition-all duration-300 text-white"
                    >
                        <OpenInNewIcon style={{ fontSize: 18 }} />
                        <span className="text-[0.6rem]">Web</span>
                    </motion.button>
                </div>

                <div className="flex items-center gap-2 flex-1 justify-end">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.92 }}
                        className="h-11 flex-1 max-w-[120px] flex items-center justify-center gap-2 rounded-[4px] font-medium transition-all duration-300 bg-[#0a1128] border border-white/20 text-white hover:bg-white/10 px-2 text-[13px]"
                    >
                        <MessageCircle size={16} className="text-emerald-400" />
                        <span className="truncate">WhatsApp</span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.92 }}
                        className="h-11 flex-1 max-w-[140px] flex items-center justify-center gap-1.5 rounded-[4px] font-bold transition-all duration-300 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#f9df9f]/50 px-2 text-[13px]"
                    >
                        <Calendar size={16} strokeWidth={2} />
                        <span className="truncate">Schedule Visit</span>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
