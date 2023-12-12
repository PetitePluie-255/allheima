/*
  1. 点击登录 和 服务器通信
  2. 判断 用户名 和 密码的长度
  3. 提示信息
*/
function tip(message, flag = true) {
  // message 提示内容
  // flag true -> alert-success
  // flag false -> alert-danger
  const alertBox = document.querySelector('.my-alert')
  alertBox.innerHTML = message
  alertBox.classList.add(flag ? 'alert-success' : 'alert-danger')
  alertBox.classList.add('show')
  setTimeout(() => {
    alertBox.classList.remove(flag ? 'alert-success' : 'alert-danger')
    alertBox.classList.remove('show')
  }, 2000);
}



document.querySelector('.btn-login').addEventListener('click', () => {
  // 1. 获取用户名和密码
  // 2. 长度判断 - 用户名 最少8位 / 密码 最少6位
  // 3. axios发送请求
  // 4. 根据请求的结果, 提示用户 (函数封装)
  const username = document.querySelector('.username').value
  const password = document.querySelector('.password').value
  if (username.length < 8) {
    return tip('用户名不能小于8位~', false)
  }
  if (password.length < 6) {
    return tip('密码不能小于6位~', false)
  }

  axios({
    url: 'https://hmajax.itheima.net/api/login',
    method: 'post',
    data: {
      username,
      password
    }
  }).then(res => {
    console.log(res);
    tip(res.data.message)
  }).catch(err => {
    console.log(err)
    tip(err.response.data.message, false)
  })
})