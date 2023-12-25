/* 
  执行创建好的文件：
  在终端中：node 文件名

  注意点：node中是没有浏览器的DOM、BOM，因此如：document、window等内容是无法使用的。
*/
const str = 'hello world'
console.log(str)

// for (let i = 1; i <= 100; i++) {
//   console.log(i)
// }

// const box = document.querySelector('.box')
// console.log(box)

setInterval(function () {
  console.log('哈哈哈')
},1000)