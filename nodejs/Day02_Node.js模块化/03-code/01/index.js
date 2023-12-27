/**
 * 目标：基于 CommonJS 标准语法，导入工具属性和方法使用
 */
// 导入 require()
// 内置模块 - 官方提供的模块 fs  path http ....
// require('模块名')
// 自定义模块 - 自己定义/创建的js文件 a.js  / utils.js
// require('路径名')
const obj = require('./utils.js')
console.log(obj);
console.log(obj.baseURL);
console.log(obj.getArraySum([1,2,3]));