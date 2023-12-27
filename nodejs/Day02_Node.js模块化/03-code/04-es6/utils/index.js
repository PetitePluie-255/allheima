// 通过入口文件 index.js 将其他的模块 (arr.js 和 str.js) 进行聚合 供其他模块使用
// 既要导入 arr 和 str
// 还要导出 供server.js来使用

import { getArraySum } from './lib/arr.js'
import {
  checkUserName,
  checkPassWord
} from './lib/str.js'
console.log(getArraySum);
// 按需导出
// export {
//   getArraySum,
//   checkUserName,
//   checkPassWord
// }
// 默认导出
export default {
  getArraySum,
  checkUserName,
  checkPassWord
}