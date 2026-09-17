import { Link } from "react-router";
import { motion } from "motion/react";
import { facilities } from "@/data/facilities";
import { hospitalImage } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";

export function FacilitiesGallery() {
  return (
    <section id="facilities" className="bg-cream-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            Our Facilities
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl">Built for patient safety and comfort</h2>
          <p className="mt-4 text-ink-500">Click a facility for the full picture.</p>
        </Reveal>

        <Reveal
          stagger
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {facilities.map((facility, i) => (
            <Reveal.Item
              key={facility.slug}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <Link
                to={`/facilities/${facility.slug}`}
                className={`group relative block overflow-hidden rounded-3xl ${
                  i === 0 ? "sm:aspect-[16/9] lg:aspect-square" : "aspect-square"
                }`}
              >
                <motion.div
                  layoutId={`facility-photo-${facility.slug}`}
                  className="absolute inset-0"
                >
                  <img
                    src={hospitalImage(facility.image)}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <motion.h3
                    layoutId={`facility-name-${facility.slug}`}
                    className="font-serif text-lg text-cream-50"
                  >
                    {facility.name}
                  </motion.h3>
                  <p className="mt-1 text-sm text-cream-100/80">{facility.description}</p>
                </div>
              </Link>
            </Reveal.Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
