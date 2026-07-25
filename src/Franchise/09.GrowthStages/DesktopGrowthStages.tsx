import { motion, type Variants } from "framer-motion";
import { Container } from "../../components/layout";
import { growthStagesData } from "./data";
import { Sparkles} from "lucide-react";

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

const pulseBackground: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function DesktopGrowthStages() {
  return (
    <div className="relative w-full overflow-hidden rounded-[8px] bg-white py-24 shadow-2xl transition-colors duration-700 dark:bg-[#030712] dark:shadow-none">
      <motion.div
        variants={pulseBackground}
        animate="animate"
        className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/3 -translate-y-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent dark:from-[#D4AF37]/10"
      />

      <Container className="relative z-10 mx-auto max-w-7xl px-4 xl:px-0">
        <div className="mb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex w-full max-w-4xl flex-col items-center justify-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6 flex items-center justify-center gap-3"
            >
              <div className="flex h-8 cursor-pointer items-center justify-center rounded-[2px] bg-[#D4AF37]/10 px-4 transition-colors hover:bg-[#D4AF37]/20 dark:bg-[#D4AF37]/10 dark:hover:bg-[#D4AF37]/20">
                <Sparkles size={14} className="mr-2 text-[#D4AF37]" />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37]">
                  {growthStagesData.tag}
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-[3rem] font-black leading-[1.1] tracking-tight xl:text-[3.5rem]"
            >
              <span className="block text-gray-900 transition-transform hover:translate-x-2 dark:text-white">
                {growthStagesData.titleBase}
              </span>
              <span className="block animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                {growthStagesData.titleHighlight}
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400"
            >
              {growthStagesData.subtitle}
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {growthStagesData.stages.map((stage) => {
            const isGold = stage.color === "gold";
            const isBlue = stage.color === "blue";

            return (
              <motion.div
                key={stage.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[8px] border border-gray-200/50 bg-gray-50/50 p-10 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-800/50 dark:bg-gray-900/30"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none ${
                    isGold
                      ? "from-[#D4AF37] to-transparent"
                      : isBlue
                        ? "from-blue-500 to-transparent"
                        : "from-emerald-500 to-transparent"
                  }`}
                />
                
                <div className="relative z-10 flex flex-col items-start text-left">
                  <div
                    className={`mb-8 flex h-14 w-14 items-center justify-center rounded-full shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                      isGold
                        ? "bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10"
                        : isBlue
                          ? "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20"
                          : "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20"
                    }`}
                  >
                    <stage.icon size={24} strokeWidth={2} />
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-black tracking-tight text-gray-900 dark:text-white transition-colors group-hover:text-[#D4AF37]">
                    {stage.title}
                  </h3>
                  
                  <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
                    {stage.subtitle}
                  </h4>
                  
                  <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                    {stage.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </div>
  );
}
