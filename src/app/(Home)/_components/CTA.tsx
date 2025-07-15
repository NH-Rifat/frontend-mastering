import { FadeIn, ScaleIn } from '@/components/animations';
import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative">
            <FadeIn>
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Learning?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Join thousands of developers who are mastering frontend development with our comprehensive guides and examples.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ScaleIn>
                    <a
                      href="https://github.com/NH-Rifat/frontend-mastering"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-full hover:bg-gray-50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Star on GitHub
                    </a>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.2}>
                    <Link
                      href="/implementations"
                      className="inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      Browse Examples
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </ScaleIn>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
  );
};

export default CTA;