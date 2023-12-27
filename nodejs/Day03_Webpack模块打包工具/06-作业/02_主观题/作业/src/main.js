import { checkUserName, checkPassword } from "./utils/check"

import "css/index.css"
import "less/index.less"
import imgObj from "logo/logo.png"
import axios from "axios"

document.querySelector(".logo-img").src = imgObj

document.querySelector(".login-btn").addEventListener("click", function () {
    const username = document.querySelector(".username").value
    const password = document.querySelector(".password").value
    
    if (!checkUserName(username)) {
        return alert("用户名不符合规则")
    }
    if (!checkPassword(password)) {
        return alert("密码不符合规则")
    }
    
    console.log("请问请问")
    axios({
      url: "https://hmajax.itheima.net/api/register",
      method: "post",
      data: {
        username,
        password,
      },
    }).then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
})

const arr = [1, 232, 32]
const newArr = arr.map((ele) => ele + 10)
console.log(newArr)
//production