import { GetServerSidePropsContext } from 'next';
import {  siteMapConfig } from '@/configs/site'; // Example config file for site details

const Sitemap = () => {
  // The component will not render; the response is handled in getServerSideProps
  return null;
};

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const baseUrl = siteMapConfig.baseUrl || 'https://fastvideosave.com'; // Base URL of your website

  // Define your static pages or fetch dynamic pages here
  const staticPages = [
    '/',
    '/about',
    '/blog',
    '/contact',
  ];

  // Generate the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  // Set the response header to XML
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}, // No props are needed for this page
  };
};

export default Sitemap;
