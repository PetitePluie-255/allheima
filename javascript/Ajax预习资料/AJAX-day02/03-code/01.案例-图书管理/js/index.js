// 1. 图书列表渲染
// 1.1 封装函数 
// 1.2 通过接口文档 查看请求相关信息 
// 1.3 axios进行发送
// 1.4 获取数据 - 遍历 渲染即可
const creator = 'kimstar1'
function getBooks() {
  axios({
    url: 'https://hmajax.itheima.net/api/books',
    params: {
      creator
    }
  }).then(res => {
    const data = res.data.data
    console.log('图书数据', data);
    document.querySelector('.list').innerHTML = data.map((ele, index) => {
      const { id, bookname, author, publisher } = ele
      return ` <tr>
      <td>${ index + 1 }</td>
      <td>${bookname}</td>
      <td>${author}</td>
      <td>${publisher}</td>
      <td data-id=${id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`
    }).join('')
  })
}
getBooks()

// 创建添加图书弹框
const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)
// addModal.show()
// addModal.hide()


// 2. 增加图书
// 2.1 给增加按钮注册点击事件
// 2.2 收集表单的值 基于插件
// 2.3 发送请求 - 基于接口文档
// 2.4 弹框关闭 
// 2.5 清空表单内容
// 2.6 重新渲染
document.querySelector('.add-btn').addEventListener('click', function() {
  const form = document.querySelector('.add-form')
  // const data = serialize(表单对象, 可选的配置项)
  const data = serialize(form, { hash: true, empty: true })
  console.log(data);
  axios({
    url: 'https://hmajax.itheima.net/api/books',
    method: 'POST',
    data: {
      creator,
      ...data
    }
  }).then(res => {
    console.log(res);
    // 提示用户
    alert(res.data.message)
    // 关闭弹窗
    addModal.hide()
    // 清空表单内容
    form.reset() // 重置表单内容的值
    // 重新渲染
    getBooks()
  })
})

// 3. 删除图书
// 3.1 给删除按钮祖先元素注册点击事件 - 利用事件委托
// 3.2 通过事件对象e去筛选点击的元素 
// 3.3 发送请求 - 接口文档  通过id
// 3.4 提示用户 
// 3.5 重新渲染
document.querySelector('.list').addEventListener('click', function(e) {
  // 删除 
  const target = e.target
  // if (target.classList.contains('del')) {
  //   // 删除的业务
  // }
  if (!target.classList.contains('del')) return
  const id = target.parentNode.dataset.id
  axios({
    url: `https://hmajax.itheima.net/api/books/${id}`,
    method: 'delete'
  }).then(res => {
    alert('删除图书成功')
    getBooks()
  })
})

// 编辑弹框
const editModalDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editModalDom)

// 4. 编辑图书
// 4.1 获取图书数据
// 4.1.1 给编辑按钮注册事件 - 利用事件委托
// 4.1.2 获取编辑图书的id
// 4.1.3 发送请求 - 获取图书的数据
document.querySelector('.list').addEventListener('click', function(e) {
  const target = e.target
  if (!target.classList.contains('edit')) return
  const id = target.parentNode.dataset.id
  axios({
    url: `https://hmajax.itheima.net/api/books/${id}`,
    method: 'get'
  }).then(res => {
    const data = res.data.data
    console.log('编辑的图书数据', data);
    // 4.2 编辑弹框显示
    // 4.2.1 将获取到的图书信息 - 渲染弹框中
    // document.querySelector('.edit-form .bookname').value = data.bookname
    // console.log(Object.keys(data)); // 对象的键 - ['id', 'xxx']
    Object.keys(data).forEach(ele => {
      // console.log(ele); // id bookname author ...
      // console.log(data[ele]); // 表单元素的值 ...
      document.querySelector(`.edit-form .${ele}`).value = data[ele]
    })

    // 4.2.2 显示弹框
    editModal.show()
  })
})


// 4.3 保存修改
// 4.3.1 给修改按钮注册点击事件
// 4.3.2 明确知道编辑的图书 - 根据id
// 4.3.3 发送请求
// 4.3.4 关闭弹窗 + 重新渲染 + 清空表单
document.querySelector('.edit-btn').addEventListener('click', function() {
  const form = document.querySelector('.edit-form')
  const { id, ...data } = serialize(form, { hash: true, empty: true })
  console.log(id, data);
  axios({
    url: `https://hmajax.itheima.net/api/books/${id}`,
    method: 'put',
    data: {
      creator,
      ...data 
    }
  }).then(res => {
    editModal.hide()
    getBooks()
  })

})