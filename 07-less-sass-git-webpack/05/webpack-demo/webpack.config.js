const path = require("path");

module.exports = {
  // 入口文件
  entry: "./src/index.js",
  // 出口文件
  output: {
    filename: "yyy.js",
    path: path.resolve(__dirname, "dist"),
  },
};
