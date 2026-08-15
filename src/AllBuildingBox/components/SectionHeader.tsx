import type { LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

interface SectionHeaderProps {
  overline: string;
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex w-full items-end justify-between px-5 sm:px-6 py-6 pb-4"
    >
      <div className="flex flex-col gap-3">
        <motion.div variants={fadeInUp} className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-6 h-6 rounded-[2px] bg-gradient-to-br from-[#d4af37] via-[#bf953f] to-[#aa771c] shadow-[0_2px_12px_rgba(212,175,55,0.4)] text-white ring-1 ring-[#d4af37]/20 ring-offset-1">
              <Icon size={13} strokeWidth={2.5} />
            </div>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] pt-0.5">
              {overline}
            </span>
          </div>
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-[#d4af37]/40 to-transparent"></div>
        </motion.div>
        
        <motion.h2 
          variants={fadeInUp} 
          className="text-[1.5rem] sm:text-[1.75rem] font-semibold text-[#0a1128] tracking-tight leading-[1.1]"
        >
          {title}
        </motion.h2>
      </div>

      {rightElement && (
        <motion.div 
          variants={fadeInUp} 
          className="relative z-10 flex shrink-0 items-center justify-end pb-1"
        >
          {rightElement}
        </motion.div>
      )}
    </motion.div>
  );
}
