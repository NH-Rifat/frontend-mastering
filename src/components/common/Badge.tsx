'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IBadgeProps {
  icon?: string | ReactNode;
  text: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  delay?: number;
  disabled?: boolean;
  showAnimation?: boolean;
  customColor?: string;
}

const variants = {
  primary: {
    background: 'bg-white/50 dark:bg-gray-800/50',
    border: 'border-gray-200/50 dark:border-gray-700/50',
    textColor: 'text-blue-600 dark:text-blue-400',
    hoverBackground: 'hover:bg-blue-50/70 dark:hover:bg-blue-900/30',
  },
  secondary: {
    background: 'bg-gray-100/60 dark:bg-gray-700/60',
    border: 'border-gray-300/50 dark:border-gray-600/50',
    textColor: 'text-gray-700 dark:text-gray-300',
    hoverBackground: 'hover:bg-gray-200/70 dark:hover:bg-gray-600/40',
  },
  success: {
    background: 'bg-emerald-50/60 dark:bg-emerald-900/20',
    border: 'border-emerald-200/50 dark:border-emerald-700/50',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    hoverBackground: 'hover:bg-emerald-100/70 dark:hover:bg-emerald-900/30',
  },
  warning: {
    background: 'bg-amber-50/60 dark:bg-amber-900/20',
    border: 'border-amber-200/50 dark:border-amber-700/50',
    textColor: 'text-amber-600 dark:text-amber-400',
    hoverBackground: 'hover:bg-amber-100/70 dark:hover:bg-amber-900/30',
  },
  info: {
    background: 'bg-cyan-50/60 dark:bg-cyan-900/20',
    border: 'border-cyan-200/50 dark:border-cyan-700/50',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    hoverBackground: 'hover:bg-cyan-100/70 dark:hover:bg-cyan-900/30',
  },
  accent: {
    background: 'bg-purple-50/60 dark:bg-purple-900/20',
    border: 'border-purple-200/50 dark:border-purple-700/50',
    textColor: 'text-purple-600 dark:text-purple-400',
    hoverBackground: 'hover:bg-purple-100/70 dark:hover:bg-purple-900/30',
  },
};

const sizes = {
  sm: {
    padding: 'px-3 py-1',
    text: 'text-xs',
    gap: 'gap-1.5',
    iconSize: 'text-sm',
  },
  md: {
    padding: 'px-4 py-2',
    text: 'text-sm',
    gap: 'gap-2',
    iconSize: 'text-base',
  },
  lg: {
    padding: 'px-5 py-2.5',
    text: 'text-base',
    gap: 'gap-2.5',
    iconSize: 'text-lg',
  },
};

const Badge = ({
  icon,
  text,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  delay = 0,
  disabled = false,
  showAnimation = true,
  customColor,
}: IBadgeProps) => {
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  // Check if className contains background or text color overrides
  const hasCustomBackground = className.includes('bg-');
  const hasCustomTextColor = className.includes('text-');
  const hasCustomBorder = className.includes('border-');

  const baseClasses = `
    flex items-center font-medium backdrop-blur-sm rounded-full
    transition-all duration-200
    ${sizeStyles.padding} ${sizeStyles.text} ${sizeStyles.gap}
    ${!hasCustomBackground ? variantStyles.background : ''}
    ${!hasCustomBorder ? variantStyles.border : 'border'}
    ${onClick && !disabled ? 'cursor-pointer' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${
      onClick && !disabled && !hasCustomBackground
        ? variantStyles.hoverBackground
        : ''
    }
    ${className}
  `;

  const textColorClass =
    customColor || (hasCustomTextColor ? '' : variantStyles.textColor);

  const motionProps = showAnimation
    ? {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.4, delay },
        viewport: { once: true },
        whileHover: disabled ? {} : { scale: 1.05 },
        whileTap: disabled || !onClick ? {} : { scale: 0.95 },
      }
    : {};

  return (
    <motion.div
      {...motionProps}
      className={baseClasses}
      onClick={disabled ? undefined : onClick}
    >
      {icon && <span className={`${sizeStyles.iconSize}`}>{icon}</span>}
      <span className={textColorClass}>{text}</span>
    </motion.div>
  );
};

export default Badge;
