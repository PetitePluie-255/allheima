/**
 * 目标：基于 ECMAScript 标准语法，封装属性和方法并"命名"导出
 */
// 命名导出 / 按需导出
// export const baseURL = 'http://hmajax.itheima.net'
// export const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)
// const baseURL = 'http://hmajax.itheima.net'
// const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)
// export { 
//   baseURL,
//   getArraySum
//  }


//  需求: 将a和fn实现默认导出, c实现按需导出 
const a = 10
const fn = (a, b) => a + b
const c = { 
  name: 'rose',
  age: 20
}