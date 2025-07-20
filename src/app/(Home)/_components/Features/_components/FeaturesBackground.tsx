import { motion } from 'framer-motion';
import { featuresData } from '../utils/data';

interface FeaturesBackgroundProps {}

export const FeaturesBackground = ({}: FeaturesBackgroundProps) => {
  const { floatingElements } = featuresData.animations.background;

  return (
    <div className="absolute inset-0">
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30"></div>

      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} bg-gradient-to-br ${element.colors} rounded-full blur-3xl`}
          animate={{
            scale: index === 0 ? [1, 1.2, 1] : [1, 1.3, 1],
            opacity: index === 0 ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: element.delay || 0,
          }}
        />
      ))}

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
