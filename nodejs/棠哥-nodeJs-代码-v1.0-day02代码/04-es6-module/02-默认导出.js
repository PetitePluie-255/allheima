/* 
  默认导出语法：export default 默认导出的成员

  注意点：如果默认导出多个数据，必须以对象的形式导出

  需求：导出当前模块的变量和函数
*/
const num = 10
const fn = function () {
   console.log('我是默认导出的函数')
}

// 导出
export default {
  num,
  fn
}


