import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  extension: /\.mdx?$/,
})({
  reactStrictMode: false,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.zaronology.com",
          },
        ],
        destination: "https://zaronology.com/:path*",
        permanent: true, // 301 redirect for SEO purposes
      },

      {
        source: "/what-we-do/intelligent-tracking-engines",
        destination: "/what-we-do/seamless-attribution-tracking",
        permanent: true,
      },
      {
        source: "/services/cordev",
        destination: "/what-we-do/seamless-technology-systems",
        permanent: true,
      },
      {
        source: "/services/software-engineering",
        destination: "/what-we-do/seamless-technology-systems",
        permanent: true,
      },
      {
        source: "/what-we-do/customer-loyalty-and-retention-solutions",
        destination: "/what-we-do/customer-journey-and-experience",
        permanent: true,
      },
      {
        source: "/custom-software",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/enterprise-tracking-systems",
        destination: "/what-we-do/seamless-technology-systems",
        permanent: true,
      },
      {
        source: "/our-team",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/system-integrations",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/ui-ux-design",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/software-architecture",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/high-availability-infrastructure",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/e-commerce-solutions",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/system-integrations",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home2-dark",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/software-architecture",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/e-commerce-solutions",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/ui-ux-design",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-team/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home4-dark",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home3-one",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home1-dark",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home5",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home7",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home-boxed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home5-one",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home3",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home2-one",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home4-one",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home6-one",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home4",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home1-one",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home1-one",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home-rtl",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home6",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home3-dark",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/specialized-e-commerce-solutions",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/specialized-e-commerce-solutions",
        destination: "/",
        permanent: true,
      },
      {
        source: "/what-we-do/comprehensive-technology-solutions",
        destination: "/what-we-do/seamless-technology-systems",
        permanent: true,
      },
      {
        source: "/what-we-do/enterprise-technology-solutions",
        destination: "/what-we-do/seamless-technology-systems",
        permanent: true,
      },
      {
        source: "/what-we-do/affiliate-program-development-and-optimization",
        destination: "/what-we-do/affiliate-program-systems-optimization",
        permanent: true,
      },
      {
        source: "/what-we-do/enterprise-tracking-systems",
        destination: "/what-we-do/seamless-attribution-tracking",
        permanent: true,
      },
      {
        source: "/services/cordev",
        destination: "/what-we-do/seamless-technology-systems",
        permanent: true,
      },
      {
        source: "/services/software-engineering",
        destination: "/what-we-do/seamless-technology-systems",
        permanent: true,
      },
      {
        source: "/what-we-do/affiliate-program-systems-optimization",
        destination: "/what-we-do/affiliate-program-optimization",
        permanent: true,
      },
      {
        source: "/what-we-do/customer-journey-and-experience",
        destination: "/what-we-do/conversion-rate-optimization",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["localhost", "bbrefueppb.us-east-1.awsapprunner.com", "assets01.zaronology.com"],
  },
});

export default nextConfig;
