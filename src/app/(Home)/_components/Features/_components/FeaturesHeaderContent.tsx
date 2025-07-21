'use client';

import Badge from '@/components/common/Badge';
import { motion } from 'framer-motion';
import { featuresData } from '../utils/data';

interface FeaturesHeaderContentProps {}

export const FeaturesHeaderContent = ({}: FeaturesHeaderContentProps) => {
  const { badge, title, description, keyValuePoints } = featuresData.header;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Subtitle Badge */}
      <div className="flex items-center justify-center mb-4">
        <Badge icon={badge.icon} text={badge.text} />
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        <span className="text-gray-900 dark:text-gray-100">{title.main}</span>
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
          {title.highlight}
        </span>
      </h2>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        We don't just teach code – we build
        <span className="font-semibold text-purple-600 dark:text-purple-400">
          {' '}
          confident developers
        </span>
        . Our platform combines cutting-edge curriculum with real-world
        projects, ensuring you master frontend development through
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {' '}
          hands-on experience
        </span>
        , not just theory.
      </p>

      {/* Key Value Points */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mt-8 text-sm"
      >
        {keyValuePoints.map((item, i) => (
          <Badge
            key={i}
            icon={item.icon}
            variant={item.variant}
            delay={0.5 + i * 0.1}
            text={item.text}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
