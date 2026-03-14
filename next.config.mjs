/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',           // ← Add this line
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
