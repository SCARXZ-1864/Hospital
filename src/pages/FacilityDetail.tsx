import { Link, Navigate, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Phone } from "lucide-react";
import { facilities } from "@/data/facilities";
import { site } from "@/data/site";
import { hospitalImage } from "@/lib/images";
import { PageTransition } from "@/components/motion/PageTransition";

export default function FacilityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const facility = facilities.find((f) => f.slug === slug);

  if (!facility) return <Navigate to="/404" replace />;

  return (
    <article className="min-h-screen bg-cream-50 pt-24">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          to="/#facilities"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft size={16} />
          Back to all facilities
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <PageTransition>
            <motion.h1
              layoutId={`facility-name-${facility.slug}`}
              className="text-4xl md:text-5xl"
            >
              {facility.name}
            </motion.h1>
            <p className="mt-6 text-lg text-ink-500">{facility.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${site.phones[0]}`}
                className="flex items-center gap-2 rounded-full bg-primary-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
              >
                <Phone size={16} />
                Call to Ask
              </a>
              <Link
                to="/#appointment"
                className="rounded-full border border-primary-800/20 px-6 py-3.5 text-sm font-semibold text-primary-800 transition-colors hover:bg-primary-800/5"
              >
                Request Appointment
              </Link>
            </div>
          </PageTransition>

          <motion.div
            layoutId={`facility-photo-${facility.slug}`}
            className="aspect-[4/3] overflow-hidden rounded-3xl bg-primary-100 shadow-lg md:aspect-auto md:h-full"
          >
            <img
              src={hospitalImage(facility.image)}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </article>
  );
}
