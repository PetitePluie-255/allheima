function hmAxios(config) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    if (config.params) {
      const params = new URLSearchParams(config.params)
      const query = params.toString()
      config.url += `?${query}`
    }

    xhr.open(config.method || 'get', config.url)
    xhr.addEventListener('loadend', () => {
      const status = xhr.status
      if (status >= 200 && status < 300) {
        resolve(JSON.parse(xhr.response))
      } else {
        console.log(xhr.response);
        reject(new Error(xhr.response))
      }
    })
    if (config.data) {
      const jsonData = JSON.stringify(config.data)
      xhr.send(jsonData)
      xhr.setRequestHeader('content-type', 'application/json')
    } else {
      xhr.send()
    }
  })
 }