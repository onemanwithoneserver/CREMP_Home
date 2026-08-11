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
    <div className="px-4 py-3 flex items-center justify-between shrink-0 relative bg-[#0b1b42] rounded-t-[4px] min-h-[56px]">
      <div className="flex flex-col gap-1.5 min-w-0">
        {overline && (
          <div className="flex items-center">
            <span className="flex w-fit items-center gap-1 rounded-[2px] border border-[#d4af37]/30 bg-[#d4af37]/10 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.15em] text-[#d4af37]">
              {overline}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2.5">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-10 h-10 rounded-[4px] bg-white/5 border border-[#d4af37]/60 shadow-[0_0_12px_rgba(212,175,55,0.3)] backdrop-blur-md flex items-center justify-center text-[#d4af37] shrink-0"
          >
            <Icon size={20} strokeWidth={2} />
          </motion.div>
          <h3 className="text-base font-bold text-white leading-tight tracking-tight truncate">
            {title}
          </h3>
        </div>
      </div>

      {rightElement && (
        <div className="relative z-10 shrink-0 ml-3">{rightElement}</div>
      )}
    </div>
  );
}
