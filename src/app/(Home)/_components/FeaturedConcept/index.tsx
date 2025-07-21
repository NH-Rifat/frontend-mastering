'use client';

import { motion } from 'framer-motion';
import {
  ConceptBackground,
  ConceptCardsGrid,
  ConceptCTA,
  ConceptHeaderBadge,
  ConceptHeaderTitle,
} from './_components';

const FeaturedConcept = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Enhanced Background */}
      <ConceptBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <ConceptHeaderBadge />
          <ConceptHeaderTitle />

          {/* Enhanced Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stop watching endless tutorials and start building. Each concept
            includes
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {' '}
              real-world projects
            </span>
            , practical examples, and the exact skills employers are looking
            for.
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {' '}
              No fluff, just results.
            </span>
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ConceptCardsGrid />
        </motion.div>

        {/* CTA Section */}
        <ConceptCTA />
      </div>
    </section>
  );
};

export default FeaturedConcept;
