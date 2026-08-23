import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAnnouncement } from "../context/AnnouncementContext";
import { InlineAnnouncement } from "./StickyAnnouncementBanner";
import crempLogo from "../../Logo/CREMP_Light.png";
import { stakeholdersData } from "../03_StakeHolders/data";
import bgImage from "./bg.png";
import { vendorBenefits } from "./data";
import telangana from "./telangana.png";
const getTheme = (id: string) => {
  switch (id) {
    case "developers":
      return {
        activeBorder: "border-blue-500 dark:border-blue-500",
        activeBg: "bg-blue-500 dark:bg-blue-500",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_15px_rgba(59,130,246,0.2)] dark:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
        bgPing: "bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500",
      };
    case "franchisors":
      return {
        activeBorder: "border-violet-500 dark:border-violet-500",
        activeBg: "bg-violet-500 dark:bg-violet-500",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_15px_rgba(139,92,246,0.2)] dark:shadow-[0_0_15px_rgba(139,92,246,0.5)]",
        bgPing: "bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500",
      };
    case "buyers":
      return {
        activeBorder: "border-cyan-500 dark:border-cyan-500",
        activeBg: "bg-cyan-500 dark:bg-cyan-500",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_15px_rgba(6,182,212,0.2)] dark:shadow-[0_0_15px_rgba(6,182,212,0.5)]",
        bgPing: "bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500",
      };
    case "consultants":
      return {
        activeBorder: "border-orange-500 dark:border-orange-500",
        activeBg: "bg-orange-500 dark:bg-orange-500",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_15px_rgba(249,115,22,0.2)] dark:shadow-[0_0_15px_rgba(249,115,22,0.5)]",
        bgPing: "bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500",
      };
    case "investors":
      return {
        activeBorder: "border-emerald-500 dark:border-emerald-500",
        activeBg: "bg-emerald-500 dark:bg-emerald-500",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_15px_rgba(16,185,129,0.2)] dark:shadow-[0_0_15px_rgba(16,185,129,0.5)]",
        bgPing:
          "bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500",
      };
    default:
      return {
        activeBorder: "border-[#D4AF37] dark:border-[#D4AF37]",
        activeBg: "bg-[#D4AF37] dark:bg-[#D4AF37]",
        activeText: "text-white dark:text-white",
        activeGlow:
          "shadow-[0_0_15px_rgba(178,127,28,0.2)] dark:shadow-[0_0_15px_rgba(246,178,59,0.5)]",
        bgPing: "bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B]",
      };
  }
};
export default function Mobile() {
  const springAnim = { type: "spring" as const, stiffness: 100, damping: 20 };
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
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 dark:bg-[#17274C] px-5 pb-10 pt-20 text-[#0a1128] dark:text-white">
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#17274C] z-0" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-16 -top-16 z-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[80px]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-16 -right-16 z-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[80px]"
      />
      <motion.div
        className="absolute inset-0 z-0 opacity-15 dark:opacity-30 bg-cover bg-center bg-no-repeat mix-blend-multiply dark:mix-blend-screen"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-50/90 via-gray-50/95 to-gray-50 dark:from-[#17274C]/90 dark:via-[#17274C]/95 dark:to-[#17274C] pointer-events-none" />
      <div className="relative z-10 flex w-full flex-col gap-8">
        <div className="flex flex-col z-10">
          <InlineAnnouncement
            ref={sentinelRef}
            isMobile
            hiddenVisually={showSticky}
          />
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springAnim, delay: 0.1 }}
            className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0a1128] dark:text-white"
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
            className="mb-2 flex flex-col gap-1 text-sm font-bold text-[#0a1128]/80 dark:text-white/80"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">•</span>
              <span>Commercial Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">•</span>
              <span>Franchise Models</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">•</span>
              <span>Investments</span>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springAnim, delay: 0.3 }}
            className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
          >
            CREMP redefines how commercial opportunities are discovered and
            connected. From commercial properties and retail spaces to franchise
            expansion and business opportunities, CREMP brings together multiple
            commercial ecosystems into one integrated marketplace—helping
            property owners, brokers, franchisors, business owners, investors
            and tenants connect, collaborate and grow.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springAnim, delay: 0.4 }}
          viewport={{ once: false, margin: "-20px" }}
          className="relative mt-4 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-[#121c33]/95 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        >
          <div
            className="absolute inset-0 z-0 opacity-30 dark:opacity-20"
            style={{
              backgroundImage: `url(${telangana})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-gray-50/95 via-gray-50/80 to-gray-50/60 dark:from-[#121c33]/95 dark:via-[#121c33]/80 dark:to-[#121c33]/60" />
          <div className="relative z-10 p-5 sm:p-6">
            <div className="group/orbit relative mx-auto flex h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] shrink-0 items-center justify-center mb-8 mt-2">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[#D4AF37]/5 blur-[40px] opacity-100" />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 360 }}
                transition={{
                  scale: { duration: 1 },
                  opacity: { duration: 1 },
                  rotate: { repeat: Infinity, duration: 60, ease: "linear" },
                }}
                viewport={{ once: false }}
                className="absolute inset-0 rounded-full border border-dashed border-gray-800/80 dark:border-gray-500/50"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: false }}
                className="absolute inset-[12%] rounded-full border border-gray-700/30 dark:border-gray-400/30"
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
                className="absolute inset-[24%] rounded-full border border-[#121c33] dark:border-gray-600/50"
              >
                <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_10px_#D4AF37]" />
                <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_10px_#D4AF37]" />
                <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_10px_#D4AF37]" />
                <div className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_10px_#D4AF37]" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.6 }}
                viewport={{ once: false }}
                className="relative z-10 flex h-[35%] w-[35%] flex-col items-center justify-center rounded-full border border-gray-800 dark:border-white bg-[#0b1b42] dark:bg-white shadow-[0_0_15px_rgba(246,178,59,0.15)] before:absolute before:inset-[-6px] before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-[#0a0f25] dark:before:from-white/50 before:to-transparent"
              >
                <div className="absolute inset-0 animate-ping rounded-full bg-[#D4AF37]/10 opacity-20 duration-[3000ms]" />
                <img
                  src={crempLogo}
                  alt="CREMP Logo"
                  className="z-10 h-[50%] w-[50%] object-contain drop-shadow-[0_0_5px_rgba(246,178,59,0.2)]"
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
                              className={`absolute inset-0 animate-ping rounded-full opacity-40 duration-1000 ${theme.bgPing}`}
                            />
                          )}
                          <motion.div
                            className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
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
                              className="h-4 w-4"
                              strokeWidth={1.8}
                            />
                          </motion.div>
                        </div>
                        <span
                          className={`mt-1.5 text-center text-[8.5px] sm:text-[9.5px] transition-all duration-500 ${isActive ? "font-extrabold text-slate-900 drop-shadow-sm dark:text-white" : "font-bold text-slate-500 dark:text-slate-400"}`}
                          style={{ whiteSpace: "pre-line", lineHeight: "1.2" }}
                        >
                          {stakeholder.label}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            <div className="flex flex-col gap-3">
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="group relative flex w-full items-center justify-between overflow-hidden rounded-[4px] bg-[#0b1b42] dark:bg-white px-4 py-3 text-sm font-bold text-white dark:text-[#0a1128] active:bg-gray-900 dark:active:bg-gray-100"
              >
                <span className="relative">Request Early Access</span>
                <ArrowRight className="relative h-4 w-4" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="group relative flex w-full items-center justify-between rounded-[4px] border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#121c33] px-4 py-3 text-sm font-bold text-[#0a1128] dark:text-white active:bg-gray-50 dark:active:bg-gray-800"
              >
                <span className="relative">Explore the Marketplace</span>
                <ArrowRight className="relative h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springAnim, delay: 0.5 }}
          viewport={{ once: false }}
          className="mt-2 flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#121c33] p-5 shadow-lg"
        >
          <div className="text-center text-xs font-bold uppercase tracking-wider text-gray-200">
            Founding Vendor Benefits
          </div>
          <div className="flex flex-col gap-3">
            {vendorBenefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...springAnim, delay: 0.6 + idx * 0.1 }}
                viewport={{ once: false }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 rounded-[4px] border border-gray-700 bg-[#121c33] p-1.5 text-[#d4af37] shadow-sm">
                  <motion.div
                    initial={{ scale: 1, rotate: 0 }}
                    animate={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon className="h-3.5 w-3.5" />
                  </motion.div>
                </div>
                <span className="text-xs font-medium text-gray-300">
                  {benefit.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
