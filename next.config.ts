import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["127.0.0.1", "localhost", "192.168.1.13", "192.168.1.15"],
    },
  },
};

export default nextConfig;
