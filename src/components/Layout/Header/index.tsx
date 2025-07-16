'use client';

import { navigationItems } from '@/data/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/70 dark:border-gray-700/50 shadow-lg shadow-black/5'
          : 'bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-200/40 dark:border-gray-700/30'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Enhanced Logo Icon */}
              <div className="relative">
                <motion.div
                  className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600  flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  whileHover={{ rotate: 3, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Logo text with better styling */}
                  <span className="text-white font-black  tracking-tighter relative z-10 drop-shadow-sm">
                    FM
                  </span>

                  {/* Subtle inner glow */}
                  <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-30"></div>
                </motion.div>

                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 scale-110"></div>

                {/* Floating particles effect */}
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
              </div>

              {/* Enhanced Brand Text */}
              <div className="flex flex-col">
                <motion.span
                  className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:via-purple-600 group-hover:to-blue-600 transition-all duration-500"
                  whileHover={{ letterSpacing: '0.02em' }}
                  transition={{ duration: 0.3 }}
                >
                  Frontend Mastering
                </motion.span>
                <motion.span
                  className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn. Build. Master.
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                whileHover={{ y: -1 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-all duration-300 group rounded-lg hover:bg-gray-50/60 dark:hover:bg-gray-700/40"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                    {/* External link icon */}
                    <svg
                      className="inline-block ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-all duration-300 group rounded-lg hover:bg-gray-50/60 dark:hover:bg-gray-700/40"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, ease: 'easeOut' }}
          >
            <Link
              href="https://github.com/NH-Rifat/frontend-mastering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Star on GitHub
              <motion.span
                className="ml-1 text-xs bg-white/20 px-1.5 py-0.5 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐
              </motion.span>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100/70 dark:hover:bg-gray-700/50 transition-colors duration-300"
          >
            <motion.div
              animate={isMenuOpen ? 'open' : 'closed'}
              className="w-6 h-6 flex flex-col justify-center items-center relative"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: 45, y: 6, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block absolute rounded-full"
                style={{ transformOrigin: 'center' }}
              />
              <motion.span
                variants={{
                  closed: { opacity: 1, x: 0 },
                  open: { opacity: 0, x: -10 },
                }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block absolute rounded-full"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: -45, y: -6, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block absolute rounded-full"
                style={{ transformOrigin: 'center' }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="lg:hidden border-t border-gray-200/50 dark:border-gray-700/40 py-6 bg-white/95 dark:bg-gray-800/90 backdrop-blur-xl rounded-b-xl"
            >
              <div className="px-4">
                <nav className="flex flex-col space-y-1">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, ease: 'easeOut' }}
                    >
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 rounded-lg hover:bg-gray-50/60 dark:hover:bg-gray-700/40"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="font-medium">{item.label}</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 rounded-lg hover:bg-gray-50/60 dark:hover:bg-gray-700/40 font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navigationItems.length * 0.1 + 0.2 }}
                    className="pt-4 mt-4 border-t border-gray-200/50 dark:border-gray-600/40"
                  >
                    <Link
                      href="https://github.com/NH-Rifat/frontend-mastering"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3 px-4 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-purple-600 hover:to-blue-600 shadow-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        className="mr-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Star on GitHub
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
