'use client';

import { heroData } from '@/app/(Home)/_components/Hero/utils/data';
import { ScaleIn } from '@/components/animations';
import { motion } from 'framer-motion';

interface HeroStatsProps {}

export const HeroStats = ({}: HeroStatsProps) => {
  const { stats } = heroData;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <ScaleIn key={stat.label} delay={1.4 + index * 0.1}>
          <motion.div
            className="group text-center p-4 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-600/30 hover:border-blue-300/50 dark:hover:border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 break-words`}
            >
              {stat.value}
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {stat.label}
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
          </motion.div>
        </ScaleIn>
      ))}
    </div>
  );
};
