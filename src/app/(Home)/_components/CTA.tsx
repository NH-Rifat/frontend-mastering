'use client';

import { FadeIn } from '@/components/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-32 w-80 h-80 bg-gradient-to-br from-white/10 to-purple-300/20 rounded-full blur-3xl z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-300/20 to-white/10 rounded-full blur-3xl z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-pink-300/15 to-indigo-300/15 rounded-full blur-2xl z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 z-30">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-40">
        <FadeIn>
          <div className="text-center text-white max-w-4xl mx-auto relative">
            {/* Grid Pattern in Content Area */}
            <div className="absolute inset-0 -inset-x-8 -inset-y-8">
              {/* Main grid pattern with gradient fade */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 1) 2px, transparent 2px),
                    linear-gradient(90deg, rgba(255, 255, 255, 1) 2px, transparent 2px)
                  `,
                  backgroundSize: '80px 80px',
                  maskImage:
                    'radial-gradient(ellipse 85% 90% at center, black 20%, transparent 80%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 85% 90% at center, black 20%, transparent 80%)',
                  opacity: 0.04,
                }}
              />

              {/* Secondary grid pattern with gradient fade */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  maskImage:
                    'radial-gradient(ellipse 80% 85% at center, black 30%, transparent 70%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 80% 85% at center, black 30%, transparent 70%)',
                  opacity: 0.05,
                }}
              />
            </div>
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-8"
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
                className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-sm font-bold">🤝</span>
              </motion.div>
              <span className="text-white/90 font-medium">
                Join Our Community
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-white">Help Us Build the</span>
              <br />
              <span className="text-white drop-shadow-lg">
                Ultimate Frontend Resource
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              This is an
              <span className="font-semibold text-white">
                {' '}
                open-source project
              </span>{' '}
              built by developers, for developers. Your contributions help
              thousands learn better.
              <span className="font-semibold text-white">
                {' '}
                Add examples, fix bugs, or suggest improvements!
              </span>
            </motion.p>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 mb-12 text-sm"
            >
              {[
                { icon: '⭐', metric: '150+', label: 'GitHub Stars' },
                { icon: '👥', metric: '25+', label: 'Contributors' },
                { icon: '🔧', metric: '300+', label: 'Commits' },
                { icon: '📝', metric: '50+', label: 'Examples' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex flex-col items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-lg text-white">
                    {item.metric}
                  </span>
                  <span className="text-xs text-white/80 text-center">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary CTA - Contribute */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <a
                  href="https://github.com/NH-Rifat/frontend-mastering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center px-10 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Button Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Button Content */}
                  <svg
                    className="relative z-10 mr-3 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="relative z-10">Contribute on GitHub</span>
                  <motion.svg
                    className="relative z-10 ml-3 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: 0 }}
                    whileHover={{ x: 4 }}
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

              {/* Secondary CTA - Explore */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/concepts"
                  className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 hover:border-white/50 shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-300"
                >
                  <span className="transition-colors duration-300">
                    Explore Examples
                  </span>
                  <motion.svg
                    className="ml-3 w-5 h-5 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>

            {/* Community Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-white/80"
            >
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                <span>Open Source & Community Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">🤝</span>
                <span>All Skill Levels Welcome</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">💡</span>
                <span>Your Ideas Matter</span>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;
