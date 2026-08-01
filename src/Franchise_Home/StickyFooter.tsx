import { Download, BookOpen } from "lucide-react";

export default function StickyFooter({ isMobile }: { isMobile: boolean }) {
    if (!isMobile) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white/90 dark:bg-[#0b162c]/90 backdrop-blur-md border-t border-gray-200 dark:border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] px-4 py-3 flex flex-row gap-3">
            <button
                className="flex-1 flex flex-row items-center justify-center gap-2 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white py-3.5 rounded-xl text-[13px] font-semibold shadow-[0_2px_8px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_12px_rgba(212,175,55,0.5)] transition-all text-center"
            >
                <Download size={16} className="shrink-0" />
                <span className="truncate">Download Brochure</span>
            </button>
            <button
                className="flex-1 flex flex-row items-center justify-center gap-2 bg-[#121c33] active:bg-[#1a2542] text-white border border-[#d4af37]/40 py-3.5 rounded-xl text-[13px] font-semibold shadow-sm transition-all text-center"
            >
                <BookOpen size={16} className="text-white shrink-0" />
                <span>Apply Now</span>
            </button>
        </div>
    );
}
