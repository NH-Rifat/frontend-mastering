'use client';

import { motion } from 'framer-motion';
import { featuredConceptData } from '../utils/data';

interface ConceptHeaderBadgeProps {}

export const ConceptHeaderBadge = ({}: ConceptHeaderBadgeProps) => {
  const { badge } = featuredConceptData.header;
  const { duration, rotateScale, scaleValues } =
    featuredConceptData.animations.badge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      viewport={{ once: true }}
      className="relative inline-flex items-center justify-center mb-8"
    >
      {/* Animated Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-full border border-indigo-200/50 dark:border-indigo-700/50 shadow-lg backdrop-blur-sm mb-6"
      >
        <motion.div
          animate={{
            rotate: rotateScale,
            scale: scaleValues,
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`w-6 h-6 bg-gradient-to-r ${badge.gradientColor} rounded-full flex items-center justify-center`}
        >
          <span className="text-white text-sm font-bold">{badge.icon}</span>
        </motion.div>
        <span className="text-indigo-700 dark:text-indigo-300 font-medium">
          {badge.text}
        </span>
      </motion.div>
    </motion.div>
  );
};
