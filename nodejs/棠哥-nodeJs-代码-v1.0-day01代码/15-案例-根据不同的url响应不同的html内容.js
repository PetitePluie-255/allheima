/* 
  根据用户的请求，响应不同的内容
    1、/index.html  响应：这是一个首页
    2、/login.html  响应：这是一个登录页
    3、其他          响应：404 你访问的页面不存在 
*/
const http = require('http')
const server = http.createServer()
server.listen(3000,()=>{
  console.log('服务器已开启')
})
server.on('request',(req,res)=>{
  // 配置响应头
  res.setHeader('Content-Type','text/html;charset=utf-8')

  if (req.url === '/index.html' || req.url === '/') {
    res.end('<h1>这个一个大首页</h1>')
  }
  else if (req.url === '/login.html') {
    res.end('<h1>这是一个登录页</h1>')
  }
  else {
    res.end('<h1>这是404</h1>')
  }

})