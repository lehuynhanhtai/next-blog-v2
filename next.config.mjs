/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['https://lh3.googleusercontent.com', 'www.gravatar.com', 'firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '**',
      },
    ],
  },

  reactStrictMode: false,
};

export default nextConfig;
