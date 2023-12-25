/* 
  根据用户的请求，响应不同的内容
    1、/index.html  响应：这是一个首页
    2、/login.html  响应：这是一个登录页
    3、其他          响应：404 你访问的页面不存在 
*/

const http = require('http')

const server = http.createServer()

server.listen(3000,()=>{
  console.log('服务器已经开启')
})

server.on('request',(req,res)=>{
  // 先配置好响应相关信息
  res.setHeader('Content-Type','text/html;charset=utf-8')

  // 根据当前客户端访问的地址响应不同内容
  console.log(req.url)
  if (req.url === '/' || req.url === '/index.html') {
    res.end('这是一个首页')
  }
  else if (req.url === '/login.html') {
    res.end('这是一个登录页')
  }
  else {
    res.statusCode = 404
    res.end('你访问的页面不存在 ')
  }
})