const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  unstable_staticImage: true,
})

module.exports = withNextra({
  transpilePackages: ["react-tweet"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },
})
