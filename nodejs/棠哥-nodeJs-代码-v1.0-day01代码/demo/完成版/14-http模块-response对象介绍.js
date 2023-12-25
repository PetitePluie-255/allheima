/* 
  response对象的常见属性和方法
    1、res.write(data)：给浏览器发送响应体，可以调用多次，从而提供连续的请求体
    2、res.end()：通知浏览器，所有响应头和响应体都已发送，即服务器将其视为已完成
    3、res.end(data)：结束请求，并且响应一段内容，相当于：res.write(data) + res.end()
    4、res.statusCode：响应状态码，如：200 404 500
    5、res.statusMessage：响应的状态信息，OK Not Found ，会根据statusCode自动设置
    6、res.setHeader(name,value)：设置响应头信息，比如：content-type
    7、res.writeHead(statusCode,statusMessage,option)：设置响应头，同时可以设置状态码和状态信息
*/ 

// 1、导入模块
const http = require('http')

// 2、创建服务器实例
const server = http.createServer()

// 3、监听端口
server.listen(3000,()=>{
  console.log('服务器创建完毕')
})

// 4、注册事件，处理响应
server.on('request',(req,res)=>{
  // req：请求的相关信息
  // req.headers 请求头
  // req.method  请求方式
  // req.url     请求地址 

  // 设置响应头相关内容----------------------------------------------
  // res.setHeader('Content-Type','text/html; charset=utf-8')

  // 设置响应状态码------------------------------------------------
  // if (req.url === '/index.html') {
  //   res.statusCode = 404
  //   res.statusMessage = 'no~no~no~'
  // }

  // 设置响应头的连写---------------------------------------------
  res.writeHead(404,'no~no~no~',{
    'Content-Type':'text/html; charset=utf-8',
    'aa':'bb'
  })

  // 响应结果给客户端-----------------------------------------------
  // res.end('hello~~~') // 相当于 res.write('hellow~~~') + res.end()

  // res.write('hello~~~')
  // res.write('hahaha~~~')
  // res.write('xixixi~~~')
  // res.end()

  res.end('<h1>棠哥真的帅呀</h1>')

})