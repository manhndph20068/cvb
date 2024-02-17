/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nettruyennew.com",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "cdnntx.com",
        pathname: "/nettruyen/**",
      },
      {
        protocol: "https",
        hostname: "comics-api.vercel.app",
        pathname: "/images",
      },
    ],
  },
};

export default nextConfig;
