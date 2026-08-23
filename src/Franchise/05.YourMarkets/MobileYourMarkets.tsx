import { motion, type Variants } from "framer-motion";
import { Globe, Star } from "lucide-react";
import mapBg from "../../assets/map_bg.png";
import { Container } from "../../components/layout";
import { marketData } from "./data";
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
const pulseNode: Variants = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(246, 178, 59, 0.5)",
      "0 0 0 20px rgba(246, 178, 59, 0)",
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
};
const pulseBackground: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};
export default function MobileYourMarkets() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-white/40 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl border border-white/40 transition-colors duration-700 dark:bg-[#0b1b42]/60 dark:border-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <motion.div
        variants={pulseBackground}
        animate="animate"
        className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/3 -translate-y-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent dark:from-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseBackground}
        animate="animate"
        className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent dark:from-[#D4AF37]/10"
      />
      <Container className="relative z-10 mx-auto w-full">
        <div className="mb-8 flex flex-col items-center gap-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-50px" }}
            className="flex w-full flex-col items-center justify-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-4 flex items-center justify-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex h-8 cursor-pointer items-center justify-center rounded-[2px] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 backdrop-blur-md transition-colors hover:bg-[#D4AF37]/20 dark:bg-[#D4AF37]/10 dark:hover:bg-[#D4AF37]/20"
              >
                <Globe
                  size={14}
                  className="mr-2 text-[#D4AF37] dark:text-[#D4AF37]"
                />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
                  {marketData.tag}
                </span>
              </motion.div>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-[2.5rem] font-black leading-[1.1] tracking-tight sm:text-[3rem]"
            >
              <span className="block text-gray-900 dark:text-white">
                {marketData.titleBase}
              </span>
              <span className="block animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                {marketData.titleHighlight}
              </span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 px-2 text-center"
            >
              <p className="text-[0.95rem] font-bold leading-relaxed text-gray-900 dark:text-white">
                {marketData.desc[0]}
              </p>
              <p className="text-[0.95rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                {marketData.desc[1]}
              </p>
            </motion.div>
          </motion.div>
          <div className="relative flex h-[400px] w-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-black/60 to-black/80 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-shadow hover:shadow-[0_20px_50px_rgba(246,178,59,0.15)] dark:from-black/40 dark:to-black/60"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 8, ease: "linear" }}
                src={mapBg}
                className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen"
                alt="Local Market Network"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-[#0A0F1C]/50" />
              {marketData.hexagons.map((hex, idx) => {
                const isGold = hex.color === "gold";
                const isBlue = hex.color === "blue";
                const mobilePositions = [
                  { top: "25%", left: "25%" },
                  { top: "12%", left: "55%" },
                  { top: "35%", left: "65%" },
                  { top: "60%", left: "60%" },
                  { top: "75%", left: "35%" },
                ];
                const position = mobilePositions[idx] || hex.position;
                const isTopNode =
                  parseInt((position?.top as string) || "0") < 30;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + idx * 0.15,
                      type: "spring",
                      bounce: 0.4,
                    }}
                    className="group absolute z-10"
                    style={position}
                  >
                    <div
                      className={`absolute flex flex-col items-center transition-transform duration-300 -translate-x-1/2 w-max ${
                        isTopNode
                          ? "bottom-[calc(50%+1rem)] group-hover:-translate-y-1"
                          : "top-[calc(50%+1rem)] group-hover:translate-y-1 flex-col-reverse"
                      }`}
                    >
                      <div
                        className={`flex flex-col items-center rounded-[4px] px-2.5 py-1.5 text-[0.65rem] font-bold shadow-xl backdrop-blur-md ${
                          isGold
                            ? "bg-[#D4AF37]/90 text-gray-900"
                            : isBlue
                              ? "bg-blue-500/90 text-white"
                              : "bg-white/90 text-gray-900 dark:bg-gray-800/90 dark:text-white"
                        }`}
                      >
                        <span className="whitespace-nowrap ">{hex.title}</span>
                        <span className="whitespace-nowrap text-[0.55rem] opacity-70 ">
                          {hex.status}
                        </span>
                      </div>
                      <div
                        className={`h-1.5 w-1.5 rotate-45 ${isTopNode ? "-mt-1" : "-mb-1"} ${
                          isGold
                            ? "bg-[#D4AF37]/90"
                            : isBlue
                              ? "bg-blue-500/90"
                              : "bg-white/90 dark:bg-gray-800/90"
                        }`}
                      />
                    </div>
                    <motion.div
                      variants={isGold ? pulseNode : {}}
                      initial="animate"
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-110 ${
                        isGold
                          ? "border-[#D4AF37]/50 bg-[#D4AF37]/20 text-[#D4AF37]"
                          : isBlue
                            ? "border-blue-400/50 bg-blue-500/20 text-blue-400"
                            : "border-white/20 bg-white/10 text-white"
                      }`}
                    >
                      <hex.icon size={14} />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`absolute -right-1 -top-1 h-3.5 w-3.5 rotate-45 rounded-[2px] border-2 border-[#0A0F1C] ${
                          isGold
                            ? "bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_8px_rgba(246,178,59,0.8)]"
                            : isBlue
                              ? "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                              : "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
              <svg
                className="absolute inset-0 h-full w-full opacity-50"
                style={{ zIndex: 0 }}
              >
                <path
                  d="M 55% 55% Q 40% 60% 20% 35%"
                  stroke="url(#blueGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                />
                <path
                  d="M 55% 55% Q 45% 40% 48% 20%"
                  stroke="url(#blueGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                />
                <path
                  d="M 55% 55% Q 65% 35% 75% 15%"
                  stroke="url(#blueGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                />
                <path
                  d="M 55% 55% Q 75% 60% 90% 35%"
                  stroke="url(#goldGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="goldGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="blueGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="flex flex-col items-center px-3 py-4 text-center "
          >
            <div className="mb-4 flex flex-col items-center gap-2">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]"
              >
                <Star size={16} className="fill-current" />
              </motion.div>
              <h3 className="text-base font-black uppercase tracking-wide text-gray-900 dark:text-white">
                {marketData.benefitsTitle}
              </h3>
            </div>
            <div className="flex w-full flex-col gap-1.5">
              {marketData.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-[4px] border border-transparent p-2 text-left transition-all hover:bg-gray-50 dark:hover:bg-gray-900/50"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-white/50 text-[#D4AF37] shadow-[0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-md dark:border-white/10 dark:bg-black/40"
                  >
                    <benefit.icon size={15} strokeWidth={2.5} />
                  </motion.div>
                  <p className="text-[1rem] font-bold leading-snug text-gray-800 dark:text-gray-200">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
