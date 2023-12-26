/**
 * 目标：读取 test.txt 文件内容
 * 注意：代码中，使用绝对路径
 * 原因：Node.js 执行时会以终端所在文件夹作为相对路径，去拼接代码中路径使用（导致找不到目标文件）
 * 解决：使用 path.join() 和 __dirname 来填写要查找的目标文件绝对地址
 */
// 注意点: __dirname获取的绝对路径不变的, 和终端打开的位置没有任何关系
console.log(__dirname + '/a.txt');

const path = require('path')
// console.log(path.join('a', 'b', '../index.html'));
// console.log(path.join('a/', 'b/', '/index.js'));  
const pathStr = path.join(__dirname, '../test.txt')  
console.log(pathStr);

const fs = require('fs')
fs.readFile(pathStr, (err, data) => {
  if (err) {
    return console.log('文件读取失败', err)
  }
  console.log('文件读取成功',data.toString());
})
