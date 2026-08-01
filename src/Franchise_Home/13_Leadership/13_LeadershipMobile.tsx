import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCw, Sparkles, Quote } from "lucide-react";
import { leadershipData, type LeadershipMember } from "./data";
import { SectionHeader } from "../components/SectionHeader";

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
      className="h-[420px] w-full [perspective:1500px] cursor-pointer group rounded-[8px]"
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
        className="relative w-full h-full [transform-style:preserve-3d] shadow-xl"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-white dark:bg-gray-800 rounded-[8px] [backface-visibility:hidden]">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale-[15%] transition-transform duration-700 group-hover:scale-105"
            draggable={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/40 to-transparent opacity-95" />
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-[10px] font-medium shadow-md transition-colors hover:bg-black/60">
              <span>View Bio</span>
              <RotateCw size={12} className="text-[#d4af37]" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full px-4 pb-6 pt-4 flex flex-col justify-end z-10">
            <span className="inline-block px-2 py-1 rounded text-[#d4af37] text-[9px] font-bold uppercase tracking-wider mb-2 w-max border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm">
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
        <div className="absolute inset-0 rounded-[8px] w-full h-full overflow-hidden px-4 py-6 bg-[#0a1128] border-y border-[#d4af37]/40 flex flex-col justify-between text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#d4af37]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-start justify-between gap-2 relative z-10 pb-4 border-b border-white/10">
            <div className="flex flex-col">
              <h5 className="font-bold text-lg text-white leading-tight">
                {member.name}
              </h5>
              <span className="text-[#d4af37] text-[10px] font-bold tracking-widest uppercase mt-1">
                {member.role}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className="p-1.5 rounded-full bg-white/10 text-gray-300 transition-colors shrink-0 hover:bg-white/20 hover:text-white"
            >
              <RotateCw size={14} className="text-[#d4af37]" />
            </button>
          </div>

          <div className="relative z-10 flex-1 flex flex-col justify-evenly py-2 overflow-hidden w-full">
            <p className="text-sm text-gray-200 leading-relaxed font-medium line-clamp-4">
              {member.bio}
            </p>

            <div className="flex flex-col gap-2 mt-2">
              {member.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Sparkles
                    size={12}
                    className="text-[#d4af37] shrink-0 mt-[2px]"
                  />
                  <span className="text-xs font-medium text-gray-100 leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10 w-full">
            <div className="flex items-start gap-2 bg-gradient-to-br from-[#d4af37]/10 to-transparent p-3 rounded-xl border border-[#d4af37]/20">
              <Quote
                size={14}
                className="text-[#d4af37] shrink-0 mt-0.5 rotate-180 opacity-80"
              />
              <p className="text-xs italic text-amber-100/90 leading-tight font-medium">
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
      const cardWidth = container.scrollWidth / leadershipData.members.length;
      container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-4 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#d4af37]/10 rounded-full blur-[80px] animate-pulse" />
        <div
          className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-2 px-4 w-full"
        >
          <SectionHeader
            overline={leadershipData.sectionLabel}
            title={leadershipData.title}
            subtitle={leadershipData.subtitle}
            align="center"
          />
        </motion.div>

        <div className="w-full flex flex-col gap-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            ref={scrollContainerRef}
            className="flex w-full overflow-x-auto snap-x snap-mandatory px-4 py-2 gap-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
          >
            {leadershipData.members.map((member, index) => (
              <motion.div
                variants={itemVariants}
                key={member.name}
                className="w-full shrink-0 snap-center" 
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

          <div className="flex justify-center items-center gap-2.5 mt-2">
            {leadershipData.members.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-500 rounded-full ${
                  activeIndex === idx
                    ? "w-8 h-2 bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                    : "w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
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