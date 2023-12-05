// 获取元素
const submitBtn = document.querySelector('.submit') // 提交按钮
const usernameEl = document.querySelector('#username') // 用户名
const idcardEl = document.querySelector('#idcard') // 身份证
const ageEl = document.querySelector('#age') // 年龄
const mobileEl = document.querySelector('#mobile') // 手机号

// 1. 提交前的数据校验
submitBtn.addEventListener('click', function (e) {
  // 1.1 阻止button的默认行为
  e.preventDefault()
  // 1.2 清空所有错误信息
  clearAllError()

  // 1.3 校验数据
  let isAllValid = validateData()

  // 1.4 校验成功跳转页面
  if (isAllValid) {
    location.href = './success.html'
  }
})

function isUsernameValid() {
  let usernameReg = /^[\u4E00-\u9FA5]{2,4}$/
  return usernameReg.test(usernameEl.value.trim())
}

function isIdcardValid() {
  let idcardReg = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/
  return idcardReg.test(idcardEl.value.trim())
}

function isAgeValid() {
  let ageReg = /^(?:[0-9]|[1-9][0-9]|1[0-9]{2})$/
  return ageReg.test(ageEl.value.trim())
}

function isMobileValid() {
  let mobileReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  return mobileReg.test(mobileEl.value.trim())
}

function validateData() {
  // 1.3.1 校验用户名
  if (!isUsernameValid()) {
    showError('username', '用户名校验不通过，请输入1-4位的汉字')
  }

  // 1.3.2 校验身份证
  if (!isIdcardValid()) {
    showError('idcard', '请输入合法的身份证格式')
  }

  // 1.3.3 校验年龄
  if (!isAgeValid()) {
    showError('age', '请输入数字')
  }

  // 1.3.4 校验手机号
  if (!isMobileValid()) {
    showError('mobile', '请输入合法的手机号')
  }

  return isUsernameValid() && isIdcardValid() && isAgeValid() && isMobileValid()
}

function showError(id, msg) {
  let target = document.getElementById(id).nextElementSibling
  target.classList.remove('hide')
  target.innerText = msg
}

function clearAllError() {
  let errors = document.querySelectorAll('.form-error')
  errors.forEach(item => {
    item.classList.add('hide')
  })
}