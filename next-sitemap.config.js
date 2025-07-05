/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sovanoca.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: './public', // default
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://sovanoca.com/sitemap.xml',
    ],
  },
};
