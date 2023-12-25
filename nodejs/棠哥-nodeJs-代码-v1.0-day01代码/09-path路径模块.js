//  path.join() 方法，用来将多个路径片段拼接成一个完整的路径字符串
//  path.basename() 方法，用来从路径字符串中，将文件名解析出来
//  path.extname() 方法，可以获取路径中的扩展名部分

// 在node中有path模块，可以帮我们快速的进行地址拼接

// 1、导入模块
const path = require('path')

// 2、使用模块

// 拼接完整路径地址
// const str = path.join('a','b','c','d.txt')
// const str = path.join('./a','/b','/c','/d.txt')
// const str = path.join('./a','../','/b','/c','/d.txt')
const str = path.join('a','\zzzzzzzz','\c','\d.txt')
console.log(str)

// 把很长路径的文件名，解析处理 ./a/d/f/g/h/test.txt
const str1 = path.basename('./a/d/f/g/h/test.txt')
console.log(str1)

const str2 = path.extname('./a/d/f/g/h/test.txt')
console.log(str2)
