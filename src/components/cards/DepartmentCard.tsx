import { Link } from "react-router";
import { motion } from "motion/react";
import type { Department } from "@/data/departments";
import { hospitalImage } from "@/lib/images";

/** Static card used as the touch-device fallback for the OrbitCardStack fan effect. */
export function DepartmentCard({ department }: { department: Department }) {
  return (
    <Link
      to={`/departments/${department.slug}`}
      className="flex h-[300px] w-64 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-sm"
    >
      <motion.div
        layoutId={`dept-photo-${department.slug}`}
        className="aspect-[4/3] shrink-0 overflow-hidden bg-primary-100"
      >
        <img
          src={hospitalImage(department.image)}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="flex flex-1 flex-col p-5 text-left">
        <motion.h3
          layoutId={`dept-name-${department.slug}`}
          className="line-clamp-1 font-serif text-lg text-ink-900"
        >
          {department.name}
        </motion.h3>
        <p className="mt-2 line-clamp-3 text-sm text-ink-500">{department.shortBlurb}</p>
      </div>
    </Link>
  );
}
