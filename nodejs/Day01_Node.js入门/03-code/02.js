/**
 * 目标：使用 fs 模块，读写文件内容
 * 语法：
 * 1. 引入 fs 模块
 * 2. 调用 writeFile 写入内容
 * 3. 调用 readFile  读取内容
 */

const fs = require('fs')

// 写入内容
fs.writeFile('./test.txt', '床前明月光123', err => {
  // if (err) {
  //   console.log('文件写入失败', err)
  //   return
  // }
  if (err) return console.log('文件写入失败', err)
  console.log('文件写入成功');

  // 读取内容
  fs.readFile('./test.txt', (err, data) => {
    if (err) {
      return console.log('文件读取失败', err)
    }
    console.log(data.toString()); // Buffer对象
  })
})