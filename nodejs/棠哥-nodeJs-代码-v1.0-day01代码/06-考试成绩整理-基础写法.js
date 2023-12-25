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

// 思路：
// 1、先读取成绩.txt数据
// 2、把读取的数据中 所有的=替换成:  把所有的空格替换成换行\n
// 3、把处理之后的数据写入到成绩-ok.txt

// 导入模块
const fs = require('fs')

// 1、先读取成绩.txt数据
fs.readFile('./成绩.txt','utf-8',(err,data)=>{
  if (err) return console.log('读取文件失败',err)

  // 如果能执行到这里，则读取文件成功
  // 2、把读取的数据中 所有的=替换成:  把所有的空格替换成换行\n
  // console.log(data)
  // 小红=99 小白=100 小黄=70 小黑=66 小绿=88
  const newData = data.replace(/=/g,':').replace(/ /g,'\n')
  // console.log(newData)

  // 3、把处理之后的数据写入到成绩-ok.txt
  fs.writeFile('./成绩-ok.txt',newData,err=> {
    if (err) return console.log('写入文件失败',err)

    console.log('写入文件成功')
  })
})
