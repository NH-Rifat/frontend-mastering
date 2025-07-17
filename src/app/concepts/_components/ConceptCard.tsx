'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { StatusIcon } from './StatusIcon';

interface ConceptCardProps {
  concept: {
    title: string;
    description: string;
    tags: string[];
    status: string;
    href: string;
    date: Date;
    readTime: number;
    difficulty: string;
    completionRate: number;
  };
  index: number;
}

export const ConceptCard = ({ concept, index }: ConceptCardProps) => {
  const statusInfo = StatusIcon({ status: concept.status });

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--concept"
      contentStyle={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(229, 231, 235, 0.3)',
        borderRadius: '12px',
        boxShadow:
          '0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -3px rgba(0, 0, 0, 0.05)',
        padding: '16px',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.95)' }}
      date={concept.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
      iconStyle={{
        background: statusInfo.iconBg,
        color: '#fff',
        boxShadow: `0 0 15px ${statusInfo.iconBg}40`,
        border: '2px solid white',
      }}
      icon={<span style={{ fontSize: '16px' }}>{statusInfo.icon}</span>}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.6 }}
        className="relative"
      >
        {/* Gradient Header Background */}
        <div className="absolute -top-3 -left-3 -right-3 h-16 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-indigo-900/20 rounded-t-xl -z-10"></div>

        {/* Header with bookmark */}
        <div className="flex items-start justify-between mb-3 relative z-10">
          <div className="flex-1 pr-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight">
              {concept.title}
            </h3>
            <div className="flex items-center gap-2">
              {statusInfo.badge}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Bookmark this concept"
              >
                <span className="text-sm">🔖</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              Progress
            </span>
            <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
              {concept.completionRate}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${concept.completionRate}%` }}
              transition={{
                delay: index * 0.05 + 0.2,
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Enhanced Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
          {concept.description}
        </p>

        {/* Enhanced Meta info grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <motion.div
            className="flex flex-col items-center p-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 rounded-lg border border-blue-200/50 dark:border-blue-700/30"
            whileHover={{ scale: 1.03, y: -1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="text-lg mb-0.5">⏱️</span>
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
              {concept.readTime} min
            </span>
            <span className="text-[10px] text-blue-600/70 dark:text-blue-400/70">
              read time
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 rounded-lg border border-purple-200/50 dark:border-purple-700/30"
            whileHover={{ scale: 1.03, y: -1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="text-lg mb-0.5">📊</span>
            <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
              {concept.difficulty}
            </span>
            <span className="text-[10px] text-purple-600/70 dark:text-purple-400/70">
              level
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 rounded-lg border border-green-200/50 dark:border-green-700/30"
            whileHover={{ scale: 1.03, y: -1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="text-lg mb-0.5">👥</span>
            <span className="text-xs font-semibold text-green-700 dark:text-green-300">
              {concept.completionRate}%
            </span>
            <span className="text-[10px] text-green-600/70 dark:text-green-400/70">
              completed
            </span>
          </motion.div>
        </div>

        {/* Enhanced Tags with interactive effects */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {concept.tags.map((tag: string, tagIndex: number) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: tagIndex * 0.05 + 0.3 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: '0 4px 15px -4px rgba(59, 130, 246, 0.4)',
              }}
              className="relative px-3 py-1 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/30 dark:to-blue-900/40 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium border border-blue-200/60 dark:border-blue-700/40 cursor-pointer overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId={`tag-bg-${tag}`}
              />
              <span className="relative z-10">{tag}</span>
            </motion.span>
          ))}
        </div>

        {/* Enhanced Action buttons */}
        <div className="flex gap-2">
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={concept.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white rounded-lg font-medium hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 transition-all duration-300 text-sm shadow-md hover:shadow-blue-500/25 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <span className="relative z-10 flex items-center gap-1.5">
                <span>📖</span>
                <span>Read Concept</span>
              </span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10 group-hover:translate-x-0.5 transition-transform"
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 group"
            title="Share this concept"
          >
            <motion.span
              className="text-sm"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📤
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};
