/**
 * 目标：基于 ECMAScript 标准语法，"默认"导入，工具属性和方法使用
 */
// 默认导入 
// import 变量名 from '模块名或者路径'
import obj from './utils.js'
console.log(obj);
console.log(obj.baseURL);
console.log(obj.getArraySum([10,20,30]));