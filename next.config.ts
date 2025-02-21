/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["voice123.com", "v1-media.s3.amazonaws.com"],
  },
}

module.exports = nextConfig

