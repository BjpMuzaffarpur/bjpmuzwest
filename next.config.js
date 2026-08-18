/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bjpmuzwest',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
