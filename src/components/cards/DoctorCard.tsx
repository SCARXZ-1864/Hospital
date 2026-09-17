import { Link } from "react-router";
import { motion } from "motion/react";
import type { Doctor } from "@/data/doctors";
import { doctorImage } from "@/lib/images";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Link to={`/doctors/${doctor.slug}`} className="group block h-full">
      <motion.div
        className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-900/5"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          layoutId={`doctor-photo-${doctor.slug}`}
          className="aspect-[4/5] shrink-0 overflow-hidden bg-primary-100"
        >
          <img
            src={doctorImage(doctor.photo)}
            alt={doctor.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
        <div className="flex flex-1 flex-col p-5">
          <motion.h3
            layoutId={`doctor-name-${doctor.slug}`}
            className="line-clamp-1 font-serif text-lg text-ink-900"
          >
            {doctor.name}
          </motion.h3>
          <p className="mt-1 line-clamp-1 text-sm text-ink-500">{doctor.qualifications}</p>
          <p className="mt-2 line-clamp-2 text-sm font-medium text-primary-600">
            {doctor.specialty}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
