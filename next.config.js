/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'upload.wikimedia.org',
      },
      {
        hostname: 'images.pexels.com',
      },
    ],
  },
}

module.exports = nextConfig
