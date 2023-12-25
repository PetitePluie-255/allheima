/* 
  按需导入：import { 导出成员名称1,导出成员名称2,... } from './模块.js'

  注意点：
    1、如果导出成员名称和当前模块变量名同名，可以使用as 重命名
    2、按需导入可以和默认导入一起使用
*/

// 只需要用到fn
import { fn, num as newNum, bb as newB } from "./04-按需导出.js"

const bb = '我是当前网页的bb'

fn()
console.log(bb)
console.log(newB)
console.log(newNum)

