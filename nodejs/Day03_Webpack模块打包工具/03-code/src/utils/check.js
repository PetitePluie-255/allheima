// 检测用户名的长度
export const checkUserName = (username) => {
  return username.length >= 8
}

// 检测密码的长度

export const checkPassword = (pwd) => {
  return pwd.length >= 6
}

