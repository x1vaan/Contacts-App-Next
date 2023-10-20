/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["cloudflare-ipfs.com"],
  },
};

module.exports = nextConfig;
