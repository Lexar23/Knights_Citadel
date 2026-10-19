import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.100.7",
    "192.168.100.7:3000",
    "192.168.*.*",
    "192.168.*",
    "localhost:3000",
  ],
};

export default nextConfig;
