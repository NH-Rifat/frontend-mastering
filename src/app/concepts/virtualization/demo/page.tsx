'use client';

import { Header } from '@/components/ui';
import { useCallback, useMemo, useState } from 'react';

// Simple virtualization hook
function useVirtualization({
  items,
  itemHeight,
  containerHeight,
  scrollTop,
}: {
  items: any[];
  itemHeight: number;
  containerHeight: number;
  scrollTop: number;
}) {
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length - 1
  );

  const visibleItems = items.slice(startIndex, endIndex + 1);
  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  return {
    visibleItems,
    totalHeight,
    offsetY,
    startIndex,
    endIndex,
  };
}

// Generate sample data
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
    description: `This is the description for item ${
      i + 1
    }. It contains some sample text to make the list more realistic.`,
    status: ['Active', 'Inactive', 'Pending'][i % 3],
    value: Math.floor(Math.random() * 1000),
    category: ['Category A', 'Category B', 'Category C'][i % 3],
  }));
};

// Virtual List Component
function VirtualList({
  items,
  height = 400,
}: {
  items: any[];
  height?: number;
}) {
  const [scrollTop, setScrollTop] = useState(0);
  const itemHeight = 80;

  const { visibleItems, totalHeight, offsetY, startIndex, endIndex } =
    useVirtualization({
      items,
      itemHeight,
      containerHeight: height,
      scrollTop,
    });

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <span>
            Showing items {startIndex + 1}-{endIndex + 1} of {items.length}
          </span>
          <span>
            Rendered: {visibleItems.length} / Total: {items.length}
          </span>
        </div>
      </div>

      <div className="overflow-auto" style={{ height }} onScroll={handleScroll}>
        <div style={{ height: totalHeight, position: 'relative' }}>
          <div style={{ transform: `translateY(${offsetY}px)` }}>
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                style={{ height: itemHeight }}
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {item.name}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-300'
                          : item.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>Value: {item.value}</span>
                    <span>Category: {item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Performance comparison component
function PerformanceComparison() {
  const [showAll, setShowAll] = useState(false);
  const items = useMemo(() => generateItems(1000), []);

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Performance Comparison
      </h3>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowAll(false)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            !showAll
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Virtualized (Recommended)
        </button>
        <button
          onClick={() => setShowAll(true)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showAll
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Render All (Not Recommended)
        </button>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {showAll ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
            <p className="text-red-800 dark:text-red-300">
              ⚠️ Rendering all 1,000 items in DOM. This may cause performance
              issues!
            </p>
          </div>
        ) : (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
            <p className="text-green-800 dark:text-green-300">
              ✅ Using virtualization - only visible items are rendered in DOM
            </p>
          </div>
        )}
      </div>

      {showAll ? (
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
          <div className="h-96 overflow-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {item.name}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : item.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <VirtualList items={items} height={384} />
      )}
    </div>
  );
}

export default function VirtualizationDemo() {
  const [itemCount, setItemCount] = useState(10000);
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>🔄</span>
              Live Demo
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Virtualization Demo
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the power of virtualization with large datasets. Only
              visible items are rendered in the DOM, ensuring smooth performance
              even with thousands of items.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/NH-Rifat/frontend-mastering/tree/main/implementations/virtualization"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Try in CodeSandbox
              </a>
              <a
                href="/implementations"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Start learning
                <svg
                  className="w-4 h-4 text-gray-400 dark:text-gray-500 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Controls */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="font-medium">Items to render:</span>
              <select
                value={itemCount}
                onChange={(e) => setItemCount(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              >
                <option value={1000}>1,000 items</option>
                <option value={5000}>5,000 items</option>
                <option value={10000}>10,000 items</option>
                <option value={50000}>50,000 items</option>
                <option value={100000}>100,000 items</option>
              </select>
            </label>
          </div>

          {/* Main Demo */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Virtualized List ({itemCount.toLocaleString()} items)
            </h2>
            <VirtualList items={items} height={500} />
          </div>

          {/* Performance Comparison */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Performance Comparison
            </h2>
            <PerformanceComparison />
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Performance
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Maintains 60fps even with 100,000+ items by only rendering
                visible elements
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Memory Efficient
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reduces DOM nodes from thousands to just a handful, minimizing
                memory usage
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10l2 2v13a2 2 0 01-2 2H7a2 2 0 01-2-2V6l2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                User Experience
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Smooth scrolling and instant loading regardless of dataset size
              </p>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  1. Calculate Visible Range
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Based on scroll position and container height, determine which
                  items should be visible.
                </p>

                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  2. Render Only Visible Items
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create DOM elements only for items currently in the viewport
                  plus a small buffer.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  3. Handle Scrolling
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Update visible range as user scrolls and efficiently re-render
                  new items.
                </p>

                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  4. Maintain Scroll Position
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use absolute positioning to maintain proper scroll behavior
                  and spacing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
