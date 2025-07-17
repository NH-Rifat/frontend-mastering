'use client';

import React from 'react';

export const VirtualizationIllustration: React.FC = () => {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <svg
        viewBox="0 0 400 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Viewport */}
        <rect
          x="20"
          y="20"
          width="120"
          height="160"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <text
          x="80"
          y="15"
          textAnchor="middle"
          className="fill-blue-600 dark:fill-blue-400 text-xs font-semibold"
        >
          Viewport
        </text>

        {/* Visible Items */}
        {[0, 1, 2, 3, 4].map((index) => (
          <rect
            key={`visible-${index}`}
            x="30"
            y={40 + index * 25}
            width="100"
            height="20"
            fill="#10B981"
            className="opacity-80"
            rx="2"
          />
        ))}

        {/* Items above viewport */}
        {[0, 1].map((index) => (
          <rect
            key={`above-${index}`}
            x="30"
            y={-10 + index * 25}
            width="100"
            height="20"
            fill="#6B7280"
            className="opacity-40"
            rx="2"
          />
        ))}

        {/* Items below viewport */}
        {[0, 1, 2].map((index) => (
          <rect
            key={`below-${index}`}
            x="30"
            y={165 + index * 25}
            width="100"
            height="20"
            fill="#6B7280"
            className="opacity-40"
            rx="2"
          />
        ))}

        {/* Arrow pointing to visible items */}
        <path
          d="M 160 100 L 180 100"
          stroke="#3B82F6"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Legend */}
        <g transform="translate(200, 40)">
          <rect
            x="0"
            y="0"
            width="15"
            height="15"
            fill="#10B981"
            className="opacity-80"
            rx="2"
          />
          <text
            x="20"
            y="12"
            className="fill-gray-700 dark:fill-gray-300 text-xs"
          >
            Rendered Items
          </text>

          <rect
            x="0"
            y="25"
            width="15"
            height="15"
            fill="#6B7280"
            className="opacity-40"
            rx="2"
          />
          <text
            x="20"
            y="37"
            className="fill-gray-700 dark:fill-gray-300 text-xs"
          >
            Virtual Items
          </text>

          <text
            x="0"
            y="60"
            className="fill-gray-600 dark:fill-gray-400 text-xs font-semibold"
          >
            Only visible items
          </text>
          <text
            x="0"
            y="75"
            className="fill-gray-600 dark:fill-gray-400 text-xs font-semibold"
          >
            are rendered in DOM
          </text>
        </g>

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};
