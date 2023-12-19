// 配置axios的基地址
axios.defaults.baseURL = 'https://hmajax.itheima.net'
// 轻提示函数封装
function showToast(msg) {
  const toastDom = document.querySelector('.toast')
  const toastEl = new bootstrap.Toast(toastDom)
  // TODO 修改显示内容
  document.querySelector('.toast-body').innerHTML = msg
  // 显示提示框
  toastEl.show()
}
// 判断token是否存在
function checkLogin() {
  // 1. 从本地中取出token
  // 2. 判断token是否存在
  // 3. 如果不存在
  // 3.1 提示用户
  // 3.2 跳转到登录页
  const token = localStorage.getItem('token')
  if (!token) {
    showToast('请重新登录!')
    setTimeout(() => {
      location.href = './login.html'
    }, 1000);
  }
}
// 读取并渲染用户名
function renderUserName() {
  // 1. 从本地中取出用户名
  const username = localStorage.getItem('username')
  // 2. 找到页面中某元素
  const usernameDom = document.querySelector('.username')
  // 3. 渲染
  usernameDom.innerHTML = username
}
// 退出登录
function logout() {
  document.querySelector('#logout').addEventListener('click', function() {
    const isConfirm = confirm('确认要删除么?')
    if (isConfirm) {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      setTimeout(() => {
        location.href = './login.html'
      }, 500);
    }
  })
}