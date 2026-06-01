import type { Variants } from "framer-motion";

export const staggerContainer = (stagger = 0.08, delayChildren = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
});
