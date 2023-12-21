module.exports = {
  // Your other configuration options here
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // Add other pages here if needed
    };
  },
};