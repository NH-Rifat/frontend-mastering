"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ConceptCardProps {
  title: string;
  description: string;
  href: string;
  gradient?: string;
  category?: string;
  tags?: string[];
  status?: 'draft' | 'complete' | 'in-progress';
}

export function ConceptCard({ 
  title, 
  description, 
  href, 
  gradient = "from-blue-500 to-purple-500", 
  category,
  tags = [], 
  status = 'draft' 
}: ConceptCardProps) {
  const statusColors = {
    draft: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
    complete: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-300',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-300'
  };

  const isExternalLink = href.startsWith('http');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
        {/* Gradient background overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
        
        {/* Category badge */}
        {category && (
          <div className="absolute top-4 right-4 z-10">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${gradient} text-white shadow-sm`}>
              {category}
            </span>
          </div>
        )}

        <div className="relative p-6">
          {/* Icon gradient background */}
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} text-white text-xl mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
            {title.split(' ')[0]}
          </div>

          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 flex-1">
              {title.split(' ').slice(1).join(' ')}
            </h3>
            <span className={`ml-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[status]}`}>
              {status}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between">
            {isExternalLink ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${gradient} rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group/btn`}
              >
                Learn More
                <motion.svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </a>
            ) : (
              <Link
                href={href}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${gradient} rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group/btn`}
              >
                Learn More
                <motion.svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            )}

            {/* Decorative gradient dot */}
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </div>
        </div>

        {/* Subtle border gradient on hover */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} style={{ padding: '1px' }}>
          <div className="w-full h-full rounded-xl bg-white dark:bg-gray-950"></div>
        </div>
      </div>
    </motion.div>
  );
}
