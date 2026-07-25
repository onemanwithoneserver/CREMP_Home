import { motion, type Variants } from "framer-motion";
import { Container } from "../../components/layout";
import { ecosystemData } from "./data";
import { Target, Plus, Equal, Globe2 } from "lucide-react";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 0.6,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
  },
};

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatAnimation: Variants = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function DesktopEcosystem() {
  return (
    <div className="relative w-full overflow-hidden rounded-[8px] bg-gray-50 py-16 shadow-xl transition-colors duration-700 dark:bg-[#0a1128] dark:shadow-none">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute right-[-5%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/10"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/15"
      />

      <Container className="relative z-10 max-w-7xl px-4 xl:px-0">
        <div className="mb-12 flex items-start justify-between">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex w-[46%] flex-col pt-2"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-4 flex items-center gap-3"
            >
              <span className="flex w-fit items-center gap-2 rounded-[2px] border border-[#D4AF37]/20 bg-white/60 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#D4AF37] shadow-sm backdrop-blur-xl dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/5 dark:text-[#D4AF37]">
                {ecosystemData.tag}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-[2.75rem] font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white xl:text-[3.2rem]"
            >
              Why Expansion <br />
              Needs More Than a <br />
              <span className="animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                {ecosystemData.titleHighlight}
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mb-6 text-[0.9rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400"
            >
              {ecosystemData.subtitle}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mb-8 flex flex-col gap-2.5"
            >
              {ecosystemData.issues.map((issue, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/10 bg-gradient-to-br from-[#fdf6ea] to-white text-[#D4AF37] shadow-sm transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 dark:border-gray-800 dark:from-[#121c33] dark:to-[#121c33] dark:text-[#D4AF37]">
                    <issue.icon size={16} />
                  </div>
                  <span className="text-[0.85rem] font-bold text-gray-800 transition-colors group-hover:text-[#D4AF37] dark:text-gray-300 dark:group-hover:text-[#D4AF37]">
                    {issue.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-[1rem] font-bold tracking-wide text-gray-900 dark:text-white"
            >
              CREMP brings{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                {ecosystemData.conclusion}
              </span>
            </motion.p>
          </motion.div>

          <div className="relative w-[50%] pl-2 pt-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center"
            >
              <div className="relative z-10 flex w-full justify-between">
                {ecosystemData.flowItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{
                      delay: 0.1 + idx * 0.15,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="relative z-20 flex cursor-pointer items-center"
                  >
                    <div className="group flex h-32 w-[105px] flex-col items-center justify-center rounded-[4px] border border-gray-100/80 bg-white/90 p-3 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all hover:shadow-[0_15px_40px_rgba(178,127,28,0.2)] dark:border-gray-800/80 dark:bg-[#121c33]/90 dark:hover:shadow-[0_15px_40px_rgba(246,178,59,0.2)] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50">
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#fdf6ea] to-white shadow-inner ring-1 ring-[#D4AF37]/10 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 dark:from-[#121c33] dark:to-[#0a1128] dark:ring-[#D4AF37]/10 dark:shadow-none">
                        <item.icon
                          size={26}
                          className="text-[#D4AF37] drop-shadow-sm transition-colors group-hover:text-[#b38728] dark:text-[#D4AF37]"
                        />
                      </div>
                      <span className="whitespace-pre-line text-[0.65rem] font-bold leading-tight text-gray-800 transition-colors group-hover:text-[#D4AF37] dark:text-gray-200 dark:group-hover:text-[#D4AF37]">
                        {item.text}
                      </span>
                    </div>
                    {idx < ecosystemData.flowItems.length - 1 && (
                      <div className="absolute right-[-14px] top-1/2 z-30 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b38728] text-white shadow-md ring-2 ring-gray-50 dark:from-[#D4AF37] dark:to-[#b38728] dark:ring-[#0a1128]">
                        <Plus
                          size={14}
                          strokeWidth={3}
                          className="animate-pulse"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="relative z-0 -mt-[12px] h-[90px] w-[90%]">
                <svg
                  className="absolute inset-0 h-full w-full drop-shadow-md"
                  viewBox="0 0 600 90"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="gold-line-grad"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#b38728" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                    <linearGradient
                      id="globe-grad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="50%" stopColor="#b38728" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    variants={drawLine}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    d="M 50,0 C 50,45 300,55 300,90"
                    fill="none"
                    stroke="url(#gold-line-grad)"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                  />
                  <motion.path
                    variants={drawLine}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    d="M 217,0 C 217,45 300,55 300,90"
                    fill="none"
                    stroke="url(#gold-line-grad)"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                  />
                  <motion.path
                    variants={drawLine}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    d="M 383,0 C 383,45 300,55 300,90"
                    fill="none"
                    stroke="url(#gold-line-grad)"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                  />
                  <motion.path
                    variants={drawLine}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    d="M 550,0 C 550,45 300,55 300,90"
                    fill="none"
                    stroke="url(#gold-line-grad)"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                  />
                </svg>
              </div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="z-20 -mt-[14px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b38728] text-white shadow-lg shadow-[#D4AF37]/40 ring-4 ring-gray-50 dark:from-[#D4AF37] dark:to-[#b38728] dark:shadow-[#D4AF37]/40 dark:ring-[#0a1128]"
              >
                <Equal size={20} strokeWidth={3} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                variants={floatAnimation}
                animate="animate"
                className="relative z-10 -mt-[14px] flex w-[240px] items-center justify-center gap-5 rounded-[8px] bg-gradient-to-br from-[#0f172a] to-[#020617] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-1 ring-white/10 dark:from-[#121c33] dark:to-[#0a1128]"
              >
                <div className="absolute inset-0 rounded-[8px] bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-60 dark:from-[#D4AF37]/20 flex justify-end" />

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="relative z-10 flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/5 shadow-inner backdrop-blur-sm ring-1 ring-white/10"
                >
                  <Globe2
                    size={36}
                    stroke="url(#globe-grad)"
                    className="drop-shadow-lg"
                    strokeWidth={1.5}
                  />
                </motion.div>

                <div className="relative z-10 flex flex-col">
                  <span className="text-[1rem] font-bold text-gray-300">
                    One Connected
                  </span>
                  <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-[1.35rem] font-black tracking-wide text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                    Expansion Ecosystem
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          className="relative flex w-full cursor-pointer items-center gap-4 overflow-hidden rounded-[8px] border border-gray-200 bg-white/60 p-5 shadow-sm backdrop-blur-xl transition-all dark:border-gray-800 dark:bg-[#121c33]/60"
        >
          <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#D4AF37] to-[#b38728] dark:from-[#D4AF37] dark:to-[#b38728]" />
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm transition-transform duration-500 hover:rotate-180 hover:scale-110 dark:border-gray-800 dark:bg-[#0a1128] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50">
            <Target
              size={22}
              className="text-[#D4AF37] dark:text-[#D4AF37]"
              strokeWidth={1.5}
            />
          </div>
          <p className="max-w-4xl text-[0.95rem] font-medium leading-relaxed text-gray-700 dark:text-gray-300">
            Instead of switching between multiple platforms,{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              manage your expansion journey from{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                {ecosystemData.bannerTextHighlight}
              </span>
            </span>
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
