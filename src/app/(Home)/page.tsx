'use client';

import CTA from './_components/CTA';
import FeaturedConcept from './_components/FeaturedConcept';
import Features from './_components/Features';
import Hero from './_components/Hero';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30">
      <main className="pt-20">
        {/* Hero Section */}
        <Hero />
        {/* Features Section */}
        <Features />
        {/* Concepts Preview */}
        <FeaturedConcept />
        {/* CTA Section */}
        <CTA />
      </main>
    </div>
  );
}
