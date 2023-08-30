/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
