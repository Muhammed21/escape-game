import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
  },
};

export default nextConfig;
