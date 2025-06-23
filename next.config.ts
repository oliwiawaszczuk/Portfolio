import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: '/',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    assetPrefix: "./",
};

module.exports = nextConfig;