import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu, Phone } from "lucide-react";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { logo } from "@/lib/images";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Departments", href: "/#departments" },
  { label: "Doctors", href: "/#doctors" },
  { label: "About", href: "/#about" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#appointment" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-cream-50/90 shadow-sm backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/#hero" className="flex items-center gap-3">
            <img
              src={logo}
              alt={site.name}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-primary-700/20"
            />
            <span
              className={`font-serif text-lg leading-tight transition-colors ${
                scrolled ? "text-ink-900" : "text-cream-50"
              }`}
            >
              {site.shortName}
              <span
                className={`block text-xs font-sans font-medium tracking-wide transition-colors ${
                  scrolled ? "text-primary-600" : "text-cream-100/80"
                }`}
              >
                Multispeciality Hospital
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-400 ${
                  scrolled ? "text-ink-700" : "text-cream-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${site.phones[0]}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent-400 ${
                scrolled ? "text-ink-700" : "text-cream-50"
              }`}
            >
              <Phone size={16} />
              {site.phones[0]}
            </a>
            <Link
              to="/#appointment"
              className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
            >
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={`rounded-full p-2 transition-colors lg:hidden ${
              scrolled ? "text-ink-900" : "text-cream-50"
            }`}
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />
    </>
  );
}
