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
    default: 'Hafiz Muhammad Rizwan | AWS DevOps & Cloud Engineer',
    template: '%s | Hafiz Muhammad Rizwan'
  },
  description: 'DevOps Engineer specializing in AWS, Terraform, and CI/CD. I build secure, cost-optimized cloud infrastructure with ECS Fargate, IAM, and GitLab pipelines.',
  keywords: [
    'DevOps Engineer', 'AWS Cloud Engineer', 'Terraform', 'Infrastructure as Code',
    'AWS ECS Fargate', 'CI/CD Pipeline', 'GitLab CI/CD', 'Docker', 'AWS IAM',
    'AWS WAF', 'AWS CloudWatch', 'Cloud Cost Optimization', 'AWS Certified Cloud Practitioner',
    'DevOps Engineer Pakistan', 'FAST-NUCES', 'Junior AWS DevOps Engineer',
    'Hafiz Muhammad Rizwan', 'JA3 fingerprinting bot detection',
    'VPC PrivateLink NAT Gateway alternative', 'AWS serverless cost optimization',
    'Cloud Automation', 'Zero-downtime deployment'
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
    title: 'Hafiz Muhammad Rizwan | AWS DevOps & Cloud Engineer',
    description: 'DevOps Engineer specializing in AWS, Terraform, and CI/CD. Secure, cost-optimized cloud infrastructure with ECS Fargate, IAM, and GitLab pipelines.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Hafiz Muhammad Rizwan - AWS DevOps and Cloud Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafiz Muhammad Rizwan | AWS DevOps & Cloud Engineer',
    description: 'DevOps Engineer specializing in AWS, Terraform, and CI/CD pipelines.',
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
    google: 'zdh_uU4EOEQJYNkwxDUgaKZzMoCzjiFWznHJrQ3LhF8',
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
          url: 'https://hafizmuhammadrizwan.me/images/hafiz-muhammad-rizwan-devops-engineer.png',
          width: 800,
          height: 800,
        },
        sameAs: [
          'https://github.com/Hafiz-Muhammad-Rizwan',
          'https://www.linkedin.com/in/hafiz-muhammad-rizwanrizwan-33328a374',
        ],
        jobTitle: 'DevOps Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'Sevteq Solutions',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'FAST-NUCES',
        },
        knowsAbout: [
          'DevOps Engineering', 'AWS Cloud', 'Terraform', 'Infrastructure as Code',
          'AWS ECS Fargate', 'GitLab CI/CD', 'Docker', 'AWS WAF', 'AWS CloudWatch',
          'Cloud Cost Optimization', 'Zero-downtime Deployment'
        ],
        description: 'DevOps Engineer specializing in AWS, Terraform, and CI/CD. Building secure, cost-optimized cloud infrastructure with ECS Fargate, IAM, and GitLab pipelines.',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://hafizmuhammadrizwan.me/#website',
        url: 'https://hafizmuhammadrizwan.me',
        name: 'Hafiz Muhammad Rizwan — AWS DevOps & Cloud Engineer',
        description: 'Professional portfolio showcasing DevOps, AWS cloud infrastructure, and CI/CD projects',
        publisher: {
          '@id': 'https://hafizmuhammadrizwan.me/#person',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://hafizmuhammadrizwan.me/#webpage',
        url: 'https://hafizmuhammadrizwan.me',
        name: 'Hafiz Muhammad Rizwan | AWS DevOps & Cloud Engineer',
        isPartOf: {
          '@id': 'https://hafizmuhammadrizwan.me/#website',
        },
        about: {
          '@id': 'https://hafizmuhammadrizwan.me/#person',
        },
        description: 'DevOps Engineer specializing in AWS, Terraform, and CI/CD. Founding DevOps Engineer at Sevteq Solutions, Student at FAST-NUCES.',
        inLanguage: 'en-US',
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://hafizmuhammadrizwan.me/#projects',
        url: 'https://hafizmuhammadrizwan.me/#projects',
        name: 'DevOps & Cloud Projects Portfolio',
        description: 'Collection of AWS cloud infrastructure, CI/CD, and DevOps automation projects',
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
