/* 
  往文件中追加内容
  语法：
    fs.appendFile(path,data[,options],callback)
*/
// 需求：往 短歌行.txt 文件中追加 譬如朝露，去日苦多

// 导入模块
const fs = require('fs')

// 使用fs模块
fs.appendFile('./短歌行.txt','\n自挂东南枝',err => {
  if (err) return console.log('追加文件失败',err)

  console.log('追加文件成功')
})
