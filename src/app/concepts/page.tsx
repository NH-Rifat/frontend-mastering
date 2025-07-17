'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { conceptsData } from '../../utils/data';
import { ConceptCard } from './_components/ConceptCard';

export default function ConceptsPage() {
  const totalConcepts = conceptsData.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30">
      {/* Enhanced Header Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-indigo-400/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl dark:bg-blue-600/10"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl dark:bg-purple-600/10"></div>

        <div className="relative container py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frontend Mastery Journey
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A comprehensive timeline of essential frontend development
              concepts, from fundamentals to advanced techniques. Track your
              progress through modern web development.
            </motion.p>

            {/* Enhanced Progress Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {totalConcepts}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Total Concepts
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="#timeline"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
              >
                <span className="mr-2">🚀</span>
                Start Learning Journey
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>

              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50"
              >
                <span className="mr-2">📚</span>
                Browse Resources
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div
        id="timeline"
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 my-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Learning Timeline
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Follow this structured path to master frontend development concepts
            step by step.
          </p>
        </motion.div>

        <div className="px-8">
          <VerticalTimeline>
            {conceptsData?.map((concept, index) => (
              <ConceptCard
                key={concept.title}
                concept={concept}
                index={index}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}
