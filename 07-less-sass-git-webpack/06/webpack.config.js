const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
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
        use: ["file-loader"]
      },
    ],
  },
};
