import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/startup-website-nextjs/",
  basePath: "/startup-website-nextjs",
  output: "export",
};

export default nextConfig;
