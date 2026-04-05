/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com', // untuk avatar Google
      'avatars.githubusercontent.com', // kalau nanti pakai GitHub
      'image.807garage.com', 
      'www.footlocker.id',
      'hoopspoint.com',
      'images.puma.com',
      'images.tokopedia.net',
      'images.journeys.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.adidas.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
