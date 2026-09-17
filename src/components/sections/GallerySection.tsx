import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { galleryImages } from "@/data/facilities";
import { hospitalImage } from "@/lib/images";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

/**
 * Scroll-driven overlapping photo stack, inspired by componentry.dev's
 * "Collection Surfer": cards sit fanned in a diagonal pile and drift apart
 * — deeper cards moving less — as the visitor scrolls the section, instead
 * of reacting to hover or drag.
 */
export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="gallery" ref={sectionRef} className="relative h-[280vh] bg-primary-950">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-24 md:pt-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">
            A Look Inside
          </p>
          <h2 className="mt-3 max-w-xl text-4xl text-cream-50 md:text-5xl">
            Harneshwar, through the years
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center overflow-hidden">
          <div className="relative h-[280px] w-[200px] sm:h-[320px] sm:w-[240px]">
            {galleryImages.map((image, i) => (
              <GalleryCard
                key={image}
                image={image}
                index={i}
                total={galleryImages.length}
                progress={scrollYProgress}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 pb-10 text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream-100/50">
            Scroll to explore ({galleryImages.length})
          </p>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  image,
  index,
  total,
  progress,
  reduceMotion,
}: {
  image: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduceMotion: boolean;
}) {
  // Index position relative to the centre card — drives how far each card
  // fans out left/right so the full spread is wide enough to actually
  // separate and reveal every photo, not just drift a few px apart.
  const centered = index - (total - 1) / 2;

  const x = useTransform(progress, [0, 1], [0, centered * 118]);
  const y = useTransform(progress, [0, 1], [0, Math.abs(centered) * 20 - 55]);
  const rotate = useTransform(progress, [0, 1], [centered * 1, centered * 6]);

  const baseStyle = {
    zIndex: total - Math.abs(centered),
    left: index * 5,
    top: index * -3,
  };

  if (reduceMotion) {
    return (
      <div
        className="absolute aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        style={baseStyle}
      >
        <img src={hospitalImage(image)} alt="" className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <motion.div
      className="absolute aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
      style={{ ...baseStyle, x, y, rotate }}
    >
      <img src={hospitalImage(image)} alt="" className="h-full w-full object-cover" />
    </motion.div>
  );
}
