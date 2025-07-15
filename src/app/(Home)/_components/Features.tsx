import { FadeIn, StaggerContainer } from '@/components/animations';
import React from 'react';
import { motion } from "framer-motion";
import { features } from '@/data/content';

const Features = () => {
  return (
    <section className="py-20 bg-white/50 dark:bg-gray-950/50">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Why Choose Frontend Mastering?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Everything you need to become a frontend expert, all in one place.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -8 }}
                  className="text-center p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} text-white text-2xl mb-4 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>
  );
};

export default Features;