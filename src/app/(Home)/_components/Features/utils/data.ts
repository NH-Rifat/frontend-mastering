export const featuresData = {
  // Section header content
  header: {
    badge: {
      icon: '🚀',
      text: 'Cutting-Edge Curriculum',
    },
    title: {
      main: 'Transform Your',
      highlight: 'Development Journey',
    },
    description: `We don't just teach code – we build confident developers. Our platform combines cutting-edge curriculum with real-world projects, ensuring you master frontend development through hands-on experience, not just theory.`,
    keyValuePoints: [
      {
        icon: '💡',
        text: 'Industry-Relevant Skills',
        variant: 'primary' as const,
      },
      {
        icon: '🎯',
        text: 'Project-Based Learning',
        variant: 'accent' as const,
      },
      {
        icon: '⚡',
        text: 'Career-Ready Portfolio',
        variant: 'info' as const,
      },
    ],
  },

  // Main features list
  features: [
    {
      icon: '🚀',
      title: 'Performance First',
      description: 'Every implementation is optimized for real-world performance with benchmarks and best practices.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🎯',
      title: 'Production Ready',
      description: 'Copy-paste code that works in production environments with proper error handling.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: '📚',
      title: 'Learn by Doing',
      description: 'Interactive examples and live demos help you understand concepts through practice.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🔧',
      title: 'Modern Tools',
      description: 'Built with the latest technologies including Next.js 15, TypeScript, and Tailwind CSS.',
      gradient: 'from-orange-500 to-red-500',
    },
  ],

  // Animation and styling configurations
  animations: {
    headerIcon: {
      mainIcon: '⚡',
      particleCount: 6,
      rotationDuration: 20,
      particleAnimation: {
        duration: 2,
        delay: 0.3,
      },
    },
    cards: {
      hoverScale: 1.02,
      hoverTranslate: -12,
      stagger: 0.1,
    },
    background: {
      floatingElements: [
        {
          position: 'top-20 left-20',
          size: 'w-40 h-40',
          colors: 'from-blue-400/15 to-purple-400/15',
          duration: 8,
        },
        {
          position: 'bottom-32 right-32',
          size: 'w-48 h-48',
          colors: 'from-purple-400/15 to-cyan-400/15',
          duration: 10,
          delay: 2,
        },
      ],
    },
  },

  // Color schemes for feature cards
  cardColorSchemes: [
    {
      gradient: 'rgba(59, 130, 246, 1), rgba(147, 51, 234, 0.8)',
      hover: 'rgba(59, 130, 246, 1), rgba(147, 51, 234, 1)',
    },
    {
      gradient: 'rgba(147, 51, 234, 1), rgba(236, 72, 153, 0.8)',
      hover: 'rgba(147, 51, 234, 1), rgba(236, 72, 153, 1)',
    },
    {
      gradient: 'rgba(6, 182, 212, 1), rgba(59, 130, 246, 0.8)',
      hover: 'rgba(6, 182, 212, 1), rgba(59, 130, 246, 1)',
    },
    {
      gradient: 'rgba(168, 85, 247, 1), rgba(6, 182, 212, 0.8)',
      hover: 'rgba(168, 85, 247, 1), rgba(6, 182, 212, 1)',
    },
  ],
};

export type FeaturesData = typeof featuresData;
export type Feature = typeof featuresData.features[0];
export type KeyValuePoint = typeof featuresData.header.keyValuePoints[0];
export type FloatingElement = typeof featuresData.animations.background.floatingElements[0];
