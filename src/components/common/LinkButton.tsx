'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface IButtonProps {
  href?: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  showIcon?: boolean;
  showParticles?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
}

const variants = {
  primary: {
    base: 'from-blue-600 to-purple-600',
    hover: 'from-pink-600 via-purple-600 to-indigo-600',
  },
  secondary: {
    base: 'from-gray-600 to-gray-700',
    hover: 'from-gray-700 via-gray-800 to-gray-900',
  },
  accent: {
    base: 'from-emerald-600 to-teal-600',
    hover: 'from-emerald-700 via-teal-700 to-cyan-700',
  },
};

const sizes = {
  sm: {
    padding: 'px-6 py-2',
    text: 'text-sm',
    icon: 'w-4 h-4 ml-2',
  },
  md: {
    padding: 'px-8 py-3',
    text: 'text-base',
    icon: 'w-5 h-5 ml-2',
  },
  lg: {
    padding: 'px-10 py-4',
    text: 'text-lg',
    icon: 'w-6 h-6 ml-3',
  },
};

const LinkButton = ({
  href,
  text,
  variant = 'primary',
  size = 'lg',
  className = '',
  disabled = false,
  showIcon = true,
  showParticles = true,
  external = false,
  icon,
}: IButtonProps) => {
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  const buttonContent = (
    <>
      {/* Button Background Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${variantStyles.hover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      {/* Button Content */}
      <span className="relative z-10">{text}</span>
      {/*custom Icon */}
      {icon && (
        <span className={`relative z-10 ${sizeStyles.icon}`}>{icon}</span>
      )}

      {/* default Icon */}
      {showIcon && !icon && (
        <motion.svg
          className={`relative z-10 ${sizeStyles.icon}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </motion.svg>
      )}

      {/* Floating Particles on Hover */}
      {showParticles &&
        [...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100"
            style={{
              left: `${30 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
    </>
  );

  const baseClasses = `
    group relative inline-flex items-center font-semibold text-white 
    bg-gradient-to-r ${variantStyles.base} rounded-2xl shadow-xl 
    hover:shadow-2xl transition-all duration-300 overflow-hidden
    ${sizeStyles.padding} ${sizeStyles.text}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  if (href) {
    return (
      <motion.div
        whileHover={disabled ? {} : { scale: 1.05 }}
        whileTap={disabled ? {} : { scale: 0.95 }}
        className="inline-block"
      >
        {external ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
          >
            {buttonContent}
          </Link>
        ) : (
          <Link href={href} className={baseClasses}>
            {buttonContent}
          </Link>
        )}
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={baseClasses}
      disabled={disabled}
    >
      {buttonContent}
    </motion.button>
  );
};

export default LinkButton;
