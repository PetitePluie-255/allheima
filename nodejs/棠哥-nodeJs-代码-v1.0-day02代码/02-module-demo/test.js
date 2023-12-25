/* 
  在自定义模块中，设置的module.exports是可以暴露给其他模块的区域，因此如果需要让其他模块使用的变量、方法等成员需要挂载到module.exports中即可（本质就是一个对象）
*/

const age = 20
const fn = () => {
  console.log('我是test2.js中的函数')
}

// 导出
module.exports = {
  age,
  fn
}