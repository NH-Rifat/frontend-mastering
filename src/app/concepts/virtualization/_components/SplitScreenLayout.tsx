'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { VirtualizationSection } from '../utils/data';
import { VirtualListDemo, generateDemoData } from './VirtualListDemo';
import { VirtualizationIllustration } from './VirtualizationIllustration';

interface SplitScreenLayoutProps {
  sections: VirtualizationSection[];
}

export const SplitScreenLayout: React.FC<SplitScreenLayoutProps> = ({
  sections,
}) => {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ''
  );
  const [progress, setProgress] = useState(0);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      if (!rightSideRef.current) return;

      const container = rightSideRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const currentProgress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(currentProgress);

      // Find the currently active section
      const sectionElements = Array.from(sectionRefs.current.entries());
      let currentActiveSection = sections[0]?.id || '';

      for (const [sectionId, element] of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          // Check if section is in the upper half of the viewport
          if (rect.top <= containerRect.top + containerRect.height / 2) {
            currentActiveSection = sectionId;
          }
        }
      }

      setActiveSection(currentActiveSection);
    };

    const container = rightSideRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current.get(sectionId);
    if (element && rightSideRef.current) {
      const container = rightSideRef.current;
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      container.scrollTo({
        top: container.scrollTop + elementRect.top - containerRect.top - 20,
        behavior: 'smooth',
      });
    }
  };

  const activeLeftContent = sections.find(
    (section) => section.id === activeSection
  )?.leftSideContent;

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 left-4 right-4 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg p-3 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">V</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Virtualization Guide
            </h1>
          </div>
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 relative ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="relative z-10">{index + 1}</span>
                {activeSection === section.id && (
                  <div className="absolute inset-0 bg-blue-500 rounded-md animate-pulse opacity-20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="flex h-full pt-16">
        {/* Left Side - Fixed */}
        <div className="w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {sections.find((s) => s.id === activeSection)?.title}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {activeLeftContent?.type === 'code'
                  ? 'Code Example'
                  : activeLeftContent?.type === 'component'
                  ? 'Interactive Demo'
                  : activeLeftContent?.type === 'image'
                  ? 'Illustration'
                  : 'Reference'}
              </p>
            </div>

            <div className="flex-1 overflow-auto">
              {activeLeftContent && (
                <div className="p-6 animate-fade-in">
                  {activeLeftContent.type === 'code' && (
                    <div className="relative group">
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-gray-400 hover:text-white transition-colors"
                          onClick={() =>
                            navigator.clipboard.writeText(
                              activeLeftContent.content
                            )
                          }
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </button>
                      </div>
                      <SyntaxHighlighter
                        language={activeLeftContent.language || 'javascript'}
                        style={vscDarkPlus}
                        className="rounded-xl text-sm shadow-2xl"
                        showLineNumbers
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          fontSize: '13px',
                          lineHeight: '1.5',
                          background:
                            'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                        }}
                      >
                        {activeLeftContent.content}
                      </SyntaxHighlighter>
                      {activeLeftContent.caption && (
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 italic">
                          💡 {activeLeftContent.caption}
                        </p>
                      )}
                    </div>
                  )}

                  {activeLeftContent.type === 'image' && (
                    <div className="space-y-4">
                      <div className="relative overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src={activeLeftContent.content}
                          alt={activeLeftContent.caption || 'Illustration'}
                          className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      {activeLeftContent.caption && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic">
                          📖 {activeLeftContent.caption}
                        </p>
                      )}
                    </div>
                  )}

                  {activeLeftContent.type === 'text' && (
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: activeLeftContent.content,
                        }}
                        className="rounded-xl bg-white/50 dark:bg-gray-800/50 p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                      />
                    </div>
                  )}

                  {activeLeftContent.type === 'component' &&
                    activeLeftContent.content === 'VIRTUAL_LIST_DEMO' && (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Interactive Demo
                          </h3>
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                          <VirtualListDemo
                            items={generateDemoData(10000)}
                            itemHeight={60}
                            containerHeight={400}
                            overscan={3}
                          />
                        </div>
                      </div>
                    )}

                  {activeLeftContent.type === 'component' &&
                    activeLeftContent.content ===
                      'VIRTUALIZATION_ILLUSTRATION' && (
                      <div className="space-y-4">
                        <div className="transform hover:scale-105 transition-transform duration-500">
                          <VirtualizationIllustration />
                        </div>
                        {activeLeftContent.caption && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic">
                            🎨 {activeLeftContent.caption}
                          </p>
                        )}
                      </div>
                    )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Scrollable */}
        <div
          className="w-1/2 overflow-auto bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
          ref={rightSideRef}
        >
          <div className="space-y-12 p-8">
            {sections.map((section, index) => (
              <section
                key={section.id}
                ref={(el) => {
                  if (el) {
                    sectionRefs.current.set(section.id, el);
                  }
                }}
                className={`transition-all duration-500 transform ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-50 via-blue-50 to-purple-50 dark:from-blue-900/20 dark:via-blue-900/20 dark:to-purple-900/20 border-l-4 border-blue-500 pl-8 shadow-lg scale-[1.02]'
                    : 'pl-4 hover:pl-6 hover:shadow-md'
                } rounded-lg`}
              >
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse'
                          : 'bg-gray-400'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div
                      className={`w-full h-px ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    ></div>
                  </div>

                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <div
                      dangerouslySetInnerHTML={{ __html: section.content }}
                      className="space-y-4"
                    />
                  </div>

                  {section.duration && (
                    <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>~{Math.ceil(section.duration / 60)} min read</span>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* End of content indicator */}
            <div className="text-center py-12">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full border border-green-200 dark:border-green-800">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 dark:text-green-300 font-medium">
                  🎉 You've reached the end! Great job learning about
                  virtualization.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
