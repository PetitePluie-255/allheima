/* 
  将当前文件中的学生和文章功能，拆分成两个模块stu.js和art.js，并且最终在当前文件中导入并使用stu.js和art.js中的变量和方法
*/
// 导入
const stu = require('./stu')
const art = require('./art')

// 获取所有学生
stu.getStudentList()

// 获取所有文章
art.getArticleList()