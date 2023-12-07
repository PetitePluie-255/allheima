// 渲染页面
render()

function render() {
  // 获取邮件渲染的容器元素
  let mailList = document.querySelector('.mail-list')
  // 拼接字符串并通过给li添加unread或者read类名来显示邮件的状态
  let str = mails.map(item => (`
    <li class=${item.readStatus}>
      <div class="group">
        <div class="status" data-id=${item.id}>
          标记${item.readStatus === 'unread' ? '已读' : '未读'}
        </div>
        <article>
          <img src="${item.from.avatar}" alt="">
          <div class="mail-info">
            <div>
              <span class="from">${item.from.username}</span>
              <time>${item.time}</time>
            </div>
            <p>${item.content}</p>
          </div>
        </article>
      </div>
    </li>
  `))
    .join('')
  // 将字符串赋值给容器元素的innerHTML属性完成渲染
  mailList.innerHTML = str

  // 1. 初始化AlloyFinger插件
  initSwipe()

  // 2. 处理状态区块
  handleStatus()
}

function initSwipe() {
  // 2.1 为每一个li标签创建AlloyFinger实例，并传递配置项
  let lis = document.querySelectorAll('.mail-list li')
  lis.forEach(item => {
    // 2.2 在配置项中判断，如果是右滑，li标签添加active类名，如果是左滑，li标签移除active类名
    new AlloyFinger(item, {
      swipe: (evt) => {
        if (evt.direction === 'Right') {
          item.classList.add('active')
        }
        if (evt.direction === 'Left') {
          item.classList.remove('active')
        }
      }
    })
  })
}

function handleStatus() {
  let statusEls = document.querySelectorAll('.status')
  // 2.1 给所有邮件项绑定点击事件
  statusEls.forEach(status => {
    status.addEventListener('click', function (e) {
      // 2.2 点击事件中根据邮件id找到对应邮件
      let id = +e.target.dataset.id
      let mail = mails.find(item => item.id === id)
      // 2.3 修改对应邮件的状态
      mail.readStatus = mail.readStatus === 'unread' ? 'read' : 'unread'
      // 2.4 让状态区块缩回去之后再重新渲染页面
      e.target.parentNode.parentNode.classList.remove('active')
      setTimeout(() => { render() }, 300)
    })
  })
}
