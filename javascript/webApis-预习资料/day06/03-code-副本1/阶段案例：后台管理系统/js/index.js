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
const dialog = new A11yDialog(document.querySelector('#modal'))


// todo 渲染功能
let { data } = obj
data = data.sort((a,b) => b.workNumber - a.workNumber)
console.log(data);
function render() {
  tbody.innerHTML = data.map(ele=> {
    const {id,
      username,
      workNumber,
      time  } = ele
      return  ` <tr class="el-table__row">
      <td class="is-center">
      <div class="cell"><span class="username">${username.substring(0, 1)}</span></div>
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
  rowId = null
  if (data.length) {
    workNumber.value = +data[0].workNumber + 1
  } else {
    workNumber.value = 10000
  }
  dialog.show()
})

btnOK.addEventListener('click',function() {
  if (!username.value.trim()) {
    return tip('姓名不能为空')
  } 
  if (!time.value.trim()) {
    return tip('入职时间不能为空')
  }

  if (rowId) {
    const item = data.find(ele => ele.id === rowId)
    console.log(item);
    item.username = username.value
    item.time = time.value
    item.workNumber = workNumber.value
    tip('编辑成功')
  } else {
    const formObj = {
      id: +new Date(),
      username: username.value,
      workNumber: workNumber.value,
      time: time.value
    }
    data.unshift(formObj)
    tip('添加成功')
  }
  render()
  dialog.hide()
})

// todo 编辑和删除功能
let rowId 
const dialogDel = new A11yDialog(document.querySelector('#modal-del'))
tbody.addEventListener('click', function(e) {
  const target = e.target
  if (target.classList.contains('btn-del')) {
    rowId = + target.dataset.id
    dialogDel.show()
  }

  if (target.classList.contains('btn-edit')) {
    rowId = + target.dataset.id
    const item = data.find(ele => ele.id === rowId)
    console.log(item);
    username.value = item.username
    time.value = item.time
    workNumber.value = item.workNumber
    dialog.show()
  }
})

delOk.addEventListener('click', function() {
  console.log(rowId);
  data = data.filter(ele => ele.id !== rowId)
  render()
  dialogDel.hide()
  tip('删除成功')
})


function isLockScroll(flag = true) {
  document.documentElement.style.overflow = flag ? 'hidden': ''
}

dialog.on('show', function() {
  dialogTitle.innerHTML = rowId ? '编辑员工信息' : '添加员工信息'
  isLockScroll(true)
})
dialog.on('hide', function() {
  isLockScroll(false)
  username.value = ''
  workNumber.value = ''
  time.value = ''
})
