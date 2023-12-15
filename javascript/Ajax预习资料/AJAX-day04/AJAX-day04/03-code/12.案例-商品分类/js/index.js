/**
 * 需求: 获取所有分类数据并同时渲染到页面上
 *  1. 获取一级商品分类
 *  2. 获取所有二级商品分类
 *  3. 渲染数据
 * */

async function getTopCategory() {
  // 获取一级商品分类
  const res = await axios({
    url: 'https://hmajax.itheima.net/api/category/top'
  })
  const data = res.data.data
  // console.log(data);
  const pData = data.map(ele => {
    const { id } = ele
    return axios({
      url: 'https://hmajax.itheima.net/api/category/sub',
      params: {
        id
      }
    })
  })

  // console.log(pData);
  // 目标: 得到一个数组, 数组中的每一项是promise对象
  // const pData = [promise对象, promise对象]
  Promise.all(pData).then(res => {
    console.log(res);
    const htmlAStr = res.map(ele => {
      const { children, name } = ele.data.data
      console.log(children, name);
      return `
      <h3>${name}</h3>
      <ul>
      ${children.map(v => {
        return `<li>
        <a href="javascript:;">
          <img src="${v.picture}" />
          <p>${v.name}</p>
        </a>
      </li>`
      }).join('')}
      </ul>
      `
    }).join('')
    document.querySelector('.sub-list').innerHTML = htmlAStr
  })
}

getTopCategory()