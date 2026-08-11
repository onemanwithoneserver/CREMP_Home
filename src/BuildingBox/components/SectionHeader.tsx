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
    <div className="bg-[#0b1b42] p-4 sm:p-5 flex items-center justify-between shrink-0 relative overflow-hidden rounded-t-[4px] border-b border-[#d4af37]/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] min-h-[82px]">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

      <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center gap-3 relative z-10">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-10 h-10 rounded-[4px] bg-white/5 border border-[#d4af37]/60 shadow-[0_0_12px_rgba(212,175,55,0.3)] backdrop-blur-md flex items-center justify-center text-[#d4af37] shrink-0"
        >
          <Icon size={20} strokeWidth={2} />
        </motion.div>
        <div className="flex flex-col justify-center min-w-0">
          {overline && (
            <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block leading-none mb-1">
              {overline}
            </span>
          )}
          <h3 className="text-lg font-bold text-white leading-tight truncate">
            {title}
          </h3>
        </div>
      </div>

      {rightElement && (
        <div className="relative z-10 shrink-0">{rightElement}</div>
      )}
    </div>
  );
}
