import { motion } from "framer-motion";
import { heroGalleryData } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

export default function HeroGalleryDesktop() {
  return (
    <section className="w-full bg-[#0a1128] py-0">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-6 gap-2"
        >
          {heroGalleryData.images.map((image, idx) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-xs font-semibold">
                  {image.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
