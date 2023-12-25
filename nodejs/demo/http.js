const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    res.end('hello,world')
})

server.listen(3000, () => {
    console.log('web 服务已启动')
})