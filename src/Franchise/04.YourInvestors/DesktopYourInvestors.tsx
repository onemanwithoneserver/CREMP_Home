import { motion, type Variants } from "framer-motion";
import { Container } from "../../components/layout";
import { investorData } from "./data";
import { Target, CheckCircle2, Star, Activity, User } from "lucide-react";
import { YourBrandLogo } from "../../components/YourBrandLogo";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const pulseRing: Variants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.4, 0.1, 0.4],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatGlow: Variants = {
  animate: {
    y: [-8, 8, -8],
    boxShadow: [
      "0 10px 30px rgba(178,127,28,0.1)",
      "0 20px 40px rgba(178,127,28,0.2)",
      "0 10px 30px rgba(178,127,28,0.1)",
    ],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut", delay: 0.5 },
  },
};

export default function DesktopYourInvestors() {
  return (
    <div className="relative w-full overflow-hidden rounded-[8px] bg-white py-12 shadow-2xl transition-colors duration-700 dark:bg-[#030712] dark:shadow-none">
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/4 translate-x-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent dark:from-[#D4AF37]/15"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
        className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent dark:from-[#D4AF37]/10"
      />

      <Container className="relative z-10 mx-auto max-w-7xl px-4 xl:px-0">
        <div className="mb-24 flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex w-full flex-col justify-center lg:w-[45%]"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6 flex items-center gap-3"
            >
              <div className="flex h-8 items-center justify-center rounded-[4px] bg-[#D4AF37]/10 px-4 transition-colors hover:bg-[#D4AF37]/20 dark:bg-[#D4AF37]/10 dark:hover:bg-[#D4AF37]/20">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
                  {investorData.tag}
                </span>
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-[#D4AF37]/40 to-transparent dark:from-[#D4AF37]/40" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mb-8 text-[3.5rem] font-black leading-[1.05] tracking-tight xl:text-[4rem]"
            >
              <span className="block text-gray-900 transition-transform hover:translate-x-2 dark:text-white">
                {investorData.titleBase}
              </span>
              <span className="block animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                {investorData.titleHighlight}
              </span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <p className="text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                {investorData.desc[0]}
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="border-l-2 border-[#D4AF37] pl-5 transition-colors hover:border-[#b38728] dark:border-[#D4AF37] dark:hover:border-[#f9d08b]"
              >
                <p className="text-lg font-bold leading-relaxed text-gray-900 dark:text-white">
                  {investorData.desc[1]}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="relative flex h-[500px] w-full scale-[0.8] items-center justify-center sm:scale-90 lg:w-[50%] lg:scale-100">
            <div className="pointer-events-none absolute inset-0 z-10">
              {investorData.pills.map((pill, idx) => {
                const positions = [
                  { top: "5%", left: "10%" },
                  { top: "30%", right: "5%" },
                  { bottom: "10%", left: "30%" },
                  { top: "45%", left: "5%" },
                  { bottom: "25%", right: "5%" },
                  { top: "15%", left: "50%" },
                ];
                return (
                  <motion.div
                    key={idx}
                    animate={{
                      y: [-12, 12, -12],
                      x: [-6, 6, -6],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 5 + idx,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.3,
                    }}
                    className="absolute flex items-center gap-2 rounded-full border border-gray-200/60 bg-white/60 px-3 py-1.5 shadow-sm backdrop-blur-md dark:border-gray-800/60 dark:bg-gray-900/60"
                    style={positions[idx]}
                  >
                    <div className="flex items-center justify-center rounded-full bg-[#D4AF37]/10 p-1 dark:bg-[#D4AF37]/10">
                      <pill.icon
                        size={12}
                        className="text-[#D4AF37] dark:text-[#D4AF37]"
                      />
                    </div>
                    <span className="text-[0.55rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      {pill.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full">
              <motion.line
                x1="50%"
                y1="50%"
                x2="77%"
                y2="20%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="text-[#D4AF37]/40 drop-shadow-md dark:text-[#D4AF37]/40"
                variants={drawLine}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              />
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 2.2 }}
                cx="77%"
                cy="20%"
                r="4"
                className="fill-[#D4AF37] shadow-[0_0_15px_rgba(178,127,28,1)] dark:fill-[#D4AF37] dark:shadow-[0_0_15px_rgba(246,178,59,1)]"
              />

              <motion.line
                x1="50%"
                y1="50%"
                x2="74%"
                y2="75%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="text-[#D4AF37]/40 drop-shadow-md dark:text-[#D4AF37]/40"
                variants={drawLine}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              />
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 2.2 }}
                cx="74%"
                cy="75%"
                r="4"
                className="fill-[#D4AF37] shadow-[0_0_15px_rgba(178,127,28,1)] dark:fill-[#D4AF37]"
              />

              <motion.line
                x1="50%"
                y1="50%"
                x2="20%"
                y2="65%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="text-[#D4AF37]/40 drop-shadow-md dark:text-[#D4AF37]/40"
                variants={drawLine}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              />
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 2.2 }}
                cx="20%"
                cy="65%"
                r="4"
                className="fill-[#D4AF37] shadow-[0_0_15px_rgba(178,127,28,1)] dark:fill-[#D4AF37]"
              />
            </svg>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
              className="relative z-30 flex h-28 w-28 flex-col items-center justify-center rounded-[8px] border border-[#D4AF37]/30 bg-white/90 shadow-[0_0_50px_rgba(178,127,28,0.2)] backdrop-blur-md dark:border-[#D4AF37]/30 dark:bg-[#0a101d]/90 dark:shadow-[0_0_50px_rgba(246,178,59,0.15)]"
            >
              <YourBrandLogo size="lg" stacked={true} />
              <motion.div
                variants={pulseRing}
                initial="animate"
                className="absolute -inset-4 -z-10 rounded-[2.5rem] border border-[#D4AF37]/30 dark:border-[#D4AF37]/30"
              />
              <motion.div
                variants={pulseRing}
                initial="animate"
                transition={{ delay: 1 }}
                className="absolute -inset-8 -z-10 rounded-[3rem] border border-[#D4AF37]/15 dark:border-[#D4AF37]/15"
              />
            </motion.div>

            <motion.div
              variants={floatGlow}
              initial="hidden"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, zIndex: 40 }}
              className="absolute right-[5%] top-[10%] z-30 flex w-[220px] cursor-pointer flex-col rounded-[8px] border border-gray-200/80 bg-white/95 p-3.5 backdrop-blur-md transition-colors hover:border-[#D4AF37]/50 dark:border-gray-700/80 dark:bg-[#111827]/95 dark:hover:border-[#D4AF37]/50"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                    <User size={14} />
                  </div>
                  <div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Verified Profile
                    </div>
                    <div className="text-xs font-black text-gray-900 dark:text-white">
                      Inv-8842
                    </div>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-[0.65rem] font-black text-emerald-600 ring-2 ring-emerald-500/20 dark:bg-emerald-900/40 dark:text-emerald-400">
                  98%
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["₹5Cr+ Budget", "Tier 1 Cities", "F&B Exp."].map((l) => (
                  <span
                    key={l}
                    className="rounded-[2px] border border-gray-100 bg-gray-50 px-2 py-0.5 text-[0.6rem] font-bold text-gray-600 transition-colors hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={floatGlow}
              initial="hidden"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, zIndex: 40 }}
              className="absolute bottom-[15%] right-[10%] z-30 flex w-[200px] cursor-pointer flex-col rounded-[8px] border border-gray-200/80 bg-white/95 p-3.5 backdrop-blur-md transition-colors hover:border-[#D4AF37]/50 dark:border-gray-700/80 dark:bg-[#111827]/95 dark:hover:border-[#D4AF37]/50"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400">
                    <User size={14} />
                  </div>
                  <div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Verified Profile
                    </div>
                    <div className="text-xs font-black text-gray-900 dark:text-white">
                      Inv-4091
                    </div>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-[0.65rem] font-black text-emerald-600 ring-2 ring-emerald-500/20 dark:bg-emerald-900/40 dark:text-emerald-400">
                  94%
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["₹2Cr - ₹5Cr", "Commercial", "Ready"].map((l) => (
                  <span
                    key={l}
                    className="rounded-[2px] border border-gray-100 bg-gray-50 px-2 py-0.5 text-[0.6rem] font-bold text-gray-600 transition-colors hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={floatGlow}
              initial="hidden"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, zIndex: 40 }}
              className="absolute bottom-[25%] left-[5%] z-30 flex w-[200px] cursor-pointer flex-col rounded-[8px] border border-[#D4AF37]/40 bg-gradient-to-b from-white to-[#D4AF37]/10 p-3.5 backdrop-blur-md transition-all hover:shadow-[0_20px_40px_rgba(178,127,28,0.25)] dark:border-[#D4AF37]/40 dark:from-gray-800 dark:to-[#D4AF37]/15 dark:hover:shadow-[0_20px_40px_rgba(246,178,59,0.2)]"
            >
              <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-[4px] bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] px-3 py-0.5 text-[0.55rem] font-black tracking-widest text-white shadow-md dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95">
                NEW MATCH
              </div>
              <div className="mb-3 mt-1 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400">
                    <User size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-900 dark:text-white">
                      Inv-7723
                    </div>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[0.65rem] font-black text-[#D4AF37] ring-2 ring-[#D4AF37]/40 dark:bg-[#D4AF37]/20 dark:text-[#D4AF37] dark:ring-[#D4AF37]/40">
                  88%
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Multi-Unit", "Master Fran.", "Active"].map((l) => (
                  <span
                    key={l}
                    className="rounded-[2px] border border-[#D4AF37]/20 bg-white/50 px-2 py-0.5 text-[0.6rem] font-bold text-gray-700 transition-colors hover:bg-[#D4AF37]/10 dark:border-[#D4AF37]/20 dark:bg-gray-900/50 dark:text-gray-300 dark:hover:bg-[#D4AF37]/10"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="col-span-1 flex flex-col overflow-hidden rounded-[8px] border border-gray-200/50 bg-gray-50 p-10 shadow-lg transition-shadow hover:shadow-xl dark:border-gray-800/50 dark:bg-[#0a101d] lg:col-span-2"
          >
            <div className="mb-10 flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-900 dark:ring-gray-800"
              >
                <Activity
                  size={20}
                  className="text-[#D4AF37] dark:text-[#D4AF37]"
                />
              </motion.div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                {investorData.expectationsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
              {investorData.expectations.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="group flex cursor-pointer gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-gray-900 shadow-sm ring-1 ring-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] group-hover:text-white group-hover:ring-[#D4AF37] dark:bg-gray-900 dark:text-white dark:ring-gray-800 dark:group-hover:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:group-hover:text-gray-900 dark:group-hover:ring-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95">
                      {idx + 1}
                    </div>
                    {idx < investorData.expectations.length - 2 && (
                      <div className="mt-2 h-full w-[2px] bg-gray-200 transition-colors group-hover:bg-[#D4AF37]/30 dark:bg-gray-800 dark:group-hover:bg-[#D4AF37]/30 sm:hidden" />
                    )}
                  </div>
                  <div className="flex flex-col pt-1">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex items-center justify-center rounded-full bg-[#D4AF37]/10 p-1.5 transition-colors group-hover:bg-[#D4AF37]/20 dark:bg-[#D4AF37]/10 dark:group-hover:bg-[#D4AF37]/20">
                        <item.icon
                          size={18}
                          className="text-[#D4AF37] dark:text-[#D4AF37]"
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-lg font-bold text-gray-900 transition-colors group-hover:text-[#D4AF37] dark:text-white dark:group-hover:text-[#D4AF37]">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
              delay: 0.2,
            }}
            className="relative col-span-1 flex flex-col items-center justify-center overflow-hidden rounded-[8px] bg-gradient-to-b from-[#0f172a] to-[#030712] p-10 text-center shadow-2xl ring-1 ring-white/10 transition-shadow hover:shadow-[0_20px_50px_rgba(178,127,28,0.2)] dark:from-[#1e293b] dark:to-[#0a101d] dark:hover:shadow-[0_20px_50px_rgba(246,178,59,0.15)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/30 via-transparent to-transparent opacity-60 dark:from-[#D4AF37]/30" />

            <div className="relative z-10 mb-12 flex flex-col items-center">
              <span className="mb-4 rounded-[4px] border border-[#D4AF37]/40 bg-[#D4AF37]/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] backdrop-blur-md">
                {investorData.outcome.tag}
              </span>
              <h3 className="text-2xl font-black leading-tight text-white">
                {investorData.outcome.title}
              </h3>
            </div>

            <div className="relative flex h-48 w-48 items-center justify-center">
              <motion.div
                variants={pulseRing}
                initial="animate"
                className="absolute h-full w-full rounded-full border-2 border-[#D4AF37]/50 dark:border-[#D4AF37]/50"
              />
              <motion.div
                variants={pulseRing}
                initial="animate"
                transition={{ delay: 1 }}
                className="absolute h-[75%] w-[75%] rounded-full border border-[#D4AF37]/70 dark:border-[#D4AF37]/70"
              />
              <motion.div
                variants={pulseRing}
                initial="animate"
                transition={{ delay: 2 }}
                className="absolute h-[50%] w-[50%] rounded-full border border-[#D4AF37]/90 dark:border-[#D4AF37]/90"
              />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#b38728] shadow-[0_0_40px_rgba(178,127,28,0.6)] dark:from-[#D4AF37] dark:to-[#f9d08b] dark:shadow-[0_0_40px_rgba(246,178,59,0.6)]"
              >
                <Target
                  size={28}
                  className="text-white dark:text-gray-900"
                  strokeWidth={2.5}
                />
              </motion.div>

              <motion.div
                animate={{ y: [-4, 4, -4], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-2 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30"
              >
                <Star
                  size={12}
                  className="text-[#D4AF37]"
                  fill="currentColor"
                />
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-4 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30"
              >
                <CheckCircle2 size={16} className="text-emerald-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
