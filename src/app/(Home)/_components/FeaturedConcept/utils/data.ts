export const featuredConceptData = {
  // Header content
  header: {
    badge: {
      icon: '✨',
      text: 'Featured Learning Paths',
      gradientColor: 'from-indigo-500 to-purple-500',
    },
    title: {
      beforeHighlight: 'Skip The Tutorial Hell.',
      highlight: 'Build Real Projects',
      afterHighlight: '',
      gradientColor: 'from-indigo-600 via-purple-600 to-pink-600',
    },
    description: `Stop watching endless tutorials and start building. Each concept includes real-world projects, practical examples, and the exact skills employers are looking for. No fluff, just results.`,
    painPoints: {
      title: 'Why Choose Our Approach?',
      items: [
        {
          icon: '❌',
          title: 'No More Tutorial Hell',
          description: 'Build instead of watching',
          gradientColor: 'from-red-500 to-pink-500',
        },
        {
          icon: '🎯',
          title: 'Job-Ready Skills',
          description: 'What employers actually want',
          gradientColor: 'from-blue-500 to-indigo-500',
        },
        {
          icon: '⚡',
          title: 'Fast Track Learning',
          description: 'Skip the overwhelm',
          gradientColor: 'from-green-500 to-teal-500',
        },
      ],
    },
  },

  // Card configuration
  cards: {
    maxDisplay: 6,
    hoverTranslate: -12,
    hoverScale: 1.03,
    iconRotation: 360,
    iconDuration: 10,
    colorSchemes: [
      {
        primary: '#4F46E5',
        secondary: '#9333EA',
        gradient: 'rgba(79, 70, 229, 1), rgba(147, 51, 234, 0.8)',
        backgroundGradient: 'rgba(79, 70, 229, 0.1), rgba(147, 51, 234, 0.1)',
        border: 'rgba(79, 70, 229, 0.2)',
      },
      {
        primary: '#9333EA',
        secondary: '#EC4899',
        gradient: 'rgba(147, 51, 234, 1), rgba(236, 72, 153, 0.8)',
        backgroundGradient: 'rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1)',
        border: 'rgba(147, 51, 234, 0.2)',
      },
      {
        primary: '#06B6D4',
        secondary: '#4F46E5',
        gradient: 'rgba(6, 182, 212, 1), rgba(79, 70, 229, 0.8)',
        backgroundGradient: 'rgba(6, 182, 212, 0.1), rgba(79, 70, 229, 0.1)',
        border: 'rgba(6, 182, 212, 0.2)',
      },
      {
        primary: '#A855F7',
        secondary: '#06B6D4',
        gradient: 'rgba(168, 85, 247, 1), rgba(6, 182, 212, 0.8)',
        backgroundGradient: 'rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1)',
        border: 'rgba(168, 85, 247, 0.2)',
      },
      {
        primary: '#EC4899',
        secondary: '#A855F7',
        gradient: 'rgba(236, 72, 153, 1), rgba(168, 85, 247, 0.8)',
        backgroundGradient: 'rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)',
        border: 'rgba(236, 72, 153, 0.2)',
      },
      {
        primary: '#3B82F6',
        secondary: '#9333EA',
        gradient: 'rgba(59, 130, 246, 1), rgba(147, 51, 234, 0.8)',
        backgroundGradient: 'rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)',
        border: 'rgba(59, 130, 246, 0.2)',
      },
    ],
    icons: ['⚡', '🚀', '💎', '🎯', '🔥', '✨'],
    statusIndicators: [
      { color: '#10B981', level: 'Easy' },
      { color: '#F59E0B', level: 'Medium' },
      { color: '#EF4444', level: 'Hard' },
    ],
    insights: {
      prerequisites: [
        { icon: '🌐', label: 'HTML/CSS' },
        { icon: '🔗', label: 'JavaScript' },
        { icon: '🧠', label: 'None' },
      ],
      types: [
        { icon: '🛠️', label: 'Practical' },
        { icon: '💡', label: 'Concepts' },
        { icon: '🎨', label: 'Creative' },
      ],
      difficulties: [
        { icon: '●●○', label: 'Medium', color: '#10B981' },
        { icon: '●●●', label: 'Advanced', color: '#F59E0B' },
        { icon: '●○○', label: 'Beginner', color: '#EF4444' },
      ],
    },
  },

  // Animation settings
  animations: {
    badge: {
      duration: 3,
      rotateScale: [0, 360],
      scaleValues: [1, 1.1, 1],
    },
    header: {
      staggerContainer: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
      titleAnimation: {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: 0.1 },
        },
      },
    },
    painPoints: {
      staggerContainer: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
      painPointAnimation: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
      },
    },
    background: {
      floatingElements: [
        {
          position: 'top-32 right-20',
          size: 'w-64 h-64',
          colors: 'from-indigo-400/10 to-purple-400/10',
          duration: 8,
          movement: {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
          },
        },
        {
          position: 'bottom-20 left-16',
          size: 'w-48 h-48',
          colors: 'from-blue-400/10 to-cyan-400/10',
          duration: 10,
          delay: 2,
          movement: {
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -15, 0],
          },
        },
      ],
    },
    cards: {
      stagger: 0.1,
      staggerContainer: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
      cardAnimation: {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      },
    },
  },

  // CTA section
  cta: {
    button: {
      text: 'Explore All Concepts',
      href: '/concepts',
    },
    info: {
      text: '12+ concepts available',
      indicator: {
        color: '#10B981',
        animation: { opacity: [0.5, 1, 0.5], duration: 2 },
      },
    },
  },
};

export type FeaturedConceptData = typeof featuredConceptData;
export type ColorScheme = (typeof featuredConceptData.cards.colorSchemes)[0];
export type PainPoint = (typeof featuredConceptData.header.painPoints.items)[0];
export type FloatingElement =
  (typeof featuredConceptData.animations.background.floatingElements)[0];
