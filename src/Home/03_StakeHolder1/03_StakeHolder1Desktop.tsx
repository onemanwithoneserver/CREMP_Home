import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { stakeholdersData } from "../03_StakeHolders/data";

export default function DesktopStakeHolder1() {
  const gradients = [
    "bg-gradient-to-br from-[#D4AF37] to-[#8C6B1B] dark:from-[#D4AF37] dark:to-[#FFD17A]",
    "bg-gradient-to-tr from-rose-700 via-indigo-900 to-cyan-400",
    "bg-gradient-to-br from-emerald-500 to-teal-800",
    "bg-gradient-to-tr from-orange-500 to-red-700",
    "bg-gradient-to-bl from-blue-600 to-indigo-900",
  ];

  const renderHighlightedTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")}{" "}
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#FFD17A]">
          {lastWord}
        </span>
      </>
    );
  };

  return (
    <div className="relative w-full bg-[#FAFAFA] font-sans transition-colors duration-500 dark:bg-[#030811] py-16 xl:py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(246,178,59,0.02)_0%,transparent_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-4 py-1.5 text-xs font-bold tracking-widest text-[#D4AF37]">
              <span>CREMP PLATFORM</span>
            </div>
            <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Built for Every <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#FFD17A]">
                Commercial Stakeholder
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base font-medium text-gray-600 dark:text-gray-400 sm:text-lg">
              Our marketplace adapts to your specific needs, providing tailored
              tools and connections to accelerate your commercial real estate
              journey.
            </p>
          </motion.div>
        </div>

        {/* Stakeholder Sections */}
        <div className="flex flex-col gap-16 xl:gap-20">
          {stakeholdersData.map((stakeholder, idx) => {
            const isEven = idx % 2 === 0;
            const aspectClasses = [
              "aspect-square",
              "aspect-[4/3]",
              "aspect-[16/9]",
              "aspect-[4/3]",
              "aspect-square",
            ];
            const aspectClass = aspectClasses[idx % aspectClasses.length];

            return (
              <motion.div
                key={stakeholder.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col items-center gap-8 lg:gap-12 xl:gap-16 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Visual / Image Side */}
                <div className="relative flex w-full max-w-md lg:max-w-[420px] mx-auto flex-col lg:w-5/12">
                  <div className="relative w-full overflow-hidden rounded-md border border-gray-200 bg-gray-100 shadow-xl shadow-gray-200/50 transition-transform duration-500 hover:shadow-2xl dark:border-gray-800/80 dark:bg-[#121c33] dark:shadow-black/60">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-80 dark:from-[#0a1128]/90" />
                    <div
                      className={`group relative ${aspectClass} w-full overflow-hidden`}
                    >
                      <div className={`h-full w-full ${gradients[idx % gradients.length]} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
                      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0a1128] shadow-lg dark:bg-[#0a1128] dark:text-white">
                          <stakeholder.icon
                            className="h-5 w-5"
                            strokeWidth={2}
                          />
                        </div>
                        <h4 className="text-2xl font-bold text-white drop-shadow-md">
                          {stakeholder.label.replace("\n", " ")}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                    {stakeholder.stats?.slice(0, 4).map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex flex-col justify-center rounded border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-[#D4AF37]/50 dark:border-gray-800/80 dark:bg-[#121c33]"
                      >
                        <stat.icon
                          className="mb-3 h-5 w-5 text-[#D4AF37]"
                          strokeWidth={1.5}
                        />
                        <span className="text-xl font-black text-gray-900 dark:text-white">
                          {stat.value}
                        </span>
                        <span className="mt-1 text-[10px] font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex w-full flex-col justify-center lg:w-1/2 lg:py-8">
                  <div className="mb-4 w-fit rounded-sm border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1.5 text-[11px] font-black tracking-widest text-[#D4AF37] dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/10 xl:text-xs">
                    FOR {stakeholder.id.toUpperCase()}
                  </div>

                  <h3 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-gray-900 dark:text-white xl:text-5xl">
                    {renderHighlightedTitle(stakeholder.title)}
                  </h3>

                  <div className="mb-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    {stakeholder.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-4 rounded border-gray-100 dark:border-gray-800/50 border bg-gray-50/50 p-3 transition-colors hover:bg-gray-50 dark:bg-[#121c33]/30 dark:hover:bg-[#121c33]/80"
                      >
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#D4AF37] shadow-sm dark:border-gray-800 dark:bg-[#0a0f25] xl:h-12 xl:w-12">
                          <feature.icon
                            className="h-5 w-5 xl:h-6 xl:w-6"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[13px] font-bold leading-tight text-gray-900 dark:text-gray-100 xl:text-[15px]">
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <button className="group relative flex w-fit items-center gap-4 overflow-hidden rounded bg-gray-900 px-3 py-2 pr-6 text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-gray-900/20 active:scale-[0.98] dark:bg-white dark:text-[#0a1128] dark:hover:bg-gray-100 dark:hover:shadow-white/10 xl:px-4 xl:py-2.5 xl:pr-8">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-[#FFD17A] dark:text-[#D4AF37] xl:h-10 xl:w-10">
                        <Sparkles className="h-4 w-4 xl:h-5 xl:w-5" />
                      </div>
                      <span className="text-sm font-bold tracking-wide xl:text-base">
                        {stakeholder.buttonText}
                      </span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
