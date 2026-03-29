import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Healora',
  assetPrefix: '/Healora/',
  /* config options here */
};

export default nextConfig;
