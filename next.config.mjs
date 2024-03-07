/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
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
  env: {
    API_URL: process.env.COMICS_API_URL,
  },
};

export default nextConfig;
