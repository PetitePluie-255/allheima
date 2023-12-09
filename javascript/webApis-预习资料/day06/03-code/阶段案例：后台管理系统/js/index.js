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
      id: 5,
      username: '巴思慧',
      workNumber: '10004',
      time: '2022-08-24',
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
// 确认删除模态框
const dialogDel = new A11yDialog(document.querySelector('#modal-del'))
// 添加/编辑员工模态框
const dialog = new A11yDialog(document.querySelector('#modal')) 
// todo 渲染功能
// 1. 解构出data数组
let { data } = obj
// 2. 按照工号进行排序 a - b 升序 / b - a 倒叙  
data = data.sort((a, b) => b.workNumber - a.workNumber)
// 3. 封装渲染函数 render渲染
function render() {
  tbody.innerHTML = data.map(ele => {
    const { id,
      username,
      workNumber,
      time } = ele
    return `<tr class="el-table__row">
    <td class="is-center">
      <div class="cell"><span class="username">${username[0]}</span></div>
    </td>
    <td>
      <div class="cell">${username}</div>
    </td>
    <td>
      <div class="cell">${workNumber}</div>
    </td>
    <td>
      <div class="cell">${time}</div>
    </td>
    <td>
      <div class="cell">
        <button type="button" data-id=${id} class="el-button hm-text btn-edit">编辑</button>
        <button type="button" data-id=${id} class="el-button hm-text btn-del">删除</button>
      </div>
    </td>
  </tr>`
  }).join('')
}
render()
// todo 添加功能
btnAdd.addEventListener('click', function() {
  rowId = null // 添加时修改rowId的值 - 表明添加操作
  // 工号生成 
  // 1. 数组有length 取出数组中第一项 - 获取工号id  + 1 
  // 2. 否则 工号 10000 
  if (data.length) {
    workNumber.value = +data[0].workNumber + 1
  } else {
    workNumber.value = 10000
  }
  dialog.show()
})
// 添加/编辑员工信息 
// 1. 确定按钮 注册点击事件
btnOK.addEventListener('click', function() {
  // 2. 非空判断
  if (!username.value.trim()) {
    tip('员工姓名不能为空')
    return 
  }
  if (!time.value.trim()) {
    tip('入职时间不能为空')
    return 
  }

  // 根据rowId的值来判断操作 添加 or 编辑 
  if (rowId) {
    // 1. 通过rowId找到编辑的这一项
    const itemInfo = data.find(ele => ele.id === rowId)
    itemInfo.username = username.value
    itemInfo.time = time.value
    // 2. 提示用户
    tip('编辑成功')
  } else {
    // 3. 收集数据 添加到数组的开头
    const workObj = {
      id: + new Date(), // id必须是唯一的
      username: username.value,
      workNumber: workNumber.value,
      time: time.value
    }
    data.unshift(workObj)
    // 4. 提示用户
    tip('添加成功')
  }
  // 5. 重新渲染 
  render()
  // 6. 关闭对话框
  dialog.hide()


})

// 封装函数 - 控制滚动条的出现 or 隐藏 

function isLockScroll(flag = true) {
  document.documentElement.style.overflow = flag ? 'hidden' : ''
}

// 监听对话框的显示 
dialog.on('show', () => {
  isLockScroll()  // 隐藏滚动条
  // 根据rowId的值判断是编辑or添加
  // rowId有值 - 编辑
  // 否则就是添加
  dialogTitle.innerHTML = rowId ? '编辑员工信息' : '添加员工信息'
})

// 监听对话框的隐藏 
dialog.on('hide', () => {
  isLockScroll(false) // 显示滚动条
  // 清空表单内容 姓名 + 入职时间
  username.value = ''
  time.value = ''
})

// todo 编辑和删除功能
// 定义一个全局的变量 - rowId 操作员工的id 
// 必须是全局的 
let rowId 
tbody.addEventListener('click', function(e) {
  // 事件源 
  const target = e.target
    // 删除业务 
  if (target.classList.contains('btn-del')) {
    rowId = +target.dataset.id
    console.log('------删除业务', rowId);
    dialogDel.show()
  }
  // 编辑业务 - TODO
  if (target.classList.contains('btn-edit')) {
    rowId = + target.dataset.id
    console.log('------编辑业务', rowId);
    // 通过员工的id -> 获取员工的信息
    const itemInfo = data.find(ele => ele.id === rowId)
    console.log(itemInfo);
    // 数据回显
    const { username: username1, time: time1, workNumber: workNumber1 } = itemInfo
    username.value = username1 
    time.value = time1 
    workNumber.value = workNumber1 
    // username.value = itemInfo.username

    // 模态框显示
    dialog.show()
  }
})

// 确认删除
delOk.addEventListener('click', function() {
  // 删除选中的员工
  data = data.filter(ele => ele.id !== rowId)
  render() // 重新渲染
  // 关闭对话框
  dialogDel.hide()
  // 提示用户 - 函数调用 tip()
  tip('删除成功')
})
