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
      className="h-[430px] w-full [perspective:1200px] cursor-pointer group"
      onClick={onToggle}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.65,
          type: "spring",
          stiffness: 220,
          damping: 22,
        }}
        className="relative w-full h-full [transform-style:preserve-3d] transition-shadow duration-500 rounded-2xl"
      >
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.18)] transition-all duration-500 bg-white dark:bg-gray-800 [backface-visibility:hidden]">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            draggable={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/95 via-[#0a1128]/45 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />

          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg">
              <span>View Profile</span>
              <RotateCw size={12} className="text-[#d4af37]" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-md bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[10px] font-semibold uppercase tracking-wider">
                {member.experience}
              </span>
            </div>
            <h4 className="text-white font-semibold text-2xl tracking-tight mb-1 group-hover:text-[#d4af37] transition-colors duration-300">
              {member.name}
            </h4>
            <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-3">
              {member.role}
            </p>

            <div className="w-8 h-[2px] bg-[#d4af37] rounded-full group-hover:w-16 transition-all duration-500" />
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden px-4 py-5 bg-[#0a1128] border border-[#d4af37]/40 shadow-[0_20px_50px_rgba(212,175,55,0.2)] flex flex-col justify-between text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#d4af37]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-primary/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start justify-between gap-3 relative z-10 pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <h5 className="font-semibold text-base text-white tracking-tight leading-tight">
                  {member.name}
                </h5>
                <span className="text-[#d4af37] text-[13px] font-bold tracking-wider uppercase mt-1">
                  {member.role}
                </span>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors border border-white/10"
              title="Flip back"
            >
              <RotateCw size={13} className="text-[#d4af37]" />
            </button>
          </div>

          <div className="relative z-10 my-auto py-2">
            <p className="text-[15px] text-gray-200 leading-relaxed font-medium">
              {member.bio}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {member.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-medium text-gray-100"
                >
                  <Sparkles size={12} className="text-[#d4af37]" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-start gap-2.5 bg-[#d4af37]/10 p-3 rounded-xl border border-[#d4af37]/20">
              <Quote
                size={16}
                className="text-[#d4af37] shrink-0 mt-0.5 rotate-180"
              />
              <p className="text-[14px] italic text-amber-200/90 leading-relaxed font-semibold">
                {member.quote}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-gray-400 uppercase tracking-wider pt-1">
              <span className="flex items-center gap-1.5">
                <Briefcase size={12} className="text-[#d4af37]" />
                Leadership Focus
              </span>
              <span className="text-gray-400">Click to flip back</span>
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
    <section className="w-full px-6 py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px] animate-pulse-soft" />
        <div
          className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="mb-12">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full"
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