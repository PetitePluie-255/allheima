// import { checkUserName, checkPassword } from "myUtils/check";
import { checkUserName, checkPassword } from "@/utils/check";
console.log('用户名', checkUserName('zhangsan'));
console.log('密码', checkPassword('zhangsan'));
import axios from 'axios'
// 注册功能 - 判断用户名和密码是否符合要求
document.querySelector('.login-btn').addEventListener('click', function() {
  // 获取用户名和密码
  const username = document.querySelector('.username').value
  const password = document.querySelector('.password').value
  // 判断用户名和密码是否符合要求 
  if (!checkUserName(username)) {
    return alert('用户名不符合要求')
  }
  if (!checkPassword(password)) {
    return alert('密码不符合要求')
  }
  console.log('通过校验, 可以登录')
  axios({
    url: 'https://hmajax.itheima.net/register',
    method: 'post',
    data: {
      username,
      password
    }
  }).then(res => {
    alert('注册成功')
  }).catch(err => {
    alert('注册失败')
  })

})

// 解析css
// import 变量名 from '模块路径'
// import { 变量名 } from '模块路径'
// 如果只是想执行某段代码 
import './css/index.css'
import './less/index.less'
// img设置src - 添加logo图片
import imgObj from './assets/logo.png'
document.querySelector('.logo-img').src = imgObj

// es6语法代码
const arr = [10, 20, 30]
const newArr = arr.map(ele => ele + 10)
// console.log('生成的数组', newArr);