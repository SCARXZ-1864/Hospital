import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { Reveal } from "@/components/motion/Reveal";

export function DoctorsSection() {
  return (
    <section id="doctors" className="bg-primary-950 py-24 text-cream-50 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">
            Our Doctors
          </p>
          <h2 className="mt-3 text-4xl text-cream-50 md:text-5xl">
            Meet the team behind your care
          </h2>
          <p className="mt-4 text-cream-100/70">
            Board-certified specialists across {new Set(doctors.map((d) => d.specialty)).size}+
            areas of medicine.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <Reveal.Item key={doctor.slug}>
              <DoctorCard doctor={doctor} />
            </Reveal.Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
