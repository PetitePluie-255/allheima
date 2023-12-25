import "./js/a.js"
import "./js/b.js"
// 引入css
import "./css/index.css"
// 引入less
import "./less/test.less"
// 导入图片
// import imgObj from './images/01.jpg'
import imgObj from "./images/02.gif"
// 导入iconfont.css
import "./fonts/iconfont.css"

// 创建图片，并且渲染到页面
const img = document.createElement("img")
img.src = imgObj
document.querySelector(".header").appendChild(img)

console.log("我是main.js中的主要功能")

// 隔行变色的功能
const lis = document.querySelectorAll("#app ul li")
lis.forEach((item, index) => {
  if (index % 2 === 0) {
    item.style.color = "red"
  } else {
    item.style.color = "green"
  }
})

// es6语法
const fn = () => {
  console.log("我是高宝宝的语法")
}
fn()
