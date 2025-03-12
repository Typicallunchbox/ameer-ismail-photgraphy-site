/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  async redirects() {
    return [
      {
        source: "/wedding-gallery/",
        destination: "/gallery/",
        permanent: true,
      },
      {
        source: "/fashion-gallery/",
        destination: "/gallery/",
        permanent: true,
      },
      {
        source: "/fashion-gallery/",
        destination: "/gallery/",
        permanent: true,
      },
      {
        source: "/about-me-2/",
        destination: "/", 
        permanent: true,
      },
      {
        source: "/get-in/",
        destination: "/#getInTouch",
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
    ],
  }
};

module.exports = nextConfig;
