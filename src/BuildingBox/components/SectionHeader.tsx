import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  icon: LucideIcon;
  rightElement?: React.ReactNode;
}

export default function SectionHeader({
  overline,
  title,
  icon: Icon,
  rightElement,
}: SectionHeaderProps) {
  return (
    <div className="px-4 py-3 flex items-center justify-between shrink-0 relative bg-[#0b1b42] rounded-t-[4px] min-h-[64px] shadow-sm border-b border-white/5">
      <div className="flex items-center gap-3.5 min-w-0 w-full">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-10 h-10 rounded-[4px] bg-white/5 border border-[#d4af37]/60 shadow-[0_0_12px_rgba(212,175,55,0.3)] backdrop-blur-md flex items-center justify-center text-[#d4af37] shrink-0"
        >
          <Icon size={20} strokeWidth={2} />
        </motion.div>

        <div className="flex flex-col min-w-0 gap-1.5 justify-center">
          {overline && (
            <div className="flex w-fit items-center">
              <span className="flex items-center gap-1 rounded-[2px] border border-[#d4af37]/25 bg-gradient-to-r from-[#d4af37]/5 to-[#d4af37]/15 px-2 py-[2px] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]/90 shadow-[0_0_8px_rgba(212,175,55,0.1)] backdrop-blur-sm">
                {overline}
              </span>
            </div>
          )}
          <h3 className="text-[16px] font-semibold text-white/95 leading-none tracking-wide truncate">
            {title}
          </h3>
        </div>
      </div>

      {rightElement && (
        <div className="relative z-10 shrink-0 ml-4">{rightElement}</div>
      )}
    </div>
  );
}