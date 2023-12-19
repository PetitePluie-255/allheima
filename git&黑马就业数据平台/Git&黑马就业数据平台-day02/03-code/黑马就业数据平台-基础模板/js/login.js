/*
 登录功能
 1. 给按钮添加点击事件
 2. 获取表单数据
 3. 判断表单数据 - 是否存在 / 长度是否符合规则

*/ 
document.querySelector('#btn-login').addEventListener('click',async function() {
  const data = serialize(document.querySelector('form'), { hash: true, empty: true })
  if (data.username === '' || data.password === '') {
    return showToast('账号或密码不能为空')
  }
  if (data.username.length < 8 || data.password.length < 6) {
    return showToast('账号或密码的长度不符合要求')
  }
  try {
    const res = await axios.post('/login', data)
    console.log(res);
    // 存储用户名 
    localStorage.setItem('username', res.data.data.username)
    // 存储token
    localStorage.setItem('token', res.data.data.token)
    // 提示用户
    showToast(res.data.message)
    // 跳转
    setTimeout(() => {
      location.href = './index.html'
    }, 1000);
    // JWT -> 用户认证方案
    // 登录 -> 用户名 + 密码 (张三 , 李四..) -> 下单 / 添加购物车  (不安全, 麻烦)
    // 通过一种方案 -> 找到可以替换用户名+密码...
    // token -> 身份令牌 -> base64加密字符串(双重加密) -> 
    // 后续: 每次请求接口 -> 都需要传递token -> 让后端知道你是谁

  } catch (error) {
    console.dir(error)
    showToast('登录异常, 请稍后再试')
  }
})