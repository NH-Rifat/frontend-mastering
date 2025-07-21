'use client';

import { motion } from 'framer-motion';
import { featuredConceptData } from '../utils/data';

interface ConceptPainPointsProps {}

export const ConceptPainPoints = ({}: ConceptPainPointsProps) => {
  const { painPoints } = featuredConceptData.header;
  const { staggerContainer, painPointAnimation } =
    featuredConceptData.animations.painPoints;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={staggerContainer}
      viewport={{ once: true }}
      className="mb-16"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8, delay: 0.6 } },
        }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {painPoints.title}
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {painPoints.items.map((pain, index) => (
          <motion.div
            key={index}
            variants={painPointAnimation}
            className="group relative p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200/50 dark:border-red-800/50 hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 bg-gradient-to-r ${pain.gradientColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <span className="text-2xl">{pain.icon}</span>
            </div>

            {/* Content */}
            <h4 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
              {pain.title}
            </h4>
            <p className="text-red-600 dark:text-red-400 text-sm leading-relaxed">
              {pain.description}
            </p>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
