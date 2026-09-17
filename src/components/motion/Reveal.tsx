import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Stagger this element's own children (use with <Reveal.Item>) */
  stagger?: boolean;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const flatVisible: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Reveal({ children, className, delay = 0, stagger = false }: RevealProps) {
  const reduceMotion = useReducedMotionSafe();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger ? container : flatVisible}
      transition={stagger ? undefined : { delay }}
    >
      {children}
    </motion.div>
  );
}

Reveal.Item = function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotionSafe();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
};
