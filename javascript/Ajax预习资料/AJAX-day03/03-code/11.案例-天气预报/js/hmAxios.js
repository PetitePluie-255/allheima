function hmAxios(config) {
  // 2. 返回一个promise对象
  return new Promise((resolve, reject) => {
    // 3. xhr 创建 / 设置请求方式,请求地址 / 监听返回结果/ 发送请求 
    const xhr = new XMLHttpRequest()
    // 生成查询参数
    // 判断params是否存在
    if (config.params) {
      const params = new URLSearchParams(config.params)
      const query = params.toString()
      config.url += `?${query}`
    }
    xhr.open(config.method || 'get', config.url)
    xhr.addEventListener('loadend', () => {
      // console.log(xhr.response);
      // 4. 根据状态执行不同的函数 
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response))
      } else {
        reject(new Error(xhr.response))
      }
    })
    // 判断data属性是否存在
    if (config.data) {
      // 1. 设置请求头 
      xhr.setRequestHeader('Content-Type', 'application/json')
      // 2. 请求体数据携带 - 转成JSON字符串
      xhr.send(JSON.stringify(config.data))
    } else {
      xhr.send()
    }
  })
}
