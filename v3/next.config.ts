import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/v3",
  output: "standalone",
  images: { unoptimized: true },
};

export default nextConfig;
