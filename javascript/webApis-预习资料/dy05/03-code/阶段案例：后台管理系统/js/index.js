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

// todo 渲染功能

// todo 添加功能

// todo 编辑和删除功能
