import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-flamingo-139.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "qualified-flamingo-492.convex.cloud",
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      },
    ],
  }, // <-- Closing brace for images was missing
};

export default nextConfig;
