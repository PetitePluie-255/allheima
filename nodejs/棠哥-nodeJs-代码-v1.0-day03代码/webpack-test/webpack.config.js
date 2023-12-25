const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 配置开发服务器端口号
  devServer:{
    port:3000
  },
  // 入口文件：从哪一个文件开始打包
  entry:'./src/main.js',
  // 出口文件：打包之后的文件输出到哪里
  output:{
    // 路径
    path:path.join(__dirname,'dist'),
    // 文件名
    filename:'bundle.js'
  },
  // 打包模式：
  // 1、上线压缩版：production
  // 2、开发未压缩版：development
  mode:'development',
  // 插件的配置项
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'css/index.css'
    })
  ],
  // 配置loader
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test:/\.less$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test:/\.(png|jpg|gif|jpeg)$/i,
        type:'asset',
        generator:{
          filename:'images/[hash][ext]'
        }
      },
      {
        test:/\.(eot|svg|ttf|woff|woff2)$/,
        type:'asset',
        generator: {
          filename:'fonts/[hash][ext]'
        }
      },
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
    ]
  }
}
