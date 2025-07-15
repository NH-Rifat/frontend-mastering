import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { ConceptCard } from "@/components/ui/ConceptCard";

export default function ConceptsPage() {
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

  const completedConcepts = concepts.filter(c => c.status === 'complete');
  const inProgressConcepts = concepts.filter(c => c.status === 'in-progress');
  const draftConcepts = concepts.filter(c => c.status === 'draft');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              📚 Concepts
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides to advanced frontend concepts. Each concept includes theoretical explanations, 
              practical examples, and links to working implementations.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="font-medium">{completedConcepts.length} Complete</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="font-medium">{inProgressConcepts.length} In Progress</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                <span className="font-medium">{draftConcepts.length} Draft</span>
              </div>
            </div>
          </div>

          {/* Complete Concepts */}
          {completedConcepts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </span>
                Complete Concepts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedConcepts.map((concept) => (
                  <ConceptCard key={concept.title} {...concept} />
                ))}
              </div>
            </section>
          )}

          {/* In Progress Concepts */}
          {inProgressConcepts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
                <span className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⚡</span>
                </span>
                In Progress
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inProgressConcepts.map((concept) => (
                  <ConceptCard key={concept.title} {...concept} />
                ))}
              </div>
            </section>
          )}

          {/* Draft Concepts */}
          {draftConcepts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
                <span className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📝</span>
                </span>
                Coming Soon
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {draftConcepts.map((concept) => (
                  <ConceptCard key={concept.title} {...concept} />
                ))}
              </div>
            </section>
          )}

          {/* Learning Path */}
          <section className="mb-16 bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              🎯 Recommended Learning Path
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Beginner</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Data Fetching Strategies</li>
                  <li>Component Architecture</li>
                  <li>Basic State Management</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Intermediate</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Infinite Scroll</li>
                  <li>Advanced State Patterns</li>
                  <li>Performance Basics</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Advanced</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Virtualization</li>
                  <li>Performance Optimization</li>
                  <li>Micro Frontends</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Missing a Concept?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't see a frontend concept you'd like to learn about? Request it on GitHub and 
              we'll add it to our roadmap!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/NH-Rifat/frontend-mastering/issues/new?template=concept-request.md"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request New Concept
              </a>
              <a
                href="/implementations"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                View Implementations
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
