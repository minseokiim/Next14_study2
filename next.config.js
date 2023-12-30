/** @type {import('next').NextConfig} */
const nextConfig = {
  // 외부 경로에서 이미지 가져올때는 등록 필수
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
