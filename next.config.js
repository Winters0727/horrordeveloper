/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://winters0727.github.io/horrordeveloper"
      : "",
  reactStrictMode: true,
};

module.exports = nextConfig;
