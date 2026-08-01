import { useState } from "react";
import { Download, Heart, MessageCircle, Calendar } from "lucide-react";
import clsx from "clsx";

export default function StickyFooter({ isMobile }: { isMobile: boolean }) {
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-[#161e31] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] px-4 py-3 flex items-center justify-center">
            <div className="max-w-[1440px] w-full flex items-center justify-between gap-3 md:gap-4">
                
                <div className="flex items-center gap-2 shrink-0">
                    <button 
                        onClick={() => setIsSaved(!isSaved)}
                        className={clsx(
                            "flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-[4px] shadow-sm text-[13px] font-medium shrink-0 border transition-all hover:-translate-y-0.5",
                            isSaved 
                                ? "bg-rose-600 border-rose-600 text-white hover:bg-rose-700 hover:border-rose-700" 
                                : "bg-[#161e31] border-rose-600 text-rose-600 hover:bg-rose-600/15 hover:text-white"
                        )}
                    >
                        <Heart 
                            size={15} 
                            strokeWidth={1.5} 
                            className={isSaved ? "fill-white" : "fill-transparent"} 
                        />
                        {!isMobile && <span>{isSaved ? "Saved" : "Save"}</span>}
                    </button>
                    
                    <button className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#161e31] border border-white rounded-[4px] text-white hover:bg-[#F59E0B]/15 hover:border-[#F59E0B] transition-all hover:-translate-y-0.5 shadow-sm font-medium shrink-0">
                        <Download size={15} strokeWidth={1.5} />
                        <span className={isMobile ? "text-[12px]" : "text-[13px]"}>Download</span>
                    </button>
                </div>

                {!isMobile && <div className="w-px h-8 bg-white/10 mx-1 md:mx-2 shrink-0" />}

                <div className={clsx("flex items-center gap-2 md:gap-3 ml-auto", isMobile ? "flex-1 w-full" : "shrink-0")}>
                    {!isMobile && (
                        <button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-[4px] bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all hover:-translate-y-0.5 text-[13px] font-semibold shadow-[0_4px_14px_rgba(37,211,102,0.3)]">
                            <MessageCircle size={16} strokeWidth={2} />
                            <span>WhatsApp</span>
                        </button>
                    )}
                    
                    <button className={clsx(
                        "flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[4px] font-semibold shadow-[0_2px_8px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_12px_rgba(212,175,55,0.5)] transition-all hover:-translate-y-0.5",
                        isMobile ? "px-2 text-[12px]" : "px-6 text-sm"
                    )}>
                        <Calendar size={16} strokeWidth={1.5} />
                        <span>Book Call</span>
                    </button>
                </div>

            </div>
        </div>
    );
}