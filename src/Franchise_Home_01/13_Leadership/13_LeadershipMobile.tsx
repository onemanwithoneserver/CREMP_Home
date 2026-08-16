import { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import {
  RotateCw,
  Sparkles,
  Quote,
  Store,
  IndianRupee,
  Percent,
  Award,
  TrendingUp,
} from "lucide-react";
import clsx from "clsx";
import { brandLeadershipData, type LeadershipMember } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { getTextStyles } from "../utils/theme";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const getStatIcon = (label: string) => {
  const lower = (label || "").toLowerCase();
  
  let Icon = Award;
  let bgClass = "bg-purple-600";
  
  if (lower.includes("outlet") || lower.includes("store")) {
    Icon = Store;
    bgClass = "bg-[#d97706]";
  } else if (lower.includes("year") || lower.includes("experience")) {
    Icon = TrendingUp;
    bgClass = "bg-[#3b82f6]";
  } else if (lower.includes("revenue") || lower.includes("sales") || lower.includes("₹")) {
    Icon = IndianRupee;
    bgClass = "bg-[#10b981]";
  } else if (lower.includes("margin") || lower.includes("%") || lower.includes("rate")) {
    Icon = Percent;
    bgClass = "bg-[#0ea5e9]";
  }

  return (
    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md shrink-0 ${bgClass}`}>
      <Icon size={16} strokeWidth={2.5} />
    </div>
  );
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
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0b1b42] rounded-[4px] border border-white/10 [backface-visibility:hidden] shadow-sm">
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold shadow-md"
            >
              <span>View Bio</span>
              <RotateCw size={12} className="text-[#d4af37]" />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full pb-6 pt-4 px-5 flex flex-col justify-end z-10 text-white">
            <span className="inline-block px-2.5 py-1 rounded-[2px] text-[#d4af37] border border-[#d4af37]/80 bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-2.5 w-max shadow-sm">
              {member.experience.toUpperCase().includes("YEAR")
                ? member.experience
                : `${member.experience} YEARS`}
            </span>
            <h4 className="text-white font-bold text-xl tracking-tight leading-tight mb-1">
              {member.name}
            </h4>
            <p className="text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-3">
              {member.role}
            </p>

            <div className="w-10 h-[3px] bg-[#d4af37]" />
          </div>
        </div>

        <div className="absolute inset-0 rounded-[4px] w-full h-full overflow-hidden px-5 py-6 bg-[#0b1b42] backdrop-blur-2xl border border-[#d4af37]/40 shadow-xl flex flex-col justify-between text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
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
              className="p-2 rounded-[2px] bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors border border-white/10"
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
            <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-[4px] border border-white/10">
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
  const { members, brandStory } = brandLeadershipData;
  const isSingleLeader = members.length === 1;
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [isSingleFlipped, setIsSingleFlipped] = useState(false);
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
    <section className="w-full py-12 relative overflow-hidden bg-slate-50/50 dark:bg-transparent">
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
          className="mb-8 px-4 w-full"
        >
          <SectionHeader
            overline={brandLeadershipData.sectionLabel}
            title={brandLeadershipData.title}
            subtitle={brandLeadershipData.subtitle}
            align="center"
          />
        </motion.div>

        {isSingleLeader ? (
          <div className="w-full px-4 text-white">
            <div
              className="h-[520px] w-full [perspective:1500px] cursor-pointer group rounded-[4px]"
              onClick={() => setIsSingleFlipped(!isSingleFlipped)}
            >
              <motion.div
                animate={{ rotateY: isSingleFlipped ? 180 : 0 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                }}
                className="relative w-full h-full [transform-style:preserve-3d] shadow-2xl"
              >

                <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0b1b42] rounded-[4px] border border-white/10 [backface-visibility:hidden] shadow-md">
                  <img
                    src={members[0].avatar}
                    alt={members[0].name}
                    className="w-full h-full object-cover filter grayscale-[5%] transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040914]/95 via-[#040914]/30 to-transparent" />

                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-black/60 backdrop-blur-md border border-[#d4af37]/40 text-white text-[10px] font-bold shadow-md"
                    >
                      <span>View Vision</span>
                      <RotateCw size={12} className="text-[#d4af37]" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full pb-6 pt-4 px-6 flex flex-col justify-end z-10 text-white">
                    <span className="inline-block px-3 py-1 rounded-[2px] text-[#d4af37] border border-[#d4af37]/80 bg-black/50 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider mb-3 w-max shadow-sm">
                      {members[0].experience.toUpperCase().includes("YEAR")
                        ? members[0].experience
                        : `${members[0].experience} YEARS`}
                    </span>
                    <h3 className="text-white font-black text-3xl tracking-tight leading-tight mb-1">
                      {members[0].name}
                    </h3>
                    <p className="text-[#d4af37] font-bold text-xs tracking-widest uppercase mb-3">
                      {members[0].role}
                    </p>

                    <div className="w-10 h-[3px] bg-[#d4af37]" />
                  </div>
                </div>


                <div className="absolute inset-0 rounded-[4px] w-full h-full overflow-hidden px-5 py-5 bg-[#0b1b42] border border-[#d4af37]/40 shadow-xl flex flex-col justify-between text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                    <Quote size={80} className="text-[#d4af37]" />
                  </div>

                  <div className="flex items-center justify-between gap-3 relative z-10 pb-3 border-b border-white/10">
                    <span className="px-2.5 py-1 rounded-[2px] bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-black uppercase tracking-widest">
                      {brandStory.title}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsSingleFlipped(false);
                      }}
                      className="p-1.5 rounded-[2px] bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors border border-white/10"
                      title="Flip back"
                    >
                      <RotateCw size={12} className="text-[#d4af37]" />
                    </button>
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col justify-center py-3">
                    <div className="bg-white/5 border-l-4 border-[#d4af37] p-3.5 rounded-r-[4px]">
                      <p className="text-gray-200 text-xs sm:text-sm leading-relaxed italic font-medium">
                        "{brandStory.quote}"
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                    {brandStory.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col">
                        <div className="flex items-center gap-1.5 mb-1">
                          {getStatIcon(stat.label)}
                          <span
                            className={clsx(
                              "text-sm sm:text-base font-black tracking-tight",
                              getTextStyles(stat.intent)
                            )}
                          >
                            {stat.value}
                          </span>
                        </div>
                        <p className="text-gray-400 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider leading-tight">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-3">
            <motion.div
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
        )}
      </div>
    </section>
  );
}
