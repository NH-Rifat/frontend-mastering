import { Header } from "@/components/ui";
import { Footer } from "@/components/ui/Footer";

export default function DataFetchingDemo() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>🚧</span>
              Coming Soon
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Data Fetching Demo
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              This demo is currently under development. It will showcase CSR, SSR, SSG, and ISR patterns with Next.js 15.
            </p>

            <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                What's Coming
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">🖥️ Client-Side Rendering</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Interactive demos showing CSR patterns with React Query</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">🔄 Server-Side Rendering</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">SSR examples with dynamic data and SEO benefits</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">⚡ Static Site Generation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fast SSG pages with build-time data fetching</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">🔄 Incremental Static Regeneration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ISR patterns for dynamic content with static benefits</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/NH-Rifat/frontend-mastering/blob/main/concepts/data-fetching.md"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                📚 Read the Concept Guide
              </a>
              <a
                href="/implementations"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                ← Back to Implementations
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
