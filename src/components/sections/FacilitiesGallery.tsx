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
        </Reveal>

        <Reveal
          stagger
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {facilities.map((facility, i) => (
            <Reveal.Item
              key={facility.slug}
              className={`group relative overflow-hidden rounded-3xl ${
                i === 0 ? "sm:col-span-2 sm:aspect-[16/9] lg:col-span-1 lg:aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={hospitalImage(facility.image)}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-lg text-cream-50">{facility.name}</h3>
                <p className="mt-1 text-sm text-cream-100/80">{facility.description}</p>
              </div>
            </Reveal.Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
