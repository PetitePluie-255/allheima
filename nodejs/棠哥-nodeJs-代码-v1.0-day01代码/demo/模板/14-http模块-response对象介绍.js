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
