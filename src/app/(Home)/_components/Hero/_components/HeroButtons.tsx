import { heroData } from '@/app/(Home)/_components/Hero/utils/data';
import { LinkButton } from '@/components/common';

interface HeroButtonsProps {}

export const HeroButtons = ({}: HeroButtonsProps) => {
  const { buttons } = heroData.content;

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      {buttons.map((button, index) => (
        <LinkButton
          key={`${button.href}-${index}`}
          text={button.text}
          href={button.href}
          variant={button.variant}
        />
      ))}
    </div>
  );
};
