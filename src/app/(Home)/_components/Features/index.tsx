import { FadeIn } from '@/components/animations';
import {
  FeaturesBackground,
  FeaturesGrid,
  FeaturesHeaderContent,
  FeaturesHeaderIcon,
} from './_components';

const Features = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <FeaturesBackground />

      <div className="container relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            {/* Header Icon */}
            <FeaturesHeaderIcon />

            {/* Header Content */}
            <FeaturesHeaderContent />
          </div>
        </FadeIn>

        {/* Features Grid */}
        <FeaturesGrid />
      </div>
    </section>
  );
};

export default Features;
