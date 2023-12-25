/* 
  导入自定义模块，记得设置./

  nodeJS中设置了模块作用域，自定义模块内部定义的变量、方法等成员，只能在当前模块内部访问

  通过require导入的自定义模块，其实最终获取到的就是自定义模块中设定的module.exports（本质就是一个对象）

*/
// 需求：此时需要导入test.js模块，打印test.js模块中的age变量，并且调用test.js模块中的fn函数

// 导入test.js
const test = require('./test.js')
console.log(test)

console.log(test.age)
test.fn()


