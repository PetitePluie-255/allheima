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
// 导入模块
const fs = require('fs')

// 通过__dirname + 查找的文件，即可获取绝对路径
console.log(__dirname + '\\成绩.txt')

// 1、先读取成绩.txt数据
// 问题：如果在上一级目录打开终端，运行当前文件，会提示文件读取错误
// 原因：因为读取和写入的路径是相对路径，是相对于node执行的目录的路径
// 解决：使用绝对路径即可
fs.readFile(__dirname + '\\成绩.txt','utf-8',(err,data)=>{
  if (err) return console.log('读取文件失败',err)
  const newData = data.replace(/=/g,':').replace(/ /g,'\n')

  fs.writeFile(__dirname + '\\成绩-ok.txt',newData,err=> {
    if (err) return console.log('写入文件失败',err)

    console.log('写入文件成功')
  })
})
