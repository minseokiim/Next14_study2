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
  async redirects() {
    return [
      {
        source: "/products/deleted_forever", //여기로 오면
        destination: "/products", //여기로
        permanent: true, //영원히
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false, //일시적으로
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/minseo",
        destination: "/about/me",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
