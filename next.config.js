/** @type {import('next').NextConfig} */
const nextConfig = {
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
        // 원래 페이지 경로
        source: "/products/deleted_forever",
        // 리다이렉트 시켜줄 경로
        destination: "/products",
        // 앞으로 영원히 변경될 경우
        permanent: true, // true는 영원히 변경되기 떄문에 앞으로 deleted_forever가게되면 products를 보여주게 된다.
      },
      {
        // 원래 페이지 경로
        source: "/products/deleted_forever",
        // 리다이렉트 시켜줄 경로
        destination: "/products",
        // 앞으로 영원히 변경될 경우
        permanent: false, // false는 일시적으로 변경될 경우이기 때문에 캐싱처리 되지 않는다.
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/uri",
        destination: "/about/me/uri",
      },
      {
        source: "/item/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
