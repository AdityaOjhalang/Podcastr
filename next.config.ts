import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ],
  }, // <-- Closing brace for images was missing
};

export default nextConfig;
