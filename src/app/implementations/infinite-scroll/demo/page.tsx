'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from "@/components/ui";
import { Footer } from "@/components/ui/Footer";

// Mock API for fetching posts
const fetchPosts = async (page: number, delay = 1000): Promise<{ posts: any[]; hasMore: boolean }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // Simulate occasional errors
  if (Math.random() < 0.1) {
    throw new Error('Failed to fetch posts');
  }
  
  const postsPerPage = 10;
  const totalPosts = 100;
  const startIndex = page * postsPerPage;
  
  const posts = Array.from({ length: postsPerPage }, (_, i) => ({
    id: startIndex + i,
    title: `Post ${startIndex + i + 1}: ${generateRandomTitle()}`,
    content: generateRandomContent(),
    author: generateRandomAuthor(),
    date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
    likes: Math.floor(Math.random() * 500),
    comments: Math.floor(Math.random() * 50),
    image: `https://picsum.photos/400/200?random=${startIndex + i}`
  }));
  
  return {
    posts,
    hasMore: startIndex + postsPerPage < totalPosts
  };
};

const generateRandomTitle = () => {
  const titles = [
    "Understanding Modern Web Development",
    "The Future of React Development",
    "Building Scalable Applications",
    "Performance Optimization Tips",
    "Design System Best Practices",
    "TypeScript Advanced Patterns",
    "State Management Strategies",
    "Component Architecture Guide"
  ];
  return titles[Math.floor(Math.random() * titles.length)];
};

const generateRandomContent = () => {
  const contents = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
  ];
  return contents[Math.floor(Math.random() * contents.length)];
};

const generateRandomAuthor = () => {
  const authors = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Wilson", "Eva Brown", "Frank Miller"];
  return authors[Math.floor(Math.random() * authors.length)];
};

// Intersection Observer Hook
function useIntersectionObserver(
  callback: () => void,
  options: IntersectionObserverInit = {}
) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [callback, options]);

  return targetRef;
}

// Post Card Component
function PostCard({ post }: { post: any }) {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {post.content}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                {post.author.split(' ').map((n: string) => n[0]).join('')}
              </span>
            </div>
            <span>{post.author}</span>
          </div>
          <span>{post.date}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {post.likes}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              {post.comments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading Skeleton Component
function LoadingSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-3/4 mb-4"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-20"></div>
          </div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-16"></div>
        </div>
      </div>
    </div>
  );
}

// Error Component
function ErrorMessage({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="text-center py-8">
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
        <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full mx-auto mb-4">
          <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-red-800 dark:text-red-300 mb-2">
          Failed to load posts
        </h3>
        <p className="text-red-600 dark:text-red-400 text-sm mb-4">
          Something went wrong while fetching the data. Please try again.
        </p>
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

// Main Infinite Scroll Component
function InfiniteScrollFeed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const loadMorePosts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchPosts(page);
      setPosts(prev => [...prev, ...result.posts]);
      setHasMore(result.hasMore);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  const retryLoad = useCallback(() => {
    setError(null);
    loadMorePosts();
  }, [loadMorePosts]);

  // Load initial posts
  useEffect(() => {
    loadMorePosts();
  }, []); // Empty dependency array for initial load only

  // Intersection observer for infinite scroll
  const loadMoreRef = useIntersectionObserver(
    loadMorePosts,
    { threshold: 0.1 }
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Stats */}
      <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-4 mb-8">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Posts loaded: {posts.length}</span>
          <span>Status: {loading ? 'Loading...' : hasMore ? 'More available' : 'All loaded'}</span>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        
        {/* Loading Skeletons */}
        {loading && (
          <>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </>
        )}
      </div>

      {/* Error State */}
      {error && <ErrorMessage onRetry={retryLoad} />}

      {/* Load More Trigger (Intersection Observer Target) */}
      {!error && hasMore && (
        <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
          {loading && (
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
              <span>Loading more posts...</span>
            </div>
          )}
        </div>
      )}

      {/* End Message */}
      {!hasMore && !error && (
        <div className="text-center py-8">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              All posts loaded!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You've reached the end of the feed. Great job scrolling!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function InfiniteScrollDemo() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>🔃</span>
              Live Demo
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Infinite Scroll Demo
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Experience seamless content loading with infinite scroll. Uses Intersection Observer API 
              for optimal performance and includes error handling with retry functionality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/NH-Rifat/frontend-mastering/tree/main/implementations/infinite-scroll"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                View Source Code
              </a>
              <a
                href="/implementations"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                ← Back to Implementations
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Intersection Observer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Modern API for efficient scroll detection
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Error Handling</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Graceful error recovery with retry functionality
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Loading States</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Skeleton loaders and smooth transitions
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Performance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Optimized for mobile and large datasets
              </p>
            </div>
          </div>

          {/* Main Demo */}
          <InfiniteScrollFeed />
        </div>
      </main>

      <Footer />
    </div>
  );
}
