import { useReducedMotion } from "motion/react";

/** Thin wrapper so every component reads reduced-motion preference the same way. */
export function useReducedMotionSafe(): boolean {
  return useReducedMotion() ?? false;
}
