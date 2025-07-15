export const implementations = [
  {
    title: "🔄 Virtualization",
    description: "Efficient rendering of large lists with fixed and dynamic heights. Includes React Window examples and custom hooks.",
    href: "https://github.com/NH-Rifat/frontend-mastering/tree/main/implementations/virtualization",
    demoHref: "/implementations/virtualization/demo",
    status: "Ready",
    techniques: ["React Window", "Custom Hooks", "Performance Optimization"],
    complexity: "Intermediate",
    gradient: "from-blue-500 to-cyan-500",
    category: "Performance"
  },
  {
    title: "🔃 Infinite Scroll",
    description: "Seamless content loading with Intersection Observer API. Includes error handling and loading states.",
    href: "https://github.com/NH-Rifat/frontend-mastering/tree/main/implementations/infinite-scroll",
    demoHref: "/implementations/infinite-scroll/demo",
    status: "Ready",
    techniques: ["Intersection Observer", "React Query", "Error Boundaries"],
    complexity: "Beginner",
    gradient: "from-green-500 to-emerald-500",
    category: "User Experience"
  },
  {
    title: "🔌 Data Fetching",
    description: "Complete examples of CSR, SSR, SSG, and ISR patterns with Next.js 15.",
    href: "https://github.com/NH-Rifat/frontend-mastering/tree/main/implementations/data-fetching",
    demoHref: "/implementations/data-fetching/demo",
    status: "Coming Soon",
    techniques: ["Next.js", "React Query", "Server Components"],
    complexity: "Intermediate",
    gradient: "from-purple-500 to-pink-500",
    category: "Architecture"
  },
  {
    title: "🏗️ State Management",
    description: "Comprehensive examples using Zustand, Redux Toolkit, and Jotai for different use cases.",
    href: "https://github.com/NH-Rifat/frontend-mastering/tree/main/implementations/state-management",
    demoHref: "/implementations/state-management/demo",
    status: "Coming Soon",
    techniques: ["Zustand", "Redux Toolkit", "Jotai"],
    complexity: "Advanced",
    gradient: "from-orange-500 to-red-500",
    category: "Architecture"
  },
  {
    title: "⚡ Performance Optimization",
    description: "Bundle analysis, code splitting, and Core Web Vitals optimization techniques.",
    href: "https://github.com/NH-Rifat/frontend-mastering/tree/main/implementations/performance",
    demoHref: "/implementations/performance/demo",
    status: "In Progress",
    techniques: ["Bundle Analysis", "Code Splitting", "Web Vitals"],
    complexity: "Advanced",
    gradient: "from-yellow-500 to-orange-500",
    category: "Performance"
  },
  {
    title: "🧩 Component Architecture",
    description: "Scalable component patterns, composition strategies, and design system implementations.",
    href: "https://github.com/NH-Rifat/frontend-mastering/tree/main/implementations/component-architecture",
    demoHref: "/implementations/component-architecture/demo",
    status: "Coming Soon",
    techniques: ["Design Systems", "Composition", "TypeScript"],
    complexity: "Intermediate",
    gradient: "from-indigo-500 to-purple-500",
    category: "Architecture"
  }
];

export const statusConfig = {
  "Ready": {
    color: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-300",
    dotColor: "bg-green-500"
  },
  "In Progress": {
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-300",
    dotColor: "bg-yellow-500"
  },
  "Coming Soon": {
    color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    dotColor: "bg-gray-400"
  }
};

export const complexityConfig = {
  "Beginner": {
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20"
  },
  "Intermediate": {
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
  },
  "Advanced": {
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-900/20"
  }
};
