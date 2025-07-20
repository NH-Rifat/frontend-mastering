import { motion } from 'framer-motion';
import { featuresData } from '../utils/data';

interface FeaturesHeaderIconProps {}

export const FeaturesHeaderIcon = ({}: FeaturesHeaderIconProps) => {
  const { headerIcon } = featuresData.animations;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      viewport={{ once: true }}
      className="relative inline-flex items-center justify-center mb-8"
    >
      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: headerIcon.rotationDuration, repeat: Infinity, ease: 'linear' }}
        className="absolute w-24 h-24 border-2 border-dashed border-blue-300/30 dark:border-blue-600/30 rounded-full"
      />

      {/* Central Icon */}
      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
        <motion.span
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-white text-2xl font-bold"
        >
          {headerIcon.mainIcon}
        </motion.span>
      </div>

      {/* Floating Particles */}
      {[...Array(headerIcon.particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          style={{
            left: `${50 + 30 * Math.cos((i * Math.PI * 2) / headerIcon.particleCount)}%`,
            top: `${50 + 30 * Math.sin((i * Math.PI * 2) / headerIcon.particleCount)}%`,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 360],
          }}
          transition={{
            duration: headerIcon.particleAnimation.duration + i * 0.2,
            repeat: Infinity,
            delay: i * headerIcon.particleAnimation.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
};
