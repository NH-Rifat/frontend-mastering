import { ConceptCard } from "@/components/ui/ConceptCard";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  const concepts = [
    {
      title: "🔄 Virtualization",
      description: "Efficiently render large lists by only rendering visible items. Learn techniques to handle thousands of items with smooth performance.",
      href: "https://github.com/NH-Rifat/frontend-mastering/blob/main/concepts/virtualization.md",
      tags: ["Performance", "React", "Large Lists"],
      status: "complete" as const
    },
    {
      title: "🔃 Infinite Scroll",
      description: "Load content continuously as users scroll. Master intersection observers and loading states for seamless user experiences.",
      href: "https://github.com/NH-Rifat/frontend-mastering/blob/main/concepts/infinite-scroll.md", 
      tags: ["UX", "Performance", "API"],
      status: "complete" as const
    },
    {
      title: "🔌 Data Fetching Strategies",
      description: "Explore CSR, SSR, SSG, and ISR. Learn when to use each strategy and how to optimize data loading for your applications.",
      href: "https://github.com/NH-Rifat/frontend-mastering/blob/main/concepts/data-fetching.md",
      tags: ["Next.js", "Performance", "SEO"],
      status: "complete" as const
    },
    {
      title: "🏗️ State Management",
      description: "From useState to Zustand, Redux, and Jotai. Compare different state management solutions and their use cases.",
      href: "https://github.com/NH-Rifat/frontend-mastering/blob/main/concepts/state-management.md",
      tags: ["React", "Architecture", "State"],
      status: "draft" as const
    },
    {
      title: "🧩 Component Architecture",
      description: "Design scalable component systems. Learn composition patterns, prop drilling solutions, and component organization.",
      href: "https://github.com/NH-Rifat/frontend-mastering/blob/main/concepts/component-architecture.md",
      tags: ["React", "Architecture", "Design Patterns"],
      status: "draft" as const
    },
    {
      title: "⚡ Performance Optimization",
      description: "Optimize bundle size, implement code splitting, and master Core Web Vitals for lightning-fast applications.",
      href: "https://github.com/NH-Rifat/frontend-mastering/blob/main/concepts/performance.md",
      tags: ["Performance", "Webpack", "Optimization"],
      status: "in-progress" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Frontend{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Mastering
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Master advanced frontend concepts with comprehensive guides and practical implementations. 
                From virtualization to performance optimization, level up your development skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#concepts"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Explore Concepts
                </a>
                <a
                  href="/implementations"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                >
                  View Implementations
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Why Frontend Mastering?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                More than just documentation - we provide working code examples, performance insights, 
                and real-world implementations you can use in production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Comprehensive Guides
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  In-depth explanations of complex frontend concepts with clear examples and use cases.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Working Examples
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every concept comes with production-ready code examples you can run and modify.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Open Source
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Community-driven project where developers can contribute and learn together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Concepts Section */}
        <section id="concepts" className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Frontend Concepts
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our growing collection of frontend concepts, from performance optimization 
                to advanced React patterns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {concepts.map((concept) => (
                <ConceptCard key={concept.title} {...concept} />
              ))}
            </div>

            <div className="text-center mt-12">
                <a
                  href="https://github.com/NH-Rifat/frontend-mastering/issues"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request New Topic
                </a>
            </div>
          </div>
        </section>

        {/* Contributing Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Join the Community
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Help us build the most comprehensive frontend resource. Contribute concepts, 
                improve documentation, or share your implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/NH-Rifat/frontend-mastering/blob/main/.github/CONTRIBUTING.md"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contributing Guide
                </a>
                <a
                  href="https://github.com/NH-Rifat/frontend-mastering"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
