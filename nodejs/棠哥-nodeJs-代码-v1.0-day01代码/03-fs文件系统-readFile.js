/* 
  异步读取文件内容：
  fs.readFile(path[,option],callback)
*/

// 需求：读取 静夜思.txt文件中的文本内容

// 1、导入fs模块
const fs = require('fs')

// 2、使用fs模块
fs.readFile('./静夜思.txt','utf-8',(err,data)=>{
  // err：文件读取错误的信息
  // data：文件读取成功的信息
  // 注意点：默认读取的是buffer对象，是一个二进制的对象，如果需要看到字符内容，使用toString方法

  // 如果文件读取失败，则会有err对象，可以打印err对象
  // 一般处理逻辑是：
  //  1、如果有err，表示文件读取失败，可以打印提示并且不用往下执行了
  //  2、如果没有err，表示文件读取成功，直接打印data即可
  if (err) return console.log('文件读取失败',err)

  // console.log(data.toString())
  console.log(data)
})
