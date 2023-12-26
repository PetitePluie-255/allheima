const { clear } = require("console")
const fs = require("fs")
const path = require("path")

fs.readFile(path.join(__dirname, "data/data.json"), (err, data) => {
  if (err) return console.log("读取文件失败", err)
  const male = []
  const female = []
  const str = data.toString()
  const obj = JSON.parse(str)
  obj.forEach((ele) => {
    if (ele.gender === "男") {
      male.push(ele)
    } else {
      female.push(ele)
    }
  })
  const maleData = JSON.stringify(male)
  const femaleData = JSON.stringify(female)
  fs.writeFile(path.join(__dirname, "男.json"), maleData, (err) => {
    if (err) return console.log("文件写入失败", err)
    console.log('写入成功');
  })
  fs.writeFile(path.join(__dirname, "女.json"),femaleData , (err) => {
    if (err) return console.log("文件写入失败", err)
    console.log("写入成功")
  })
})
