/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/",
  assetPrefix: "/",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true, // Ensure trailing slashes for directories
};

export default nextConfig;

