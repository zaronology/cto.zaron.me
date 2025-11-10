/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.SITE_URL || "https://zaronology.com";

const getDynamicPaths = async () => {
  const contentData = await import("./src/content/resources/index.mjs"); // Dynamic import
  return contentData.default.map(
    (item) =>
      item.active && {
        loc: `${siteUrl}/resources/${item.subject}/${item.slug}`,
        changefreq: "weekly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
  );
};

let additionalPaths = [];

(async () => {
  additionalPaths = await getDynamicPaths(); // Run the function before export
})();

module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,

  transform: async (config, path) => ({
    loc: path,
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date().toISOString(),
  }),

  additionalPaths: () => additionalPaths, // Use preloaded data
};
