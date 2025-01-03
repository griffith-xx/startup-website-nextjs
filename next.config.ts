import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/startup-website-nextjs/" : "",
  basePath: isProd ? "/startup-website-nextjs" : "",
  output: "export",
};

export default nextConfig;
