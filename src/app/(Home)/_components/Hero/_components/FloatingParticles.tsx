'use client';

import { heroData } from '@/app/(Home)/_components/Hero/utils/data';
import { motion } from 'framer-motion';

interface FloatingParticlesProps {}

export const FloatingParticles = ({}: FloatingParticlesProps) => {
  const { particles } = heroData.animations;

  return (
    <>
      {/* Enhanced Floating Particles with Trails */}
      {[...Array(particles.count)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            background: `linear-gradient(45deg, ${particles.colors[i % 3]})`,
            boxShadow: `0 0 10px ${particles.shadowColors[i % 3]}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
};
