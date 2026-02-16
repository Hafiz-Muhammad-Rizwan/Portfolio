import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hafizmuhammadrizwan.me'),
  title: {
    default: 'Hafiz Muhammad Rizwan | Software Engineer & AI Specialist',
    template: '%s | Hafiz Muhammad Rizwan'
  },
  description: 'Portfolio of Hafiz Muhammad Rizwan, a Software Engineer at Sevteq. Specializing in scalable mobile apps (Flutter), robust backends (Spring Boot), and AI integration.',
  keywords: [
    // Identity & Location
    'Hafiz Muhammad Rizwan', 'Software Engineer Pakistan', 'Faisalabad Developer', 'Sevteq Engineer', 'FAST-NUCES Student',
    // Core Tech
    'Flutter Developer', 'Spring Boot Developer', 'AI Engineer', 'Full Stack Developer',
    // Specific Tools
    'React', 'Next.js', 'TypeScript', 'Dart', 'RoBERTa', 'Machine Learning', 'Firebase'
  ],
  authors: [{ name: 'Hafiz Muhammad Rizwan', url: 'https://hafizmuhammadrizwan.me' }],
  creator: 'Hafiz Muhammad Rizwan',
  publisher: 'Hafiz Muhammad Rizwan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hafizmuhammadrizwan.me',
    siteName: 'Hafiz Muhammad Rizwan Portfolio',
    title: 'Hafiz Muhammad Rizwan | Software Engineer',
    description: 'Building scalable mobile & web solutions. Engineer at Sevteq, Student at FAST-NUCES.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Hafiz Muhammad Rizwan - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafiz Muhammad Rizwan | Software Engineer',
    description: 'Specializing in Flutter, Spring Boot, and AI Solutions.',
    images: ['/opengraph-image'],
    creator: '@hafizrizwan',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://hafizmuhammadrizwan.me/#person',
        name: 'Hafiz Muhammad Rizwan',
        url: 'https://hafizmuhammadrizwan.me',
        image: {
          '@type': 'ImageObject',
          url: 'https://hafizmuhammadrizwan.me/opengraph-image',
          width: 1200,
          height: 630,
        },
        sameAs: [
          'https://github.com/Hafiz-Muhammad-Rizwan',
          'https://www.linkedin.com/in/hafiz-muhammad-rizwan-33328a374',
        ],
        jobTitle: 'Software Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'Sevteq',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'FAST-NUCES',
        },
        knowsAbout: ['Software Engineering', 'Flutter', 'Spring Boot', 'Artificial Intelligence', 'React'],
        description: 'Software Engineer specializing in mobile (Flutter) and backend (Spring Boot) development.',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://hafizmuhammadrizwan.me/#website',
        url: 'https://hafizmuhammadrizwan.me',
        name: 'Hafiz Muhammad Rizwan Portfolio',
        description: 'Professional portfolio showcasing web development projects and skills',
        publisher: {
          '@id': 'https://hafizmuhammadrizwan.me/#person',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://hafizmuhammadrizwan.me/#webpage',
        url: 'https://hafizmuhammadrizwan.me',
        name: 'Hafiz Muhammad Rizwan | Software Engineer & AI Specialist',
        isPartOf: {
          '@id': 'https://hafizmuhammadrizwan.me/#website',
        },
        about: {
          '@id': 'https://hafizmuhammadrizwan.me/#person',
        },
        description: 'Building scalable mobile & web solutions. Engineer at Sevteq, Student at FAST-NUCES.',
        inLanguage: 'en-US',
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://hafizmuhammadrizwan.me/#projects',
        url: 'https://hafizmuhammadrizwan.me/#projects',
        name: 'Projects Portfolio',
        description: 'Collection of web development and mobile application projects',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
      </head>
      <body className={`${inter.className} animated-bg min-h-screen`}>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1a1a2e',
              color: '#fff',
              border: '1px solid #00f0ff',
            },
          }}
        />
      </body>
    </html>
  )
}
