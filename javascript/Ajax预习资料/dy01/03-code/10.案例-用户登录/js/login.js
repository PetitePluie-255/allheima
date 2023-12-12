/*
  1. 点击登录 和 服务器通信
  2. 判断 用户名 和 密码的长度
  3. 提示信息
*/

// const { default: axios } = require("axios");
function tip(message, flag = true) {
  const alertBox = document.querySelector(".my-alert"); f3
  alertBox.innerHTML = message;
  alertBox.classList.add(flag ? "alert-success" : "alert-danger");
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove(flag ? "alert-success" : "alert-danger");
    alertBox.classList.remove("show");
  },2000);
}

document.querySelector(".btn-login").addEventListener("click", () => {
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  if (username.length < 8) {
    return tip("用户名不能小于8位",false);
  }
  if (password.length < 6) {
    return tip("用户名不能小于6位",false);
  }
  axios({
    url: "https://hmajax.itheima.net/api/login",
    method: "post",
    data: {
      username,
      password,
    },
  })
    .then((res) => {
      console.log(res);
      tip(res.data.message);
    })
    .catch((err) => {
      console.log(err);
      tip(err.response.data.message,false);
    });
});
