const svg = require('@neodx/svg/webpack');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          root: 'assets',
          output: 'public',
          metadata: 'src/shared/components/icon/sprite.gen.ts',
          resetColors: {
            replaceUnknown: 'currentColor'
          }
        })
      );
    }
    return config;
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'uk-UA'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
  }
};
