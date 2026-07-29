import { motion, type Variants } from "framer-motion";
import {
    ArrowRight,
    Pause,
    Play,
    Sparkles,
    X,
} from "lucide-react";
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
    hidden: { opacity: 0, x: 20 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    animate: {
        y: [-8, 8, -8],
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
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

export default function DashboardShowcase() {
    const [items, setItems] = useState(carouselItems);
    const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);
    const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

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
                    active: index === 2
                }));
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [isCarouselPlaying, playingVideoId]);
    return (
        <section className="relative w-full overflow-hidden bg-gray-50 py-12 transition-colors duration-700 dark:bg-[#0a1128]">
            <motion.div
                variants={pulseGlow}
                animate="animate"
                className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent dark:from-[#D4AF37]/15"
            />
            <motion.div
                variants={pulseGlow}
                animate="animate"
                className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent dark:from-[#D4AF37]/10"
            />

            <Container className="relative z-10 mx-auto max-w-7xl px-4 xl:px-0">
                <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex w-full flex-col justify-center lg:w-[45%]"
                    >
                        <motion.div variants={fadeInUp}>
                            <div className="mb-6 flex w-fit items-center gap-2 rounded-[2px] border border-[#D4AF37]/20 bg-white/60 px-4 py-1.5 shadow-sm backdrop-blur-md dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/5">
                                <Sparkles
                                    size={14}
                                    className="text-[#D4AF37] dark:text-[#D4AF37]"
                                />
                                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
                                    Franchise Growth Engine
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeInUp}
                            className="mb-6 text-[3.5rem] font-black leading-[1.1] tracking-tight xl:text-[4.5rem]"
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
                            className="mb-8 text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400"
                        >
                            Take full control of your franchise narrative. Showcase your brand's unique value, attract qualified investors, and scale your footprint intuitively—all from one powerful platform designed for modern franchisors.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-2 rounded-[4px] bg-gradient-to-r from-[#D4AF37] to-[#b38728] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(178,127,28,0.2)] transition-all hover:shadow-[0_0_30px_rgba(178,127,28,0.4)] dark:from-[#D4AF37] dark:to-[#f9d08b] dark:text-gray-900 dark:shadow-[0_8px_20px_rgba(246,178,59,0.2)] dark:hover:shadow-[0_0_30px_rgba(246,178,59,0.4)]"
                            >
                                Explore Platform
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 rounded-[4px] border border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-gray-900 shadow-sm transition-all hover:border-[#D4AF37]/50 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-[#D4AF37]/50 dark:hover:bg-gray-800"
                            >
                                View Live Demo
                            </motion.button>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 flex items-center gap-8 border-t border-gray-200/60 pt-8 dark:border-gray-800/60"
                        >
                            <motion.div whileHover={{ y: -2 }} className="cursor-default">
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white">
                                    98%
                                </h4>
                                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Investor Retention
                                </p>
                            </motion.div>
                            <div className="h-10 w-px bg-gray-200 dark:bg-gray-800" />
                            <motion.div whileHover={{ y: -2 }} className="cursor-default">
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white">
                                    2.4x
                                </h4>
                                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Expansion Rate
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <div className="relative flex w-full items-center justify-center lg:w-[55%]">
                        <motion.div
                            variants={floatAnimation}
                            initial="hidden"
                            whileInView={["show", "animate"]}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative flex h-[500px] w-full max-w-[600px] items-center justify-center lg:translate-x-4 xl:translate-x-8"
                        >
                            {items.map((item) => {
                                let transformClasses = "";
                                let zIndexClass = "";
                                let opacityClass = "";

                                if (item.position === 0) {
                                    transformClasses = "translate-x-0 scale-[1.1]";
                                    zIndexClass = "z-30";
                                    opacityClass = "opacity-100";
                                } else if (item.position === -1) {
                                    transformClasses = "-translate-x-[50%] scale-[0.85]";
                                    zIndexClass = "z-20";
                                    opacityClass = "opacity-60";
                                } else if (item.position === 1) {
                                    transformClasses = "translate-x-[50%] scale-[0.85]";
                                    zIndexClass = "z-20";
                                    opacityClass = "opacity-60";
                                } else if (item.position === -2) {
                                    transformClasses = "-translate-x-[85%] scale-[0.65]";
                                    zIndexClass = "z-10";
                                    opacityClass = "opacity-30";
                                } else if (item.position === 2) {
                                    transformClasses = "translate-x-[85%] scale-[0.65]";
                                    zIndexClass = "z-10";
                                    opacityClass = "opacity-30";
                                }

                                return (
                                    <div
                                        key={item.id}
                                        className={`absolute aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[4px] border border-gray-200/20 bg-gray-900 shadow-2xl transition-all duration-500 dark:border-gray-800/80 ${transformClasses} ${zIndexClass} ${opacityClass}`}
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
                                                    <X size={16} />
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

                                                <div className="absolute inset-x-0 top-0 flex flex-col items-start p-5 pointer-events-none">
                                                    <h3 className={`font-bold text-white leading-tight ${item.active ? "text-xl" : "text-base"}`}>
                                                        {item.title}
                                                    </h3>
                                                    <p className={`mt-1 text-gray-200 ${item.active ? "text-sm font-medium" : "text-xs"}`}>
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
                                                        className={`flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-transform hover:scale-110 ${item.active ? "h-16 w-16 cursor-pointer" : "h-12 w-12 cursor-default"
                                                            }`}
                                                    >
                                                        <Play
                                                            className="ml-1 fill-white text-white"
                                                            size={item.active ? 28 : 20}
                                                        />
                                                    </button>
                                                </div>

                                                <div className="absolute bottom-0 left-0 flex items-center gap-2 p-5 pointer-events-none">
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                                                        <Play size={14} className="ml-0.5 fill-white text-white" />
                                                    </div>
                                                    <span className="text-sm font-bold text-white drop-shadow-md">
                                                        {item.views}
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </motion.div>

                        <div className="absolute bottom-0 right-4 z-40 flex items-center justify-center lg:bottom-4 lg:right-4">
                            <button
                                onClick={() => setIsCarouselPlaying(!isCarouselPlaying)}
                                className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg backdrop-blur-md transition-all hover:bg-gray-50 hover:shadow-xl dark:border-gray-800/50 dark:bg-black/60 dark:hover:bg-black"
                            >
                                {isCarouselPlaying ? (
                                    <Pause size={18} className="text-gray-900 transition-transform group-hover:scale-110 dark:text-white" />
                                ) : (
                                    <Play size={18} className="ml-0.5 text-gray-900 transition-transform group-hover:scale-110 dark:text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
