import { motion } from "framer-motion";
import { ArrowRight, BarChart, Users, Sparkles, ShieldCheck } from "lucide-react";
import { stakeholderData } from "./data";

const smoothEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUpText = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEasing },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEasing },
  },
};

const floatAnim: any = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function MobileStakeHolder1() {
  const { block1, block2, block3 } = stakeholderData;

  return (
    <div className="flex flex-col gap-8 py-2 px-2 w-full min-h-screen overflow-x-hidden bg-white dark:bg-slate-950 ">
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="rounded-[4px] bg-slate-50 dark:bg-slate-900/40 relative shadow-sm border border-slate-200 dark:border-slate-800 w-full flex flex-col overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-48 pointer-events-none opacity-40 dark:opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/80 to-slate-50 dark:via-slate-900/80 dark:to-slate-900 z-10"></div>
          <img src={block1.bgImage} alt="Background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 p-5 flex flex-col gap-6 w-full mt-2">
          <motion.div variants={fadeUpText} className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-[2px] w-fit tracking-wider uppercase border border-indigo-200 dark:border-indigo-700/50">
              <Users size={14} strokeWidth={2.5} />
              {block1.tag}
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {block1.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed whitespace-pre-line">
              {block1.subtitle}
            </p>
          </motion.div>

          <div className="flex flex-col gap-4 w-full">
            {block1.cards.map((card) => (
              <motion.div
                variants={cardVariants}
                key={card.id}
                className="bg-white dark:bg-slate-900 rounded-[4px] p-5 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col relative w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-[4px] bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20">
                    <card.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xs mt-1 uppercase tracking-wider">
                      {card.mobileSubtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  {card.description}
                </p>

                <div className="w-full aspect-video shrink-0 rounded-[4px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm relative mb-5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 py-4 border-t border-slate-100 dark:border-slate-800 mb-2">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 p-1.5 rounded-[2px] shrink-0">
                        <feature.icon size={16} strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                        {feature.labelMobile}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-indigo-600 active:bg-indigo-700 text-white font-bold py-3.5 rounded-[4px] flex items-center justify-center gap-2 shadow-sm text-sm transition-colors">
                  {card.buttonText}
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="rounded-[4px] bg-white dark:bg-slate-900 overflow-hidden p-5 flex flex-col gap-6 relative shadow-sm border border-cyan-100 dark:border-slate-800 w-full"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none"></div>

        <div className="flex justify-between items-start gap-4 relative z-10 w-full mb-2">
          <motion.div variants={fadeUpText} className="flex flex-col gap-3 flex-1 min-w-0">
            <div className="bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800/50 text-cyan-700 dark:text-cyan-300 text-xs font-bold px-3 py-1.5 rounded-[2px] w-fit uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} strokeWidth={2.5} />
              {block2.tag}
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {block2.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              {block2.subtitle}
            </p>
          </motion.div>

          <motion.div variants={fadeUpText} className="relative w-24 h-24 shrink-0 flex items-center justify-center mt-2 mr-2 hidden sm:flex">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[20px] w-20 h-20"></div>
            <img
              src={block2.headerImage}
              alt="Growth Metrics"
              className="h-full w-auto object-contain drop-shadow-xl relative z-10"
            />
            <motion.div variants={floatAnim} animate="animate" className="absolute bottom-0 -left-2 bg-white dark:bg-slate-800 p-1.5 rounded-[2px] border border-slate-200 dark:border-slate-700 z-20 shadow-lg">
              <BarChart className="text-cyan-500 dark:text-cyan-400" size={14} strokeWidth={2} />
            </motion.div>
            <motion.div variants={floatAnim} animate="animate" style={{ animationDelay: "1s" }} className="absolute -top-1 -right-1 bg-white dark:bg-slate-800 p-1.5 rounded-full border border-slate-200 dark:border-slate-700 z-20 shadow-lg">
              <Sparkles className="text-cyan-500 dark:text-cyan-300" size={12} strokeWidth={2} />
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 relative z-10 w-full">
          {block2.cards.map((card) => (
            <motion.div
              variants={cardVariants}
              key={card.id}
              className="bg-slate-50 dark:bg-slate-800/60 rounded-[4px] p-5 shadow-sm border border-slate-200 dark:border-slate-700/50 flex flex-col w-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-[4px] bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-200 dark:border-cyan-500/20">
                  <card.icon size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-bold text-xs mt-1 uppercase tracking-wider">
                    {card.mobileSubtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
                {card.description}
              </p>

              <div className="w-full aspect-video shrink-0 rounded-[4px] overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-sm relative mb-5 bg-slate-100 dark:bg-slate-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 py-4 border-t border-slate-200 dark:border-slate-700/50 mb-2">
                {card.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-slate-900/80 border border-cyan-100 dark:border-slate-700/50 p-1.5 rounded-[2px] shrink-0">
                      <feature.icon size={16} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                      {feature.labelMobile}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-cyan-600 active:bg-cyan-700 text-white font-bold py-3.5 rounded-[4px] flex items-center justify-center gap-2 shadow-sm text-sm transition-colors">
                {card.buttonText}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="rounded-[4px] bg-emerald-50 dark:bg-emerald-950/20 overflow-hidden flex flex-col relative shadow-sm border border-emerald-100 dark:border-emerald-900/30 w-full"
      >
        <div className="p-5 flex flex-col gap-6 z-10 w-full">
          <motion.div variants={fadeUpText} className="flex flex-col gap-3">
            <div className="bg-white dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-[2px] w-fit uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck size={14} strokeWidth={2.5} />
              {block3.tag}
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950 dark:text-white leading-[1.15] tracking-tight">
              {block3.title}
            </h2>
            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
              {block3.subtitleBold}
            </p>
            <p className="text-slate-700 dark:text-slate-400 font-medium leading-relaxed text-sm">
              {block3.subtitle}
            </p>
          </motion.div>

          <motion.div variants={fadeUpText} className="grid grid-cols-2 gap-3 mt-1">
            {block3.categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-[4px] p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm border border-emerald-100 dark:border-slate-800"
              >
                <div className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/50 rounded-[2px] p-2">
                  <category.icon size={22} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {category.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.button
            variants={fadeUpText}
            className="w-full bg-emerald-600 active:bg-emerald-700 text-white font-bold py-3.5 rounded-[4px] flex items-center justify-center gap-2 shadow-sm text-sm mt-2 transition-colors"
          >
            {block3.buttonText}
            <ArrowRight size={16} />
          </motion.button>
        </div>

        <div className="w-full relative min-h-[340px] mt-2 overflow-hidden bg-slate-100 dark:bg-slate-900">
          <motion.img
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: smoothEasing }}
            src={block3.mainImage}
            alt="Opportunities"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/80 dark:from-emerald-950/80 via-transparent to-transparent z-10"></div>
          
          <div className="absolute bottom-5 right-4 flex flex-col gap-3 z-20 items-end w-[85%] max-w-[260px]">
            {block3.floaters.slice(0, 3).map((floater, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.5, ease: smoothEasing }}
                className="bg-white dark:bg-slate-800 rounded-[4px] p-2.5 shadow-md border border-emerald-100 dark:border-slate-700 flex items-center gap-3 w-full"
              >
                <div className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-slate-700 border border-emerald-100 dark:border-slate-600 p-1.5 rounded-[2px] shrink-0">
                  <floater.icon size={16} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  {floater.labelMobile}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}