import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hafizmuhammadrizwan.me';

  const images = [
    {
      loc: `${baseUrl}/images/hafiz-muhammad-rizwan-devops-engineer.png`,
      title: 'Hafiz Muhammad Rizwan - AWS DevOps and Cloud Engineer',
      caption: 'Profile photo of Hafiz Muhammad Rizwan, Founding DevOps Engineer at Sevteq Solutions specializing in AWS, Terraform, and GitLab CI/CD',
    },
    {
      loc: `${baseUrl}/images/hafiz-rizwan-aws-cloud-engineer-profile.jpg`,
      title: 'Hafiz Muhammad Rizwan - DevOps Engineer specializing in AWS infrastructure',
      caption: 'About section photo of Hafiz Muhammad Rizwan, DevOps Engineer building secure cost-optimized cloud infrastructure',
    },
    {
      loc: `${baseUrl}/images/cloud-hafiz-muhammad-rizwan.jpeg`,
      title: 'AWS VPC Professional Networking Platform — GitLab CI/CD Pipeline',
      caption: 'AWS ECS Fargate serverless architecture with GitLab CI/CD pipeline built by Hafiz Muhammad Rizwan',
    },
    {
      loc: `${baseUrl}/images/sentimental-analysis-Hafiz Muhammad Rizwan.png`,
      title: 'Smart Product Analyzer — RoBERTa NLP Sentiment Analysis',
      caption: 'NLP project using fine-tuned RoBERTa transformer model for Amazon product review classification',
    },
    {
      loc: `${baseUrl}/images/roomatchpk-Hafiz Muhammad Rizwan.png`,
      title: 'Roomatch Pk — Student Accommodation Marketplace',
      caption: 'Cross-platform Flutter accommodation marketplace connecting students with verified hosts',
    },
    {
      loc: `${baseUrl}/opengraph-image`,
      title: 'Hafiz Muhammad Rizwan | AWS DevOps & Cloud Engineer',
      caption: 'DevOps Engineer specializing in AWS, Terraform, and CI/CD — Portfolio Website',
    },
  ];

  const imagesSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>${images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('')}
  </url>
</urlset>`;

  return new NextResponse(imagesSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
