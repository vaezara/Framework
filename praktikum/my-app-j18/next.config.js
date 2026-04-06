/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com', // untuk avatar Google
      'avatars.githubusercontent.com', // kalau nanti pakai GitHub
      'image.807garage.com', // untuk gambar produk
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.adidas.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '/**',
      }
    ],
  },
}

module.exports = nextConfig
