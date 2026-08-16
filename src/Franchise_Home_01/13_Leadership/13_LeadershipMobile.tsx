import { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { RotateCw, Sparkles, Quote } from "lucide-react";
import { brandLeadershipData, type LeadershipMember } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

function LeaderCardMobile({
  member,
  isFlipped,
  onToggle,
}: {
  member: LeadershipMember;
  isFlipped: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="h-[500px] w-full [perspective:1500px] cursor-pointer group rounded-[4px]"
      onClick={onToggle}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
        className="relative w-full h-full [transform-style:preserve-3d] shadow-lg"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0b1b42] rounded-[8px] border border-white/10 [backface-visibility:hidden] shadow-sm">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale-[5%] transition-transform duration-700 group-hover:scale-105"
            draggable={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent opacity-95" />
          <div className="absolute top-4 right-4 z-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold shadow-md"
            >
              <span>View Bio</span>
              <RotateCw size={12} className="text-[#d4af37]" />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full pb-6 pt-4 px-5 flex flex-col justify-end z-10 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-[4px] text-white dark:text-[#d4af37] text-[9px] font-black uppercase tracking-wider mb-2 w-max border border-[#d4af37]/40 bg-[#d4af37]/20 backdrop-blur-sm">
              {member.experience}
            </span>
            <h4 className="text-white font-bold text-xl tracking-tight leading-tight mb-1">
              {member.name}
            </h4>
            <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-3">
              {member.role}
            </p>

            <div className="w-10 h-[3px] bg-[#d4af37] rounded-full" />
          </div>
        </div>

        <div className="absolute inset-0 rounded-[8px] w-full h-full overflow-hidden px-5 py-6 bg-[#0b1b42] backdrop-blur-2xl border border-[#d4af37]/40 shadow-xl flex flex-col justify-between text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex items-start justify-between gap-3 relative z-10 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <h5 className="font-black text-lg text-white tracking-tight leading-tight">
                  {member.name}
                </h5>
                <span className="text-[#d4af37] text-[13px] font-black tracking-wider uppercase mt-1">
                  {member.role}
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, -20, 20, 0] }}
              transition={{ duration: 0.4 }}
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className="p-2 rounded-[4px] bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors border border-white/10"
              title="Flip back"
            >
              <RotateCw size={14} className="text-[#d4af37]" />
            </motion.button>
          </div>

          <div className="relative z-10 flex-1 flex flex-col justify-center py-2">
            <p className="text-[13px] text-gray-200 leading-relaxed font-medium">
              {member.bio}
            </p>

            <div className="mt-4 flex flex-col gap-2">
              {member.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Sparkles
                    size={14}
                    className="text-[#d4af37] shrink-0 mt-[3px]"
                  />
                  <span className="text-[12px] font-semibold text-gray-100 leading-tight">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-3 border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-[6px] border border-white/10">
              <Quote
                size={16}
                className="text-[#d4af37] shrink-0 mt-0.5 rotate-180 opacity-80"
              />
              <p className="text-[12px] italic text-amber-100/90 leading-relaxed font-semibold">
                "{member.quote}"
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function LeadershipMobile() {
  const { members } = brandLeadershipData;
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / members.length;
      container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-8 relative overflow-hidden rounded-[8px] bg-slate-50/50 dark:bg-transparent">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-amber-400/10 dark:bg-[#D4AF37]/10 blur-[100px]"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-3 px-4 w-full"
        >
          <SectionHeader
            overline={brandLeadershipData.sectionLabel}
            title={brandLeadershipData.title}
            subtitle={brandLeadershipData.subtitle}
            align="center"
          />
        </motion.div>

        <div className="w-full flex flex-col gap-3">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-50px" }}
            ref={scrollContainerRef}
            className="flex w-full overflow-x-auto snap-x snap-mandatory px-4 py-2 gap-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
          >
            {members.map((member, index) => (
              <motion.div
                variants={itemVariants}
                key={member.name}
                className="w-[85vw] max-w-[340px] shrink-0 snap-center"
              >
                <LeaderCardMobile
                  member={member}
                  isFlipped={flippedIndex === index}
                  onToggle={() =>
                    setFlippedIndex(flippedIndex === index ? null : index)
                  }
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center items-center gap-2 mt-2">
            {members.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-500 rounded-[2px] ${
                  activeIndex === idx
                    ? "w-8 h-1.5 bg-[#d4af37] shadow-sm"
                    : "w-2 h-1.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
