import { FadeIn, StaggerContainer } from '@/components/animations';
import { features } from '@/data/content';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section className="relative py-20  overflow-hidden">
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30"></div>

        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"
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
          className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-purple-400/15 to-cyan-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              className="relative inline-flex items-center justify-center mb-8"
            >
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-24 h-24 border-2 border-dashed border-blue-300/30 dark:border-blue-600/30 rounded-full"
              />

              {/* Central Icon */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <motion.span
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-white text-2xl font-bold"
                >
                  ⚡
                </motion.span>
              </div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  style={{
                    left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 1, 0.4],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Subtitle Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-cyan-950/30 rounded-full border border-blue-200/50 dark:border-blue-700/30 mb-6"
              >
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  🚀 Why Choose Frontend Mastering
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-gray-900 dark:text-gray-100">
                  Transform Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Development Journey
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We don't just teach code – we build
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {' '}
                  confident developers
                </span>
                . Our platform combines cutting-edge curriculum with real-world
                projects, ensuring you master frontend development through
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {' '}
                  hands-on experience
                </span>
                , not just theory.
              </p>

              {/* Key Value Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 mt-8 text-sm"
              >
                {[
                  {
                    icon: '💡',
                    text: 'Industry-Relevant Skills',
                    color: 'text-blue-600 dark:text-blue-400',
                  },
                  {
                    icon: '🎯',
                    text: 'Project-Based Learning',
                    color: 'text-purple-600 dark:text-purple-400',
                  },
                  {
                    icon: '⚡',
                    text: 'Career-Ready Portfolio',
                    color: 'text-cyan-600 dark:text-cyan-400',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <span>{item.icon}</span>
                    <span className={`font-medium ${item.color}`}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              {/* Simplified Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/15 group-hover:via-purple-500/15 group-hover:to-cyan-500/15 rounded-3xl blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

              {/* Main Card */}
              <div className="relative text-center p-8 lg:p-10 rounded-3xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 group-hover:border-blue-300/60 dark:group-hover:border-blue-600/60 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Simplified Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/8 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/8 to-transparent rounded-full transform -translate-x-4 translate-y-4"></div>
                </div>

                {/* Enhanced Icon */}
                <motion.div
                  className="relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-2xl mb-6 shadow-xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${
                      index % 4 === 0
                        ? 'rgba(59, 130, 246, 1), rgba(147, 51, 234, 0.8)'
                        : index % 4 === 1
                        ? 'rgba(147, 51, 234, 1), rgba(236, 72, 153, 0.8)'
                        : index % 4 === 2
                        ? 'rgba(6, 182, 212, 1), rgba(59, 130, 246, 0.8)'
                        : 'rgba(168, 85, 247, 1), rgba(6, 182, 212, 0.8)'
                    })`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {/* Simplified Rotating Border */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0 rounded-2xl opacity-40"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <span className="relative z-10 text-white text-2xl lg:text-3xl font-bold">
                    {feature.icon}
                  </span>

                  {/* Inner Glow */}
                  <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/15 to-transparent"></div>
                </motion.div>

                {/* Enhanced Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Enhanced Description */}
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                  {feature.description}
                </p>

                {/* Simplified Hover Indicator */}
                <div
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 h-1 w-0 group-hover:w-12 rounded-full transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${
                      index % 4 === 0
                        ? 'rgba(59, 130, 246, 1), rgba(147, 51, 234, 1)'
                        : index % 4 === 1
                        ? 'rgba(147, 51, 234, 1), rgba(236, 72, 153, 1)'
                        : index % 4 === 2
                        ? 'rgba(6, 182, 212, 1), rgba(59, 130, 246, 1)'
                        : 'rgba(168, 85, 247, 1), rgba(6, 182, 212, 1)'
                    })`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Features;
