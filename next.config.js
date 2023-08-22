/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
