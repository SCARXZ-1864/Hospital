import { Link } from "react-router";
import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { site } from "@/data/site";
import { logo } from "@/lib/images";

const QUICK_LINKS = [
  { label: "Departments", href: "/#departments" },
  { label: "Doctors", href: "/#doctors" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About Us", href: "/#about" },
];

export function Footer() {
  return (
    <footer className="bg-primary-900 text-cream-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt={site.name} className="h-10 w-10 rounded-full object-cover" />
            <span className="font-serif text-lg text-cream-50">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-cream-100/70">
            Providing compassionate care and healing for over two decades.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Follow us on Facebook"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-500"
          >
            <Share2 size={18} />
          </a>
        </div>

        <div>
          <h3 className="font-serif text-base text-cream-50">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm text-cream-100/70 hover:text-accent-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base text-cream-50">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/70">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <span>{site.phones.join(" / ")}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <a href={`mailto:${site.email}`} className="hover:text-accent-400">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-cream-100/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
