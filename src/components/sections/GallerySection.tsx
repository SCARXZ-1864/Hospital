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
          <div className="relative h-[320px] w-full max-w-[260px] sm:h-[360px] sm:max-w-[300px]">
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
  // Deeper cards (higher index) travel less — the parallax that makes the
  // pile read as a fan rather than a single sliding block.
  const depth = (index + 1) / total;
  const direction = index % 2 === 0 ? 1 : -1;

  const x = useTransform(progress, [0, 1], [0, direction * depth * 130]);
  const y = useTransform(progress, [0, 1], [0, -depth * 50]);
  const rotate = useTransform(
    progress,
    [0, 1],
    [(index - total / 2) * 1.5, direction * (6 + depth * 8)],
  );

  const baseStyle = {
    zIndex: total - index,
    left: index * 6,
    top: index * -4,
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
