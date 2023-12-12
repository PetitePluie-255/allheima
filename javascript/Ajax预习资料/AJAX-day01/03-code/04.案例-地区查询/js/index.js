/*
  http://hmajax.itheima.net/api/area
  传递某个省份内某个城市的所有区县
  查询参数名：pname、cname
  pname说明：传递省份或直辖市名，比如 北京、湖北省…
  cname说明：省份内的城市，比如 北京市、武汉市…
  核心功能：查询地区，并渲染列表
*/
document.querySelector('.my-button').addEventListener('click', function () {
  // console.log('点了按钮')
  // 1. 获取表单的数据 省份 + 城市
  // 2. 通过axios插件发送请求
  // 3. params将两个数据传递过去
  // 4. .then() 接收地区数据
  // 5. 渲染 map + join()

  const pname = document.querySelector('.province').value
  const cname = document.querySelector('.city').value
  console.log(pname, cname);
  axios({
    // url: `http://hmajax.itheima.net/api/area?pname=${provinceValue}&cname=${cityValue}`
    url: `http://hmajax.itheima.net/api/area`,
    params: {
      // pname: pname,
      // 键值对同名的话, 可以简写
      pname, cname
    }
  }).then(res => {
    console.log(res);
    document.querySelector('.list-group').innerHTML = res.data.list.map(ele => `<li class="list-group-item">${ele}</li>`).join('')
  })

})
