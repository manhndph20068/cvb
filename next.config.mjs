/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ],
  },
};

export default nextConfig;
