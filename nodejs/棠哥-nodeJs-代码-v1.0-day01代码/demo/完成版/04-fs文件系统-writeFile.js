/* 
  异步往文件中写入内容
  语法：
    fs.writeFile(file,data[,options],callback)

  注意点：会覆盖原内容
*/

// 需求：往 短歌行.txt 中写入内容：对酒当歌，人生几何
// 1、导入fs模块
const fs = require("fs")

// 2、写入内容
fs.writeFile("./短歌行.txt", "对酒当歌，人生几何", (err) => {
  if (err) return console.log("文件写入失败", err)
  console.log("写入成功~")
})
