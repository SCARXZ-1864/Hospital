import { departments } from "@/data/departments";
import { OrbitCardStack } from "@/components/cards/OrbitCardStack";
import { DepartmentCard } from "@/components/cards/DepartmentCard";
import { Reveal } from "@/components/motion/Reveal";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function DepartmentsSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section id="departments" className="bg-cream-50 pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            Our Departments
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl">Specialized care, all in one place</h2>
          <p className="mt-4 text-ink-500">
            Hover a card to explore — click through for the full picture of how each department
            cares for you.
          </p>
        </Reveal>

        <div className="mt-16">
          {isDesktop ? (
            <OrbitCardStack items={departments} />
          ) : (
            <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4">
              {departments.map((dept) => (
                <DepartmentCard key={dept.slug} department={dept} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
