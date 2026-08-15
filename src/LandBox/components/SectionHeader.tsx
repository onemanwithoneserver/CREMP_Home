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
      <div className="flex flex-col gap-2.5">
        <motion.div variants={fadeInUp} className="flex items-center gap-2">
          <span className="flex w-fit items-center gap-1.5 rounded-[2px] border border-[#d4af37]/20 bg-[#d4af37]/5 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-[#d4af37] shadow-sm">
            <Icon size={12} strokeWidth={2} />
            {overline}
          </span>
        </motion.div>
        
        <motion.h2 
          variants={fadeInUp} 
          className="text-[1.5rem] sm:text-[1.75rem] font-semibold text-[#0a1128] tracking-tight leading-none"
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