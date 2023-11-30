function alertMsg(msg) {
  // console.log(msg)
  // 创建消息提示框标签结构
  // 创建标签
  const div = document.createElement('div')
  // 添加类名
  div.className = `el-message el-message--success slideDown`
  // 添加内容
  div.innerHTML = `
  <i class="el-message__icon el-icon-success"></i>
  <p class="el-message__content">${msg}</p>
  `
  // 追加节点到页面
  document.body.append(div)

  // 延迟消失
  setTimeout(() => {
    div.remove()
  }, 3000)
}
