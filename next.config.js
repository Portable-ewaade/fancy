/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  distDir: 'dist',
  exportTrailingSlash: true,
  trailingSlash: true,
  output: 'export',
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/services': { page: '/services'},
      'contracts': { page: '/contracts'},
      '/contact-us': { page: '/contact-us' },
    }
  },
};


module.exports = nextConfig;
