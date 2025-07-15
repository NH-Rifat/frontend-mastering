"use client";

import { Header } from "@/components/ui";
import { Footer } from "@/components/ui/Footer";
import { FadeIn, StaggerContainer, ScaleIn } from "@/components/animations";
import { implementations, statusConfig, complexityConfig } from "@/data/implementations";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ImplementationsPage() {
  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
    const config = statusConfig[status as keyof typeof statusConfig];
    return `${baseClasses} ${config?.color || statusConfig["Coming Soon"].color}`;
  };

  const getComplexityStyle = (complexity: string) => {
    const config = complexityConfig[complexity as keyof typeof complexityConfig];
    return config || complexityConfig["Beginner"];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <FadeIn>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  💻{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Implementations
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Production-ready code examples for every concept. Copy, modify, and use in your projects.
                  All implementations include setup instructions, performance benchmarks, and best practices.
                </p>
                
                {/* Status indicators */}
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  {Object.entries(statusConfig).map(([status, config]) => (
                    <div key={status} className="flex items-center gap-2">
                      <span className={`w-3 h-3 ${config.dotColor} rounded-full`}></span>
                      <span className="text-gray-600 dark:text-gray-400">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Implementations Grid */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {implementations.map((implementation, index) => (
                <motion.div 
                  key={implementation.title}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${implementation.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Status and Category badges */}
                    <div className="relative flex items-start justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${implementation.gradient} text-white text-xl shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                        {implementation.title.split(' ')[0]}
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className={getStatusBadge(implementation.status)}>
                          {implementation.status}
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${implementation.gradient} text-white shadow-sm`}>
                          {implementation.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="relative font-semibold text-lg text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 mb-3">
                      {implementation.title.split(' ').slice(1).join(' ')}
                    </h3>

                    <p className="relative text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {implementation.description}
                    </p>

                    {/* Complexity indicator */}
                    <div className="relative mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Complexity
                        </span>
                        <div className={`px-2 py-1 rounded-md ${getComplexityStyle(implementation.complexity).bgColor}`}>
                          <span className={`text-xs font-medium ${getComplexityStyle(implementation.complexity).color}`}>
                            {implementation.complexity}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Techniques */}
                    <div className="relative mb-6">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 block">
                        Techniques
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {implementation.techniques.slice(0, 3).map((technique) => (
                          <span
                            key={technique}
                            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
                          >
                            {technique}
                          </span>
                        ))}
                        {implementation.techniques.length > 3 && (
                          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                            +{implementation.techniques.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="relative flex gap-2">
                      <Link
                        href={implementation.demoHref}
                        className={`flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                          implementation.status === "Ready"
                            ? `text-white bg-gradient-to-r ${implementation.gradient} hover:shadow-lg hover:-translate-y-0.5`
                            : "text-gray-400 bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                        }`}
                        {...(implementation.status !== "Ready" && { "aria-disabled": "true" })}
                      >
                        {implementation.status === "Ready" ? "View Demo" : "Coming Soon"}
                        {implementation.status === "Ready" && (
                          <motion.svg 
                            className="ml-2 w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ x: 0 }}
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </motion.svg>
                        )}
                      </Link>
                      
                      <a
                        href={implementation.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                          implementation.status === "Ready"
                            ? "text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md hover:-translate-y-0.5"
                            : "text-gray-400 bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                        }`}
                        {...(implementation.status !== "Ready" && { "aria-disabled": "true" })}
                      >
                        {implementation.status === "Ready" ? "View Code" : "Coming Soon"}
                        {implementation.status === "Ready" && (
                          <motion.svg 
                            className="ml-2 w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ x: 0 }}
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </motion.svg>
                        )}
                      </a>
                    </div>

                    {/* Subtle border gradient on hover */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${implementation.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} style={{ padding: '1px' }}>
                      <div className="w-full h-full rounded-xl bg-white dark:bg-gray-950"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center bg-gradient-to-r from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-12 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
                
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Want to Contribute?
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Help us build more implementations! Whether you want to improve existing examples 
                    or add new concepts, we welcome your contributions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <ScaleIn>
                      <a
                        href="https://github.com/NH-Rifat/frontend-mastering/blob/main/.github/CONTRIBUTING.md"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Contributing Guide
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </ScaleIn>
                    <ScaleIn delay={0.2}>
                      <a
                        href="https://github.com/NH-Rifat/frontend-mastering/issues"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Browse Issues
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </ScaleIn>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
