/* 
  需求:
  把 成绩.txt 中的数据： 小红=99 小白=100 小黄=70 小黑=66 小绿=88
  整理成为下列格式并保存成 成绩-ok.txt:
    小红:99
    小白:100
    小黄:70
    小黑:66
    小绿:88
*/

// 1、导入fs模块
const fs = require("fs")

// 文件路径操作优化
let filePath = __dirname + "/成绩.txt"
console.log(filePath)

// 2、读取文件
fs.readFile(__dirname + "/成绩.txt", "utf-8", (err, data) => {
  if (err) return console.log("文件读取失败~", err)

  // 优化：直接用正则把=换成:
  const newData = data.replace(/=/g, ":").replace(/ /g, "\n")
  console.log(newData)

  // 写入数据
  fs.writeFile(__dirname + "/成绩-ok.txt", newData, (err) => {
    if (err) return console.log("写入文件失败", err)
    console.log("写入文件成功~")
  })
})
