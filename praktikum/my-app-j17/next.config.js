/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com', // untuk avatar Google
      'avatars.githubusercontent.com', // kalau nanti pakai GitHub
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.adidas.com',
        port: '',
      }
    ],
  },
}

module.exports = nextConfig
