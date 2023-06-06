/** @type {import('next').NextConfig} */

const locales = ['en', 'fr', 'nl'];
const defaultLocale = 'en';

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales,
    defaultLocale,
  },
  rewrites: async () => {
    return locales.flatMap((locale) => [
      {
        source: `/${locale}/render-${locale}/ssr/one`,
        destination: `/${locale}/dynamic-pages/render/ssr/one`,
        locale: false,
      },
      {
        source: `/${locale}/render-${locale}/ssr/two`,
        destination: `/${locale}/dynamic-pages/render/ssr/two`,
        locale: false,
      },
      {
        source: `/${locale}/render-${locale}/ssr/three`,
        destination: `/${locale}/dynamic-pages/render/ssr/three`,
        locale: false,
      },
    ]);
  }
}

module.exports = nextConfig
