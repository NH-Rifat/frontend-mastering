import Layout from '@/components/Layout';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Mastering - Advanced Frontend Concepts & Implementations',
  description:
    'Master advanced frontend concepts with comprehensive guides and practical implementations. From virtualization to performance optimization, level up your development skills.',
  keywords: [
    'frontend',
    'react',
    'javascript',
    'typescript',
    'performance',
    'optimization',
    'virtualization',
    'infinite scroll',
  ],
  authors: [{ name: 'Frontend Mastering Community' }],
  creator: 'Frontend Mastering',
  publisher: 'Frontend Mastering',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frontend-mastering.dev',
    title: 'Frontend Mastering - Advanced Frontend Concepts',
    description:
      'Master advanced frontend concepts with comprehensive guides and practical implementations.',
    siteName: 'Frontend Mastering',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mastering - Advanced Frontend Concepts',
    description:
      'Master advanced frontend concepts with comprehensive guides and practical implementations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
