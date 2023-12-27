export const checkUserName = (username) => {
  return username.length >= 8
}

export const checkPassword = (password) => {
  return password.length >= 6
}
