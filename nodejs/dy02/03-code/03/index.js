/**
 * 目标：基于 ECMAScript 标准语法，"命名"导入，工具属性和方法使用
 */
// import { baseURL, getArraySum } from './utils.js'
// console.log(baseURL);
// console.log(getArraySum([21,31,21]));
import obj from './utils.js'
import {c} from './utils.js'

console.log(obj.a);
console.log(obj.fn(1,2));
console.log(c);