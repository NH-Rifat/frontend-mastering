'use client';

import { StaggerContainer } from '@/components/animations';
import { motion } from 'framer-motion';
import { featuresData, type Feature } from '../utils/data';

interface FeaturesGridProps {}

export const FeaturesGrid = ({}: FeaturesGridProps) => {
  const { features, cardColorSchemes } = featuresData;
  const { hoverScale, hoverTranslate, stagger } = featuresData.animations.cards;

  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6 lg:gap-8">
      {features.map((feature: Feature, index: number) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * stagger,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{
            y: hoverTranslate,
            scale: hoverScale,
          }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          className="group relative cursor-pointer"
        >
          {/* Simplified Glow Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/15 group-hover:via-purple-500/15 group-hover:to-cyan-500/15 rounded-3xl blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

          {/* Main Card */}
          <div className="relative text-center p-8 lg:p-10 rounded-3xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 group-hover:border-blue-300/60 dark:group-hover:border-blue-600/60 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
            {/* Simplified Background Pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/8 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/8 to-transparent rounded-full transform -translate-x-4 translate-y-4"></div>
            </div>

            {/* Enhanced Icon */}
            <motion.div
              className="relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-2xl mb-6 shadow-xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${
                  cardColorSchemes[index % 4].gradient
                })`,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 5,
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* Simplified Rotating Border */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-2xl opacity-40"
                style={{
                  background: `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent)`,
                }}
              />

              {/* Icon */}
              <span className="relative z-10 text-white text-2xl lg:text-3xl font-bold">
                {feature.icon}
              </span>

              {/* Inner Glow */}
              <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/15 to-transparent"></div>
            </motion.div>

            {/* Enhanced Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {feature.title}
            </h3>

            {/* Enhanced Description */}
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
              {feature.description}
            </p>

            {/* Simplified Hover Indicator */}
            <div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 h-1 w-0 group-hover:w-12 rounded-full transition-all duration-300"
              style={{
                background: `linear-gradient(90deg, ${
                  cardColorSchemes[index % 4].hover
                })`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </StaggerContainer>
  );
};
