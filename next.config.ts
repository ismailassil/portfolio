import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://miro.medium.com/**")],
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
