'use client';

import { heroData } from '@/app/(Home)/_components/Hero/utils/data';
import { useEffect, useState } from 'react';

interface TypingAnimationProps {}

export const TypingAnimation = ({}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { fullText, speed, frontendMastering, excellence } = heroData.typing;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText, speed]);

  // Split the text for different styling
  const renderStyledText = () => {
    if (displayedText.length <= frontendMastering.length) {
      // Still typing "Frontend Mastering"
      return (
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
          {displayedText}
        </span>
      );
    } else {
      // Typing "Excellence"
      const excellenceText = displayedText.slice(frontendMastering.length + 1); // +1 for space
      return (
        <>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            {frontendMastering}
          </span>
          <span className="text-gray-200"> {excellenceText}</span>
        </>
      );
    }
  };

  return (
    <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[1.2em]">
      {renderStyledText()}
    </div>
  );
};
