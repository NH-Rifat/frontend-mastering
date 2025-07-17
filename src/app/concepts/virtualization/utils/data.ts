export interface VirtualizationSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'code' | 'image' | 'mixed';
  leftSideContent: {
    type: 'code' | 'image' | 'text' | 'component';
    content: string;
    language?: string; // for code highlighting
    caption?: string; // for images or additional info
  };
  duration?: number; // estimated reading time in seconds
}

export const virtualizationData: VirtualizationSection[] = [
  {
    id: 'introduction',
    title: 'What is Virtualization?',
    content: `
      <h2 class="text-2xl font-bold mb-4">Understanding Virtualization</h2>
      <p class="text-lg mb-4">
        Virtualization is a performance optimization technique that allows you to render only the visible items in a large dataset, rather than rendering all items at once. This is particularly useful when dealing with thousands or millions of items in lists, tables, or grids.
      </p>
      <p class="text-lg mb-4">
        Instead of creating DOM elements for every item in your dataset, virtualization creates a "virtual" representation and only renders the items that are currently visible in the viewport, plus a small buffer.
      </p>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
        <h3 class="font-semibold mb-2">Key Benefits:</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Dramatically improved performance with large datasets</li>
          <li>Reduced memory usage</li>
          <li>Faster initial load times</li>
          <li>Smooth scrolling experience</li>
        </ul>
      </div>
    `,
    type: 'text',
    leftSideContent: {
      type: 'component',
      content: 'VIRTUALIZATION_ILLUSTRATION',
      caption:
        'Virtual scrolling visualization: Only visible items are rendered',
    },
  },
  {
    id: 'problem',
    title: 'The Problem with Traditional Rendering',
    content: `
      <h2 class="text-2xl font-bold mb-4">Performance Issues</h2>
      <p class="text-lg mb-4">
        When you render a large list of items (let's say 10,000 items), the browser needs to create 10,000 DOM elements. This causes several problems:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Memory consumption:</strong> Each DOM element takes memory</li>
        <li><strong>Slow rendering:</strong> Creating thousands of elements blocks the main thread</li>
        <li><strong>Poor scrolling performance:</strong> Browser struggles to handle layout and paint</li>
        <li><strong>Increased bundle size:</strong> More elements mean more work for the browser</li>
      </ul>
      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <p class="text-red-800 dark:text-red-200">
          <strong>Real-world impact:</strong> A list with 10,000 items can freeze the browser for several seconds on mobile devices.
        </p>
      </div>
    `,
    type: 'text',
    leftSideContent: {
      type: 'code',
      content: `// Traditional approach - renders ALL items
function TraditionalList({ items }) {
  return (
    <div className="list-container">
      {items.map((item, index) => (
        <div key={index} className="list-item">
          {item.content}
        </div>
      ))}
    </div>
  );
}

// Problem: If items.length = 10,000
// Browser creates 10,000 DOM elements!`,
      language: 'javascript',
    },
  },
  {
    id: 'solution',
    title: 'The Virtualization Solution',
    content: `
      <h2 class="text-2xl font-bold mb-4">How Virtualization Works</h2>
      <p class="text-lg mb-4">
        Virtualization solves this by implementing a "windowing" technique:
      </p>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        <li><strong>Calculate visible range:</strong> Determine which items are currently visible</li>
        <li><strong>Render only visible items:</strong> Create DOM elements only for visible items</li>
        <li><strong>Add buffer:</strong> Render a few extra items above and below for smooth scrolling</li>
        <li><strong>Update on scroll:</strong> Recalculate and re-render as user scrolls</li>
        <li><strong>Maintain scroll position:</strong> Use spacer elements to preserve scroll behavior</li>
      </ol>
      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <p class="text-green-800 dark:text-green-200">
          <strong>Result:</strong> A 10,000-item list might only render 10-20 DOM elements at any time!
        </p>
      </div>
    `,
    type: 'text',
    leftSideContent: {
      type: 'code',
      content: `// Virtualized approach - renders only visible items
function VirtualizedList({ items, itemHeight = 50 }) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerHeight = 400; // visible area height
  
  // Calculate visible range
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight),
    items.length
  );
  
  // Only render visible items
  const visibleItems = items.slice(startIndex, endIndex);
  
  return (
    <div 
      className="list-container"
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      {/* Spacer for items above */}
      <div style={{ height: startIndex * itemHeight }} />
      
      {/* Render only visible items */}
      {visibleItems.map((item, index) => (
        <div 
          key={startIndex + index}
          style={{ height: itemHeight }}
          className="list-item"
        >
          {item.content}
        </div>
      ))}
      
      {/* Spacer for items below */}
      <div style={{ 
        height: (items.length - endIndex) * itemHeight 
      }} />
    </div>
  );
}`,
      language: 'javascript',
    },
  },
  {
    id: 'implementation',
    title: 'Basic Implementation',
    content: `
      <h2 class="text-2xl font-bold mb-4">Building a Virtual List</h2>
      <p class="text-lg mb-4">
        Let's build a basic virtual list step by step. We'll create a component that can handle thousands of items efficiently.
      </p>
      <h3 class="text-xl font-semibold mb-3">Step 1: Set up the basic structure</h3>
      <p class="mb-4">
        First, we need to create a container with a fixed height and track the scroll position.
      </p>
      <h3 class="text-xl font-semibold mb-3">Step 2: Calculate visible items</h3>
      <p class="mb-4">
        Based on the scroll position and item height, we calculate which items should be visible.
      </p>
      <h3 class="text-xl font-semibold mb-3">Step 3: Render with spacers</h3>
      <p class="mb-4">
        We render only the visible items but add spacer elements to maintain the correct scroll height.
      </p>
    `,
    type: 'text',
    leftSideContent: {
      type: 'code',
      content: `import React, { useState, useEffect } from 'react';

const VirtualList = ({ 
  items, 
  itemHeight = 50, 
  containerHeight = 400,
  overscan = 5 // extra items to render for smooth scrolling
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  
  // Calculate visible range with overscan
  const startIndex = Math.max(
    0, 
    Math.floor(scrollTop / itemHeight) - overscan
  );
  const endIndex = Math.min(
    items.length,
    startIndex + Math.ceil(containerHeight / itemHeight) + overscan * 2
  );
  
  const visibleItems = items.slice(startIndex, endIndex);
  
  return (
    <div 
      className="virtual-list-container"
      style={{ 
        height: containerHeight, 
        overflow: 'auto',
        position: 'relative'
      }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      {/* Total height placeholder */}
      <div style={{ height: items.length * itemHeight }} />
      
      {/* Visible items */}
      <div style={{ 
        position: 'absolute',
        top: startIndex * itemHeight,
        left: 0,
        right: 0
      }}>
        {visibleItems.map((item, index) => (
          <div 
            key={startIndex + index}
            style={{ height: itemHeight }}
            className="virtual-list-item"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;`,
      language: 'javascript',
    },
  },
  {
    id: 'advanced',
    title: 'Advanced Techniques',
    content: `
      <h2 class="text-2xl font-bold mb-4">Advanced Virtualization Techniques</h2>
      <p class="text-lg mb-4">
        Once you have the basics down, there are several advanced techniques to improve performance and user experience:
      </p>
      
      <h3 class="text-xl font-semibold mb-3">1. Dynamic Heights</h3>
      <p class="mb-4">
        Not all items have the same height. We can measure and cache item heights dynamically.
      </p>
      
      <h3 class="text-xl font-semibold mb-3">2. Horizontal Virtualization</h3>
      <p class="mb-4">
        For wide tables or grids, we can also virtualize columns horizontally.
      </p>
      
      <h3 class="text-xl font-semibold mb-3">3. Bidirectional Virtualization</h3>
      <p class="mb-4">
        Combine both vertical and horizontal virtualization for data grids.
      </p>
      
      <h3 class="text-xl font-semibold mb-3">4. Smooth Scrolling</h3>
      <p class="mb-4">
        Use techniques like momentum scrolling and intersection observers for better UX.
      </p>
      
      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Pro Tips:</h4>
        <ul class="list-disc list-inside space-y-1">
          <li>Use IntersectionObserver for better scroll performance</li>
          <li>Implement lazy loading for item content</li>
          <li>Consider using libraries like react-window or react-virtualized</li>
          <li>Test on mobile devices for touch scrolling</li>
        </ul>
      </div>
    `,
    type: 'text',
    leftSideContent: {
      type: 'code',
      content: `// Advanced: Dynamic heights with caching
class DynamicVirtualList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      itemHeights: new Map(), // Cache measured heights
    };
    this.itemRefs = new Map();
  }
  
  componentDidUpdate() {
    // Measure new items
    this.itemRefs.forEach((ref, index) => {
      if (ref && !this.state.itemHeights.has(index)) {
        const height = ref.getBoundingClientRect().height;
        this.setState(prevState => ({
          itemHeights: new Map(prevState.itemHeights.set(index, height))
        }));
      }
    });
  }
  
  getItemHeight(index) {
    return this.state.itemHeights.get(index) || this.props.estimatedItemHeight || 50;
  }
  
  getItemOffset(index) {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += this.getItemHeight(i);
    }
    return offset;
  }
  
  render() {
    const { items, containerHeight } = this.props;
    const { scrollTop } = this.state;
    
    // Binary search to find visible range
    let startIndex = 0;
    let endIndex = items.length;
    
    // Find start index
    for (let i = 0; i < items.length; i++) {
      if (this.getItemOffset(i) + this.getItemHeight(i) > scrollTop) {
        startIndex = i;
        break;
      }
    }
    
    // Find end index
    for (let i = startIndex; i < items.length; i++) {
      if (this.getItemOffset(i) > scrollTop + containerHeight) {
        endIndex = i;
        break;
      }
    }
    
    return (
      <div 
        style={{ height: containerHeight, overflow: 'auto' }}
        onScroll={(e) => this.setState({ scrollTop: e.target.scrollTop })}
      >
        <div style={{ height: this.getItemOffset(items.length) }} />
        <div style={{ position: 'absolute', top: this.getItemOffset(startIndex) }}>
          {items.slice(startIndex, endIndex).map((item, index) => (
            <div 
              key={startIndex + index}
              ref={ref => this.itemRefs.set(startIndex + index, ref)}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    );
  }
}`,
      language: 'javascript',
    },
  },
  {
    id: 'demo',
    title: 'Interactive Demo',
    content: `
      <h2 class="text-2xl font-bold mb-4">Try It Yourself</h2>
      <p class="text-lg mb-4">
        Here's a working example of virtualization in action. This demo shows a list of 10,000 items, but only renders the visible ones.
      </p>
      <p class="text-lg mb-4">
        <strong>What to observe:</strong>
      </p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Only ~10-15 items are rendered at any time (check the "Rendered Items" counter)</li>
        <li>Smooth scrolling through thousands of items</li>
        <li>Real-time updates of visible range and scroll position</li>
        <li>Instant load time regardless of dataset size</li>
      </ul>
      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <p class="text-green-800 dark:text-green-200">
          <strong>Performance:</strong> This 10,000-item list loads instantly and uses minimal memory!
        </p>
      </div>
    `,
    type: 'text',
    leftSideContent: {
      type: 'component',
      content: 'VIRTUAL_LIST_DEMO',
    },
  },
  {
    id: 'libraries',
    title: 'Popular Libraries',
    content: `
      <h2 class="text-2xl font-bold mb-4">Production-Ready Libraries</h2>
      <p class="text-lg mb-4">
        While building your own virtual list is educational, for production applications, consider these battle-tested libraries:
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border">
          <h3 class="text-xl font-semibold mb-3">react-window</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-3">
            Lightweight and fast. Perfect for simple lists and grids.
          </p>
          <div class="text-sm text-green-600 dark:text-green-400">
            ✓ Small bundle size<br>
            ✓ Great performance<br>
            ✓ Simple API
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border">
          <h3 class="text-xl font-semibold mb-3">react-virtualized</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-3">
            Feature-rich with many components. More complex but powerful.
          </p>
          <div class="text-sm text-blue-600 dark:text-blue-400">
            ✓ Many components<br>
            ✓ Advanced features<br>
            ✓ Mature ecosystem
          </div>
        </div>
      </div>
      
      <h3 class="text-xl font-semibold mb-3">When to Use Each</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>react-window:</strong> New projects, simple use cases, performance-critical apps</li>
        <li><strong>react-virtualized:</strong> Complex UIs, need advanced features, migrating existing code</li>
        <li><strong>Custom solution:</strong> Very specific requirements, learning purposes</li>
      </ul>
    `,
    type: 'text',
    leftSideContent: {
      type: 'code',
      content: `// Using react-window
import { FixedSizeList as List } from 'react-window';

const MyList = ({ items }) => (
  <List
    height={400}
    itemCount={items.length}
    itemSize={50}
    itemData={items}
  >
    {({ index, style, data }) => (
      <div style={style}>
        {data[index].content}
      </div>
    )}
  </List>
);

// Using react-virtualized
import { List } from 'react-virtualized';

const MyVirtualizedList = ({ items }) => (
  <List
    height={400}
    rowCount={items.length}
    rowHeight={50}
    rowRenderer={({ index, key, style }) => (
      <div key={key} style={style}>
        {items[index].content}
      </div>
    )}
  />
);

// Installation
// npm install react-window
// npm install react-virtualized`,
      language: 'javascript',
    },
  },
  {
    id: 'best-practices',
    title: 'Best Practices & Tips',
    content: `
      <h2 class="text-2xl font-bold mb-4">Best Practices for Virtualization</h2>
      
      <h3 class="text-xl font-semibold mb-3">Performance Optimization</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Measure first:</strong> Don't virtualize unless you have performance issues</li>
        <li><strong>Use overscan:</strong> Render extra items for smooth scrolling</li>
        <li><strong>Optimize renders:</strong> Use React.memo and useMemo for item components</li>
        <li><strong>Debounce scroll:</strong> Don't recalculate on every scroll event</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-3">User Experience</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Preserve scroll position:</strong> When data changes, maintain user's position</li>
        <li><strong>Loading states:</strong> Show skeletons for items being loaded</li>
        <li><strong>Keyboard navigation:</strong> Ensure focus management works correctly</li>
        <li><strong>Accessibility:</strong> Announce total count and current position</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-3">Common Pitfalls</h3>
      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <ul class="list-disc list-inside space-y-1">
          <li>Not handling dynamic content heights properly</li>
          <li>Forgetting to clean up event listeners</li>
          <li>Over-virtualizing simple lists</li>
          <li>Not testing on mobile devices</li>
        </ul>
      </div>
    `,
    type: 'text',
    leftSideContent: {
      type: 'code',
      content: `// Best practices implementation
import { useCallback, useMemo, useRef } from 'react';

const OptimizedVirtualList = ({ items, onItemClick }) => {
  const listRef = useRef(null);
  
  // Memoize calculations
  const visibleRange = useMemo(() => {
    // Calculate visible range
    return calculateVisibleRange(scrollTop, containerHeight, itemHeight);
  }, [scrollTop, containerHeight, itemHeight]);
  
  // Debounced scroll handler
  const handleScroll = useCallback(
    debounce((e) => {
      setScrollTop(e.target.scrollTop);
    }, 16), // 60fps
    []
  );
  
  // Memoized item renderer
  const renderItem = useCallback(({ item, index, style }) => (
    <MemoizedListItem
      key={index}
      item={item}
      style={style}
      onClick={() => onItemClick(item, index)}
    />
  ), [onItemClick]);
  
  // Preserve scroll position on data changes
  useEffect(() => {
    if (listRef.current && preserveScrollPosition) {
      listRef.current.scrollTop = lastScrollTop;
    }
  }, [items]);
  
  return (
    <div 
      ref={listRef}
      onScroll={handleScroll}
      role="listbox"
      aria-label={\`List with \${items.length} items\`}
    >
      {/* Virtual list implementation */}
    </div>
  );
};

// Memoized item component
const MemoizedListItem = React.memo(({ item, style, onClick }) => (
  <div style={style} onClick={onClick}>
    {item.content}
  </div>
));

// Debounce utility
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}`,
      language: 'javascript',
    },
  },
];

export default virtualizationData;
