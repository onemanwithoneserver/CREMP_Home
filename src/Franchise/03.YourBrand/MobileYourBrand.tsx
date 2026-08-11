import { motion, type Variants } from "framer-motion";
import { ArrowRight, Pause, Play, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "../../components/layout";
import { carouselItems } from "./data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const floatAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return "";
  let videoId = "";
  if (url.includes("youtube.com/shorts/")) {
    videoId = url.split("shorts/")[1].split("?")[0];
  } else if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1].split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/embed/")) {
    return url;
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

export default function MobileYourBrand() {
  const [items, setItems] = useState(carouselItems);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);

  useEffect(() => {
    if (!isCarouselPlaying || playingVideoId !== null) return;

    const interval = setInterval(() => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const first = newItems.shift();
        if (first) newItems.push(first);

        return newItems.map((item, index) => ({
          ...item,
          position: index - 2,
          active: index === 2,
        }));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isCarouselPlaying, playingVideoId]);

  return (
    <section className="relative w-full overflow-hidden bg-white/40 backdrop-blur-xl border-y border-white/40 py-4 transition-colors duration-700 dark:bg-[#0b1b42]/60 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute left-[-10%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[80px] dark:bg-[#D4AF37]/15"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-50px" }}
            className="flex w-full flex-col items-center text-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="mb-4 flex w-fit items-center gap-2 rounded-[2px] border border-[#D4AF37]/30 bg-white/60 px-4 py-1.5 shadow-sm backdrop-blur-xl dark:border-[#D4AF37]/30 dark:bg-[#D4AF37]/10">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                >
                  <Sparkles
                    size={14}
                    className="text-[#D4AF37] dark:text-[#D4AF37]"
                  />
                </motion.div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
                  Unify Your Workspace
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-[2.5rem] font-black leading-[1.1] tracking-tight sm:text-[3rem]"
            >
              <span className="block text-gray-900 dark:text-white">
                Your Brand.
              </span>
              <span className="block animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                Your Story.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mb-6 px-2 text-[0.95rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400"
            >
              Take full control of your narrative. Manage your digital presence,
              track audience engagement, and scale your growth intuitively—all
              from one powerful dashboard designed for modern creators.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex w-full flex-col items-center justify-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex w-full max-w-[280px] items-center justify-center gap-2 rounded-[4px] bg-gradient-to-r from-[#D4AF37] to-[#b38728] px-7 py-3.5 text-sm font-bold text-white shadow-md dark:from-[#D4AF37] dark:to-[#f9d08b] dark:text-gray-900"
              >
                Explore Dashboard
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex w-full max-w-[280px] items-center justify-center gap-2 rounded-[4px] border border-white/40 bg-white/30 px-7 py-3.5 text-sm font-bold text-gray-900 shadow-[0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all hover:border-[#D4AF37]/50 hover:bg-white/50 dark:border-white/10 dark:bg-black/30 dark:text-white dark:hover:border-[#D4AF37]/50 dark:hover:bg-white/10"
              >
                View Live Demo
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center justify-center gap-8 border-t border-gray-200/60 pt-8 dark:border-gray-800/60"
            >
              <div className="flex flex-col items-center">
                <h4 className="text-2xl font-black text-gray-900 dark:text-white">
                  98%
                </h4>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Client Retention
                </p>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-gray-800" />
              <div className="flex flex-col items-center">
                <h4 className="text-2xl font-black text-gray-900 dark:text-white">
                  2.4x
                </h4>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Growth Rate
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative flex w-full items-center justify-center mt-8 pb-8">
            <motion.div
              variants={floatAnimation}
              initial="hidden"
              whileInView={["show", "animate"]}
              viewport={{ once: false, margin: "-50px" }}
              className="relative flex h-[450px] w-full max-w-[320px] items-center justify-center"
            >
              {items.map((item) => {
                let transformClasses = "";
                let zIndexClass = "";
                let opacityClass = "";

                if (item.position === 0) {
                  transformClasses = "translate-x-0 scale-[1.0]";
                  zIndexClass = "z-30";
                  opacityClass = "opacity-100";
                } else if (item.position === -1) {
                  transformClasses = "-translate-x-[40%] scale-[0.8]";
                  zIndexClass = "z-20";
                  opacityClass = "opacity-60";
                } else if (item.position === 1) {
                  transformClasses = "translate-x-[40%] scale-[0.8]";
                  zIndexClass = "z-20";
                  opacityClass = "opacity-60";
                } else if (item.position === -2) {
                  transformClasses = "-translate-x-[75%] scale-[0.6]";
                  zIndexClass = "z-10";
                  opacityClass = "opacity-30";
                } else if (item.position === 2) {
                  transformClasses = "translate-x-[75%] scale-[0.6]";
                  zIndexClass = "z-10";
                  opacityClass = "opacity-30";
                }

                return (
                  <div
                    key={item.id}
                    className={`absolute aspect-[9/16] w-[220px] overflow-hidden rounded-xl border border-white/40 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-500 dark:border-white/20 dark:bg-black/40 ${transformClasses} ${zIndexClass} ${opacityClass}`}
                  >
                    {playingVideoId === item.id ? (
                      <div className="relative h-full w-full bg-black">
                        <iframe
                          src={`${getYouTubeEmbedUrl(item.videoUrl)}?autoplay=1&mute=0`}
                          allow="autoplay; fullscreen"
                          className="h-full w-full border-none"
                          title={item.title}
                        />
                        <button
                          onClick={() => {
                            setPlayingVideoId(null);
                            setIsCarouselPlaying(true);
                          }}
                          className="absolute right-2 top-2 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-red-500"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <X size={16} />
                          </motion.div>
                        </button>
                      </div>
                    ) : (
                      <>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover opacity-90"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 pointer-events-none" />

                        <div className="absolute inset-x-0 top-0 flex flex-col items-start p-4 pointer-events-none">
                          <h3
                            className={`font-bold text-white leading-tight ${item.active ? "text-lg" : "text-sm"}`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`mt-1 text-gray-200 ${item.active ? "text-xs font-medium" : "text-[10px]"}`}
                          >
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => {
                              if (item.active) {
                                setPlayingVideoId(item.id);
                                setIsCarouselPlaying(false);
                              }
                            }}
                            className={`flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-transform hover:scale-110 ${
                              item.active
                                ? "h-14 w-14 cursor-pointer"
                                : "h-10 w-10 cursor-default"
                            }`}
                          >
                            <motion.div
                              whileHover={{ scale: 1.15 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              <Play
                                className="ml-1 fill-white text-white"
                                size={item.active ? 24 : 16}
                              />
                            </motion.div>
                          </button>
                        </div>

                        <div className="absolute bottom-0 left-0 flex items-center gap-2 p-4 pointer-events-none">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 15 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                              className="cursor-pointer pointer-events-auto"
                            >
                              <Play
                                size={10}
                                className="ml-0.5 fill-white text-white"
                              />
                            </motion.div>
                          </div>
                          <span className="text-xs font-bold text-white drop-shadow-md">
                            {item.views}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </motion.div>

            <div className="absolute bottom-0 right-4 z-40 flex items-center justify-center">
              <button
                onClick={() => setIsCarouselPlaying(!isCarouselPlaying)}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/50 shadow-lg backdrop-blur-md transition-all hover:bg-white/70 hover:shadow-xl dark:border-white/10 dark:bg-black/40 dark:hover:bg-black/60"
              >
                {isCarouselPlaying ? (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Pause
                      size={16}
                      className="text-gray-900 dark:text-white"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Play
                      size={16}
                      className="ml-0.5 text-gray-900 dark:text-white"
                    />
                  </motion.div>
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
