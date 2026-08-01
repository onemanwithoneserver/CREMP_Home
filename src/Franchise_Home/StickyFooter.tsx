import { Download, Heart, ArrowRightLeft, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function StickyFooter({ isMobile }: { isMobile: boolean }) {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-[#161e31] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] px-4 py-3 flex items-center justify-center">
            <div className="max-w-[1440px] w-full flex items-center justify-between gap-2 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                    <button className="flex items-center justify-center gap-2 px-3 md:px-5 py-3.5 bg-white/5 border border-white/10 rounded-[4px] text-white/90 hover:bg-white/10 hover:text-white transition-all hover-lift shadow-sm text-sm font-medium shrink-0">
                        <Heart size={16} strokeWidth={1.5} />
                        <span className={clsx(isMobile ? "hidden" : "block")}>Save</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 md:px-5 py-3.5 bg-white/5 border border-white/10 rounded-[4px] text-white/90 hover:bg-white/10 hover:text-white transition-all hover-lift shadow-sm text-sm font-medium shrink-0">
                        <Download size={16} strokeWidth={1.5} />
                        <span className={clsx(isMobile ? "text-[12px]" : "")}>Download</span>
                    </button>
                </div>

                <div className={clsx("w-px h-8 bg-white/10 mx-1 md:mx-2 shrink-0", isMobile ? "hidden" : "hidden md:block")} />

                {/* Primary Actions */}
                <div className={clsx("flex items-center gap-2 md:gap-3 ml-auto", isMobile ? "flex-1 w-full" : "shrink-0")}>
                    <button className={clsx("flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 rounded-[4px] bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors text-[13px] font-semibold shadow-[0_4px_14px_rgba(37,211,102,0.3)]", isMobile ? "hidden" : "")}>
                        <MessageCircle size={16} strokeWidth={2} />
                        <span>WhatsApp</span>
                    </button>
                    <button className={clsx("flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[4px] text-sm font-semibold shadow-[0_2px_8px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_12px_rgba(212,175,55,0.5)] transition-all hover-lift", isMobile ? "px-2 text-[12px]" : "")}>
                        <Calendar size={16} strokeWidth={1.5} />
                        <span className={clsx(isMobile ? "text-[12px]" : "")}>Book Call</span>
                    </button>
                </div>

            </div>
        </div>
    );
}

