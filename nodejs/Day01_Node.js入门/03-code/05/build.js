/**
 * 目标二：压缩 js 里代码，并整合到 html 中一起运行
 *  2.1 读取 public/index.js 内容
 *  2.2 使用正则替换内容字符串里的，回车符\r 换行符\n 打印语句console.log('xxx');
 *  2.3 确认后，拼接 html 内容写入到 dist/index.html 内
 */

const fs = require('fs')
const path = require('path')
// 1.1读取 public/index.html 内容
fs.readFile(path.join(__dirname,'public', 'index.html'), (err, data) => {
  if (err) {
    return console.log('文件读取失败', err)
  }
  const htmlStr = data.toString()
  // 1.2使用正则替换内容字符串里的，回车符\r 换行符\n
  const resultStr = htmlStr.replace(/\r\n/g, '')

  // 读取 public/index.js 内容
  fs.readFile(path.join(__dirname,'public', 'index.js'), (err, data) => {
    if (err) {
      return console.log('文件读取失败', err)
    }
    const jsStr = data.toString()
    // \d \D 转义 
    // . 元字符 具有特殊意义的字符 除了换行之外的其他字符
    // .+ 贪婪原则 
    // .+? 取消贪婪原则
    const jsResultStr = jsStr.replace(/\r\n/g, '').replace(/console.log\('.+?'\);/g, '')
    console.log('js的读取内容', jsResultStr);
    const jsScriptStr =  `<script>${jsResultStr}</script>`
    // 1.3写入到 dist/index.html 内
    fs.writeFile(path.join(__dirname, 'dist', 'index.html'), resultStr + jsScriptStr, err => {
      if (err) {
        return console.log('文件写入失败')
      }
      console.log('文件写入成功');
    })
  })



})
