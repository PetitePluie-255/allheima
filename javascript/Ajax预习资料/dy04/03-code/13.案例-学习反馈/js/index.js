/**
 * 需求1: 省份列表
 *  1. 获取数据
 *  2. 渲染数据
 * */
async function province() {
  const res = await axios({
    url: "https://hmajax.itheima.net/api/province",
  })
  const list = res.data.list
  document.querySelector(".province").innerHTML += list.map((ele) => `<option value="${ele}">${ele}</option>`).join("")

  //   document.querySelector(".area").innerHTML = `<option value="">地区</option>`
}
province()
/**
 * 需求2: 城市列表
 *  2.1 注册事件
 *  2.2 获取城市数据
 *  2.3 渲染数据
 *  2.4 清空地区列表
 * */
document.querySelector(".province").addEventListener("change", async function () {
  const pname = this.value
  console.log(this.value)
  const res = await axios({
    url: "https://hmajax.itheima.net/api/city",
    params: {
      pname,
    },
  })
  const list = res.data.list
  document.querySelector(".city").innerHTML = `<option value="">城市</option>`
  document.querySelector(".city").innerHTML += list.map((ele) => `<option value="${ele}">${ele}</option>`).join("")
  document.querySelector(".area").innerHTML = `<option value="">地区</option>`
})

/**
 * 需求3: 地区列表
 *  3.1 注册事件
 *  3.2 获取地区数据
 *  3.3 渲染数据
 * */
document.querySelector(".city").addEventListener("change", async function () {
  const pname = document.querySelector(".province").value
  const cname = this.value
  console.log(this.value)
  const res = await axios({
    url: "https://hmajax.itheima.net/api/area",
    params: {
      pname,
      cname,
    },
  })
  const list = res.data.list
  document.querySelector(".area").innerHTML += list.map((ele) => `<option value="${ele}">${ele}</option>`).join("")
})

/**
 * 需求4: 反馈提交
 *  4.1 注册事件
 *  4.2 收集表单数据并提交
 *  4.3 提示用户
 * */
document.querySelector(".btn-secondary").addEventListener("click", async function (e) {
  const form = document.querySelector("form")
  const data = serialize(form, { hash: true, empty: true })
  try {
    const res = await axios({
      url: "https://hmajax.itheima.net/api/feedback",
      method: "post",
      data,
    })
    alert(res.data.message)
    form.reset()
  } catch (error) {
    alert(error.response.data.message)
    form.reset()
  }
})
