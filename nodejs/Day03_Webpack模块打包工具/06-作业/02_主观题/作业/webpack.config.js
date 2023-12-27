const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack") // 用于访问内置插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  entry: path.join(__dirname, "src/main.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
  resolve: {
    alias: {
      css: path.join(__dirname, "src/css"),
      less: path.join(__dirname, "src/less"),
      logo: path.join(__dirname, "src/assets"),
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        // 解析css
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // 解析less
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        //解析图片资源
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset",
        generator: {
          // 输出文件时，路径+名字
          filename: "assets/[hash][ext]",
        },
      },
      {
        // 解析js 解决js语法兼容
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, "public/index.html") }), new MiniCssExtractPlugin()],
}
