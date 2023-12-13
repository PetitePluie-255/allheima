// 1. 获取用户数据
const creator = 'laozhang'
function getUserInfo() {
  axios({
    url: 'https://hmajax.itheima.net/api/settings',
    params: {
      creator
    }
  }).then(res => {
    const data = res.data.data
    console.log(data);
    // Object.keys(data) // [ 'avatar', 'desc' ]
    Object.keys(data).forEach(ele => {
      console.log(ele);
      if (ele === 'avatar') {
        // 头像
        document.querySelector('.avatar').src = data[ele]
      } else if (ele === 'gender') {
        // 1. 取出性别值 0  or 1
        const { gender } = data
        console.log(gender);
        // 2. 找到两个单选框 
        const genderRadios = document.querySelectorAll('.gender')
        console.log(genderRadios[1]);
        // 3. 通过性别值找到对应的项 设置checked为true, 变成选中状态
        genderRadios[gender].checked = true
      } else {
        document.querySelector(`.${ele}`).value = data[ele]
      }
    })
  })
}
getUserInfo()

// 3. 头像更改
document.querySelector('#upload').addEventListener('change', function (e) {
  const file = e.target.files[0]
  const data = new FormData()
  data.append('avatar', file)
  data.append('creator', creator)
  axios({
    url: 'https://hmajax.itheima.net/api/avatar',
    method: 'PUT',
    data
  }).then(res => {
    const avatar = res.data.data.avatar
    console.log(res);
    document.querySelector('.avatar').src = avatar
  })
})

// 创建弹框
const toastDom = document.querySelector('.toast')
const toast = new bootstrap.Toast(toastDom)

// 4. 提交
document.querySelector('.submit').addEventListener('click', function () {
  const data = serialize(document.querySelector('.user-form'), { hash: true, empty: true })
  data.gender = +data.gender
  console.log(data);
  axios({
    url: 'https://hmajax.itheima.net/api/settings',
    method: 'PUT',
    data: {
      ...data,
      creator
    }
  }).then(res => {
    console.log(res);
    toast.show()
  })
})