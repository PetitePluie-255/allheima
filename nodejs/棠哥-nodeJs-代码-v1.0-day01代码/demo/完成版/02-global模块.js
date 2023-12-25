/* 
  window：浏览器中的全局对象
  global：node中的全局对象
  注意点：在node中，因为global是全局对象，所以global中的属性和方法，不需要引入，直接使用

  停止执行：ctrl + c

  __dirname：当前文件夹所处的绝对路径
  __filename：当前文件的完整路径，包含当前文件名
*/

// 开启延时器
// setTimeout(function () {
//   console.log("你好鸭")
// }, 1000)

// 开启定时器
// setInterval(function () {
//    console.log('大宝天天见')
// },1000)

// 当前文件夹所处的绝对路径
console.log(__dirname)

// 当前文件的完整路径，包含当前文件名
console.log(__filename)


