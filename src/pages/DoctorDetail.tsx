import { Link, Navigate, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Phone } from "lucide-react";
import { doctors } from "@/data/doctors";
import { departments } from "@/data/departments";
import { site } from "@/data/site";
import { doctorImage } from "@/lib/images";
import { PageTransition } from "@/components/motion/PageTransition";

export default function DoctorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) return <Navigate to="/404" replace />;

  const department = departments.find((d) => d.slug === doctor.departmentSlug);

  return (
    <article className="min-h-screen bg-cream-50 pt-24">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          to="/#doctors"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft size={16} />
          Back to all doctors
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[320px_1fr]">
          <motion.div
            layoutId={`doctor-photo-${doctor.slug}`}
            className="aspect-[4/5] overflow-hidden rounded-3xl bg-primary-100 shadow-lg"
          >
            <img
              src={doctorImage(doctor.photo)}
              alt={doctor.name}
              className="h-full w-full object-cover object-top"
            />
          </motion.div>

          <PageTransition>
            <motion.h1 layoutId={`doctor-name-${doctor.slug}`} className="text-4xl md:text-5xl">
              {doctor.name}
            </motion.h1>
            <p className="mt-2 text-lg text-ink-500">{doctor.qualifications}</p>
            <p className="mt-4 text-xl font-medium text-primary-600">{doctor.specialty}</p>

            {department && (
              <p className="mt-4 text-sm text-ink-500">
                Part of our{" "}
                <Link
                  to={`/departments/${department.slug}`}
                  className="font-medium text-primary-600 underline decoration-primary-300 underline-offset-4 hover:text-primary-700"
                >
                  {department.name}
                </Link>{" "}
                department.
              </p>
            )}

            {!doctor.hasRealPhoto && (
              <p className="mt-4 text-xs text-ink-300">
                Photo placeholder — swap in {doctor.name}'s headshot when available.
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${site.phones[0]}`}
                className="flex items-center gap-2 rounded-full bg-primary-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
              >
                <Phone size={16} />
                Call to Book
              </a>
              <Link
                to="/#appointment"
                className="rounded-full border border-primary-800/20 px-6 py-3.5 text-sm font-semibold text-primary-800 transition-colors hover:bg-primary-800/5"
              >
                Request Appointment
              </Link>
            </div>
          </PageTransition>
        </div>
      </div>
    </article>
  );
}
