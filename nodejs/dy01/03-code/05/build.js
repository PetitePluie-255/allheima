/**
 * 目标二：压缩 js 里代码，并整合到 html 中一起运行
 *  2.1 读取 public/index.js 内容
 *  2.2 使用正则替换内容字符串里的，回车符\r 换行符\n 打印语句console.log('xxx');
 *  2.3 确认后，拼接 html 内容写入到 dist/index.html 内
 */
const fs = require("fs")
const path = require("path")
fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  if (err) return console.log("文件读取失败", err)
  const htmlStr = data.toString()
  const result = htmlStr.replace(/\r\n/g, "")
    fs.readFile(path.join(__dirname, "public", 'index.js'), (err, data) => {
        if(err) return console.log('文件读取失败',err);
        const jsStr = data.toString()
        const jsResult = jsStr.replace(/\r\n/g, '').replace(/console.log\('.+?'\);/g, '').replace(/console.log\(.+?\);/,'')
        const  scriptSrc = `<script>${jsResult}</script>`
        fs.writeFile(path.join(__dirname, "dist", "index.html"), result+scriptSrc, (err) => {
            if (err) return console.log('文件写入失败', err);
            console.log('文件写入成功');
        })
    })

})