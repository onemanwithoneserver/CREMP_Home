import { AnimatePresence, motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { forwardRef } from "react";
function DesktopAnnouncementContent() {
  return (
    <>
      <div className="flex items-center gap-1.5 font-bold text-[#0a1128] sm:gap-2 dark:text-white">
        <Rocket className="h-3.5 w-3.5 text-[#D4AF37] sm:h-4 sm:w-4 dark:text-[#D4AF37]" />
        <span className="uppercase tracking-wide">Vendor Onboarding Open</span>
      </div>
      <div className="hidden h-3.5 w-[1px] bg-gray-300 sm:block dark:bg-gray-700"></div>
      <div className="flex items-center gap-1.5 font-semibold text-[#D4AF37] sm:gap-2 dark:text-[#D4AF37]">
        <span className="rounded bg-[#D4AF37]/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] sm:px-2 sm:text-xs dark:bg-[#D4AF37]/20 dark:text-[#D4AF37]">
          Phase 1
        </span>
        <span className="uppercase tracking-wide">Launching in Telangana</span>
      </div>
    </>
  );
}
function MobileAnnouncementContent() {
  return (
    <>
      <div className="flex items-center gap-2 text-xs font-bold text-[#0a1128] dark:text-white">
        <Rocket className="h-3.5 w-3.5 text-[#D4AF37] dark:text-[#D4AF37]" />
        <span className="uppercase tracking-wide">Vendor Onboarding Open</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-[#D4AF37] dark:text-[#D4AF37]">
        <span className="uppercase">Early Access</span>
      </div>
    </>
  );
}
interface InlineAnnouncementProps {
  isMobile?: boolean;
  hiddenVisually?: boolean;
}
export const InlineAnnouncement = forwardRef<
  HTMLDivElement,
  InlineAnnouncementProps
>(({ isMobile = false, hiddenVisually = false }, ref) => {
  const springAnim = { type: "spring" as const, stiffness: 100, damping: 20 };
  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: hiddenVisually ? 0 : 1, y: 0, scale: 1 }}
        transition={springAnim}
        className="mb-3 flex flex-col items-start gap-2 rounded-[4px] border border-[#D4AF37]/20 dark:border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 to-transparent dark:from-[#D4AF37]/10 p-3 shadow-sm backdrop-blur-sm"
      >
        <MobileAnnouncementContent />
      </motion.div>
    );
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: hiddenVisually ? 0 : 1, y: 0, scale: 1 }}
      transition={springAnim}
      className="mb-4 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-3 py-1.5 text-xs shadow-[0_0_15px_rgba(178,127,28,0.1)] backdrop-blur-md sm:gap-3 sm:px-4 sm:text-sm dark:border-[#D4AF37]/20 dark:from-[#D4AF37]/10 dark:shadow-[0_0_15px_rgba(246,178,59,0.1)]"
    >
      <DesktopAnnouncementContent />
    </motion.div>
  );
});
InlineAnnouncement.displayName = "InlineAnnouncement";
interface HeaderStickyBannerProps {
  isVisible: boolean;
  isMobile?: boolean;
}
export default function HeaderStickyBanner({
  isVisible,
  isMobile = false,
}: HeaderStickyBannerProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="sticky-announcement"
          initial={{ opacity: 0, scale: 0.9, width: 0, height: 0 }}
          animate={{ opacity: 1, scale: 1, width: "auto", height: "auto" }}
          exit={{ opacity: 0, scale: 0.9, width: 0, height: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 28,
            opacity: { duration: 0.2 },
          }}
          className="overflow-hidden"
        >
          <div
            className={`
                            flex items-center justify-center whitespace-nowrap
                            rounded-full border border-[#D4AF37]/20
                            bg-gradient-to-r from-[#D4AF37]/10 to-transparent
                            backdrop-blur-md
                            shadow-[0_0_15px_rgba(178,127,28,0.1)]
                            dark:border-[#D4AF37]/20
                            dark:from-[#D4AF37]/10
                            dark:shadow-[0_0_15px_rgba(246,178,59,0.1)]
                            ${isMobile ? "gap-2 px-3 py-1.5 text-[10px]" : "gap-2 px-3 py-1.5 text-xs sm:gap-3 sm:px-4 sm:text-sm"}
                        `}
          >
            {isMobile ? (
              <>
                <div className="flex items-center gap-1.5 font-bold text-[#0a1128] dark:text-white">
                  <Rocket className="h-3 w-3 text-[#D4AF37] dark:text-[#D4AF37]" />
                  <span className="uppercase tracking-wide">
                    Vendor Onboarding Open
                  </span>
                </div>
                <div className="h-3 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
                <span className="font-semibold uppercase tracking-wide text-[#D4AF37] dark:text-[#D4AF37]">
                  Early Access
                </span>
              </>
            ) : (
              <DesktopAnnouncementContent />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
