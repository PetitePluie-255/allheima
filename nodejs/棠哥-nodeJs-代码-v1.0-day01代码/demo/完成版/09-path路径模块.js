//  path.join() 方法，用来将多个路径片段拼接成一个完整的路径字符串
//  path.basename() 方法，用来从路径字符串中，将文件名解析出来
//  path.extname() 方法，可以获取路径中的扩展名部分

// 导入path模块
const path = require('path')

// path.join() 把多个路径片段拼接很一个完整路径字符串
console.log(path.join('a','b','c','d','e','index.html'))
console.log(path.join('a/','/b/','\c','\d','/e','\index.html'))

// path.basename() 获取文件名
console.log(path.basename('a/b/c/d/e/f/login.html')) // login.html

// path.extname() 获取文件拓展名
console.log(path.extname('a/b/c/d/e/f/g/register.js')) // .js