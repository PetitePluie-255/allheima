/* 
  异步读取文件内容：
  fs.readFile(path[,option],callback)
*/

// 需求：读取 静夜思.txt文件中的文本内容
// 1、需要引入所需模块
const fs = require("fs")

// 2、读取内容
fs.readFile("./静夜思.txt",'utf-8', (err, data) => {
  // 参数一：如果读取失败了，err会返回错误的信息
  // 参数二：如果读取成功了，data会返回读取的内容
  // console.log(err)
  // console.log(data)

  if (err) return console.log('文件读取失败',err)
  // 默认获取的是Buffer对象，可以调用toString()方法
  // console.log(data.toString())

  // 直接配置读取的编码类型
  console.log(data)

})
