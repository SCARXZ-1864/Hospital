import { site, founders } from "@/data/site";
import { founderImage } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";

export function AboutFounders() {
  return (
    <section id="about" className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            About Us
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            {site.foundedYear} years of trusted, compassionate care
          </h2>
          <p className="mt-6 text-ink-600">{site.aboutIntro}</p>
          <p className="mt-4 text-ink-500">{site.aboutBody}</p>
          <p className="mt-4 text-ink-500">{site.qualityBody}</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {founders.map((founder, i) => (
            <Reveal key={founder.slug} delay={i * 0.1} className={i % 2 === 1 ? "sm:mt-10" : ""}>
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-900/5">
                <div className="aspect-[4/5] overflow-hidden bg-primary-100">
                  <img
                    src={founderImage(founder.photo)}
                    alt={founder.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                    {founder.role}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-ink-900">{founder.name}</h3>
                  <p className="mt-3 text-sm text-ink-500">{founder.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
