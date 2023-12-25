import aResult from './js/a.js'
import bResult from './js/b.js'
console.log(aResult.str)
console.log(bResult.str)
// 直接导入
import './css/index.css'
import './less/one.less'
// 导入的是小的图片
// import imgSrc from './images/01.jpg'
import imgSrc from './images/02.jpg'
// 引入字体图标
import './fonts/iconfont.css'

// 实现页面功能（隔行变色用js实现）
document.querySelectorAll('ul li').forEach((item,index)=>{
  if (index % 2 === 0) {
    item.style.color = 'red'
  } else {
    item.style.color = 'blue'
  }
})

// 用js的方式在网页中动态创建img，样式webpack是否可以打包图片
const img = document.createElement('img')
// 给img配置一个src路径
img.src = imgSrc
// 把创建好的img添加到body的内部
document.body.append(img)

// 语法降级
const fn = () => {
  console.log('我是一个高级的箭头函数')
}
fn()

console.log('我写了一个功能，看看对不对')
console.log('我写了一个功能，看看对不对')
console.log('哈哈哈哈哈哈')
