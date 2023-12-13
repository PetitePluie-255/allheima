/*
  1. 上传图片功能 
  1.1 给input注册change事件
  1.2 获取上传的图片
  1.3 生成一个FormData对象
  1.4 将获取的图片信息 方到对象中
  1.5 完成上传操作
*/ 
document.querySelector('#upload').addEventListener('change', function(e) {
  // console.log(e);
  const file = e.target.files[0]
  const data = new FormData()
  data.append('img', file)
  axios({
    url: 'https://hmajax.itheima.net/api/uploadimg',
    method: 'POST',
    data
  }).then(res => {
    const url = res.data.data.url
    console.log(url);
    document.body.style.backgroundImage = `url(${url})`
    // 2.1 将图片地址存到本地
    localStorage.setItem('url', url)
  })
})

// 2.2 一进入页面 判断本地存储中是否存在url 图片信息
// 2.2.1 如果存在, 取出来
const url = localStorage.getItem('url')
// console.log(url);
// if (url) {
//   document.body.style.backgroundImage = `url(${url})`
// }
url && (document.body.style.backgroundImage = `url(${url})`)