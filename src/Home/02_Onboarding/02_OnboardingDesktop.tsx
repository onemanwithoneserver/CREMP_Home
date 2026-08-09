import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAnnouncement } from "../context/AnnouncementContext";
import { InlineAnnouncement } from "./StickyAnnouncementBanner";
import crempLogo from "../../Logo/CREMP_Light.png";
import { stakeholdersData } from "../03_StakeHolders/data";
import bgImage from "./bg.png";
import { vendorBenefits } from "./data";

const getTheme = (id: string) => {
  switch (id) {
    case "developers":
      return {
        activeBorder: "border-blue-500 dark:border-blue-500",
        activeBg: "bg-blue-500 dark:bg-blue-500",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_30px_rgba(59,130,246,0.2)] dark:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
        bgPing: "bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500",
      };
    case "franchisors":
      return {
        activeBorder: "border-violet-500 dark:border-violet-500",
        activeBg: "bg-violet-500 dark:bg-violet-500",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_30px_rgba(139,92,246,0.2)] dark:shadow-[0_0_30px_rgba(139,92,246,0.5)]",
        bgPing: "bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500",
      };
    case "buyers":
      return {
        activeBorder: "border-cyan-500 dark:border-cyan-500",
        activeBg: "bg-cyan-500 dark:bg-cyan-500",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_30px_rgba(6,182,212,0.2)] dark:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
        bgPing: "bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500",
      };
    case "consultants":
      return {
        activeBorder: "border-orange-500 dark:border-orange-500",
        activeBg: "bg-orange-500 dark:bg-orange-500",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_30px_rgba(249,115,22,0.2)] dark:shadow-[0_0_30px_rgba(249,115,22,0.5)]",
        bgPing: "bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500",
      };
    case "investors":
      return {
        activeBorder: "border-emerald-500 dark:border-emerald-500",
        activeBg: "bg-emerald-500 dark:bg-emerald-500",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_30px_rgba(16,185,129,0.2)] dark:shadow-[0_0_30px_rgba(16,185,129,0.5)]",
        bgPing:
          "bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500",
      };
    default:
      return {
        activeBorder: "border-[#D4AF37] dark:border-[#D4AF37]",
        activeBg: "bg-[#D4AF37] dark:bg-[#D4AF37]",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_30px_rgba(178,127,28,0.2)] dark:shadow-[0_0_30px_rgba(246,178,59,0.5)]",
        bgPing: "bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B]",
      };
  }
};

