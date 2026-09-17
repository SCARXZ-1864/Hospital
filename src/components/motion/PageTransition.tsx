import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Fade/slide wrapper for page content that sits below a layoutId-morphed hero. */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
