import type { Variants } from "framer-motion";

export const easing = [0.18, 1, 0.32, 1] as const;

export const revealUp = (distance = 18): Variants => ({
  hidden: { opacity: 0, y: distance, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.68, ease: easing },
  },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.62, ease: easing },
  },
};

export const staggerParent = (delayChildren = 0.06, staggerChildren = 0.09): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.988 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.56, ease: easing },
  },
};
