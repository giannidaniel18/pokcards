/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pokemontcg.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
