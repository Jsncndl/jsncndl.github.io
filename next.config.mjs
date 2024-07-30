/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/jcdev",
  assetPrefix: "/jcdev/",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  exportTrailingSlash: true, // Ensure trailing slashes for directories
};

export default nextConfig;
