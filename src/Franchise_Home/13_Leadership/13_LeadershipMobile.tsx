import { useState } from "react";
import { motion } from "framer-motion";
import {
  RotateCw,
  Sparkles,
  Quote,
  Briefcase,
} from "lucide-react";
import { leadershipData, type LeadershipMember } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

function LeaderCardMobile({ member }: { member: LeadershipMember }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[380px] w-full [perspective:1200px] cursor-pointer"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 220,
          damping: 22,
        }}
        className="relative w-full h-full [transform-style:preserve-3d] rounded-2xl"
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 [backface-visibility:hidden]">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale-[15%]"
            draggable={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/95 via-[#0a1128]/45 to-transparent opacity-90" />

          {/* Top Flip Hint Badge */}
          <div className="absolute top-3.5 right-3.5 z-20">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/90 text-[10px] font-medium shadow-md">
              <span>Tap for Bio</span>
              <RotateCw size={11} className="text-[#d4af37]" />
            </div>
          </div>

          {/* Bottom Card Info */}
          <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end z-10">
            <span className="inline-block px-2 py-0.5 rounded-md bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[9.5px] font-semibold uppercase tracking-wider mb-1 w-max">
              {member.experience}
            </span>
            <h4 className="text-white font-semibold text-xl tracking-tight mb-0.5 text-[#d4af37]">
              {member.name}
            </h4>
            <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-2.5">
              {member.role}
            </p>

            <div className="w-8 h-[2px] bg-[#d4af37] rounded-full" />
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden p-5 bg-[#0a1128] border border-[#d4af37]/40 shadow-xl flex flex-col justify-between text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {/* Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#d4af37]/15 rounded-full blur-xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex items-center justify-between gap-2 relative z-10 pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-9 h-9 rounded-lg object-cover border border-[#d4af37]/50"
              />
              <div className="flex flex-col">
                <h5 className="font-semibold text-sm text-white leading-tight">
                  {member.name}
                </h5>
                <span className="text-[#d4af37] text-[10px] font-semibold tracking-wider uppercase">
                  {member.role}
                </span>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="p-1 rounded-md bg-white/10 text-gray-300 transition-colors"
            >
              <RotateCw size={12} className="text-[#d4af37]" />
            </button>
          </div>

          {/* Bio Description */}
          <div className="relative z-10 my-auto py-1">
            <p className="text-xs text-gray-300 leading-relaxed font-normal">
              {member.bio}
            </p>

            {/* Highlights */}
            <div className="mt-2.5 flex flex-wrap gap-1">
              {member.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9.5px] font-medium text-gray-200"
                >
                  <Sparkles size={9} className="text-[#d4af37]" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Quote / Footer */}
          <div className="relative z-10 pt-2 border-t border-white/10 flex flex-col gap-1.5">
            <div className="flex items-start gap-1.5 bg-[#d4af37]/10 p-2 rounded-lg border border-[#d4af37]/20">
              <Quote
                size={12}
                className="text-[#d4af37] shrink-0 mt-0.5 rotate-180"
              />
              <p className="text-[10px] italic text-amber-200/90 leading-tight">
                "{member.quote}"
              </p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-gray-400 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <Briefcase size={10} className="text-[#d4af37]" />
                Leadership
              </span>
              <span>Tap to flip back</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function LeadershipMobile() {
  return (
    <section className="w-full px-4 py-16 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[300px] h-[300px] bg-[#d4af37]/10 rounded-full blur-[80px] animate-pulse-soft" />
        <div
          className="absolute -bottom-[10%] -left-[5%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8">
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
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-col gap-6 w-full"
        >
          {leadershipData.members.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <LeaderCardMobile member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
