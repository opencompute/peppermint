const removeImports = require("next-remove-imports")();
const nextTranslate = require("next-translate");

module.exports = removeImports({
  reactStrictMode: true,
  swcMinify: true,
  ...nextTranslate(),

  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://peppermint-api.vercel.app/api/v1/:path*",
      },
    ];
  },
});
