/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["dummyimage.com", "mf.b37mrtl.ru"],
  },
};

module.exports = nextConfig;
