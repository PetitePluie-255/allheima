/**
 * 目标：读取 test.txt 文件内容
 * 注意：代码中，使用绝对路径
 * 原因：Node.js 执行时会以终端所在文件夹作为相对路径，去拼接代码中路径使用（导致找不到目标文件）
 * 解决：使用 path.join() 和 __dirname 来填写要查找的目标文件绝对地址
 */
console.log(__dirname);
const fs = require('fs');
const path = require('path');
// const src = path.join("/heima","nodejs","dy01","03-code")
const src = path.join(__dirname,"../test.txt")
fs.readFile(src, (err, data) => {
  if (err) return console.log("文件读取失败", err)
  console.log("文件读取成功", data.toString())
})
