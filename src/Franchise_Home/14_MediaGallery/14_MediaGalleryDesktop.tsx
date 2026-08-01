import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { mediaGalleryData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import {
  Play,
  FileText,
  File,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export default function MediaGalleryDesktop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const videoScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (videoScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = videoScrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  const imageScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeftImages, setCanScrollLeftImages] = useState(false);
  const [canScrollRightImages, setCanScrollRightImages] = useState(false);

  const checkScrollImages = () => {
    if (imageScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = imageScrollRef.current;
      setCanScrollLeftImages(scrollLeft > 0);
      setCanScrollRightImages(
        Math.ceil(scrollLeft + clientWidth) < scrollWidth,
      );
    }
  };

  const scrollLeft = () => {
    if (videoScrollRef.current) {
      videoScrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (videoScrollRef.current) {
      videoScrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const scrollLeftImages = () => {
    if (imageScrollRef.current) {
      imageScrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRightImages = () => {
    if (imageScrollRef.current) {
      imageScrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const filteredItems = mediaGalleryData.items.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const images = filteredItems.filter((item) => item.format === "image");
  const videos = filteredItems.filter((item) => item.format === "video");
  const documents = filteredItems.filter((item) => item.format === "document");

  useEffect(() => {
    setTimeout(() => {
      checkScroll();
      checkScrollImages();
    }, 100);
    const handleResize = () => {
      checkScroll();
      checkScrollImages();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeCategory, videos.length, images.length]);

  return (
    <section className="w-full px-6 py-16 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-[4px] blur-[100px] animate-pulse-soft" />
        <div
          className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-[4px] blur-[100px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
        <SectionHeader
          overline={mediaGalleryData.sectionLabel}
          align="center"
        />

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 flex-wrap justify-center w-full max-w-[900px]">
            {mediaGalleryData.categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={clsx(
                    "px-5 py-2 rounded-[4px] text-xs font-bold transition-all duration-300",
                    isActive
                      ? "bg-[#0b162c] text-white shadow-md shadow-[#0b162c]/20"
                      : "bg-white dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700 hover:border-gray-300 hover:text-gray-700 hover:shadow-sm",
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={stagger}
            className="w-full mt-4 flex flex-col gap-12"
          >
            {filteredItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <File size={48} className="mb-4 opacity-20" />
                <p>No media found for this category.</p>
              </div>
            ) : (
              <>
                {images.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {activeCategory === "All" && (
                      <h3 className="text-xl font-bold text-[#0b162c] dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                        Photos
                      </h3>
                    )}
                    <div className="relative group/carousel-images w-full">
                      <div
                        ref={imageScrollRef}
                        onScroll={checkScrollImages}
                        className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide snap-x snap-mandatory focus:outline-none"
                        tabIndex={0}
                      >
                        {images.map((item) => (
                          <motion.div
                            key={item.id}
                            variants={fadeInUp}
                            className="relative group overflow-hidden rounded-2xl w-[280px] aspect-square shadow-sm cursor-pointer border border-gray-100 shrink-0 snap-start"
                          >
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c]/90 via-[#0b162c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <span className="text-[10px] font-bold text-[#c69a54] uppercase tracking-widest block mb-1">
                                {item.category}
                              </span>
                              <h4 className="text-white text-sm font-semibold">
                                {item.title}
                              </h4>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Navigation Arrows */}
                      {canScrollLeftImages && (
                        <button
                          onClick={scrollLeftImages}
                          className="absolute left-[-20px] top-[calc(50%-2rem)] z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-[#c69a54] dark:hover:text-[#c69a54] transition-all hidden md:flex items-center justify-center hover:scale-110"
                          aria-label="Scroll Left Photos"
                        >
                          <ChevronLeft size={24} />
                        </button>
                      )}
                      {canScrollRightImages && (
                        <button
                          onClick={scrollRightImages}
                          className="absolute right-[-20px] top-[calc(50%-2rem)] z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-[#c69a54] dark:hover:text-[#c69a54] transition-all hidden md:flex items-center justify-center hover:scale-110"
                          aria-label="Scroll Right Photos"
                        >
                          <ChevronRight size={24} />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {videos.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {activeCategory === "All" && (
                      <h3 className="text-xl font-bold text-[#0b162c] dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                        Videos & Shorts
                      </h3>
                    )}
                    <div className="relative group/carousel w-full">
                      <div
                        ref={videoScrollRef}
                        onScroll={checkScroll}
                        className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide snap-x snap-mandatory focus:outline-none"
                        tabIndex={0}
                      >
                        {videos.map((item) => (
                          <motion.div
                            key={item.id}
                            variants={fadeInUp}
                            className="relative group overflow-hidden rounded-2xl w-[280px] aspect-[9/16] shadow-sm cursor-pointer border border-gray-100 shrink-0 snap-start"
                          >
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Play
                                  className="text-white ml-1 w-6 h-6"
                                  fill="currentColor"
                                />
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                              <span className="text-[10px] font-bold text-[#c69a54] uppercase tracking-widest block mb-1">
                                {item.category}
                              </span>
                              <h4 className="text-white text-base font-semibold leading-tight">
                                {item.title}
                              </h4>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Navigation Arrows */}
                      {canScrollLeft && (
                        <button
                          onClick={scrollLeft}
                          className="absolute left-[-20px] top-[calc(50%-2rem)] z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-[#c69a54] dark:hover:text-[#c69a54] transition-all hidden md:flex items-center justify-center hover:scale-110"
                          aria-label="Scroll Left"
                        >
                          <ChevronLeft size={24} />
                        </button>
                      )}
                      {canScrollRight && (
                        <button
                          onClick={scrollRight}
                          className="absolute right-[-20px] top-[calc(50%-2rem)] z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-[#c69a54] dark:hover:text-[#c69a54] transition-all hidden md:flex items-center justify-center hover:scale-110"
                          aria-label="Scroll Right"
                        >
                          <ChevronRight size={24} />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {documents.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {activeCategory === "All" && (
                      <h3 className="text-xl font-bold text-[#0b162c] dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                        Documents
                      </h3>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {documents.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col p-5 bg-gradient-to-r from-[#0b162c] to-[#122345] dark:from-gray-800 dark:to-gray-900 rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#c69a54]/20 hover:border-[#c69a54]/60 hover:shadow-[0_12px_40px_rgba(198,154,84,0.15)] transition-all duration-300 group relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="w-12 h-12 rounded-[4px] bg-gradient-to-br from-[#d4af37] to-[#aa8323] flex items-center justify-center shrink-0 shadow-lg">
                              <FileText
                                size={22}
                                className="text-white drop-shadow-md"
                              />
                            </div>
                            <h4 className="text-white font-bold text-[15px] tracking-wide flex-1 leading-snug group-hover:text-[#f4d068] transition-colors duration-300">
                              {item.title}
                            </h4>
                          </div>
                          <div className="mt-auto flex justify-end relative z-10">
                            <a
                              href={item.src}
                              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-[#c69a54] text-white rounded-[4px] text-xs font-bold transition-colors"
                              onClick={(e) => e.preventDefault()}
                            >
                              <Download size={14} />
                              Download
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
