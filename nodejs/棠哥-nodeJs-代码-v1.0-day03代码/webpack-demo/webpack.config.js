// 导入模块
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
  // 配置devserver
  devServer:{
    port:3000,
    open:true
  },
  // 入口文件
  entry: "./src/main.js",
  // 出口文件
  output: {
    // 输出的路径
    path: path.join(__dirname, "dist"),
    // 输出的文件名
    filename: "js/bundle.js",
  },
  // 打包模式
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // 定义打包之后的文字存在的路径和文件名
    new MiniCssExtractPlugin({
      filename:'css/index.css'
    })
  ],
  module: {
    rules: [
      // 处理.css文件
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // 处理.less文件
      {
        test:/\.less$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader"
        ]
      },
      // 处理图片资源
      {
        test:/\.(png|jpg|gif|jpeg)$/i,
        type:'asset',
        // 配置储存图片的路径
        generator:{
          filename:'images/[hash][ext]'
        }
      },
      // 处理字体图标资源
      {
        test:/\.(eot|svg|ttf|woff|woff2)$/i,
        type:'asset',
        // 配置储存图片的路径
        generator:{
          filename:'fonts/[hash][ext]'
        }
      },
      // 配置js语法降级
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
}
