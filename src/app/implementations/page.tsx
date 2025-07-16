'use client';

import { FadeIn, StaggerContainer } from '@/components/animations';
import {
  complexityConfig,
  implementations,
  statusConfig,
} from '@/data/implementations';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ImplementationsPage() {
  const getStatusBadge = (status: string) => {
    const baseClasses =
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
    const config = statusConfig[status as keyof typeof statusConfig];
    return `${baseClasses} ${
      config?.color || statusConfig['Coming Soon'].color
    }`;
  };

  const getComplexityStyle = (complexity: string) => {
    const config =
      complexityConfig[complexity as keyof typeof complexityConfig];
    return config || complexityConfig['Beginner'];
  };

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950/30">
      <main className="pt-20 ">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden ">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative">
            <FadeIn>
              {/* Enhanced header with premium animations */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative inline-block mb-6"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
                    💻{' '}
                    <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Implementations
                    </span>
                  </h1>
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"
                    initial={{ width: 0, x: '-50%' }}
                    animate={{ width: '70%', x: '-50%' }}
                    transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                  />
                </motion.div>

                <motion.p
                  className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Production-ready code examples for every concept. Copy,
                  modify, and use in your projects.
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold">
                    {' '}
                    All implementations include setup instructions, performance
                    benchmarks, and best practices.
                  </span>
                </motion.p>

                {/* Enhanced stats section */}
                <motion.div
                  className="flex flex-wrap justify-center gap-8 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {[
                    {
                      number: '50+',
                      label: 'Implementations',
                      icon: '🚀',
                      color: 'from-purple-500 to-purple-600',
                    },
                    {
                      number: '10+',
                      label: 'Categories',
                      icon: '📚',
                      color: 'from-blue-500 to-blue-600',
                    },
                    {
                      number: '24/7',
                      label: 'Available',
                      icon: '⚡',
                      color: 'from-cyan-500 to-cyan-600',
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center group cursor-pointer"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <motion.div
                        className="text-3xl mb-2"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 4 + index,
                        }}
                      >
                        {stat.icon}
                      </motion.div>
                      <motion.div
                        className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ scale: 1.15 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced status indicators */}
                <motion.div
                  className="flex flex-wrap justify-center gap-6 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  {Object.entries(statusConfig).map(
                    ([status, config], index) => (
                      <motion.div
                        key={status}
                        className="flex items-center gap-2 group cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <motion.span
                          className={`w-3 h-3 ${config.dotColor} rounded-full group-hover:shadow-lg transition-shadow duration-300`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        />
                        <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {status}
                        </span>
                      </motion.div>
                    )
                  )}
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Implementations Grid */}
        <section className="py-10 container">
          <div className=" ">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {implementations.map((implementation, index) => (
                <motion.div
                  key={implementation.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.05,
                    rotateY: 3,
                    rotateX: 3,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative perspective-1000"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 via-white/95 to-white/90 dark:from-gray-900/90 dark:via-gray-800/95 dark:to-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 p-5 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group-hover:border-gray-300/70 dark:group-hover:border-gray-600/70">
                    {/* Enhanced background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-blue-50/15 to-cyan-50/20 dark:from-purple-950/20 dark:via-blue-950/15 dark:to-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-50"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 10 - 5, 0],
                            scale: [0, 1, 0],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: 'easeInOut',
                          }}
                        />
                      ))}
                    </div>

                    {/* Subtle mesh gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${implementation.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Status and Category badges with enhanced animations */}
                    <motion.div
                      className="relative flex items-start justify-between mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <motion.div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${implementation.gradient} text-white text-lg font-bold shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {implementation.title.split(' ')[0].slice(0, 2)}
                      </motion.div>
                      <div className="flex flex-col gap-2">
                        <motion.span
                          className={getStatusBadge(implementation.status)}
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {implementation.status}
                        </motion.span>
                        <motion.span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${implementation.gradient} text-white shadow-md hover:shadow-lg transition-shadow duration-300`}
                          whileHover={{ scale: 1.05, rotate: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {implementation.category}
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.h3
                      className="relative font-bold text-xl text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {implementation.title.split(' ').slice(1).join(' ')}
                    </motion.h3>

                    <motion.p
                      className="relative text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {implementation.description}
                    </motion.p>

                    {/* Enhanced complexity indicator with animated progress */}
                    <motion.div
                      className="relative mb-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                          Complexity Level
                        </span>
                        <motion.div
                          className={`px-3 py-1.5 rounded-lg ${
                            getComplexityStyle(implementation.complexity)
                              .bgColor
                          } backdrop-blur-sm`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <span
                            className={`text-xs font-bold ${
                              getComplexityStyle(implementation.complexity)
                                .color
                            }`}
                          >
                            {implementation.complexity}
                          </span>
                        </motion.div>
                      </div>
                      <div className="w-full bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                        <motion.div
                          className={`h-2.5 rounded-full ${
                            getComplexityStyle(implementation.complexity)
                              .bgColor
                          } shadow-sm`}
                          initial={{ width: 0 }}
                          animate={{
                            width:
                              implementation.complexity === 'Beginner'
                                ? '20%'
                                : implementation.complexity === 'Intermediate'
                                ? '60%'
                                : '100%',
                          }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1 + 0.7,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Enhanced techniques with staggered animations */}
                    <motion.div
                      className="relative mb-8 flex-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    >
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3 block">
                        Key Techniques
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {implementation.techniques
                          .slice(0, 3)
                          .map((technique, techIndex) => (
                            <motion.span
                              key={technique}
                              className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 px-3 py-2 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-200 dark:ring-blue-700/50 backdrop-blur-sm hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800/40 dark:hover:to-indigo-800/40 transition-all duration-300"
                              initial={{ opacity: 0, scale: 0.8, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.1 + 0.9 + techIndex * 0.1,
                                type: 'spring',
                                stiffness: 200,
                              }}
                              whileHover={{
                                scale: 1.05,
                                y: -3,
                                boxShadow:
                                  '0 8px 25px rgba(59, 130, 246, 0.15)',
                              }}
                            >
                              {technique}
                            </motion.span>
                          ))}
                        {implementation.techniques.length > 3 && (
                          <motion.span
                            className="inline-flex items-center rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + 1.2,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            +{implementation.techniques.length - 3} more
                          </motion.span>
                        )}
                      </div>
                    </motion.div>

                    {/* Enhanced action buttons with premium animations */}
                    <motion.div
                      className="relative flex gap-3"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 1.3 }}
                    >
                      <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={implementation.demoHref}
                          className={`w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-400 ${
                            implementation.status === 'Ready'
                              ? `text-white bg-gradient-to-r ${implementation.gradient} hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 backdrop-blur-sm`
                              : 'text-gray-400 bg-gray-100/80 dark:bg-gray-800/80 cursor-not-allowed backdrop-blur-sm'
                          }`}
                          {...(implementation.status !== 'Ready' && {
                            'aria-disabled': 'true',
                          })}
                        >
                          <motion.span
                            className="flex items-center"
                            whileHover={
                              implementation.status === 'Ready' ? { x: 2 } : {}
                            }
                          >
                            {implementation.status === 'Ready'
                              ? 'View Demo'
                              : 'Coming Soon'}
                            {implementation.status === 'Ready' && (
                              <motion.svg
                                className="ml-2 w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                whileHover={{ x: 3, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </motion.svg>
                            )}
                          </motion.span>
                        </Link>
                      </motion.div>

                      <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <a
                          href={implementation.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-400 ${
                            implementation.status === 'Ready'
                              ? 'text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 border-2 border-gray-200/60 dark:border-gray-700/60 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-600 backdrop-blur-sm'
                              : 'text-gray-400 bg-gray-100/80 dark:bg-gray-800/80 cursor-not-allowed backdrop-blur-sm'
                          }`}
                          {...(implementation.status !== 'Ready' && {
                            'aria-disabled': 'true',
                          })}
                        >
                          <motion.span
                            className="flex items-center"
                            whileHover={
                              implementation.status === 'Ready' ? { x: 2 } : {}
                            }
                          >
                            {implementation.status === 'Ready'
                              ? 'View Code'
                              : 'Coming Soon'}
                            {implementation.status === 'Ready' && (
                              <motion.svg
                                className="ml-2 w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                whileHover={{ x: 3, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </motion.svg>
                            )}
                          </motion.span>
                        </a>
                      </motion.div>
                    </motion.div>

                    {/* Clean border enhancement only */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${implementation.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                      style={{ padding: '1px' }}
                    >
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white/90 via-white/95 to-white/90 dark:from-gray-900/90 dark:via-gray-800/95 dark:to-gray-900/90"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Enhanced Contributing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center bg-gradient-to-br from-white/80 via-purple-50/80 to-blue-50/80 dark:from-gray-900/80 dark:via-purple-950/30 dark:to-blue-950/30 backdrop-blur-xl rounded-3xl p-12 relative overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                {/* Enhanced background decorations */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/8 to-cyan-500/5"></div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-2xl"></div>

                <div className="relative">
                  {/* Enhanced header */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <motion.div
                        className="text-5xl mr-3"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        🤝
                      </motion.div>
                      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Join Our Community
                      </h2>
                    </div>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                      Be part of something amazing! Help us build the most
                      comprehensive frontend learning platform.
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {' '}
                        Every contribution matters
                      </span>
                      , whether you're a beginner or an expert.
                    </p>

                    {/* Contribution stats */}
                    <motion.div
                      className="flex flex-wrap justify-center gap-6 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {[
                        { icon: '👥', number: '50+', label: 'Contributors' },
                        { icon: '🎯', number: '200+', label: 'Issues Solved' },
                        { icon: '⭐', number: '1.2k+', label: 'GitHub Stars' },
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          className="text-center group"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-2xl mb-1">{stat.icon}</div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Ways to contribute */}
                  <motion.div
                    className="grid md:grid-cols-3 gap-6 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {[
                      {
                        icon: '💡',
                        title: 'Share Ideas',
                        description:
                          'Suggest new implementations, features, or improvements',
                        action: 'Open an Issue',
                        color: 'from-purple-500 to-purple-600',
                      },
                      {
                        icon: '🐛',
                        title: 'Fix Bugs',
                        description:
                          'Help us improve by reporting or fixing bugs you find',
                        action: 'Report Bug',
                        color: 'from-blue-500 to-blue-600',
                      },
                      {
                        icon: '🚀',
                        title: 'Add Features',
                        description:
                          'Build new implementations or enhance existing ones',
                        action: 'Submit PR',
                        color: 'from-cyan-500 to-cyan-600',
                      },
                    ].map((way, index) => (
                      <motion.div
                        key={way.title}
                        className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center group hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300"
                        whileHover={{ y: -5, scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      >
                        <div className="text-4xl mb-4">{way.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {way.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                          {way.description}
                        </p>
                        <div
                          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${way.color} text-white`}
                        >
                          {way.action}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Getting started steps */}
                  <motion.div
                    className="bg-gradient-to-r from-gray-50/80 to-white/80 dark:from-gray-800/80 dark:to-gray-900/80 rounded-2xl p-8 mb-8 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                      🎯 Quick Start Guide
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        { step: '1', icon: '🍴', text: 'Fork the repo' },
                        { step: '2', icon: '📥', text: 'Clone locally' },
                        { step: '3', icon: '💻', text: 'Make changes' },
                        { step: '4', icon: '🚀', text: 'Create PR' },
                      ].map((item, index) => (
                        <motion.div
                          key={item.step}
                          className="text-center group"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.6 + index * 0.1,
                          }}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto group-hover:shadow-lg transition-shadow duration-300">
                            {item.step}
                          </div>
                          <div className="text-2xl mb-2">{item.icon}</div>
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {item.text}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href="https://github.com/NH-Rifat/frontend-mastering/blob/main/.github/CONTRIBUTING.md"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-2">📚</span>
                        Read Full Guide
                        <motion.svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </motion.svg>
                      </a>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href="https://github.com/NH-Rifat/frontend-mastering/issues"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-700 dark:text-purple-300 bg-white/90 dark:bg-gray-800/90 border-2 border-purple-200 dark:border-purple-700 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 dark:hover:border-purple-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-2">🔍</span>
                        Browse Issues
                        <motion.svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </motion.svg>
                      </a>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href="https://github.com/NH-Rifat/frontend-mastering"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-2">⭐</span>
                        Star on GitHub
                        <motion.svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ rotate: 12 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </motion.svg>
                      </a>
                    </motion.div>
                  </motion.div>

                  {/* Encouraging message */}
                  <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      💙{' '}
                      <span className="font-semibold">New to open source?</span>{' '}
                      No problem! We have issues labeled
                      <span className="inline-flex items-center px-2 py-1 mx-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                        good first issue
                      </span>
                      perfect for beginners.
                    </p>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
