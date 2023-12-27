// 通过入口文件 index.js 将其他的模块 (arr.js 和 str.js) 进行聚合 供其他模块使用
// 既要导入 arr 和 str
// 还要导出 供server.js来使用

// commonjs语法 
// 规范
// 导入 require()
// 导出 module.exports = {}
// 1. 先将arr模块和str模块中定义的函数进行导入
const arrObj = require('./lib/arr.js')
const strObj = require('./lib/str.js')
// console.log(arrObj);
// console.log(strObj);

// 2. 在进行导出
module.exports = {
  getArraySum: arrObj.getArraySum,
  checkUser: strObj.checkUser,
  checkPwd: strObj.checkPwd
}