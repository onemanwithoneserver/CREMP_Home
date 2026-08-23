import {
  motion,
  useScroll,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { Play, Heart, Share2, MapPin } from "lucide-react";
import { heroData } from "./data";
import { useRef, useState } from "react";
import { fadeInUp, staggerContainer } from "../components/animations";
const actionIcons = [
  {
    Icon: Heart,
    label: "Save",
    hoverBg: "hover:bg-rose-500/90 hover:border-rose-500",
  },
  {
    Icon: Share2,
    label: "Share",
    hoverBg: "hover:bg-emerald-500/90 hover:border-emerald-500",
  },
];
export default function Desktop() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const x = useRef(0);
  useAnimationFrame((_, delta) => {
    if (paused || !marqueeRef.current) return;
    const speed = 30;
    x.current -= (speed * delta) / 1000;
    const loopWidth = marqueeRef.current.scrollWidth / 2;
    if (-x.current >= loopWidth) {
      x.current = 0;
    }
    marqueeRef.current.style.transform = `translate3d(${x.current}px,0,0)`;
  });
  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-[100dvh] flex flex-col justify-end bg-[#0a1128] text-white overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
          alt="Premium Land Plot"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/40 via-transparent to-transparent z-[1]" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/80 to-transparent z-[1]"
        style={{ top: "35%" }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white z-[2]" />
      <div className="absolute top-6 right-6 flex flex-col gap-3 z-20">
        {actionIcons.map(({ Icon, hoverBg }, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5 + i * 0.08,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-11 h-11 rounded-[4px] bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-300 ${hoverBg} shadow-sm hover:shadow-lg`}
          >
            <Icon size={17} strokeWidth={2.5} />
          </motion.button>
        ))}
      </div>
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 280, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 w-[4.5rem] h-[4.5rem] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl transition-all duration-300 group hover:bg-white/20 hover:border-white/40"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-white opacity-[0.05]" />
        <Play
          size={26}
          className="ml-1.5 transition-transform group-hover:scale-110"
          fill="currentColor"
        />
      </motion.button>
      <div className="relative z-10 w-full px-6 pb-12 pt-20 flex flex-col gap-5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full gap-4"
        >
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2.5">
            {heroData.badges.map((badge, idx) => (
              <span
                key={idx}
                className={`px-3.5 py-1.5 text-[0.65rem] font-semibold rounded-[2px] border backdrop-blur-md tracking-[0.12em] ${
                  idx === 0
                    ? "bg-[#d4af37]/20 text-[#f9df9f] border-[#d4af37]/40 shadow-sm"
                    : "bg-white/10 text-white border-white/20"
                }`}
              >
                {badge}
              </span>
            ))}
          </motion.div>
          <div className="flex flex-col gap-2.5 max-w-3xl">
            <motion.h1
              variants={fadeInUp}
              className="text-[2rem] font-semibold leading-[1.1] tracking-tight text-white drop-shadow-md"
            >
              {heroData.title}
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2.5"
            >
              <div className="w-6 h-6 rounded-[2px] bg-[#d4af37]/20 flex items-center justify-center border border-[#d4af37]/30">
                <MapPin size={13} className="text-[#d4af37]" />
              </div>
              <span className="text-[0.9rem] font-medium text-white/90 tracking-tight">
                {heroData.location}
              </span>
            </motion.div>
          </div>
          <motion.div
            variants={fadeInUp}
            className="relative z-10 overflow-hidden w-[calc(100%+3rem)] -mx-6 px-6 py-5 group"
          >
            <motion.div
              ref={marqueeRef}
              className="flex w-max"
              onPointerEnter={() => setPaused(true)}
              onPointerLeave={() => setPaused(false)}
              onPointerDown={() => setPaused(true)}
              onPointerUp={() => setPaused(false)}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex gap-3 pr-3 shrink-0">
                  {heroData.stats.map((stat, idx) => (
                    <motion.div
                      key={`${copy}-${idx}`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="flex flex-col gap-2.5 p-4 rounded-[4px] bg-white/5 border border-white/10 backdrop-blur-lg shrink-0 min-w-[140px] transition-all duration-300 hover:bg-white/10 hover:border-[#d4af37]/40 shadow-lg hover:shadow-xl hover:z-10"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-[2px] flex items-center justify-center bg-white/5 border border-white/10">
                          <stat.icon
                            size={14}
                            strokeWidth={2.5}
                            className="text-white/90"
                          />
                        </div>
                        <span className="text-[0.65rem] font-semibold text-white/70 tracking-[0.15em] uppercase">
                          {stat.label}
                        </span>
                      </div>
                      <span className="text-[1.25rem] font-semibold text-white tracking-tight mt-1">
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0a1128] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0a1128] to-transparent z-10" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
