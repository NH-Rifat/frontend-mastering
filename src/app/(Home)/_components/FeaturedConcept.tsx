import React from 'react';
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from '@/components/animations';
import { concepts } from '@/data/concepts';
import { ConceptCard } from '@/components/ui';
import Link from 'next/link';

const FeaturedConcept = () => {
  return (
    <>
      <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Featured Concepts
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Dive deep into the most important frontend development topics.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {concepts.slice(0, 6).map((concept) => (
                <ConceptCard
                  key={concept.title}
                  title={concept.title}
                  description={concept.description}
                  href={concept.href}
                  gradient={concept.gradient}
                  category={concept.category}
                />
              ))}
            </StaggerContainer>

            <FadeIn delay={0.5}>
              <div className="text-center">
                <Link
                  href="/concepts"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  View All Concepts
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
    </>
  );
};

export default FeaturedConcept;