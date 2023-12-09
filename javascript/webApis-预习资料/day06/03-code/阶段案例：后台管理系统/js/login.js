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
// 1. 文字高亮切换
tabs.forEach((ele, index) => {
  ele.addEventListener('click', function() {
    // 排他思想 
    // 交集选择器
    document.querySelector('.el-tabs__item.active').classList.remove('active')
    ele.classList.add('active')

    // line的切换
    // span - el-tabs__item  子父  (父级有定位)
    // 1. 点击时获取当前点击项的el-tabs__item 子元素 span标签
    // 2. 获取span标签距离父元素左侧的位置
    // 3. 将位置赋值给line ----> left
    // document.querySelector()
    // ele.querySelector() 查找ele的后代元素 - 查找精准
    line.style.left = ele.querySelector('span').offsetLeft + 'px'
    line.style.width = ele.querySelector('span').offsetWidth + 'px'

    // 底部盒子的切换
    document.querySelector('.el-tab-pane.show').classList.remove('show')
    tabPanes[index].classList.add('show')
  })
})


// todo 登录功能
btnLogin.addEventListener('click', function() {
  // 1. 校验手机号是否符合规则
  // phoneRes -> true 通过校验 / false 不通过校验
  const phoneRes = verifyPhone()
  // 2. 校验密码是否是admin123
  const pwdRes = verifyPwd()
  console.log(pwdRes, '密码校验的结果');
  // 3. 校验是否勾选用户协议
  if (!agree.checked) {
    agreeErrorMsg.innerHTML =  '请勾选协议'
  }
  // 4. 以上一一通过校验, 进行跳转 
  if (phoneRes && pwdRes && agree.checked) {
    // 跳转....
    tip('登录成功')
    setTimeout(() => {
      location.href = './index.html'
    }, 1000);
  }
})


// todo 切换显示密码
// 1. 手动删除icon-eye-close类
// 2. 给图标注册点击事件
// 3. toggle() 切换icon-eye-close类
// 4. 判断眼睛是否闭着
// 4.1 闭着 - 左侧输入框的type值text
// 4.2 睁着 - 左侧输入框的type值password
togglePass.addEventListener('click', function() {
  // toggle() 有 - 删除  / 没有 - 添加 
  const flag =  togglePass.classList.toggle('icon-eye-close')
  console.log(flag);
  if (flag) {
    // 闭着眼睛
    password.type = 'text'
  } else {
    password.type = 'password'
  }
  // password.type = flag ? 'text' : 'password'
  // password.type = togglePass.classList.toggle('icon-eye-close') ? 'text' : 'password'
})




// todo 勾选协议
agree.addEventListener('change', function() {
  agreeErrorMsg.innerHTML = this.checked ? '' : '请勾选协议'
})


// todo 手机号验证
// 1. 定义手机号正则
// 2. 手机号输入框注册change事件
// 3. 判断输入的内容是否符合规则
// 3.1 如果不符合 - 找到下一个兄弟节点 - 设置内容 手机号输入有误
// 3.2 如果符合 - 找到下一个兄弟节点 - 设置内容 为空
const phoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
// 根据封装函数的返回值
function verifyPhone() {
  if (!phoneReg.test(phone.value)) {
    // 没有通过校验
    phone.nextElementSibling.innerHTML = '手机号输入有误'
    return false  // 登录时获取到手机号校验的结果
  } else {
    // 通过校验
    phone.nextElementSibling.innerHTML = ''
    return true  // 登录时获取到手机号校验的结果
  }
}

phone.addEventListener('change', verifyPhone)


// todo 密码验证
// 约定的密码 admin123
function verifyPwd() {
  if (password.value !== 'admin123') {
    password.nextElementSibling.innerHTML = '密码输入有误'
    return false // 没有通过校验, return false
  } else {
    password.nextElementSibling.innerHTML = ''
    return true
  }
}
password.addEventListener('change', verifyPwd)

