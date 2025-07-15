import { FadeIn, ScaleIn } from '@/components/animations';
import { heroStats } from '@/data/content';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Frontend Mastering Excellence';
  const typingSpeed = 50;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  // Split the text for different styling
  const renderStyledText = () => {
    const frontendMastering = 'Frontend Mastering';
    const excellence = 'Excellence';

    if (displayedText.length <= frontendMastering.length) {
      // Still typing "Frontend Mastering"
      return (
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
          {displayedText}
        </span>
      );
    } else {
      // Typing "Excellence"
      const excellenceText = displayedText.slice(frontendMastering.length + 1); // +1 for space
      return (
        <>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            {frontendMastering}
          </span>
          <span className="text-gray-200"> {excellenceText}</span>
        </>
      );
    }
  };

  return (
    <section className="relative py-3 sm:py-20 2xl:py-10 3xl:py-28 overflow-hidden">
      {/* Enhanced Modern Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layered Animated Grids */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite',
          }}
        />

        {/* Secondary Grid Layer */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridMove 15s linear infinite reverse',
          }}
        />

        {/* Tertiary Fine Grid */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'gridMove 10s linear infinite',
          }}
        />

        {/* Enhanced Gradient Orbs with Glow */}
        <motion.div
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-cyan-500/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/25 via-pink-500/20 to-blue-500/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/15 via-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Floating Grid Intersections */}
        {[...Array(0)].map((_, i) => (
          <motion.div
            key={`intersection-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full shadow-lg"
            style={{
              left: `${(i % 5) * 20 + 10}%`,
              top: `${Math.floor(i / 5) * 25 + 20}%`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Enhanced Floating Particles with Trails */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: `linear-gradient(45deg, 
                ${
                  i % 3 === 0
                    ? 'rgba(59, 130, 246, 0.6)'
                    : i % 3 === 1
                    ? 'rgba(147, 51, 234, 0.6)'
                    : 'rgba(6, 182, 212, 0.6)'
                })`,
              boxShadow: `0 0 10px ${
                i % 3 === 0
                  ? 'rgba(59, 130, 246, 0.3)'
                  : i % 3 === 1
                  ? 'rgba(147, 51, 234, 0.3)'
                  : 'rgba(6, 182, 212, 0.3)'
              }`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Radial Grid Effect */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 dark:opacity-3"
          style={{
            background: `
              radial-gradient(circle at center, transparent 20%, rgba(59, 130, 246, 0.1) 20.5%, rgba(59, 130, 246, 0.1) 21%, transparent 21.5%),
              radial-gradient(circle at center, transparent 40%, rgba(147, 51, 234, 0.08) 40.5%, rgba(147, 51, 234, 0.08) 41%, transparent 41.5%),
              radial-gradient(circle at center, transparent 60%, rgba(6, 182, 212, 0.06) 60.5%, rgba(6, 182, 212, 0.06) 61%, transparent 61.5%)
            `,
            backgroundSize: '200px 200px, 300px 300px, 400px 400px',
            animation: 'rotateGrid 30s linear infinite',
          }}
        />

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes gridMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(60px, 60px);
            }
          }

          @keyframes rotateGrid {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `}</style>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-blue-700 dark:text-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-full border border-blue-200/60 dark:border-blue-700/60 shadow-lg backdrop-blur-sm">
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-base"
                >
                  �
                </motion.span>
                Welcome to Frontend Mastering
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </span>
            </motion.div>

            <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[1.2em]">
              {renderStyledText()}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Learn modern frontend concepts with
              <span className="font-semibold "> interactive examples</span>,
              <span className="font-semibold "> production-ready code</span>,
              and
              <span className="font-semibold "> best practices</span>.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <ScaleIn delay={0.8}>
                <Link
                  href="/concepts"
                  className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-purple-600 hover:to-blue-600 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform relative overflow-hidden"
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </Link>
              </ScaleIn>

              <ScaleIn delay={1.0}>
                <Link
                  href="/implementations"
                  className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-600/50 rounded-2xl hover:bg-white dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform"
                >
                  View Code Examples
                  <svg
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
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
                </Link>
              </ScaleIn>
            </div>
          </FadeIn>

          {/*Stats */}
          <FadeIn delay={1.2}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {heroStats.map((stat, index) => (
                <ScaleIn key={stat.label} delay={1.4 + index * 0.1}>
                  <motion.div
                    className="group text-center p-4 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-600/30 hover:border-blue-300/50 dark:hover:border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 break-words`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {stat.label}
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                  </motion.div>
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
