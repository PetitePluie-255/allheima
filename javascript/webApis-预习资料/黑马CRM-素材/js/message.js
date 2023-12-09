function showMessage({ message, time = 3000 } = {}) {
  // 创建消息提示之前，先把之前的消息提示给删除掉（如果有的前提下）
  document.querySelector('.message') &&
    document.querySelector('.message').remove()

  // 创建消息提示的容器
  const messageDiv = document.createElement('div')

  // 添加类名（slideDown 是向下展示的动画）
  messageDiv.classList.add('message', 'slideDown')

  messageDiv.style.zIndex = 99999
  messageDiv.innerHTML = `
    <i class="iconfont icon-checked"></i>
    <p class="message__content">${message}</p>
  `
  document.body.append(messageDiv)

  // 加延时器，自动关闭
  setTimeout(() => {
    messageDiv.remove()
  }, time)
}