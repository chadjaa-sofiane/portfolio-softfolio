module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgConfig: {
              plugins: [
                {
                  cleanupIDs: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};
