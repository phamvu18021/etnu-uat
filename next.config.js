/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "etnu.aum.edu.vn",
        pathname: "/wp-content/uploads/**"
      }
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 450, 576, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [65, 70, 75, 80, 85, 90, 95, 100]
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "framer-motion",
      "swiper",
      "lucide-react",
      "@heroicons/react",
      "@chakra-ui/react"
    ]
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"]
          }
        : false
  }
};

module.exports = nextConfig;
