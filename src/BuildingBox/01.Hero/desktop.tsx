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
      className="relative w-full h-[100dvh] min-h-[620px] max-h-[860px] overflow-hidden flex flex-col justify-end bg-[#0a1128] text-white"
    >
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
          alt="Retail Space"
          className="w-full h-full object-cover opacity-65"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/50 via-transparent to-transparent z-[1]" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/85 to-transparent z-[1]"
        style={{ top: "45%" }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white z-[2]" />

      <div className="absolute top-6 right-5 flex flex-col gap-2.5 z-20">
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
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={`w-11 h-11 rounded-[4px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${hoverBg} shadow-sm hover:shadow-md hover:text-white`}
          >
            <Icon size={17} strokeWidth={2.5} />
          </motion.button>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 280, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="absolute top-[30%] left-[40%] -translate-x-1/2 -translate-y-1/2 z-20 w-[4.5rem] h-[4.5rem] rounded-full bg-[#0a1128]/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md transition-all duration-300 group hover:bg-[#0a1128]/90 hover:border-white/40"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-white opacity-[0.03]" />
        <Play
          size={26}
          className="ml-1.5 transition-transform group-hover:scale-110"
          fill="currentColor"
        />
      </motion.button>

      <div className="relative z-10 w-full px-5 pb-8 pt-16 flex flex-col gap-3.5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full gap-3"
        >
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
            {heroData.badges.map((badge, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 text-[0.6rem] font-semibold rounded-[2px] border backdrop-blur-md tracking-[0.12em] ${
                  idx === 0
                    ? "bg-[#d4af37]/15 text-[#f9df9f] border-[#d4af37]/40 shadow-sm"
                    : "bg-white/8 text-white/90 border-white/15"
                }`}
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.h1
              variants={fadeInUp}
              className="text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-white drop-shadow-lg"
            >
              {heroData.title}
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[2px] bg-[#d4af37]/15 flex items-center justify-center">
                <MapPin size={12} className="text-[#d4af37]" />
              </div>
              <span className="text-[0.82rem] font-medium text-white/75 tracking-tight">
                {heroData.location}
              </span>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative z-10 overflow-hidden w-[calc(100%+2.5rem)] -mx-5 px-5 py-4 group"
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
                <div key={copy} className="flex gap-2.5 pr-2.5 shrink-0">
                  {heroData.stats.map((stat, idx) => (
                    <motion.div
                      key={`${copy}-${idx}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex flex-col gap-2 p-3.5 rounded-[4px] bg-white/10 border border-white/20 backdrop-blur-md shrink-0 min-w-[125px] transition-all duration-300 hover:bg-white/20 hover:border-[#d4af37]/50 shadow-sm hover:shadow-md hover:z-10"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-[2px] flex items-center justify-center bg-white/10 border border-white/20">
                          <stat.icon
                            size={13}
                            strokeWidth={2.5}
                            className="text-white"
                          />
                        </div>
                        <span className="text-[0.6rem] font-semibold text-gray-300 tracking-[0.15em]">
                          {stat.label}
                        </span>
                      </div>
                      <span className="text-[1.15rem] font-semibold text-white tracking-tight mt-0.5">
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0a1128] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0a1128] to-transparent z-10" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
