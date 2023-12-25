/* 
  往文件中追加内容
  语法：
    fs.appendFile(path,data[,options],callback)
*/
// 需求：往 短歌行.txt 文件中追加 譬如朝露，去日苦多

// 1、导入fs模块
const fs = require("fs")

// 2、追加内容
fs.appendFile("./短歌行.txt", "譬如朝露，去日苦多", (err) => {
  if (err) return console.log("文件追加失败", err)
  console.log("文件追加成功~")
})
