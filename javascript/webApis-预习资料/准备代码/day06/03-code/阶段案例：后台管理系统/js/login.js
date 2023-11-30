// 登录按钮
const btnLogin = document.querySelector('#btn-login')

// 切换显示隐藏密码按钮
const togglePass = document.querySelector('#togglePass')

// 同意协议复选框
const agree = document.querySelector('#agree')

// 协议的 错误提示
const agreeErrorMsg = document.querySelector('.agreeMsg')

// 手机号
const phone = document.querySelector('[name=phone]')

// 密码框
const password = document.querySelector('[name=password]')

// 滑块
const line = document.querySelector('.line')

// tab栏
const tabs = document.querySelectorAll('.el-tabs__item')

// tab内容面板
const tabPanes = document.querySelectorAll('.el-tab-pane')

// todo tab栏切换
tabs.forEach((ele, index) => {
  // console.log(ele)
  ele.addEventListener('click', function () {
    // 文字高亮显示
    document.querySelector('.el-tabs__item.active').classList.remove('active')
    this.classList.add('active')

    // 边框线的滑动
    line.style.left = ele.querySelector('span').offsetLeft + 'px'
    line.style.width = ele.querySelector('span').offsetWidth + 'px'

    // 内容切换
    // 大盒子如何知道点击的是那个小盒子 => 下标
    document.querySelector('.show').classList.remove('show')
    tabPanes[index].classList.add('show')
  })
})

// todo 登录功能
btnLogin.addEventListener('click', function () {
  // 验证手机号码
  const regTel = /^(?:(?:\+|00)86)?1\d{10}$/
  // 验证成功 返回 true  如果不成功 返回false
  if (!regTel.test(phone.value)) {
    phone.nextElementSibling.innerHTML = '请输入11位手机号码'
    return
  } else {
    phone.nextElementSibling.innerHTML = ''
  }

  // 密码验证 admin123
  if (password.value !== 'admin123') {
    password.nextElementSibling.innerHTML = '请输入正确的密码'
    return
  } else {
    password.nextElementSibling.innerHTML = ''
  }

  // 勾选协议 checked 选中 返回 true  否则返回false
  // console.log(agree.checked)
  if (!agree.checked) {
    agreeErrorMsg.innerHTML = '请勾选使用协议'
    return
  } else {
    agreeErrorMsg.innerHTML = ''
  }

  // 提示
  alertMsg('登录成功')
  // 页面跳转
  setTimeout(() => {
    location.href = 'index.html'
  }, 2000)
})

// todo 切换显示密码
// 声明变量 存储值 为后期判断做准备
// let flag = false
// togglePass.addEventListener('click', function () {
//   // console.log(111)
//   flag = !flag

//   // 眼睛的样式设置
//   this.classList.toggle('icon-eye-close')
//   // 显示和隐藏 密码
//   password.type = flag ? 'text' : 'password'
// })

togglePass.addEventListener('click', function () {
  // console.log(111)

  // 眼睛的样式设置
  let flag = this.classList.toggle('icon-eye-close')
  console.log(flag)
  // 显示和隐藏 密码
  password.type = flag ? 'password' : 'text'
})
