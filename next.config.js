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
  }
};
