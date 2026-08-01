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
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
  exit: { opacity: 0, y: -15, transition: { duration: 0.2 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export default function MediaGalleryMobile() {
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
      videoScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (videoScrollRef.current) {
      videoScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollLeftImages = () => {
    if (imageScrollRef.current) {
      imageScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRightImages = () => {
    if (imageScrollRef.current) {
      imageScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
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
    <section className="w-full bg-gradient-to-tr from-white via-gray-50 to-[#f8f9fa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[-10%] w-[300px] h-[300px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[80px] animate-pulse-soft" />
        <div
          className="absolute bottom-[5%] right-[-10%] w-[300px] h-[300px] bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-full blur-[80px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-2">
        <SectionHeader
          overline={mediaGalleryData.sectionLabel}
          align="center"
        />

        <div className="flex flex-col gap-4">
          <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 w-max px-1">
              {mediaGalleryData.categories.map((cat) => {
                const isActive = cat === activeCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={clsx(
                      "px-4 py-2 rounded-[4px] text-[12px] font-bold transition-all duration-300 border",
                      isActive
                        ? "bg-[#0b162c] text-white border-[#0b162c] shadow-md shadow-[#0b162c]/20"
                        : "bg-white dark:bg-gray-800 text-gray-500 border-gray-200 dark:border-gray-700 hover:border-gray-300",
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={stagger}
            className="w-full mt-2 flex flex-col gap-2"
          >
            {filteredItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <File size={40} className="mb-3 opacity-20" />
                <p className="text-sm">No media found.</p>
              </div>
            ) : (
              <>
                {images.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {activeCategory === "All" && (
                      <h3 className="text-[15px] font-serif font-bold text-[#0b162c] dark:text-white border-b border-gray-200 dark:border-gray-700 pb-1.5">
                        Photos
                      </h3>
                    )}
                    <div className="relative group/carousel-images w-full">
                      <div
                        ref={imageScrollRef}
                        onScroll={checkScrollImages}
                        className="flex gap-3 overflow-x-auto pb-4 pt-1 scrollbar-hide snap-x snap-mandatory focus:outline-none"
                        tabIndex={0}
                      >
                        {images.map((item) => (
                          <motion.div
                            key={item.id}
                            variants={fadeInUp}
                            className="relative rounded-xl w-[160px] aspect-square shadow-sm overflow-hidden border border-gray-100 shrink-0 snap-start"
                          >
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c]/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <span className="text-[8px] font-bold text-[#c69a54] uppercase tracking-widest block mb-0.5">
                                {item.category}
                              </span>
                              <h4 className="text-white text-[11px] font-semibold leading-tight line-clamp-2">
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
                          className="absolute left-[-10px] top-[calc(50%-1.5rem)] z-10 p-1.5 rounded-full bg-white dark:bg-gray-800 shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-[#c69a54] dark:hover:text-[#c69a54] transition-all flex items-center justify-center active:scale-95"
                          aria-label="Scroll Left Photos"
                        >
                          <ChevronLeft size={18} />
                        </button>
                      )}
                      {canScrollRightImages && (
                        <button
                          onClick={scrollRightImages}
                          className="absolute right-[-10px] top-[calc(50%-1.5rem)] z-10 p-1.5 rounded-full bg-white dark:bg-gray-800 shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-[#c69a54] dark:hover:text-[#c69a54] transition-all flex items-center justify-center active:scale-95"
                          aria-label="Scroll Right Photos"
                        >
                          <ChevronRight size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {videos.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {activeCategory === "All" && (
                      <h3 className="text-[15px] font-serif font-bold text-[#0b162c] dark:text-white border-b border-gray-200 dark:border-gray-700 pb-1.5">
                        Videos & Shorts
                      </h3>
                    )}
                    <div className="relative group/carousel w-full">
                      <div
                        ref={videoScrollRef}
                        onScroll={checkScroll}
                        className="flex gap-3 overflow-x-auto pb-4 pt-1 scrollbar-hide snap-x snap-mandatory focus:outline-none"
                        tabIndex={0}
                      >
                        {videos.map((item) => (
                          <motion.div
                            key={item.id}
                            variants={fadeInUp}
                            className="relative rounded-xl w-[160px] aspect-[9/16] shadow-sm overflow-hidden border border-gray-100 shrink-0 snap-start"
                          >
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md">
                                <Play
                                  className="text-white ml-0.5 w-4 h-4"
                                  fill="currentColor"
                                />
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                              <span className="text-[8px] font-bold text-[#c69a54] uppercase tracking-widest block mb-0.5">
                                {item.category}
                              </span>
                              <h4 className="text-white text-[11px] font-semibold leading-tight">
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
                          className="absolute left-[-10px] top-[calc(50%-1.5rem)] z-10 p-1.5 rounded-full bg-white dark:bg-gray-800 shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-[#c69a54] dark:hover:text-[#c69a54] transition-all flex items-center justify-center active:scale-95"
                          aria-label="Scroll Left"
                        >
                          <ChevronLeft size={18} />
                        </button>
                      )}
                      {canScrollRight && (
                        <button
                          onClick={scrollRight}
                          className="absolute right-[-10px] top-[calc(50%-1.5rem)] z-10 p-1.5 rounded-full bg-white dark:bg-gray-800 shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-[#c69a54] dark:hover:text-[#c69a54] transition-all flex items-center justify-center active:scale-95"
                          aria-label="Scroll Right"
                        >
                          <ChevronRight size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {documents.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {activeCategory === "All" && (
                      <h3 className="text-[15px] font-serif font-bold text-[#0b162c] dark:text-white border-b border-gray-200 dark:border-gray-700 pb-1.5">
                        Documents
                      </h3>
                    )}
                    <div className="flex flex-col gap-3">
                      {documents.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col p-4 bg-gradient-to-r from-[#0b162c] to-[#122345] dark:from-gray-800 dark:to-gray-900 rounded-[4px] shadow-md border border-[#c69a54]/20 hover:border-[#c69a54]/60 transition-all group relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="flex items-center gap-3.5 mb-3 relative z-10">
                            <div className="w-10 h-10 rounded-[4px] bg-gradient-to-br from-[#d4af37] to-[#aa8323] flex items-center justify-center shrink-0 shadow-md">
                              <FileText
                                size={18}
                                className="text-white drop-shadow-sm"
                              />
                            </div>
                            <h4 className="text-white font-bold text-[14px] leading-snug flex-1 pr-2">
                              {item.title}
                            </h4>
                          </div>
                          <div className="mt-auto flex justify-end relative z-10">
                            <a
                              href={item.src}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-[#c69a54] text-white rounded-[4px] text-[11px] font-bold transition-colors"
                              onClick={(e) => e.preventDefault()}
                            >
                              <Download size={12} />
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
