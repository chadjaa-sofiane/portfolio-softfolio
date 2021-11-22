module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
