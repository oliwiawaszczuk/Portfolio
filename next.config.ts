import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: '/Portfolio',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    assetPrefix: "./",
};

module.exports = nextConfig;