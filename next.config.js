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
      {
        source: "/contact/",
        destination: "/#getInTouch",
        permanent: true,
      },
      {
        source: "/fashion-model-photographers-durban/",
        destination: "/fashion-gallery/",
        permanent: true,
      },
      {
        source: "/services-page/",
        destination: "/#getInTouch",
        permanent: true,
      },
      {
        source: "/envira/weddings/",
        destination: "/wedding-gallery/",
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
