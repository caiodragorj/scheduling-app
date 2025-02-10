const { Dirent } = require("fs");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin  = require("copy-webpack-plugin")

module.exports = {
  mode: "development",
  target: "web",
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),

  },
  devServer: {
    static:{
      directory: path.join(__dirname, "dist")
    },
    port: 3000,
    open: true,
    liveReload: true,
  },
  plugins: [new HTMLWebpackPlugin({
    template: path.resolve(__dirname, "index.html"),
    favicon: path.resolve("src", "assets", "scissors.svg"),
  }),
],

module: {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
      exclude: /node_modules/,
    },
  ],
},

};
