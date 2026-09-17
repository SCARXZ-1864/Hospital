import { useEffect, useRef } from "react";
import { useAnimate } from "motion/react";
import { useLocation } from "react-router";
import { site } from "@/data/site";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const EASE = [0.76, 0, 0.24, 1] as const;
const DURATION = 0.5;
const HOLD = 0.15;

/**
 * Full-screen wipe that masks page-to-page navigation, inspired by
 * motion.dev's "Curtains: Scope" example — a single skewed panel slides in
 * from the left, the route swaps underneath while it's fully covered, then
 * it slides out to the right to reveal the new page.
 */
export function Curtain() {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const location = useLocation();
  const prevPathname = useRef(location.pathname);
  const isFirstRender = useRef(true);
  const reduceMotion = useReducedMotionSafe();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathname.current = location.pathname;
      return;
    }
    if (prevPathname.current === location.pathname) return;
    prevPathname.current = location.pathname;

    const goingHomeWithHash = location.pathname === "/" && location.hash !== "";

    if (reduceMotion) {
      if (!goingHomeWithHash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    let cancelled = false;

    async function play() {
      await animate(scope.current, { x: "0%", skewX: [-8, 0] }, { duration: DURATION, ease: EASE });
      if (cancelled) return;
      if (!goingHomeWithHash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      await new Promise((resolve) => setTimeout(resolve, HOLD * 1000));
      if (cancelled) return;
      await animate(
        scope.current,
        { x: "100%", skewX: [0, 8] },
        { duration: DURATION, ease: EASE },
      );
      if (cancelled) return;
      animate(scope.current, { x: "-100%", skewX: -8 }, { duration: 0 });
    }

    void play();
    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.hash, animate, scope, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      <div
        ref={scope}
        className="absolute inset-0 flex items-center justify-center bg-primary-950"
        style={{ transform: "translateX(-100%) skewX(-8deg)" }}
      >
        <span className="font-serif text-2xl tracking-wide text-cream-50/90">
          {site.shortName}
        </span>
      </div>
    </div>
  );
}
