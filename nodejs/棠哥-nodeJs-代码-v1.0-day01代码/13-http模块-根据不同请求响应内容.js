/* 
  根据用户的请求，响应不同的内容：
    /index.html      ——》响应：this is index.html
    /login.html      ——》响应：this is login.html
    /register.html   ——》响应：this is register.html
    其他地址          ——》响应： this is 404
*/
const http = require('http')
const server = http.createServer()
server.listen(3000,()=>{
  console.log('服务器已开启')
})
server.on('request',(req,res)=>{
  // 判断用户请求的路径 req.url
  if (req.url === '/index.html' || req.url === '/') {
    res.end('this is index.html')
  }
  else if (req.url === '/login.html') {
    res.end('this is login.html')
  }
  else if (req.url === '/register.html') {
    res.end('this is register.html')
  }
  else {
    res.end('this is 404')
  }
})