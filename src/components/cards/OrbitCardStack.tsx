import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import type { Department } from "@/data/departments";
import { hospitalImage } from "@/lib/images";

interface OrbitCardStackProps {
  items: Department[];
  spread?: number;
  lift?: number;
  defaultActiveIndex?: number;
}

const SPRING = { type: "spring" as const, stiffness: 190, damping: 28, mass: 0.9 };

/**
 * Collapses into a tight overlapping deck; fans out horizontally on hover,
 * lifting the active card above the rest. Every card keeps identical
 * dimensions (the blurb fades in on the fixed-height text panel rather than
 * growing it) so the deck never jumps in size as the active card changes.
 * Each card links through to its detail page, and its photo/name share a
 * layoutId with that page's hero so the navigation reads as the card
 * morphing into the page.
 */
export function OrbitCardStack({
  items,
  spread = 168,
  lift = 34,
  defaultActiveIndex = 0,
}: OrbitCardStackProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const center = (items.length - 1) / 2;

  return (
    <div
      className="relative mx-auto flex h-[360px] w-full max-w-3xl items-center justify-center"
      onMouseLeave={() => setActiveIndex(defaultActiveIndex)}
    >
      {items.map((dept, index) => {
        const offsetFromCenter = index - center;
        const isActive = index === activeIndex;
        const distanceFromActive = index - activeIndex;

        const x = offsetFromCenter * spread * 0.55 + distanceFromActive * spread * 0.35;
        const rotate = offsetFromCenter * 3;
        const y = isActive ? -lift : Math.abs(offsetFromCenter) * 4;

        return (
          <motion.div
            key={dept.slug}
            className="absolute w-64"
            style={{ zIndex: isActive ? 50 : 10 + (items.length - Math.abs(distanceFromActive)) }}
            animate={{ x, y, rotate: isActive ? 0 : rotate, scale: isActive ? 1.06 : 1 }}
            transition={SPRING}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <Link to={`/departments/${dept.slug}`} className="block" tabIndex={isActive ? 0 : -1}>
              <div
                className={`flex h-[300px] flex-col overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-lg transition-shadow duration-300 ${
                  isActive ? "shadow-2xl" : ""
                }`}
              >
                <motion.div
                  layoutId={`dept-photo-${dept.slug}`}
                  className="aspect-[4/3] shrink-0 overflow-hidden bg-primary-100"
                >
                  <img
                    src={hospitalImage(dept.image)}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div className="flex flex-1 flex-col p-5 text-left">
                  <motion.h3
                    layoutId={`dept-name-${dept.slug}`}
                    className="line-clamp-1 font-serif text-lg text-ink-900"
                  >
                    {dept.name}
                  </motion.h3>
                  <motion.p
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.25, delay: isActive ? 0.15 : 0 }}
                    className="mt-2 line-clamp-3 text-sm text-ink-500"
                  >
                    {dept.shortBlurb}
                  </motion.p>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
