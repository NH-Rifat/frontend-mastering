import { FadeIn, ScaleIn } from '@/components/animations';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { heroStats } from '@/data/content';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Master{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Frontend
                  </span>
                  <br />
                  Development
                </h1>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Learn modern frontend concepts with interactive examples, production-ready code, and best practices.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <ScaleIn delay={0.8}>
                    <Link
                      href="/concepts"
                      className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      Explore Concepts
                      <motion.svg 
                        className="ml-2 w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </Link>
                  </ScaleIn>
                  
                  <ScaleIn delay={1.0}>
                    <Link
                      href="/implementations"
                      className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      View Code Examples
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </ScaleIn>
                </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={1.2}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                  {heroStats.map((stat, index) => (
                    <ScaleIn key={stat.label} delay={1.4 + index * 0.1}>
                      <div className="text-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                        <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
  );
};

export default Hero;