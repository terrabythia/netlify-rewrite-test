/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/render/ssr/one',
      destination: '/dynamic-pages/render/ssr/one',
      locale: false,
    },
    {
      source: '/render/ssr/two',
      destination: '/dynamic-pages/render/ssr/two',
      locale: false,
    },
    {
      source: '/render/ssr/three',
      destination: '/dynamic-pages/render/ssr/three',
      locale: false,
    },
  ]
}

module.exports = nextConfig
