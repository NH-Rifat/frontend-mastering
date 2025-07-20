import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {}

export const AnimatedBackground = ({}: AnimatedBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Multi-layered Animated Grids */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Secondary Grid Layer */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridMove 15s linear infinite reverse',
        }}
      />

      {/* Tertiary Fine Grid */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          animation: 'gridMove 10s linear infinite',
        }}
      />

      {/* Enhanced Gradient Orbs with Glow */}
      <motion.div
        className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-cyan-500/25 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/25 via-pink-500/20 to-blue-500/25 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/15 via-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Radial Grid Effect */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 dark:opacity-3"
        style={{
          background: `
            radial-gradient(circle at center, transparent 20%, rgba(59, 130, 246, 0.1) 20.5%, rgba(59, 130, 246, 0.1) 21%, transparent 21.5%),
            radial-gradient(circle at center, transparent 40%, rgba(147, 51, 234, 0.08) 40.5%, rgba(147, 51, 234, 0.08) 41%, transparent 41.5%),
            radial-gradient(circle at center, transparent 60%, rgba(6, 182, 212, 0.06) 60.5%, rgba(6, 182, 212, 0.06) 61%, transparent 61.5%)
          `,
          backgroundSize: '200px 200px, 300px 300px, 400px 400px',
          animation: 'rotateGrid 30s linear infinite',
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes rotateGrid {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
