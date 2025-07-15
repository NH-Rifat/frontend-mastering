export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">FM</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-gray-100">
                Frontend Mastering
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              A comprehensive guide to advanced frontend concepts with practical implementations. 
              Learn, implement, and master modern web development techniques.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/your-username/frontend-mastering" 
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Topics</h3>
            <ul className="space-y-2">
              <li><a href="/concepts/virtualization" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Virtualization</a></li>
              <li><a href="/concepts/infinite-scroll" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Infinite Scroll</a></li>
              <li><a href="/concepts/data-fetching" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Data Fetching</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/implementations" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Implementations</a></li>
              <li><a href="/.github/CONTRIBUTING.md" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Contributing</a></li>
              <li><a href="/LICENSE" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">License</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2025 Frontend Mastering. Open source under MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
