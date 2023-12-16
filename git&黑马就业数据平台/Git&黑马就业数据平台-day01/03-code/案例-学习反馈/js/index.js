/**
 * 需求1: 省份列表
 *  1. 获取数据
 *  2. 渲染数据
 * */
async function getProvince() {
  const res = await axios({
    url: 'https://hmajax.itheima.net/api/province'
  }) 
  const list = res.data.list
  // console.log(list);
  const htmlStr = list.map(ele => {
    return `<option value="${ele}">${ele}</option>`
  }).join('')
  document.querySelector('.province').innerHTML = `<option value="">省份</option>${htmlStr}`
}
getProvince()



/**
 * 需求2: 城市列表
 *  2.1 注册事件
 *  2.2 获取城市数据
 *  2.3 渲染数据
 *  2.4 清空地区列表
 * */
document.querySelector('.province').addEventListener('change',async function() {
  // select的value值 等于选中option项的value值
  const res = await axios({
    url: 'https://hmajax.itheima.net/api/city',
    params: {
      pname: this.value
    }
  })
  console.log(res.data.list);
  const list = res.data.list
  const htmlStr = list.map(ele => {
    return `<option value="${ele}">${ele}</option>`
  }).join('')
  document.querySelector('.city').innerHTML = `<option value="">城市</option>${htmlStr}`
  // 清空区列表
  document.querySelector('.area').innerHTML = `<option value="">地区</option>`
})



/**
 * 需求3: 地区列表
 *  3.1 注册事件
 *  3.2 获取地区数据
 *  3.3 渲染数据
 * */
document.querySelector('.city').addEventListener('change',async function() {
  const res = await axios({
    url: 'https://hmajax.itheima.net/api/area',
    params: {
      pname: document.querySelector('.province').value,
      cname: this.value
    }
  })

  const list = res.data.list
  const htmlStr = list.map(ele => {
    return `<option value="${ele}">${ele}</option>`
  }).join('')
  document.querySelector('.area').innerHTML = `<option value="">地区</option>${htmlStr}`
})

/**
 * 需求4: 反馈提交
 *  4.1 注册事件
 *  4.2 收集表单数据并提交
 *  4.3 提示用户
 * */
document.querySelector('.submit').addEventListener('click',async function() {
  const form = document.querySelector('form')
  const data = serialize(form, { hash: true, empty: true })
  console.log(data);
  try {
    const res = await axios({
      url: 'https://hmajax.itheima.net/api/feedback',
      method: 'post',
      data
    })
    console.log(res);
    alert(res.data.message)
  } catch (error) {
    // console.log(error);
    alert(error.response.data.message)
  }
})
