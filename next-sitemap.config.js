/** @type {import('next-sitemap').IConfig} */
const path = require("path");
const fs = require("fs");

const config = {
  siteUrl: "https://koblin.blog", // Your site URL
  generateRobotsTxt: true, // Generate a `robots.txt` file
  sitemapSize: 500, // Maximum number of URLs per sitemap file
  changefreq: "weekly", // Default change frequency
  priority: 0.7, // Default priority
  exclude: ["/secret", "/admin/*"], // Exclude specific pages or patterns
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all pages for all user agents
    //   { userAgent: "Googlebot", disallow: ["/secret"] }, // Disallow specific pages for Googlebot
    ],
    additionalSitemaps: [
    //   "https://koblin.blog/my-custom-sitemap.xml", // Add additional sitemaps if necessary
    ],
  },
  async transform(config, path) {
    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async () => {    
    const postsDirectory = path.join(process.cwd(), "src", "posts");
    const fileNames = fs.readdirSync(postsDirectory);

    const blogPosts = fileNames.map((fileName) => 
        fileName.replace(/\.mdx$/, "")
    );

    // Map the blog posts to their full paths
    return blogPosts.map((name) => ({
        loc: `/blog/${name}`, // Full path for the post
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
    }));
  },
};

module.exports = config;
