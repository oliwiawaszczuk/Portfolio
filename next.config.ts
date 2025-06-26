import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    output: "export",
};

module.exports = nextConfig;