import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
};

export default nextConfig;
