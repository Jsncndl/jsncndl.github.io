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
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      ...defaultPathMap,
      "/images/vercel.svg": { page: "/images/vercel.svg" },
      "/images/next.svg": { page: "/images/next.svg" },
    };
  },
};

export default nextConfig;
