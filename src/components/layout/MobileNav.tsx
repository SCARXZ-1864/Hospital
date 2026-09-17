import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import { X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

export function MobileNav({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-primary-900/95 backdrop-blur-sm lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex justify-end p-6">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full p-2 text-cream-50 hover:bg-white/10"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-8">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.1 }}
              >
                <Link
                  to={link.href}
                  onClick={onClose}
                  className="font-serif text-3xl text-cream-50 hover:text-accent-400"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
