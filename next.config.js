//eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({ //eslint-disable-line @typescript-eslint/no-require-imports
  enabled: process.env.ANALYZE === "true",
});


const nextConfig = {
  output: "standalone",
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src/styles/"),
      path.join(__dirname, "../"),
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      loader: "@svgr/webpack",
      options: {
        svgo: false,
      },
    });

    return config;
  },
  eslint: {
    //Warning: This allows production builds to successfully complete even if
    //your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};



module.exports = withBundleAnalyzer(nextConfig);
