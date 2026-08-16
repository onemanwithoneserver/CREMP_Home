import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  RotateCw,
  Sparkles,
  Quote,
  Store,
  IndianRupee,
  Percent,
  ChevronRight,
  Award,
  Layers,
  LayoutGrid,
  ExternalLink,
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
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md shrink-0 ${bgClass}`}>
      <Icon size={18} strokeWidth={2.5} />
    </div>
  );
};


function FlipLeaderCard({
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
      className="h-[480px] w-full [perspective:1500px] cursor-pointer group"
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
        className="relative w-full h-full [transform-style:preserve-3d] transition-shadow duration-500 rounded-[8px] shadow-lg hover:shadow-xl"
      >
        <div className="absolute inset-0 w-full h-full rounded-[8px] overflow-hidden bg-[#0b1b42] [backface-visibility:hidden] border border-white/10 group-hover:border-[#d4af37]/60 transition-colors duration-300">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale-[5%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity duration-500" />

          <div className="absolute top-4 right-4 z-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg"
            >
              <span>View Bio</span>
              <RotateCw size={12} className="text-[#d4af37]" />
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-10 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-[4px] bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[10px] font-black uppercase tracking-wider shadow-sm">
                {member.experience}
              </span>
            </div>
            <h4 className="text-white font-black text-2xl tracking-tight mb-1 group-hover:text-[#d4af37] transition-colors duration-300">
              {member.name}
            </h4>
            <p className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-3">
              {member.role}
            </p>
            <div className="w-8 h-[2px] bg-[#d4af37] rounded-full group-hover:w-16 transition-all duration-500" />
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full rounded-[8px] overflow-hidden px-6 py-6 bg-[#0b1b42] backdrop-blur-2xl border border-[#d4af37]/40 shadow-2xl flex flex-col justify-between text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start justify-between gap-3 relative z-10 pb-3 border-b border-white/10">
            <div className="flex flex-col">
              <h5 className="font-black text-lg text-white tracking-tight leading-tight">
                {member.name}
              </h5>
              <span className="text-[#d4af37] text-[12px] font-black tracking-wider uppercase mt-0.5">
                {member.role}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className="p-2 rounded-[4px] bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors border border-white/10"
              title="Flip back"
            >
              <RotateCw size={13} className="text-[#d4af37]" />
            </button>
          </div>

          <div className="relative z-10 flex-1 flex flex-col justify-center py-2">
            <p className="text-[13px] text-gray-200 leading-relaxed font-medium">
              {member.bio}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {member.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Sparkles
                    size={13}
                    className="text-[#d4af37] shrink-0 mt-[2px]"
                  />
                  <span className="text-[12px] font-semibold text-gray-100 leading-tight">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-3 border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-start gap-2 bg-white/5 p-3 rounded-[6px] border border-white/10">
              <Quote
                size={14}
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

export default function LeadershipDesktop() {
  const { brandStory, members } = brandLeadershipData;
  const isSingleLeader = members.length === 1;

  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"spotlight" | "grid">("spotlight");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const activeLeader = members[selectedLeaderIndex] || members[0];

  return (
    <section className="w-full px-6 py-16 relative overflow-hidden rounded-[8px] bg-slate-50/60 dark:bg-[#050b14] text-gray-900 dark:text-white transition-colors duration-300">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-amber-400/10 dark:bg-[#D4AF37]/10 blur-[140px]"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="mb-10 text-center flex flex-col items-center">
          <SectionHeader
            overline={brandLeadershipData.sectionLabel}
            title={brandLeadershipData.title}
            subtitle={brandLeadershipData.subtitle}
            align="center"
          />

          {!isSingleLeader && (
            <div className="mt-6 flex items-center bg-[#0b1b42] border border-white/10 p-1 rounded-full shadow-lg">
              <button
                onClick={() => setViewMode("spotlight")}
                className={clsx(
                  "flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300",
                  viewMode === "spotlight"
                    ? "bg-[#d4af37] text-[#0b1b42] shadow-md shadow-[#d4af37]/20"
                    : "text-gray-300 hover:text-white"
                )}
              >
                <Layers size={14} />
                <span>Executive Spotlight & Vision</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={clsx(
                  "flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300",
                  viewMode === "grid"
                    ? "bg-[#d4af37] text-[#0b1b42] shadow-md shadow-[#d4af37]/20"
                    : "text-gray-300 hover:text-white"
                )}
              >
                <LayoutGrid size={14} />
                <span>Leadership Team ({members.length})</span>
              </button>
            </div>
          )}
        </div>

        {isSingleLeader ? (
          <div className="w-full bg-[#0b1b42] border border-white/10 rounded-[12px] p-5 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full lg:w-1/3 relative rounded-[8px] overflow-hidden border border-white/10 shadow-lg shrink-0">
              <img
                src={activeLeader.avatar}
                alt={activeLeader.name}
                className="w-full h-full object-cover min-h-[300px] lg:absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040914]/90 via-[#040914]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10 flex flex-col">
                <span className="px-2.5 py-1 w-max rounded-[4px] bg-[#d4af37] text-[#0b1b42] text-[11px] font-black uppercase tracking-wider shadow-md mb-1.5">
                  {activeLeader.experience} Experience
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                  {activeLeader.name}
                </h3>
                <p className="text-[#d4af37] font-bold text-xs uppercase tracking-widest mt-0.5">
                  {activeLeader.role}
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                <Quote size={70} className="text-[#d4af37]" />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-[4px] bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-black uppercase tracking-widest">
                    {brandStory.title}
                  </span>
                </div>

                <div className="bg-white/5 border-l-4 border-[#d4af37] p-4 rounded-r-[8px] mb-4 relative">
                  <p className="text-gray-200 text-base lg:text-lg leading-relaxed italic font-medium relative z-10">
                    "{brandStory.quote}"
                  </p>
                </div>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10"
              >
                {brandStory.stats.map((stat) => (
                  <motion.div 
                    key={stat.label} 
                    className="flex flex-col group/stat cursor-default"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                    }}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center gap-2.5 mb-1 transition-transform duration-300 group-hover/stat:scale-105 origin-left">
                      {getStatIcon(stat.label)}
                      <span
                        className={clsx(
                          "text-2xl lg:text-3xl font-black tracking-tight",
                          getTextStyles(stat.intent)
                        )}
                      >
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        ) : viewMode === "spotlight" ? (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-white">
            <div className="lg:col-span-5 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLeader.id}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-[#0b1b42] border border-white/10 rounded-[8px] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-2xl h-full group"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <div className="relative w-full h-[280px] rounded-[6px] overflow-hidden mb-5 border border-white/10 shadow-md">
                      <img
                        src={activeLeader.avatar}
                        alt={activeLeader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/20 to-transparent opacity-85" />
                      <div className="absolute bottom-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-[4px] bg-[#d4af37] text-[#0b1b42] text-[11px] font-black uppercase tracking-wider shadow-md">
                          {activeLeader.experience} Experience
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-2xl font-black text-white tracking-tight">
                        {activeLeader.name}
                      </h3>
                      {activeLeader.socials?.linkedin && (
                        <a
                          href={activeLeader.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-300 hover:text-[#d4af37] transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    <p className="text-[#d4af37] font-bold text-xs uppercase tracking-widest mb-3">
                      {activeLeader.role}
                    </p>

                    <p className="text-gray-200 text-[13px] leading-relaxed mb-4 font-medium">
                      {activeLeader.bio}
                    </p>

                    <div className="flex flex-col gap-2 mb-4">
                      {activeLeader.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <Sparkles size={13} className="text-[#d4af37] shrink-0" />
                          <span className="text-[12px] font-semibold text-gray-100">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 bg-white/5 p-3.5 rounded-[6px] flex items-start gap-2.5">
                    <Quote
                      size={14}
                      className="text-[#d4af37] shrink-0 mt-0.5 rotate-180 opacity-80"
                    />
                    <p className="text-xs italic text-amber-100/90 leading-relaxed font-semibold">
                      "{activeLeader.quote}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 justify-between text-white">
              <div className="bg-[#0b1b42] border border-white/10 rounded-[8px] p-6 sm:p-7 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                  <Quote size={100} className="text-[#d4af37]" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-[4px] bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[10px] font-black uppercase tracking-wider">
                    Brand Story & Heritage
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                  {brandStory.title}
                </h4>

                <p className="text-gray-200 text-sm leading-relaxed mb-4 font-medium">
                  "{brandStory.quote}"
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10">
                  {brandStory.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 rounded-[6px] p-3 border border-white/5 flex flex-col"
                    >
                      <div className="flex items-center gap-1.5 mb-1 text-gray-300">
                        {getStatIcon(stat.label)}
                        <span className="text-[10px] font-bold uppercase tracking-wider line-clamp-1">
                          {stat.label.split(" ")[0]}
                        </span>
                      </div>
                      <p
                        className={clsx(
                          "text-xl font-black tracking-tight",
                          getTextStyles(stat.intent)
                        )}
                      >
                        {stat.value}
                      </p>
                      <p className="text-gray-300 text-[9px] font-bold uppercase tracking-wider truncate">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0b1b42] border border-white/10 rounded-[8px] p-6 shadow-2xl flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-200">
                    Executive Leadership Team
                  </span>
                  <span className="text-[11px] font-semibold text-[#d4af37]">
                    Click to view profile & vision
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {members.map((member, index) => {
                    const isSelected = selectedLeaderIndex === index;
                    return (
                      <button
                        key={member.id}
                        onClick={() => setSelectedLeaderIndex(index)}
                        className={clsx(
                          "flex items-center gap-3 p-3 rounded-[6px] border transition-all duration-300 text-left relative group",
                          isSelected
                            ? "bg-white/15 border-[#d4af37] shadow-md shadow-[#d4af37]/10"
                            : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10"
                        )}
                      >
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className={clsx(
                            "w-12 h-12 rounded-full object-cover border-2 shrink-0 transition-transform duration-300",
                            isSelected
                              ? "border-[#d4af37] scale-105"
                              : "border-white/20 group-hover:border-white/50"
                          )}
                        />

                        <div className="flex-1 min-w-0">
                          <p
                            className={clsx(
                              "text-sm font-black truncate transition-colors",
                              isSelected
                                ? "text-[#d4af37]"
                                : "text-white group-hover:text-[#d4af37]"
                            )}
                          >
                            {member.name}
                          </p>
                          <p className="text-gray-300 text-[11px] font-semibold truncate">
                            {member.role}
                          </p>
                          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                            {member.experience}
                          </span>
                        </div>

                        <ChevronRight
                          size={16}
                          className={clsx(
                            "shrink-0 transition-transform",
                            isSelected
                              ? "text-[#d4af37] translate-x-0.5"
                              : "text-gray-500 group-hover:text-gray-300"
                          )}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {members.map((member, index) => (
                <FlipLeaderCard
                  key={member.name}
                  member={member}
                  isFlipped={flippedIndex === index}
                  onToggle={() =>
                    setFlippedIndex(flippedIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
