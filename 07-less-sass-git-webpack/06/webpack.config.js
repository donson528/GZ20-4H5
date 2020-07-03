const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    another: "./src/print.js",
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // 直接处理css文件
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },

      // 处理less文件
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      // 处理图片
      {
        test: /\.(jpg|gif|png|jpeg|svg)$/,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      minify: "false",
      template: "./src/index.html",
    }),
  ],
  devtool: "inline-source-map",
  // devtool: "cheap-source-map",

  devServer: {
    contentBase: "./dist",
  },
};
