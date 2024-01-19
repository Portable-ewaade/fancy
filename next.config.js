/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
const nextConfig = {
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'dist',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
