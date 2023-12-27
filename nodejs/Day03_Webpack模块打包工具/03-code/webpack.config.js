const path = require('path')
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口 - 项目从哪开始构建
  entry: path.join(__dirname, 'src', 'main.js'),
  // 出口 - 最终编译好的文件位置
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  // 别名配置 - 方便路径的查找
  resolve: {
    alias: {
      'myUtils': path.join(__dirname, 'src', 'utils'),
      '@': path.join(__dirname, 'src')
    }
  },

  // source-map 保证错误和警告显示正确的行数 (源码)
  // 开发环境下添加 / 生产环境下不添加
  // devtool: 'inline-source-map',
  // 模式
  // 代码要上线 -> 供用户访问 -> 加载速度 / 性能 -> 压缩版  ===== production 生产模式 
  // 开发人员编写代码 -> 为了方便开发人员进行调试 -> 未压缩版 ==== development 开发模式
  // mode: 'production' | 'development'
  // mode: 'development',
  // loader解析 
  module: {
    rules: [
      // 解析css
      // 检测到以css结尾的文件
      // 依次使用loader进行处理
      // use 从后向前解析 (顺序不能调换)
      // css-loader 作用: 让webpack认识css
      // style-loader 作用: 插入到dom中
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      // 解析less
      // less-loader 作用: 将less代码转成css代码
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // 解析图片
      {
        test: /.(png|jpg|jpeg|gif)$/i,
        type: 'asset', // 模块类型 asset
        // generator 生成文件时的配置项
        // filename 文件名
        // imgs 文件夹
        // [hash] 一段随机的字符串 (不会重复)
        // [ext] 后缀名
        generator: {
          filename: 'imgs/[hash][ext]'
        }
      },
      // 解析js  将es6的语法 向后兼容 -> es5 / es3
      {
        test: /\.m?js$/,  // mjs  或者 js
        // exclude 排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

    ]
  },
  // 插件应用
  plugins: [
    new HtmlWebpackPlugin({
      // 指定拷贝的模板
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
}