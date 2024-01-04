/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/404': { page: '/404' },
      '/blog': { page: '/blog' },
      '/blog/first-term': { page: '/blog/first-term' },
    };

    return paths;
  },
};

module.exports = {
  ...nextConfig,
  images: {
    unoptimized: true,
  },
};
