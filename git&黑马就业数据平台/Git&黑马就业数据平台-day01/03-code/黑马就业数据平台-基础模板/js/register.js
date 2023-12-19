/*
 注册功能
 1. 给按钮添加点击事件
 2. 获取表单数据
 3. 判断表单数据 - 是否存在 / 长度是否符合规则

*/ 
document.querySelector('#btn-register').addEventListener('click',async function() {
  const data = serialize(document.querySelector('form'), { hash: true, empty: true })
  if (data.username === '' || data.password === '') {
    return showToast('账号或密码不能为空')
  }
  if (data.username.length < 8 || data.password.length < 6) {
    return showToast('账号或密码的长度不符合要求')
  }
  try {
    const res = await axios.post('/register', data)
    console.log(res);
    showToast(res.data.message)
    setTimeout(() => {
      location.href = './login.html'
    }, 1000);
  } catch (error) {
    showToast('登录异常')
  }
})