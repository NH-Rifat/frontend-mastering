'use client';

import React, { useEffect, useRef, useState } from 'react';

interface VirtualListProps {
  items: any[];
  itemHeight: number;
  containerHeight: number;
  overscan?: number;
}

export const VirtualListDemo: React.FC<VirtualListProps> = ({
  items,
  itemHeight,
  containerHeight,
  overscan = 5,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate visible range
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length,
    startIndex + Math.ceil(containerHeight / itemHeight) + overscan * 2
  );

  const visibleItems = items.slice(startIndex, endIndex);
  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const newScrollTop = e.currentTarget.scrollTop;
    setScrollTop(newScrollTop);
    setIsScrolling(true);

    // Clear existing timeout
    if (scrollingTimeoutRef.current) {
      clearTimeout(scrollingTimeoutRef.current);
    }

    // Set new timeout
    scrollingTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (scrollingTimeoutRef.current) {
        clearTimeout(scrollingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Virtual List Stats</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600 dark:text-gray-400">
              Total Items:
            </span>
            <span className="ml-2 font-mono">{items.length}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">
              Rendered Items:
            </span>
            <span className="ml-2 font-mono">{visibleItems.length}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">
              Visible Range:
            </span>
            <span className="ml-2 font-mono">
              {startIndex} - {endIndex}
            </span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">
              Scroll Position:
            </span>
            <span className="ml-2 font-mono">{Math.round(scrollTop)}px</span>
          </div>
        </div>
      </div>

      <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
        <div
          className="overflow-auto relative"
          style={{ height: containerHeight }}
          onScroll={handleScroll}
        >
          {/* Total height container */}
          <div style={{ height: totalHeight, position: 'relative' }}>
            {/* Visible items */}
            <div
              style={{
                position: 'absolute',
                top: offsetY,
                left: 0,
                right: 0,
              }}
            >
              {visibleItems.map((item, index) => {
                const actualIndex = startIndex + index;
                return (
                  <div
                    key={actualIndex}
                    style={{
                      height: itemHeight,
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      borderBottom: '1px solid #e5e7eb',
                    }}
                    className={`${
                      actualIndex % 2 === 0
                        ? 'bg-gray-50 dark:bg-gray-800'
                        : 'bg-white dark:bg-gray-900'
                    } hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {actualIndex + 1}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scrolling indicator */}
        {isScrolling && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
            Scrolling...
          </div>
        )}
      </div>
    </div>
  );
};

// Demo data generator
export const generateDemoData = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    title: `Item ${index + 1}`,
    description: `This is the description for item ${
      index + 1
    }. It contains some sample text to demonstrate the virtualization effect.`,
    category: ['Technology', 'Science', 'Art', 'Music', 'Sports'][index % 5],
    timestamp: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  }));
};
