// const { getArraySum } = require("./lib/arr.js")
// const { checkUser, checkPwd } = require("./lib/str.js")
// module.exports = {
//     getArraySum,
//     checkUser,
//     checkPwd
// }
import arrObj from "./lib/arr.js"
import strObj from "./lib/str.js"
export default {
  getArraySum: arrObj.getArraySum,
  checkUser: strObj.checkPassWord,
  checkPwd:strObj.checkPassWord,
}
