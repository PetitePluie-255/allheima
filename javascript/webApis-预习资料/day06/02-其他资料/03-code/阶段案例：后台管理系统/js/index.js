// 提供的数据
const obj = {
  success: true,
  code: 10000,
  data: [
    {
      id: 1,
      username: '管理员',
      workNumber: '10000',
      time: '2022-10-24',
    },
    {
      id: 2,
      username: '孙财',
      workNumber: '10001',
      time: '2022-09-24',
    },
    {
      id: 3,
      username: '罗晓晓',
      workNumber: '10002',
      time: '2022-08-24',
    },
    {
      id: 4,
      username: '文吉星',
      workNumber: '10003',
      time: '2022-08-25',
    },
    {
      id: 5,
      username: '巴思慧',
      workNumber: '10004',
      time: '2022-08-24',
    },
    {
      id: 6,
      username: '乔海',
      workNumber: '10005',
      time: '2022-08-22',
    },
    {
      id: 7,
      username: '董昊空',
      workNumber: '10006',
      time: '2022-08-24',
    },
    {
      id: 8,
      username: '周乐天',
      workNumber: '10007',
      time: '2022-07-24',
    },
    {
      id: 9,
      username: '吕勇锐',
      workNumber: '10008',
      time: '2022-08-17',
    },
    {
      id: 10,
      username: '袁永安',
      workNumber: '10009',
      time: '2022-08-24',
    },
  ],
  message: '获取员工列表成功',
}

// 解构需要的数据
let { data } = obj
// 把解构的data数据按照工号来降序排序
data.sort((a, b) => b.workNumber - a.workNumber)

// 获取表单元素
const tbody = document.querySelector('#tbody')
const btnAdd = document.querySelector('#btn-add')
const btnOK = document.querySelector('#btn-ok')

// 确认删除
const delOk = document.querySelector('#del-ok')

// 模态框表单系列元素
const form = document.querySelector('#form')
const username = form.querySelector('.username')
const workNumber = form.querySelector('.workNumber')
const time = form.querySelector('.time')

// 模态框标题
const dialogTitle = document.querySelector('#my-dialog-title')

// todo 渲染功能
render()
function render() {
  const res = data
    .map((item) => {
      const { id, username, workNumber, time } = item

      return `
          <tr class="el-table__row">
            <td class="is-center">
                <span class="username">${username[0]}</span>
            </td>
            <td>${username}</td>
            <td>${workNumber}</td>
            <td>${time}</td>
            <td>
              <button type="button" class="el-button hm-text btn-edit" data-id="${id}">
                编辑
              </button>
              <button type="button" class="el-button hm-text btn-del" data-id="${id}">
                删除
              </button>
            </td>
          </tr>
      `
    })
    .join('')

  tbody.innerHTML = res
}

// 初始化模态框
const dialog = new A11yDialog(document.querySelector('#modal'))
const dialogDel = new A11yDialog(document.querySelector('#modal-del'))

// ! 记录编辑id（当编辑按钮的时候，需要记录编辑的id，以便知道在编辑哪个数据，另外还可以根据该id的有无来得知是添加还是编辑功能，用于设置模态框标题）
//   rowId 数据非常重要，需要重点理解上面记录的作用
let rowId

// todo 监听模态框的显示
dialog.on('show', () => {
  // 处理模态框标题
  dialogTitle.innerHTML = rowId ? '编辑员工信息' : '添加员工信息'

  // 滚动锁
  isLockScroll()
})

// todo 监视模态框的隐藏
dialog.on('hide', () => {
  // 关闭modal，重置表单元素
  username.value = ''
  workNumber.value = ''
  time.value = ''

  // 解除滚动锁
  isLockScroll(false)
})

// todo 添加功能（模态框）
btnAdd.addEventListener('click', () => {
  // 处理rowId，来记录是添加功能
  rowId = null

  // 处理工号
  if (data.length) {
    // 如果data数组存在，取第一个员工的工号 +1
    workNumber.value = +data[0].workNumber + 1
  } else {
    // 数组空了，工号默认10000起步
    workNumber.value = 10000
  }

  dialog.show()
})

// todo 确认编辑和删除功能（事件委托）
tbody.addEventListener('click', (e) => {
  // todo 编辑功能（模态框）
  if (e.target.classList.contains('btn-edit')) {
    // 获取id
    const id = +e.target.dataset.id

    // 处理标识，来记录是编辑功能
    rowId = id

    // 回显数据 ==> 根据id查找数据，输入框中回显展示
    const itemInfo = data.find((item) => item.id === id)
    username.value = itemInfo.username
    workNumber.value = itemInfo.workNumber
    time.value = itemInfo.time

    // 显示模态框
    dialog.show()
  }

  // todo 删除功能
  if (e.target.classList.contains('btn-del')) {
    // 处理标识，来记录是删除哪个数据
    rowId = +e.target.dataset.id
    // 出现询问框
    dialogDel.show()
  }
})

// todo 确认删除功能
delOk.addEventListener('click', () => {
  // filter 过滤出不是该id的数据
  data = data.filter((item) => item.id !== rowId)
  // 重新渲染
  render()
  // 隐藏询问框
  dialogDel.hide()
  // 轻提示
  showMessage({ message: '删除成功' })
})

// todo 添加，编辑 表单确认按钮
btnOK.addEventListener('click', () => {
  // 需要根据rowId来判断是添加还是编辑
  if (rowId) {
    // ! 编辑功能 ==> 根据id查找数据，更新该数据
    const itemInfo = data.find((item) => item.id === rowId)

    itemInfo.username = username.value.trim()
    itemInfo.workNumber = workNumber.value.trim()
    itemInfo.time = time.value.trim()
    showMessage({ message: '编辑成功' })
  } else {
    // ! 添加功能
    data.unshift({
      id: +new Date(), // 以时间戳作为id，确保唯一
      username: username.value.trim(),
      workNumber: workNumber.value.trim(),
      time: time.value.trim(),
    })
    // 轻提示
    showMessage({ message: '添加成功' })
  }

  render()
  dialog.hide()
})

// todo 滚动锁（阻止页面滚动，避免出现滚动条）
function isLockScroll(flag = true) {
  document.documentElement.style.overflow = flag ? 'hidden' : ''
}

// todo 创建消息提示(简单版本)    showMessage({message, time})
function showMessage({ message, time = 3000 } = {}) {
  // 创建消息提示之前，先把之前的消息提示给删除掉（如果有的前提下）
  document.querySelector('.el-message--success') &&
    document.querySelector('.el-message--success').remove()

  // 创建消息提示的容器
  const messageDiv = document.createElement('div')

  // 添加类名（slideDown 是向下展示的动画）
  // messageDiv.classList.add('el-message', 'el-message--success', 'slideDown')

  // 或者直接className赋值类名
  messageDiv.className = 'el-message el-message--success slideDown'

  // 内容
  messageDiv.innerHTML = `
    <i class="el-message__icon el-icon-success"></i>
    <p class="el-message__content">${message}</p>
  `

  // 添加到页面上
  document.body.append(messageDiv)

  // 加延时器，自动关闭
  setTimeout(() => {
    messageDiv.remove()
  }, time)
}
