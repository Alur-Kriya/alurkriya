import type { APIRoute } from 'astro';
import { services } from '@contents/services/services.mjs';
import { partners } from '@contents/partners/partners.mjs';

const SITE_URL = 'https://kriya.click';

const staticPages = [
  '/',
  '/tentang-kami',
  '/jasa',
  '/portfolio',
  '/partners',
  '/testimoni',
  '/kontak',
  '/kebijakan-privasi',
  '/ketentuan-layanan',
];

export const GET: APIRoute = () => {
  const dynamicJasaPages = services.map((s: { slug: string }) => `/jasa/${s.slug}`);
  const dynamicPartnerPages = partners.map((p: { slug: string }) => `/partners/${p.slug}`);

  const allPages = [...staticPages, ...dynamicJasaPages, ...dynamicPartnerPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
