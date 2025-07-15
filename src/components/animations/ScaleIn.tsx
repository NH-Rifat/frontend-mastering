"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = ""
}: ScaleInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
