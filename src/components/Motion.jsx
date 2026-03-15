import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function MotionSection({ className = "", children }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      animate="show"
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}

export function MotionItem({ className = "", children, delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}