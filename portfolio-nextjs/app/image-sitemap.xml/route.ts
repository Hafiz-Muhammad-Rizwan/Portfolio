import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hafizmuhammadrizwan.me';
  
  const images = [
    {
      loc: `${baseUrl}/images/Hafiz%20Muhammad%20Rizwan.png`,
      title: 'Hafiz Muhammad Rizwan - Software Engineer',
      caption: 'Professional photo of Hafiz Muhammad Rizwan, Software Engineer at Sevteq specializing in Flutter, Spring Boot, and AI',
    },
    {
      loc: `${baseUrl}/opengraph-image`,
      title: 'Hafiz Muhammad Rizwan Portfolio',
      caption: 'Software Engineer and AI Specialist - Portfolio Website',
    },
    {
      loc: `${baseUrl}/images/favicon.svg`,
      title: 'Hafiz Muhammad Rizwan Logo',
      caption: 'Professional brand logo',
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
