// 1. 导入express包
const express = require('express')

// 2. 创建web服务对象
const server = express()

// 3. 监听请求方法和请求路径
server.get('/', (req, res) => {
  res.send('你好. express')
})

server.all('*', (req, res) => {
  res.status(404)
  res.send('404 ------')
})

// 4. 监听端口号 启动服务
server.listen(3000, () => {
  console.log('服务器启动成功了');
})
