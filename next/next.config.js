/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // ssr, displayName을 true로 설정
    styledComponents: true,
  }
}

module.exports = nextConfig
