/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  distDir: 'dist',
  exportTrailingSlash: true,
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
};
module.exports = {
  exportTrailingSlash: true,
}
module.exports = nextConfig;
