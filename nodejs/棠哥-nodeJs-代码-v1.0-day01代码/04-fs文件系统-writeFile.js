/* 
  异步往文件中写入内容
  语法：
    fs.writeFile(file,data[,options],callback)

  注意点：会覆盖原内容
*/

// 需求：往 短歌行.txt 中写入内容：对酒当歌，人生几何

// 1、导入模块
const fs = require('fs')

// 2、使用fs模块
// 写入文件，会覆盖原有内容
// 如果路径写错了，则会新增该文件
fs.writeFile('./短歌行.txt','譬如朝露，去日苦多，慨当以慷，忧思难忘，何以解忧，唯有杜康，青青子衿，悠悠我心，但为君故，沉吟至今，呦呦鹿鸣，食野之苹，我有嘉宾，鼓瑟吹笙',err => {
  if (err) return console.log('文件写入失败',err)

  console.log('文件写入成功')
})