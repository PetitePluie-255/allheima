/**
 * 需求: 获取所有分类数据并同时渲染到页面上
 *  1. 获取一级商品分类
 *  2. 获取所有二级商品分类
 *  3. 渲染数据
 * */
async function productClassification() {
  const res = await axios({
    url: "https://hmajax.itheima.net/api/category/top",
  })
  console.log(res)
  const data = res.data.data
  const pData = data.map((ele) => {
    const { id } = ele
    return axios({
      url: "https://hmajax.itheima.net/api/category/sub",
      params: {
        id,
      },
    })
  })
  console.log(pData)
  const p = Promise.all(pData)
  p.then((res) => {
    console.log(res)
    const arr = res.map((ele) => {
      const { children, name } = ele.data.data
      return `<div class="item">
        <h3>${name}</h3>
        <ul>
          ${children.map((v) => {
              return `<li>
            <a href="javascript:;">
              <img src="${v.picture}" />
              <p>${v.name}</p>
            </a>
          </li>`
          }).join("")
        }
        </ul>
      </div>`
    })
    document.querySelector(".sub-list").innerHTML = arr.join("")
  })
}
productClassification()
