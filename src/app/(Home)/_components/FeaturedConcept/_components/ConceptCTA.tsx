'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { featuredConceptData } from '../utils/data';

interface ConceptCTAProps {}

export const ConceptCTA = ({}: ConceptCTAProps) => {
  const { cta } = featuredConceptData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Link href={cta.button.href}>
        <motion.button
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-lg">{cta.button.text}</span>
          <motion.span
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-xl group-hover:translate-x-1 transition-transform duration-300"
          >
            →
          </motion.span>
        </motion.button>
      </Link>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 mt-6 text-gray-500 dark:text-gray-400"
      >
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{ background: cta.info.indicator.color }}
          animate={cta.info.indicator.animation}
          transition={{
            duration: cta.info.indicator.animation.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <span className="text-sm font-medium">{cta.info.text}</span>
      </motion.div>
    </motion.div>
  );
};
