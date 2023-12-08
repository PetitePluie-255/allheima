const btnLogin = document.querySelector('#btn-login')
const togglePass = document.querySelector('#togglePass')
const agree = document.querySelector('#agree')
const phone = document.querySelector('[name=phone]')
const password = document.querySelector('[name=password]')
const line = document.querySelector('.line')
const agreeErrorMsg = document.querySelector('.agreeMsg')
const tabs = document.querySelectorAll('.el-tabs__item')
const tabPanes = document.querySelectorAll('.el-tab-pane')

// todo tab栏切换
tabs.forEach((item, index) =>
  item.addEventListener('click', function () {
    // 导航高亮切换
    document.querySelector('.el-tabs__item.active').classList.remove('active')
    this.classList.add('active')

    // 底部内容切换
    document.querySelector('.el-tab-pane.show').classList.remove('show')
    tabPanes[index].classList.add('show')

    // 横线切换
    line.style.left = this.querySelector('span').offsetLeft + 'px'
    line.style.width = this.querySelector('span').offsetWidth + 'px'
  })
)

// todo 登录功能
btnLogin.addEventListener('click', () => {
  const res1 = verifyPhone()
  const res2 = verifyPwd()

  // 协议未勾选，出现提示消息
  if (!agree.checked) {
    agreeErrorMsg.innerHTML = '请勾选用户协议'
  }

  // 当勾选了协议 + 通过了 手机号、密码校验，页面跳转
  if (res1 && res2 && agree.checked) {
    location.href = './index.html'
  }
})

// todo 切换显示密码
togglePass.addEventListener('click', function () {
  // eye 图标切换
  const res = this.classList.toggle('icon-eye-close')
  // 密码框的type 类型切换
  password.type = res ? 'text' : 'password'
})

// todo 勾选协议
agree.addEventListener('change', function () {
  // 判断协议是否勾选， 文字消息提示
  agreeErrorMsg.innerHTML = this.checked ? '' : '请勾选用户协议'
})

// todo 手机号验证
const regPhone = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
// 使用 change事件进行表单验证
phone.addEventListener('change', verifyPhone)
function verifyPhone() {
  // 如果不符合条件则提示错误信息，并且返回 return false
  if (!regPhone.test(phone.value)) {
    phone.nextElementSibling.innerHTML = '请输入正确的手机号'
    return false
  }
  // 如果符合条件则返回 让 span 清空 return true
  phone.nextElementSibling.innerHTML = ''
  return true
}

// todo 密码验证
password.addEventListener('change', verifyPwd)
function verifyPwd() {
  if (password.value !== 'admin123') {
    password.nextElementSibling.innerHTML = '密码不正确'
    return false
  }
  // 如果符合条件则返回 让 span 清空 return true
  password.nextElementSibling.innerHTML = ''
  return true
}
