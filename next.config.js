/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/render/ssr',
      destination: '/dynamic-pages/render/ssr',
      locale: false,
    },
    {
      source: '/render/ssg',
      destination: '/static-pages/render/ssg',
      locale: false,
    }
  ]
}

module.exports = nextConfig
