import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://jpautoleasing.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const routes = [
    // Main pages
    { url: '', changefreq: 'weekly', priority: '1.0' },
    { url: '/inventory', changefreq: 'daily', priority: '0.9' },
    { url: '/consulting', changefreq: 'monthly', priority: '0.8' },
    { url: '/credit-application', changefreq: 'monthly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' },
    { url: '/about', changefreq: 'monthly', priority: '0.7' },
    
    // Service pages
    { url: '/services/personal-leasing', changefreq: 'monthly', priority: '0.7' },
    { url: '/services/commercial', changefreq: 'monthly', priority: '0.7' },
    { url: '/services/trade-in', changefreq: 'monthly', priority: '0.6' },
    { url: '/services/insurance', changefreq: 'monthly', priority: '0.6' },
    { url: '/services/warranties', changefreq: 'monthly', priority: '0.6' },
    { url: '/services/maintenance', changefreq: 'monthly', priority: '0.6' },
    { url: '/services/appraisal', changefreq: 'monthly', priority: '0.6' },
    
    // SEO/Guide pages
    { url: '/guides/best-car-for-you', changefreq: 'monthly', priority: '0.6' },
    { url: '/guides/lease-vs-buy', changefreq: 'monthly', priority: '0.6' },
    { url: '/guides/credit-requirements', changefreq: 'monthly', priority: '0.6' },
    { url: '/guides/first-time-leasing', changefreq: 'monthly', priority: '0.6' },
    { url: '/guides/luxury-leasing', changefreq: 'monthly', priority: '0.6' },
    { url: '/guides/business-leasing', changefreq: 'monthly', priority: '0.6' },
    
    // Legal pages
    { url: '/privacy', changefreq: 'yearly', priority: '0.3' },
    { url: '/terms', changefreq: 'yearly', priority: '0.3' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
