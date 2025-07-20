import { FadeIn, StaggerContainer } from '@/components/animations';
import { LinkButton } from '@/components/common';
import { concepts } from '@/data/concepts';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FeaturedConcept = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30 dark:from-gray-900 dark:via-indigo-950/20 dark:to-purple-950/20"></div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-16 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Dynamic Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            {/* Enhanced Header with Icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              className="relative inline-flex items-center justify-center mb-8"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-full border border-indigo-200/50 dark:border-indigo-700/50 shadow-lg backdrop-blur-sm mb-6"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-sm font-bold">✨</span>
                </motion.div>
                <span className="text-indigo-700 dark:text-indigo-300 font-medium">
                  Featured Learning Paths
                </span>
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-900 dark:text-gray-100">
                Skip The Tutorial Hell.
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Build Real Projects
              </span>
            </motion.h2>

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

            {/* User Pain Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mt-8 text-sm"
            >
              {[
                {
                  icon: '❌',
                  text: 'No More Tutorial Hell',
                  description: 'Build instead of watching',
                },
                {
                  icon: '🎯',
                  text: 'Job-Ready Skills',
                  description: 'What employers actually want',
                },
                {
                  icon: '⚡',
                  text: 'Fast Track Learning',
                  description: 'Skip the overwhelm',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex flex-col items-center gap-2 px-6 py-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg group transition-all duration-300 hover:shadow-xl"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.text}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    {item.description}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </FadeIn>

        {/* Enhanced Grid with Better Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {concepts.slice(0, 6).map((concept, index) => (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
              >
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                {/* Enhanced Card */}
                <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-200/70 dark:border-gray-700/70 group-hover:border-indigo-300/70 dark:group-hover:border-indigo-600/70 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  {/* Card Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                    <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-transparent rounded-full transform -translate-x-6 translate-y-6"></div>
                  </div>

                  {/* Enhanced Card Content */}
                  <div className="relative p-8 lg:p-10">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.span
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full border"
                        style={{
                          background: `linear-gradient(135deg, ${
                            index % 6 === 0
                              ? 'rgba(79, 70, 229, 0.1), rgba(147, 51, 234, 0.1)'
                              : index % 6 === 1
                              ? 'rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1)'
                              : index % 6 === 2
                              ? 'rgba(6, 182, 212, 0.1), rgba(79, 70, 229, 0.1)'
                              : index % 6 === 3
                              ? 'rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1)'
                              : index % 6 === 4
                              ? 'rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)'
                              : 'rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)'
                          })`,
                          color:
                            index % 6 === 0
                              ? '#4F46E5'
                              : index % 6 === 1
                              ? '#9333EA'
                              : index % 6 === 2
                              ? '#06B6D4'
                              : index % 6 === 3
                              ? '#A855F7'
                              : index % 6 === 4
                              ? '#EC4899'
                              : '#3B82F6',
                          borderColor:
                            index % 6 === 0
                              ? 'rgba(79, 70, 229, 0.2)'
                              : index % 6 === 1
                              ? 'rgba(147, 51, 234, 0.2)'
                              : index % 6 === 2
                              ? 'rgba(6, 182, 212, 0.2)'
                              : index % 6 === 3
                              ? 'rgba(168, 85, 247, 0.2)'
                              : index % 6 === 4
                              ? 'rgba(236, 72, 153, 0.2)'
                              : 'rgba(59, 130, 246, 0.2)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {concept.category}
                      </motion.span>

                      {/* Status Indicator */}
                      <motion.div
                        className="w-3 h-3 rounded-full"
                        style={{
                          background:
                            index % 3 === 0
                              ? '#10B981'
                              : index % 3 === 1
                              ? '#F59E0B'
                              : '#EF4444',
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </div>

                    {/* Enhanced Icon */}
                    <motion.div
                      className="relative inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl mb-6 shadow-xl overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${
                          index % 6 === 0
                            ? 'rgba(79, 70, 229, 1), rgba(147, 51, 234, 0.8)'
                            : index % 6 === 1
                            ? 'rgba(147, 51, 234, 1), rgba(236, 72, 153, 0.8)'
                            : index % 6 === 2
                            ? 'rgba(6, 182, 212, 1), rgba(79, 70, 229, 0.8)'
                            : index % 6 === 3
                            ? 'rgba(168, 85, 247, 1), rgba(6, 182, 212, 0.8)'
                            : index % 6 === 4
                            ? 'rgba(236, 72, 153, 1), rgba(168, 85, 247, 0.8)'
                            : 'rgba(59, 130, 246, 1), rgba(147, 51, 234, 0.8)'
                        })`,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {/* Rotating Border */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="absolute inset-0 rounded-2xl opacity-60"
                        style={{
                          background: `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)`,
                        }}
                      />

                      {/* Icon Content */}
                      <span className="relative z-10 text-white text-2xl lg:text-3xl font-bold">
                        {index % 6 === 0
                          ? '⚡'
                          : index % 6 === 1
                          ? '🚀'
                          : index % 6 === 2
                          ? '💎'
                          : index % 6 === 3
                          ? '🎯'
                          : index % 6 === 4
                          ? '🔥'
                          : '✨'}
                      </span>

                      {/* Inner Glow */}
                      <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
                    </motion.div>

                    {/* Enhanced Title */}
                    <motion.h3
                      className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-400"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {concept.title}
                    </motion.h3>

                    {/* Enhanced Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {concept.description}
                    </p>

                    {/* Concept Insights */}
                    <div className="mb-6 grid grid-cols-3 gap-3">
                      <motion.div
                        className="text-center p-3 rounded-xl"
                        style={{
                          background: `linear-gradient(135deg, ${
                            index % 6 === 0
                              ? 'rgba(79, 70, 229, 0.05), rgba(147, 51, 234, 0.05)'
                              : index % 6 === 1
                              ? 'rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05)'
                              : index % 6 === 2
                              ? 'rgba(6, 182, 212, 0.05), rgba(79, 70, 229, 0.05)'
                              : index % 6 === 3
                              ? 'rgba(168, 85, 247, 0.05), rgba(6, 182, 212, 0.05)'
                              : index % 6 === 4
                              ? 'rgba(236, 72, 153, 0.05), rgba(168, 85, 247, 0.05)'
                              : 'rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05)'
                          })`,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                          {index % 3 === 0
                            ? '�'
                            : index % 3 === 1
                            ? '🔗'
                            : '🧠'}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {index % 3 === 0
                            ? 'HTML/CSS'
                            : index % 3 === 1
                            ? 'JavaScript'
                            : 'None'}
                        </div>
                      </motion.div>

                      <motion.div
                        className="text-center p-3 rounded-xl"
                        style={{
                          background: `linear-gradient(135deg, ${
                            index % 6 === 0
                              ? 'rgba(79, 70, 229, 0.05), rgba(147, 51, 234, 0.05)'
                              : index % 6 === 1
                              ? 'rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05)'
                              : index % 6 === 2
                              ? 'rgba(6, 182, 212, 0.05), rgba(79, 70, 229, 0.05)'
                              : index % 6 === 3
                              ? 'rgba(168, 85, 247, 0.05), rgba(6, 182, 212, 0.05)'
                              : index % 6 === 4
                              ? 'rgba(236, 72, 153, 0.05), rgba(168, 85, 247, 0.05)'
                              : 'rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05)'
                          })`,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                          {index % 3 === 0
                            ? '🛠️'
                            : index % 3 === 1
                            ? '💡'
                            : '🎨'}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {index % 3 === 0
                            ? 'Practical'
                            : index % 3 === 1
                            ? 'Concepts'
                            : 'Creative'}
                        </div>
                      </motion.div>

                      <motion.div
                        className="text-center p-3 rounded-xl"
                        style={{
                          background: `linear-gradient(135deg, ${
                            index % 6 === 0
                              ? 'rgba(79, 70, 229, 0.05), rgba(147, 51, 234, 0.05)'
                              : index % 6 === 1
                              ? 'rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05)'
                              : index % 6 === 2
                              ? 'rgba(6, 182, 212, 0.05), rgba(79, 70, 229, 0.05)'
                              : index % 6 === 3
                              ? 'rgba(168, 85, 247, 0.05), rgba(6, 182, 212, 0.05)'
                              : index % 6 === 4
                              ? 'rgba(236, 72, 153, 0.05), rgba(168, 85, 247, 0.05)'
                              : 'rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05)'
                          })`,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-lg font-bold">
                          <span
                            style={{
                              color:
                                index % 3 === 0
                                  ? '#10B981'
                                  : index % 3 === 1
                                  ? '#F59E0B'
                                  : '#EF4444',
                            }}
                          >
                            {index % 3 === 0
                              ? '●●○'
                              : index % 3 === 1
                              ? '●●●'
                              : '●○○'}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {index % 3 === 0
                            ? 'Medium'
                            : index % 3 === 1
                            ? 'Advanced'
                            : 'Beginner'}
                        </div>
                      </motion.div>
                    </div>

                    {/* CTA Button */}
                    <Link href={concept.href}>
                      <motion.button
                        className="w-full py-3 px-6 text-sm font-semibold rounded-xl border-2 transition-all duration-300 cursor-pointer"
                        style={{
                          borderColor:
                            index % 6 === 0
                              ? '#4F46E5'
                              : index % 6 === 1
                              ? '#9333EA'
                              : index % 6 === 2
                              ? '#06B6D4'
                              : index % 6 === 3
                              ? '#A855F7'
                              : index % 6 === 4
                              ? '#EC4899'
                              : '#3B82F6',
                          color:
                            index % 6 === 0
                              ? '#4F46E5'
                              : index % 6 === 1
                              ? '#9333EA'
                              : index % 6 === 2
                              ? '#06B6D4'
                              : index % 6 === 3
                              ? '#A855F7'
                              : index % 6 === 4
                              ? '#EC4899'
                              : '#3B82F6',
                        }}
                        whileHover={{
                          background:
                            index % 6 === 0
                              ? '#4F46E5'
                              : index % 6 === 1
                              ? '#9333EA'
                              : index % 6 === 2
                              ? '#06B6D4'
                              : index % 6 === 3
                              ? '#A855F7'
                              : index % 6 === 4
                              ? '#EC4899'
                              : '#3B82F6',
                          color: '#FFFFFF',
                          scale: 1.02,
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        Start Learning
                      </motion.button>
                    </Link>

                    {/* Floating Particles */}
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          background:
                            index % 3 === 0
                              ? '#4F46E5'
                              : index % 3 === 1
                              ? '#9333EA'
                              : '#06B6D4',
                          left: `${20 + i * 30}%`,
                          top: `${15 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>

                  {/* Enhanced Hover Indicator */}
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 group-hover:w-16 rounded-t-full transition-all duration-400"
                    style={{
                      background: `linear-gradient(90deg, ${
                        index % 6 === 0
                          ? '#4F46E5, #9333EA'
                          : index % 6 === 1
                          ? '#9333EA, #EC4899'
                          : index % 6 === 2
                          ? '#06B6D4, #4F46E5'
                          : index % 6 === 3
                          ? '#A855F7, #06B6D4'
                          : index % 6 === 4
                          ? '#EC4899, #A855F7'
                          : '#3B82F6, #9333EA'
                      })`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </motion.div>

        {/* Enhanced CTA Button */}
        <FadeIn delay={0.6}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <LinkButton text="Explore All Concepts" href="/concepts" />

            {/* Additional Info */}
            <motion.p
              className="mt-6 text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-1"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                12+ concepts available
              </motion.span>
            </motion.p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedConcept;
