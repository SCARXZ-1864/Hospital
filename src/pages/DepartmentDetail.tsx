import { Link, Navigate, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Phone } from "lucide-react";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { site } from "@/data/site";
import { hospitalImage, doctorImage } from "@/lib/images";
import { PageTransition } from "@/components/motion/PageTransition";

export default function DepartmentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const department = departments.find((d) => d.slug === slug);

  if (!department) return <Navigate to="/404" replace />;

  const teamDoctors = doctors.filter((d) => d.departmentSlug === department.slug);

  return (
    <article className="min-h-screen bg-cream-50 pt-24">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          to="/#departments"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft size={16} />
          Back to all departments
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <PageTransition>
            <motion.h1 layoutId={`dept-name-${department.slug}`} className="text-4xl md:text-5xl">
              {department.name}
            </motion.h1>
            <p className="mt-6 text-lg text-ink-500">{department.description}</p>

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

            {teamDoctors.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl text-ink-900">Specialists in this department</h2>
                <div className="mt-4 flex flex-wrap gap-4">
                  {teamDoctors.map((doctor) => (
                    <Link
                      key={doctor.slug}
                      to={`/doctors/${doctor.slug}`}
                      className="flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-sm ring-1 ring-ink-900/5 transition-shadow hover:shadow-md"
                    >
                      <img
                        src={doctorImage(doctor.photo)}
                        alt={doctor.name}
                        className="h-12 w-12 rounded-full object-cover object-top"
                      />
                      <div>
                        <p className="text-sm font-medium text-ink-900">{doctor.name}</p>
                        <p className="text-xs text-ink-500">{doctor.specialty}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </PageTransition>

          <motion.div
            layoutId={`dept-photo-${department.slug}`}
            className="aspect-[4/3] overflow-hidden rounded-3xl bg-primary-100 shadow-lg md:aspect-auto md:h-full"
          >
            <img
              src={hospitalImage(department.image)}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </article>
  );
}
