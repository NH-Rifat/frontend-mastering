'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface ConceptCardProps {
  concept: {
    title: string;
    description: string;
    href: string;
    date: Date;
    keyPoints: string[];
  };
  index: number;
}

export const ConceptCard = ({ concept, index }: ConceptCardProps) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--concept"
      contentStyle={{
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(229, 231, 235, 0.4)',
        borderRadius: '16px',
        boxShadow:
          '0 10px 30px -8px rgba(0, 0, 0, 0.1), 0 6px 15px -5px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.5)',
        padding: '20px',
      }}
      contentArrowStyle={{
        borderRight: '10px solid rgba(255, 255, 255, 0.98)',
        borderLeft: '10px solid rgba(255, 255, 255, 0.98)',
        filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))',
      }}
      date={concept.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
      iconStyle={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        boxShadow: `0 0 15px rgba(102, 126, 234, 0.4)`,
        border: '2px solid white',
      }}
      icon={<span style={{ fontSize: '16px' }}>📚</span>}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.6 }}
        className="relative"
      >
        {/* Gradient Header Background */}
        <div className="absolute -top-3 -left-3 -right-3 h-16 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-indigo-900/20 rounded-t-xl -z-10"></div>

        {/* Header with upload date and bookmark */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex-1 pr-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
              {concept.title}
            </h3>

            {/* Upload Date and Time */}
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + 0.2 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-teal-900/20 rounded-lg border border-emerald-200/50 dark:border-emerald-700/30"
              >
                <span className="text-emerald-600 dark:text-emerald-400 text-sm">
                  📅
                </span>
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  Uploaded:{' '}
                  {concept.date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}{' '}
                  at{' '}
                  {concept.date.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </motion.div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
            title="Bookmark this concept"
          >
            <span className="text-lg">🔖</span>
          </motion.button>
        </div>

        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 + 0.1 }}
          className="mb-5 p-4 bg-gradient-to-r from-slate-50/80 via-gray-50/80 to-slate-50/80 dark:from-slate-800/40 dark:via-gray-800/40 dark:to-slate-800/40 rounded-xl border border-slate-200/50 dark:border-slate-700/50"
        >
          <div className="flex items-start gap-3">
            <span className="text-slate-600 dark:text-slate-400 text-lg flex-shrink-0 mt-0.5">
              �
            </span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm font-medium">
              {concept.description}
            </p>
          </div>
        </motion.div>

        {/* Key Learning Points */}
        <div className="mb-5 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-indigo-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-indigo-900/10 rounded-xl p-5 border border-blue-100/50 dark:border-blue-800/30 shadow-sm">
          <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <span className="text-blue-600 text-base">🎯</span>
            What You'll Learn
          </h4>
          <div className="space-y-3">
            {concept.keyPoints.map((point: string, pointIndex: number) => (
              <motion.div
                key={pointIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.05 + pointIndex * 0.1 + 0.3,
                  duration: 0.5,
                }}
                className="flex items-start gap-3 group cursor-pointer hover:bg-white/50 dark:hover:bg-gray-800/30 rounded-lg p-2 -mx-2 transition-all duration-200"
                whileHover={{ x: 4 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.05 + pointIndex * 0.1 + 0.5,
                    duration: 0.4,
                    type: 'spring',
                    stiffness: 400,
                  }}
                  className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 flex items-center justify-center mt-0.5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300"
                >
                  <svg
                    className="w-3 h-3 text-white drop-shadow-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200 font-medium">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Action buttons */}
        <div className="flex gap-3 pt-2">
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={concept.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 transition-all duration-300 text-sm shadow-lg hover:shadow-blue-500/25 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-base">📖</span>
                <span>Read Concept</span>
              </span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10 group-hover:translate-x-0.5 transition-transform text-base"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};
