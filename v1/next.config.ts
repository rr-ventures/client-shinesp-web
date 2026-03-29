import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/v1",
  output: "standalone",
  images: { unoptimized: true },
};

export default nextConfig;
