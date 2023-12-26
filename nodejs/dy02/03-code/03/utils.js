/**
 * 目标：基于 ECMAScript 标准语法，封装属性和方法并"命名"导出
 */
// export const baseURL = 'http://hmajax.itheima.net'
// export const getArraySum = (arr) => arr.reduce((sum, item) => (sum += item), 0)
const a = 10
const fn = (a, b) => a+b
export const c = {
    name: 'rose',
    age:20
}

export default {
    a,
    fn
}