import { motion, type Variants } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { Container } from "../../components/layout";
import { whyInvestData } from "./data";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

export default function DesktopWhyInvest() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-24 transition-colors duration-700 dark:bg-[#0b1b42]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <Container className="relative z-10 max-w-7xl px-4 xl:px-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-[8px] bg-[#D4AF37]/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
              {whyInvestData.tag}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="max-w-4xl text-[3rem] font-black leading-tight text-gray-900 dark:text-white"
          >
            Why Investing Needs More Than a <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
              {whyInvestData.titleHighlight}
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-12 grid-rows-2 gap-6 h-[500px]"
        >
          <motion.div
            variants={scaleIn}
            className="col-span-5 row-span-2 rounded-[8px] border border-gray-200 bg-white p-10 shadow-sm dark:border-gray-800 dark:bg-[#121c33] flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-[#D4AF37]/5" />
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-black text-gray-900 dark:text-white">
                {whyInvestData.subtitle}
              </h3>
              <div className="flex flex-col gap-4 mt-8">
                {whyInvestData.issues.map((issue, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-gray-50 border border-gray-100 text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 transition-colors group-hover:text-[#D4AF37] dark:group-hover:text-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50">
                      <issue.icon size={20} />
                    </div>
                    <span className="text-[0.95rem] font-medium text-gray-600 dark:text-gray-400">
                      {issue.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
              <p className="text-[1.1rem] font-bold text-gray-900 dark:text-white">
                CREMP brings{" "}
                <span className="text-[#D4AF37] dark:text-[#D4AF37]">
                  {whyInvestData.conclusion}
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="col-span-7 row-span-1 rounded-[8px] border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-[#121c33] flex items-center justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-[#D4AF37]/5" />

            <div className="relative z-10 flex flex-col max-w-[40%]">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] text-white shadow-lg shadow-[#D4AF37]/30 mb-6 dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:text-[#0a1128] dark:shadow-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                Connected Expansion Ecosystem
              </h3>
              <p className="text-[0.85rem] text-gray-500 dark:text-gray-400">
                Manage your entire investment journey from{" "}
                {whyInvestData.bannerTextHighlight}
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3">
              {whyInvestData.flowItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center group/item cursor-pointer"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-[8px] border border-gray-100 bg-gray-50 shadow-sm transition-all hover:-translate-y-2 hover:shadow-md dark:border-gray-800 dark:bg-[#0b1b42] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50">
                    <item.icon
                      size={24}
                      className="text-gray-400 transition-colors group-hover/item:text-[#D4AF37] dark:text-gray-500 dark:group-hover/item:text-[#D4AF37]"
                    />
                  </div>
                  {idx < whyInvestData.flowItems.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="absolute text-gray-300 dark:text-gray-700 -right-2 top-1/2 -translate-y-1/2 translate-x-4 opacity-50"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="col-span-7 row-span-1 rounded-[8px] bg-gradient-to-br from-[#D4AF37] to-[#b38728] p-10 shadow-xl dark:from-[#121c33] dark:to-[#0a1128] dark:border dark:border-gray-800 flex items-center justify-between group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl font-black text-white mb-4">
                Discover verified franchise and retail opportunities instantly.
              </h3>
              <button className="flex items-center gap-2 rounded-[8px] bg-white px-6 py-2.5 text-[0.85rem] font-bold text-[#D4AF37] transition-transform hover:scale-105 dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:text-[#0a1128] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95">
                Explore Now <ArrowRight size={16} />
              </button>
            </div>

            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <div
                className="absolute h-full w-full rounded-full border-t-2 border-[#D4AF37] animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <div className="text-4xl font-black text-white">100+</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
