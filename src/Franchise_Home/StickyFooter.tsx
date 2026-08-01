import { useState } from "react";
import { Heart, Share2, Calendar } from "lucide-react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import clsx from "clsx";

const Tooltip = ({
  children,
  text,
  show,
}: {
  children: React.ReactNode;
  text: string;
  show: boolean;
}) => {
  if (!show) return <>{children}</>;

  return (
    <div className="relative flex items-center justify-center group">
      {children}
      <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gradient-to-b from-slate-800 to-slate-900 text-slate-100 text-[11px] font-semibold rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-slate-700/50 scale-95 group-hover:scale-100 group-active:scale-100 z-50">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[5px] border-transparent border-t-slate-800" />
      </div>
    </div>
  );
};

export default function StickyFooter({ isMobile }: { isMobile: boolean }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-b from-slate-950/90 to-black/95 backdrop-blur-2xl border-t border-white/5 shadow-[0_-15px_40px_rgba(0,0,0,0.6)] px-4 py-3 pb-[max(calc(env(safe-area-inset-bottom)+0.75rem),0.75rem)] flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

      <div className="max-w-[1440px] w-full flex items-center justify-between gap-2 md:gap-4 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
          <Tooltip text={isSaved ? "Saved" : "Save"} show={isMobile}>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={clsx(
                "h-11 flex items-center justify-center gap-2 rounded-xl text-[13px] font-semibold transition-all duration-300 active:scale-95 border shrink-0",
                isMobile ? "w-10 px-0" : "px-5",
                isSaved
                  ? "bg-gradient-to-br from-rose-500/20 to-red-600/10 border-rose-500/40 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                  : "bg-gradient-to-b from-white/10 to-white/5 border-white/10 text-slate-300 hover:from-rose-500/10 hover:to-rose-600/5 hover:border-rose-400/50 hover:text-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.15)]",
              )}
            >
              <Heart
                size={18}
                strokeWidth={isSaved ? 0 : 2}
                className={clsx(
                  "transition-all duration-300",
                  isSaved
                    ? "fill-rose-500 text-rose-500 scale-110"
                    : "fill-transparent",
                )}
              />
              {!isMobile && <span>{isSaved ? "Saved" : "Save"}</span>}
            </button>
          </Tooltip>

          {!isMobile && (
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-0 md:mx-1 shrink-0" />
          )}

          <Tooltip text="Website Link" show={isMobile}>
            <button
              className={clsx(
                "h-11 flex items-center justify-center gap-2 rounded-xl text-[13px] font-semibold transition-all duration-300 active:scale-95 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 text-slate-300 hover:from-blue-500/10 hover:to-blue-600/5 hover:border-blue-400/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] shrink-0",
                isMobile ? "w-10 px-0" : "px-5",
              )}
            >
              <OpenInNewIcon style={{ fontSize: 18 }} />
              {!isMobile && (
                <span className="whitespace-nowrap">Website Link</span>
              )}
            </button>
          </Tooltip>

          <Tooltip text="Share" show={isMobile}>
            <button
              className={clsx(
                "h-11 flex items-center justify-center gap-2 rounded-xl text-[13px] font-semibold transition-all duration-300 active:scale-95 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 text-slate-300 hover:from-emerald-500/10 hover:to-emerald-600/5 hover:border-emerald-400/50 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] shrink-0",
                isMobile ? "w-10 px-0" : "px-5",
              )}
            >
              <Share2 size={18} strokeWidth={2} />
              {!isMobile && <span>Share</span>}
            </button>
          </Tooltip>
        </div>

        <button
          className={clsx(
            "h-11 flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 active:scale-95 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] hover:from-[#d4af37] hover:via-[#bf953f] hover:to-[#a67c00] text-white shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] border border-[#f9df9f]/50 ml-auto",
            isMobile ? "w-3/5 px-2 text-[13px]" : "px-8 text-sm shrink-0",
          )}
        >
          <Calendar size={18} strokeWidth={2} />
          <span className="truncate">Book a Call</span>
        </button>
      </div>
    </div>
  );
}
