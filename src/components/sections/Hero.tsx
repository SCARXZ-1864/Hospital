import { motion } from "motion/react";
import { Link } from "react-router";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { hospitalImage } from "@/lib/images";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src={hospitalImage("hosp1.jpg")}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/75 to-primary-900/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-300"
        >
          {site.tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-5xl leading-[1.08] text-cream-50 md:text-6xl"
        >
          {site.heroHeading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-lg text-lg text-cream-100/85"
        >
          {site.heroSubheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={`tel:${site.phones[0]}`}
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary-800 shadow-lg transition-transform hover:scale-105"
          >
            <Phone size={18} />
            Call Now
          </a>
          <Link
            to="/#appointment"
            className="rounded-full border border-cream-50/30 bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
