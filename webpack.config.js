// =============================================================================================================================
// WEBPACK CONFIG
// =============================================================================================================================
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, ".dist");
const version = JSON.parse(fs.readFileSync("package.json", "utf8")).version;
const copyright = `
marubatsu v${version}
https://github.com/jagaapple/marubatsu.js

Copyright 2019, Jaga Apple and other contributors.
Licensed under MIT (https://github.com/jagaapple/marubatsu.js/blob/master/LICENSE)

Date: 2019-01-20T00:00Z
`;

module.exports = {
  mode: "production",
  entry: path.join(srcDir, "index.ts"),
  output: {
    path: distDir,
    filename: "marubatsu.min.js",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: { configFile: "tsconfig.build.json" },
      },
    ],
  },
  plugins: [new webpack.BannerPlugin(copyright)],
};
