/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, context) => {
    // Enable polling based on env variable being set
    config.watchOptions = {
      poll: 500,
      aggregateTimeout: 100,
    };
    return config;
  },
};

module.exports = nextConfig;
