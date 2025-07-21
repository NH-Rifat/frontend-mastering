import { heroData } from '@/app/(Home)/_components/Hero/utils/data';
import { FadeIn } from '@/components/animations';
import {
  AnimatedBackground,
  FloatingParticles,
  HeroBadge,
  HeroButtons,
  HeroStats,
  TypingAnimation,
} from './_components';

const Hero = () => {
  const { subtitle } = heroData.content;

  return (
    <section className="relative py-3 sm:py-20 2xl:py-10 3xl:py-28 overflow-hidden">
      {/* Background Elements */}
      <AnimatedBackground />
      <FloatingParticles />

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <FadeIn delay={0.2}>
            <HeroBadge />
          </FadeIn>

          {/* Typing Animation Title */}
          <FadeIn delay={0.2}>
            <TypingAnimation />
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              {subtitle.split(' ').map((word, index) => {
                const isHighlighted = [
                  'interactive',
                  'examples',
                  'production-ready',
                  'code',
                  'best',
                  'practices',
                ].includes(word.toLowerCase().replace(/[.,]/g, ''));

                return isHighlighted ? (
                  <span key={index} className="font-semibold">
                    {word}{' '}
                  </span>
                ) : (
                  `${word} `
                );
              })}
            </p>
          </FadeIn>

          {/* Buttons */}
          <FadeIn delay={0.6}>
            <HeroButtons />
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={1.2}>
            <HeroStats />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
