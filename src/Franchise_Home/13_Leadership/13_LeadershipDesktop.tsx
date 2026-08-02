import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { RotateCw, Sparkles, Quote } from "lucide-react";
import { leadershipData, type LeadershipMember } from "./data";
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
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

function LeaderCard({
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
      className="h-[500px] w-full [perspective:1500px] cursor-pointer group"
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
        className="relative w-full h-full [transform-style:preserve-3d] transition-shadow duration-500 rounded-[4px] shadow-xl"
      >
        <div className="absolute inset-0 w-full h-full rounded-[4px] overflow-hidden shadow-sm group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:group-hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] transition-all duration-500 bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl [backface-visibility:hidden] border border-gray-200/60 dark:border-[#d4af37]/20">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            draggable={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/95 via-[#0a1128]/45 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />

          <div className="absolute top-4 right-4 z-20">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg">
              <span>View Profile</span>
              <RotateCw size={12} className="text-[#d4af37]" />
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-[2px] bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider">
                {member.experience}
              </span>
            </div>
            <h4 className="text-white font-bold text-2xl tracking-tight mb-1 group-hover:text-[#d4af37] transition-colors duration-300">
              {member.name}
            </h4>
            <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-3">
              {member.role}
            </p>

            <div className="w-8 h-[2px] bg-[#d4af37] rounded-full group-hover:w-16 transition-all duration-500" />
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full rounded-[4px] overflow-hidden px-5 py-6 bg-[#0b1b42]/95 backdrop-blur-2xl border border-[#d4af37]/40 shadow-2xl flex flex-col justify-between text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start justify-between gap-3 relative z-10 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <h5 className="font-bold text-lg text-white tracking-tight leading-tight">
                  {member.name}
                </h5>
                <span className="text-[#d4af37] text-[13px] font-bold tracking-wider uppercase mt-1">
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
            <p className="text-[14px] text-gray-200 leading-relaxed font-normal">
              {member.bio}
            </p>

            <div className="mt-4 flex flex-col gap-2">
              {member.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Sparkles size={14} className="text-[#d4af37] shrink-0 mt-[3px]" />
                  <span className="text-[13px] font-medium text-gray-100 leading-tight">
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
              <p className="text-[13px] italic text-amber-100/90 leading-relaxed font-medium">
                "{member.quote}"
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function LeadershipDesktop() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 py-16 relative overflow-hidden rounded-[8px] ">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/10"
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="mb-2">
          <SectionHeader
            overline={leadershipData.sectionLabel}
            title={leadershipData.title}
            subtitle={leadershipData.subtitle}
            align="center"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {leadershipData.members.map((member, index) => (
            <motion.div key={member.name} variants={itemVariants}>
              <LeaderCard
                member={member}
                isFlipped={flippedIndex === index}
                onToggle={() =>
                  setFlippedIndex(flippedIndex === index ? null : index)
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}