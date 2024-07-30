/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the following line to build a static site.
  output: "export",
  basePath: "/jcdev",
  assetPrefix: "/jcdev/",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
