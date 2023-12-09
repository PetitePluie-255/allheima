function tip(msg = '提示消息') {
  const divBox = document.createElement('div')
  divBox.className = 'el-message el-message--success slideDown'
  divBox.style.zIndex = '100000'
  divBox.innerHTML = `<i class="el-message__icon el-icon-success"></i>
  <p class="el-message__content">${msg}</p>`
  document.querySelector('.el-message') && document.querySelector('.el-message').remove()
  document.body.prepend(divBox)
  // 3s后自动消失
  setTimeout(() => {
    // divBox.style.display = 'none'
    divBox.remove() 
  }, 3000);
}