'use client';

import { motion } from 'framer-motion';
import { featuredConceptData } from '../utils/data';

interface ConceptBackgroundProps {}

export const ConceptBackground = ({}: ConceptBackgroundProps) => {
  const { floatingElements } = featuredConceptData.animations.background;

  return (
    <div className="absolute inset-0">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30 dark:from-gray-900 dark:via-indigo-950/20 dark:to-purple-950/20"></div>

      {/* Animated Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} bg-gradient-to-br ${element.colors} rounded-full blur-3xl`}
          animate={element.movement}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: element.delay || 0,
          }}
        />
      ))}

      {/* Dynamic Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};
