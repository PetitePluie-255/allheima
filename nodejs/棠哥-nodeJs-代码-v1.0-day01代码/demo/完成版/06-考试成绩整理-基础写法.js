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
const fs = require('fs')

// 2、读取文件
fs.readFile('./成绩.txt','utf-8',(err,data)=>{
  if (err) return console.log('文件读取失败~',err)
  // console.log('文件读取成功~',data) // 小红=99 小白=100 小黄=70 小黑=66 小绿=88

  // 3、把读取的数据处理之后，再写入
  //    1、先分割成数组 [ '小红=99', '小白=100', '小黄=70', '小黑=66', '小绿=88' ]
  //    2、把数组每一项处理成: 返回一个新数组 [ '小红:99', '小白:100', '小黄:70', '小黑:66', '小绿:88' ]
  //    3、把新数组重新拼接很字符串，并且以换行/n拼接
  const newData = data.split(' ').map(item => item.replace(/=/,':')).join('\n')
  // console.log(newData)

  // 写入数据
  fs.writeFile('./成绩-ok.txt',newData,err =>{
    if(err) return console.log('写入文件失败',err)
    console.log('写入文件成功~')
  })

})
