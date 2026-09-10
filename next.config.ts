import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['sanity', 'next-sanity', '@sanity/ui', '@sanity/icons', '@sanity/vision'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
