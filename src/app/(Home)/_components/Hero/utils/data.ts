export const heroData = {
  // Typing animation settings
  typing: {
    fullText: 'Frontend Mastering Excellence',
    speed: 50,
    frontendMastering: 'Frontend Mastering',
    excellence: 'Excellence',
  },

  // Hero content
  content: {
    badge: {
      icon: '🚀',
      text: 'Welcome to Frontend Mastering',
    },
    subtitle:
      'Learn modern frontend concepts with interactive examples, production-ready code, and best practices.',
    buttons: [
      {
        text: 'Explore Concepts',
        href: '/concepts',
        variant: 'primary' as const,
      },
      {
        text: 'View Code Examples',
        href: '/concepts',
        variant: 'secondary' as const,
      },
    ],
  },

  // Stats data
  stats: [
    {
      value: '15+',
      label: 'Concepts Covered',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      value: '10+',
      label: 'Live Demos',
      gradient: 'from-purple-500 to-purple-500',
    },
    {
      value: '100%',
      label: 'Open Source',
      gradient: 'from-cyan-500 to-emerald-500',
    },
    {
      value: 'TypeScript',
      label: 'Type Safe',
      gradient: 'from-blue-500 to-blue-400',
    },
  ],

  // Animation settings
  animations: {
    particles: {
      count: 50,
      colors: [
        'rgba(59, 130, 246, 0.6)',
        'rgba(147, 51, 234, 0.6)',
        'rgba(6, 182, 212, 0.6)',
      ],
      shadowColors: [
        'rgba(59, 130, 246, 0.3)',
        'rgba(147, 51, 234, 0.3)',
        'rgba(6, 182, 212, 0.3)',
      ],
    },
    gridIntersections: {
      count: 0, // Currently disabled
      colors: ['from-blue-400/40 to-purple-400/40'],
    },
  },
};
