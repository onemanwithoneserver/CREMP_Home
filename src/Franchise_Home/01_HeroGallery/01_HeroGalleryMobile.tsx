import { motion } from "framer-motion";
import { heroGalleryData } from "./data";

export default function HeroGalleryMobile() {
  return (
    <section className="w-full bg-[#0a1128] py-0">
      <div className="flex gap-1.5 overflow-x-auto px-3 pb-2 scrollbar-hide">
        {heroGalleryData.images.map((image, idx) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.08 }}
            className="relative shrink-0 w-[140px] aspect-[4/3] rounded-lg overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-1.5 left-2 text-white text-[9px] font-semibold">
              {image.caption}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