export default function Desktop() {
  const allStakeholders = useMemo(() => {
    const hasInvestors = stakeholdersData.some(
      (s) =>
        s.id.toLowerCase().includes("investor") ||
        s.label.toLowerCase().includes("investor"),
    );
    if (hasInvestors) return stakeholdersData;

    return [
      ...stakeholdersData,
      { id: "investors", label: "Investors\n& VC", icon: TrendingUp },
    ];
  }, []);

  const [activeTab, setActiveTab] = useState(allStakeholders[0].id);
  const { showSticky, setShowSticky } = useAnnouncement();
  const sectionRef = useRef<HTMLDivElement>(null);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (!node) return;

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setShowSticky(!entry.isIntersecting);
        },
        { threshold: 0, rootMargin: "-1px 0px 0px 0px" },
      );
      observerRef.current.observe(node);
    },
    [setShowSticky],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = allStakeholders.findIndex((s) => s.id === current);
        const nextIndex = (currentIndex + 1) % allStakeholders.length;
        return allStakeholders[nextIndex].id;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [allStakeholders]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

  const springAnim = { type: "spring" as const, stiffness: 100, damping: 20 };


  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 px-4 pb-8 pt-28 text-[#0a1128] dark:bg-[#17274C] dark:text-white lg:pt-28 xl:pt-32"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-32 -top-32 z-0 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[100px]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-32 -right-32 z-0 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ y: bgY, scale: bgScale }}
        className="pointer-events-none absolute right-0 top-0 z-0 h-full w-full opacity-20 mix-blend-multiply dark:opacity-40 dark:mix-blend-screen lg:w-3/5"
        aria-hidden="true"
      >
        <div
          className="h-full w-full bg-cover bg-right"
          style={{
            backgroundImage: `url(${bgImage})`,
            maskImage:
              "linear-gradient(to right, transparent 0%, black 40%, black 100%), linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 40%, black 100%), linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-gray-50 via-gray-50/95 to-transparent dark:from-[#17274C] dark:via-[#17274C]/95 lg:via-gray-50/80 dark:lg:via-[#17274C]/80" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 lg:gap-10">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="z-10 flex w-full flex-col lg:w-[50%] xl:w-[55%]">
            <InlineAnnouncement ref={sentinelRef} hiddenVisually={showSticky} />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springAnim, delay: 0.1 }}
              className="mb-4 text-5xl font-extrabold leading-[1.1] tracking-tight text-[#0a1128] dark:text-white lg:text-5xl xl:text-6xl"
            >
              India's 1st Integrated <br />
              <span className="animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                Commercial Real Estate
              </span>
              {""}
              <br />
              Marketplace
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springAnim, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 text-base font-bold text-[#0a1128]/80 dark:text-white/80"
            >
              <span>Commercial Properties</span>
              <span className="text-[#D4AF37]">•</span>
              <span>Franchise Models</span>
              <span className="text-[#D4AF37]">•</span>
              <span>Investments</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springAnim, delay: 0.3 }}
              className="mt-4 max-w-[95%] text-base leading-relaxed text-gray-600 dark:text-gray-400 xl:text-lg"
            >
              CREMP redefines how commercial opportunities are discovered and
              connected. From commercial properties and retail spaces to
              franchise expansion and business opportunities, CREMP brings
              together multiple commercial ecosystems into one integrated
              marketplace—helping property owners, brokers, franchisors,
              business owners, investors and tenants connect, collaborate and
              grow.
            </motion.p>
          </div>

          <div className="flex w-full items-center justify-center lg:w-[45%] xl:w-[40%]">
            <div className="group/orbit relative mx-auto hidden h-[320px] w-[320px] shrink-0 items-center justify-center lg:flex lg:h-[360px] lg:w-[360px] xl:h-[420px] xl:w-[420px]">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[#D4AF37]/5 blur-[60px] transition-opacity duration-700 group-hover/orbit:opacity-100" />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 360 }}
                transition={{
                  scale: { duration: 1 },
                  opacity: { duration: 1 },
                  rotate: { repeat: Infinity, duration: 60, ease: "linear" },
                }}
                viewport={{ once: false }}
                className="absolute inset-0 rounded-full border border-dashed border-gray-800/80"
              />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: false }}
                className="absolute inset-[9%] rounded-full border border-gray-700/30"
              />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1, rotate: -360 }}
                transition={{
                  scale: { duration: 1, delay: 0.4 },
                  opacity: { duration: 1, delay: 0.4 },
                  rotate: { repeat: Infinity, duration: 30, ease: "linear" },
                }}
                viewport={{ once: false }}
                className="absolute inset-[18%] rounded-full border border-[#121c33]"
              >
                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_15px_#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95" />
                <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_15px_#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95" />
                <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_15px_#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95" />
                <div className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_15px_#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95" />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.6 }}
                viewport={{ once: false }}
                className="relative z-10 flex h-[38%] w-[38%] flex-col items-center justify-center rounded-full border border-gray-800 dark:border-white bg-[#0b1b42] dark:bg-white shadow-[0_0_20px_rgba(246,178,59,0.1)] transition-shadow duration-700 before:absolute before:inset-[-10px] before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-[#0a0f25] dark:before:from-white/50 before:to-transparent group-hover/orbit:shadow-[0_0_30px_rgba(246,178,59,0.15)]"
              >
                <div className="absolute inset-0 animate-ping rounded-full bg-[#D4AF37]/10 opacity-20 duration-[3000ms]" />
                <img
                  src={crempLogo}
                  alt="CREMP Logo"
                  className="z-10 h-[55%] w-[55%] object-contain opacity-100 drop-shadow-[0_0_5px_rgba(246,178,59,0.2)]"
                />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                className="absolute inset-0 z-20"
              >
                {allStakeholders.map((stakeholder, index) => {
                  const isActive = activeTab === stakeholder.id;
                  const theme = getTheme(stakeholder.id);

                  const angle =
                    (index / allStakeholders.length) * 2 * Math.PI -
                    Math.PI / 2;
                  const radius = 45;
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);

                  return (
                    <motion.div
                      key={stakeholder.id}
                      initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: "-50%",
                        y: "-50%",
                      }}
                      transition={{
                        type: "spring",
                        duration: 0.6,
                        delay: 0.8 + index * 0.1,
                      }}
                      viewport={{ once: false }}
                      className="absolute flex flex-col items-center justify-center"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 60,
                          ease: "linear",
                        }}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="relative">
                          {isActive && (
                            <div
                              className={`absolute inset-0 animate-ping rounded-full opacity-30 duration-1000 transition-all ${theme.bgPing}`}
                            />
                          )}
                          <motion.div
                            className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 lg:h-14 lg:w-14 xl:h-16 xl:w-16 ${
                              isActive
                                ? `scale-110 ${theme.activeBorder} ${theme.activeBg} ${theme.activeText} ${theme.activeGlow}`
                                : "bg-white dark:bg-[#121c33] border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-800 dark:border-gray-700 dark:hover:border-gray-500 dark:hover:text-gray-200"
                            }`}
                            initial={{ scale: 1, rotate: 0 }}
                            animate={{ scale: 1, rotate: 0 }}
                            whileHover={{
                              scale: 1.15,
                              rotate: [0, -10, 10, 0],
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <stakeholder.icon
                              className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7"
                              strokeWidth={1.8}
                            />
                          </motion.div>
                        </div>
                        <span
                          className={`mt-2 text-center text-[10px] tracking-wide transition-all duration-500 lg:text-[11px] xl:mt-3 xl:text-sm ${isActive ? "font-extrabold text-slate-900 drop-shadow-sm dark:text-white" : "font-bold text-slate-500 dark:text-slate-400"}`}
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {stakeholder.label}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col gap-6 lg:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springAnim, delay: 0.6 }}
            viewport={{ once: false }}
            className="flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-800 bg-[#121c33] px-6 py-4 shadow-lg lg:flex-row"
          >
            <div className="flex-shrink-0 text-sm font-bold uppercase tracking-wider text-gray-200">
              Founding Vendor Benefits
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {vendorBenefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="rounded-[4px] border border-gray-700 bg-[#121c33] p-1.5 text-[#D4AF37] shadow-sm">
                    <motion.div
                      initial={{ scale: 1, rotate: 0 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <benefit.icon className="h-4 w-4" />
                    </motion.div>
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {benefit.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
