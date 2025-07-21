'use client';

import { motion } from 'framer-motion';
import { featuredConceptData } from '../utils/data';

interface ConceptHeaderTitleProps {}

export const ConceptHeaderTitle = ({}: ConceptHeaderTitleProps) => {
  const { title } = featuredConceptData.header;
  const { staggerContainer, titleAnimation } =
    featuredConceptData.animations.header;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={staggerContainer}
      viewport={{ once: true }}
      className="text-center mb-8"
    >
      <motion.h2
        variants={titleAnimation}
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
      >
        {title.beforeHighlight}
        <span
          className={`bg-gradient-to-r ${title.gradientColor} bg-clip-text text-transparent`}
        >
          {title.highlight}
        </span>
        <br />
        {title.afterHighlight}
      </motion.h2>
    </motion.div>
  );
};
